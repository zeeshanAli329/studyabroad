"use client";

import Link from "next/link";
import Reveal from "@/components/shared/Reveal";

import {
  getImage,
  getLanguage,
  getLivingCost,
  getTuition,
} from "./freeEducationUtils";

export default function TuitionFreeCountries({
  countries = [],
  loading = false,
}) {
  return (
    <section
      id="tuition-free"
      className="mx-auto max-w-[1320px] scroll-mt-24 px-6 py-16 lg:px-8"
    >
      <SectionHeading
        eyebrow="01 · TUITION-FREE COUNTRIES"
        title="Explore affordable study destinations"
        description="Explore countries available in your database and review their tuition, living-cost and language information before making an application plan."
      />

      {loading ? (
        <Loading />
      ) : countries.length === 0 ? (
        <EmptyState text="No countries are available yet." />
      ) : (
        <div className="mt-10 space-y-5">
          {countries.slice(0, 10).map((country, index) => (
            <Reveal
              key={country.id || country.slug || country.name}
              delay={index * 50}
            >
              <article className="group grid overflow-hidden rounded-[1.5rem] border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/30 hover:shadow-[0_20px_60px_rgba(0,0,0,.08)] md:grid-cols-[330px_1fr]">
                <div className="relative min-h-[240px] overflow-hidden">
                  <img
                    src={getImage(country)}
                    alt={country.name || "Study destination"}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[var(--primary)] backdrop-blur">
                      Study Destination
                    </span>

                    <h3 className="mt-3 font-serif text-3xl font-semibold text-white">
                      {country.name}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-6 lg:p-8">
                  <div className="grid gap-6 md:grid-cols-3">
                    <Info
                      label="Tuition"
                      value={getTuition(country)}
                    />

                    <Info
                      label="Living Cost"
                      value={
                        getLivingCost(country) ||
                        "Varies by city and lifestyle"
                      }
                    />

                    <Info
                      label="Language"
                      value={getLanguage(country)}
                    />
                  </div>

                  <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
                        Study Opportunity
                      </p>

                      <p className="mt-1 text-sm text-[var(--text-secondary)]">
                        Review universities, scholarships and admission
                        requirements.
                      </p>
                    </div>

                    {country.slug && (
                      <Link
                        href={`/countries/${country.slug}`}
                        className="rounded-xl border border-[var(--primary)]/20 px-4 py-2.5 text-sm font-semibold text-[var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white"
                      >
                        Country Guide →
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
        {label}
      </p>

      <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
        {value}
      </p>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <Reveal>
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--primary)]">
          {eyebrow}
        </span>

        <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
          {title}
        </h2>

        <p className="mt-4 leading-7 text-[var(--text-secondary)]">
          {description}
        </p>
      </div>
    </Reveal>
  );
}

function Loading() {
  return (
    <div className="mt-10 space-y-5">
      {[1, 2, 3, 4, 5].map((item) => (
        <div
          key={item}
          className="h-[240px] animate-pulse rounded-[1.5rem] bg-white"
        />
      ))}
    </div>
  );
}

function EmptyState({ text }) {
  return (
    <div className="mt-10 rounded-2xl border border-dashed border-gray-200 bg-white p-10 text-center text-sm text-[var(--text-secondary)]">
      {text}
    </div>
  );
}