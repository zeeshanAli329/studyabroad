"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AdminHeader from "@/components/admin/AdminHeader";
import { api } from "@/lib/api";

export default function AdminDestinationsPage() {
  const router = useRouter();
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    checkAuth();
    fetchDestinations();
  }, []);

  const checkAuth = () => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!token || !user || !user.id) {
      router.push('/admin/login');
    }
  };

  const fetchDestinations = async () => {
    try {
      setLoading(true);
      const data = await api.getDestinations({ limit: 100 });
      setDestinations(data.destinations || data || []);
      setError(null);
    } catch (err) {
      setError("Failed to load destinations");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this destination?")) return;
    
    try {
      await api.deleteDestination(id);
      setDestinations(destinations.filter(d => d.id !== id));
    } catch (err) {
      alert("Failed to delete destination");
      console.error(err);
    }
  };

  const handleToggleFeatured = async (destination) => {
    try {
      await api.updateDestination(destination.id, { featured: !destination.featured });
      setDestinations(destinations.map(d => 
        d.id === destination.id ? { ...d, featured: !d.featured } : d
      ));
    } catch (err) {
      alert("Failed to update destination");
      console.error(err);
    }
  };

  const handleToggleStatus = async (destination) => {
    const newStatus = destination.status === 'PUBLISHED' ? 'DRAFT' : 'PUBLISHED';
    try {
      await api.updateDestination(destination.id, { status: newStatus });
      setDestinations(destinations.map(d => 
        d.id === destination.id ? { ...d, status: newStatus } : d
      ));
    } catch (err) {
      alert("Failed to update destination");
      console.error(err);
    }
  };

  return (
    <>
      <AdminHeader 
        title="Destinations" 
        subtitle="Manage study abroad destinations"
      />
      <div className="p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">All Destinations</h2>
            <p className="text-sm text-gray-500 mt-1">View and manage all destination listings</p>
          </div>
          <Link
            href="/admin/destinations/create"
            className="bg-[#8CC63F] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#7AB32F] transition-colors duration-200"
          >
            Add Destination
          </Link>
        </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#8CC63F]"></div>
              <p className="mt-4 text-gray-500">Loading destinations...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600">{error}</p>
              <button
                onClick={fetchDestinations}
                className="mt-4 px-6 py-2 bg-[#8CC63F] text-white rounded-xl hover:bg-[#7AB32F] transition-colors duration-200"
              >
                Try Again
              </button>
            </div>
          ) : destinations.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
              <p className="text-gray-500 mb-4">No destinations found</p>
              <Link
                href="/admin/destinations/create"
                className="inline-block px-6 py-3 bg-[#8CC63F] text-white rounded-xl hover:bg-[#7AB32F] transition-colors duration-200"
              >
                Create First Destination
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Country</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Featured</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {destinations.map((destination) => (
                      <tr key={destination.id} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-medium text-gray-900">{destination.name}</div>
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {destination.country?.name || '-'}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            destination.status === 'PUBLISHED' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {destination.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => handleToggleFeatured(destination)}
                            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                              destination.featured 
                                ? 'bg-purple-100 text-purple-800 hover:bg-purple-200' 
                                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                            }`}
                          >
                            {destination.featured ? 'Featured' : 'Not Featured'}
                          </button>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <Link
                              href={`/destinations/${destination.slug}`}
                              target="_blank"
                              className="text-[#8CC63F] hover:text-[#7AB32F] text-sm font-medium transition-colors"
                            >
                              View
                            </Link>
                            <button
                              onClick={() => handleToggleStatus(destination)}
                              className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                            >
                              {destination.status === 'PUBLISHED' ? 'Unpublish' : 'Publish'}
                            </button>
                            <button
                              onClick={() => handleDelete(destination.id)}
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
