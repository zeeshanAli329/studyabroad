"use client";

import Link from "next/link";
import Reveal from "@/components/shared/Reveal";

import {
  cleanText,
  getImage,
} from "./freeEducationUtils";

export default function UniversitiesShowcase({
  universities = [],
  loading = false,
}) {
  if (!loading && universities.length === 0) {
    return null;
  }

  return (
    <section className="border-y border-gray-100 bg-white py-16">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--primary)]">
              03 · UNIVERSITIES
            </span>

            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
              Universities available on your platform
            </h2>

            <p className="mt-4 leading-7 text-[var(--text-secondary)]">
              Students can continue from funding research to university
              discovery using the institutions already published in your
              database.
            </p>
          </div>
        </Reveal>

        {loading ? (
          <div className="mt-10 space-y-5">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-[220px] animate-pulse rounded-[1.5rem] bg-[#f7faf8]"
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 space-y-5">
            {universities.slice(0, 10).map((university, index) => (
              <Reveal
                key={
                  university.id ||
                  university.slug ||
                  university.name
                }
                delay={index * 50}
              >
                <article className="group grid overflow-hidden rounded-[1.5rem] border border-gray-100 bg-[#fafcfb] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/30 hover:bg-white hover:shadow-xl md:grid-cols-[300px_1fr]">
                  <div className="relative min-h-[220px] overflow-hidden">
                    <img
                      src={getImage(university)}
                      alt={university.name || "University"}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />

                    {university.ranking && (
                      <div className="absolute bottom-4 left-4 rounded-lg bg-white/95 px-3 py-2 text-xs font-bold text-[var(--primary)]">
                        Ranking #{university.ranking}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col justify-center p-6 lg:p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      {university.country?.name && (
                        <span className="rounded-full bg-[var(--primary)]/5 px-3 py-1 text-xs font-semibold text-[var(--primary)]">
                          {university.country.name}
                        </span>
                      )}

                      {university.location && (
                        <span className="text-xs text-[var(--text-secondary)]">
                          {university.location}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-3 font-serif text-2xl font-semibold group-hover:text-[var(--primary)]">
                      {university.name}
                    </h3>

                    <p className="mt-3 line-clamp-2 max-w-3xl text-sm leading-6 text-[var(--text-secondary)]">
                      {cleanText(
                        university.description,
                        "Explore programmes, admissions information and study opportunities.",
                      )}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                      {university.slug && (
                        <Link
                          href={`/universities/${university.slug}`}
                          className="rounded-xl bg-[var(--primary)] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                        >
                          View University
                        </Link>
                      )}

                      {university.website && (
                        <Link
                          href={university.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold transition-all hover:border-[var(--primary)] hover:text-[var(--primary)]"
                        >
                          Official Website
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}