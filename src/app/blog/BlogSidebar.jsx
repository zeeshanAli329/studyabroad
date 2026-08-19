"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

export default function BlogSidebar({ blogs = [] }) {
  const [search, setSearch] = useState("");

  const popularBlogs = blogs.slice(0, 3);

  const categories = [
    "Study Abroad",
    "Scholarships",
    "Visa Guide",
    "Travel Tips",
  ];

  const tags = [
    "Scholarships",
    "Study Abroad",
    "Student Visa",
    "Germany",
    "UK",
    "Canada",
    "IELTS",
    "HEC",
  ];

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    window.location.href = `/blog?search=${encodeURIComponent(
      search.trim()
    )}`;
  };

  return (
    <aside className="lg:sticky lg:top-28 self-start space-y-6">
      {/* =========================
          SEARCH
      ========================= */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-serif text-xl font-semibold text-[var(--text-primary)] pb-4 border-b border-gray-100">
          Search Here
        </h3>

        <form onSubmit={handleSearch} className="mt-5 relative">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-11 rounded-full border border-gray-200 px-5 pr-12 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--primary)] transition-colors"
          />

          <button
            type="submit"
            aria-label="Search blogs"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[var(--primary)] transition-colors"
          >
            <Search size={17} strokeWidth={1.8} />
          </button>
        </form>
      </div>

      {/* =========================
          POPULAR POSTS
      ========================= */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-serif text-xl font-semibold text-[var(--text-primary)] pb-4 border-b border-gray-100">
          Popular Post
        </h3>

        <div className="mt-5 space-y-5">
          {popularBlogs.length > 0 ? (
            popularBlogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blog/${blog.slug}`}
                className="flex gap-4 group"
              >
                <div className="w-[72px] h-[72px] rounded-xl overflow-hidden shrink-0 bg-gray-100">
                  {blog.image ? (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-[var(--background-light)]" />
                  )}
                </div>

                <div className="min-w-0">
                  <div className="text-[11px] text-gray-400 mb-1">
                    {blog.publishedAt
                      ? new Date(blog.publishedAt).toLocaleDateString(
                          "en-PK",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          }
                        )
                      : "Latest"}
                  </div>

                  <h4 className="font-serif text-sm font-semibold leading-5 text-[var(--text-primary)] line-clamp-2 group-hover:text-[var(--primary)] transition-colors">
                    {blog.title}
                  </h4>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-sm text-gray-400">
              No popular posts available.
            </p>
          )}
        </div>
      </div>

      {/* =========================
          CATEGORY
      ========================= */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-serif text-xl font-semibold text-[var(--text-primary)] pb-4 border-b border-gray-100">
          Category
        </h3>

        <div className="mt-4">
          {categories.map((item) => (
            <Link
              key={item}
              href={`/blog?category=${encodeURIComponent(item)}`}
              className="block py-2.5 text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* =========================
          POPULAR TAGS
      ========================= */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-serif text-xl font-semibold text-[var(--text-primary)] pb-4 border-b border-gray-100">
          Popular Tags
        </h3>

        <div className="flex flex-wrap gap-2 mt-5">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog?search=${encodeURIComponent(tag)}`}
              className="px-3 py-2 rounded-full border border-gray-200 text-[11px] text-[var(--text-secondary)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}