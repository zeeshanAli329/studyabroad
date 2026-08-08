const bcrypt = require('bcryptjs');
const prisma = require('../config/database');
const { generateToken } = require('../config/jwt');

const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role: 'USER'
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true
      }
    });

    const token = generateToken({ userId: user.id, role: user.role });

    res.status(201).json({ user, token });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
};

const adminSignup = async (req, res) => {
  try {
    const { fullName, username, email, password, confirmPassword } = req.body;

    // Validation
    if (!fullName || !username || !email || !password || !confirmPassword) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }

    // Check if admin signup is enabled
    const adminSignupEnabled = process.env.ADMIN_SIGNUP_ENABLED !== 'false';
    if (!adminSignupEnabled) {
      return res.status(403).json({ error: 'Admin registration is currently closed' });
    }

    // Authorization check - verify email is in allowed list
    const allowedEmails = process.env.ADMIN_ALLOWED_EMAILS 
      ? process.env.ADMIN_ALLOWED_EMAILS.split(',').map(e => e.trim().toLowerCase()) 
      : [];
    
    const allowedUsernames = process.env.ADMIN_ALLOWED_USERNAMES 
      ? process.env.ADMIN_ALLOWED_USERNAMES.split(',').map(u => u.trim().toLowerCase()) 
      : [];

    const normalizedEmail = email.trim().toLowerCase();
    const normalizedUsername = username.trim().toLowerCase();

    // If allowlists are configured, check authorization
    if (allowedEmails.length > 0 || allowedUsernames.length > 0) {
      const isEmailAuthorized = allowedEmails.length > 0 && allowedEmails.includes(normalizedEmail);
      const isUsernameAuthorized = allowedUsernames.length > 0 && allowedUsernames.includes(normalizedUsername);
      
      // If allowlists exist, user must be authorized by at least one
      if (!isEmailAuthorized && !isUsernameAuthorized) {
        return res.status(403).json({ 
          error: 'You are not authorized to create an administrator account. Please contact the administrator.' 
        });
      }
    }

    // Check for existing email
    const existingEmail = await prisma.user.findUnique({ where: { email } });
    if (existingEmail) {
      return res.status(400).json({ error: 'An admin account with this email already exists' });
    }

    // Check for existing username
    const existingUsername = await prisma.user.findUnique({ where: { username } });
    if (existingUsername) {
      return res.status(400).json({ error: 'This username is already taken' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create admin
    const admin = await prisma.user.create({
      data: {
        name: fullName,
        username,
        email,
        password: hashedPassword,
        role: 'ADMIN'
      },
      select: {
        id: true,
        name: true,
        username: true,
        email: true,
        role: true,
        createdAt: true
      }
    });

    res.status(201).json({ 
      message: 'Admin account created successfully',
      admin: {
        id: admin.id,
        name: admin.name,
        username: admin.username,
        email: admin.email,
        role: admin.role
      }
    });
  } catch (error) {
    console.error('Admin signup error:', error);
    res.status(500).json({ error: 'Failed to create admin account' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = generateToken({ userId: user.id, role: user.role });

    res.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        username: user.username,
        role: user.role
      },
      token
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
};

const adminLogin = async (req, res) => {
  try {
    const { emailOrUsername, password } = req.body;

    // Find user by email or username
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { email: emailOrUsername },
          { username: emailOrUsername }
        ]
      }
    });

    if (!user) {
      return res.status(401).json({ error: 'Invalid username/email or password' });
    }

    // Check if user is admin
    if (user.role !== 'ADMIN' && user.role !== 'SUPER_ADMIN') {
      return res.status(403).json({ error: 'Admin access required' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid username/email or password' });
    }

    const token = generateToken({ userId: user.id, role: user.role });

    res.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        username: user.username,
        role: user.role
      },
      token
    });
  } catch (error) {
    console.error('Admin login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
};

const getProfile = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        email: true,
        username: true,
        name: true,
        role: true,
        createdAt: true,
        savedScholarships: {
          include: {
            scholarship: {
              include: {
                country: true,
                university: true
              }
            }
          }
        },
        savedBlogs: {
          include: {
            blog: true
          }
        }
      }
    });

    res.json(user);
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { name, email, username } = req.body;

    const user = await prisma.user.update({
      where: { id: req.user.id },
      data: { name, email, username },
      select: {
        id: true,
        email: true,
        username: true,
        name: true,
        role: true
      }
    });

    res.json(user);
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ error: 'Failed to update profile' });
  }
};

const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    const user = await prisma.user.findUnique({ where: { id: req.user.id } });
    const validPassword = await bcrypt.compare(currentPassword, user.password);

    if (!validPassword) {
      return res.status(401).json({ error: 'Current password is incorrect' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { id: req.user.id },
      data: { password: hashedPassword }
    });

    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({ error: 'Failed to change password' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      where: {
        role: {
          in: ['ADMIN', 'SUPER_ADMIN']
        }
      },
      select: {
        id: true,
        name: true,
        username: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.json({ users });
  } catch (error) {
    console.error('Get all users error:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

const updateUserRole = async (req, res) => {
  try {
    const { userId, role } = req.body;
    const currentUser = req.user;

    // Only SUPER_ADMIN can change roles
    if (currentUser.role !== 'SUPER_ADMIN') {
      return res.status(403).json({ error: 'Only SUPER_ADMIN can change roles' });
    }

    // Prevent self-promotion
    if (userId === currentUser.id) {
      return res.status(403).json({ error: 'Cannot change your own role' });
    }

    const user = await prisma.user.update({
      where: { id: userId },
      data: { role },
      select: {
        id: true,
        name: true,
        username: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true
      }
    });

    res.json({ user });
  } catch (error) {
    console.error('Update user role error:', error);
    res.status(500).json({ error: 'Failed to update user role' });
  }
};

module.exports = { 
  register, 
  adminSignup, 
  login, 
  adminLogin, 
  getProfile, 
  updateProfile, 
  changePassword,
  getAllUsers,
  updateUserRole
};
