"use client";

import Link from "next/link";
import Reveal from "@/components/shared/Reveal";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32">
      


      <div className="mx-auto max-w-[1320px] px-0 lg:px-0">
        <Reveal direction="up" delay={0}>
          <div
            className="
              group relative overflow-hidden
              lg:rounded-[28px] rounded-none 
              bg-[var(--primary-dark)]
              px-6 py-14
              sm:px-10 sm:py-16
              lg:px-16 lg:py-20
              text-center
       
           
            "
          >
            {/* =====================================================
                ANIMATED LIGHT EFFECT
            ====================================================== */}

        

            {/* Moving light */}
            <div
              className="
                pointer-events-none absolute
                -left-[30%] top-0
                h-full w-[25%]
                rotate-[15deg]
                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent
                blur-xl
                transition-all duration-[1500ms]
                group-hover:left-[110%]
              "
            />

            {/* Top-right glow */}
            <div
              className="
                pointer-events-none absolute
                -right-20 -top-20
                h-64 w-64
                rounded-full
                bg-white/10
                blur-[70px]
                transition-transform duration-700
                group-hover:scale-125
              "
            />

            {/* Bottom-left glow */}
            <div
              className="
                pointer-events-none absolute
                -bottom-24 -left-20
                h-64 w-64
                rounded-full
                bg-white/10
                blur-[80px]
                transition-transform duration-700
                group-hover:scale-125
              "
            />

            {/* =====================================================
                DECORATIVE OUTLINE
            ====================================================== */}

            <div
              className="
                pointer-events-none absolute inset-3
                rounded-[22px] sm:rounded-[28px]
                border border-white/10
                transition-all duration-500
                group-hover:inset-2
                group-hover:border-white/25
              "
            />

            <div
              className="
                pointer-events-none absolute inset-0
                rounded-[28px] sm:rounded-[34px]
                border border-white/10
                transition-all duration-500
                group-hover:border-white/20
              "
            />

            {/* Decorative circles */}
            <div
              className="
                pointer-events-none absolute
                left-8 top-8
                h-10 w-10
                rounded-full
                border border-white/15
                transition-all duration-700
                group-hover:scale-125
                group-hover:border-white/30
              "
            />

            <div
              className="
                pointer-events-none absolute
                right-10 bottom-8
                h-14 w-14
                rounded-full
                border border-white/10
                transition-all duration-700
                group-hover:scale-125
                group-hover:border-white/25
              "
            />

            {/* =====================================================
                CONTENT
            ====================================================== */}

            <div className="relative z-10 mx-auto max-w-3xl">
              {/* Small badge */}
              <div
                className="
                  mb-5 inline-flex items-center gap-2
                  rounded-full
                  border border-white/20
                  bg-white/10
                  px-4 py-2
                  backdrop-blur-md
                  transition-all duration-300
                  group-hover:border-white/30
                  group-hover:bg-white/15
                "
              >
                <Sparkles
                  className="
                    h-4 w-4 text-white
                    transition-transform duration-500
                    group-hover:rotate-12
                  "
                />

                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
                  Start Your <strong>Study Abroad</strong> Journey
                </span>
              </div>

              {/* Heading */}
              <h2
                className="
                  font-serif
                  text-3xl leading-tight
                  text-white
                  sm:text-4xl
                  lg:text-5xl
                  xl:text-6xl
                "
              >
                Ready to Start
                <br />
                <span className="text-white/85">
                  Your <strong>Study Abroad Journey</strong>?
                </span>
              </h2>

              {/* Description */}
              <p
                className="
                  mx-auto mt-5
                  max-w-xl
                  text-sm leading-relaxed
                  text-white/80
                  sm:text-base
                  lg:text-lg
                "
              >
                Take the first step towards your{" "}
                <strong>international education</strong> goals. Our expert team
                at <strong>Studyabroad</strong> is here to guide you through{" "}
                <strong>university applications</strong>,{" "}
                <strong>scholarships</strong>,{" "}
                <strong>student visas</strong>,{" "}
                <strong>study abroad destinations</strong> and your complete{" "}
                <strong>international education journey</strong>.
              </p>

              {/* =====================================================
                  BUTTONS
              ====================================================== */}

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
                {/* Primary */}
                <Link
                  href="/contact"
                  className="
                    group/primary
                    inline-flex w-full
                    items-center justify-center gap-2
                    rounded-full
                    bg-white
                    px-7 py-3.5
                    text-sm font-semibold
                    text-[var(--primary)]
                    shadow-lg
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:gap-3
                    hover:shadow-[0_12px_35px_rgba(0,0,0,0.2)]
                    sm:w-auto
                    sm:px-8
                  "
                >
                  <strong>Book Study Abroad Consultation</strong>

                  <ArrowRight
                    className="
                      h-4 w-4
                      transition-transform duration-300
                      group-hover/primary:translate-x-1
                    "
                  />
                </Link>

                {/* Secondary */}
                <Link
                  href="/scholarships"
                  className="
                    group/secondary
                    inline-flex w-full
                    items-center justify-center gap-2
                    rounded-full
                    border-2 border-white/80
                    bg-transparent
                    px-7 py-3
                    text-sm font-semibold
                    text-white
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-white
                    hover:bg-white
                    hover:text-[var(--primary)]
                    hover:shadow-[0_12px_35px_rgba(0,0,0,0.12)]
                    sm:w-auto
                    sm:px-8 sm:py-3.5
                  "
                >
                  <strong>Explore Study Abroad Scholarships</strong>

                  <ArrowRight
                    className="
                      h-4 w-4
                      opacity-0
                      -translate-x-2
                      transition-all duration-300
                      group-hover/secondary:translate-x-0
                      group-hover/secondary:opacity-100
                    "
                  />
                </Link>
              </div>
            </div>

            {/* Bottom glowing line */}
            <div
              className="
                pointer-events-none absolute
                bottom-0 left-1/2
                h-[2px]
                w-1/3
                -translate-x-1/2
                bg-white/20
                blur-sm
                transition-all duration-700
                group-hover:w-2/3
                group-hover:bg-white/50
              "
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}