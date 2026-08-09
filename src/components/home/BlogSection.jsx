"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/shared/Reveal";
import { api } from "@/lib/api";
import {
  Calendar,
  User,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function BlogSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const data = await api.getBlogs({ limit: 3, status: 'PUBLISHED' });
      const blogs = data.blogs || data || [];
      setPosts(blogs.map(blog => ({
        title: blog.title,
        date: blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        author: blog.author || 'RouteX',
        image: blog.image || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=900&h=700&fit=crop',
        href: `/blog/${blog.slug}`,
      })));
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
      // Fallback to hardcoded blogs if API fails
      setPosts([
        {
          title: "Journeys of Discovery Uncovering Hidden Treasures",
          date: "July 26, 2024",
          author: "Features",
          image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=900&h=700&fit=crop",
          href: "/blog/journeys-of-discovery",
        },
        {
          title: "The Road to Adventure Embarking on One",
          date: "July 26, 2024",
          author: "Features",
          image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&h=700&fit=crop",
          href: "/blog/road-to-adventure",
        },
        {
          title: "Wonders of Ancient Civilizations A Journey",
          date: "July 4, 2024",
          author: "Features",
          image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&h=700&fit=crop",
          href: "/blog/wonders-of-ancient-civilizations",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="relative overflow-hidden bg-[#f8faf5] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)]"></div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="relative overflow-hidden bg-[#f8faf5] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        {/* HEADER */}
        <Reveal direction="up" delay={0}>
          <div className="mb-10 flex items-end justify-between gap-6 sm:mb-14">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                Recent Blogs
              </span>

              <h2 className="mt-3 font-serif text-3xl leading-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
                Journeys of Discovery
                <br />
                <span className="text-[var(--primary)]">
                  Uncovering Hidden Stories
                </span>
              </h2>
            </div>

            {/* Navigation */}
            <div className="hidden items-center gap-3 sm:flex">
              <button
                type="button"
                aria-label="Previous posts"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-[var(--primary)]/30 text-[var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white"
              >
                <ChevronLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              </button>

              <button
                type="button"
                aria-label="Next posts"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-[var(--primary)]/30 text-[var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white"
              >
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </Reveal>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal
              key={post.href}
              direction={index === 0 ? "left" : index === 2 ? "right" : "up"}
              delay={index * 120}
            >
              <Link
                href={post.href}
                className="group relative block"
              >
                {/* Outer outline */}
                <div className="absolute -inset-2 rounded-[1.6rem] border border-transparent transition-all duration-500 group-hover:-inset-3 group-hover:border-[var(--primary)]/20" />

                {/* Image */}
                <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200 shadow-sm">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/20" />

                  {/* Green fill overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-0 bg-[var(--primary)]/20 transition-all duration-500 group-hover:h-full" />

                  {/* Shine */}
                  <div className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg] bg-white/25 transition-all duration-1000 group-hover:left-[130%]" />

                  {/* Date */}
                  <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[var(--text-primary)] shadow-md backdrop-blur-sm">
                    {post.date}
                  </div>

                  {/* Arrow */}
                  <div className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-3 rotate-[-10deg] items-center justify-center rounded-full bg-white text-[var(--primary)] opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:rotate-0 group-hover:opacity-100">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Meta */}
                <div className="mb-3 flex items-center gap-4 text-xs text-[var(--text-secondary)]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-[var(--primary)]" />
                    {post.date}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-[var(--primary)]" />
                    {post.author}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-4 text-base font-bold leading-snug text-[var(--text-primary)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--primary)] sm:text-lg">
                  {post.title}
                </h3>

                {/* Read More */}
                <span className="relative inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)]">
                  <span className="relative">
                    Read More
                    <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[var(--primary)] transition-all duration-300 group-hover:w-full" />
                  </span>

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}