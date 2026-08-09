"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { api } from "@/lib/api";

export default function CountriesPage() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Professional fallback images for countries
  const getCountryImage = (country) => {
    if (country.image) return country.image;
    
    const countryImages = {
      'USA': 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop',
      'United States': 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop',
      'UK': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop',
      'United Kingdom': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop',
      'Canada': 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&h=600&fit=crop',
      'Australia': 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&h=600&fit=crop',
      'Germany': 'https://images.unsplash.com/photo-1580136608260-4eb11f8b2df0?w=800&h=600&fit=crop',
      'France': 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop',
      'Japan': 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop',
      'New Zealand': 'https://images.unsplash.com/photo-1507699622177-3888a5f755f8?w=800&h=600&fit=crop',
      'Singapore': 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=600&fit=crop',
      'Netherlands': 'https://images.unsplash.com/photo-1584467842683-76c5a1807c03?w=800&h=600&fit=crop',
      'Sweden': 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&h=600&fit=crop',
      'Switzerland': 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&h=600&fit=crop',
      'Ireland': 'https://images.unsplash.com/photo-1558974476-1b80c7a46e30?w=800&h=600&fit=crop',
      'Spain': 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop',
      'Italy': 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&h=600&fit=crop',
    };
    
    return countryImages[country.name] || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop';
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      setLoading(true);
      const data = await api.getCountries();
      setCountries(data || []);
      setError(null);
    } catch (err) {
      setError("Failed to load countries");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section
        className="relative w-full overflow-hidden rounded-3xl mx-4 lg:mx-8 mb-8"
        style={{
          backgroundImage: "linear-gradient(120deg, rgba(15,58,45,0.92), rgba(15,58,45,0.75)), url('https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/breadcrumb.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <h1 className="text-white text-4xl sm:text-5xl font-serif font-semibold tracking-tight mb-4">
            Explore Study Destinations
          </h1>
          <p className="text-white/90 text-lg sm:text-xl max-w-2xl">
            Discover leading study destinations and find the right country for your international education journey.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1320px] px-6 py-8 lg:px-8">

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)]"></div>
            <p className="mt-4 text-[var(--text-secondary)]">Loading countries...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-[var(--danger)]">{error}</p>
            <button
              onClick={fetchCountries}
              className="mt-4 px-6 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-dark)]"
            >
              Try Again
            </button>
          </div>
        ) : countries.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[var(--text-secondary)]">No countries available.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country) => (
              <Link
                key={country.id}
                href={`/countries/${country.slug}`}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-lg">
                  <div className="aspect-[4/3] relative bg-gray-100">
                    <img
                      src={getCountryImage(country)}
                      alt={country.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-4xl">{country.flag || '🌍'}</span>
                      <h3 className="font-serif text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                        {country.name}
                      </h3>
                    </div>
                    {country.description && (
                      <p className="text-[var(--text-secondary)] text-sm line-clamp-2 mb-4">
                        {country.description}
                      </p>
                    )}
                    <button className="w-full py-2 border border-[var(--primary)] text-[var(--primary)] rounded-lg font-medium hover:bg-[var(--primary)] hover:text-white transition-colors">
                      Explore Country
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
