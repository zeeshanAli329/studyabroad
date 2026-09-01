"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { api } from "@/lib/api";

export default function BlogDetailPage() {
  const params = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  /* ============================================================
     FETCH BLOG
  ============================================================ */

  useEffect(() => {
    if (params?.slug) {
      fetchBlog();
    }
  }, [params?.slug]);

  const fetchBlog = async () => {
    try {
      setLoading(true);

      const data = await api.getBlogBySlug(params.slug);

      setBlog(data);
      setError(null);
    } catch (err) {
      console.error("Blog detail error:", err);
      setError("Failed to load blog post");
    } finally {
      setLoading(false);
    }
  };

  /* ============================================================
     READING PROGRESS
  ============================================================ */

  useEffect(() => {
    const handleScroll = () => {
      const article = document.getElementById("article-content");

      if (!article) return;

      const rect = article.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const articleTop = window.scrollY + rect.top;
      const articleHeight = article.offsetHeight;

      const current = window.scrollY - articleTop + windowHeight * 0.35;

      const progress =
        articleHeight > 0
          ? Math.min(100, Math.max(0, (current / articleHeight) * 100))
          : 0;

      setReadingProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [blog]);

  /* ============================================================
     DATE
  ============================================================ */

  const formattedDate = useMemo(() => {
    if (!blog) return null;

    const date = blog.publishedAt || blog.createdAt;

    if (!date) return null;

    return new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }, [blog]);

  /* ============================================================
     READING TIME
  ============================================================ */

  const readingTime = useMemo(() => {
    if (!blog?.content) return 1;

    const words = blog.content.trim().split(/\s+/).length;

    return Math.max(1, Math.ceil(words / 220));
  }, [blog]);

  /* ============================================================
     CONTENT BLOCKS
  ============================================================ */

  const contentBlocks = useMemo(() => {
    if (!blog?.content) return [];

    return blog.content
      .split(/\n\s*\n/)
      .map((item) => item.trim())
      .filter(Boolean);
  }, [blog]);

  /* ============================================================
     ARTICLE HEADINGS
  ============================================================ */

  const articleHeadings = useMemo(() => {
    if (!contentBlocks.length) return [];

    return contentBlocks
      .map((block, index) => {
        const lines = block
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean);

        if (
          lines.length === 1 &&
          lines[0].length < 100 &&
          !/[.!?:]$/.test(lines[0])
        ) {
          return {
            id: `section-${index}`,
            title: lines[0],
          };
        }

        return null;
      })
      .filter(Boolean)
      .slice(0, 6);
  }, [contentBlocks]);

  /* ============================================================
     SHARE
  ============================================================ */

  const handleShare = async () => {
    try {
      const url = window.location.href;

      if (navigator.share) {
        await navigator.share({
          title: blog?.title || "Study Abroad Article",
          text: blog?.excerpt || "",
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);

        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 2200);
      }
    } catch (err) {
      console.log("Share cancelled");
    }
  };

  /* ============================================================
     LOADING
  ============================================================ */

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-[1240px] px-5 pb-24 pt-28 sm:px-8 lg:px-10 lg:pt-32">
          <div className="animate-pulse">
            <div className="h-3 w-36 rounded bg-gray-100" />

            <div className="mt-14 max-w-[950px]">
              <div className="h-4 w-28 rounded bg-gray-100" />

              <div className="mt-7 h-16 rounded bg-gray-100" />

              <div className="mt-4 h-16 w-10/12 rounded bg-gray-100" />

              <div className="mt-7 h-5 w-7/12 rounded bg-gray-100" />
            </div>

            <div className="mt-9 flex gap-5">
              <div className="h-10 w-36 rounded bg-gray-100" />
              <div className="h-10 w-28 rounded bg-gray-100" />
            </div>

            <div className="mt-14 aspect-[16/8] rounded-[30px] bg-gray-100" />

            <div className="mx-auto mt-20 max-w-[740px]">
              <div className="h-5 rounded bg-gray-100" />
              <div className="mt-5 h-5 rounded bg-gray-100" />
              <div className="mt-5 h-5 w-10/12 rounded bg-gray-100" />

              <div className="mt-12 h-8 w-2/5 rounded bg-gray-100" />

              <div className="mt-6 h-5 rounded bg-gray-100" />
              <div className="mt-5 h-5 rounded bg-gray-100" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  /* ============================================================
     ERROR
  ============================================================ */

  if (error || !blog) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[var(--background-light)] px-6">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary)]/10">
            <span className="font-serif text-2xl text-[var(--primary)]">!</span>
          </div>

          <h1 className="mt-7 font-serif text-4xl tracking-tight text-[var(--text-primary)]">
            Article unavailable
          </h1>

          <p className="mt-4 text-[15px] leading-7 text-[var(--text-secondary)]">
            {error || "The article you're looking for could not be found."}
          </p>

          <Link
            href="/blog"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* ============================================================
          READING PROGRESS
      ============================================================ */}

      <div className="fixed left-0 right-0 top-0 z-[100] h-[2px] bg-black/5">
        <div
          className="h-full bg-[var(--primary)] transition-[width] duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* ============================================================
          HEADER
      ============================================================ */}

      <header className="border-b border-gray-100 bg-white pt-24 sm:pt-28 lg:pt-0">
        <div className="mx-auto max-w-[1240px] px-5 pb-14 sm:px-8 lg:px-10 lg:pb-20">
          {/* Breadcrumb */}

          <nav className="mb-12">
            <div className="flex items-center gap-2 text-[12px]">
              <Link
                href="/"
                className="text-gray-400 transition-colors hover:text-[var(--primary)]"
              >
                Home
              </Link>

              <span className="text-gray-300">/</span>

              <Link
                href="/blog"
                className="text-gray-400 transition-colors hover:text-[var(--primary)]"
              >
                Blog
              </Link>

              <span className="text-gray-300">/</span>

              <span className="text-gray-500">Article</span>
            </div>
          </nav>

          {/* Editorial metadata */}

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {blog.category && (
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                {blog.category}
              </span>
            )}

            <span className="h-3 w-px bg-gray-300" />

            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-gray-400">
              {readingTime} min read
            </span>
          </div>

          {/* TITLE */}

          <h1 className="mt-7 max-w-[1060px] font-serif text-[44px] leading-[1.03] tracking-[-0.04em] text-[var(--text-primary)] sm:text-[56px] lg:text-[76px] xl:text-[82px]">
            {blog.title}
          </h1>

          {/* EXCERPT */}

          {blog.excerpt && (
            <p className="mt-8 max-w-[780px] text-[17px] leading-8 text-gray-500 sm:text-[19px] sm:leading-9">
              {blog.excerpt}
            </p>
          )}

          {/* AUTHOR ROW */}

          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-5">
            {blog.author && (
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--background-light)] text-sm font-bold text-[var(--primary)]">
                  {blog.author.charAt(0).toUpperCase()}
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
                    Written by
                  </p>

                  <p className="mt-0.5 text-sm font-semibold text-[var(--text-primary)]">
                    {blog.author}
                  </p>
                </div>
              </div>
            )}

            {formattedDate && (
              <>
                <span className="hidden h-8 w-px bg-gray-200 sm:block" />

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
                    Published
                  </p>

                  <p className="mt-0.5 text-sm text-gray-600">
                    {formattedDate}
                  </p>
                </div>
              </>
            )}

            {/* PROFESSIONAL SHARE BUTTON */}

            <button
              onClick={handleShare}
              className="group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:bg-[var(--primary)]/5 hover:text-[var(--primary)] hover:shadow-[0_6px_20px_var(--primary)]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] text-white transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_4px_12px_var(--primary)]">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
                    fill="currentColor"
                  />
                  <path
                    d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"
                    fill="currentColor"
                  />
                  <path
                    d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z"
                    fill="currentColor"
                  />
                  <path
                    d="M8.6 13.5L15.4 17.5M15.4 6.5L8.6 10.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              <span>{copied ? "Copied" : "Share"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* ============================================================
          FEATURED IMAGE
      ============================================================ */}

      <section className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
        {blog.image ? (
          <figure className="relative overflow-hidden rounded-b-[26px] sm:rounded-[30px] lg:rounded-[36px]">
            <div className="relative aspect-[16/8] overflow-hidden bg-gray-100">
              {/* <Image
                src={blog.image}
                alt={blog.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1240px"
                className="object-cover"
              /> */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[220px] sm:h-[280px] md:h-[360px] lg:h-[460px] xl:h-[520px] object-cover"
              />
            </div>
          </figure>
        ) : (
          <div className="flex aspect-[16/8] items-center justify-center rounded-[30px] bg-[var(--background-light)]">
            <span className="text-sm text-gray-400">
              No featured image available
            </span>
          </div>
        )}
      </section>

      {/* ============================================================
          ARTICLE
      ============================================================ */}

      <section
        id="article-content"
        className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[150px_minmax(0,760px)_220px] lg:justify-center lg:gap-14 xl:grid-cols-[170px_minmax(0,760px)_240px] xl:gap-16">
          {/* ========================================================
              LEFT RAIL
          ======================================================== */}

          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                Reading
              </p>

              <div className="mt-5 h-[2px] w-8 bg-[var(--primary)]" />

              <div className="mt-6">
                <div className="text-2xl font-light text-[var(--primary)]">
                  {Math.round(readingProgress)}%
                </div>

                <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-gray-400">
                  completed
                </p>
              </div>

              {/* PROFESSIONAL SHARE BUTTON */}

              <Link
                href="/blog"
                className="mt-5 flex items-center gap-2 text-xs font-semibold text-gray-500 transition-colors hover:text-[var(--primary)]"
              >
                ← All articles
              </Link>
            </div>
          </aside>

          {/* ========================================================
              MAIN ARTICLE
          ======================================================== */}

          <article className="min-w-0">
            {/* Mobile utility */}

            <div className="mb-10 flex items-center justify-between border-y border-gray-100 py-4 lg:hidden">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                {readingTime} min read
              </span>

              <button
                onClick={handleShare}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-600 transition-all duration-300 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white hover:shadow-[0_5px_16px_var(--primary)]"
              >
                {copied ? "Link copied" : "Share article"}
              </button>
            </div>

            {/* Lead */}

            {blog.excerpt && (
              <div className="mb-14">
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                  In brief
                </p>

                <p className="font-serif text-[23px] leading-[1.55] tracking-[-0.01em] text-[var(--text-primary)] sm:text-[27px] sm:leading-[1.5]">
                  {blog.excerpt}
                </p>
              </div>
            )}

            {/* Article content */}

            <div className="text-[17px] sm:text-[18px]">
              {blog.content ? (
                contentBlocks.map((block, index) => {
                  const lines = block
                    .split("\n")
                    .map((line) => line.trim())
                    .filter(Boolean);

                  const possibleHeading =
                    lines.length === 1 &&
                    lines[0].length < 100 &&
                    !/[.!?:]$/.test(lines[0]);

                  if (possibleHeading) {
                    const headingId = `section-${index}`;

                    return (
                      <div key={index} id={headingId} className="scroll-mt-28">
                        <h2 className="mb-6 mt-14 font-serif text-[29px] leading-[1.2] tracking-[-0.02em] text-[var(--text-primary)] sm:mt-16 sm:text-[34px]">
                          {lines[0]}
                        </h2>
                      </div>
                    );
                  }

                  return (
                    <div key={index} className="mb-8">
                      {lines.map((line, lineIndex) => {
                        /* Bullet */

                        if (line.startsWith("- ") || line.startsWith("• ")) {
                          return (
                            <div
                              key={lineIndex}
                              className="mb-3 flex gap-4 leading-8 text-gray-600"
                            >
                              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />

                              <span>{line.replace(/^[-•]\s*/, "")}</span>
                            </div>
                          );
                        }

                        /* Numbered list */

                        if (/^\d+\.\s/.test(line)) {
                          const number = line.match(/^\d+\./)?.[0];

                          return (
                            <div
                              key={lineIndex}
                              className="mb-4 flex gap-4 leading-8 text-gray-600"
                            >
                              <span className="font-semibold text-[var(--primary)]">
                                {number}
                              </span>

                              <span>{line.replace(/^\d+\.\s*/, "")}</span>
                            </div>
                          );
                        }

                        /* Quote */

                        if (line.startsWith('"') && line.endsWith('"')) {
                          return (
                            <blockquote
                              key={lineIndex}
                              className="my-10 border-l-2 border-[var(--primary)] pl-6 font-serif text-[21px] leading-9 text-[var(--text-primary)] sm:text-[24px]"
                            >
                              {line}
                            </blockquote>
                          );
                        }

                        /* Paragraph */

                        return (
                          <p
                            key={lineIndex}
                            className="leading-[1.95] text-gray-600"
                          >
                            {line}
                          </p>
                        );
                      })}
                    </div>
                  );
                })
              ) : (
                <div className="border-y border-dashed border-gray-200 py-12 text-center">
                  <p className="text-gray-400">
                    Article content is not available yet.
                  </p>
                </div>
              )}
            </div>

            {/* ========================================================
                TAGS
            ======================================================== */}

            {blog.tags && (
              <div className="mt-16 border-t border-gray-200 pt-8">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                  Topics
                </p>

                <div className="flex flex-wrap gap-2">
                  {blog.tags
                    .split(",")
                    .map((tag) => tag.trim())
                    .filter(Boolean)
                    .map((tag, index) => (
                      <span
                        key={`${tag}-${index}`}
                        className="border border-gray-200 px-3.5 py-2 text-xs font-medium text-gray-500 transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
                      >
                        #{tag}
                      </span>
                    ))}
                </div>
              </div>
            )}

            {/* ========================================================
                AUTHOR
            ======================================================== */}

            {blog.author && (
              <section className="mt-16 border-t border-gray-200 pt-10">
                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-lg font-bold text-white">
                    {blog.author.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                      About the author
                    </p>

                    <h3 className="mt-1 font-serif text-2xl text-[var(--text-primary)]">
                      {blog.author}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-7 text-gray-500">
                      Sharing practical guidance and insights to help students
                      make better decisions throughout their study abroad
                      journey.
                    </p>
                  </div>
                </div>
              </section>
            )}
          </article>

          {/* ========================================================
              RIGHT RAIL
          ======================================================== */}

          <aside className="mt-14 lg:mt-0">
            <div className="sticky top-28">
              {/* Contents */}

              {articleHeadings.length > 0 && (
                <div className="border-t-2 border-[var(--primary)] pt-5">
                  <p className="font-serif text-2xl text-[var(--text-primary)]">
                    In this article
                  </p>

                  <nav className="mt-6">
                    <div className="space-y-1">
                      {articleHeadings.map((heading, index) => (
                        <a
                          key={heading.id}
                          href={`#${heading.id}`}
                          className="group flex gap-3 py-2 text-[13px] leading-5 text-gray-500 transition-colors hover:text-[var(--primary)]"
                        >
                          <span className="text-[10px] font-bold text-gray-300 group-hover:text-[var(--primary)]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span>{heading.title}</span>
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>
              )}

              {/* Article information */}

              <div className="mt-10 border-t border-gray-200 pt-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                  Article information
                </p>

                <div className="mt-5 space-y-4">
                  {formattedDate && (
                    <div className="flex justify-between gap-4">
                      <span className="text-xs text-gray-400">Published</span>

                      <span className="text-right text-xs font-medium text-gray-600">
                        {formattedDate}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between gap-4">
                    <span className="text-xs text-gray-400">Reading time</span>

                    <span className="text-right text-xs font-medium text-gray-600">
                      {readingTime} min
                    </span>
                  </div>

                  {blog.category && (
                    <div className="flex justify-between gap-4">
                      <span className="text-xs text-gray-400">Category</span>

                      <span className="text-right text-xs font-medium text-gray-600">
                        {blog.category}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Consultation */}

              <div className="mt-10 border-t border-gray-200 pt-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--primary)]">
                  Need guidance?
                </p>

                <h3 className="mt-3 font-serif text-[25px] leading-tight text-[var(--text-primary)]">
                  Planning to study abroad?
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-gray-500">
                  Get personalized guidance on universities, destinations,
                  scholarships and applications.
                </p>

                <Link
                  href="/appointment"
                  className="mt-5 flex items-center justify-center rounded-full bg-[var(--primary)] px-5 py-3 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Book a Consultation →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
