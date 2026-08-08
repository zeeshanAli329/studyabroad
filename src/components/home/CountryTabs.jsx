"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Globe2, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/shared/Reveal";

const countries = [
  {
    id: "canada",
    flag: "🇨🇦",
    image:
      "https://images.unsplash.com/photo-1519832979-6fa011b87667?w=1000&h=1200&fit=crop",
    title: "Working Visa",
    description:
      "Professional guidance for working abroad, documentation and visa applications.",
    href: "/services/working-visa",
  },
  {
    id: "bangladesh",
    flag: "🇧🇩",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1000&h=1200&fit=crop",
    title: "Business Visa",
    description:
      "Complete support for business travel, documentation and international opportunities.",
    href: "/services/business-visa",
  },
  {
    id: "australia",
    flag: "🇦🇺",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1000&h=1200&fit=crop",
    title: "Student Visa",
    description:
      "Personalized assistance for universities, admissions, scholarships and student visas.",
    href: "/services/student-visa",
  },
  {
    id: "usa",
    flag: "🇺🇸",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1000&h=1200&fit=crop",
    title: "Tourist Visa",
    description:
      "Reliable guidance for tourist visa applications and international travel.",
    href: "/services/tourist-visa",
  },
  {
    id: "srilanka",
    flag: "🇱🇰",
    image:
      "https://images.unsplash.com/photo-1586183189334-1596e9c0a04b?w=1000&h=1200&fit=crop",
    title: "Visit Visa",
    description:
      "Simple and professional support for visiting family, friends and destinations abroad.",
    href: "/services/visit-visa",
  },
];

export default function CountryTabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? countries.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setActiveIndex((prev) =>
      prev === countries.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative overflow-hidden bg-[var(--primary-dark,#0f3d2e)] py-16 sm:py-20 lg:py-24">
      {/* =====================================================
          VERY LIGHT BACKGROUND EFFECT
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* soft top glow */}
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-white/[0.025] blur-3xl" />

        {/* soft right glow */}
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[var(--primary)]/[0.08] blur-3xl" />

        {/* subtle center light */}
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.015] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-8">
        <Reveal direction="up" delay={0}>
          {/* Header */}
          <div className="mb-8 flex items-start justify-between gap-6 sm:mb-10">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-[var(--primary-light,#8fd14f)]" />

                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary-light,#8fd14f)] sm:text-sm">
                  Our Countries
                </span>
              </div>

              <h2 className="font-serif text-2xl leading-tight text-white sm:text-3xl lg:text-4xl">
                Making Memories Around
                <br />
                World Unforgettable
              </h2>
            </div>

            {/* Navigation */}
            <div className="hidden shrink-0 items-center gap-3 sm:flex">
              <button
                onClick={goPrev}
                aria-label="Previous country"
                className="
                  group flex h-10 w-10 items-center justify-center
                  rounded-full border border-white/20
                  text-white/80
                  transition-all duration-300
                  hover:border-white/50
                  hover:bg-white
                  hover:text-[var(--primary-dark,#0f3d2e)]
                  hover:shadow-[0_5px_20px_rgba(255,255,255,0.08)]
                "
              >
                <ChevronLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
              </button>

              <button
                onClick={goNext}
                aria-label="Next country"
                className="
                  group flex h-10 w-10 items-center justify-center
                  rounded-full border border-white/20
                  text-white/80
                  transition-all duration-300
                  hover:border-white/50
                  hover:bg-white
                  hover:text-[var(--primary-dark,#0f3d2e)]
                  hover:shadow-[0_5px_20px_rgba(255,255,255,0.08)]
                "
              >
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* =====================================================
              IMAGE ACCORDION
          ====================================================== */}

          <div className="flex h-[340px] gap-3 sm:h-[400px] sm:gap-4 lg:h-[460px]">
            {countries.map((country, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={country.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    group relative cursor-pointer overflow-hidden rounded-2xl
                    border transition-all duration-700 ease-out
                    ${
                      isActive
                        ? "border-white/30 shadow-[0_15px_40px_rgba(0,0,0,0.15)]"
                        : "border-white/10"
                    }
                  `}
                  style={{
                    flexGrow: isActive ? 4 : 1,
                    flexBasis: 0,
                    minWidth: isActive ? undefined : "55px",
                  }}
                >
                  {/* Image */}
                  <Image
                    src={country.image}
                    alt={country.title}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 60vw, 40vw"
                    className={`
                      object-cover
                      transition-all duration-700 ease-out
                      ${
                        isActive
                          ? "scale-100 brightness-[0.92]"
                          : "scale-105 brightness-[0.72]"
                      }
                    `}
                  />

                  {/* Very light image overlay */}
                  <div
                    className={`
                      absolute inset-0 transition-all duration-700
                      ${
                        isActive
                          ? "bg-gradient-to-t from-black/60 via-black/10 to-transparent"
                          : "bg-black/25"
                      }
                    `}
                  />

                  {/* Subtle active border */}
                  <div
                    className={`
                      pointer-events-none absolute inset-0 rounded-2xl
                      border transition-all duration-500
                      ${
                        isActive
                          ? "border-white/20"
                          : "border-transparent"
                      }
                    `}
                  />

                  {/* Flag */}
                  <div
                    className="
                      absolute right-3 top-3 z-20
                      flex h-8 w-8 items-center justify-center
                      rounded-full
                      border border-black/5
                      bg-white/95
                      text-base
                      shadow-sm
                      backdrop-blur-sm
                      transition-transform duration-500
                      group-hover:scale-105
                      sm:right-4 sm:top-4 sm:h-9 sm:w-9
                    "
                  >
                    {country.flag}
                  </div>

                  {/* =================================================
                      ACTIVE CONTENT
                  ================================================= */}

                  <div
                    className={`
                      absolute bottom-0 left-0 right-0 z-10
                      p-3 sm:p-5
                      transition-all duration-500 ease-out
                      ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "pointer-events-none translate-y-5 opacity-0"
                      }
                    `}
                  >
                    <div
                      className="
                        max-w-[290px]
                        rounded-2xl
                        border border-white/15
                        bg-[var(--primary)]/90
                        p-4
                        shadow-lg
                        backdrop-blur-md
                        sm:p-5
                      "
                    >
                      <h3 className="mb-1.5 text-base font-semibold text-white sm:text-lg">
                        {country.title}
                      </h3>

                      <p className="mb-4 text-xs leading-relaxed text-white/80 sm:text-sm">
                        {country.description}
                      </p>

                      <Link
                        href={country.href}
                        onClick={(e) => e.stopPropagation()}
                        className="
                          group/button
                          inline-flex items-center gap-2
                          rounded-full
                          bg-white
                          px-4 py-2
                          text-xs font-semibold
                          text-[var(--primary)]
                          transition-all duration-300
                          hover:-translate-y-0.5
                          hover:gap-2.5
                          hover:shadow-lg
                          sm:text-sm
                        "
                      >
                        Explore Visa
                        <ArrowUpRight
                          className="
                            h-3.5 w-3.5
                            transition-transform duration-300
                            group-hover/button:translate-x-0.5
                            group-hover/button:-translate-y-0.5
                          "
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile navigation */}
          <div className="mt-5 flex items-center justify-center gap-3 sm:hidden">
            <button
              onClick={goPrev}
              aria-label="Previous country"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:bg-white hover:text-[var(--primary-dark,#0f3d2e)]"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-1.5">
              {countries.map((country, index) => (
                <button
                  key={country.id}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${country.title}`}
                  className={`
                    h-1.5 rounded-full transition-all duration-300
                    ${
                      index === activeIndex
                        ? "w-7 bg-white"
                        : "w-1.5 bg-white/30"
                    }
                  `}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              aria-label="Next country"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:bg-white hover:text-[var(--primary-dark,#0f3d2e)]"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}