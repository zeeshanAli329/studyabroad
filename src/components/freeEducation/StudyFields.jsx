"use client";

import Reveal from "@/components/shared/Reveal";

const FIELDS = [
  {
    title: "Medicine",
    icon: "01",
    description:
      "Explore lower-cost public universities, government scholarships and selected funded medical research opportunities.",
  },
  {
    title: "Engineering",
    icon: "02",
    description:
      "Strong opportunities exist across engineering, technology, manufacturing and research-focused programmes.",
  },
  {
    title: "Computer Science & IT",
    icon: "03",
    description:
      "Explore software, artificial intelligence, data science, cybersecurity and computing programmes.",
  },
  {
    title: "Business Administration",
    icon: "04",
    description:
      "Discover opportunities in business, finance, management, entrepreneurship and related disciplines.",
  },
  {
    title: "Social Sciences",
    icon: "05",
    description:
      "Funding can be available across economics, international relations, education, sociology and related areas.",
  },
];

export default function StudyFields() {
  return (
    <section className="border-y border-gray-100 bg-white py-16">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--primary)]">
              05 · FIELD OF STUDY
            </span>

            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
              Explore funding by academic field
            </h2>

            <p className="mt-4 leading-7 text-[var(--text-secondary)]">
              Different destinations have different academic strengths. Use
              these fields as a starting point when planning your study route.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FIELDS.map((field, index) => (
            <Reveal key={field.title} delay={index * 50}>
              <article className="group rounded-2xl border border-gray-100 bg-[#f8faf9] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/30 hover:bg-white hover:shadow-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary)]/8 text-xs font-bold text-[var(--primary)] transition-transform group-hover:scale-110">
                  {field.icon}
                </div>

                <h3 className="mt-5 font-serif text-xl font-semibold">
                  {field.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                  {field.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}