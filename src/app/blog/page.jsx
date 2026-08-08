"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { api } from "@/lib/api";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchBlogs();
  }, [search, category]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const params = {};
      if (search) params.search = search;
      if (category) params.category = category;
      
      const data = await api.getBlogs(params);
      setBlogs(data.blogs || []);
      setError(null);
    } catch (err) {
      setError("Failed to load blogs");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-[var(--secondary)] rounded-3xl py-20 lg:py-32 mx-4 lg:mx-8">
        <div className="absolute inset-0 opacity-20 rounded-3xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&h=1080&fit=crop"
            alt="Blog"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-[1320px] px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-[var(--primary)] text-white text-sm font-semibold rounded-full mb-6">
            BLOG
          </span>
          <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6">
            Study Abroad Insights
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Latest news, tips, and guides for your study abroad journey.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-[1320px] px-6 py-16 lg:px-8">

        {/* Search and Filter */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            >
              <option value="">All Categories</option>
              <option value="Study Abroad">Study Abroad</option>
              <option value="Visa Guide">Visa Guide</option>
              <option value="Scholarships">Scholarships</option>
              <option value="Travel Tips">Travel Tips</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)]"></div>
            <p className="mt-4 text-[var(--text-secondary)]">Loading articles...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-[var(--danger)]">{error}</p>
            <button
              onClick={fetchBlogs}
              className="mt-4 px-6 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-dark)]"
            >
              Try Again
            </button>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[var(--text-secondary)]">No articles found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blog/${blog.slug}`}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-lg">
                  {blog.image && (
                    <div className="aspect-[16/10] relative">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {blog.featured && (
                      <span className="inline-block px-3 py-1 bg-[var(--primary)] text-white text-xs font-medium rounded-full mb-3">
                        Featured
                      </span>
                    )}
                    {blog.category && (
                      <span className="inline-block px-3 py-1 bg-[var(--background-light)] text-[var(--text-primary)] text-xs font-medium rounded-full mb-3">
                        {blog.category}
                      </span>
                    )}
                    <h3 className="font-serif text-xl font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                      {blog.title}
                    </h3>
                    {blog.excerpt && (
                      <p className="text-[var(--text-secondary)] text-sm line-clamp-2 mb-4">
                        {blog.excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between text-sm text-[var(--text-secondary)]">
                      {blog.author && <span>{blog.author}</span>}
                      {blog.publishedAt && (
                        <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                      )}
                    </div>
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
