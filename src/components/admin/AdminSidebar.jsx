"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { HiBars3, HiXMark, HiArrowRightOnRectangle } from "react-icons/hi2";

export default function AdminSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = () => {
      const userData = localStorage.getItem("user");
      if (userData) {
        setUser(JSON.parse(userData));
      } else {
        setUser(null);
      }
    };

    loadUser();

    // Listen for storage changes (e.g., when user logs in/out in another tab)
    const handleStorageChange = () => {
      loadUser();
    };

    window.addEventListener("storage", handleStorageChange);

    // Also listen for custom event for same-tab updates
    window.addEventListener("user-auth-changed", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("user-auth-changed", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event("user-auth-changed"));
    router.push("/admin/login");
    setMobileMenuOpen(false);
  };

  const navItems = [
    { name: "Dashboard", href: "/admin/dashboard" },
    { name: "Scholarships", href: "/admin/scholarships" },
    { name: "Blogs", href: "/admin/blog" },
    { name: "Countries", href: "/admin/countries" },
    { name: "Universities", href: "/admin/universities" },
    { name: "Destinations", href: "/admin/destinations" },
    { name: "Inquiries", href: "/admin/inquiries" },
    { name: "Users", href: "/admin/users" },
    { name: "Subscribers", href: "/admin/subscribers" },
    // { name: 'Images', href: '/admin/images' },
    { name: "Settings", href: "/admin/settings" },
  ];

  const isActive = (href) => {
    if (href === "/admin/dashboard") {
      return pathname === "/admin/dashboard" || pathname === "/admin";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-[#8CC63F] text-white p-3 rounded-xl shadow-lg hover:bg-[#7AB32F] transition-all duration-200"
      >
        <HiBars3 className="w-6 h-6" />
      </button>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:z-0`}
      >
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-6 border-b border-gray-100">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              {/* <Image
                src="/logo2.png"
                alt="RouteX"
                width={155}
                height={55}
                className="lg:h-20 h-10 md:h-20 w-auto"
                priority
              /> */}
              <img
                src="/logo2.png"
                alt="RouteX"
                width={155}
                height={55}
                className="lg:h-20 h-10 md:h-20 w-auto"
              />
              <p className="text-xs text-gray-500 mt-2 font-medium">
                Study Abroad Admin
              </p>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Main
            </div>
            {navItems.slice(0, 1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${
                  isActive(item.href)
                    ? "bg-[#8CC63F]/10 text-[#8CC63F] font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 py-2 mt-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Content
            </div>
            {navItems.slice(1, 7).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${
                  isActive(item.href)
                    ? "bg-[#8CC63F]/10 text-[#8CC63F] font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 py-2 mt-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              System
            </div>
            {navItems.slice(7).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${
                  isActive(item.href)
                    ? "bg-[#8CC63F]/10 text-[#8CC63F] font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User Section */}
          <div className="p-6 border-t border-gray-100 bg-gray-50/50">
            {user && (
              <div className="mb-4">
                <p className="text-gray-400 text-xs mb-1">Logged in as</p>
                <p className="text-gray-900 font-medium text-sm truncate">
                  {user.fullName || user.email}
                </p>
              </div>
            )}
            <button
              onClick={handleLogout}
              className="w-full px-4 py-3 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 text-sm font-medium text-left flex items-center gap-2"
            >
              <HiArrowRightOnRectangle className="w-4 h-4" />
              Logout
            </button>
          </div>

          {/* Mobile Close Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="lg:hidden absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <HiXMark className="w-6 h-6" />
          </button>
        </div>
      </aside>
    </>
  );
}
