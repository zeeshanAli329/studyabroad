"use client";

import Reveal from "@/components/shared/Reveal";
import { FALLBACK_IMAGE } from "./freeEducationUtils";
import Link from "next/link";

export default function FreeEducationHero() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-white">
      <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-[var(--primary)]/5 blur-3xl" />

      <div className="absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-[var(--primary)]/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1320px] px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
                <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                Free & Fully Funded Education
              </div>

              <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[4.25rem]">
                Free Education for Pakistani Students
                <span className="mt-3 block text-[var(--primary)]">
                  Study Abroad Without Tuition Fees
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
                Several countries around the world offer free or heavily
                subsidized higher education to international students,
                including Pakistanis. Others provide fully funded scholarships
                covering tuition, accommodation, travel and living support.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/countries"
                  className="rounded-xl bg-[var(--primary)] px-6 py-3.5 font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Explore Countries
                </Link>

                <a
                  href="#funded-scholarships"
                  className="rounded-xl border border-gray-200 bg-white px-6 py-3.5 font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                >
                  View Scholarships
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--text-secondary)]">
                <span>✓ Tuition-free routes</span>
                <span>✓ Fully funded scholarships</span>
                <span>✓ Pakistani student guidance</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2.5rem] bg-[var(--primary)]/5 blur-2xl" />

              <div className="relative rounded-[2rem] border border-gray-100 bg-white p-3 shadow-[0_30px_90px_rgba(0,0,0,.08)]">
                <div className="relative h-[390px] overflow-hidden rounded-[1.5rem]">
                  <img
                    src={FALLBACK_IMAGE}
                    alt="International students studying abroad"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                  <div className="absolute bottom-7 left-7 right-7">
                    <p className="text-xs font-bold uppercase tracking-[.2em] text-white/70">
                      Your Funding Journey
                    </p>

                    <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-white">
                      Discover affordable and fully funded study opportunities.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}