import React from "react";
import { Ticket, Check, Phone, ArrowRight, Move } from "lucide-react";
import Link from "next/link";

export default function Hero2AboutUs() {
  return (
    <section className="w-full bg-white py-14 px-5 sm:px-8 lg:px-16">
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .rotate-badge {
          animation: spin-slow 14s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-12 items-center lg:items-start">

        {/* =====================================================
            LEFT COLUMN: MAIN PHOTO + ROTATING BADGE
            Mobile: horizontal compact layout
            Desktop: original layout
        ====================================================== */}
        <div className="flex flex-row lg:flex-col items-center gap-4 sm:gap-6 lg:gap-8 shrink-0">

          <div className="rounded-[1.8rem] sm:rounded-[2rem] border-2 border-dashed border-lime-500 p-2">
            <img
              src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=520&fit=crop"
              alt="Traveler with passport and suitcase"
              className="
                w-[155px]
                h-[195px]
                sm:w-[220px]
                sm:h-[300px]
                object-cover
                rounded-[1.4rem]
                sm:rounded-[1.6rem]
              "
            />
          </div>

          {/* Rotating circular badge */}
          <div className="relative w-[90px] h-[90px] sm:w-[150px] sm:h-[150px] shrink-0">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full rotate-badge"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                />
              </defs>

              <text
                fontSize="11.5"
                letterSpacing="2"
                fill="#94a3b8"
                fontWeight="500"
              >
                <textPath href="#circlePath" startOffset="0%">
                  STUDYABROAD • COMPANY NAME • STUDYABROAD • COMPANY NAME •
                </textPath>
              </text>
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-lime-400/60 flex items-center justify-center">
                <Move
                  className="w-4 h-4 sm:w-5 sm:h-5 text-lime-600"
                  strokeWidth={1.75}
                />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            MIDDLE COLUMN: STAT + SECOND PHOTO
            Mobile: horizontal compact layout
            Desktop: original vertical layout
        ====================================================== */}
        <div className="flex flex-row lg:flex-col gap-4 sm:gap-6 shrink-0 items-center lg:items-start">

          <div className="bg-[#8CC63F] rounded-2xl px-5 py-5 sm:px-6 sm:py-6 w-[155px] sm:w-[220px] text-white">
            <div className="text-3xl sm:text-4xl font-bold leading-none">
              25
            </div>

            <div className="text-xs sm:text-sm font-semibold mt-2 leading-snug">
              Years Of
              <br />
              Experience
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=420&h=560&fit=crop"
            alt="Travel agent with documents and globe"
            className="
              w-[155px]
              h-[195px]
              sm:w-[220px]
              sm:h-[300px]
              object-cover
              rounded-2xl
            "
          />
        </div>

        {/* =====================================================
            RIGHT COLUMN: CONTENT
            Desktop remains unchanged
        ====================================================== */}
        <div className="flex-1 w-full max-w-xl">

          <div className="flex items-center gap-2 text-lime-600 font-semibold text-sm tracking-wide mb-4">
            <Ticket className="w-4 h-4" strokeWidth={2} />
            <span>WHY CHOOSE US</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-950 leading-tight mb-5">
            Where Wanderlust Meets
            <br />
            Dream Destinations
          </h2>

          <div className="text-gray-500 text-sm sm:text-base leading-relaxed space-y-1 mb-8">
            <p>
              We believe no talented Pakistani student should miss out on a
              scholarship or free education opportunity simply due to a lack of
              information or guidance. That's why we've supported over 100
              students on their journey to study abroad, with accurate,
              up-to-date advice on universities, funding, and visas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

            <div className="border border-gray-200 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#8CC63F] flex items-center justify-center shrink-0">
                  <Ticket
                    className="w-4 h-4 text-white"
                    strokeWidth={2}
                  />
                </div>

                <h3 className="font-bold text-emerald-950 text-base">
                  Passport Plus
                </h3>
              </div>

              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check
                    className="w-4 h-4 text-lime-600 shrink-0"
                    strokeWidth={2.5}
                  />
                  Beyond Border Immigration
                </li>

                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check
                    className="w-4 h-4 text-lime-600 shrink-0"
                    strokeWidth={2.5}
                  />
                  Worldwide Visa Assistance
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#8CC63F] flex items-center justify-center shrink-0">
                  <Ticket
                    className="w-4 h-4 text-white"
                    strokeWidth={2}
                  />
                </div>

                <h3 className="font-bold text-emerald-950 text-base">
                  Global Entry
                </h3>
              </div>

              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check
                    className="w-4 h-4 text-lime-600 shrink-0"
                    strokeWidth={2.5}
                  />
                  GlobeTrot Visa Services
                </li>

                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check
                    className="w-4 h-4 text-lime-600 shrink-0"
                    strokeWidth={2.5}
                  />
                  Infinity Visa Solutions
                </li>
              </ul>
            </div>

          </div>

          <div className="flex flex-wrap items-center gap-6">

            <Link
              href={"/contact"}
              className="flex items-center gap-2 border border-lime-500 text-emerald-950 font-semibold text-sm px-6 py-3 rounded-full hover:bg-lime-50 transition-colors"
            >
              CONTACT US

              <ArrowRight
                className="w-4 h-4"
                strokeWidth={2}
              />
            </Link>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#8CC63F] flex items-center justify-center shrink-0">
                <Phone
                  className="w-5 h-5 text-white"
                  strokeWidth={2}
                />
              </div>

              <div>
                <div className="text-xs text-gray-500">
                  Need help?
                </div>

                <div className="text-sm font-bold text-emerald-950">
                  (808) 555-0111
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}