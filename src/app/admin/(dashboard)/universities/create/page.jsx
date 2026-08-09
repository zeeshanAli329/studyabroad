"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";

export default function CreateUniversityPage() {
  const router = useRouter();
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    countryId: '',
    location: '',
    description: '',
    website: '',
    image: '',
    ranking: '',
    founded: '',
    status: 'DRAFT',
  });

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const data = await api.getCountries();
      const countriesList = data.countries || data || [];
      setCountries(countriesList);
      
      if (countriesList.length === 0) {
        setError('No countries available. Please create a country first before creating a university.');
      }
    } catch (err) {
      console.error("Failed to fetch countries:", err);
      setError('Failed to load countries. Please ensure the backend is running.');
    }
  };

  const generateSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleNameChange = (e) => {
    const name = e.target.value;
    setFormData({
      ...formData,
      name,
      slug: generateSlug(name),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      console.log('UNIVERSITY: Creating with data:', formData);
      const result = await api.createUniversity(formData);
      console.log('UNIVERSITY: Created successfully:', result);
      alert('University created successfully!');
      router.push('/admin/universities');
    } catch (err) {
      console.error('UNIVERSITY: Creation error:', err);
      
      if (err.message === 'Failed to fetch') {
        setError('Unable to connect to the server. Please ensure the backend is running on port 5000.');
      } else if (err.message.includes('Authentication')) {
        setError('Authentication required. Please log in again.');
      } else if (err.message.includes('Admin access')) {
        setError('Admin access required. You do not have permission to create universities.');
      } else {
        setError(`Failed to create university: ${err.message || 'Unknown error'}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-serif text-3xl text-[var(--text-primary)]">
          Create University
        </h1>
        <Link
          href="/admin/universities"
          className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
        >
          Back to Universities
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8">
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={handleNameChange}
                className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                placeholder="University name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Slug *
              </label>
              <input
                type="text"
                required
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                placeholder="university-slug"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
              Country *
            </label>
            <select
              value={formData.countryId}
              onChange={(e) => setFormData({ ...formData, countryId: e.target.value })}
              className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              required
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
            {countries.length === 0 && (
              <p className="text-xs text-red-600 mt-1">No countries available. Please create a country first.</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
              Location
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              placeholder="City, State/Province"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
              Description *
            </label>
            <textarea
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={6}
              className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none"
              placeholder="University description"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
              Website
            </label>
            <input
              type="url"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              placeholder="https://university.edu"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
              Image URL
            </label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Ranking
              </label>
              <input
                type="number"
                value={formData.ranking}
                onChange={(e) => setFormData({ ...formData, ranking: e.target.value })}
                className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                placeholder="1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Founded Year
              </label>
              <input
                type="number"
                value={formData.founded}
                onChange={(e) => setFormData({ ...formData, founded: e.target.value })}
                className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                placeholder="1900"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
              Status
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="px-4 py-2 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            >
              <option value="DRAFT">Draft</option>
              <option value="PUBLISHED">Published</option>
            </select>
          </div>

          <div className="flex items-center gap-4 pt-6 border-t">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-[var(--primary)] text-white rounded-lg font-medium hover:bg-[var(--primary-dark)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating...' : 'Create University'}
            </button>
            <Link
              href="/admin/universities"
              className="px-6 py-3 border border-[var(--border)] text-[var(--text-primary)] rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
