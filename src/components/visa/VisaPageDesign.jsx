"use client";

import Link from "next/link";
import {
  ChevronRight,
  CheckCircle,
  FileText,
  Clock,
} from "lucide-react";

import Faq from "@/components/visa/Faq";
import VisaSupportCard from "@/components/visa/VisaSupportCard";

export default function VisaPageDesign({
  hero,
  overview,
  eligibility,
  documents,
  process,
  faq,
}) {
  return (
    <main className="w-full overflow-hidden bg-white font-sans text-[var(--text-primary)]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative px-4 pt-6 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[28px] bg-emerald-950">

          {/* Background Image */}
          {hero?.image && (
            <img
              src={hero.image}
              alt={hero.imageAlt || hero.title}
              className="absolute inset-0 h-full w-full object-cover opacity-30"
            />
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-950/95 to-emerald-900/75" />

          {/* Decorative Circles */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-lime-300/10" />
          <div className="absolute -bottom-32 -right-10 h-96 w-96 rounded-full border border-lime-300/10" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:py-32">
            <div className="max-w-3xl">

              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-lime-300 backdrop-blur-sm">
                {hero?.badgeIcon && (
                  <hero.badgeIcon className="h-4 w-4" />
                )}

                {!hero?.badgeIcon && (
                  <span className="h-2 w-2 rounded-full bg-lime-300" />
                )}

                {hero?.badge}
              </div>

              {/* Title */}
              <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {hero?.title}

                {hero?.highlight && (
                  <span className="block text-lime-300">
                    {hero.highlight}
                  </span>
                )}
              </h1>

              {/* Description */}
              {hero?.description && (
                <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
                  {hero.description}
                </p>
              )}

              {/* Breadcrumb */}
              <div className="mt-8 flex flex-wrap items-center gap-2 text-sm text-white/60">
                <Link
                  href="/"
                  className="transition hover:text-white"
                >
                  Studyabroad
                </Link>

                <ChevronRight className="h-4 w-4" />

                <span className="text-lime-300">
                  {hero?.breadcrumb || hero?.badge}
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          OVERVIEW / SUPPORT CARD
      ========================================================= */}
      {overview && (
        <VisaSupportCard
          badgeText={overview.badgeText}
          badgeIcon={overview.badgeIcon}
          title={overview.title}
          highlightTitle={overview.highlightTitle}
          description={overview.description}
          features={overview.features}
          footerMainStat={overview.footerMainStat}
          footerSubStat={overview.footerSubStat}
          footerNote={overview.footerNote}
          imageSrc={overview.imageSrc}
          imageAlt={overview.imageAlt}
          cardSubTitle={overview.cardSubTitle}
          cardMainTitle={overview.cardMainTitle}
          badgeStatNumber={overview.badgeStatNumber}
          badgeStatLabel={overview.badgeStatLabel}
        />
      )}


      {/* =========================================================
          ELIGIBILITY
      ========================================================= */}
      {eligibility && (
        <section className="relative bg-[#f7faf8] py-20 sm:py-24">

          <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-lime-200/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 sm:px-10">

            {/* Heading */}
            <div className="mx-auto mb-14 max-w-3xl text-center">

              {eligibility.badge !== false && (
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-emerald-800 shadow-sm">
                  {eligibility.badgeIcon ? (
                    <eligibility.badgeIcon className="h-4 w-4 text-lime-600" />
                  ) : (
                    <CheckCircle className="h-4 w-4 text-lime-600" />
                  )}

                  {eligibility.badge || "Eligibility"}
                </div>
              )}

              <h2 className="mt-5 font-serif text-3xl font-semibold text-emerald-950 sm:text-4xl lg:text-5xl">
                {eligibility.title}
              </h2>

              {eligibility.description && (
                <p className="mx-auto mt-5 max-w-2xl text-gray-600">
                  {eligibility.description}
                </p>
              )}

            </div>


            {/* Requirements */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {eligibility.requirements?.map((requirement, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_8px_30px_rgba(15,58,45,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-lime-200 hover:shadow-[0_16px_40px_rgba(15,58,45,0.1)]"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-950 text-lime-300">
                      <CheckCircle className="h-5 w-5" />
                    </div>

                    <span className="font-serif text-3xl font-bold text-emerald-900/10">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                  <p className="mt-6 text-sm leading-6 text-gray-600">
                    {requirement}
                  </p>

                  <div className="mt-5 h-1 w-8 rounded-full bg-lime-400 transition-all duration-300 group-hover:w-14" />

                </div>
              ))}

            </div>

          </div>
        </section>
      )}


      {/* =========================================================
          DOCUMENTS
      ========================================================= */}
      {documents && (
        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24">

          {/* Heading */}
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <div className="max-w-2xl">

              <div className="mb-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-lime-700">
                <FileText className="h-4 w-4" />

                {documents.badge || "Required Documents"}
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-emerald-950 sm:text-4xl">
                {documents.title}
              </h2>

            </div>

            {documents.description && (
              <p className="max-w-md text-sm leading-6 text-gray-600">
                {documents.description}
              </p>
            )}

          </div>


          {/* Documents */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {documents.items?.map((doc, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_6px_25px_rgba(15,58,45,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-900/10 hover:shadow-[0_14px_35px_rgba(15,58,45,0.08)]"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800 transition-colors group-hover:bg-emerald-950 group-hover:text-lime-300">
                  <FileText className="h-5 w-5" />
                </div>

                <div>

                  <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
                    Document {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm font-medium leading-5 text-emerald-950">
                    {doc}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </section>
      )}


      {/* =========================================================
          APPLICATION PROCESS
      ========================================================= */}
      {process && (
        <section className="mx-4 overflow-hidden rounded-[28px] bg-emerald-950 py-20 sm:mx-6 sm:py-24 lg:mx-8">

          <div className="mx-auto max-w-7xl px-6 sm:px-10">

            {/* Heading */}
            <div className="mx-auto mb-16 max-w-3xl text-center">

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-lime-300">
                {process.badgeIcon ? (
                  <process.badgeIcon className="h-4 w-4" />
                ) : (
                  <Clock className="h-4 w-4" />
                )}

                {process.badge || "Application Process"}
              </div>

              <h2 className="mt-5 font-serif text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                {process.title}
              </h2>

              {process.description && (
                <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
                  {process.description}
                </p>
              )}

            </div>


            {/* Steps */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {process.steps?.map((step, index) => (
                <div
                  key={step.step || index}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.045] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime-300/30 hover:bg-white/[0.08]"
                >

                  <span className="font-serif text-4xl font-bold text-lime-300/30 transition-colors group-hover:text-lime-300/60">
                    {step.step || String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-5 font-serif text-lg font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {step.desc}
                  </p>

                </div>
              ))}

            </div>

          </div>
        </section>
      )}


      {/* =========================================================
          FAQ
      ========================================================= */}
      {faq && (
        <Faq
          faqsData={faq.faqsData}
          badgeText={faq.badgeText}
          title={faq.title}
          highlightTitle={faq.highlightTitle}
          description={faq.description}
          imageSrc={faq.imageSrc}
        />
      )}

    </main>
  );
}