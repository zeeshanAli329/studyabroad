"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ScholarshipCTA() {
  return (
    <section className="bg-slate-50 pb-20">
      <div className="mx-auto max-w-[1320px] px-0 lg:px-8">

        <div className="flex flex-col justify-between gap-7 rounded-2xl bg-slate-900 p-6 md:flex-row md:items-center sm:p-10">

          <div>
            <span className="mb-2 block text-xs font-extrabold uppercase tracking-widest text-amber-400">
              NEVER MISS AN OPPORTUNITY
            </span>

            <h2 className="m-0 text-xl font-bold text-white sm:text-2xl lg:text-3xl">
              Want new scholarships sent straight to you?
            </h2>

            <p className="mt-2 mb-0 max-w-[650px] text-sm leading-relaxed text-white/70">
              Stay informed about newly announced scholarships
              and important application deadlines.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-amber-600 px-5 py-3 text-xs font-bold text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-700 md:w-auto"
          >
            Contact Us

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </div>
      </div>
    </section>
  );
}