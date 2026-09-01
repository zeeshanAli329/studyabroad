// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import AdminHeader from "@/components/admin/AdminHeader";
// import AdminSidebar from "@/components/admin/AdminSidebar";
// import { api, API_URL } from "@/lib/api";

// export default function UsersPage() {
//   const router = useRouter();
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [editingUser, setEditingUser] = useState(null);
//   const [creatingUser, setCreatingUser] = useState(false);
//   const [editForm, setEditForm] = useState({
//     email: '',
//     username: '',
//     name: '',
//     role: '',
//     password: '',
//     confirmPassword: ''
//   });

//   useEffect(() => {
//     checkAuth();
//     fetchUsers();
//   }, []);

//   const checkAuth = () => {
//     const token = localStorage.getItem('token');
//     const userData = localStorage.getItem('user');
//     if (!token || !userData) {
//       router.push('/admin/login');
//       return;
//     }
//     setCurrentUser(JSON.parse(userData));
//   };

//   const fetchUsers = async () => {
//     try {
//       const data = await fetch(`${API_URL}/users`, {
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         }
//       });

//       if (!data.ok) {
//         throw new Error('Failed to fetch users');
//       }

//       const usersData = await data.json();
//       setUsers(usersData || []);
//       setError(null);
//     } catch (err) {
//       setError('Failed to load users. Please try again.');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEditClick = (user) => {
//     setEditingUser(user);
//     setEditForm({
//       email: user.email,
//       username: user.username || '',
//       name: user.name || '',
//       role: user.role,
//       password: '',
//       confirmPassword: ''
//     });
//   };

//   const handleCancelEdit = () => {
//     setEditingUser(null);
//     setEditForm({
//       email: '',
//       username: '',
//       name: '',
//       role: '',
//       password: '',
//       confirmPassword: ''
//     });
//   };

//   const handleSaveUser = async () => {
//     try {
//       if (!editForm.email) {
//         setError('Email is required');
//         return;
//       }

//       if (editForm.password || editForm.confirmPassword) {
//         if (!editForm.password || !editForm.confirmPassword) {
//           setError('Both password fields are required when changing password');
//           return;
//         }

//         if (editForm.password !== editForm.confirmPassword) {
//           setError('Passwords do not match');
//           return;
//         }

//         if (editForm.password.length < 6) {
//           setError('Password must be at least 6 characters');
//           return;
//         }
//       }

//       const response = await fetch(`${API_URL}/users/${editingUser.id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         },
//         body: JSON.stringify(editForm)
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Failed to update user');
//       }

//       const updatedUser = await response.json();
      
//       setUsers(users.map(user => user.id === editingUser.id ? updatedUser : user));
      
//       if (currentUser.id === editingUser.id) {
//         setCurrentUser(updatedUser);
//         localStorage.setItem('user', JSON.stringify(updatedUser));
//       }

//       setEditingUser(null);
//       setError(null);
//       alert('User updated successfully');
//     } catch (err) {
//       setError(err.message);
//       console.error(err);
//     }
//   };

//   const handleDeleteUser = async (userId) => {
//     if (!confirm('Are you sure you want to delete this user?')) return;

//     try {
//       const response = await fetch(`${API_URL}/users/${userId}`, {
//         method: 'DELETE',
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         }
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Failed to delete user');
//       }

//       setUsers(users.filter(user => user.id !== userId));
//       alert('User deleted successfully');
//     } catch (err) {
//       alert(err.message);
//       console.error(err);
//     }
//   };

//   const handleCreateUser = async () => {
//     try {
//       if (!editForm.email || !editForm.username || !editForm.name || !editForm.role) {
//         setError('All fields are required');
//         return;
//       }

//       if (!editForm.password || !editForm.confirmPassword) {
//         setError('Password and confirm password are required');
//         return;
//       }

//       if (editForm.password !== editForm.confirmPassword) {
//         setError('Passwords do not match');
//         return;
//       }

//       if (editForm.password.length < 6) {
//         setError('Password must be at least 6 characters');
//         return;
//       }

//       const response = await fetch(`${API_URL}/users`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         },
//         body: JSON.stringify(editForm)
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Failed to create user');
//       }

//       const newUser = await response.json();
//       setUsers([...users, newUser]);
//       setCreatingUser(false);
//       setEditForm({
//         email: '',
//         username: '',
//         name: '',
//         role: '',
//         password: '',
//         confirmPassword: ''
//       });
//       setError(null);
//       alert('User created successfully');
//     } catch (err) {
//       setError(err.message);
//       console.error(err);
//     }
//   };

//   const handleStartCreate = () => {
//     setCreatingUser(true);
//     setEditForm({
//       email: '',
//       username: '',
//       name: '',
//       role: 'USER',
//       password: '',
//       confirmPassword: ''
//     });
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return '-';
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric'
//     });
//   };

//   const getRoleBadgeColor = (role) => {
//     switch (role) {
//       case 'SUPER_ADMIN':
//         return 'bg-purple-100 text-purple-800';
//       case 'ADMIN':
//         return 'bg-blue-100 text-blue-800';
//       case 'USER':
//         return 'bg-gray-100 text-gray-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };

//   return (
//     <>
//       <AdminHeader 
//         title="Users" 
//         subtitle="Manage administrators and user accounts"
//       />
//       <div className="space-y-6">
//         {creatingUser && (
//           <div className="bg-white rounded-xl shadow-sm p-6">
//             <h2 className="text-xl font-semibold text-gray-900 mb-4">Create New User</h2>
//             {error && (
//               <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
//                 {error}
//               </div>
//             )}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
//                 <input
//                   type="text"
//                   value={editForm.name}
//                   onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
//                   className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Username *</label>
//                 <input
//                   type="text"
//                   value={editForm.username}
//                   onChange={(e) => setEditForm({ ...editForm, username: e.target.value })}
//                   className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
//                 <input
//                   type="email"
//                   value={editForm.email}
//                   onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
//                   className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Role *</label>
//                 <select
//                   value={editForm.role}
//                   onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}
//                   className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
//                   required
//                 >
//                   <option value="USER">USER</option>
//                   <option value="ADMIN">ADMIN</option>
//                   <option value="SUPER_ADMIN">SUPER_ADMIN</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
//                 <input
//                   type="password"
//                   value={editForm.password}
//                   onChange={(e) => setEditForm({ ...editForm, password: e.target.value })}
//                   className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
//                   required
//                   minLength={6}
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password *</label>
//                 <input
//                   type="password"
//                   value={editForm.confirmPassword}
//                   onChange={(e) => setEditForm({ ...editForm, confirmPassword: e.target.value })}
//                   className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
//                   required
//                   minLength={6}
//                 />
//               </div>
//             </div>
//             <div className="flex gap-4 mt-6">
//               <button
//                 onClick={handleCreateUser}
//                 className="px-6 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary)]"
//               >
//                 Create User
//               </button>
//               <button
//                 onClick={() => setCreatingUser(false)}
//                 className="px-6 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}

//         {editingUser && (
//           <div className="bg-white rounded-xl shadow-sm p-6">
//             <h2 className="text-xl font-semibold text-gray-900 mb-4">Edit User</h2>
//             {error && (
//               <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
//                 {error}
//               </div>
//             )}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//                 <input
//                   type="email"
//                   value={editForm.email}
//                   onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
//                   className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
//                 <input
//                   type="text"
//                   value={editForm.username}
//                   onChange={(e) => setEditForm({ ...editForm, username: e.target.value })}
//                   className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
//                 <input
//                   type="text"
//                   value={editForm.name}
//                   onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
//                   className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
//                 <select
//                   value={editForm.role}
//                   onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}
//                   className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
//                 >
//                   <option value="USER">USER</option>
//                   <option value="ADMIN">ADMIN</option>
//                   <option value="SUPER_ADMIN">SUPER_ADMIN</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
//                 <input
//                   type="password"
//                   value={editForm.password}
//                   onChange={(e) => setEditForm({ ...editForm, password: e.target.value })}
//                   placeholder="Leave empty to keep current password"
//                   className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
//                 <input
//                   type="password"
//                   value={editForm.confirmPassword}
//                   onChange={(e) => setEditForm({ ...editForm, confirmPassword: e.target.value })}
//                   placeholder="Leave empty to keep current password"
//                   className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
//                 />
//               </div>
//             </div>
//             <div className="flex gap-4 mt-6">
//               <button
//                 onClick={handleSaveUser}
//                 className="px-6 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary)]"
//               >
//                 Save Changes
//               </button>
//               <button
//                 onClick={handleCancelEdit}
//                 className="px-6 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}

//         <div className="bg-white rounded-xl shadow-sm overflow-hidden">
//           <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
//             <h2 className="text-lg font-semibold text-gray-900">All Users</h2>
//             {!creatingUser && !editingUser && (
//               <button
//                 onClick={handleStartCreate}
//                 className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary)] text-sm font-medium"
//               >
//                 Create User
//               </button>
//             )}
//           </div>
//           {loading ? (
//             <div className="text-center py-12">
//               <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)]"></div>
//               <p className="mt-4 text-[var(--text-secondary)]">Loading users...</p>
//             </div>
//           ) : error ? (
//             <div className="text-center py-12">
//               <p className="text-red-600">{error}</p>
//               <button
//                 onClick={fetchUsers}
//                 className="mt-4 px-6 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary)]"
//               >
//                 Try Again
//               </button>
//             </div>
//           ) : users.length === 0 ? (
//             <div className="text-center py-12">
//               <p className="text-[var(--text-secondary)]">No users found</p>
//             </div>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-primary)]">Name</th>
//                     <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-primary)]">Email</th>
//                     <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-primary)]">Username</th>
//                     <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-primary)]">Role</th>
//                     <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-primary)]">Created</th>
//                     <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-primary)]">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {users.map((user) => (
//                     <tr key={user.id} className="border-t border-gray-100">
//                       <td className="px-6 py-4">
//                         <div className="font-medium text-[var(--text-primary)]">{user.name || '-'}</div>
//                       </td>
//                       <td className="px-6 py-4 text-[var(--text-secondary)]">
//                         {user.email}
//                       </td>
//                       <td className="px-6 py-4 text-[var(--text-secondary)]">
//                         {user.username || '-'}
//                       </td>
//                       <td className="px-6 py-4">
//                         <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRoleBadgeColor(user.role)}`}>
//                           {user.role}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 text-[var(--text-secondary)]">
//                         {formatDate(user.createdAt)}
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className="flex gap-2">
//                           <button
//                             onClick={() => handleEditClick(user)}
//                             className="text-blue-600 hover:text-blue-800 text-sm"
//                           >
//                             Edit
//                           </button>
//                           {currentUser?.role === 'SUPER_ADMIN' && user.id !== currentUser?.id && (
//                             <button
//                               onClick={() => handleDeleteUser(user.id)}
//                               className="text-red-600 hover:text-red-800 text-sm"
//                             >
//                               Delete
//                             </button>
//                           )}
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { api, API_URL } from "@/lib/api";

export default function UsersPage() {
  const router = useRouter();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [creatingUser, setCreatingUser] = useState(false);

  const [editForm, setEditForm] = useState({
    email: "",
    username: "",
    name: "",
    role: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    checkAuth();
    fetchUsers();
  }, []);

  const checkAuth = () => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token || !userData) {
      router.push("/admin/login");
      return;
    }

    try {
      const parsedUser = JSON.parse(userData);
      setCurrentUser(parsedUser);
    } catch (error) {
      console.error("Failed to parse user data:", error);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      router.push("/admin/login");
    }
  };

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/users`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const usersData = await response.json();

      setUsers(usersData || []);
      setError(null);
    } catch (err) {
      setError("Failed to load users. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  /*
   * Permission:
   *
   * SUPER_ADMIN:
   * - Can edit everyone.
   *
   * ADMIN:
   * - Can edit only their own account.
   *
   * ADMIN cannot edit another admin/user.
   */
  const canEditUser = (user) => {
    if (!currentUser || !user) {
      return false;
    }

    if (currentUser.role === "SUPER_ADMIN") {
      return true;
    }

    if (
      currentUser.role === "ADMIN" &&
      currentUser.id === user.id
    ) {
      return true;
    }

    return false;
  };

  const canDeleteUser = (user) => {
    if (!currentUser || !user) {
      return false;
    }

    return (
      currentUser.role === "SUPER_ADMIN" &&
      currentUser.id !== user.id
    );
  };

  const handleEditClick = (user) => {
    // Extra frontend security check
    if (!canEditUser(user)) {
      return;
    }

    setEditingUser(user);

    setEditForm({
      email: user.email,
      username: user.username || "",
      name: user.name || "",
      role: user.role,
      password: "",
      confirmPassword: "",
    });

    setError(null);
  };

  const handleCancelEdit = () => {
    setEditingUser(null);

    setEditForm({
      email: "",
      username: "",
      name: "",
      role: "",
      password: "",
      confirmPassword: "",
    });

    setError(null);
  };

  const handleSaveUser = async () => {
    if (!editingUser || !currentUser) {
      return;
    }

    // Frontend permission check
    if (!canEditUser(editingUser)) {
      setError("You do not have permission to edit this user.");
      return;
    }

    try {
      if (!editForm.email) {
        setError("Email is required");
        return;
      }

      if (editForm.password || editForm.confirmPassword) {
        if (!editForm.password || !editForm.confirmPassword) {
          setError(
            "Both password fields are required when changing password"
          );
          return;
        }

        if (editForm.password !== editForm.confirmPassword) {
          setError("Passwords do not match");
          return;
        }

        if (editForm.password.length < 6) {
          setError("Password must be at least 6 characters");
          return;
        }
      }

      /*
       * ADMIN can edit only their own account.
       *
       * Do not allow ADMIN to change their own role.
       * SUPER_ADMIN can change roles.
       */
      const updateData = {
        email: editForm.email,
        username: editForm.username,
        name: editForm.name,
        password: editForm.password,
        confirmPassword: editForm.confirmPassword,
      };

      if (currentUser.role === "SUPER_ADMIN") {
        updateData.role = editForm.role;
      } else {
        updateData.role = editingUser.role;
      }

      const response = await fetch(
        `${API_URL}/users/${editingUser.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(updateData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();

        throw new Error(
          errorData.error || "Failed to update user"
        );
      }

      const updatedUser = await response.json();

      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === editingUser.id ? updatedUser : user
        )
      );

      // If the logged-in admin edited their own account,
      // update localStorage as well.
      if (currentUser.id === editingUser.id) {
        setCurrentUser(updatedUser);

        localStorage.setItem(
          "user",
          JSON.stringify(updatedUser)
        );
      }

      setEditingUser(null);

      setEditForm({
        email: "",
        username: "",
        name: "",
        role: "",
        password: "",
        confirmPassword: "",
      });

      setError(null);

      alert("User updated successfully");
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  };

  const handleDeleteUser = async (userId) => {
    const userToDelete = users.find(
      (user) => user.id === userId
    );

    if (!userToDelete) {
      return;
    }

    // Extra frontend permission check
    if (!canDeleteUser(userToDelete)) {
      alert("You do not have permission to delete this user.");
      return;
    }

    if (
      !confirm(
        "Are you sure you want to delete this user?"
      )
    ) {
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/users/${userId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "token"
            )}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();

        throw new Error(
          errorData.error || "Failed to delete user"
        );
      }

      setUsers((prevUsers) =>
        prevUsers.filter((user) => user.id !== userId)
      );

      alert("User deleted successfully");
    } catch (err) {
      alert(err.message);
      console.error(err);
    }
  };

  const handleCreateUser = async () => {
    try {
      if (
        !editForm.email ||
        !editForm.username ||
        !editForm.name ||
        !editForm.role
      ) {
        setError("All fields are required");
        return;
      }

      /*
       * Only SUPER_ADMIN can create another SUPER_ADMIN.
       *
       * ADMIN and USER can only create USER or ADMIN.
       */
      if (
        currentUser?.role !== "SUPER_ADMIN" &&
        editForm.role === "SUPER_ADMIN"
      ) {
        setError(
          "You do not have permission to create a SUPER_ADMIN."
        );
        return;
      }

      if (
        !editForm.password ||
        !editForm.confirmPassword
      ) {
        setError(
          "Password and confirm password are required"
        );
        return;
      }

      if (
        editForm.password !==
        editForm.confirmPassword
      ) {
        setError("Passwords do not match");
        return;
      }

      if (editForm.password.length < 6) {
        setError(
          "Password must be at least 6 characters"
        );
        return;
      }

      const response = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem(
            "token"
          )}`,
        },
        body: JSON.stringify(editForm),
      });

      if (!response.ok) {
        const errorData = await response.json();

        throw new Error(
          errorData.error || "Failed to create user"
        );
      }

      const newUser = await response.json();

      setUsers((prevUsers) => [
        ...prevUsers,
        newUser,
      ]);

      setCreatingUser(false);

      setEditForm({
        email: "",
        username: "",
        name: "",
        role: "",
        password: "",
        confirmPassword: "",
      });

      setError(null);

      alert("User created successfully");
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  };

  const handleStartCreate = () => {
    setCreatingUser(true);

    setError(null);

    setEditForm({
      email: "",
      username: "",
      name: "",
      role: "USER",
      password: "",
      confirmPassword: "",
    });
  };

  const formatDate = (dateString) => {
    if (!dateString) return "-";

    return new Date(dateString).toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "short",
        day: "numeric",
      }
    );
  };

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case "SUPER_ADMIN":
        return "bg-purple-100 text-purple-800";

      case "ADMIN":
        return "bg-blue-100 text-blue-800";

      case "USER":
        return "bg-gray-100 text-gray-800";

      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      <AdminHeader
        title="Users"
        subtitle="Manage administrators and user accounts"
      />

      <div className="space-y-6">
        {/* CREATE USER */}
        {creatingUser && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Create New User
            </h2>

            {error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>

                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      name: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Username *
                </label>

                <input
                  type="text"
                  value={editForm.username}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      username: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>

                <input
                  type="email"
                  value={editForm.email}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      email: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role *
                </label>

                <select
                  value={editForm.role}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      role: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  required
                >
                  <option value="USER">USER</option>
                  <option value="ADMIN">ADMIN</option>

                  {/* SUPER_ADMIN option is ONLY visible to SUPER_ADMIN */}
                  {currentUser?.role === "SUPER_ADMIN" && (
                    <option value="SUPER_ADMIN">
                      SUPER_ADMIN
                    </option>
                  )}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password *
                </label>

                <input
                  type="password"
                  value={editForm.password}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      password: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  required
                  minLength={6}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password *
                </label>

                <input
                  type="password"
                  value={editForm.confirmPassword}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      confirmPassword: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  required
                  minLength={6}
                />
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={handleCreateUser}
                className="px-6 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary)]"
              >
                Create User
              </button>

              <button
                onClick={() => {
                  setCreatingUser(false);
                  setError(null);
                }}
                className="px-6 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* EDIT USER */}
        {editingUser && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Edit User
            </h2>

            {error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  value={editForm.email}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      email: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>

                <input
                  type="text"
                  value={editForm.username}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      username: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      name: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role
                </label>

                <select
                  value={editForm.role}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      role: e.target.value,
                    })
                  }
                  disabled={
                    currentUser?.role !== "SUPER_ADMIN"
                  }
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] disabled:bg-gray-100 disabled:text-gray-500"
                >
                  <option value="USER">USER</option>
                  <option value="ADMIN">ADMIN</option>
                  <option value="SUPER_ADMIN">
                    SUPER_ADMIN
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Password
                </label>

                <input
                  type="password"
                  value={editForm.password}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      password: e.target.value,
                    })
                  }
                  placeholder="Leave empty to keep current password"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm New Password
                </label>

                <input
                  type="password"
                  value={editForm.confirmPassword}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      confirmPassword: e.target.value,
                    })
                  }
                  placeholder="Leave empty to keep current password"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={handleSaveUser}
                className="px-6 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary)]"
              >
                Save Changes
              </button>

              <button
                onClick={handleCancelEdit}
                className="px-6 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* USERS TABLE */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900">
              All Users
            </h2>

            {!creatingUser && !editingUser && (
              <button
                onClick={handleStartCreate}
                className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary)] text-sm font-medium"
              >
                Create User
              </button>
            )}
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)]"></div>

              <p className="mt-4 text-[var(--text-secondary)]">
                Loading users...
              </p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600">{error}</p>

              <button
                onClick={fetchUsers}
                className="mt-4 px-6 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary)]"
              >
                Try Again
              </button>
            </div>
          ) : users.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[var(--text-secondary)]">
                No users found
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-primary)]">
                      Name
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-primary)]">
                      Email
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-primary)]">
                      Username
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-primary)]">
                      Role
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-primary)]">
                      Created
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-primary)]">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user) => (
                    <tr
                      key={user.id}
                      className="border-t border-gray-100"
                    >
                      <td className="px-6 py-4">
                        <div className="font-medium text-[var(--text-primary)]">
                          {user.name || "-"}
                        </div>
                      </td>

                      <td className="px-6 py-4 text-[var(--text-secondary)]">
                        {user.email}
                      </td>

                      <td className="px-6 py-4 text-[var(--text-secondary)]">
                        {user.username || "-"}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getRoleBadgeColor(
                            user.role
                          )}`}
                        >
                          {user.role}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-[var(--text-secondary)]">
                        {formatDate(user.createdAt)}
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          {/* 
                            EDIT PERMISSION

                            SUPER_ADMIN:
                            Can edit everyone.

                            ADMIN:
                            Can edit ONLY themselves.

                            ADMIN will NOT see Edit for
                            another admin/user.
                          */}
                          {canEditUser(user) && (
                            <button
                              onClick={() =>
                                handleEditClick(user)
                              }
                              className="text-blue-600 hover:text-blue-800 text-sm"
                            >
                              Edit
                            </button>
                          )}

                          {/* 
                            DELETE PERMISSION

                            Only SUPER_ADMIN can delete
                            another user.
                          */}
                          {canDeleteUser(user) && (
                            <button
                              onClick={() =>
                                handleDeleteUser(user.id)
                              }
                              className="text-red-600 hover:text-red-800 text-sm"
                            >
                              Delete
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}