"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ShieldCheck, FileText, Clock, CheckCircle, AlertCircle } from "lucide-react";

export default function StudentVisaPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const eligibilityRequirements = [
    "Acceptance letter from a recognized educational institution",
    "Proof of sufficient funds to cover tuition and living expenses",
    "Valid passport with at least 6 months validity",
    "No criminal record or security concerns",
    "Good health and medical clearance if required",
    "Intent to return to home country after studies",
    "Proficiency in the language of instruction (IELTS/TOEFL scores)",
    "Academic qualifications meeting program requirements"
  ];

  const requiredDocuments = [
    "Valid passport",
    "Visa application form",
    "Passport-sized photographs",
    "Letter of acceptance from educational institution",
    "Proof of financial support (bank statements, scholarship letters)",
    "Academic transcripts and certificates",
    "Language proficiency test scores (IELTS, TOEFL, etc.)",
    "Statement of purpose / study plan",
    "Medical examination report",
    "Police clearance certificate",
    "Travel insurance",
    "Proof of accommodation arrangements"
  ];

  const applicationSteps = [
    { step: "01", title: "Get Accepted", desc: "Secure admission to a recognized educational institution" },
    { step: "02", title: "Gather Documents", desc: "Collect all required documents as per visa requirements" },
    { step: "03", title: "Complete Application", desc: "Fill out the visa application form accurately" },
    { step: "04", title: "Pay Fees", desc: "Pay visa application and processing fees" },
    { step: "05", title: "Submit Application", desc: "Submit application at visa office or online" },
    { step: "06", title: "Attend Interview", desc: "Attend visa interview if required" },
    { step: "07", title: "Wait for Processing", desc: "Track your application status" },
    { step: "08", title: "Receive Visa", desc: "Collect your visa and prepare for departure" }
  ];

  const commonMistakes = [
    "Submitting incomplete or incorrect application forms",
    "Providing insufficient proof of financial support",
    "Not demonstrating strong ties to home country",
    "Poor preparation for visa interview",
    "Submitting fake or fraudulent documents",
    "Applying too close to program start date",
    "Not having proper travel insurance",
    "Failing to meet language proficiency requirements"
  ];

  const faqs = [
    {
      question: "How long does a student visa take to process?",
      answer: "Processing times vary by country but typically range from 2-8 weeks. Some countries offer expedited processing for an additional fee. We recommend applying at least 3 months before your program start date."
    },
    {
      question: "Can I work while studying on a student visa?",
      answer: "Many countries allow students to work part-time (usually 20 hours per week) during semesters and full-time during breaks. Work permissions vary by country, so check specific regulations for your destination."
    },
    {
      question: "What happens if my visa application is rejected?",
      answer: "If rejected, you'll receive a reason for the decision. You can reapply with improved documentation or appeal the decision if applicable. Our team helps analyze rejection reasons and strengthen your reapplication."
    },
    {
      question: "Can I extend my student visa?",
      answer: "Yes, most countries allow visa extensions if you continue your studies or pursue further education. You must apply before your current visa expires and show proof of continued enrollment and financial support."
    },
    {
      question: "Do I need a visa interview?",
      answer: "Not all countries require interviews, but many do. If required, we help you prepare by conducting mock interviews and providing tips on common questions and appropriate responses."
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
            Student Visa
          </h1>
          <p className="text-white/90 text-lg sm:text-xl max-w-2xl">
            Pursue your education abroad with confidence. Our expert guidance helps you navigate the student visa process for universities worldwide.
          </p>
          <div className="flex items-center gap-2 text-white/80 text-sm mt-6">
            <span>RouteX</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-lime-400">Student Visa</span>
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
              What is a Student Visa?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A student visa is an official document issued by a country's government that allows international students to study at recognized educational institutions for a specified period. It is typically required for programs longer than 3-6 months, depending on the country.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Student visas not only permit you to study but often allow part-time work, travel within the country, and sometimes bring dependents. Each country has specific requirements, processing times, and conditions attached to their student visas.
            </p>
            <div className="bg-lime-50 border border-lime-200 rounded-xl p-6">
              <h3 className="font-serif font-semibold text-emerald-900 mb-3">Popular Destinations</h3>
              <div className="flex flex-wrap gap-2">
                {["USA", "UK", "Canada", "Australia", "Germany", "France", "New Zealand", "Ireland"].map((country) => (
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
              alt="Students studying abroad"
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
              <ShieldCheck className="w-4 h-4" />
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
                { country: "USA", time: "3-5 weeks (F-1 Visa)" },
                { country: "UK", time: "3 weeks (Standard), 5 days (Priority)" },
                { country: "Canada", time: "4-6 weeks" },
                { country: "Australia", time: "4-8 weeks" },
                { country: "Germany", time: "4-6 weeks" },
                { country: "France", time: "2-4 weeks" }
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
            Ready to Apply for Your Student Visa?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Let our expert consultants guide you through the entire student visa application process.
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
