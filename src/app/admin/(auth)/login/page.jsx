"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";

export default function AdminLoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    emailOrUsername: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || (typeof window !== 'undefined' && window.location.hostname === 'localhost' ? 'http://localhost:5000/api' : '/api');
      const response = await fetch(`${API_URL}/auth/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Invalid username/email or password');
        } else if (response.status === 404) {
          throw new Error('Admin account not found');
        } else if (response.status === 500) {
          throw new Error('Server error. Please try again later');
        } else {
          throw new Error(data.error || 'Login failed');
        }
      }

      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        // Dispatch event to notify other components of auth change
        window.dispatchEvent(new Event('user-auth-changed'));
      }

      router.push('/admin/dashboard');
    } catch (err) {
      setError(err.message || 'Unable to connect to the server. Please try again.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F8FAF7] via-[#EEF5E9] to-[#F9FAF8] relative overflow-hidden p-4 md:p-8">
      {/* Subtle background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8CC63F] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#0E4A3A] opacity-3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8CC63F] opacity-3 rounded-full blur-3xl"></div>
      </div>

      {/* Authentication Card */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10 animate-fade-in-up">
        {/* Logo */}
        <div className="text-center mb-8">
          <Image
            src="https://wp.rrdevs.net/routex/wp-content/themes/routex/assets/imgs/logo/logo.svg"
            alt="RouteX"
            width={155}
            height={55}
            className="h-10 w-auto mx-auto mb-6"
          />
          <h1 className="text-2xl font-semibold text-[var(--text-primary)] mb-2">
            Admin Portal
          </h1>
          <p className="text-[var(--text-secondary)] text-sm">
            Welcome back. Sign in to continue managing the StudyAbroad platform.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
              Email or Username
            </label>
            <input
              type="text"
              required
              value={formData.emailOrUsername}
              onChange={(e) => setFormData({ ...formData, emailOrUsername: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:border-transparent transition-all duration-200 bg-[#F8F9F5]"
              placeholder="admin@example.com or admin"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:border-transparent transition-all duration-200 pr-12 bg-[#F8F9F5]"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-[var(--text-secondary)] cursor-pointer">
              <input type="checkbox" className="mr-2 rounded border-gray-300 text-[#8CC63F] focus:ring-[#8CC63F]" />
              Remember me
            </label>
            <Link href="/forgot-password" className="text-sm text-[#8CC63F] hover:underline transition-colors">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#8CC63F] text-white py-3 rounded-lg font-semibold hover:bg-[#6FA82F] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-[var(--text-secondary)]">
          <p>
            Don't have an admin account?{' '}
            <Link href="/admin/signup" className="text-[#8CC63F] font-semibold hover:underline transition-colors">
              Create Admin Account
            </Link>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-up {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
