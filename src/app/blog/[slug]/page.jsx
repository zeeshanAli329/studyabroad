"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { api } from "@/lib/api";

export default function BlogDetailPage() {
  const params = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (params.slug) {
      fetchBlog();
    }
  }, [params.slug]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const data = await api.getBlogBySlug(params.slug);
      setBlog(data);
      setError(null);
    } catch (err) {
      setError("Failed to load blog post");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="pt-24">
        <div className="mx-auto max-w-[1320px] px-6 py-16 lg:px-8">
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)]"></div>
            <p className="mt-4 text-[var(--text-secondary)]">Loading article...</p>
          </div>
        </div>
      </main>
    );
  }

  if (error || !blog) {
    return (
      <main className="pt-24">
        <div className="mx-auto max-w-[1320px] px-6 py-16 lg:px-8">
          <div className="text-center py-12">
            <p className="text-[var(--danger)]">{error || "Blog post not found"}</p>
            <Link
              href="/blog"
              className="inline-block mt-4 px-6 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-dark)]"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24">
      <div className="mx-auto max-w-[1320px] px-6 py-16 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-[var(--text-secondary)] hover:text-[var(--primary)]">
              Home
            </Link>
            <span className="text-[var(--text-secondary)]">/</span>
            <Link href="/blog" className="text-[var(--text-secondary)] hover:text-[var(--primary)]">
              Blog
            </Link>
            <span className="text-[var(--text-secondary)]">/</span>
            <span className="text-[var(--text-primary)]">{blog.title}</span>
          </ol>
        </nav>

        {/* Featured Image */}
        {blog.image && (
          <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-8 relative">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Header */}
        <div className="mb-8">
          {blog.category && (
            <span className="inline-block px-3 py-1 bg-[var(--primary)] text-white text-sm font-medium rounded-full mb-4">
              {blog.category}
            </span>
          )}
          <h1 className="font-serif text-4xl lg:text-5xl text-[var(--text-primary)] mb-4">
            {blog.title}
          </h1>
          <div className="flex items-center gap-4 text-[var(--text-secondary)]">
            {blog.author && <span>By {blog.author}</span>}
            {blog.publishedAt && (
              <span>• {new Date(blog.publishedAt).toLocaleDateString()}</span>
            )}
          </div>
        </div>

        {/* Excerpt */}
        {blog.excerpt && (
          <div className="bg-[var(--background-light)] rounded-xl p-6 mb-8">
            <p className="text-lg text-[var(--text-primary)] italic">{blog.excerpt}</p>
          </div>
        )}

        {/* Content */}
        {blog.content && (
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="prose max-w-none text-[var(--text-secondary)]">
              <p>{blog.content}</p>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-[var(--secondary)] rounded-xl p-8 text-center">
          <h2 className="font-serif text-2xl text-white mb-4">Want to learn more?</h2>
          <p className="text-white/80 mb-6">
            Contact us for personalized guidance on your study abroad journey.
          </p>
          <Link
            href="/appointment"
            className="inline-block px-8 py-4 bg-[var(--primary)] text-white rounded-full font-semibold hover:bg-[var(--primary-dark)] transition-colors"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </main>
  );
}
