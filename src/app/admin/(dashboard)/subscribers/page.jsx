"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminHeader from "@/components/admin/AdminHeader";
import { api } from "@/lib/api";

export default function SubscribersPage() {
  const router = useRouter();
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    checkAuth();
    fetchSubscribers();
  }, []);

  const checkAuth = () => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (!token || !userData) {
      router.push('/admin/login');
      return;
    }
  };

  const fetchSubscribers = async () => {
    try {
      setLoading(true);
      const params = {};
      if (statusFilter) params.status = statusFilter;
      if (search) params.search = search;
      
      const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/subscribers${new URLSearchParams(params).toString() ? '?' + new URLSearchParams(params).toString() : ''}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!data.ok) {
        throw new Error('Failed to fetch subscribers');
      }

      const subscribersData = await data.json();
      setSubscribers(subscribersData || []);
      setError(null);
    } catch (err) {
      setError('Failed to load subscribers');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/subscribers/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (!response.ok) {
        throw new Error('Failed to update subscriber');
      }

      setSubscribers(subscribers.map(sub => 
        sub.id === id ? { ...sub, status: newStatus } : sub
      ));
    } catch (err) {
      alert('Failed to update subscriber status');
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this subscriber?')) return;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/subscribers/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete subscriber');
      }

      setSubscribers(subscribers.filter(sub => sub.id !== id));
    } catch (err) {
      alert('Failed to delete subscriber');
      console.error(err);
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

  return (
    <>
      <AdminHeader 
        title="Newsletter Subscribers" 
        subtitle="Manage users who have subscribed to RouteX newsletter updates"
      />
      <div className="p-6 lg:p-8">
        {/* Filters */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search by email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8CC63F]"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8CC63F]"
            >
              <option value="">All Status</option>
              <option value="ACTIVE">Active</option>
              <option value="UNSUBSCRIBED">Unsubscribed</option>
            </select>
            <button
              onClick={fetchSubscribers}
              className="px-6 py-2 bg-[#8CC63F] text-white rounded-xl font-medium hover:bg-[#7AB32F]"
            >
              Filter
            </button>
          </div>
        </div>

        {/* Subscribers Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#8CC63F]"></div>
              <p className="mt-4 text-gray-500">Loading subscribers...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600">{error}</p>
              <button
                onClick={fetchSubscribers}
                className="mt-4 px-6 py-2 bg-[#8CC63F] text-white rounded-lg hover:bg-[#6FA82F]"
              >
                Try Again
              </button>
            </div>
          ) : subscribers.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No subscribers found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase">Subscribed Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase">Last Email Sent</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {subscribers.map((subscriber) => (
                    <tr key={subscriber.id} className="border-b border-gray-50">
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">{subscriber.email}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          subscriber.status === 'ACTIVE' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {subscriber.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{formatDate(subscriber.subscribedAt)}</td>
                      <td className="px-6 py-4 text-gray-600">{formatDate(subscriber.lastEmailSentAt)}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleStatusChange(subscriber.id, subscriber.status === 'ACTIVE' ? 'UNSUBSCRIBED' : 'ACTIVE')}
                            className="text-gray-600 hover:text-gray-900 text-sm"
                          >
                            {subscriber.status === 'ACTIVE' ? 'Deactivate' : 'Activate'}
                          </button>
                          <button
                            onClick={() => handleDelete(subscriber.id)}
                            className="text-red-600 hover:text-red-700 text-sm"
                          >
                            Delete
                          </button>
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
