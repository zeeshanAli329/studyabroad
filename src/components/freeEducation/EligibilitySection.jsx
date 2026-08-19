"use client";

import Reveal from "@/components/shared/Reveal";

const REQUIREMENTS = [
  {
    title: "Academic Documents",
    text: "Prepare your academic transcripts and certificates. HEC or IBCC attestation may be required depending on the programme.",
  },
  {
    title: "Language Certificate",
    text: "IELTS, TOEFL or another accepted language qualification may be required by the university or scholarship.",
  },
  {
    title: "Statement of Purpose",
    text: "Prepare a clear statement explaining your academic background, motivation and future goals.",
  },
  {
    title: "Recommendation Letters",
    text: "Academic or professional recommendation letters may be required for postgraduate applications.",
  },
  {
    title: "Valid Passport",
    text: "A valid passport is normally required for international applications and subsequent visa processing.",
  },
  {
    title: "Entrance Tests",
    text: "Some universities and programmes may require entrance tests, interviews, portfolios or subject-specific assessments.",
  },
];

export default function EligibilitySection() {
  return (
    <section className="mx-auto max-w-[1320px] px-6 py-16 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <Reveal>
          <div>
            <span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--primary)]">
              06 · ELIGIBILITY
            </span>

            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Prepare your application early
            </h2>

            <p className="mt-5 leading-7 text-[var(--text-secondary)]">
              Requirements vary between universities and scholarship
              providers. Preparing your core documents early gives you more
              time for attestations, language testing and application
              submissions.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {REQUIREMENTS.map((item, index) => (
            <Reveal key={item.title} delay={index * 40}>
              <article className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:border-[var(--primary)]/25 hover:shadow-md">
                <div className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/8 text-sm font-bold text-[var(--primary)]">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}