"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { api } from "@/lib/api";
import {
  ArrowUpRight,
  GraduationCap,
  MapPin,
  Globe2,
  Trophy,
} from "lucide-react";

const dynamicUniversities = [
  "University of Toronto",
  "University of Melbourne",
  "University of Oxford",
  "Harvard University",
  "University of British Columbia",
  "University of Sydney",
  "University of Manchester",
  "University of California",
  "McGill University",
  "Monash University",
  "University of Edinburgh",
  "University of Birmingham",
  "University of Waterloo",
  "University of Alberta",
  "King's College London",
  "University of Glasgow",
  "University of Queensland",
  "University of Amsterdam",
  "Technical University of Munich",
  "University of Auckland",
  "University of New South Wales",
  "University of Bristol",
  "University of Leeds",
  "University of Nottingham",
];

export default function UniversitiesPage() {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [currentUniversity, setCurrentUniversity] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    fetchUniversities();
  }, []);

  useEffect(() => {
    const currentText = dynamicUniversities[currentUniversity];

    const typingSpeed = isDeleting ? 45 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));

        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setCurrentUniversity(
            (prev) => (prev + 1) % dynamicUniversities.length,
          );
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentUniversity]);

  const fetchUniversities = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await api.getUniversities();

      setUniversities(
        Array.isArray(data) ? data : data?.universities || data?.data || [],
      );
    } catch (err) {
      console.error("Failed to load universities:", err);
      setError("Failed to load universities.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Hero */}
      <section className="relative mx-4 mb-12 overflow-hidden rounded-3xl bg-[var(--secondary)] sm:mx-6 lg:mx-8">
        {/* Soft green glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--primary)]/15 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[var(--primary)]/10 blur-3xl" />

        <div className="pointer-events-none absolute right-[20%] top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[var(--primary)]/5 blur-3xl" />

        {/* Outer outline */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl border border-[var(--primary)]/20" />

        {/* Inner outline */}
        <div className="pointer-events-none absolute inset-[5px] rounded-[27px] border border-white/5" />

        <div className="relative mx-auto max-w-[1320px] px-6 py-16 sm:px-10 sm:py-20 lg:py-24">
          <div className="max-w-4xl">
            {/* Label */}
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--primary)]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)] sm:text-sm">
                Global Universities
              </span>

              <span className="h-px w-8 bg-[var(--primary)]" />
            </div>

            {/* Dynamic heading */}
            <h1 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Study at
              <span className="mt-2 block min-h-[1.2em] text-[var(--primary)]">
                {displayText}
                <span className="ml-1 inline-block h-[0.85em] w-[2px] animate-pulse bg-[var(--primary)] align-middle" />
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              Explore leading universities around the world and find the right
              institution for your international education journey.
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
                <GraduationCap className="h-4 w-4 text-[var(--primary)]" />
                Global Education
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
                <Globe2 className="h-4 w-4 text-[var(--primary)]" />
                Worldwide Destinations
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
                <Trophy className="h-4 w-4 text-[var(--primary)]" />
                Top Institutions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universities */}
      <section className="mx-auto max-w-[1320px] px-6 lg:px-8">
        {loading ? (
          <div className="py-20 text-center">
            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[var(--primary)]/15 border-t-[var(--primary)]" />

            <p className="mt-5 text-sm text-[var(--text-secondary)]">
              Loading universities...
            </p>
          </div>
        ) : error ? (
          <div className="mx-auto max-w-xl rounded-3xl border border-red-100 bg-red-50/50 p-10 text-center">
            <p className="mb-5 text-red-600">{error}</p>

            <button
              onClick={fetchUniversities}
              className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Try Again
            </button>
          </div>
        ) : universities.length === 0 ? (
          <div className="rounded-3xl border border-[var(--primary)]/10 bg-[#fafcf8] py-20 text-center">
            <GraduationCap className="mx-auto h-10 w-10 text-[var(--primary)]/50" />

            <p className="mt-4 text-[var(--text-secondary)]">
              No universities available yet.
            </p>
          </div>
        ) : (
          <>
            {/* Section heading */}
            <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />

                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary)]">
                    Explore Institutions
                  </span>
                </div>

                <h2 className="font-serif text-3xl font-semibold leading-tight text-[var(--text-primary)] sm:text-4xl">
                  Find Your Perfect
                  <span className="block text-[var(--primary)]">
                    Place to Study
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-[var(--text-secondary)]">
                Compare universities, discover new destinations, and explore
                opportunities for your academic future.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {universities.map((university) => (
                <Link
                  key={university.id}
                  href={`/universities/${university.slug}`}
                  className="group relative block overflow-hidden rounded-3xl border border-[var(--primary)]/10 bg-white p-2 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[var(--primary)]/40 hover:shadow-xl"
                >
                  {/* Soft card glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[var(--primary)]/8 blur-3xl transition-all duration-500 group-hover:bg-[var(--primary)]/20" />

                  {/* Hover fill */}
                  <div className="pointer-events-none absolute inset-0 z-0 translate-y-full bg-gradient-to-t from-[var(--primary)]/[0.06] to-transparent transition-transform duration-700 ease-out group-hover:translate-y-0" />

                  {/* Outer outline */}
                  <div className="pointer-events-none absolute inset-0 z-30 rounded-3xl border border-transparent transition-all duration-500 group-hover:border-[var(--primary)]/30" />

                  {/* Inner outline */}
                  <div className="pointer-events-none absolute inset-1 z-30 rounded-[22px] border border-transparent transition-all duration-500 group-hover:border-[var(--primary)]/25" />

                  {/* Image */}
                  <div className="relative z-10 aspect-[16/10] overflow-hidden rounded-[22px] bg-gray-100">
                    {university.image ? (
                      <>
                        {/* <Image
                          src={university.image}
                          alt={university.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        /> */}
                        <img
                          src={university.image}
                          alt={university.name}
                          className="w-full h-[220px] sm:h-[240px] lg:h-[260px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Image overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                        {/* Green hover overlay */}
                        <div className="absolute inset-0 bg-[var(--primary)]/0 transition-all duration-500 group-hover:bg-[var(--primary)]/10" />

                        {/* Floating icon */}
                        <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white shadow-lg backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white">
                          <GraduationCap className="h-5 w-5" />
                        </div>

                        {/* Arrow */}
                        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/10 text-white backdrop-blur-md transition-all duration-500 group-hover:rotate-45 group-hover:border-white group-hover:bg-white group-hover:text-[var(--primary)]">
                          <ArrowUpRight className="h-4 w-4" />
                        </div>

                        {/* Country badge */}
                        {university.country?.name && (
                          <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                            <Globe2 className="h-3.5 w-3.5" />
                            {university.country.name}
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#f5f8f1] to-white">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-[var(--primary)]/20">
                          <GraduationCap className="h-7 w-7 text-[var(--primary)]" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-4 sm:p-5">
                    <div className="mb-4">
                      <h2 className="font-serif text-xl font-semibold leading-tight text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--primary)]">
                        {university.name}
                      </h2>

                      {university.location && (
                        <div className="mt-2 flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
                          <MapPin className="h-3.5 w-3.5 text-[var(--primary)]" />
                          {university.location}
                        </div>
                      )}
                    </div>

                    {university.description && (
                      <p className="mb-5 line-clamp-3 text-sm leading-6 text-[var(--text-secondary)]">
                        {university.description}
                      </p>
                    )}

                    <div className="flex items-center justify-between border-t border-[var(--primary)]/10 pt-4">
                      {university.ranking ? (
                        <div className="flex items-center gap-2">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)]/10 transition-all duration-300 group-hover:bg-[var(--primary)]/20">
                            <Trophy className="h-3.5 w-3.5 text-[var(--primary)]" />
                          </span>

                          <div>
                            <p className="text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">
                              World Ranking
                            </p>

                            <p className="text-sm font-semibold text-[var(--text-primary)]">
                              #{university.ranking}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <span className="text-xs font-medium text-[var(--text-secondary)]">
                          International University
                        </span>
                      )}

                      {/* No Explore button */}
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--primary)]/15 text-[var(--primary)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>

                  {/* Bottom green fill */}
                  <div className="pointer-events-none absolute bottom-0 left-1/2 z-20 h-1 w-0 -translate-x-1/2 rounded-full bg-[var(--primary)] opacity-70 blur-sm transition-all duration-500 group-hover:w-2/3" />
                </Link>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}
