"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ChevronRight,
  CheckCircle2,
  GraduationCap,
  MessageCircle,
} from "lucide-react";
import { api } from "@/lib/api";

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
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      await api.submitContact(data);

      setSuccessMessage("Thank you! Your message has been sent successfully.");

      e.target.reset();
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again.");
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
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["London House:، 8-A Lawrence Road, Mozang Chungi, Lahore, 54000, Pakistan", "H85C+3X Lahore", "PAKISTAN"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Mon - Fri: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Closed",
      ],
    },
  ];

  return (
    <main className="w-full bg-white text-[var(--text-primary)]">
      {/* =====================================================
          HERO
          ===================================================== */}

      {/* <section className="relative mx-4 overflow-hidden rounded-[24px] lg:mx-8">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=2200&auto=format&fit=crop&q=85"
            alt="Free Study Abroad Consultation"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-[var(--primary-dark)]/90" />

        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-dark)]/95 via-[var(--primary-dark)]/90 to-[var(--primary-dark)]/70" />

        <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full border border-[var(--primary)]/20 lg:h-96 lg:w-96" />

        <div className="absolute -bottom-40 right-20 h-80 w-80 rounded-full border border-[var(--primary)]/15 lg:h-[430px] lg:w-[430px]" />

        <div className="relative mx-auto flex min-h-[500px] max-w-[1320px] items-center px-6 py-20 sm:px-10 lg:min-h-[540px] lg:px-12">
          <div className="max-w-3xl">

            <div className="mb-7 inline-flex items-center rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-4 py-2">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                Free Consultation
              </span>
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[64px]">
              Get Free Study Abroad
              <br />
              <span className="text-[var(--primary)]">
                Guidance
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Not sure which country, university, or scholarship
              fits your profile? Our consultants offer a free
              initial consultation to help you identify the right
              path — based on your academics, budget, and career
              goals. Fill out the form below and our team will get
              back to you within 24 hours.
            </p>

            <div className="mt-7 flex items-center gap-3 text-xs">
              <Link
                href="/"
                className="text-white/55 transition-colors hover:text-white"
              >
                Studyabroad
              </Link>

              <ChevronRight className="h-3.5 w-3.5 text-white/40" />

              <span className="text-[var(--primary)]">
                Contact Us
              </span>
            </div>
          </div>
        </div>
      </section> */}
      <section className="relative mx-4 overflow-hidden rounded-[24px] bg-[var(--primary-dark)] lg:mx-8">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/contact-bg.jpg"
            alt="Study Abroad Contact"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[var(--primary-dark)]/60" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-dark)] via-[var(--primary-dark)]/40 to-[var(--primary-dark)]/50" />

        {/* Decorative Circles */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[var(--primary)]/20 sm:h-96 sm:w-96" />

        <div className="absolute -bottom-40 right-10 h-80 w-80 rounded-full border border-[var(--primary)]/15 sm:right-24 lg:h-[440px] lg:w-[440px]" />

        <div className="absolute right-[15%] top-[25%] hidden h-2 w-2 rounded-full bg-[var(--primary)]/60 lg:block" />

        <div className="absolute right-[25%] bottom-[25%] hidden h-1.5 w-1.5 rounded-full bg-[var(--primary)]/40 lg:block" />

        {/* Content */}
        <div className="relative mx-auto flex min-h-[470px] max-w-[1320px] items-center px-6 py-20 sm:min-h-[500px] sm:px-10 lg:min-h-[540px] lg:px-12">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] shadow-[0_0_10px_var(--primary)]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--primary)] sm:text-[11px]">
                Free Consultation
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[64px]">
              Get Free Study Abroad
              <br />
              <span className="text-[var(--primary)]">Guidance</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:mt-7 sm:text-base sm:leading-8 lg:text-lg">
              Not sure which country, university, or scholarship fits your
              profile? Our consultants offer a free initial consultation to help
              you identify the right path — based on your academics, budget, and
              career goals.
            </p>

            {/* Breadcrumb */}
            <div className="mt-7 flex items-center gap-3 text-xs">
              <Link
                href="/"
                className="text-white/50 transition-colors duration-300 hover:text-white"
              >
                Studyabroad
              </Link>

              <ChevronRight className="h-3.5 w-3.5 text-white/30" />

              <span className="text-[var(--primary)]">Contact Us</span>
            </div>
          </div>
        </div>
      </section>

    
      {/* =====================================================
          CONTACT INFORMATION
          ===================================================== */}

      <section className="bg-[var(--background-light)] py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-10 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
              Contact Information
            </span>

            <h2 className="mt-3 font-serif text-3xl font-semibold text-[var(--secondary)] sm:text-4xl">
              We&apos;re Here to Help
            </h2>

            <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
              Have questions about scholarships, free education, student visas
              or studying abroad? Reach out to our team.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;

              return (
                <div
                  key={index}
                  className="
                    group relative overflow-hidden
                    rounded-[18px]
                    border border-[var(--border)]
                    bg-white
                    p-7
                    shadow-[0_4px_20px_rgba(0,0,0,0.035)]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[var(--primary)]/40
                    hover:shadow-[0_14px_35px_rgba(0,0,0,0.08)]
                  "
                >
                  {/* Small top accent */}
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-[var(--primary)] transition-all duration-300 group-hover:w-full" />

                  {/* Outline Icon */}
                  <div
                    className="
                      mb-6
                      flex h-12 w-12
                      items-center justify-center
                      rounded-xl
                      border border-[var(--border)]
                      bg-[var(--background-light)]
                      transition-all duration-300
                      group-hover:border-[var(--primary)]/50
                      group-hover:bg-[var(--primary)]/5
                    "
                  >
                    <Icon
                      className="h-[19px] w-[19px] text-[var(--secondary)] transition-colors duration-300 group-hover:text-[var(--primary)]"
                      strokeWidth={1.6}
                    />
                  </div>

                  <h3 className="font-serif text-[19px] font-semibold text-[var(--secondary)]">
                    {info.title}
                  </h3>

                  <div className="mt-4 space-y-1.5">
                    {info.details.map((detail, i) => (
                      <p
                        key={i}
                        className="text-[13px] leading-6 text-[var(--text-secondary)]"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FORM + MAP + QUICK LINKS
          ===================================================== */}

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-10 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            {/* =================================================
                FORM
                ================================================= */}

            <div className="rounded-[24px] border border-[var(--border)] bg-white p-6 shadow-[0_15px_50px_rgba(0,0,0,0.06)] sm:p-8 lg:p-10">
              <div className="mb-8">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                  Start Your Journey
                </span>

                <h2 className="mt-3 font-serif text-3xl font-semibold text-[var(--secondary)]">
                  Book Your Free Consultation
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--text-secondary)]">
                  Fill out the form below and our team will get back to you
                  within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--background-light)] px-4 py-3.5 text-sm text-[var(--text-primary)] outline-none transition-all placeholder:text-gray-400 focus:border-[var(--primary)] focus:bg-white focus:ring-4 focus:ring-[var(--primary)]/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                      Email Address *
                    </label>

                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--background-light)] px-4 py-3.5 text-sm text-[var(--text-primary)] outline-none transition-all placeholder:text-gray-400 focus:border-[var(--primary)] focus:bg-white focus:ring-4 focus:ring-[var(--primary)]/10"
                    />
                  </div>
                </div>

                {/* Phone + Subject */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="+92 XXX XXXXXXX"
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--background-light)] px-4 py-3.5 text-sm text-[var(--text-primary)] outline-none transition-all placeholder:text-gray-400 focus:border-[var(--primary)] focus:bg-white focus:ring-4 focus:ring-[var(--primary)]/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                      Subject *
                    </label>

                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="How can we help?"
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--background-light)] px-4 py-3.5 text-sm text-[var(--text-primary)] outline-none transition-all placeholder:text-gray-400 focus:border-[var(--primary)] focus:bg-white focus:ring-4 focus:ring-[var(--primary)]/10"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                    Message *
                  </label>

                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us about your study abroad goals..."
                    className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--background-light)] px-4 py-3.5 text-sm text-[var(--text-primary)] outline-none transition-all placeholder:text-gray-400 focus:border-[var(--primary)] focus:bg-white focus:ring-4 focus:ring-[var(--primary)]/10"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="
                    group flex w-full items-center justify-center gap-2
                    rounded-xl
                    bg-[var(--primary)]
                    px-6 py-4
                    font-semibold text-white
                    shadow-lg shadow-[var(--primary)]/20
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:bg-[var(--primary-dark)]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {submitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Book Your Free Consultation
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                {/* Success */}
                {successMessage && (
                  <div className="flex items-center gap-3 rounded-xl border border-[var(--success)]/30 bg-[var(--success)]/10 px-4 py-4 text-sm font-medium text-[var(--success)]">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <span>{successMessage}</span>
                  </div>
                )}

                {/* Error */}
                {errorMessage && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-center text-sm font-medium text-red-700">
                    {errorMessage}
                  </div>
                )}
              </form>
            </div>

            {/* =================================================
                RIGHT SIDE
                ================================================= */}

            <div className="space-y-6">
              {/* =================================================
                  REAL MAP
                  ================================================= */}

              <div className="relative overflow-hidden rounded-[24px] border border-[var(--border)] bg-white shadow-[0_10px_35px_rgba(0,0,0,0.06)]">
                <div className="relative h-[330px] w-full">
                  {/* <iframe
                    title="London House:، 8-A Lawrence Road, Mozang Chungi, Lahore, 54000, Pakistan"
                    src="https://www.google.com/maps/place/UNI-GUIDE+Consultancy+Services+Pvt.+Ltd./@31.5577007,74.3198984,17z/data=!3m1!4b1!4m6!3m5!1s0x391904ad0d1e3b7d:0xbef65ea33032c594!8m2!3d31.5576962!4d74.3224733!16s%2Fg%2F11c6y_w182?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D"
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  /> */}
                  <div className="relative h-[350px] overflow-hidden rounded-[24px] border border-[var(--border)] shadow-sm">
                    <iframe
                      title="UNI-GUIDE Consultancy Services"
                      src="https://maps.google.com/maps?q=UNI-GUIDE%20Consultancy%20Services%20Pvt.%20Ltd,%20Lahore&t=&z=16&ie=UTF8&iwloc=&output=embed"
                      className="absolute inset-0 h-full w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-cross-origin"
                    />
                  </div>
                </div>

                {/* Address underneath map */}
                <div className="flex items-start gap-4 border-t border-[var(--border)] bg-white p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background-light)]">
                    <MapPin
                      className="h-[19px] w-[19px] text-[var(--secondary)]"
                      strokeWidth={1.6}
                    />
                  </div>

                  <div>
                    <p className="font-serif text-lg font-semibold text-[var(--secondary)]">
                      London House:، 8-A Lawrence Road, Mozang Chungi, Lahore,
                      54000, Pakistan
                    </p>

                    <p className="mt-1 text-sm text-[var(--text-secondary)]">
                      H85C+3X Lahore
                    </p>

                    <p className="text-sm text-[var(--text-secondary)]">
                      Pakistan
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  QUICK LINKS
                  ================================================= */}

              <div className="rounded-[24px] border border-[var(--border)] bg-white p-7 shadow-[0_10px_35px_rgba(0,0,0,0.04)]">
                <div className="mb-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                    Explore
                  </span>

                  <h3 className="mt-2 font-serif text-xl font-semibold text-[var(--secondary)]">
                    Quick Links
                  </h3>
                </div>

                <div className="divide-y divide-[var(--border)]">
                  <Link
                    href="/appointment"
                    className="group flex items-center justify-between py-4 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--primary)]"
                  >
                    <span>Book an Appointment</span>

                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/scholarships"
                    className="group flex items-center justify-between py-4 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--primary)]"
                  >
                    <span>Explore Scholarships</span>

                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/visa"
                    className="group flex items-center justify-between py-4 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--primary)]"
                  >
                    <span>Visa Information</span>

                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/about"
                    className="group flex items-center justify-between py-4 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--primary)]"
                  >
                    <span>About StudyAbroad</span>

                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
