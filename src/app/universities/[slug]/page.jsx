"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

import { api } from "@/lib/api";

export default function UniversityDetailPage() {
  const params = useParams();
  const slug = params?.slug;

  const [university, setUniversity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (slug) {
      fetchUniversity();
    }
  }, [slug]);

  const fetchUniversity = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await api.getUniversityBySlug(slug);

      console.log("University data:", data);
      console.log("University image:", data?.image);

      setUniversity(data);
    } catch (err) {
      console.error("Failed to load university:", err);
      setError("Failed to load university information.");
    } finally {
      setLoading(false);
    }
  };

  /* =========================
     LOADING
  ========================= */

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f8faf8] pt-24">
        <div className="flex min-h-[70vh] items-center justify-center px-6">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-2 border-gray-200 border-b-[var(--primary)]" />

            <p className="mt-4 text-sm text-gray-500">
              Loading university...
            </p>
          </div>
        </div>
      </main>
    );
  }

  /* =========================
     ERROR
  ========================= */

  if (error || !university) {
    return (
      <main className="min-h-screen bg-[#f8faf8] pt-24">
        <div className="mx-auto flex min-h-[70vh] max-w-3xl items-center px-6">
          <div className="w-full rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-red-100 bg-red-50 text-xl text-red-500">
              !
            </div>

            <h1 className="mt-6 font-serif text-3xl font-semibold text-emerald-950">
              University Not Found
            </h1>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
              {error || "We could not find this university."}
            </p>

            <Link
              href="/universities"
              className="mt-7 inline-flex items-center rounded-xl border border-emerald-900 bg-emerald-900 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-lime-500 hover:bg-lime-500"
            >
              ← Back to Universities
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8faf8]  pb-20">

      {/* =====================================================
          TOP IMAGE SECTION
      ===================================================== */}

      <section className="mx-auto max-w-[1320px] px-6  lg:px-8">


        {/* IMAGE CARD */}
        <div className="relative overflow-hidden rounded-[28px] border border-gray-200 bg-emerald-950 shadow-xl">

          <div className="relative h-[320px] sm:h-[420px] lg:h-[520px]">

            {university.image ? (
              <img
                src={university.image}
                alt={university.name}
                className="absolute inset-0 h-full w-full object-cover"
                onError={(e) => {
                  console.error(
                    "University image failed to load:",
                    university.image
                  );

                  e.currentTarget.style.display = "none";
                }}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-lime-900">
                <div className="text-center text-white/70">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl">
                    🎓
                  </div>

                  <p className="text-sm">
                    University image not available
                  </p>
                </div>
              </div>
            )}

            {/* Image overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-14">

              {university.country?.name && (
                <span className="inline-flex rounded-full border border-lime-400/50 bg-emerald-950/70 px-4 py-2 text-xs font-semibold text-lime-300 backdrop-blur-md">
                  {university.country.name}
                </span>
              )}

              <h1 className="mt-4 max-w-4xl font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-6xl">
                {university.name}
              </h1>

              {university.location && (
                <p className="mt-3 text-sm text-white/75 sm:text-base">
                  {university.location}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <section className="mx-auto max-w-[1320px] px-6 pt-10 lg:px-8">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="space-y-8 lg:col-span-2">

            {/* ABOUT */}
            <section className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-9">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-lime-200 bg-lime-50 text-lg">
                  🎓
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-600">
                    About University
                  </p>

                  <h2 className="mt-1 font-serif text-2xl font-semibold text-emerald-950 sm:text-3xl">
                    {university.name}
                  </h2>
                </div>
              </div>

              <div className="mt-7 border-t border-gray-100 pt-7">
                <p className="text-[15px] leading-8 text-gray-600">
                  {university.description ||
                    `${university.name} offers academic opportunities for students looking to pursue higher education internationally.`}
                </p>
              </div>
            </section>

            {/* LOCATION / EXPERIENCE */}
            <section className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-9">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-600">
                University Information
              </p>

              <h2 className="mt-2 font-serif text-2xl font-semibold text-emerald-950">
                Discover {university.name}
              </h2>

              <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">

                {university.country?.name && (
                  <div className="rounded-2xl border border-gray-200 p-5 transition-all duration-300 hover:border-lime-400 hover:bg-lime-50/50">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                      Country
                    </p>

                    <p className="mt-2 font-medium text-emerald-950">
                      {university.country.name}
                    </p>
                  </div>
                )}

                {university.location && (
                  <div className="rounded-2xl border border-gray-200 p-5 transition-all duration-300 hover:border-lime-400 hover:bg-lime-50/50">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                      Location
                    </p>

                    <p className="mt-2 font-medium text-emerald-950">
                      {university.location}
                    </p>
                  </div>
                )}

                {university.founded && (
                  <div className="rounded-2xl border border-gray-200 p-5 transition-all duration-300 hover:border-lime-400 hover:bg-lime-50/50">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                      Founded
                    </p>

                    <p className="mt-2 font-medium text-emerald-950">
                      {university.founded}
                    </p>
                  </div>
                )}

                {university.ranking && (
                  <div className="rounded-2xl border border-lime-300 bg-lime-50 p-5">
                    <p className="text-xs font-medium uppercase tracking-wide text-lime-700">
                      World Ranking
                    </p>

                    <p className="mt-2 text-2xl font-semibold text-emerald-950">
                      #{university.ranking}
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* LARGE IMAGE AGAIN */}
            {university.image && (
              <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">

                <div className="relative h-[280px] sm:h-[400px]">

                  <img
                    src={university.image}
                    alt={`${university.name} campus`}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent" />

                  <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                    <p className="text-sm font-medium text-lime-300">
                      Study Abroad
                    </p>

                    <h3 className="mt-1 font-serif text-2xl font-semibold text-white">
                      Your journey starts here
                    </h3>
                  </div>
                </div>
              </section>
            )}

          </div>

          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside className="space-y-6">

            {/* QUICK FACTS */}
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-600">
                Quick Overview
              </p>

              <h3 className="mt-2 font-serif text-2xl font-semibold text-emerald-950">
                University Facts
              </h3>

              <div className="mt-6 space-y-3">

                {university.country?.name && (
                  <div className="rounded-2xl border border-gray-100 p-4 transition-all hover:border-lime-300 hover:bg-lime-50">
                    <p className="text-[10px] font-medium uppercase tracking-widest text-gray-400">
                      Country
                    </p>

                    <p className="mt-1 text-sm font-medium text-emerald-950">
                      {university.country.name}
                    </p>
                  </div>
                )}

                {university.location && (
                  <div className="rounded-2xl border border-gray-100 p-4 transition-all hover:border-lime-300 hover:bg-lime-50">
                    <p className="text-[10px] font-medium uppercase tracking-widest text-gray-400">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-medium text-emerald-950">
                      {university.location}
                    </p>
                  </div>
                )}

                {university.ranking && (
                  <div className="rounded-2xl border border-lime-300 bg-lime-50 p-4">
                    <p className="text-[10px] font-medium uppercase tracking-widest text-lime-700">
                      World Ranking
                    </p>

                    <p className="mt-1 text-xl font-semibold text-emerald-950">
                      #{university.ranking}
                    </p>
                  </div>
                )}

                {university.founded && (
                  <div className="rounded-2xl border border-gray-100 p-4 transition-all hover:border-lime-300 hover:bg-lime-50">
                    <p className="text-[10px] font-medium uppercase tracking-widest text-gray-400">
                      Founded
                    </p>

                    <p className="mt-1 text-sm font-medium text-emerald-950">
                      {university.founded}
                    </p>
                  </div>
                )}

              </div>
            </div>

            {/* WEBSITE */}
            {university.website && (
              <div className="rounded-3xl border border-emerald-800 bg-emerald-950 p-7 shadow-sm">

                <p className="text-xs font-medium uppercase tracking-[0.2em] text-lime-300">
                  Official Website
                </p>

                <h3 className="mt-3 font-serif text-2xl font-semibold text-white">
                  Visit University
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  Visit the official university website for programs,
                  admissions and further information.
                </p>

                <a
                  href={university.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center rounded-xl border border-lime-400 bg-lime-400 px-5 py-3 text-sm font-semibold text-emerald-950 transition-all duration-300 hover:bg-transparent hover:text-lime-300"
                >
                  Visit Official Website →
                </a>
              </div>
            )}

            {/* CTA */}
            <div className="rounded-3xl border border-lime-300 bg-lime-50 p-7">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-700">
                Start Your Journey
              </p>

              <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight text-emerald-950">
                Interested in studying here?
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Get guidance about studying abroad, university options
                and your application journey.
              </p>

              <Link
                href="/contact"
                className="mt-6 flex w-full items-center justify-center rounded-xl border border-emerald-900 bg-emerald-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-lime-500 hover:bg-lime-500"
              >
                Get Guidance
              </Link>
            </div>

          </aside>
        </div>
      </section>
    </main>
  );
}