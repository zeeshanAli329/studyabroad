"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { api } from "@/lib/api";

export default function ScholarshipsPage() {
  const [scholarships, setScholarships] = useState([]);
  const [featuredScholarships, setFeaturedScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    search: "",
    country: "",
    degreeLevel: "",
    fieldOfStudy: "",
  });

  useEffect(() => {
    fetchScholarships();
  }, [filters]);

  const fetchScholarships = async () => {
    try {
      setLoading(true);
      const data = await api.getScholarships(filters);
      setScholarships(data.scholarships || []);

      // Fetch featured separately
      const featuredData = await api.getScholarships({
        featured: "true",
        limit: 6,
      });
      setFeaturedScholarships(featuredData.scholarships || []);

      setError(null);
    } catch (err) {
      setError("Failed to load scholarships");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleClearFilters = () => {
    setFilters({
      search: "",
      country: "",
      degreeLevel: "",
      fieldOfStudy: "",
    });
  };

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-[var(--secondary)] rounded-3xl py-20 lg:py-32 mx-4 lg:mx-8">
        <div className="absolute inset-0 opacity-20 rounded-3xl overflow-hidden">
          {/* <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop"
            alt="Scholarships"
            fill
            className="object-cover"
          /> */}
          {/* ---------------------------------- */}
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop"
            alt="Scholarships"
            className="w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[320px] xl:h-[380px] object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-[1320px] px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-[var(--primary)] text-white text-sm font-semibold rounded-full mb-6">
            SCHOLARSHIPS
          </span>
          <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6">
            Find the Right Scholarship for Your Future
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Explore scholarships from universities and institutions around the
            world and find opportunities that match your education goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#scholarships"
              className="px-8 py-4 bg-[var(--primary)] text-white rounded-full font-semibold hover:bg-[var(--primary-dark)] transition-colors"
            >
              Explore Scholarships
            </Link>
            <Link
              href="/appointment"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-[var(--secondary)] transition-colors"
            >
              Get Guidance
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-[var(--primary)]">
                {scholarships.length}+
              </p>
              <p className="text-[var(--text-secondary)] mt-2">Scholarships</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[var(--primary)]">20+</p>
              <p className="text-[var(--text-secondary)] mt-2">Countries</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[var(--primary)]">50+</p>
              <p className="text-[var(--text-secondary)] mt-2">Universities</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[var(--primary)]">100%</p>
              <p className="text-[var(--text-secondary)] mt-2">Verified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section id="scholarships" className="py-16 bg-[var(--background-light)]">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Search Scholarships
                </label>
                <input
                  type="text"
                  placeholder="Search by name..."
                  value={filters.search}
                  onChange={(e) =>
                    setFilters({ ...filters, search: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Country
                </label>
                <select
                  value={filters.country}
                  onChange={(e) =>
                    setFilters({ ...filters, country: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                >
                  <option value="">All Countries</option>
                  <option value="canada">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="australia">Australia</option>
                  <option value="usa">United States</option>
                  <option value="germany">Germany</option>
                  <option value="new-zealand">New Zealand</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Degree Level
                </label>
                <select
                  value={filters.degreeLevel}
                  onChange={(e) =>
                    setFilters({ ...filters, degreeLevel: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                >
                  <option value="">All Degrees</option>
                  <option value="Bachelors">Bachelors</option>
                  <option value="Masters">Masters</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Field of Study
                </label>
                <select
                  value={filters.fieldOfStudy}
                  onChange={(e) =>
                    setFilters({ ...filters, fieldOfStudy: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                >
                  <option value="">All Fields</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Business">Business</option>
                  <option value="Medicine">Medicine</option>
                  <option value="Arts">Arts</option>
                </select>
              </div>
              <div className="flex items-end">
                <button
                  onClick={handleClearFilters}
                  className="w-full px-4 py-3 border border-[var(--border)] text-[var(--text-primary)] rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Scholarships */}
      {featuredScholarships.length > 0 && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="font-serif text-3xl lg:text-4xl text-[var(--text-primary)] mb-4">
                  Featured Scholarships
                </h2>
                <p className="text-[var(--text-secondary)]">
                  Top scholarship opportunities for ambitious students
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredScholarships.map((scholarship) => (
                <Link
                  key={scholarship.id}
                  href={`/scholarships/${scholarship.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-sm overflow-hidden transition-all hover:shadow-lg">
                    {scholarship.image && (
                      <div className="aspect-[16/10] relative">
                        <img
                          src={scholarship.image}
                          alt={scholarship.title}
                          className="w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[320px] xl:h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        {scholarship.featured && (
                          <span className="inline-block px-3 py-1 bg-[var(--primary)] text-white text-xs font-medium rounded-full">
                            Featured
                          </span>
                        )}
                        {scholarship.country && (
                          <span className="text-2xl">
                            {scholarship.country.flag}
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--primary)] transition-colors line-clamp-2">
                        {scholarship.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-3">
                        {scholarship.university && (
                          <span>{scholarship.university.name}</span>
                        )}
                        {scholarship.university && scholarship.country && (
                          <span>•</span>
                        )}
                        {scholarship.country && (
                          <span>{scholarship.country.name}</span>
                        )}
                      </div>
                      {scholarship.amount && (
                        <p className="text-[var(--primary)] font-semibold mb-2">
                          {scholarship.amount} {scholarship.currency}
                        </p>
                      )}
                      {scholarship.deadline && (
                        <p className="text-sm text-[var(--text-secondary)] mb-4">
                          Deadline:{" "}
                          {new Date(scholarship.deadline).toLocaleDateString()}
                        </p>
                      )}
                      {scholarship.shortDescription && (
                        <p className="text-[var(--text-secondary)] text-sm line-clamp-2 mb-4">
                          {scholarship.shortDescription}
                        </p>
                      )}
                      <button className="w-full py-2 border border-[var(--primary)] text-[var(--primary)] rounded-lg font-medium hover:bg-[var(--primary)] hover:text-white transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Scholarships */}
      <section className="py-16 bg-[var(--background-light)]">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl text-[var(--text-primary)] mb-4">
                All Scholarships
              </h2>
              <p className="text-[var(--text-secondary)]">
                {filters.search ||
                filters.country ||
                filters.degreeLevel ||
                filters.fieldOfStudy
                  ? "Filtered results"
                  : `Showing ${scholarships.length} scholarships`}
              </p>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)]"></div>
              <p className="mt-4 text-[var(--text-secondary)]">
                Loading scholarships...
              </p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-[var(--danger)]">{error}</p>
              <button
                onClick={fetchScholarships}
                className="mt-4 px-6 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-dark)]"
              >
                Try Again
              </button>
            </div>
          ) : scholarships.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl p-8">
              <p className="text-[var(--text-secondary)] mb-4">
                No scholarships found matching your criteria.
              </p>
              <button
                onClick={handleClearFilters}
                className="px-6 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-dark)]"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {scholarships.map((scholarship) => (
                <Link
                  key={scholarship.id}
                  href={`/scholarships/${scholarship.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-sm overflow-hidden transition-all hover:shadow-lg">
                    {scholarship.image && (
                      <div className="aspect-[16/10] relative">
                        <img
                          src={scholarship.image}
                          alt={scholarship.title}
                          className="w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[320px] xl:h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        {scholarship.featured && (
                          <span className="inline-block px-3 py-1 bg-[var(--primary)] text-white text-xs font-medium rounded-full">
                            Featured
                          </span>
                        )}
                        {scholarship.country && (
                          <span className="text-2xl">
                            {scholarship.country.flag}
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--primary)] transition-colors line-clamp-2">
                        {scholarship.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-3">
                        {scholarship.university && (
                          <span>{scholarship.university.name}</span>
                        )}
                        {scholarship.university && scholarship.country && (
                          <span>•</span>
                        )}
                        {scholarship.country && (
                          <span>{scholarship.country.name}</span>
                        )}
                      </div>
                      {scholarship.amount && (
                        <p className="text-[var(--primary)] font-semibold mb-2">
                          {scholarship.amount} {scholarship.currency}
                        </p>
                      )}
                      {scholarship.deadline && (
                        <p className="text-sm text-[var(--text-secondary)] mb-4">
                          Deadline:{" "}
                          {new Date(scholarship.deadline).toLocaleDateString()}
                        </p>
                      )}
                      {scholarship.shortDescription && (
                        <p className="text-[var(--text-secondary)] text-sm line-clamp-2 mb-4">
                          {scholarship.shortDescription}
                        </p>
                      )}
                      <button className="w-full py-2 border border-[var(--primary)] text-[var(--primary)] rounded-lg font-medium hover:bg-[var(--primary)] hover:text-white transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--secondary)]">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl text-white mb-6">
            Need Help Finding the Right Scholarship?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Our expert consultants can help you find the perfect scholarship for
            your education goals.
          </p>
          <Link
            href="/appointment"
            className="inline-block px-8 py-4 bg-[var(--primary)] text-white rounded-full font-semibold hover:bg-[var(--primary-dark)] transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
