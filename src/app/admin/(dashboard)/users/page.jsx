"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default function UsersPage() {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    checkAuth();
    fetchUsers();
  }, []);

  const checkAuth = () => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (!token || !userData) {
      router.push('/admin/login');
      return;
    }
    setCurrentUser(JSON.parse(userData));
  };

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/auth/admin/users`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }

      const data = await response.json();
      setUsers(data.users || []);
      setError(null);
    } catch (err) {
      setError('Failed to load users');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleRoleChange = async (userId, newRole) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/auth/admin/users/role`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ userId, role: newRole })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update role');
      }

      const data = await response.json();
      setUsers(users.map(user => user.id === userId ? data.user : user));
    } catch (err) {
      alert(err.message);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case 'SUPER_ADMIN':
        return 'bg-purple-100 text-purple-800';
      case 'ADMIN':
        return 'bg-blue-100 text-blue-800';
      case 'EDITOR':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <AdminHeader 
        title="Users" 
        subtitle="Manage administrators and user accounts"
      />
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#8CC63F]"></div>
              <p className="mt-4 text-[#6B7280]">Loading users...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600">{error}</p>
              <button
                onClick={fetchUsers}
                className="mt-4 px-6 py-2 bg-[#8CC63F] text-white rounded-lg hover:bg-[#6FA82F]"
              >
                Try Again
              </button>
            </div>
          ) : users.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#6B7280]">No administrators found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#132A22]">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#132A22]">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#132A22]">Username</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#132A22]">Role</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#132A22]">Created</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#132A22]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-t border-gray-100">
                      <td className="px-6 py-4">
                        <div className="font-medium text-[#132A22]">{user.name || '-'}</div>
                      </td>
                      <td className="px-6 py-4 text-[#6B7280]">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 text-[#6B7280]">
                        {user.username || '-'}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRoleBadgeColor(user.role)}`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-[#6B7280]">
                        {formatDate(user.createdAt)}
                      </td>
                      <td className="px-6 py-4">
                        {currentUser?.role === 'SUPER_ADMIN' && user.id !== currentUser?.id && (
                          <select
                            value={user.role}
                            onChange={(e) => handleRoleChange(user.id, e.target.value)}
                            className="px-3 py-1 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8CC63F]"
                          >
                            <option value="ADMIN">ADMIN</option>
                            <option value="SUPER_ADMIN">SUPER_ADMIN</option>
                            <option value="EDITOR">EDITOR</option>
                          </select>
                        )}
                        {currentUser?.role !== 'SUPER_ADMIN' && (
                          <span className="text-[#6B7280] text-sm">View only</span>
                        )}
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
