"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ShieldCheck, FileText, Clock, CheckCircle, AlertCircle, Users } from "lucide-react";

export default function FamilyVisaPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const eligibilityRequirements = [
    "Sponsor must be a citizen or permanent resident of destination country",
    "Proof of relationship (marriage certificate, birth certificates)",
    "Sponsor meets minimum income requirements",
    "Valid passports for all family members",
    "No criminal record for all applicants",
    "Good health and medical clearance if required",
    "Proof of accommodation for family",
    "Sponsor has valid visa status"
  ];

  const requiredDocuments = [
    "Valid passports for all family members",
    "Family visa application forms",
    "Passport-sized photographs",
    "Marriage certificate (for spouse)",
    "Birth certificates (for children)",
    "Proof of sponsor's status (passport, PR card)",
    "Sponsor's financial documents (tax returns, employment letter)",
    "Proof of relationship evidence",
    "Medical examination reports",
    "Police clearance certificates",
    "Marriage registration if applicable",
    "Travel insurance"
  ];

  const applicationSteps = [
    { step: "01", title: "Sponsor Eligibility", desc: "Verify sponsor meets requirements" },
    { step: "02", title: "Gather Documents", desc: "Collect relationship and financial documents" },
    { step: "03", title: "Complete Application", desc: "Fill out family visa application forms" },
    { step: "04", title: "Pay Fees", desc: "Pay visa application and processing fees" },
    { step: "05", title: "Submit Application", desc: "Submit application with all supporting documents" },
    { step: "06", title: "Biometrics", desc: "Complete biometrics for all applicants" },
    { step: "07", title: "Processing", desc: "Wait for application processing" },
    { step: "08", title: "Receive Visa", desc: "Collect family visas and prepare for travel" }
  ];

  const commonMistakes = [
    "Insufficient proof of relationship",
    "Sponsor not meeting income requirements",
    "Incomplete documentation for all family members",
    "Not providing translated documents",
    "Missing medical examinations",
    "Applying too close to travel date",
    "Not demonstrating genuine relationship",
    "Incorrect visa category application"
  ];

  const faqs = [
    {
      question: "Who can I sponsor on a family visa?",
      answer: "Family visas typically allow sponsorship of spouses, dependent children, and sometimes parents or grandparents. The specific eligible family members depend on the country's immigration laws and the sponsor's status (citizen, permanent resident, or temporary visa holder)."
    },
    {
      question: "How long does family visa processing take?",
      answer: "Family visa processing times vary significantly by country and relationship type. Spousal visas typically take 8-12 months, while parent visas can take 1-2 years or longer. Dependent child visas are usually faster, processing in 2-6 months."
    },
    {
      question: "What are the financial requirements?",
      answer: "Sponsors must demonstrate they can financially support their family members. This typically involves meeting minimum income thresholds, providing tax returns, employment letters, and sometimes showing sufficient savings. Requirements vary by country and family size."
    },
    {
      question: "Can my family work or study on a family visa?",
      answer: "Dependent family members on family visas often have work and study rights, but this varies by country and visa type. Spouses of work visa holders may have restricted work rights, while spouses of permanent residents typically have full work rights."
    },
    {
      question: "What happens if our relationship ends?",
      answer: "If a relationship ends (divorce, separation), the sponsored family member's visa status may be affected. Some countries offer provisions for family members to remain if they have been in the country for a certain period or if there are safety concerns. Each country has specific rules."
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
            Family Visa
          </h1>
          <p className="text-white/90 text-lg sm:text-xl max-w-2xl">
            Bring your family together with our family visa assistance. We help families reunite through proper visa guidance and support.
          </p>
          <div className="flex items-center gap-2 text-white/80 text-sm mt-6">
            <span>RouteX</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-lime-400">Family Visa</span>
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
              What is a Family Visa?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A family visa allows citizens, permanent residents, or temporary visa holders to sponsor their family members to join them in the destination country. This includes spouses, children, parents, and sometimes other dependent relatives.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Family visas are designed to promote family reunification and allow families to live together. The requirements and processing times vary significantly based on the relationship type, sponsor's status, and destination country's immigration policies.
            </p>
            <div className="bg-lime-50 border border-lime-200 rounded-xl p-6">
              <h3 className="font-serif font-semibold text-emerald-900 mb-3">Family Members You Can Sponsor</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Spouse or partner</li>
                <li>• Dependent children</li>
                <li>• Parents and grandparents (in some countries)</li>
                <li>• Siblings (limited circumstances)</li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/choose-us-left-img.png"
              alt="Family reunification"
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
              <Users className="w-4 h-4" />
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
                { country: "Canada", time: "12 months (Spousal Sponsorship)" },
                { country: "USA", time: "12-24 months (CR-1/IR-1)" },
                { country: "UK", time: "12 weeks (Spouse Visa)" },
                { country: "Australia", time: "12-17 months (Partner Visa)" },
                { country: "Germany", time: "3-6 months (Family Reunion)" },
                { country: "New Zealand", time: "8-12 months (Partner Visa)" }
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
            Ready to Reunite Your Family?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Let our expert consultants guide you through the family visa application process to bring your loved ones together.
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
