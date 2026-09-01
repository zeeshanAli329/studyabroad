"use client";

import { useState } from "react";
import next from "next";
import { api } from "@/lib/api";
import Reveal from "@/components/shared/Reveal";
import {
  ChevronRight,
  Phone,
  ArrowRight,
  ShieldCheck,
  Globe2,
  Mail,
  MapPin,
  Send,
} from "lucide-react";


export function ContactSection() {
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

  return (
    <section className="w-full bg-[var(--background-light)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Illustration */}
          <Reveal y={30} className="flex justify-center lg:justify-start">
            <img
              src="https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/contact-left-img.png"
              alt="Travel planning illustration"
              className="w-full max-w-md object-contain"
            />
          </Reveal>

          {/* Form */}
          <div>
            <Reveal>
              <div className="flex items-center gap-2 text-[var(--primary)] font-semibold text-sm uppercase tracking-wide">
                <ChevronRight className="w-4 h-4 rotate-180" />
                Contact Information
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="font-serif text-[var(--primary)] text-3xl sm:text-4xl font-semibold mt-4 mb-8 leading-tight">
                Let Your Wanderlust
                <br /> Guide You
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-5"
              >
                <div>
                  <label className="block text-sm text-gray-500 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      className="w-full border border-gray-200 rounded-full px-5 py-3 pr-11 text-sm outline-none focus:border-[var(--primary)] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-gray-500 mb-2">
                      Your Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your Email"
                        className="w-full border border-gray-200 rounded-full px-5 py-3 pr-11 text-sm outline-none focus:border-[var(--primary)] transition-colors"
                      />
                      <Mail className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-2">
                      Your Phone
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone"
                        className="w-full border border-gray-200 rounded-full px-5 py-3 pr-11 text-sm outline-none focus:border-[var(--primary)] transition-colors"
                      />
                      <Phone className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-500 mb-2">
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="w-full border border-gray-200 rounded-full px-5 py-3 pr-11 text-sm outline-none focus:border-[var(--primary)] transition-colors"
                    />
                    <MapPin className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-500 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      required
                      placeholder="Write Message.."
                      rows={4}
                      className="w-full border border-gray-200 rounded-2xl px-5 py-3 pr-11 text-sm outline-none focus:border-[var(--primary)] transition-colors resize-none"
                    />
                    <Mail className="w-4 h-4 text-gray-400 absolute right-4 top-4" />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-medium rounded-full py-3.5 flex items-center justify-center gap-2 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Sending...' : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {successMessage && (
                  <div className="bg-[var(--success)]/10 border border-[var(--success)]/30 text-[var(--success)] px-4 py-3 rounded-lg text-center font-medium">
                    {successMessage}
                  </div>
                )}
                {errorMessage && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-center font-medium">
                    {errorMessage}
                  </div>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
