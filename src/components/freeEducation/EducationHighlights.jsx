"use client";

import Reveal from "@/components/shared/Reveal";

const ITEMS = [
  {
    number: "01",
    title: "Tuition-Free Routes",
    text: "Discover public universities and destinations where tuition can be free or highly subsidized.",
  },
  {
    number: "02",
    title: "Fully Funded",
    text: "Explore opportunities that may cover tuition, accommodation, travel and living costs.",
  },
  {
    number: "03",
    title: "Every Study Level",
    text: "Funding opportunities exist across Bachelor's, Master's and PhD study routes.",
  },
  {
    number: "04",
    title: "Pakistan Focused",
    text: "Understand the application requirements and preparation steps relevant to Pakistani students.",
  },
];

export default function EducationHighlights() {
  return (
    <section className="mx-auto max-w-[1320px] px-6 py-10 lg:px-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((item, index) => (
          <Reveal key={item.number} delay={index * 60}>
            <article className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/30 hover:shadow-xl">
              <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-[var(--primary)]/5 transition-transform duration-500 group-hover:scale-[1.8]" />

              <div className="relative">
                <span className="text-xs font-bold tracking-[.2em] text-[var(--primary)]">
                  {item.number}
                </span>

                <h2 className="mt-5 font-serif text-xl font-semibold">
                  {item.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                  {item.text}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}