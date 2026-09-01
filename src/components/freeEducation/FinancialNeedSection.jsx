"use client";

import Reveal from "@/components/shared/Reveal";

export default function FinancialNeedSection() {
  return (
    <section className="border-y border-gray-100 bg-[var(--background-light)] py-16">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-[1.5rem] border border-gray-100 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/8 text-sm font-bold text-[var(--primary)]">
                07
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[.18em] text-[var(--primary)]">
                FINANCIAL NEED
              </p>

              <h2 className="mt-2 font-serif text-2xl font-semibold">
                Support for financially needy students
              </h2>

              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                Students with limited financial resources should investigate
                need-based support, government scholarships and university
                funding. Pakistani students can also explore HEC opportunities
                alongside international fully funded scholarships.
              </p>

              <div className="mt-6 rounded-xl bg-[var(--primary)]/5 p-4">
                <p className="text-sm font-semibold text-[var(--primary)]">
                  Important planning point
                </p>

                <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                  Scholarship deadlines may occur before university admission
                  deadlines, so funding research should start early.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="h-full rounded-[1.5rem] border border-gray-100 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/8 text-sm font-bold text-[var(--primary)]">
                08
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[.18em] text-[var(--primary)]">
                ONLINE & DISTANCE
              </p>

              <h2 className="mt-2 font-serif text-2xl font-semibold">
                Free and low-cost online education
              </h2>

              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                Students who cannot relocate immediately can use online
                education to strengthen academic skills, English proficiency,
                technical knowledge and credentials while preparing for future
                funded study.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Online university courses",
                  "Professional certificates",
                  "Academic English",
                  "Technology skills",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-gray-100 px-4 py-3 text-sm font-medium transition-colors hover:border-[var(--primary)]/30"
                  >
                    <span className="mr-2 text-[var(--primary)]">
                      ✓
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}