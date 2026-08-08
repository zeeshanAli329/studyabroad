"use client";

import Link from "next/link";
import Reveal from "@/components/shared/Reveal";
import { Check, ArrowRight, ArrowUpRight } from "lucide-react";

const countries = [
  {
    flag: "🇨🇦",
    name: "Canada",
    description: "Study and build your future in Canada.",
    checklist: ["Visa Assistance", "University Selection", "Fee Guidance"],
    href: "/countries/canada",
    image:
      "https://images.unsplash.com/photo-1519832979-6fa011b87667?w=700&h=900&fit=crop",
  },
  {
    flag: "🇦🇺",
    name: "Australia",
    description: "Explore world-class education in Australia.",
    checklist: ["Visa Assistance", "University Selection", "Scholarships"],
    href: "/countries/australia",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=700&h=900&fit=crop",
  },
  {
    flag: "🇬🇧",
    name: "United Kingdom",
    description: "Access leading universities across the UK.",
    checklist: ["Visa Assistance", "Admission Support", "Fee Guidance"],
    href: "/countries/united-kingdom",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=700&h=900&fit=crop",
  },
  {
    flag: "🇺🇸",
    name: "United States",
    description: "Discover opportunities at top US universities.",
    checklist: [
      "Visa Assistance",
      "University Selection",
      "Application Support",
    ],
    href: "/countries/united-states",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=700&h=900&fit=crop",
  },
  {
    flag: "🇩🇪",
    name: "Germany",
    description: "Experience quality education in Germany.",
    checklist: [
      "Visa Assistance",
      "University Selection",
      "Application Support",
    ],
    href: "/countries/germany",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=700&h=900&fit=crop",
  },
  {
    flag: "🇧🇩",
    name: "Bangladesh",
    description: "Explore educational opportunities in Bangladesh.",
    checklist: ["Visa Assistance", "Admission Support", "Fee Guidance"],
    href: "/countries/bangladesh",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=700&h=900&fit=crop",
  },
];

export default function PopularCountries() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Very soft ambient light */}
      <div className="pointer-events-none absolute left-1/4 top-10 h-72 w-72 rounded-full bg-[var(--primary)]/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[var(--primary)]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal direction="up" delay={0}>
          <div className="mb-10 flex flex-col gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--primary)]" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)] sm:text-sm">
                  Available Countries
                </span>
              </div>

              <h2 className="font-serif text-3xl leading-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
                Explore Your Next
                <span className="block text-[var(--primary)]">
                  Global Destination
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--text-secondary)] sm:text-base">
                Discover international education opportunities and get
                professional guidance for your journey abroad.
              </p>
            </div>

            <Link
              href="/countries"
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-[var(--primary)] bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-all duration-500 hover:bg-white hover:text-[var(--primary)] hover:shadow-[0_0_25px_rgba(107,181,43,0.18)]"
            >
              View All Countries
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        {/* Moving Track */}
        <div className="relative overflow-hidden rounded-[32px]">
          {/* Soft edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 z-30 h-full w-16 bg-gradient-to-r from-white via-white/70 to-transparent sm:w-24" />

          <div className="pointer-events-none absolute right-0 top-0 z-30 h-full w-16 bg-gradient-to-l from-white via-white/70 to-transparent sm:w-24" />

          <div className="flex w-max animate-countries-marquee py-4">
            {[...countries, ...countries].map((country, index) => (
              <Link
                href={country.href}
                key={`${country.name}-${index}`}
                className="country-card group relative mx-2 block h-[390px] w-[275px] overflow-hidden rounded-[26px] border border-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_15px_45px_rgba(0,0,0,0.14)] sm:h-[420px] sm:w-[310px]"
              >
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Very light image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-white/5" />

                {/* Soft hover light */}
                <div className="absolute inset-0 bg-[var(--primary)]/0 transition-all duration-700 group-hover:bg-[var(--primary)]/10" />

                {/* Soft inner glow */}
                <div className="pointer-events-none absolute inset-0 rounded-[26px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)] transition-all duration-500 group-hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.75),inset_0_0_35px_rgba(255,255,255,0.12)]" />

                {/* Flag */}
                <div className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/85 text-xl shadow-lg backdrop-blur-md transition-all duration-500 group-hover:scale-105 group-hover:bg-white">
                  {country.flag}
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6">
                  {/* Glass content area */}
                  <div className="rounded-2xl border border-white/25 bg-black/20 p-4 backdrop-blur-[5px] transition-all duration-500 group-hover:bg-black/25 group-hover:border-white/50">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <h3 className="text-xl font-bold text-white sm:text-2xl">
                        {country.name}
                      </h3>

                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/10 text-white backdrop-blur-sm transition-all duration-500 group-hover:bg-white group-hover:text-[var(--primary)]">
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-12" />
                      </span>
                    </div>

                    <p className="mb-4 text-sm leading-5 text-white/85">
                      {country.description}
                    </p>

                    {/* Checklist */}
                    <ul className="space-y-2">
                      {country.checklist.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-xs text-white/90"
                        >
                          <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm transition-all duration-500 group-hover:bg-white/20">
                            <Check className="h-3 w-3 text-white" />
                          </span>

                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Professional outline effect */}
                <div className="pointer-events-none absolute inset-1 rounded-[23px] border border-transparent transition-all duration-700 group-hover:border-white/70" />

                {/* Tiny light accent */}
                <div className="pointer-events-none absolute left-5 top-5 h-2 w-2 rounded-full bg-white/80 opacity-0 shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-opacity duration-500 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes countriesMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .animate-countries-marquee {
          animation: countriesMarquee 38s linear infinite;
          will-change: transform;
        }

        .animate-countries-marquee:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-countries-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}