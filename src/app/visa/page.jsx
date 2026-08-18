"use client";

import { useEffect, useState } from "react";
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
  const [openFaq, setOpenFaq] = useState(null);

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
      question: "What documents do I need for a visa application?",
      answer: "Required documents vary by visa type and destination country. Generally, you'll need a valid passport, completed application form, photographs, proof of financial support, and specific documents based on your visa category."
    },
    {
      question: "How long does the visa processing take?",
      answer: "Processing times vary significantly by country and visa type. Student visas typically take 2-8 weeks, work visas 4-12 weeks, and tourist visas 1-4 weeks. We provide estimated timelines based on current processing times."
    },
    {
      question: "Can Studyabroad guarantee visa approval?",
      answer: "While we cannot guarantee visa approval as the final decision rests with immigration authorities, our expert guidance significantly improves your chances. We ensure your application is complete, accurate, and meets all requirements."
    },
    {
      question: "What if my visa application is rejected?",
      answer: "If your visa is rejected, we help you understand the reason and guide you through the appeal process or reapplication. Our team reviews rejection notices and provides strategic advice for improving your next application."
    }
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
        className="relative w-[calc(100%-2rem)] lg:w-[calc(100%-4rem)] mx-auto overflow-hidden rounded-3xl"
        style={{
          backgroundImage: "linear-gradient(120deg, rgba(15,58,45,0.92), rgba(15,58,45,0.75)), url('https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/breadcrumb.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <h1 className="text-white text-4xl sm:text-5xl font-serif font-semibold tracking-tight mb-4">
            Visa Guidance for Pakistani Students
          </h1>
          <p className="text-white/90 text-lg sm:text-xl max-w-2xl">
            Getting a student visa is often the most stressful part of studying abroad. Our consultants guide Pakistani students through every step — from document preparation to visa interviews — so nothing stands between you and your offer letter.
          </p>
          <div className="flex items-center flex-wrap gap-2 text-white/80 text-sm mt-6">
            <span>STUDYABROAD</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-lime-400">Visa Services</span>
          </div>
        </div>
      </section>

      <VisaSupportCard /> 
     

    <Services />
    <VisaRequirements />
 

      {/* Application Process */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 text-lime-600 font-semibold text-sm uppercase tracking-wide">
            <Clock className="w-4 h-4" />
            Application Process
          </div>
          <h2 className="font-serif text-emerald-900 text-3xl sm:text-4xl font-semibold mt-4 leading-tight">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Consultation", desc: "Initial assessment of your eligibility and visa options" },
            { step: "02", title: "Documentation", desc: "Gather and prepare all required documents" },
            { step: "03", title: "Application", desc: "Submit your application with expert guidance" },
            { step: "04", title: "Approval", desc: "Track your application and receive your visa" }
          ].map((item, index) => (
            <div key={item.step} className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-900 flex items-center justify-center mx-auto mb-4">
                <span className="text-lime-400 font-serif text-2xl font-bold">{item.step}</span>
              </div>
              <h3 className="font-serif font-semibold text-emerald-900 text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4.2 Required Documents Checklist */}
      <section id="required-documents-checklist" className="bg-emerald-900 rounded-3xl py-16 sm:py-24 mx-4 lg:mx-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-lime-400 font-semibold text-sm uppercase tracking-wide mb-4">
                <FileText className="w-4 h-4" />
                Required Documents Checklist
              </div>
              <h2 className="font-serif text-white text-3xl sm:text-4xl font-semibold leading-tight mb-6">
                Documents You'll Need
              </h2>
              <p className="text-white/80 leading-relaxed mb-8">
                While specific requirements vary by visa type and destination, here are the commonly required documents for most student visa applications.
              </p>
              <ul className="space-y-3">
                {requiredDocuments.map((doc, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/90">
                    <CheckCircle className="w-5 h-5 text-lime-400 flex-shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <h3 className="font-serif text-white text-xl font-semibold mb-6">Need Help with Documents?</h3>
              <p className="text-white/80 mb-6">
                Our team can help you understand which documents are specific to your case and guide you on obtaining them.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-white font-medium px-6 py-3 rounded-full transition-colors"
              >
                Get Document Assistance <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4.3 Visa Interview Preparation */}
      <section id="visa-interview-preparation" className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-lime-600 font-semibold text-sm uppercase tracking-wide mb-4">
              <MessageCircle className="w-4 h-4" />
              Visa Interview Preparation
            </div>
            <h2 className="font-serif text-emerald-900 text-3xl sm:text-4xl font-semibold leading-tight mb-6">
              Walk Into Your Interview With Confidence
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Common visa interview questions Pakistani students face, how to answer confidently, and mistakes to avoid.
            </p>
          </div>
          <ul className="space-y-3">
            {interviewTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-3 bg-[#fafbf9] rounded-xl p-4 shadow-sm">
                <CheckCircle className="w-5 h-5 text-lime-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4.4 Financial Proof & Sponsorship Guidance */}
      <section id="financial-proof-sponsorship" className="bg-[#fafbf9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 text-lime-600 font-semibold text-sm uppercase tracking-wide">
              <DollarSign className="w-4 h-4" />
              Financial Proof & Sponsorship Guidance
            </div>
            <h2 className="font-serif text-emerald-900 text-3xl sm:text-4xl font-semibold mt-4 leading-tight">
              Get Your Financial Documents Right
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              How to prepare bank statements, sponsorship letters, and financial documents that satisfy embassy requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {financialGuidance.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-white rounded-xl shadow-md p-5">
                <CheckCircle className="w-5 h-5 text-lime-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.5 Visa Rejection: Common Reasons & How to Reapply */}
      <section id="visa-rejection-reapply" className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 text-lime-600 font-semibold text-sm uppercase tracking-wide">
            <XCircle className="w-4 h-4" />
            Visa Rejection: Common Reasons & How to Reapply
          </div>
          <h2 className="font-serif text-emerald-900 text-3xl sm:text-4xl font-semibold mt-4 leading-tight">
            Turn a Rejection Into an Approval
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="font-serif font-semibold text-emerald-900 text-lg mb-4">Common Rejection Reasons</h3>
            <ul className="space-y-3">
              {rejectionReasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700 text-sm">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif font-semibold text-emerald-900 text-lg mb-4">Steps to Reapply</h3>
            <ul className="space-y-3">
              {reapplySteps.map((step, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700 text-sm">
                  <CheckCircle className="w-5 h-5 text-lime-600 flex-shrink-0 mt-0.5" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4.6 Pre-Departure Checklist */}
      <section id="pre-departure-checklist" className="bg-emerald-900 rounded-3xl py-16 sm:py-24 mx-4 lg:mx-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 text-lime-400 font-semibold text-sm uppercase tracking-wide">
              <PlaneTakeoff className="w-4 h-4" />
              Pre-Departure Checklist
            </div>
            <h2 className="font-serif text-white text-3xl sm:text-4xl font-semibold mt-4 leading-tight">
              Ready to Fly? Check This First
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {preDepartureChecklist.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-white/10 backdrop-blur rounded-xl p-5">
                <CheckCircle className="w-5 h-5 text-lime-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/90 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Studyabroad */}
      {/* <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 text-lime-600 font-semibold text-sm uppercase tracking-wide">
            <ShieldCheck className="w-4 h-4" />
            Why Choose Studyabroad
          </div>
          <h2 className="font-serif text-emerald-900 text-3xl sm:text-4xl font-semibold mt-4 leading-tight">
            Your Trusted Student Visa Partner
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Expert Consultants", desc: "Experienced immigration specialists with up-to-date knowledge" },
            { title: "High Success Rate", desc: "Proven track record of successful visa applications" },
            { title: "Personalized Service", desc: "Tailored guidance based on your unique situation" },
            { title: "End-to-End Support", desc: "From consultation to visa approval, we're with you" },
            { title: "Transparent Process", desc: "Clear communication at every step of the way" },
            { title: "Competitive Pricing", desc: "Quality services at affordable rates" }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-lime-500 flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-serif font-semibold text-emerald-900 text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section> */}

      <Faq />
   

      {/* CTA */}
    
    </div>
  );
}