"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiGlobe, FiCheckCircle } from "react-icons/fi";
import { useEffect, useState, useRef } from "react";

export default function AboutSection() {
  const [animatedStats, setAnimatedStats] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      number: 10,
      suffix: "K+",
      label: "Complete projects",
    },
    {
      number: 20,
      suffix: "+",
      label: "Team members",
    },
    {
      number: 5,
      suffix: "K+",
      label: "Winning award",
    },
    {
      number: 100,
      suffix: "+",
      label: "Complete projects",
    },
  ];

  // Reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // Animate stats when section enters viewport
  useEffect(() => {
    if (prefersReducedMotion) {
      setAnimatedStats({
        0: 10,
        1: 20,
        2: 5,
        3: 100,
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            stats.forEach((stat, index) => {
              animateValue(index, 0, stat.number, 1800);
            });
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, prefersReducedMotion]);

  const animateValue = (index, start, end, duration) => {
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      const currentValue = Math.floor(
        start + (end - start) * easeOutQuart
      );

      setAnimatedStats((prev) => ({
        ...prev,
        [index]: currentValue,
      }));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f5f8ef] py-16 sm:py-20 lg:py-24"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[var(--primary)]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[var(--primary)]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">

          {/* =====================================================
              LEFT IMAGE
          ====================================================== */}
          <div className="group relative h-[430px] overflow-hidden rounded-2xl sm:h-[520px] lg:col-span-4 lg:h-[570px]">

            {/* Image */}
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&h=1200&fit=crop"
              alt="Student studying abroad"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
            />

            {/* Dark / Green Fill Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-70 transition-all duration-700 group-hover:opacity-100" />

            {/* Animated Green Fill */}
            <div className="absolute inset-x-0 bottom-0 h-0 bg-[var(--primary)]/75 transition-all duration-700 ease-out group-hover:h-full mix-blend-multiply" />

            {/* Outline */}
            <div className="pointer-events-none absolute inset-3 rounded-xl border border-white/0 transition-all duration-700 group-hover:border-white/60" />

            {/* Hover Content */}
            <div className="absolute inset-x-0 bottom-0 z-20 p-6 translate-y-4 transition-all duration-700 group-hover:translate-y-0 sm:p-8">

              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-[var(--primary)]">
                <FiGlobe className="h-6 w-6" />
              </div>

              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Study Abroad
              </p>

              <h3 className="max-w-xs text-2xl font-bold leading-tight text-white sm:text-3xl">
                Turn Your Dreams Into Global Opportunities
              </h3>

              <div className="mt-5 flex items-center gap-2 text-sm font-medium text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
                Explore opportunities
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>

            {/* Top Badge */}
            <div className="absolute left-5 top-5 z-20 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md opacity-0 -translate-y-3 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              Trusted Worldwide
            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE
          ====================================================== */}
          <div className="flex flex-col gap-6 lg:col-span-8">

            {/* =================================================
                TOP CONTENT CARD
            ================================================== */}
            <div className="group relative min-h-[270px] overflow-hidden rounded-2xl bg-white p-7 shadow-sm sm:p-9 lg:min-h-[285px]">

              {/* Animated Fill */}
              <div className="absolute inset-0 translate-y-full bg-[var(--primary)] transition-transform duration-700 ease-out group-hover:translate-y-0" />

              {/* Border */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl border border-[var(--primary)]/10 transition-all duration-500 group-hover:border-[var(--primary)]" />

              {/* Content */}
              <div className="relative z-10 max-w-[58%] sm:max-w-[60%]">

                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)] text-white transition-all duration-500 group-hover:bg-white group-hover:text-[var(--primary)] group-hover:scale-110">
                  <FiGlobe className="h-6 w-6" />
                </div>

                {/* Heading */}
                <h2 className="mb-3 text-xl font-bold text-[#174c3c] transition-colors duration-500 group-hover:text-white sm:text-2xl">
                  Get Our Best Offers Quickly
                </h2>

                {/* Text */}
                <p className="mb-5 max-w-md text-xs leading-6 text-gray-500 transition-colors duration-500 group-hover:text-white/80 sm:text-sm">
                  We help students find the right universities,
                  scholarships and destinations with personalized
                  guidance throughout their international education journey.
                </p>

                {/* Button */}
                <Link
                  href="/contact"
                  className="group/btn inline-flex items-center gap-2 rounded-full border border-[#d9dfd4] bg-white px-4 py-2 text-xs font-semibold text-[#174c3c] transition-all duration-300 hover:border-white hover:bg-transparent hover:text-white"
                >
                  Contact us
                  <FiArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>

              {/* =================================================
                  TRAVEL IMAGE ON RIGHT
              ================================================== */}
              <div className="absolute right-0 top-0 h-full w-[42%] overflow-hidden">

                <Image
                  src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=700&h=600&fit=crop"
                  alt="Travel and study abroad"
                  fill
                  sizes="(max-width: 768px) 42vw, 30vw"
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Image Fade */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent transition-opacity duration-500 group-hover:opacity-20" />

                {/* Green Hover Overlay */}
                <div className="absolute inset-0 bg-[var(--primary)]/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Image Outline */}
                <div className="absolute inset-3 rounded-xl border border-white/0 transition-all duration-500 group-hover:border-white/70" />
              </div>

              {/* Floating Passport / Globe Style Decoration */}
              <div className="absolute bottom-5 right-[25%] z-20 hidden h-14 w-14 rotate-6 items-center justify-center rounded-xl bg-white/90 text-[var(--primary)] shadow-lg backdrop-blur-sm transition-all duration-700 group-hover:-translate-y-3 group-hover:rotate-0 sm:flex">
                <FiGlobe className="h-7 w-7" />
              </div>
            </div>

            {/* =================================================
                STATS BAR
            ================================================== */}
            <div className="relative overflow-hidden rounded-2xl bg-[var(--primary)] px-5 py-7 shadow-lg sm:px-8 sm:py-8 lg:px-10">

              {/* Background Fill */}
              <div className="absolute inset-0 bg-[#174c3c] translate-y-full transition-transform duration-700 hover:translate-y-0" />

              <div className="relative z-10 grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-4">

                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group/stat relative text-center sm:text-left"
                  >

                    {/* Divider */}
                    {index !== 0 && (
                      <div className="absolute -left-2 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-white/20 sm:block" />
                    )}

                    <div className="font-serif text-3xl font-bold leading-none text-white transition-transform duration-300 group-hover/stat:scale-105 sm:text-4xl lg:text-5xl">
                      {animatedStats[index]}
                      {stat.suffix}
                    </div>

                    <div className="mt-2 text-[9px] font-semibold uppercase tracking-wide text-white/80 sm:text-[10px]">
                      {stat.label}
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>

        {/* =====================================================
            OPTIONAL BOTTOM CONTENT
        ====================================================== */}
        <div className="mt-10 grid grid-cols-1 items-center gap-6 md:grid-cols-2">

          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary)]">
              <span className="h-px w-8 bg-[var(--primary)]" />
              About Our Agency
            </div>

            <h2 className="font-serif text-3xl font-semibold leading-tight text-[var(--text-primary)] sm:text-4xl">
              Your Trusted Partner for{" "}
              <span className="text-[var(--primary)]">
                Study Abroad Success
              </span>
            </h2>
          </div>

          <div>
            <p className="text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
              With years of experience in international education consulting,
              our expert team provides personalized guidance for university
              selection, applications, scholarships, visas and everything
              you need to begin your journey abroad.
            </p>

            <Link
              href="/about"
              className="group mt-5 inline-flex items-center gap-2 rounded-full border-2 border-[var(--primary)] bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-all duration-500 hover:bg-transparent hover:text-[var(--primary)] hover:shadow-lg"
            >
              Learn More About Us
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}