"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/shared/Reveal";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

const coachings = [
  {
    title: "TOEFL Coaching",
    description:
      "Build your English proficiency with structured TOEFL preparation and expert guidance.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&h=500&fit=crop",
    href: "/coaching/toefl",
  },
  {
    title: "IELTS Coaching",
    description:
      "Prepare confidently for IELTS with experienced instructors and personalized learning.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=700&h=500&fit=crop",
    href: "/coaching/ielts",
  },
  {
    title: "OET Coaching",
    description:
      "Improve your professional English skills with focused OET preparation.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&h=500&fit=crop",
    href: "/coaching/oet",
  },
];

export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? coachings.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setActiveIndex((prev) =>
      prev === coachings.length - 1 ? 0 : prev + 1
    );
  };

  // Automatic slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === coachings.length - 1 ? 0 : prev + 1
      );
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f7f9f3] py-16 sm:py-20 lg:py-24">

      {/* Background */}
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[var(--primary)]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <Reveal direction="up" delay={0}>
          <div className="mb-10 flex items-end justify-between gap-5 sm:mb-14">

            <div>
              <div className="mb-4 flex items-center gap-3">

                <span className="h-[2px] w-8 bg-[var(--primary)]" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)] sm:text-sm">
                  Supporting Coaching
                </span>

              </div>

              <h2 className="font-serif text-3xl leading-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
                Prepare For Your
                <span className="block text-[var(--primary)]">
                  Global Journey
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                Expert coaching programs designed to help you achieve
                the scores and confidence you need for your future abroad.
              </p>
            </div>

            {/* Navigation */}
            <div className="hidden gap-3 sm:flex">

              <button
                onClick={goPrev}
                aria-label="Previous coaching"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-[var(--primary)]/30 bg-white text-[var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white"
              >
                <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </button>

              <button
                onClick={goNext}
                aria-label="Next coaching"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-[var(--primary)]/30 bg-white text-[var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white"
              >
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>

            </div>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">

          {coachings.map((coaching, index) => {
            const isActive = index === activeIndex;

            return (
              <Reveal
                key={coaching.title}
                direction="right"
                delay={index * 120}
              >
                <Link
                  href={coaching.href}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`group relative block overflow-hidden rounded-3xl bg-white transition-all duration-700 ${
                    isActive
                      ? "shadow-2xl ring-2 ring-[var(--primary)]"
                      : "shadow-sm hover:-translate-y-2 hover:shadow-xl"
                  }`}
                >

                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">

                    <Image
                      src={coaching.image}
                      alt={coaching.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Fill Overlay */}
                    <div className="absolute inset-0 bg-[var(--primary)]/60 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                    {/* Outline */}
                    <div className="pointer-events-none absolute inset-3 rounded-2xl border border-white/0 transition-all duration-500 group-hover:border-white/60" />

                    {/* Top Badge */}
                    <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-500 group-hover:bg-white group-hover:text-[var(--primary)]">
                      Expert Coaching
                    </div>

                    {/* Arrow */}
                    <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-md transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-[var(--primary)]">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>

                  </div>

                  {/* Content */}
                  <div className="relative overflow-hidden p-5 sm:p-6">

                    {/* Fill */}
                    <div className="absolute inset-0 translate-y-full bg-[var(--primary)] transition-transform duration-700 group-hover:translate-y-0" />

                    <div className="relative z-10">

                      <h3 className="mb-2 text-lg font-bold text-[var(--text-primary)] transition-colors duration-500 group-hover:text-white sm:text-xl">
                        {coaching.title}
                      </h3>

                      <p className="text-sm leading-6 text-[var(--text-secondary)] transition-colors duration-500 group-hover:text-white/80">
                        {coaching.description}
                      </p>

                      <div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--primary)] transition-colors duration-500 group-hover:text-white">
                        Explore Coaching
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>

                    </div>
                  </div>

                  {/* Bottom Active Line */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-[var(--primary)] transition-all duration-700 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />

                </Link>
              </Reveal>
            );
          })}

        </div>

        {/* Mobile Navigation */}
        <div className="mt-7 flex justify-center gap-3 sm:hidden">

          <button
            onClick={goPrev}
            aria-label="Previous coaching"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--primary)]/30 bg-white text-[var(--primary)]"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={goNext}
            aria-label="Next coaching"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--primary)]/30 bg-white text-[var(--primary)]"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

        </div>
      </div>
    </section>
  );
}