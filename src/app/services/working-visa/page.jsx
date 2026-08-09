"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ShieldCheck, FileText, Clock, CheckCircle, AlertCircle, Briefcase } from "lucide-react";

export default function WorkingVisaPage() {
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
          <div className="flex items-center gap-2 text-lime-400 font-semibold text-sm uppercase tracking-wide mb-4">
            <span>WORK VISA</span>
          </div>
          <h1 className="text-white text-4xl sm:text-5xl font-serif font-semibold tracking-tight mb-4">
            Working Visa
          </h1>
          <p className="text-white/90 text-lg sm:text-xl max-w-2xl">
            Build your international career with our work visa assistance. We help professionals navigate global employment opportunities.
          </p>
          <div className="flex items-center gap-2 text-white/80 text-sm mt-6">
            <span>RouteX</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-lime-400">Working Visa</span>
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
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
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
            <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-lime-500 rounded-full flex-shrink-0" />
              <span className="text-gray-700 text-sm">{doc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-[#fafbf9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 text-lime-600 font-semibold text-sm uppercase tracking-wide">
              <Clock className="w-4 h-4" />
              Application Process
            </div>
            <h2 className="font-serif text-emerald-900 text-3xl sm:text-4xl font-semibold mt-4 leading-tight">
              Step-by-Step Guide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md relative">
                <div className="text-3xl font-bold text-lime-200 mb-4">{step.step}</div>
                <h3 className="font-semibold text-emerald-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
                {index < applicationSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2">
                    <ChevronRight className="w-6 h-6 text-lime-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 text-red-600 font-semibold text-sm uppercase tracking-wide">
            <AlertCircle className="w-4 h-4" />
            Common Mistakes
          </div>
          <h2 className="font-serif text-emerald-900 text-3xl sm:text-4xl font-semibold mt-4 leading-tight">
            Avoid These Errors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {commonMistakes.map((mistake, index) => (
            <div key={index} className="bg-red-50 border border-red-200 rounded-xl p-5 flex items-start gap-4">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{mistake}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#fafbf9] py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 text-lime-600 font-semibold text-sm uppercase tracking-wide">
              <FileText className="w-4 h-4" />
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
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                >
                  <span className="font-semibold text-emerald-900">{faq.question}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-lime-600 transition-transform ${
                      openFaq === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-semibold mb-4">
            Ready to Start Your International Career?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Our expert consultants will guide you through the entire work visa application process, from job search to visa approval.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointment"
              className="px-8 py-4 bg-lime-500 text-white rounded-full font-semibold hover:bg-lime-600 transition-colors"
            >
              Book Appointment
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-emerald-900 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
