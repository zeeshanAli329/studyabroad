"use client";

import Link from "next/link";
import Reveal from "@/components/shared/Reveal";

export default function FreeEducationCTA() {
  return (
    <section className="mx-auto max-w-[1320px] px-6 py-16 lg:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-[var(--primary)]/10 bg-white p-8 shadow-[0_20px_70px_rgba(0,0,0,.06)] sm:p-10 lg:p-14">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--primary)]/5 blur-3xl" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--primary)]">
                START YOUR JOURNEY
              </span>

              <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold sm:text-4xl">
                Find the funding route that fits your study plan.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-[var(--text-secondary)]">
                Compare destinations, explore scholarships and estimate your
                study budget before starting your international application.
              </p>
            </div>

            <Link
              href="/scholarships"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--primary)] px-7 py-3.5 font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Explore Scholarships →
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}