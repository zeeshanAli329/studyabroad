"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { HiOutlineBell, HiOutlineCog, HiOutlineUser, HiArrowRightOnRectangle } from "react-icons/hi2";

export default function AdminHeader({ title, subtitle }) {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = () => {
      const userData = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
      if (userData) {
        setUser(JSON.parse(userData));
      } else {
        setUser(null);
      }
    };

    loadUser();

    const handleStorageChange = () => {
      loadUser();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('user-auth-changed', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('user-auth-changed', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    window.dispatchEvent(new Event('user-auth-changed'));
    router.push('/admin/login');
  };

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-5">
      <div className="flex items-center justify-between">
        {/* Page Title */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <button className="relative p-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all duration-200">
            <HiOutlineBell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#8CC63F] rounded-full"></span>
          </button>

          {/* Settings */}
          <button className="p-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all duration-200">
            <HiOutlineCog className="w-5 h-5" />
          </button>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-xl transition-all duration-200"
            >
              <div className="w-9 h-9 bg-gradient-to-br from-[#8CC63F] to-[#7AB32F] rounded-xl flex items-center justify-center text-white text-sm font-semibold shadow-sm">
                {user?.fullName?.charAt(0) || user?.email?.charAt(0) || 'A'}
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-semibold text-gray-900">{user?.fullName || 'Admin'}</p>
                <p className="text-xs text-gray-500">{user?.role || 'ADMIN'}</p>
              </div>
            </button>

            {/* Dropdown */}
            {showDropdown && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowDropdown(false)}
                />
                <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-20">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-semibold text-gray-900">{user?.fullName || 'Admin'}</p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                  <button
                    onClick={() => {
                      setShowDropdown(false);
                      router.push('/admin/settings');
                    }}
                    className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors"
                  >
                    <HiOutlineUser className="w-4 h-4 text-gray-400" />
                    Profile
                  </button>
                  <button
                    onClick={() => {
                      setShowDropdown(false);
                      router.push('/admin/settings');
                    }}
                    className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors"
                  >
                    <HiOutlineCog className="w-4 h-4 text-gray-400" />
                    Settings
                  </button>
                  <div className="border-t border-gray-100 my-1"></div>
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-3 transition-colors"
                  >
                    <HiArrowRightOnRectangle className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
