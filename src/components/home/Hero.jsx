"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import homeImages from "@/config/homeImages";

const Hero = () => {
  return (
    <section className="relative mx-0 overflow-hidden rounded-3xl bg-[var(--secondary)] px-4 py-8 sm:px-6 sm:py-10 lg:mx-8 lg:px-16 lg:py-12">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={homeImages.hero}
          alt="Students studying abroad"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)]/95 via-[var(--secondary)]/80 to-[var(--secondary)]/60" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-8 sm:gap-10 lg:flex-row lg:justify-between lg:gap-12">
        {/* Left content */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="font-serif text-4xl leading-[1.15] text-white sm:text-5xl lg:text-[3.4rem]">
            Your Journey
            <br />
            Abroad Starts
            <br />
            Here
          </h1>

          <p className="mt-6 text-lg text-white/90 sm:text-xl">
            Expert guidance for international education, visas, scholarships,
            and destinations. Your dream study abroad experience begins with 
            <strong className="pl-1">StudyAbroad</strong>.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <Link
              href="/destinations"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--primary-dark)] hover:gap-3"
            >
              Explore Destinations
              <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/scholarships"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[var(--secondary)]"
            >
              Find Scholarships
            </Link>
          </div>
        </div>

        {/* Right student image */}
        <div className="relative h-[360px] w-[300px] shrink-0 sm:h-[420px] sm:w-[360px] md:h-[470px] md:w-[400px] lg:h-[500px] lg:w-[420px]">
          {/* Dark green circle */}
          <div className="absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full bg-[var(--primary)]/70 sm:h-[320px] sm:w-[320px] md:h-[350px] md:w-[350px] lg:h-[380px] lg:w-[380px]" />

          {/* Student */}
          <div className="absolute inset-0 flex items-end justify-center overflow-visible">
            <img
              src="/images/banner-man-img.png"
              alt="Student ready for study abroad journey"
              className="h-full w-full object-contain object-bottom animate-float"
            />
          </div>
        </div>
      </div>

      {/* Floating animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-18px);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default Hero;