"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ShieldCheck, FileText, Clock, CheckCircle } from "lucide-react";

export default function VisaPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const visaCategories = [
    {
      title: "Student Visa",
      description: "Pursue your education abroad with our student visa assistance",
      icon: "🎓",
      link: "/visa/student",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Work Visa",
      description: "Build your international career with work visa support",
      icon: "💼",
      link: "/visa/work",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Tourist Visa",
      description: "Explore the world with hassle-free tourist visa processing",
      icon: "✈️",
      link: "/visa/tourist",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Business Visa",
      description: "Expand your business globally with business visa services",
      icon: "🤝",
      link: "/visa/business",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Family Visa",
      description: "Bring your family together with family visa assistance",
      icon: "👨‍👩‍👧‍👦",
      link: "/visa/family",
      color: "from-pink-500 to-pink-600"
    }
  ];

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
      question: "Can RouteX guarantee visa approval?",
      answer: "While we cannot guarantee visa approval as the final decision rests with immigration authorities, our expert guidance significantly improves your chances. We ensure your application is complete, accurate, and meets all requirements."
    },
    {
      question: "What if my visa application is rejected?",
      answer: "If your visa is rejected, we help you understand the reason and guide you through the appeal process or reapplication. Our team reviews rejection notices and provides strategic advice for improving your next application."
    }
  ];

  const requiredDocuments = [
    "Valid passport (minimum 6 months validity)",
    "Completed visa application form",
    "Recent passport-sized photographs",
    "Proof of financial support",
    "Acceptance letter (for student visas)",
    "Employment offer (for work visas)",
    "Travel itinerary (for tourist visas)",
    "Medical examination report",
    "Police clearance certificate",
    "Travel insurance"
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
            Visa Services
          </h1>
          <p className="text-white/90 text-lg sm:text-xl max-w-2xl">
            Expert guidance for all your visa needs. From student visas to work permits, we help you navigate the complex immigration process with confidence.
          </p>
          <div className="flex items-center gap-2 text-white/80 text-sm mt-6">
            <span>RouteX</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-lime-400">Visa Services</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-lime-600 font-semibold text-sm uppercase tracking-wide mb-4">
              <ShieldCheck className="w-4 h-4" />
              About Our Visa Services
            </div>
            <h2 className="font-serif text-emerald-900 text-3xl sm:text-4xl font-semibold leading-tight mb-6">
              Your Gateway to Global Opportunities
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              RouteX provides comprehensive visa assistance for students, professionals, tourists, and families. Our experienced immigration consultants guide you through every step of the visa application process, ensuring your application has the best chance of success.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We stay updated with the latest immigration policies and requirements for countries worldwide, providing you with accurate information and personalized guidance tailored to your specific situation.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/choose-us-left-img.png"
              alt="Visa consultation"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Visa Categories */}
      <section className="bg-[#fafbf9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 text-lime-600 font-semibold text-sm uppercase tracking-wide">
              <FileText className="w-4 h-4" />
              Visa Categories
            </div>
            <h2 className="font-serif text-emerald-900 text-3xl sm:text-4xl font-semibold mt-4 leading-tight">
              Choose Your Visa Type
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visaCategories.map((category, index) => (
              <Link
                key={category.title}
                href={category.link}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-3xl mb-4`}>
                    {category.icon}
                  </div>
                  <h3 className="font-serif font-semibold text-emerald-900 text-xl mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center text-lime-600 font-medium text-sm group-hover:gap-3 transition-all">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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

      {/* Required Documents */}
      <section className="bg-emerald-900 rounded-3xl py-16 sm:py-24 mx-4 lg:mx-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-lime-400 font-semibold text-sm uppercase tracking-wide mb-4">
                <FileText className="w-4 h-4" />
                Required Documents
              </div>
              <h2 className="font-serif text-white text-3xl sm:text-4xl font-semibold leading-tight mb-6">
                Documents You'll Need
              </h2>
              <p className="text-white/80 leading-relaxed mb-8">
                While specific requirements vary by visa type and destination, here are the commonly required documents for most visa applications.
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

      {/* Why Choose RouteX */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 text-lime-600 font-semibold text-sm uppercase tracking-wide">
            <ShieldCheck className="w-4 h-4" />
            Why Choose RouteX
          </div>
          <h2 className="font-serif text-emerald-900 text-3xl sm:text-4xl font-semibold mt-4 leading-tight">
            Your Trusted Visa Partner
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
            Ready to Start Your Visa Application?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Contact our expert visa consultants today and take the first step towards your international journey.
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
