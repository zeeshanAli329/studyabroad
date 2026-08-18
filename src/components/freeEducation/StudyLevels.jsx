"use client";

import Reveal from "@/components/shared/Reveal";

const LEVELS = [
  {
    number: "01",
    label: "Bachelor's",
    title: "Undergraduate",
    description:
      "Options for Pakistani students after Intermediate, FSc, ICS, FA, A-Levels or equivalent qualifications.",
    icon: "01",
  },
  {
    number: "02",
    label: "Master's",
    title: "Postgraduate",
    description:
      "Fully or partially funded Master's opportunities for Pakistani graduates across major destinations.",
    icon: "02",
  },
  {
    number: "03",
    label: "PhD",
    title: "Doctoral",
    description:
      "Funded doctoral positions can provide research support, tuition arrangements and monthly stipends.",
    icon: "03",
  },
];

export default function StudyLevels() {
  return (
    <section className="mx-auto max-w-[1320px] px-6 py-16 lg:px-8">
      <Reveal>
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--primary)]">
            04 · STUDY LEVEL
          </span>

          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            Free education by study level
          </h2>

          <p className="mt-4 leading-7 text-[var(--text-secondary)]">
            Funding opportunities differ depending on your academic stage.
            Choose the route that matches your current qualification.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {LEVELS.map((level, index) => (
          <Reveal key={level.number} delay={index * 70}>
            <article className="group relative overflow-hidden rounded-[1.5rem] border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/30 hover:shadow-xl">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-[var(--primary)]/5 transition-transform duration-500 group-hover:scale-150" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/8 text-sm font-bold text-[var(--primary)]">
                    {level.icon}
                  </div>

                  <span className="text-xs font-bold tracking-[.2em] text-[var(--primary)]">
                    {level.number}
                  </span>
                </div>

                <p className="mt-8 text-xs font-bold uppercase tracking-widest text-[var(--primary)]">
                  {level.label}
                </p>

                <h3 className="mt-2 font-serif text-2xl font-semibold">
                  {level.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                  {level.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}