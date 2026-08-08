"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AdminHeader from "@/components/admin/AdminHeader";
import { api } from "@/lib/api";

export default function AdminCountriesPage() {
  const router = useRouter();
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    checkAuth();
    fetchCountries();
  }, []);

  const checkAuth = () => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!token || !user || !user.id) {
      router.push('/admin/login');
    }
  };

  const fetchCountries = async () => {
    try {
      setLoading(true);
      const data = await api.getCountries();
      setCountries(data.countries || data || []);
      setError(null);
    } catch (err) {
      setError("Failed to load countries");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this country?")) return;
    
    try {
      await api.deleteCountry(id);
      setCountries(countries.filter(c => c.id !== id));
    } catch (err) {
      alert("Failed to delete country");
      console.error(err);
    }
  };

  const handleToggleFeatured = async (country) => {
    try {
      await api.updateCountry(country.id, { featured: !country.featured });
      setCountries(countries.map(c => 
        c.id === country.id ? { ...c, featured: !c.featured } : c
      ));
    } catch (err) {
      alert("Failed to update country");
      console.error(err);
    }
  };

  const handleToggleStatus = async (country) => {
    const newStatus = country.status === 'PUBLISHED' ? 'DRAFT' : 'PUBLISHED';
    try {
      await api.updateCountry(country.id, { status: newStatus });
      setCountries(countries.map(c => 
        c.id === country.id ? { ...c, status: newStatus } : c
      ));
    } catch (err) {
      alert("Failed to update country");
      console.error(err);
    }
  };

  return (
    <>
      <AdminHeader 
        title="Countries" 
        subtitle="Manage countries and regions"
      />
      <div className="p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">All Countries</h2>
            <p className="text-sm text-gray-500 mt-1">View and manage all country listings</p>
          </div>
          <Link
            href="/admin/countries/create"
            className="bg-[#8CC63F] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#7AB32F] transition-colors duration-200"
          >
            Add Country
          </Link>
        </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#8CC63F]"></div>
              <p className="mt-4 text-gray-500">Loading countries...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600">{error}</p>
              <button
                onClick={fetchCountries}
                className="mt-4 px-6 py-2 bg-[#8CC63F] text-white rounded-xl hover:bg-[#7AB32F] transition-colors duration-200"
              >
                Try Again
              </button>
            </div>
          ) : countries.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
              <p className="text-gray-500 mb-4">No countries found</p>
              <Link
                href="/admin/countries/create"
                className="inline-block px-6 py-3 bg-[#8CC63F] text-white rounded-xl hover:bg-[#7AB32F] transition-colors duration-200"
              >
                Create First Country
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Slug</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Universities</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Featured</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {countries.map((country) => (
                      <tr key={country.id} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-medium text-gray-900">{country.name}</div>
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {country.slug}
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {country._count?.universities || 0}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            country.status === 'PUBLISHED' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {country.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => handleToggleFeatured(country)}
                            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                              country.featured 
                                ? 'bg-purple-100 text-purple-800 hover:bg-purple-200' 
                                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                            }`}
                          >
                            {country.featured ? 'Featured' : 'Not Featured'}
                          </button>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <Link
                              href={`/countries/${country.slug}`}
                              target="_blank"
                              className="text-[#8CC63F] hover:text-[#7AB32F] text-sm font-medium transition-colors"
                            >
                              View
                            </Link>
                            <button
                              onClick={() => handleToggleStatus(country)}
                              className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                            >
                              {country.status === 'PUBLISHED' ? 'Unpublish' : 'Publish'}
                            </button>
                            <button
                              onClick={() => handleDelete(country.id)}
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
