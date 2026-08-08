"use client";

import { useState } from "react";
import Link from "next/link";
import { api } from "@/lib/api";
import { Mail, Phone, MapPin, Clock, Send, ChevronRight } from "lucide-react";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      await api.submitContact(data);
      setSuccessMessage('Thank you! Your message has been sent successfully.');
      e.target.reset();
    } catch (error) {
      setErrorMessage('Failed to send message. Please try again.');
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@routex.com", "support@routex.com"],
      color: "bg-lime-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "bg-emerald-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Education Avenue", "New York, NY 10001", "USA"],
      color: "bg-teal-500"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
      color: "bg-cyan-500"
    }
  ];

  return (
    <div className="w-full bg-white font-sans">
      {/* Hero Section */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(120deg, rgba(15,58,45,0.92), rgba(15,58,45,0.75)), url('https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/breadcrumb.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <h1 className="text-white text-4xl sm:text-5xl font-serif font-semibold tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-white/90 text-lg sm:text-xl max-w-2xl">
            Have questions about studying abroad? Our expert team is here to help you every step of the way.
          </p>
          <div className="flex items-center gap-2 text-white/80 text-sm mt-6">
            <span>RouteX</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-lime-400">Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center mb-4`}>
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-serif font-semibold text-emerald-900 text-lg mb-3">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="bg-[#fafbf9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="font-serif text-2xl text-emerald-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your study abroad goals..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-lime-500 text-white rounded-lg font-medium hover:bg-lime-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {submitting ? 'Sending...' : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
                {successMessage && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-center font-medium">
                    {successMessage}
                  </div>
                )}
                {errorMessage && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-center font-medium">
                    {errorMessage}
                  </div>
                )}
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <div className="bg-emerald-900 rounded-3xl overflow-hidden h-64 relative">
                <div className="absolute inset-0 flex items-center justify-center text-white/80">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-medium">123 Education Avenue</p>
                    <p className="text-sm">New York, NY 10001</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="font-serif font-semibold text-emerald-900 text-lg mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <Link href="/appointment" className="flex items-center justify-between text-gray-600 hover:text-lime-600 transition-colors">
                    <span>Book an Appointment</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link href="/scholarships" className="flex items-center justify-between text-gray-600 hover:text-lime-600 transition-colors">
                    <span>Explore Scholarships</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link href="/visa" className="flex items-center justify-between text-gray-600 hover:text-lime-600 transition-colors">
                    <span>Visa Information</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link href="/about" className="flex items-center justify-between text-gray-600 hover:text-lime-600 transition-colors">
                    <span>Learn About RouteX</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-2xl p-6 text-white">
                <h3 className="font-serif font-semibold text-xl mb-2">Prefer to Talk?</h3>
                <p className="text-white/80 text-sm mb-4">
                  Schedule a free consultation with one of our expert counselors.
                </p>
                <Link
                  href="/appointment"
                  className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-white font-medium px-6 py-3 rounded-full transition-colors"
                >
                  Book Now <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="font-serif text-emerald-900 text-3xl sm:text-4xl font-semibold">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "How quickly will you respond to my inquiry?",
              a: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly."
            },
            {
              q: "Do you charge for initial consultations?",
              a: "Our initial consultation is completely free. We'll discuss your goals and provide guidance on the best path forward."
            },
            {
              q: "Can I visit your office in person?",
              a: "Yes! We welcome in-person visits during our business hours. Please book an appointment to ensure a counselor is available."
            },
            {
              q: "What information should I prepare before contacting you?",
              a: "It's helpful to have your academic records, preferred study destinations, and any specific questions ready. This helps us provide more targeted assistance."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-semibold text-emerald-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}