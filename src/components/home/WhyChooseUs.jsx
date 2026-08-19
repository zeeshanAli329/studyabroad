"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/shared/Reveal";
import { CheckCircle, MapPin, ArrowRight } from "lucide-react";

// Count-up animation hook
function useCountUp(
  end,
  duration = 2000,
  start = false,
  reducedMotion = false,
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    if (reducedMotion) {
      setCount(end);
      return;
    }

    let startTime = null;
    let animationFrame;

    const step = (timestamp) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [start, end, duration, reducedMotion]);

  return count;
}

export default function WhyChooseUs() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const [statsVisible, setStatsVisible] = useState(false);

  const statsRef = useRef(null);

  // Detect reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // Start counters when stats section enters viewport
  useEffect(() => {
    const node = statsRef.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  const successStories = useCountUp(
    100,
    2000,
    statsVisible,
    prefersReducedMotion,
  );

  const yearsExperience = useCountUp(
    15,
    1500,
    statsVisible,
    prefersReducedMotion,
  );

  const features = [
    {
      icon: CheckCircle,
      title: "Accurate Study Abroad Guidance",
      description:
        "Skilled study abroad consultants provide reliable guidance and personalized support throughout your international education journey, from university selection to visa assistance.",
    },
    {
      icon: MapPin,
      title: "International Education Support ",
      description:
        "Get dependable support from experienced consultants who understand international education, overseas university admissions, student visas, scholarships, and study abroad destinations.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[var(--primary)]/5 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-[var(--primary)]/5 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--primary)]/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ==================================================
              LEFT SIDE - IMAGE COMPOSITION
          ================================================== */}
          <Reveal direction="left" delay={0} className="relative lg:col-span-5">
            <div
              ref={statsRef}
              className="relative min-h-[500px] pt-6 sm:min-h-[560px] lg:min-h-[600px]"
            >
              {/* Decorative Dot */}
              <div className="absolute left-0 top-0 h-3 w-3 rounded-full bg-[var(--primary)] shadow-lg shadow-[var(--primary)]/40" />

              {/* Decorative Outline */}
              <div className="absolute left-6 top-8 h-[70%] w-[45%] -rotate-3 rounded-3xl border border-[var(--primary)]/20" />

              {/* ==========================================
                  MAIN IMAGE
              =========================================== */}
              <div className="group absolute left-0 top-10 z-10 aspect-[3/4] w-[52%] overflow-hidden rounded-3xl border border-[var(--primary)]/30 bg-white shadow-2xl sm:w-[48%]">
                {/* Animated Outline */}
                <div className="pointer-events-none absolute inset-0 z-20 rounded-3xl border-2 border-transparent transition-all duration-500 group-hover:border-[var(--primary)]/70" />

                <img
                  src="/images/choose-us-right-img1.png"
                  alt="International student receiving study abroad guidance"
                  className="w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[320px] xl:h-[380px] object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Fill Overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[var(--primary)]/80 via-[var(--primary)]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Image Content */}
                <div className="absolute bottom-4 left-4 right-4 z-30 translate-y-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="text-sm font-semibold text-white">
                    Your Global Study Journey
                  </div>

                  <div className="mt-1 text-xs text-white/80">
                    Study. Explore. Succeed.
                  </div>
                </div>
              </div>

              {/* ==========================================
                  SUCCESS STORIES
              =========================================== */}
              <div className="absolute right-0 top-0 z-10 w-[46%] sm:w-[44%]">
                <div className="group relative overflow-hidden rounded-2xl border border-[var(--primary)]/20 bg-white/80 p-4 shadow-sm backdrop-blur-sm sm:p-5">
                  {/* Fill Effect */}
                  <div className="absolute inset-0 translate-y-full bg-[var(--primary)] transition-transform duration-500 group-hover:translate-y-0" />

                  <div className="relative z-10">
                    <div className="tabular-nums text-3xl font-bold text-[var(--primary)] transition-colors duration-300 group-hover:text-white sm:text-4xl lg:text-5xl">
                      {successStories}+
                    </div>

                    <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[var(--text-secondary)] transition-colors duration-300 group-hover:text-white/80 sm:text-xs">
                      Student Success Stories
                    </div>
                  </div>
                </div>
              </div>

              {/* ==========================================
                  SECONDARY IMAGE
              =========================================== */}
              <div className="group absolute right-0 top-[43%] z-20 aspect-[4/5] w-[55%] overflow-hidden rounded-3xl border-4 border-white shadow-2xl sm:w-[52%]">
                {/* Outline Effect */}
                <div className="pointer-events-none absolute inset-0 z-30 rounded-3xl border-2 border-transparent transition-all duration-500 group-hover:border-white/70" />

                <img
                  src="/images/choose-us-left-img.png"
                  alt="Students collaborating on international education opportunities"
                  className="w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[320px] xl:h-[380px] object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Fill Effect */}
                <div className="absolute inset-0 z-10 bg-[var(--primary)]/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Center Content */}
                <div className="absolute inset-0 z-20 flex scale-90 items-center justify-center opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                  <div className="text-center text-white">
                    <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-white/60 bg-white/10 backdrop-blur-sm">
                      <CheckCircle className="h-7 w-7" />
                    </div>

                    <p className="text-sm font-semibold">
                      Trusted Study Abroad Support
                    </p>
                  </div>
                </div>
              </div>

              {/* ==========================================
                  YEARS EXPERIENCE
              =========================================== */}
              <div className="group absolute bottom-0 left-0 z-30">
                <div className="relative overflow-hidden rounded-2xl border border-[var(--primary)]/15 bg-white px-5 py-4 shadow-xl sm:px-6 sm:py-5">
                  {/* Fill Effect */}
                  <div className="absolute inset-0 translate-y-full bg-[var(--primary)] transition-transform duration-500 group-hover:translate-y-0" />

                  <div className="relative z-10">
                    <div className="tabular-nums text-2xl font-bold text-[var(--primary)] transition-colors duration-300 group-hover:text-white sm:text-3xl">
                      {yearsExperience}+
                    </div>

                    <div className="text-[10px] uppercase tracking-[0.12em] text-[var(--text-secondary)] transition-colors duration-300 group-hover:text-white/80 sm:text-xs">
                      Years of Combined Experience
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Circle */}
              <div className="absolute bottom-20 right-[2%] h-8 w-8 animate-pulse rounded-full border-2 border-[var(--primary)]/30" />
            </div>
          </Reveal>

          {/* ==================================================
              RIGHT SIDE - CONTENT
          ================================================== */}
          <Reveal direction="right" delay={200} className="lg:col-span-7">
            <div className="relative sm:pt-10">
              {/* Eyebrow */}
              <div className="mb-5 inline-flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[var(--primary)]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary)] sm:text-sm">
                  Why Choose Our Study Abroad Consultants
                </span>
              </div>

              {/* Heading */}
              <h2 className="mb-6 font-serif text-3xl leading-[1.1] text-[var(--text-primary)] sm:text-4xl lg:text-5xl xl:text-6xl">
                Your Trusted Partner for{" "}
                <span className="relative inline-block text-[var(--primary)]">
                  Study Abroad Dreams
                  <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-[var(--primary)]/20" />
                </span>
              </h2>

              {/* Description */}
              <p className="mb-8 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:mb-10 sm:text-lg">
                We help students turn international education ambitions into achievable journeys. From choosing the right university and
                destination to scholarship opportunities and pre-departure support, our experienced consultants guide you at every step.
              </p>

              {/* ==========================================
                  FEATURES
              =========================================== */}
              <div className="mb-8 space-y-4 sm:mb-10 sm:space-y-5">
                {features.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <Reveal
                      key={index}
                      delay={400 + index * 100}
                      disabled={prefersReducedMotion}
                    >
                      <div className="group relative flex cursor-pointer gap-4 overflow-hidden rounded-2xl border border-transparent p-4 transition-all duration-500 hover:border-[var(--primary)]/20 hover:bg-[var(--primary)]/5 hover:shadow-lg sm:p-5">
                        {/* Animated Fill */}
                        <div className="absolute inset-0 -translate-x-full bg-[var(--primary)]/[0.04] transition-transform duration-500 group-hover:translate-x-0" />

                        {/* Icon */}
                        <div className="relative z-10 flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[var(--primary)] transition-all duration-500 group-hover:scale-110 group-hover:rounded-full group-hover:shadow-lg group-hover:shadow-[var(--primary)]/30 sm:h-12 sm:w-12">
                          <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />

                          <Icon className="relative z-10 h-5 w-5 text-white transition-colors duration-300 group-hover:text-[var(--primary)] sm:h-6 sm:w-6" />
                        </div>

                        {/* Text */}
                        <div className="relative z-10">
                          <h3 className="mb-1 text-sm font-semibold text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--primary)] sm:mb-2 sm:text-base">
                            {feature.title}
                          </h3>

                          <p className="text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              {/* ==========================================
                  CTA BUTTON
              =========================================== */}
              <Link
                href="/about"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border-2 border-[var(--primary)] bg-[var(--primary)] px-6 py-3 font-semibold text-white transition-all duration-500 hover:-translate-y-1 hover:bg-transparent hover:text-[var(--primary)] hover:shadow-xl hover:shadow-[var(--primary)]/20 sm:px-8 sm:py-4"
              >
                {/* Fill Animation */}
                <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 group-hover:translate-x-0" />

                <span className="relative z-10">Start Your Free Education Journey Today</span>

                <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}