"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ShieldCheck,
  FileText,
  Clock,
  CheckCircle,
  Globe,
  MessageCircle,
  DollarSign,
  XCircle,
  PlaneTakeoff,
} from "lucide-react";
import Services from "@/components/home/Services";
import VisaSupportCard from "@/components/visa/VisaSupportCard";
import VisaRequirements from "@/components/visa/VisaRequirements";
import Faq from "@/components/visa/Faq";

export default function VisaPage() {
  useEffect(() => {
    document.title =
      "Student Visa Guidance for Pakistani Students | Studyabroad.com.pk";

    const description =
      "Expert student visa guidance for Pakistani students — requirements, documents, interview tips, and country-specific visa processes explained.";

    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", description);
  }, []);

  const faqs = [
    {
      question: "What documents are required for a student visa?",
      answer:
        "Common documents include a valid passport, admission or offer letter, financial proof, academic documents, photographs, and the completed visa application form. Exact requirements depend on the destination country.",
    },
    {
      question: "How long does student visa processing take?",
      answer:
        "Visa processing times vary by country, visa type, and application volume. It is recommended to apply well before your intended travel date to allow enough time for processing.",
    },

    {
      question: "Do I need to attend a visa interview?",
      answer:
        "Some countries require a visa interview while others may process applications without one. If an interview is required, we can help you prepare for common questions and explain how to present your study plans clearly.",
    },
    {
      question: "What happens if my student visa is refused?",
      answer:
        "If your visa application is refused, the refusal letter normally explains the reasons. You can review those reasons and determine whether you should appeal, submit additional evidence, or apply again.",
    },

    {
      question: "Can Studyabroad help me prepare my visa application?",
      answer:
        "Yes. Studyabroad can guide you through document preparation, financial evidence, application requirements, and visa interview preparation so that your application is organized and complete.",
    },
  ];

  // 4.2 Required Documents Checklist
  const requiredDocuments = [
    "Passport",
    "CNIC / B-Form",
    "Academic transcripts (HEC/IBCC attested)",
    "Offer letter",
    "Proof of funds / sponsorship",
    "Medical certificate",
    "Photographs",
    "Visa application form",
  ];

  // 4.3 Visa Interview Preparation
  const interviewTips = [
    "Practice clear, confident answers about your chosen course and university",
    "Be ready to explain how you'll fund your studies",
    "Know your study plan and career goals after graduation",
    "Be honest and consistent — avoid contradicting your application documents",
    "Show genuine ties to Pakistan (family, property, future plans)",
    "Avoid memorized, robotic answers — speak naturally",
  ];

  // 4.4 Financial Proof & Sponsorship Guidance
  const financialGuidance = [
    "Bank statements showing consistent balance over the required period",
    "Sponsorship letters from parents/guardians clearly stating support",
    "Salary slips or business proof for the sponsor's income source",
    "Education loan documents, if applicable",
    "Currency and amount matching the embassy's minimum funds requirement",
  ];

  // 4.5 Visa Rejection: Common Reasons & How to Reapply
  const rejectionReasons = [
    "Insufficient or unclear proof of funds",
    "Weak or inconsistent study plan / statement of purpose",
    "Missing or mismatched documents",
    "Incomplete application form",
    "Insufficient ties to home country",
  ];

  const reapplySteps = [
    "Carefully review the rejection letter to identify the exact reason",
    "Strengthen the weak area (funds, documents, or study plan)",
    "Get your revised application reviewed by an expert before resubmitting",
    "Follow the destination country's required waiting period, if any",
  ];

  // 4.6 Pre-Departure Checklist
  const preDepartureChecklist = [
    "Confirm and book your flight",
    "Arrange accommodation before arrival",
    "Get health/travel insurance sorted",
    "Carry sufficient foreign currency and a valid debit/credit card",
    "Pack according to your destination's climate and university requirements",
    "Keep all original documents and their copies handy in carry-on luggage",
  ];

  return (
    <div className="w-full bg-white font-sans">
      {/* Hero Section */}
      <section
        className="relative -top-4  overflow-hidden rounded-none"
        style={{
          backgroundImage:
            "linear-gradient(120deg, var(--primary-dark), var(--primary-dark)), url('https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/breadcrumb.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8 py-20 sm:py-28">
          <h1 className="text-white text-4xl sm:text-5xl font-serif font-semibold tracking-tight mb-4">
            Visa Guidance for Pakistani Students
          </h1>
          <p className="text-white/90 text-lg sm:text-xl max-w-2xl">
            Getting a student visa is often the most stressful part of studying
            abroad. Our consultants guide Pakistani students through every step
            — from document preparation to visa interviews — so nothing stands
            between you and your offer letter.
          </p>
          <div className="flex items-center flex-wrap gap-2 text-white/80 text-sm mt-6">
            <span>STUDYABROAD</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[var(--btn)]">Visa Services</span>
          </div>
        </div>
      </section>

      <VisaSupportCard />

      <Services />
      <VisaRequirements />

      {/* Application Process */}
      <section className="max-w-[1320px] mx-auto px-3  lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 text-[var(--primary)] font-semibold text-sm uppercase tracking-wide">
            <Clock className="w-4 h-4" />
            Application Process
          </div>
          <h2 className="font-serif text-[var(--primary)] text-3xl sm:text-4xl font-semibold mt-4 leading-tight">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Consultation",
              desc: "Initial assessment of your eligibility and visa options",
            },
            {
              step: "02",
              title: "Documentation",
              desc: "Gather and prepare all required documents",
            },
            {
              step: "03",
              title: "Application",
              desc: "Submit your application with expert guidance",
            },
            {
              step: "04",
              title: "Approval",
              desc: "Track your application and receive your visa",
            },
          ].map((item, index) => (
            <div key={item.step} className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--primary)] flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-serif text-2xl font-bold">
                  {item.step}
                </span>
              </div>
              <h3 className="font-serif font-semibold text-[var(--primary)] text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4.2 Required Documents Checklist */}
      <section
        id="required-documents-checklist"
        className="bg-[var(--primary)] lg:rounded-3xl rounded-none py-16 sm:py-24  lg:mx-8"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-[var(--primary-light)] font-semibold text-sm uppercase tracking-wide mb-4">
                <FileText className="w-4 h-4" />
                Required Documents Checklist
              </div>
              <h2 className="font-serif text-white text-3xl sm:text-4xl font-semibold leading-tight mb-6">
                Documents You'll Need
              </h2>
              <p className="text-white/80 leading-relaxed mb-8">
                While specific requirements vary by visa type and destination,
                here are the commonly required documents for most student visa
                applications.
              </p>
              <ul className="space-y-3">
                {requiredDocuments.map((doc, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-white/90"
                  >
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <h3 className="font-serif text-white text-xl font-semibold mb-6">
                Need Help with Documents?
              </h3>
              <p className="text-white/80 mb-6">
                Our team can help you understand which documents are specific to
                your case and guide you on obtaining them.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-medium px-6 py-3 rounded-full transition-colors"
              >
                Get Document Assistance <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4.3 Visa Interview Preparation */}
      <section
        id="visa-interview-preparation"
        className="max-w-[1320px] mx-auto px-6 lg:px-8 py-16 sm:py-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-[var(--primary)] font-semibold text-sm uppercase tracking-wide mb-4">
              <MessageCircle className="w-4 h-4" />
              Visa Interview Preparation
            </div>
            <h2 className="font-serif text-[var(--primary)] text-3xl sm:text-4xl font-semibold leading-tight mb-6">
              Walk Into Your Interview With Confidence
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Common visa interview questions Pakistani students face, how to
              answer confidently, and mistakes to avoid.
            </p>
          </div>
          <ul className="space-y-3">
            {interviewTips.map((tip, index) => (
              <li
                key={index}
                className="flex items-start gap-3 bg-[var(--background-light)] rounded-xl p-4 shadow-sm"
              >
                <CheckCircle className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4.4 Financial Proof & Sponsorship Guidance */}
      <section
        id="financial-proof-sponsorship"
        className="bg-[var(--background-light)] py-16 sm:py-24"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 text-[var(--primary-light)] font-semibold text-sm uppercase tracking-wide">
              <DollarSign className="w-4 h-4" />
              Financial Proof & Sponsorship Guidance
            </div>
            <h2 className="font-serif text-[var(--primary)] text-3xl sm:text-4xl font-semibold mt-4 leading-tight">
              Get Your Financial Documents Right
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              How to prepare bank statements, sponsorship letters, and financial
              documents that satisfy embassy requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {financialGuidance.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white rounded-xl shadow-md p-5"
              >
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.5 Visa Rejection: Common Reasons & How to Reapply */}
      <section
        id="visa-rejection-reapply"
        className="max-w-[1320px] mx-auto px-6 lg:px-8 py-16 sm:py-24"
      >
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 text-[var(--primary)] font-semibold text-sm uppercase tracking-wide">
            <XCircle className="w-4 h-4" />
            Visa Rejection: Common Reasons & How to Reapply
          </div>
          <h2 className="font-serif text-[var(--primary)] text-3xl sm:text-4xl font-semibold mt-4 leading-tight">
            Turn a Rejection Into an Approval
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="font-serif font-semibold text-[var(--primary)] text-lg mb-4">
              Common Rejection Reasons
            </h3>
            <ul className="space-y-3">
              {rejectionReasons.map((reason, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 text-sm"
                >
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif font-semibold text-[var(--primary)] text-lg mb-4">
              Steps to Reapply
            </h3>
            <ul className="space-y-3">
              {reapplySteps.map((step, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 text-sm"
                >
                  <CheckCircle className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4.6 Pre-Departure Checklist */}
      <section
        id="pre-departure-checklist"
        className="mx-0 rounded-none bg-[var(--primary)] py-16 sm:py-24 lg:mx-8 lg:rounded-3xl"
      >
        <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-14 text-center">
            <div className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-white/80">
              <PlaneTakeoff className="h-4 w-4" />
              Pre-Departure Checklist
            </div>

            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Fly? Check This First
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">
              Make sure everything is ready before you begin your journey.
            </p>
          </div>

          {/* Checklist */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {preDepartureChecklist.map((item, index) => (
              <div
                key={index}
                className="
            group
            flex
            items-center
            gap-4
            rounded-2xl
            border
            border-white/20
            bg-white/[0.08]
            p-5
            backdrop-blur-md
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-white/40
            hover:bg-white/[0.14]
            hover:shadow-lg
          "
              >
                {/* Filled Check Icon */}
                <div
                  className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-white
              shadow-sm
              transition-transform
              duration-300
              group-hover:scale-105
            "
                >
                  <CheckCircle
                    className="h-5 w-5 text-[var(--primary)]"
                    strokeWidth={2.5}
                  />
                </div>

                {/* Text */}
                <span className="text-sm font-medium leading-6 text-white/95">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq
        faqsData={faqs}
        badgeText="Student Visa FAQs"
        title="Everything You Need"
        highlightTitle="To Know"
        description="Find answers to common questions about student visa requirements, documents, financial proof, interviews, and applications."
        imageSrc="/passport.jpg"
      />
    </div>
  );
}
