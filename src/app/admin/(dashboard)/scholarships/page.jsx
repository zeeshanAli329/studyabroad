"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { api } from "@/lib/api";

export default function AdminScholarshipsPage() {
  const router = useRouter();
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    checkAuth();
    fetchScholarships();
  }, []);

  const checkAuth = () => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!token || !user || !user.id) {
      router.push('/admin/login');
    }
  };

  const fetchScholarships = async () => {
    try {
      setLoading(true);
      // Fetch all scholarships (including drafts) for admin
      const data = await api.getScholarships({ limit: 100, includeAll: 'true' });
      setScholarships(data.scholarships || []);
      setError(null);
    } catch (err) {
      setError("Failed to load scholarships");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this scholarship?")) return;
    
    try {
      await api.deleteScholarship(id);
      setScholarships(scholarships.filter(s => s.id !== id));
    } catch (err) {
      alert("Failed to delete scholarship");
      console.error(err);
    }
  };

  const handleToggleFeatured = async (scholarship) => {
    try {
      await api.updateScholarship(scholarship.id, { featured: !scholarship.featured });
      setScholarships(scholarships.map(s => 
        s.id === scholarship.id ? { ...s, featured: !s.featured } : s
      ));
    } catch (err) {
      alert("Failed to update scholarship");
      console.error(err);
    }
  };

  const handleToggleStatus = async (scholarship) => {
    const newStatus = scholarship.status === 'PUBLISHED' ? 'DRAFT' : 'PUBLISHED';
    try {
      await api.updateScholarship(scholarship.id, { status: newStatus });
      setScholarships(scholarships.map(s => 
        s.id === scholarship.id ? { ...s, status: newStatus } : s
      ));
    } catch (err) {
      alert("Failed to update scholarship");
      console.error(err);
    }
  };

  return (
    <>
      <AdminHeader 
        title="Scholarships" 
        subtitle="Manage and publish scholarship opportunities"
      />
      <div className="p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">All Scholarships</h2>
            <p className="text-sm text-gray-500 mt-1">View and manage all scholarship listings</p>
          </div>
          <Link
            href="/admin/scholarships/create"
            className="bg-[#8CC63F] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#7AB32F] transition-colors duration-200"
          >
            Add Scholarship
          </Link>
        </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#8CC63F]"></div>
              <p className="mt-4 text-gray-500">Loading scholarships...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600">{error}</p>
              <button
                onClick={fetchScholarships}
                className="mt-4 px-6 py-2 bg-[#8CC63F] text-white rounded-xl hover:bg-[#7AB32F] transition-colors duration-200"
              >
                Try Again
              </button>
            </div>
          ) : scholarships.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
              <p className="text-gray-500 mb-4">No scholarships found</p>
              <Link
                href="/admin/scholarships/create"
                className="inline-block px-6 py-3 bg-[#8CC63F] text-white rounded-xl hover:bg-[#7AB32F] transition-colors duration-200"
              >
                Create First Scholarship
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Title</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">University</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Country</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Deadline</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Featured</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scholarships.map((scholarship) => (
                      <tr key={scholarship.id} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-medium text-gray-900">{scholarship.title}</div>
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {scholarship.university?.name || '-'}
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {scholarship.country?.name || '-'}
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {scholarship.deadline ? new Date(scholarship.deadline).toLocaleDateString() : '-'}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            scholarship.status === 'PUBLISHED' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {scholarship.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => handleToggleFeatured(scholarship)}
                            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                              scholarship.featured 
                                ? 'bg-purple-100 text-purple-800 hover:bg-purple-200' 
                                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                            }`}
                          >
                            {scholarship.featured ? 'Featured' : 'Not Featured'}
                          </button>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <Link
                              href={`/scholarships/${scholarship.slug}`}
                              target="_blank"
                              className="text-[#8CC63F] hover:text-[#7AB32F] text-sm font-medium transition-colors"
                            >
                              View
                            </Link>
                            <button
                              onClick={() => handleToggleStatus(scholarship)}
                              className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                            >
                              {scholarship.status === 'PUBLISHED' ? 'Unpublish' : 'Publish'}
                            </button>
                            <button
                              onClick={() => handleDelete(scholarship.id)}
                              className="text-red-600 hover:text-red-800 text-sm font-medium transition-colors"
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
            </div>
          )}
      </div>
    </>
  );
}
