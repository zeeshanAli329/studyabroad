"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { api } from "@/lib/api";

export default function DashboardClient() {
  const router = useRouter();
  const [stats, setStats] = useState({
    totalScholarships: 0,
    publishedScholarships: 0,
    featuredScholarships: 0,
    draftScholarships: 0,
    totalBlogs: 0,
    totalUsers: 0,
    totalInquiries: 0,
    totalAppointments: 0,
  });
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkAuth();
    fetchStats();
  }, []);

  const checkAuth = () => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (!token || !userData) {
      router.push('/admin/login');
      return;
    }
    setUser(JSON.parse(userData));
  };

  const fetchStats = async () => {
    try {
      const [scholarshipsData, blogsData] = await Promise.all([
        api.getScholarships({ limit: 100 }),
        api.getBlogs({ limit: 100 }),
      ]);

      const scholarships = scholarshipsData.scholarships || [];
      const blogs = blogsData.blogs || [];

      setStats({
        totalScholarships: scholarships.length,
        publishedScholarships: scholarships.filter(s => s.status === 'PUBLISHED').length,
        featuredScholarships: scholarships.filter(s => s.featured).length,
        draftScholarships: scholarships.filter(s => s.status === 'DRAFT').length,
        totalBlogs: blogs.length,
        totalUsers: 1,
        totalInquiries: 0,
        totalAppointments: 0,
      });
    } catch (error) {
      console.error("Failed to fetch stats:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AdminHeader 
        title="Dashboard" 
        subtitle={user ? `Welcome back, ${user.fullName || user.email}` : "Overview of your Study Abroad platform"}
      />
      <div className="p-6 lg:p-8">

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#8CC63F]"></div>
              <p className="mt-4 text-gray-500">Loading dashboard...</p>
            </div>
          ) : (
            <>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-gray-500 text-sm font-medium mb-2">Total Scholarships</h3>
                  <p className="text-3xl font-bold text-gray-900">{stats.totalScholarships}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-gray-500 text-sm font-medium mb-2">Published</h3>
                  <p className="text-3xl font-bold text-[#8CC63F]">{stats.publishedScholarships}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-gray-500 text-sm font-medium mb-2">Featured</h3>
                  <p className="text-3xl font-bold text-purple-600">{stats.featuredScholarships}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-gray-500 text-sm font-medium mb-2">Drafts</h3>
                  <p className="text-3xl font-bold text-yellow-600">{stats.draftScholarships}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-gray-500 text-sm font-medium mb-2">Total Blogs</h3>
                  <p className="text-3xl font-bold text-gray-900">{stats.totalBlogs}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-gray-500 text-sm font-medium mb-2">Total Users</h3>
                  <p className="text-3xl font-bold text-gray-900">{stats.totalUsers}</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-8">
                <h2 className="font-serif text-xl text-gray-900 mb-4">
                  Quick Actions
                </h2>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/admin/scholarships/create"
                    className="px-6 py-3 bg-[#8CC63F] text-white rounded-xl font-medium hover:bg-[#7AB32F] transition-colors duration-200"
                  >
                    Add Scholarship
                  </Link>
                  <Link
                    href="/admin/blog"
                    className="px-6 py-3 border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-200"
                  >
                    Manage Blogs
                  </Link>
                  <Link
                    href="/admin/countries"
                    className="px-6 py-3 border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-200"
                  >
                    Manage Countries
                  </Link>
                </div>
              </div>

              {/* System Status */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h2 className="font-serif text-xl text-gray-900 mb-4">
                  System Status
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-gray-600">Backend API: Online</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-gray-600">Database: Connected</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-gray-600">Authentication: Active</span>
                  </div>
                </div>
              </div>
            </>
          )}
      </div>
    </>
  );
}
