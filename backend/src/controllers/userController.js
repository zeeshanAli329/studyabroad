// const prisma = require('../config/database');
// const bcrypt = require('bcryptjs');

// const createUser = async (req, res) => {
//   try {
//     const { email, username, name, role, password, confirmPassword } = req.body;

//     // Validation
//     if (!email || !username || !name || !role || !password || !confirmPassword) {
//       return res.status(400).json({ error: 'All fields are required' });
//     }

//     if (password !== confirmPassword) {
//       return res.status(400).json({ error: 'Passwords do not match' });
//     }

//     if (password.length < 6) {
//       return res.status(400).json({ error: 'Password must be at least 6 characters' });
//     }

//     // Check for existing email
//     const existingEmail = await prisma.user.findUnique({
//       where: { email }
//     });

//     if (existingEmail) {
//       return res.status(400).json({ error: 'Email already in use' });
//     }

//     // Check for existing username
//     const existingUsername = await prisma.user.findUnique({
//       where: { username }
//     });

//     if (existingUsername) {
//       return res.status(400).json({ error: 'Username already in use' });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create user
//     const user = await prisma.user.create({
//       data: {
//         email,
//         username,
//         name,
//         role,
//         password: hashedPassword
//       },
//       select: {
//         id: true,
//         email: true,
//         username: true,
//         name: true,
//         role: true,
//         createdAt: true,
//         updatedAt: true
//       }
//     });

//     // Create notification for all admins about new user
//     const admins = await prisma.user.findMany({
//       where: { role: { in: ['ADMIN', 'SUPER_ADMIN'] } }
//     });

//     for (const admin of admins) {
//       await prisma.notification.create({
//         data: {
//           title: 'New User Created',
//           message: `${name} (${email}) has been added as ${role}.`,
//           type: 'user',
//           userId: admin.id,
//           resourceId: user.id,
//           resourceType: 'User'
//         }
//       });
//     }

//     res.status(201).json(user);
//   } catch (error) {
//     console.error('Error creating user:', error);
//     res.status(500).json({ error: 'Failed to create user' });
//   }
// };

// const getAllUsers = async (req, res) => {
//   try {
//     const users = await prisma.user.findMany({
//       select: {
//         id: true,
//         email: true,
//         username: true,
//         name: true,
//         role: true,
//         createdAt: true,
//         updatedAt: true,
//       },
//       orderBy: { createdAt: 'desc' }
//     });

//     res.json(users);
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     res.status(500).json({ error: 'Failed to fetch users' });
//   }
// };

// const getUserById = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const user = await prisma.user.findUnique({
//       where: { id },
//       select: {
//         id: true,
//         email: true,
//         username: true,
//         name: true,
//         role: true,
//         createdAt: true,
//         updatedAt: true,
//       }
//     });

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     res.json(user);
//   } catch (error) {
//     console.error('Error fetching user:', error);
//     res.status(500).json({ error: 'Failed to fetch user' });
//   }
// };

// const updateUser = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { email, username, name, role, password, confirmPassword } = req.body;

//     // Check if user exists
//     const existingUser = await prisma.user.findUnique({
//       where: { id }
//     });

//     if (!existingUser) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     // Validate email if changed
//     if (email && email !== existingUser.email) {
//       const emailExists = await prisma.user.findUnique({
//         where: { email }
//       });

//       if (emailExists) {
//         return res.status(400).json({ error: 'Email already in use' });
//       }
//     }

//     // Validate username if changed
//     if (username && username !== existingUser.username) {
//       const usernameExists = await prisma.user.findUnique({
//         where: { username }
//       });

//       if (usernameExists) {
//         return res.status(400).json({ error: 'Username already in use' });
//       }
//     }

//     // Validate password if provided
//     if (password || confirmPassword) {
//       if (!password || !confirmPassword) {
//         return res.status(400).json({ error: 'Both password fields are required when changing password' });
//       }

//       if (password !== confirmPassword) {
//         return res.status(400).json({ error: 'Passwords do not match' });
//       }

//       if (password.length < 6) {
//         return res.status(400).json({ error: 'Password must be at least 6 characters' });
//       }
//     }

//     // Prevent self-lockout
//     const currentUser = req.user;
//     if (currentUser.id === id) {
//       if (role && role !== 'ADMIN' && role !== 'SUPER_ADMIN') {
//         return res.status(403).json({ error: 'Cannot remove your own admin access' });
//       }
//     }

//     // Build update data
//     const updateData = {};
//     if (email) updateData.email = email;
//     if (username !== undefined) updateData.username = username;
//     if (name !== undefined) updateData.name = name;
//     if (role) updateData.role = role;

//     // Hash password if provided
//     if (password) {
//       const hashedPassword = await bcrypt.hash(password, 10);
//       updateData.password = hashedPassword;
//     }

//     // Update user
//     const updatedUser = await prisma.user.update({
//       where: { id },
//       data: updateData,
//       select: {
//         id: true,
//         email: true,
//         username: true,
//         name: true,
//         role: true,
//         createdAt: true,
//         updatedAt: true,
//       }
//     });

//     // Create notification for admins when user role is changed
//     if (role && role !== existingUser.role) {
//       const admins = await prisma.user.findMany({
//         where: { role: { in: ['ADMIN', 'SUPER_ADMIN'] } }
//       });

//       for (const admin of admins) {
//         await prisma.notification.create({
//           data: {
//             title: 'User Role Updated',
//             message: `${existingUser.name || existingUser.email} role changed from ${existingUser.role} to ${role}`,
//             type: 'user',
//             userId: admin.id,
//             resourceId: updatedUser.id,
//             resourceType: 'User'
//           }
//         });
//       }
//     }

//     res.json(updatedUser);
//   } catch (error) {
//     console.error('Error updating user:', error);
//     res.status(500).json({ error: 'Failed to update user' });
//   }
// };

// const deleteUser = async (req, res) => {
//   try {
//     const { id } = req.params;

//     // Prevent self-deletion
//     const currentUser = req.user;
//     if (currentUser.id === id) {
//       return res.status(403).json({ error: 'Cannot delete your own account' });
//     }

//     await prisma.user.delete({
//       where: { id }
//     });

//     res.json({ message: 'User deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting user:', error);
//     res.status(500).json({ error: 'Failed to delete user' });
//   }
// };

// module.exports = {
//   createUser,
//   getAllUsers,
//   getUserById,
//   updateUser,
//   deleteUser
// };
const prisma = require('../config/database');
const bcrypt = require('bcryptjs');

const createUser = async (req, res) => {
  try {
    const {
      email,
      username,
      name,
      role,
      password,
      confirmPassword
    } = req.body;

    const currentUser = req.user;

    // Validation
    if (
      !email ||
      !username ||
      !name ||
      !role ||
      !password ||
      !confirmPassword
    ) {
      return res.status(400).json({
        error: 'All fields are required'
      });
    }

    /*
     * PERMISSIONS
     *
     * SUPER_ADMIN:
     * - Can create USER
     * - Can create ADMIN
     * - Can create SUPER_ADMIN
     *
     * ADMIN:
     * - Can create USER
     * - Can create ADMIN
     * - Cannot create SUPER_ADMIN
     */
    if (
      currentUser.role !== 'SUPER_ADMIN' &&
      role === 'SUPER_ADMIN'
    ) {
      return res.status(403).json({
        error: 'Only SUPER_ADMIN can create a SUPER_ADMIN'
      });
    }

    // Validate role
    if (!['USER', 'ADMIN', 'SUPER_ADMIN'].includes(role)) {
      return res.status(400).json({
        error: 'Invalid user role'
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        error: 'Passwords do not match'
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        error: 'Password must be at least 6 characters'
      });
    }

    // Check for existing email
    const existingEmail = await prisma.user.findUnique({
      where: { email }
    });

    if (existingEmail) {
      return res.status(400).json({
        error: 'Email already in use'
      });
    }

    // Check for existing username
    const existingUsername = await prisma.user.findUnique({
      where: { username }
    });

    if (existingUsername) {
      return res.status(400).json({
        error: 'Username already in use'
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        username,
        name,
        role,
        password: hashedPassword
      },
      select: {
        id: true,
        email: true,
        username: true,
        name: true,
        role: true,
        createdAt: true,
        updatedAt: true
      }
    });

    // Create notification for all admins about new user
    const admins = await prisma.user.findMany({
      where: {
        role: {
          in: ['ADMIN', 'SUPER_ADMIN']
        }
      }
    });

    for (const admin of admins) {
      await prisma.notification.create({
        data: {
          title: 'New User Created',
          message: `${name} (${email}) has been added as ${role}.`,
          type: 'user',
          userId: admin.id,
          resourceId: user.id,
          resourceType: 'User'
        }
      });
    }

    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);

    res.status(500).json({
      error: 'Failed to create user'
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        username: true,
        name: true,
        role: true,
        createdAt: true,
        updatedAt: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);

    res.status(500).json({
      error: 'Failed to fetch users'
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        username: true,
        name: true,
        role: true,
        createdAt: true,
        updatedAt: true
      }
    });

    if (!user) {
      return res.status(404).json({
        error: 'User not found'
      });
    }

    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);

    res.status(500).json({
      error: 'Failed to fetch user'
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      email,
      username,
      name,
      role,
      password,
      confirmPassword
    } = req.body;

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { id }
    });

    if (!existingUser) {
      return res.status(404).json({
        error: 'User not found'
      });
    }

    // Current logged-in user
    const currentUser = req.user;

    /*
     * PERMISSIONS
     *
     * SUPER_ADMIN:
     * - Can edit anyone
     * - Can change anyone's role
     *
     * ADMIN:
     * - Can edit only their own account
     * - Cannot change their role
     * - Cannot edit another user
     */
    if (
      currentUser.role !== 'SUPER_ADMIN' &&
      currentUser.id !== id
    ) {
      return res.status(403).json({
        error: 'You can only edit your own account'
      });
    }

    // Validate email if changed
    if (email && email !== existingUser.email) {
      const emailExists = await prisma.user.findUnique({
        where: { email }
      });

      if (emailExists) {
        return res.status(400).json({
          error: 'Email already in use'
        });
      }
    }

    // Validate username if changed
    if (
      username &&
      username !== existingUser.username
    ) {
      const usernameExists = await prisma.user.findUnique({
        where: { username }
      });

      if (usernameExists) {
        return res.status(400).json({
          error: 'Username already in use'
        });
      }
    }

    // Validate password if provided
    if (password || confirmPassword) {
      if (!password || !confirmPassword) {
        return res.status(400).json({
          error:
            'Both password fields are required when changing password'
        });
      }

      if (password !== confirmPassword) {
        return res.status(400).json({
          error: 'Passwords do not match'
        });
      }

      if (password.length < 6) {
        return res.status(400).json({
          error: 'Password must be at least 6 characters'
        });
      }
    }

    /*
     * ADMIN cannot change their own role.
     *
     * SUPER_ADMIN can change roles.
     */
    if (
      currentUser.role !== 'SUPER_ADMIN' &&
      role &&
      role !== existingUser.role
    ) {
      return res.status(403).json({
        error: 'Admins cannot change user roles'
      });
    }

    /*
     * Prevent removing your own admin access.
     *
     * This applies to ADMIN accounts.
     */
    if (
      currentUser.id === id &&
      currentUser.role === 'ADMIN' &&
      role &&
      role !== 'ADMIN'
    ) {
      return res.status(403).json({
        error: 'Cannot remove your own admin access'
      });
    }

    // Validate role when provided
    if (
      role &&
      !['USER', 'ADMIN', 'SUPER_ADMIN'].includes(role)
    ) {
      return res.status(400).json({
        error: 'Invalid user role'
      });
    }

    /*
     * Build update data
     */
    const updateData = {};

    if (email) {
      updateData.email = email;
    }

    if (username !== undefined) {
      updateData.username = username;
    }

    if (name !== undefined) {
      updateData.name = name;
    }

    /*
     * Only SUPER_ADMIN can change roles.
     */
    if (
      role &&
      currentUser.role === 'SUPER_ADMIN'
    ) {
      updateData.role = role;
    }

    // Hash password if provided
    if (password) {
      const hashedPassword = await bcrypt.hash(
        password,
        10
      );

      updateData.password = hashedPassword;
    }

    // Update user
    const updatedUser = await prisma.user.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        email: true,
        username: true,
        name: true,
        role: true,
        createdAt: true,
        updatedAt: true
      }
    });

    // Create notification when user role is changed
    if (
      role &&
      role !== existingUser.role &&
      currentUser.role === 'SUPER_ADMIN'
    ) {
      const admins = await prisma.user.findMany({
        where: {
          role: {
            in: ['ADMIN', 'SUPER_ADMIN']
          }
        }
      });

      for (const admin of admins) {
        await prisma.notification.create({
          data: {
            title: 'User Role Updated',
            message: `${existingUser.name || existingUser.email} role changed from ${existingUser.role} to ${role}`,
            type: 'user',
            userId: admin.id,
            resourceId: updatedUser.id,
            resourceType: 'User'
          }
        });
      }
    }

    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);

    res.status(500).json({
      error: 'Failed to update user'
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const currentUser = req.user;

    /*
     * Only SUPER_ADMIN can delete users.
     */
    if (currentUser.role !== 'SUPER_ADMIN') {
      return res.status(403).json({
        error: 'Only SUPER_ADMIN can delete users'
      });
    }

    // Prevent self-deletion
    if (currentUser.id === id) {
      return res.status(403).json({
        error: 'Cannot delete your own account'
      });
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { id }
    });

    if (!user) {
      return res.status(404).json({
        error: 'User not found'
      });
    }

    await prisma.user.delete({
      where: { id }
    });

    res.json({
      message: 'User deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting user:', error);

    res.status(500).json({
      error: 'Failed to delete user'
    });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};