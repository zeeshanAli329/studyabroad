"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { api, API_URL } from "@/lib/api";

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

    // Advertisement stats
    totalAdvertisements: 0,
    activeAdvertisements: 0,
    inactiveAdvertisements: 0,
  });

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkAuth();
    fetchStats();
  }, []);

  const checkAuth = () => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token || !userData) {
      router.push("/admin/login");
      return;
    }

    setUser(JSON.parse(userData));
  };

  const fetchStats = async () => {
    try {
      setLoading(true);

      const [
        scholarshipsData,
        blogsData,
        usersData,
        inquiriesData,
        appointmentsData,
        advertisementsData,
        subscribersData,
      ] = await Promise.all([
        api.getScholarships({ limit: 100 }),
        api.getBlogs({ limit: 100 }),
        api.getUsers(),
        api.getContactSubmissions(),
        api.getAppointments(),
        api.getAllAdvertisements(),

        fetch(`${API_URL}/subscribers/count`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }).then((res) => res.json()),
      ]);

      const scholarships =
        scholarshipsData?.scholarships || [];

      const blogs =
        blogsData?.blogs || [];

      const users =
        usersData || [];

      const inquiries =
        inquiriesData || [];

      const appointments =
        appointmentsData || [];

      // -----------------------------------------
      // Advertisement data
      // -----------------------------------------

      const advertisements =
        Array.isArray(advertisementsData)
          ? advertisementsData
          : advertisementsData?.data || [];

      const activeAdvertisements =
        advertisements.filter(
          (ad) => ad.isActive === true
        );

      const inactiveAdvertisements =
        advertisements.filter(
          (ad) => ad.isActive === false
        );

      setStats({
        totalScholarships: scholarships.length,

        publishedScholarships:
          scholarships.filter(
            (s) => s.status === "PUBLISHED"
          ).length,

        featuredScholarships:
          scholarships.filter(
            (s) => s.featured
          ).length,

        draftScholarships:
          scholarships.filter(
            (s) => s.status === "DRAFT"
          ).length,

        totalBlogs: blogs.length,

        totalUsers: users.length,

        totalInquiries: inquiries.length,

        totalAppointments: appointments.length,

        // Advertisement stats
        totalAdvertisements:
          advertisements.length,

        activeAdvertisements:
          activeAdvertisements.length,

        inactiveAdvertisements:
          inactiveAdvertisements.length,
      });
    } catch (error) {
      console.error(
        "Failed to fetch stats:",
        error
      );

      setStats({
        totalScholarships: 0,
        publishedScholarships: 0,
        featuredScholarships: 0,
        draftScholarships: 0,
        totalBlogs: 0,
        totalUsers: 0,
        totalInquiries: 0,
        totalAppointments: 0,

        totalAdvertisements: 0,
        activeAdvertisements: 0,
        inactiveAdvertisements: 0,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AdminHeader
        title="Dashboard"
        subtitle={
          user
            ? `Welcome back, ${
                user.fullName || user.email
              }`
            : "Overview of your Study Abroad platform"
        }
      />

      <div className="p-6 lg:p-8">
        {loading ? (
          <div className="py-12 text-center">
            <div className="inline-block h-12 w-12 animate-spin rounded-full border-b-2 border-[var(--primary)]"></div>

            <p className="mt-4 text-gray-500">
              Loading dashboard...
            </p>
          </div>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
                <h3 className="mb-2 text-sm font-medium text-gray-500">
                  Total Scholarships
                </h3>

                <p className="text-3xl font-bold text-gray-900">
                  {stats.totalScholarships}
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
                <h3 className="mb-2 text-sm font-medium text-gray-500">
                  Published
                </h3>

                <p className="text-3xl font-bold text-[var(--primary)]">
                  {stats.publishedScholarships}
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
                <h3 className="mb-2 text-sm font-medium text-gray-500">
                  Featured
                </h3>

                <p className="text-3xl font-bold text-purple-600">
                  {stats.featuredScholarships}
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
                <h3 className="mb-2 text-sm font-medium text-gray-500">
                  Drafts
                </h3>

                <p className="text-3xl font-bold text-yellow-600">
                  {stats.draftScholarships}
                </p>
              </div>
            </div>

            {/* Existing Blog / User Stats */}
            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
                <h3 className="mb-2 text-sm font-medium text-gray-500">
                  Total Blogs
                </h3>

                <p className="text-3xl font-bold text-gray-900">
                  {stats.totalBlogs}
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
                <h3 className="mb-2 text-sm font-medium text-gray-500">
                  Total Users
                </h3>

                <p className="text-3xl font-bold text-gray-900">
                  {stats.totalUsers}
                </p>
              </div>
            </div>

            {/* =====================================================
                ADVERTISEMENT STATS
                ===================================================== */}
            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              
              {/* Total Ads */}
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
                <h3 className="mb-2 text-sm font-medium text-gray-500">
                  Total Advertisements
                </h3>

                <p className="text-3xl font-bold text-gray-900">
                  {stats.totalAdvertisements}
                </p>

                <p className="mt-2 text-xs text-gray-400">
                  All advertisements
                </p>
              </div>

              {/* Active Ads */}
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
                <h3 className="mb-2 text-sm font-medium text-gray-500">
                  Active Advertisements
                </h3>

                <p className="text-3xl font-bold text-[var(--primary)]">
                  {stats.activeAdvertisements}
                </p>

                <p className="mt-2 text-xs text-[var(--success)]">
                  Currently active
                </p>
              </div>

              {/* Inactive Ads */}
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
                <h3 className="mb-2 text-sm font-medium text-gray-500">
                  Inactive Advertisements
                </h3>

                <p className="text-3xl font-bold text-gray-500">
                  {stats.inactiveAdvertisements}
                </p>

                <p className="mt-2 text-xs text-gray-400">
                  Currently inactive
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mb-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="mb-4 font-serif text-xl text-gray-900">
                Quick Actions
              </h2>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/admin/scholarships/create"
                  className="rounded-xl bg-[var(--primary)] px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-[var(--primary)]"
                >
                  Add Scholarship
                </Link>

                <Link
                  href="/admin/blog"
                  className="rounded-xl border border-gray-200 px-6 py-3 font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50"
                >
                  Manage Blogs
                </Link>

                <Link
                  href="/admin/countries"
                  className="rounded-xl border border-gray-200 px-6 py-3 font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50"
                >
                  Manage Countries
                </Link>
              </div>
            </div>

            {/* System Status */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="mb-4 font-serif text-xl text-gray-900">
                System Status
              </h2>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-[var(--success)]/100"></div>

                  <span className="text-gray-600">
                    Backend API: Online
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-[var(--success)]/100"></div>

                  <span className="text-gray-600">
                    Database: Connected
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-[var(--success)]/100"></div>

                  <span className="text-gray-600">
                    Authentication: Active
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}