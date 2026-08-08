"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import homeImages from "@/config/homeImages";

const Hero = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl mx-4 lg:mx-8 bg-[var(--secondary)] px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
      {/* HERO IMAGE — REPLACE THIS IMAGE LATER */}
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src={homeImages.hero}
          alt="Students studying abroad"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)]/95 via-[var(--secondary)]/80 to-[var(--secondary)]/60" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:justify-between">
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
            Expert guidance for international education, visas, scholarships, and destinations. Your dream study abroad experience begins with RouteX.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 lg:justify-start">
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

        {/* Right image - student illustration */}
        <div className="relative h-[380px] w-[320px] shrink-0 sm:h-[440px] sm:w-[380px] lg:h-[480px] lg:w-[420px]">
          {/* green circle backdrop */}
          <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-[var(--primary)]/30 sm:h-[340px] sm:w-[340px] lg:h-[380px] lg:w-[380px]" />

          {/* student image */}
          <div className="relative h-full w-full">
            <Image
              src="https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/banner-man-img.png"
              alt="Student ready for study abroad journey"
              fill
              priority
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;