"use client";

import Reveal from "@/components/shared/Reveal";

const logos = [
  "Airtasker",
  "Segment",
  "splunk",
  "HubSpot",
  "asana",
  "Canva",
  "Microsoft",
  "Google",
];

export default function BrandLogos() {
  return (
    <section className="relative overflow-hidden border-y border-gray-100 bg-white py-8 sm:py-10">
      {/* Soft background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-20" />

      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <Reveal direction="up" delay={0}>
          <div className="mb-6 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--text-secondary)] sm:text-xs">
              <strong>Studyabroad</strong> Trusted By Partners Worldwide
            </span>
          </div>
        </Reveal>

        {/* Moving Track */}
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-brand-marquee">

            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="group mx-5 flex h-14 min-w-[150px] items-center justify-center sm:mx-8 sm:min-w-[180px]"
              >
                <div className="relative flex items-center justify-center px-5 py-3">

                  {/* Outline */}
                  <div className="absolute inset-0 rounded-xl border border-transparent transition-all duration-500 group-hover:border-[var(--primary)]/30" />

                  {/* Fill */}
                  <div className="absolute inset-0 scale-90 rounded-xl bg-[var(--primary)]/0 transition-all duration-500 group-hover:scale-100 group-hover:bg-[var(--primary)]/5" />

                  <span className="relative z-10 text-lg font-bold tracking-tight text-gray-400 grayscale transition-all duration-500 group-hover:scale-105 group-hover:text-[var(--primary)] group-hover:grayscale-0 sm:text-xl">
                    <strong>{logo}</strong>
                  </span>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes brandMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-brand-marquee {
          animation: brandMarquee 28s linear infinite;
        }

        .animate-brand-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}