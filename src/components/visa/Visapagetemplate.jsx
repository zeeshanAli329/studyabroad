"use client";

import { useState } from "react";
import Link from "next/link";
import Faq from "./Faq";
import {
  FaArrowRight,
  FaChevronDown,
  FaCheckCircle,
  FaUserTie,
  FaGlobeAmericas,
  FaClipboardCheck,
  FaRoute,
  FaUniversity,
  FaMoneyBillWave,
  FaGraduationCap,
  FaBriefcase,
  FaLayerGroup,
  FaLanguage,
  FaExchangeAlt,
  FaClock,
  FaFileAlt,
  FaStamp,
  FaPenFancy,
  FaShieldAlt,
  FaBookReader,
  FaChalkboardTeacher,
  FaCommentDots,
  FaChartLine,
  FaUsers,
  FaFileInvoiceDollar,
  FaHome,
  FaChild,
  FaComments,
  FaQuestionCircle,
  FaTheaterMasks,
  FaClipboardList,
  FaCalendarAlt,
  FaBuilding,
  FaGlobe,
  FaFlag,
  FaMoneyCheckAlt,
  FaNotesMedical,
  FaHourglassHalf,
  FaMapMarkedAlt,
  FaListOl,
  FaUserCheck,
  FaSitemap,
} from "react-icons/fa";
// import { visaLinks } from "@/config/visaLinks";
import { visaPagesData } from "@/config/Visapagesdata";

const ICONS = {
  FaUserTie,
  FaGlobeAmericas,
  FaClipboardCheck,
  FaRoute,
  FaUniversity,
  FaMoneyBillWave,
  FaGraduationCap,
  FaBriefcase,
  FaLayerGroup,
  FaLanguage,
  FaExchangeAlt,
  FaClock,
  FaFileAlt,
  FaStamp,
  FaPenFancy,
  FaShieldAlt,
  FaBookReader,
  FaChalkboardTeacher,
  FaCommentDots,
  FaChartLine,
  FaUsers,
  FaFileInvoiceDollar,
  FaHome,
  FaChild,
  FaComments,
  FaQuestionCircle,
  FaTheaterMasks,
  FaClipboardList,
  FaCalendarAlt,
  FaBuilding,
  FaGlobe,
  FaFlag,
  FaMoneyCheckAlt,
  FaNotesMedical,
  FaHourglassHalf,
  FaMapMarkedAlt,
  FaListOl,
  FaUserCheck,
  FaSitemap,
};

const EXPLORE_MORE_LINKS = [
  {
    title: "Study Destinations",
    desc: "Compare countries by cost, visa strength, and student life.",
    href: "/countries",
    icon: "FaGlobeAmericas",
  },
  {
    title: "Universities",
    desc: "Browse university profiles, programs, and admission criteria.",
    href: "/universities",
    icon: "FaUniversity",
  },
  {
    title: "Scholarships",
    desc: "Find funding opportunities matched to your profile.",
    href: "/scholarships",
    icon: "FaAward",
  },
  {
    title: "Free Education",
    desc: "Explore no-cost and low-cost study pathways by country.",
    href: "/free-education",
    icon: "FaGraduationCap",
  },
  {
    title: "Study Abroad Blog",
    desc: "Guides, tips, and updates from our consultants.",
    href: "/blog",
    icon: "FaBlog",
  },
];

const DEFAULT_PROCESS = [
  {
    step: "01",
    title: "Consult",
    desc: "We assess your profile and explain exactly how this service fits your study abroad plan.",
  },
  {
    step: "02",
    title: "Prepare",
    desc: "Our team gathers and reviews every document or requirement needed for this step.",
  },
  {
    step: "03",
    title: "Apply",
    desc: "We guide submission with attention to the detail that visa and university offices check first.",
  },
  {
    step: "04",
    title: "Succeed",
    desc: "You move to the next stage of your journey with confidence and full documentation on file.",
  },
];

const FaqItem = ({ q, a, isOpen, onToggle }) => (
  <div className="border-b border-[var(--border)] last:border-none">
    <button
      onClick={onToggle}
      aria-expanded={isOpen}
      className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
    >
      <span className="font-serif text-[15px] sm:text-[16px] font-bold text-[var(--primary-dark)]">
        {q}
      </span>
      <FaChevronDown
        className={`shrink-0 text-[var(--primary)] transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-[300px] pb-5" : "max-h-0"
      }`}
    >
      <p className="text-[14px] leading-relaxed text-[var(--text-secondary)]">
        {a}
      </p>
    </div>
  </div>
);

const VisaPageTemplate = ({ data }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const process = data.process || DEFAULT_PROCESS;

  // FIX: Make sure visaPagesData is an array before using .filter()
  const visaPages = Array.isArray(visaPagesData)
    ? visaPagesData
    : Object.values(visaPagesData || {}).filter(
        (item) => item && typeof item === "object" && item.link,
      );

  const related = visaPages.filter(
    (item) => !item.link.endsWith(`/${data.slug}`),
  );

  return (
    <main className="bg-[var(--background)] relative -top-4">
      {/* ============== HERO ============== */}{" "}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--primary-dark)] via-[var(--primary-dark)] to-[var(--primary)] pt-[70px] pb-20 sm:pt-[80px] sm:pb-28 ">
        {/* decorative glow */}{" "}
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[var(--primary-light)]/20 blur-3xl" />{" "}
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[var(--accent)]/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            {/* breadcrumb */}
            <div className="mb-5 flex flex-wrap items-center gap-2 text-[12px] font-serif uppercase tracking-wide text-white/60">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/visa/student"
                className="transition hover:text-white"
              >
                Student Visa
              </Link>
              <span>/</span>
              <span className="text-white">{data.title}</span>
            </div>

            {/* badge */}
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[12px] font-serif font-bold uppercase tracking-wide text-[var(--accent)]">
              ✦ {data.badge}
            </span>

            <h1 className="mb-5 font-serif text-[32px] sm:text-[42px] lg:text-[48px] font-bold leading-tight text-white">
              {data.title}
            </h1>

            <p className="mb-8 max-w-[540px] text-[15px] sm:text-[16px] leading-relaxed text-white/75">
              {data.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[var(--btn)]   px-6 py-3 text-[14px] font-serif font-bold uppercase text-white transition-colors duration-300"
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-[var(--primary)] transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <span className="relative z-10">Book Consultation</span>
                <FaArrowRight className="relative z-10 text-[12px] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
              </Link>

              <Link
                href="/visa/student"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-[14px] font-serif font-bold uppercase text-white transition hover:bg-white/10"
              >
                All Student Visa Services
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[440px] lg:max-w-none">
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <img
                src={data.heroImage}
                alt={data.title}
                className="h-[260px] w-full object-cover sm:h-[340px] lg:h-[380px]"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ============== INTRO ============== */}
      <section className="mx-auto max-w-[900px] px-6 py-16 text-center sm:py-20 lg:px-8">
        <h2 className="mb-4 font-serif text-[24px] sm:text-[30px] font-bold text-[var(--primary-dark)]">
          {data.intro.heading}
        </h2>
        <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
          {data.intro.paragraph}
        </p>
      </section>
      {/* ============== SUB-SERVICES ============== */}
      {data.subServices?.length > 0 && (
        <section className="mx-auto max-w-[1100px] px-6 pb-16 sm:pb-20 lg:px-8">
          <div className="mb-8 text-center">
            <span className="mb-3 inline-block font-serif text-[13px] font-bold uppercase tracking-wide text-[var(--primary)]">
              What's Included
            </span>
            <h2 className="font-serif text-[22px] sm:text-[28px] font-bold text-[var(--primary-dark)]">
              {data.title} Services We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.subServices.map((service) => (
              <div
                key={service}
                className="group flex items-center gap-3 rounded-xl border border-[var(--border)] bg-white px-5 py-4 transition-all duration-200 hover:border-[var(--primary)] hover:shadow-md"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)] transition-colors duration-200 group-hover:bg-[var(--primary)] group-hover:text-white">
                  <FaCheckCircle className="text-[13px]" />
                </span>
                <span className="text-[14px] font-serif font-semibold text-[var(--text-primary)]">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
      {/* ============== FEATURES ============== */}
      <section className="bg-[var(--background-light)] py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.features.map((feature) => {
              const Icon = ICONS[feature.icon] || FaCheckCircle;
              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-[var(--border)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                    <Icon className="text-[20px]" />
                  </div>
                  <h3 className="mb-2 font-serif text-[15px] font-bold uppercase text-[var(--primary-dark)]">
                    {feature.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-[var(--text-secondary)]">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* ============== CHECKLIST ============== */}
      <section className="mx-auto max-w-[1320px] px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <span className="mb-3 inline-block font-serif text-[13px] font-bold uppercase tracking-wide text-[var(--primary)]">
              What You'll Need
            </span>
            <h2 className="mb-6 font-serif text-[24px] sm:text-[28px] font-bold text-[var(--primary-dark)]">
              Documents &amp; Requirements Checklist
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {data.checklist.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-[var(--background-light)] p-4"
                >
                  <FaCheckCircle className="mt-0.5 shrink-0 text-[var(--success)]" />
                  <span className="text-[13px] leading-relaxed text-[var(--text-primary)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* side CTA card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--primary-dark)] to-[var(--primary)] p-8 text-white">
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[var(--accent)]/20 blur-3xl" />
            <h3 className="relative mb-3 font-serif text-[20px] font-bold">
              Not sure if you have everything?
            </h3>
            <p className="relative mb-6 text-[13px] leading-relaxed text-white/75">
              Send us your documents and we'll tell you exactly what's missing
              before you apply — free of charge.
            </p>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[var(--btn)] px-6 py-3 text-[13px] font-serif font-bold uppercase text-white transition-colors duration-300"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-[var(--primary)] transition-transform duration-500 ease-out group-hover:scale-x-100" />
              <span className="relative z-10">Get a Free Review</span>
              <FaArrowRight className="relative z-10 text-[11px] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
            </Link>
          </div>
        </div>
      </section>
      {/* ============== PROCESS ============== */}
      <section className="bg-[var(--background-light)] py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6 text-center lg:px-8">
          <span className="mb-3 inline-block font-serif text-[13px] font-bold uppercase tracking-wide text-[var(--primary)]">
            Our Process
          </span>
          <h2 className="mb-12 font-serif text-[24px] sm:text-[30px] font-bold text-[var(--primary-dark)]">
            How {data.title} Works
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.step}
                className="relative rounded-2xl bg-white p-6 text-left shadow-sm"
              >
                <span className="mb-3 block font-serif text-[32px] font-bold text-[var(--primary)]/15">
                  {step.step}
                </span>
                <h3 className="mb-2 font-serif text-[15px] font-bold uppercase text-[var(--primary-dark)]">
                  {step.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-[var(--text-secondary)]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ============== FAQ ============== */}
      <Faq
        faqsData={data.faqs}
        badgeText={data.faqBadgeText || `${data.title} FAQs`}
        title={data.faqTitle || "Got Questions About"}
        highlightTitle={data.faqHighlightTitle || `${data.title}?`}
        description={
          data.faqDescription || `Find answers about ${data.title}...`
        }
        imageSrc={data.faqImage || undefined}
      />
      {/* ============== RELATED SERVICES ============== */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block font-serif text-[13px] font-bold uppercase tracking-wide text-[var(--primary)]">
              Keep Exploring
            </span>
            <h2 className="font-serif text-[22px] sm:text-[28px] font-bold text-[var(--primary-dark)]">
              Explore More From Study Abroad
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EXPLORE_MORE_LINKS.map((item) => {
              const Icon = ICONS[item.icon] || FaCheckCircle;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-xl"
                >
                  {/* fill sweep on hover, same language as the buttons */}
                  <span className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-br from-[var(--primary-dark)] to-[var(--primary)] transition-transform duration-500 ease-out group-hover:scale-x-100" />

                  <div className="relative">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] transition-colors duration-300 group-hover:bg-white/15 group-hover:text-white">
                      <Icon className="text-[20px]" />
                    </div>
                    <h3 className="mb-2 flex items-center gap-2 font-serif text-[15px] font-bold uppercase text-[var(--primary-dark)] transition-colors duration-300 group-hover:text-white">
                      {item.title}
                      <FaArrowRight className="text-[11px] opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                    </h3>
                    <p className="text-[13px] leading-relaxed text-[var(--text-secondary)] transition-colors duration-300 group-hover:text-white/80">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default VisaPageTemplate;
