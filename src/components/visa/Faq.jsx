"use client";

import { useState } from "react";
import Reveal from "@/components/shared/Reveal";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";

// Fallback / Default FAQs agar koi custom data pass na kare
const defaultFaqs = [
  {
    question: "What documents are required for a student visa application?",
    answer: "Commonly required documents include a valid passport, CNIC or B-Form..."
  },
  // ... Baqi defaults
];

export default function Faq({
  faqsData = defaultFaqs,
  badgeText = "Studyabroad Visa FAQs",
  title = "Answers Before",
  highlightTitle = "You Ask",
  description = "Have questions about visa requirements, documents, financial proof, interviews, or visa applications?",
  imageSrc = "/passport.jpg"
}) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      aria-labelledby="studyabroad-faq-heading"
    >
      {/* Background light */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-[var(--primary)]/5 blur-[100px]" />

      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* LEFT SIDE */}
          <Reveal direction="left" delay={0} className="lg:col-span-5">
            <div>
              {/* Label */}
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--primary)] shadow-[0_0_12px_var(--primary)]" />
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--primary)]">
                  <strong>{badgeText}</strong>
                </span>
              </div>

              {/* Heading */}
              <h2
                id="studyabroad-faq-heading"
                className="font-serif text-3xl leading-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl"
              >
                {title}
                <br />
                <span className="text-[var(--primary)]">
                  <strong>{highlightTitle}</strong>
                </span>
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-md text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                {description}
              </p>

              {/* Image */}
              <div className="group relative mt-8 hidden aspect-[4/3] overflow-hidden rounded-[24px] border border-[var(--primary)]/20 bg-[var(--primary)]/5 shadow-lg lg:block">
                <img
                  src={imageSrc}
                  alt="FAQ visual representation"
                  className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105 xl:h-[380px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[var(--primary)]/15 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-3 rounded-[18px] border border-white/0 transition-all duration-500 group-hover:border-white/30" />

                {/* Floating Contact Badge */}
                <div className="absolute bottom-5 left-5 overflow-hidden rounded-xl border border-white/20 bg-white/90 shadow-xl backdrop-blur-md transition-all duration-500 group-hover:-translate-y-1">
                  <Link href="/contact" className="flex items-center gap-3 px-4 py-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-white transition-transform duration-300 group-hover:scale-105">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[var(--text-primary)]">Need more help?</p>
                      <p className="text-[10px] text-[var(--text-secondary)]">
                        Talk to our <strong>study abroad experts</strong>
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT SIDE */}
          <Reveal direction="right" delay={150} className="lg:col-span-7">
            <div className="space-y-3 sm:space-y-4">
              {faqsData.map((faq, index) => {
                const isOpen = index === openIndex;

                return (
                  <div
                    key={faq.question}
                    className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ${
                      isOpen
                        ? "border-[var(--primary)]/40 bg-[var(--primary)]/[0.045] shadow-[0_12px_35px_rgba(0,0,0,0.06)]"
                        : "border-[var(--primary)]/15 bg-white hover:border-[var(--primary)]/35 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
                    }`}
                  >
                    <div
                      className={`absolute bottom-0 left-0 top-0 w-1 origin-bottom bg-[var(--primary)] transition-transform duration-500 ${
                        isOpen ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
                      }`}
                    />

                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      className="flex w-full items-center justify-between gap-5 p-5 text-left sm:p-6"
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className={`hidden shrink-0 font-serif text-sm transition-colors duration-300 sm:block ${
                            isOpen ? "text-[var(--primary)]" : "text-[var(--text-secondary)]/40"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span
                          className={`text-sm font-semibold leading-relaxed transition-colors duration-300 sm:text-base ${
                            isOpen ? "text-[var(--primary)]" : "text-[var(--text-primary)]"
                          }`}
                        >
                          {faq.question}
                        </span>
                      </div>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
                          isOpen
                            ? "rotate-180 bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/25"
                            : "border border-[var(--primary)]/25 text-[var(--primary)] group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)]/5"
                        }`}
                      >
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>

                    <div
                      id={`faq-answer-${index}`}
                      className="grid transition-all duration-500 ease-in-out"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-[var(--primary)]/10 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                          <p className="pl-0 text-xs leading-7 text-[var(--text-secondary)] sm:pl-10 sm:text-sm">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}