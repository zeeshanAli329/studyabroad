"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ShieldCheck, FileText, Clock, CheckCircle, AlertCircle, Plane } from "lucide-react";

export default function TouristVisaPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const eligibilityRequirements = [
    "Valid passport with at least 6 months validity",
    "Proof of sufficient funds for the duration of stay",
    "Return or onward travel ticket",
    "Purpose of visit is tourism/leisure only",
    "No criminal record",
    "Good health if medical examination required",
    "Proof of accommodation (hotel booking or invitation)",
    "Travel insurance coverage"
  ];

  const requiredDocuments = [
    "Valid passport",
    "Tourist visa application form",
    "Passport-sized photographs",
    "Proof of financial support (bank statements)",
    "Flight itinerary or return ticket",
    "Hotel reservations or accommodation proof",
    "Travel insurance",
    "Employment verification (proof of ties to home country)",
    "Medical examination report if required",
    "Police clearance certificate if required",
    "Invitation letter if visiting friends/family",
    "Detailed travel itinerary"
  ];

  const applicationSteps = [
    { step: "01", title: "Plan Trip", desc: "Determine destination and duration of stay" },
    { step: "02", title: "Check Requirements", desc: "Verify visa requirements for your destination" },
    { step: "03", title: "Gather Documents", desc: "Collect all required documents" },
    { step: "04", title: "Complete Application", desc: "Fill out the tourist visa application form" },
    { step: "05", title: "Pay Fees", desc: "Pay visa application and processing fees" },
    { step: "06", title: "Submit Application", desc: "Submit application online or at visa office" },
    { step: "07", title: "Biometrics", desc: "Complete biometrics if required" },
    { step: "08", title: "Receive Visa", desc: "Receive your visa and prepare for travel" }
  ];

  const commonMistakes = [
    "Applying too close to travel date",
    "Insufficient proof of financial support",
    "Not showing strong ties to home country",
    "Incomplete travel itinerary",
    "Invalid passport (expiring soon)",
    "Not having return ticket proof",
    "Missing travel insurance",
    "Incorrect visa type application"
  ];

  const faqs = [
    {
      question: "How long does a tourist visa take to process?",
      answer: "Tourist visa processing times vary by country but typically range from 1-4 weeks. Some countries offer expedited processing (3-5 days) for an additional fee. E-visas can be processed even faster, sometimes within 24-72 hours."
    },
    {
      question: "How long can I stay on a tourist visa?",
      answer: "Tourist visa validity varies by country, typically ranging from 30 days to 6 months. Some countries offer multiple-entry visas valid for up to 10 years (like the US B1/B2 visa). The specific duration is determined by the immigration officer at entry."
    },
    {
      question: "Can I work on a tourist visa?",
      answer: "No, tourist visas strictly prohibit any form of employment or paid work. Tourist visas are for tourism, leisure, visiting friends/family, or medical treatment only. Working on a tourist visa can lead to deportation and future visa bans."
    },
    {
      question: "Can I extend my tourist visa?",
      answer: "Some countries allow tourist visa extensions, while others do not. If extensions are possible, you must apply before your current visa expires and provide valid reasons for the extension. Each country has specific rules and fees for extensions."
    },
    {
      question: "What is the difference between visa-free entry and e-visa?",
      answer: "Visa-free entry allows citizens of certain countries to enter without prior visa application for a limited period. E-visa requires an online application before travel but is faster and simpler than traditional visas. Both have specific eligibility requirements based on nationality."
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
            Tourist Visa
          </h1>
          <p className="text-white/90 text-lg sm:text-xl max-w-2xl">
            Explore the world with hassle-free tourist visa processing. We help you get the documentation you need for your dream vacation.
          </p>
          <div className="flex items-center gap-2 text-white/80 text-sm mt-6">
            <span>RouteX</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-lime-400">Tourist Visa</span>
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
              What is a Tourist Visa?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A tourist visa is an official document that allows foreign nationals to enter a country for tourism, leisure, visiting family and friends, or medical treatment. It is typically issued for short-term stays ranging from a few days to several months.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Tourist visas are the most common type of travel visa and are required for citizens of countries that don't have visa-free agreements with the destination. Many countries now offer e-visas, making the application process faster and more convenient.
            </p>
            <div className="bg-lime-50 border border-lime-200 rounded-xl p-6">
              <h3 className="font-serif font-semibold text-emerald-900 mb-3">Popular Tourist Destinations</h3>
              <div className="flex flex-wrap gap-2">
                {["Thailand", "Turkey", "Japan", "Schengen Area", "Australia", "USA", "Canada", "Maldives"].map((country) => (
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
              alt="Tourist traveling"
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
              <Plane className="w-4 h-4" />
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
                { country: "Schengen", time: "15 days (Standard), 2-5 days (Express)" },
                { country: "USA", time: "3-5 weeks (B1/B2)" },
                { country: "Thailand", time: "3-5 business days (E-visa)" },
                { country: "Turkey", time: "24-48 hours (E-visa)" },
                { country: "Australia", time: "2-4 weeks" },
                { country: "Japan", time: "5 working days" }
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
            Ready to Explore the World?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Let our expert consultants help you get your tourist visa for your next adventure.
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
