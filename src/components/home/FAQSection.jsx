"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/shared/Reveal";
import { Plus, Minus, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What documents do I need to apply for a student visa?",
    answer:
      "You'll typically need a valid passport, proof of admission from your university or institution, financial statements, academic transcripts, and passport-sized photos. Studyabroad consultants review your destination's specific student visa requirements and help you prepare everything before submission.",
  },
  {
    question: "How long does the student visa approval process take?",
    answer:
      "Processing times vary by country and student visa type, usually ranging from 2 to 8 weeks. Studyabroad tracks your application status closely and keeps you updated at every stage of the international student visa process.",
  },
  {
    question: "Can Studyabroad help me choose the right country and university?",
    answer:
      "Yes. Our study abroad consultants help you compare countries, universities, courses, tuition fees, and admission requirements based on your budget, academic background, and career goals. We then help you choose the destinations and universities that best fit your requirements.",
  },
  {
    question: "Does Studyabroad offer support after I arrive at my destination?",
    answer:
      "We provide pre-departure guidance covering accommodation, local transport, university preparation, and cultural orientation. Our Studyabroad consultants also remain reachable after you arrive in your destination country if you need additional guidance.",
  },
  {
    question: "What happens if my student visa application gets rejected?",
    answer:
      "We review the visa rejection reasons with you, identify documentation or application issues, and guide you through reapplication or appeal options where possible. Studyabroad helps students understand the next steps before submitting another application.",
  },
];

export default function FAQSection() {
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
                  <strong>Studyabroad FAQs</strong>
                </span>
              </div>

              {/* Heading */}
              <h2
                id="studyabroad-faq-heading"
                className="font-serif text-3xl leading-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl"
              >
                Answers Before
                <br />
                <span className="text-[var(--primary)]">
                  <strong>You Ask</strong>
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                Have questions about{" "}
                <strong>student visas, universities, applications, scholarships</strong>,
                or studying abroad? Find answers to the questions students ask
                most often about <strong>international education</strong> with
                Studyabroad.
              </p>

              {/* Image */}
              <div
                className="
                  group relative mt-8 hidden aspect-[4/3]
                  overflow-hidden rounded-[24px]
                  border border-[var(--primary)]/20
                  bg-[var(--primary)]/5
                  shadow-lg
                  lg:block
                "
              >
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop"
                  alt="Studyabroad consultant helping a student with international education and visa questions"
                  className="w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[320px] xl:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image dark/light overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Hover fill effect */}
                <div
                  className="
                    absolute inset-0
                    bg-[var(--primary)]/15
                    opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Outline effect */}
                <div className="absolute inset-3 rounded-[18px] border border-white/0 transition-all duration-500 group-hover:border-white/30" />

                {/* Floating badge */}
                <div
                  className="
                    absolute bottom-5 left-5
                    flex items-center gap-3
                    rounded-xl border border-white/20
                    bg-white/90 px-4 py-3
                    shadow-xl backdrop-blur-md
                    transition-all duration-500
                    group-hover:-translate-y-1
                  "
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary)] text-white">
                    <ArrowRight className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-[var(--text-primary)]">
                      Need more help?
                    </p>
                    <p className="text-[10px] text-[var(--text-secondary)]">
                      Talk to our <strong>study abroad experts</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT SIDE */}
          <Reveal direction="right" delay={150} className="lg:col-span-7">
            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = index === openIndex;

                return (
                  <div
                    key={faq.question}
                    className={`
                      group relative overflow-hidden rounded-2xl
                      border
                      transition-all duration-500
                      ${
                        isOpen
                          ? "border-[var(--primary)]/40 bg-[var(--primary)]/[0.045] shadow-[0_12px_35px_rgba(0,0,0,0.06)]"
                          : "border-[var(--primary)]/15 bg-white hover:border-[var(--primary)]/35 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
                      }
                    `}
                  >
                    {/* Left fill/outline indicator */}
                    <div
                      className={`
                        absolute bottom-0 left-0 top-0 w-1
                        origin-bottom
                        bg-[var(--primary)]
                        transition-transform duration-500
                        ${
                          isOpen
                            ? "scale-y-100"
                            : "scale-y-0 group-hover:scale-y-100"
                        }
                      `}
                    />

                    <button
                      onClick={() => toggle(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      className="flex w-full items-center justify-between gap-5 p-5 text-left sm:p-6"
                    >
                      <div className="flex items-start gap-4">
                        {/* Number */}
                        <span
                          className={`
                            hidden shrink-0 font-serif text-sm
                            transition-colors duration-300 sm:block
                            ${
                              isOpen
                                ? "text-[var(--primary)]"
                                : "text-[var(--text-secondary)]/40"
                            }
                          `}
                        >
                          0{index + 1}
                        </span>

                        <span
                          className={`
                            font-semibold leading-relaxed
                            text-sm sm:text-base
                            transition-colors duration-300
                            ${
                              isOpen
                                ? "text-[var(--primary)]"
                                : "text-[var(--text-primary)]"
                            }
                          `}
                        >
                          <strong>{faq.question}</strong>
                        </span>
                      </div>

                      {/* Plus / Minus */}
                      <span
                        className={`
                          flex h-9 w-9 shrink-0 items-center justify-center
                          rounded-full
                          transition-all duration-500
                          ${
                            isOpen
                              ? "rotate-180 bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/25"
                              : "border border-[var(--primary)]/25 text-[var(--primary)] group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)]/5"
                          }
                        `}
                      >
                        {isOpen ? (
                          <Minus className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </span>
                    </button>

                    {/* Answer */}
                    <div
                      id={`faq-answer-${index}`}
                      className="grid transition-all duration-500 ease-in-out"
                      style={{
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                      }}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-[var(--primary)]/10 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                          <p className="pl-0 text-xs leading-7 text-[var(--text-secondary)] sm:pl-10 sm:text-sm">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Hover light */}
                    <div
                      className="
                        pointer-events-none absolute inset-0
                        rounded-2xl
                        bg-gradient-to-r
                        from-[var(--primary)]/[0.04]
                        via-transparent
                        to-transparent
                        opacity-0
                        transition-opacity duration-500
                        group-hover:opacity-100
                      "
                    />
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