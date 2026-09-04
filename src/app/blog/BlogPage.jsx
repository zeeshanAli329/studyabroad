"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, User, Calendar } from "lucide-react";
import { api } from "@/lib/api";
import BlogSidebar from "./BlogSidebar";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [sidebarBlogs, setSidebarBlogs] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const [page, setPage] = useState(1);

  const blogsPerPage = 3;

  useEffect(() => {
    const params = {};

    const urlParams = new URLSearchParams(window.location.search);

    const urlSearch = urlParams.get("search") || "";
    const urlCategory = urlParams.get("category") || "";

    setSearch(urlSearch);
    setCategory(urlCategory);

    if (urlSearch) params.search = urlSearch;
    if (urlCategory) params.category = urlCategory;

    fetchBlogs(params);
  }, []);

  useEffect(() => {
    if (search || category) {
      fetchBlogs({
        ...(search && { search }),
        ...(category && { category }),
      });
    }
  }, [search, category]);

  const fetchBlogs = async (params = {}) => {
    try {
      setLoading(true);

      const data = await api.getBlogs(params);

      const fetchedBlogs = data?.blogs || [];

      setBlogs(fetchedBlogs);

      if (!search && !category) {
        setSidebarBlogs(fetchedBlogs);
      } else {
        try {
          const sidebarData = await api.getBlogs({});
          setSidebarBlogs(sidebarData?.blogs || []);
        } catch {
          setSidebarBlogs(fetchedBlogs);
        }
      }

      setError(null);
      setPage(1);
    } catch (err) {
      console.error("Failed to load blogs:", err);
      setError("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const startIndex = (page - 1) * blogsPerPage;

  const currentBlogs = blogs.slice(startIndex, startIndex + blogsPerPage);

  const goToPage = (number) => {
    if (number < 1 || number > totalPages) return;

    setPage(number);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className=" bg-white">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative mx-0 -top-4 rounded-none overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&h=1080&fit=crop"
            alt="Study abroad blog"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[var(--primary-dark)]" />
        </div>

        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-[var(--primary)] text-white text-xs font-semibold rounded-full mb-5">
              BLOG
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-5">
              Study Abroad Blog & Resources
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-8 max-w-3xl">
              Stay informed with the latest scholarship deadlines, visa updates,
              and practical study-abroad advice — written specifically for
              Pakistani students planning their international education journey.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          BLOG CONTENT
      ===================================================== */}
      <section className="max-w-[1320px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_350px] gap-10 lg:gap-14">
          {/* =================================================
              LEFT BLOGS
          ================================================= */}
          <div>
            {loading ? (
              <div className="py-20 text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)]" />

                <p className="mt-4 text-sm text-[var(--text-secondary)]">
                  Loading articles...
                </p>
              </div>
            ) : error ? (
              <div className="py-20 text-center">
                <p className="text-[var(--danger)]">{error}</p>

                <button
                  onClick={() =>
                    fetchBlogs({
                      ...(search && { search }),
                      ...(category && { category }),
                    })
                  }
                  className="mt-5 px-6 py-3 rounded-full bg-[var(--primary)] text-white text-sm font-medium hover:bg-[var(--primary-dark)] transition-colors"
                >
                  Try Again
                </button>
              </div>
            ) : currentBlogs.length === 0 ? (
              <div className="py-20 text-center">
                <p className="text-[var(--text-secondary)]">
                  No articles found.
                </p>
              </div>
            ) : (
              <div className="space-y-14">
                {currentBlogs.map((blog) => (
                  <article key={blog.id} className="group">
                    {/* Blog Image */}
                    {blog.image && (
                      <Link href={`/blog/${blog.slug}`}>
                        <div className="relative w-full aspect-[16/8.5] rounded-2xl overflow-hidden bg-gray-100">
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                        </div>
                      </Link>
                    )}

                    {/* Meta — single clean row: profile icon + hardcoded name, then calendar icon + date */}
                    <div className="flex flex-wrap items-center gap-6 mt-5 text-xs text-[var(--text-secondary)]">
                      <span className="flex items-center gap-1.5">
                        <User size={14} className="text-[var(--primary)]" />
                        STUDYABROAD
                      </span>

                      {blog.publishedAt && (
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} className="text-[var(--primary)]" />
                          {new Date(blog.publishedAt).toLocaleDateString(
                            "en-PK",
                            {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            },
                          )}
                        </span>
                      )}

                      {blog.category && (
                        <span className="text-[var(--primary)] font-medium">
                          {blog.category}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <Link href={`/blog/${blog.slug}`}>
                      <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-[1.12] lg:text-[var(--text-primary)] text-[#1557A6] mt-4 mb-4 group-hover:text-[var(--primary)] transition-colors">
                        {blog.title}
                      </h2>
                    </Link>

                    {/* Excerpt */}
                    {blog.excerpt && (
                      <p className="text-sm sm:text-base leading-7 text-[var(--text-secondary)] max-w-3xl line-clamp-3">
                        {blog.excerpt}
                      </p>
                    )}

                    {/* Read More */}
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-[var(--primary)] text-white text-sm font-semibold hover:bg-[var(--primary-dark)] transition-all"
                    >
                      Read More
                      <ChevronRight size={16} />
                    </Link>
                  </article>
                ))}
              </div>
            )}

            {/* =================================================
                PAGINATION
            ================================================= */}
            {!loading && !error && totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-16">
                <button
                  onClick={() => goToPage(page - 1)}
                  disabled={page === 1}
                  className="w-11 h-11 rounded-lg border border-gray-200 cursor-pointer flex items-center justify-center text-[var(--text-primary)] disabled:opacity-40 disabled:cursor-not-allowed hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>

                {Array.from({ length: totalPages }, (_, index) => {
                  const pageNumber = index + 1;

                  return (
                    <button
                      key={pageNumber}
                      onClick={() => goToPage(pageNumber)}
                      className={`w-11 h-11 rounded-lg border cursor-pointer flex items-center justify-center text-sm font-medium transition-colors ${
                        page === pageNumber
                          ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                          : "border-gray-200 text-[var(--text-primary)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}

                <button
                  onClick={() => goToPage(page + 1)}
                  disabled={page === totalPages}
                  className="w-11 h-11 rounded-lg border cursor-pointer border-gray-200 flex items-center justify-center text-[var(--text-primary)] disabled:opacity-40 disabled:cursor-not-allowed hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>

          {/* =================================================
              SIDEBAR
          ================================================= */}
          <BlogSidebar blogs={sidebarBlogs} />
        </div>
      </section>
    </main>
  );
}