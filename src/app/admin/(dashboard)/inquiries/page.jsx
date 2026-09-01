"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { API_URL } from "@/lib/api";

export default function InquiriesPage() {
  const router = useRouter();
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    checkAuth();
    fetchInquiries();
  }, [filter]);

  const checkAuth = () => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (!token || !userData) {
      router.push('/admin/login');
      return;
    }
  };

  const fetchInquiries = async () => {
    try {
      const token = localStorage.getItem('token');
      const params = filter !== 'all' ? `?status=${filter}` : '';
      const API_URL = process.env.NEXT_PUBLIC_API_URL || (typeof window !== 'undefined' && window.location.hostname === 'localhost' ? 'http://localhost:5000/api' : '/api');
      const response = await fetch(
        `${API_URL}/contact${params}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch inquiries');
      }

      const data = await response.json();
      setInquiries(data || []);
      setError(null);
    } catch (err) {
      setError('Failed to load inquiries. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (inquiryId, newStatus) => {
    try {
      const token = localStorage.getItem('token');
      const API_URL = process.env.NEXT_PUBLIC_API_URL || (typeof window !== 'undefined' && window.location.hostname === 'localhost' ? 'http://localhost:5000/api' : '/api');
      const response = await fetch(
        `${API_URL}/contact/${inquiryId}/status`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ status: newStatus })
        }
      );

      if (!response.ok) {
        throw new Error('Failed to update status');
      }

      const updatedInquiry = await response.json();
      setInquiries(inquiries.map(inquiry => inquiry.id === inquiryId ? updatedInquiry : inquiry));
    } catch (err) {
      alert(err.message);
      console.error(err);
    }
  };

  const handleDelete = async (inquiryId) => {
    if (!confirm('Are you sure you want to delete this inquiry?')) return;

    try {
      const token = localStorage.getItem('token');
      const API_URL = process.env.NEXT_PUBLIC_API_URL || (typeof window !== 'undefined' && window.location.hostname === 'localhost' ? 'http://localhost:5000/api' : '/api');
      const response = await fetch(
        `${API_URL}/contact/${inquiryId}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );

      if (!response.ok) {
        throw new Error('Failed to delete inquiry');
      }

      setInquiries(inquiries.filter(inquiry => inquiry.id !== inquiryId));
      alert('Inquiry deleted successfully');
    } catch (err) {
      alert(err.message);
      console.error(err);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'read':
        return 'bg-gray-100 text-gray-800';
      case 'replied':
        return 'bg-[var(--success)]/10 text-[var(--success)]';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <AdminHeader 
        title="Inquiries" 
        subtitle="Manage contact form submissions and appointment requests"
      />
      <div className="space-y-6">
        {/* Filter */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-[var(--primary)] text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('new')}
              className={`px-4 py-2 rounded-lg ${filter === 'new' ? 'bg-[var(--primary)] text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              New
            </button>
            <button
              onClick={() => setFilter('read')}
              className={`px-4 py-2 rounded-lg ${filter === 'read' ? 'bg-[var(--primary)] text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              Read
            </button>
            <button
              onClick={() => setFilter('replied')}
              className={`px-4 py-2 rounded-lg ${filter === 'replied' ? 'bg-[var(--primary)] text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              Replied
            </button>
          </div>
        </div>

        {/* Inquiries List */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)]"></div>
              <p className="mt-4 text-[var(--text-secondary)]">Loading inquiries...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600">{error}</p>
              <button
                onClick={fetchInquiries}
                className="mt-4 px-6 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary)]"
              >
                Try Again
              </button>
            </div>
          ) : inquiries.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[var(--text-secondary)]">No inquiries found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-primary)]">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-primary)]">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-primary)]">Phone</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-primary)]">Subject</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-primary)]">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-primary)]">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-primary)]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {inquiries.map((inquiry) => (
                    <tr key={inquiry.id} className="border-t border-gray-100">
                      <td className="px-6 py-4">
                        <div className="font-medium text-[var(--text-primary)]">{inquiry.name}</div>
                      </td>
                      <td className="px-6 py-4 text-[var(--text-secondary)]">
                        {inquiry.email}
                      </td>
                      <td className="px-6 py-4 text-[var(--text-secondary)]">
                        {inquiry.phone || '-'}
                      </td>
                      <td className="px-6 py-4 text-[var(--text-secondary)]">
                        {inquiry.subject || '-'}
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={inquiry.status}
                          onChange={(e) => handleStatusChange(inquiry.id, e.target.value)}
                          className={`px-3 py-1 rounded-full text-xs font-medium border-0 ${getStatusBadgeColor(inquiry.status)}`}
                        >
                          <option value="new">New</option>
                          <option value="read">Read</option>
                          <option value="replied">Replied</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 text-[var(--text-secondary)]">
                        {formatDate(inquiry.createdAt)}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleDelete(inquiry.id)}
                          className="text-red-600 hover:text-red-800 text-sm"
                        >
                          Delete
                        </button>
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
