"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ShieldCheck, FileText, Clock, CheckCircle, AlertCircle, Briefcase } from "lucide-react";

export default function WorkVisaPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const eligibilityRequirements = [
    "Valid job offer from an employer in the destination country",
    "Relevant qualifications and experience for the position",
    "Valid passport with at least 6 months validity",
    "Proof of sufficient funds for initial settlement",
    "Clean criminal record",
    "Good health and medical clearance if required",
    "Language proficiency meeting job requirements",
    "Labor Market Impact Assessment (LMIA) approval if required"
  ];

  const requiredDocuments = [
    "Valid passport",
    "Work visa application form",
    "Passport-sized photographs",
    "Job offer letter or employment contract",
    "Educational certificates and transcripts",
    "Professional qualifications and certifications",
    "Resume/CV",
    "Work experience letters",
    "Language proficiency test scores",
    "Medical examination report",
    "Police clearance certificate",
    "Proof of funds",
    "Employer's sponsorship documents"
  ];

  const applicationSteps = [
    { step: "01", title: "Job Offer", desc: "Secure a valid job offer from an eligible employer" },
    { step: "02", title: "Employer Sponsorship", desc: "Employer obtains necessary approvals and sponsorship" },
    { step: "03", title: "Gather Documents", desc: "Collect all required personal and professional documents" },
    { step: "04", title: "Complete Application", desc: "Fill out the work visa application form" },
    { step: "05", title: "Pay Fees", desc: "Pay visa application and processing fees" },
    { step: "06", title: "Submit Application", desc: "Submit application with all supporting documents" },
    { step: "07", title: "Biometrics/Interview", desc: "Complete biometrics and attend interview if required" },
    { step: "08", title: "Receive Visa", desc: "Receive work visa and prepare for relocation" }
  ];

  const commonMistakes = [
    "Applying without a genuine job offer",
    "Incomplete or inaccurate employment documentation",
    "Not meeting the specific skill requirements",
    "Insufficient proof of qualifications",
    "Poor preparation for visa interview",
    "Not understanding the visa conditions and restrictions",
    "Applying for wrong visa category",
    "Missing employer sponsorship requirements"
  ];

  const faqs = [
    {
      question: "How long does a work visa take to process?",
      answer: "Work visa processing times vary significantly by country and visa type, typically ranging from 4-12 weeks. Some countries offer expedited processing for additional fees. Processing time depends on the workload of immigration authorities and completeness of your application."
    },
    {
      question: "Can my family accompany me on a work visa?",
      answer: "Many work visas allow dependents (spouse and children) to accompany the primary applicant. Dependents may need to apply for dependent visas and may have work or study restrictions. Each country has specific rules for dependent visas."
    },
    {
      question: "Can I change employers on a work visa?",
      answer: "This depends on the country and visa type. Some work visas are employer-specific and require a new visa if you change jobs. Others allow job changes with notification to immigration authorities. Always check the conditions of your specific visa."
    },
    {
      question: "What happens if I lose my job?",
      answer: "If you lose your job, you typically have a grace period (30-90 days depending on country) to find new employment or leave the country. Some visas require immediate departure if employment ends. It's important to understand the conditions of your visa."
    },
    {
      question: "Can a work visa lead to permanent residency?",
      answer: "Many countries have pathways from work visas to permanent residency. After working for a specified period (usually 1-5 years) and meeting certain criteria, you may be eligible to apply for permanent residency or citizenship."
    }
  ];

  return (
    <div className="w-full bg-white font-sans">
      {/* Hero Section */}
      <section
        className="relative w-full overflow-hidden rounded-3xl mx-4 lg:mx-8"
        style={{
          backgroundImage: "linear-gradient(120deg, rgba(15,58,45,0.92), rgba(15,58,45,0.75)), url('https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/breadcrumb.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <h1 className="text-white text-4xl sm:text-5xl font-serif font-semibold tracking-tight mb-4">
            Work Visa
          </h1>
          <p className="text-white/90 text-lg sm:text-xl max-w-2xl">
            Build your international career with our work visa assistance. We help professionals navigate global employment opportunities.
          </p>
          <div className="flex items-center gap-2 text-white/80 text-sm mt-6">
            <span>RouteX</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-lime-400">Work Visa</span>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-lime-600 font-semibold text-sm uppercase tracking-wide mb-4">
              <ShieldCheck className="w-4 h-4" />
              Overview
            </div>
            <h2 className="font-serif text-emerald-900 text-3xl sm:text-4xl font-semibold leading-tight mb-6">
              What is a Work Visa?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A work visa is an authorization that allows foreign nationals to work legally in a country for a specified period and employer. Work visas are typically tied to specific job offers and require employer sponsorship.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Work visas enable professionals to pursue international career opportunities, gain global experience, and often lead to permanent residency pathways. Each country has different work visa categories based on skill levels, job types, and duration.
            </p>
            <div className="bg-lime-50 border border-lime-200 rounded-xl p-6">
              <h3 className="font-serif font-semibold text-emerald-900 mb-3">Popular Work Destinations</h3>
              <div className="flex flex-wrap gap-2">
                {["USA", "Canada", "UK", "Australia", "Germany", "UAE", "Singapore", "Japan"].map((country) => (
                  <span key={country} className="bg-white px-3 py-1 rounded-full text-sm text-emerald-900 border border-lime-300">
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/choose-us-left-img.png"
              alt="Professional working abroad"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="bg-[#fafbf9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 text-lime-600 font-semibold text-sm uppercase tracking-wide">
              <Briefcase className="w-4 h-4" />
              Who Can Apply
            </div>
            <h2 className="font-serif text-emerald-900 text-3xl sm:text-4xl font-semibold mt-4 leading-tight">
              Eligibility Requirements
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {eligibilityRequirements.map((requirement, index) => (
              <div key={index} className="bg-white rounded-xl p-5 shadow-md flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-lime-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{requirement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 text-lime-600 font-semibold text-sm uppercase tracking-wide">
            <FileText className="w-4 h-4" />
            Required Documents
          </div>
          <h2 className="font-serif text-emerald-900 text-3xl sm:text-4xl font-semibold mt-4 leading-tight">
            Documents You'll Need
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {requiredDocuments.map((doc, index) => (
            <div key={index} className="bg-emerald-50 rounded-lg p-4 flex items-center gap-3">
              <FileText className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{doc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-emerald-900 rounded-3xl py-16 sm:py-24 mx-4 lg:mx-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 text-lime-400 font-semibold text-sm uppercase tracking-wide">
              <Clock className="w-4 h-4" />
              Application Process
            </div>
            <h2 className="font-serif text-white text-3xl sm:text-4xl font-semibold mt-4 leading-tight">
              Step-by-Step Guide
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationSteps.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-lime-500 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-serif text-xl font-bold">{step.step}</span>
                </div>
                <h3 className="font-serif font-semibold text-white text-base mb-2">{step.title}</h3>
                <p className="text-white/80 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processing Information */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 text-lime-600 font-semibold text-sm uppercase tracking-wide mb-4">
              <Clock className="w-4 h-4" />
              Processing Times
            </div>
            <h2 className="font-serif text-emerald-900 text-3xl font-semibold leading-tight mb-6">
              How Long Does It Take?
            </h2>
            <div className="space-y-4">
              {[
                { country: "USA", time: "3-6 months (H-1B)" },
                { country: "Canada", time: "8-14 weeks" },
                { country: "UK", time: "3 weeks (Skilled Worker)" },
                { country: "Australia", time: "4-8 weeks" },
                { country: "Germany", time: "4-12 weeks" },
                { country: "UAE", time: "2-4 weeks" }
              ].map((item) => (
                <div key={item.country} className="flex justify-between items-center bg-gray-50 rounded-lg p-4">
                  <span className="font-medium text-emerald-900">{item.country}</span>
                  <span className="text-gray-600 text-sm">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 text-lime-600 font-semibold text-sm uppercase tracking-wide mb-4">
              <AlertCircle className="w-4 h-4" />
              Common Mistakes
            </div>
            <h2 className="font-serif text-emerald-900 text-3xl font-semibold leading-tight mb-6">
              Avoid These Errors
            </h2>
            <ul className="space-y-3">
              {commonMistakes.map((mistake, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{mistake}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#eef2e9] py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 text-lime-600 font-semibold text-sm uppercase tracking-wide">
              <ShieldCheck className="w-4 h-4" />
              FAQ
            </div>
            <h2 className="font-serif text-emerald-900 text-3xl sm:text-4xl font-semibold mt-4 leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-emerald-900">{faq.question}</span>
                  <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === index ? 'rotate-90' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 pt-0">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-900 to-emerald-800 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 text-center">
          <h2 className="font-serif text-white text-3xl sm:text-4xl font-semibold leading-tight mb-6">
            Ready to Work Abroad?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Let our expert consultants guide you through the work visa application process for your international career.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-white font-medium px-8 py-4 rounded-full transition-colors"
            >
              Get Started <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-medium px-8 py-4 rounded-full hover:bg-white hover:text-emerald-900 transition-colors"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
