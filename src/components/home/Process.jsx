"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/shared/Reveal";
import {
  Quote,
  ArrowLeft,
  ArrowRight,
  Star,
} from "lucide-react";

const testimonials = [
  {
    id: "albert",
    quote:
      "We have been operating for over a decade providing top-notch services to our clients and building a strong track record in the industry.",
    name: "Albert Flores",
    role: "Web Designer",
    avatar:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop",
  },
  {
    id: "courtney",
    quote:
      "Their guidance made the whole student visa process feel simple and stress-free. Every step was explained clearly and the team was available whenever we had questions.",
    name: "Courtney Henry",
    role: "Medical Assistant",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
  },
  {
    id: "ronald",
    quote:
      "From the first consultation to the final approval, the support never wavered. I would recommend this team to anyone planning to study or work abroad.",
    name: "Ronald Richards",
    role: "Marketing Coordinator",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  },
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const active = testimonials[activeIndex];

  const goPrev = () => {
    setDirection("left");

    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setDirection("right");

    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      aria-labelledby="student-testimonials-heading"
      className="relative overflow-hidden bg-[var(--background-light)] py-16 sm:py-20 lg:py-24"
    >
      {/* Background outlines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full border border-[var(--primary)]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-24 h-56 w-56 rounded-full border border-[var(--primary)]/10"
      />

      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        {/* SEO-friendly section heading */}
        <header className="mb-10 text-center sm:mb-14">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
            Student Reviews
          </span>

          <h2
            id="student-testimonials-heading"
            className="mt-3 font-serif text-3xl leading-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl"
          >
            What Our Students
            <br />
            <span className="text-[var(--primary)]">
              Say About Us
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
            Read experiences from students who received guidance with
            study abroad planning, university applications, student visas,
            and international education.
          </p>
        </header>

        <div className="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          {/* IMAGE */}
          <Reveal
            direction="left"
            delay={0}
            className="lg:col-span-5"
          >
            <div className="group relative h-full min-h-[320px] overflow-hidden rounded-[2rem]">
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-[2.2rem] border border-[var(--primary)]/20 transition-all duration-500 group-hover:-inset-4 group-hover:border-[var(--primary)]/40"
              />

              <div className="relative h-full min-h-[320px] overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&h=800&fit=crop"
                  alt="Study abroad education consultant providing student guidance"
                  loading="lazy"
                  className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[360px] md:h-[420px] lg:h-full"
                />

                {/* Image overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                />

                {/* Shine */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg] bg-white/20 transition-all duration-1000 group-hover:left-[130%]"
                />

                {/* Image badge */}
                <div className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                  Trusted Study Abroad Guidance
                </div>
              </div>
            </div>
          </Reveal>

          {/* TESTIMONIAL CONTENT */}
          <Reveal
            direction="right"
            delay={150}
            className="lg:col-span-7"
          >
            <article
              aria-live="polite"
              className="group relative h-full overflow-hidden rounded-[2rem] bg-[var(--primary)] p-7 shadow-xl sm:p-10 lg:p-12"
            >
              {/* Animated outline */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-3 rounded-[1.5rem] border border-white/20 transition-all duration-500 group-hover:inset-5 group-hover:border-white/40"
              />

              {/* Decorative circle */}
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-56 w-56 rounded-full border-[30px] border-white/5"
              />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  {/* Quote icon + rating */}
                  <div className="mb-6 flex items-center justify-between">
                    <div
                      aria-hidden="true"
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md"
                    >
                      <Quote
                        className="h-7 w-7"
                        fill="currentColor"
                      />
                    </div>

                    <div
                      aria-label="5 out of 5 stars"
                      className="flex gap-1"
                    >
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          aria-hidden="true"
                          className="h-4 w-4 fill-white text-white"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Active testimonial */}
                  <div
                    key={`${active.id}-${direction}`}
                    className="animate-[slideIn_0.5s_ease-out]"
                  >
                    <blockquote>
                      <p className="max-w-2xl text-lg leading-relaxed text-white sm:text-xl lg:text-2xl">
                        “{active.quote}”
                      </p>
                    </blockquote>
                  </div>
                </div>

                {/* Student information */}
                <div className="mt-10 flex items-end justify-between gap-5">
                  <div
                    key={active.id}
                    className="flex animate-[slideIn_0.5s_ease-out] items-center gap-3"
                  >
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white/40">
                      <Image
                        src={active.avatar}
                        alt={`${active.name} - student testimonial`}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <div className="font-semibold text-white">
                        {active.name}
                      </div>

                      <div className="text-sm text-white/70">
                        {active.role}
                      </div>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div
                    className="flex gap-2"
                    aria-label="Testimonial navigation"
                  >
                    <button
                      type="button"
                      onClick={goPrev}
                      aria-label="Previous student testimonial"
                      className="group/btn flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:bg-white hover:text-[var(--primary)]"
                    >
                      <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-x-0.5" />
                    </button>

                    <button
                      type="button"
                      onClick={goNext}
                      aria-label="Next student testimonial"
                      className="group/btn flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:bg-white hover:text-[var(--primary)]"
                    >
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                    </button>
                  </div>
                </div>

                {/* Progress */}
                <div
                  className="mt-8 flex gap-2"
                  aria-label="Choose testimonial"
                >
                  {testimonials.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setDirection(
                          index > activeIndex ? "right" : "left"
                        );
                        setActiveIndex(index);
                      }}
                      aria-label={`View testimonial from ${item.name}`}
                      aria-current={
                        index === activeIndex ? "true" : undefined
                      }
                      className="group/progress h-1.5 flex-1 overflow-hidden rounded-full bg-white/20"
                    >
                      <span
                        className={`block h-full origin-left rounded-full bg-white transition-all duration-500 ${
                          index === activeIndex
                            ? "w-full"
                            : "w-0 group-hover/progress:w-1/2"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(35px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}