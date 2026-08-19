"use client";

import Link from "next/link";
import Reveal from "@/components/shared/Reveal";

import {
  cleanText,
  formatDate,
  getCountryName,
  getFundingType,
  getImage,
  getScholarshipDeadline,
  getScholarshipLevel,
  getScholarshipTitle,
} from "./freeEducationUtils";

export default function FundedScholarships({
  scholarships = [],
  loading = false,
}) {
  return (
    <section
      id="funded-scholarships"
      className="mx-auto max-w-[1320px] scroll-mt-24 px-6 py-16 lg:px-8"
    >
      <Reveal>
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--primary)]">
            02 · FULLY FUNDED SCHOLARSHIPS
          </span>

          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            Funding opportunities from your scholarship database
          </h2>

          <p className="mt-4 leading-7 text-[var(--text-secondary)]">
            Explore scholarships already published through your platform.
            Students can open each scholarship to review eligibility,
            deadlines, degree level and funding details.
          </p>
        </div>
      </Reveal>

      {loading ? (
        <Loading />
      ) : scholarships.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-gray-200 bg-white p-10 text-center">
          <p className="text-[var(--text-secondary)]">
            No scholarships are available yet. Scholarships added through
            your admin panel will automatically appear here.
          </p>
        </div>
      ) : (
        <div className="mt-10 space-y-5">
          {scholarships.slice(0, 10).map((scholarship, index) => {
            const title = getScholarshipTitle(scholarship);
            const country = getCountryName(scholarship);
            const level = getScholarshipLevel(scholarship);
            const deadline = getScholarshipDeadline(scholarship);
            const funding = getFundingType(scholarship);

            const description = cleanText(
              scholarship?.description ||
                scholarship?.summary ||
                scholarship?.overview ||
                scholarship?.content,
              "Explore this scholarship opportunity for international students.",
            );

            return (
              <Reveal
                key={
                  scholarship.id ||
                  scholarship.slug ||
                  `${title}-${index}`
                }
                delay={index * 50}
              >
                <article className="group grid overflow-hidden rounded-[1.5rem] border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/30 hover:shadow-[0_20px_60px_rgba(0,0,0,.08)] md:grid-cols-[330px_1fr]">
                  <div className="relative min-h-[240px] overflow-hidden">
                    <img
                      src={getImage(scholarship)}
                      alt={title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                    <div className="absolute bottom-5 left-5 right-5">
                      <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[var(--primary)] backdrop-blur">
                        {funding}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-6 lg:p-8">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-[var(--primary)]/5 px-3 py-1 text-xs font-semibold text-[var(--primary)]">
                        {country}
                      </span>

                      <span className="rounded-full border border-gray-100 px-3 py-1 text-xs font-medium text-[var(--text-secondary)]">
                        {level}
                      </span>
                    </div>

                    <h3 className="mt-4 font-serif text-2xl font-semibold leading-tight transition-colors group-hover:text-[var(--primary)]">
                      {title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-[var(--text-secondary)]">
                      {description}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-5">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                          Application Deadline
                        </p>

                        <p className="mt-1 text-sm font-semibold">
                          {deadline
                            ? formatDate(deadline)
                            : "Check scholarship details"}
                        </p>
                      </div>

                      {scholarship.slug ? (
                        <Link
                          href={`/scholarships/${scholarship.slug}`}
                          className="rounded-xl border border-[var(--primary)]/20 px-4 py-2.5 text-sm font-semibold text-[var(--primary)] transition-all hover:bg-[var(--primary)] hover:text-white"
                        >
                          View Scholarship →
                        </Link>
                      ) : (
                        <Link
                          href="/scholarships"
                          className="rounded-xl border border-[var(--primary)]/20 px-4 py-2.5 text-sm font-semibold text-[var(--primary)] transition-all hover:bg-[var(--primary)] hover:text-white"
                        >
                          Explore Scholarships →
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      )}
    </section>
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