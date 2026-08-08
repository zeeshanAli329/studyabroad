"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ShieldCheck, FileText, Clock, CheckCircle, AlertCircle, Briefcase } from "lucide-react";

export default function BusinessVisaPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const eligibilityRequirements = [
    "Valid passport with at least 6 months validity",
    "Proof of business activities (conference invitation, meeting schedule)",
    "Employment verification or business ownership proof",
    "Proof of sufficient funds for the trip",
    "No criminal record",
    "Good health if medical examination required",
    "Letter from employer or business registration documents",
    "Return or onward travel ticket"
  ];

  const requiredDocuments = [
    "Valid passport",
    "Business visa application form",
    "Passport-sized photographs",
    "Invitation letter from business partner or conference organizer",
    "Employment letter or business registration",
    "Proof of financial support (bank statements)",
    "Flight itinerary or return ticket",
    "Hotel reservations or accommodation proof",
    "Conference registration or meeting agenda",
    "Medical examination report if required",
    "Police clearance certificate if required",
    "Travel insurance"
  ];

  const applicationSteps = [
    { step: "01", title: "Business Purpose", desc: "Define business purpose and obtain invitation" },
    { step: "02", title: "Gather Documents", desc: "Collect business and personal documents" },
    { step: "03", title: "Complete Application", desc: "Fill out the business visa application form" },
    { step: "04", title: "Pay Fees", desc: "Pay visa application and processing fees" },
    { step: "05", title: "Submit Application", desc: "Submit application with supporting documents" },
    { step: "06", title: "Attend Interview", desc: "Attend interview if required" },
    { step: "07", title: "Processing", desc: "Wait for application processing" },
    { step: "08", title: "Receive Visa", desc: "Collect your business visa" }
  ];

  const commonMistakes = [
    "Applying for wrong visa type (business vs work)",
    "Insufficient business purpose documentation",
    "Not having proper invitation letter",
    "Applying too close to travel date",
    "Not demonstrating ties to home country",
    "Incomplete financial documentation",
    "Missing conference registration proof",
    "Not understanding visa restrictions"
  ];

  const faqs = [
    {
      question: "What is the difference between business visa and work visa?",
      answer: "A business visa is for short-term business activities like meetings, conferences, negotiations, and training. You cannot engage in employment or receive salary. A work visa allows you to work and earn income in the destination country."
    },
    {
      question: "How long can I stay on a business visa?",
      answer: "Business visa validity varies by country, typically ranging from 30 days to 6 months. Some countries offer multiple-entry business visas valid for 1-5 years. The specific duration is determined by immigration authorities based on your business needs."
    },
    {
      question: "Can I attend conferences on a business visa?",
      answer: "Yes, attending conferences, trade shows, seminars, and business meetings are permitted activities on a business visa. You may need to provide conference registration or invitation letters as part of your application."
    },
    {
      question: "Can I extend my business visa?",
      answer: "Some countries allow business visa extensions if you can demonstrate continued business needs. Extensions are typically granted for specific periods and require additional documentation. Not all countries permit extensions."
    },
    {
      question: "Do I need an invitation letter?",
      answer: "Most business visa applications require an invitation letter from a business partner, conference organizer, or company in the destination country. The letter should detail the purpose of your visit, duration, and who will cover expenses."
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
            Business Visa
          </h1>
          <p className="text-white/90 text-lg sm:text-xl max-w-2xl">
            Expand your business globally with our business visa assistance. We help professionals attend conferences, meetings, and business events worldwide.
          </p>
          <div className="flex items-center gap-2 text-white/80 text-sm mt-6">
            <span>RouteX</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-lime-400">Business Visa</span>
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
              What is a Business Visa?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A business visa allows foreign nationals to enter a country for business-related activities such as attending conferences, meetings with business partners, negotiating contracts, or exploring business opportunities. It does not permit employment or paid work.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Business visas are typically short-term (30-90 days) but can be extended or issued as multiple-entry visas for frequent business travelers. Each country has specific requirements and permitted activities for business visa holders.
            </p>
            <div className="bg-lime-50 border border-lime-200 rounded-xl p-6">
              <h3 className="font-serif font-semibold text-emerald-900 mb-3">Permitted Activities</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Attend conferences, trade shows, and seminars</li>
                <li>• Meet with business partners and clients</li>
                <li>• Negotiate contracts and agreements</li>
                <li>• Conduct market research</li>
                <li>• Attend business training</li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/choose-us-left-img.png"
              alt="Business professional"
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
                { country: "USA", time: "3-5 weeks (B1 Visa)" },
                { country: "Schengen", time: "15 days (Standard)" },
                { country: "UK", time: "3 weeks (Standard)" },
                { country: "China", time: "4-6 business days" },
                { country: "Japan", time: "5 working days" },
                { country: "India", time: "3-5 business days" }
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
            Ready for Your Business Trip?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Let our expert consultants help you obtain your business visa for your next international meeting or conference.
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
