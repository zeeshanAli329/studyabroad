'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
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

/* ============================================================
   Reveal — shared scroll-triggered fade + slide-up wrapper
   ============================================================ */
function Reveal({ children, delay = 0, y = 24, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ============================================================
   1. HERO / BREADCRUMB
   ============================================================ */
function HeroBreadcrumb() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(15,58,45,0.92), rgba(15,58,45,0.75)), url('https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/breadcrumb.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <Reveal>
          <h1 className="text-white text-4xl sm:text-5xl font-serif font-semibold tracking-tight">
            Your Journey Abroad Starts Here
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-white/90 text-lg sm:text-xl mt-4 max-w-2xl">
            RouteX helps students and travelers navigate international education, visas, scholarships, and destinations with expert guidance and personalized support.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="flex items-center gap-2 text-white/80 text-sm mt-6">
            <span>RouteX</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-lime-400">About Us</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   2. WHO WE ARE
   ============================================================ */
function WhoWeAre() {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal y={30}>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/choose-us-left-img.png"
              alt="Students studying abroad"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div className="flex items-center gap-2 text-lime-600 font-semibold text-sm uppercase tracking-wide">
              <ShieldCheck className="w-4 h-4" />
              Who We Are
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="font-serif text-emerald-900 text-3xl sm:text-4xl font-semibold mt-4 leading-tight">
              Your Trusted Partner in
              <br className="hidden sm:block" /> International Education
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-gray-500 mt-5 leading-relaxed">
              RouteX is a leading study abroad consultancy dedicated to helping students achieve their dreams of international education. With over 15 years of experience, we have successfully guided thousands of students to universities across the globe. Our team of expert counselors provides personalized guidance for university selection, application processes, visa assistance, and scholarship opportunities.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p className="text-gray-500 mt-4 leading-relaxed">
              We believe that every student deserves access to quality education regardless of geographical boundaries. Our mission is to simplify the complex process of studying abroad, making it accessible, transparent, and stress-free for students and their families.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3. WHY CHOOSE ROUTEX
   ============================================================ */
function WhyChooseRouteX() {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Expert Guidance",
      description: "Our certified counselors have years of experience in international education and visa processes."
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: "Global Network",
      description: "Partnerships with 500+ universities across 30+ countries worldwide."
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for students and parents throughout the journey."
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "High Success Rate",
      description: "95% visa approval rate and 98% university acceptance rate."
    }
  ];

  return (
    <section className="bg-[#fafbf9] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-14">
          <Reveal>
            <div className="flex items-center justify-center gap-2 text-lime-600 font-semibold text-sm uppercase tracking-wide">
              <ShieldCheck className="w-4 h-4" />
              Why Choose RouteX
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-emerald-900 text-3xl sm:text-4xl font-semibold mt-4 leading-tight">
              What Sets Us Apart
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 100} y={20}>
              <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-lg bg-emerald-900 flex items-center justify-center mb-4">
                  <span className="text-lime-400">{feature.icon}</span>
                </div>
                <h3 className="font-serif font-semibold text-emerald-900 text-lg mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   4. MISSION & VISION
   ============================================================ */
function MissionVision() {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <Reveal y={30}>
          <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-2xl p-8 text-white">
            <h3 className="font-serif text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-white/90 leading-relaxed">
              To empower students worldwide by providing comprehensive guidance and support for international education. We strive to make studying abroad accessible, affordable, and achievable for every aspiring student, regardless of their background or financial circumstances.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150} y={30}>
          <div className="bg-gradient-to-br from-lime-500 to-lime-600 rounded-2xl p-8 text-white">
            <h3 className="font-serif text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-white/90 leading-relaxed">
              To become the world's most trusted and innovative study abroad consultancy, recognized for our commitment to student success, ethical practices, and transformative impact on global education accessibility.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   5. HOW WE HELP STUDENTS
   ============================================================ */
function HowWeHelp() {
  const services = [
    {
      title: "University Selection",
      description: "Personalized recommendations based on your academic profile, career goals, and budget."
    },
    {
      title: "Application Support",
      description: "Complete guidance on application forms, essays, and documentation requirements."
    },
    {
      title: "Visa Assistance",
      description: "Expert help with visa applications, interviews, and documentation."
    },
    {
      title: "Scholarship Guidance",
      description: "Information and application support for scholarships and financial aid."
    },
    {
      title: "Pre-Departure Briefing",
      description: "Comprehensive preparation for life in your new country."
    },
    {
      title: "Post-Arrival Support",
      description: "Ongoing assistance even after you reach your destination."
    }
  ];

  return (
    <section className="bg-[#eef2e9] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-14">
          <Reveal>
            <div className="flex items-center justify-center gap-2 text-lime-600 font-semibold text-sm uppercase tracking-wide">
              <ShieldCheck className="w-4 h-4" />
              How We Help Students
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-emerald-900 text-3xl sm:text-4xl font-semibold mt-4 leading-tight">
              Comprehensive Support at Every Step
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80} y={20}>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-10 h-10 rounded-full bg-lime-500 flex items-center justify-center mb-4">
                  <span className="text-white font-semibold">{i + 1}</span>
                </div>
                <h3 className="font-serif font-semibold text-emerald-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   6. SIMPLE PROCESS
   ============================================================ */
export function SimpleProcess() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      description: "Explore universities, programs, and destinations that match your goals and interests."
    },
    {
      num: "02",
      title: "Plan",
      description: "Work with our counselors to create a personalized roadmap for your application journey."
    },
    {
      num: "03",
      title: "Apply",
      description: "Submit applications with our expert guidance on essays, documents, and deadlines."
    },
    {
      num: "04",
      title: "Travel",
      description: "Receive visa support, pre-departure briefing, and assistance to begin your journey."
    }
  ];

  return (
    <section
      className="relative w-full overflow-hidden bg-[#fafbf9]"
      style={{
        backgroundImage:
          "url('https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/process-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24 text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-2 text-lime-600 font-semibold text-sm uppercase tracking-wide">
            <ShieldCheck className="w-4 h-4" />
            Our Process
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-serif text-emerald-900 text-3xl sm:text-4xl font-semibold mt-4 leading-tight max-w-2xl mx-auto">
            Your Journey in Four Simple Steps
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 text-left">
          {steps.map((step, i) => (
            <Reveal
              key={step.num}
              delay={200 + i * 100}
              y={30}
            >
              <div className="bg-white rounded-2xl shadow-md p-6 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <span className="block font-serif text-4xl font-bold text-emerald-900 mb-4">
                  {step.num}
                </span>
                <h3 className="font-serif font-semibold text-emerald-900 text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   7. STATISTICS
   ============================================================ */
function Statistics() {
  const stats = [
    { value: "15,000+", label: "Students Placed" },
    { value: "500+", label: "Partner Universities" },
    { value: "30+", label: "Countries" },
    { value: "95%", label: "Visa Success Rate" },
    { value: "98%", label: "University Acceptance" },
    { value: "15+", label: "Years Experience" }
  ];

  return (
    <section className="bg-emerald-900 rounded-3xl py-16 sm:py-20 mx-4 lg:mx-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-12">
          <Reveal>
            <h2 className="font-serif text-white text-3xl sm:text-4xl font-semibold leading-tight">
              Our Impact in Numbers
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80} y={20}>
              <div className="text-center">
                <div className="font-serif text-3xl sm:text-4xl font-bold text-lime-400">
                  {stat.value}
                </div>
                <div className="text-sm mt-2 text-white/80">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   8. TESTIMONIALS
   ============================================================ */
function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "MSc Computer Science, UK",
      content: "RouteX made my dream of studying in the UK a reality. Their guidance on university selection and visa application was invaluable. I'm now pursuing my master's at a top university!",
      rating: 5
    },
    {
      name: "Michael Johnson",
      role: "MBA, Australia",
      content: "The team at RouteX supported me throughout the entire process. From scholarship applications to visa interviews, they were there every step of the way. Highly recommended!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "BSc Nursing, Canada",
      content: "I was overwhelmed by the study abroad process, but RouteX simplified everything. Their counselors are knowledgeable, patient, and truly care about students' success.",
      rating: 5
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
      <div className="text-center mb-14">
        <Reveal>
          <div className="flex items-center justify-center gap-2 text-lime-600 font-semibold text-sm uppercase tracking-wide">
            <ShieldCheck className="w-4 h-4" />
            Testimonials
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-serif text-emerald-900 text-3xl sm:text-4xl font-semibold mt-4 leading-tight">
            What Our Students Say
          </h2>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, i) => (
          <Reveal key={testimonial.name} delay={i * 100} y={20}>
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <span key={j} className="text-lime-500">★</span>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              <div className="border-t border-gray-100 pt-4">
                <h4 className="font-serif font-semibold text-emerald-900">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   9. CTA SECTION
   ============================================================ */
function CTASection() {
  return (
    <section className="bg-gradient-to-r from-emerald-900 to-emerald-800 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 text-center">
        <Reveal>
          <h2 className="font-serif text-white text-3xl sm:text-4xl font-semibold leading-tight mb-6">
            Ready to Start Your Journey?
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Take the first step towards your international education dreams. Our expert counselors are here to guide you every step of the way.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-white font-medium px-8 py-4 rounded-full transition-colors duration-300"
            >
              Start Your Journey <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-medium px-8 py-4 rounded-full hover:bg-white hover:text-emerald-900 transition-colors duration-300"
            >
              Book Appointment
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   4. OFFERS + STATS + BRANDS
   ============================================================ */
function OffersStatsBrands() {
  const stats = [
    { value: "10k+", label: "Complete project" },
    { value: "20+", label: "Team member" },
    { value: "5k+", label: "Winning award" },
    { value: "100+", label: "Complete project" },
  ];

  const brands = [
    "https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/home2-companey-brands-img-1.png",
    "https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/home2-companey-brands-img-2.png",
    "https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/home2-companey-brands-img-3.png",
    "https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/home2-companey-brands-img-4.png",
    "https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/home2-companey-brands-img-5.png",
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left photo */}
        <Reveal y={30}>
          <div className="rounded-2xl overflow-hidden shadow-lg max-w-md mx-auto lg:mx-0">
            <img
              src="https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/faq-info-img.png"
              alt="Traveler holding passport"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>

        {/* Right copy + graphic */}
        <div className="flex flex-col sm:flex-row items-start gap-8">
          <Reveal delay={150} className="flex-1">
            <div className="w-12 h-12 rounded-full bg-lime-500 flex items-center justify-center mb-4">
              <Globe2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-serif text-emerald-900 text-2xl font-semibold mb-3">
              Get our best offers quickly
            </h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              Lorem Ipsum is simply dummy text the printing and typese
              <br />
              Lorem Ipsum has been the industry's standard dummy
            </p>
            <button className="inline-flex items-center gap-2 border border-emerald-900 text-emerald-900 font-medium px-6 py-3 rounded-full hover:bg-emerald-900 hover:text-white transition-colors duration-300">
              Contact us <ArrowRight className="w-4 h-4" />
            </button>
          </Reveal>

          <Reveal delay={300} y={30} className="hidden sm:block flex-shrink-0">
            <img
              src="https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/faq-left-img.png"
              alt="Passport, tickets and globe"
              className="w-44 lg:w-52 object-contain"
            />
          </Reveal>
        </div>
      </div>

      {/* Stats bar */}
      <Reveal delay={200} y={30} className="mt-10 sm:mt-14">
        <div className="bg-lime-500 rounded-2xl px-6 sm:px-12 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8 text-white shadow-lg">
          {stats.map((stat) => (
            <div key={stat.label + stat.value} className="text-center sm:text-left">
              <div className="font-serif text-3xl sm:text-4xl font-bold">
                {stat.value}
              </div>
              <div className="text-sm mt-1 text-white/90">{stat.label}</div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Brand logos */}
      <Reveal delay={100} className="mt-14 sm:mt-20">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-x-10 gap-y-6 opacity-80">
          {brands.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Brand logo"
              className="h-6 sm:h-7 object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ============================================================
   5. CONTACT SECTION
   ============================================================ */
function ContactSection() {
  return (
    <section className="w-full bg-[#eef2e9]">
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
              <div className="flex items-center gap-2 text-lime-600 font-semibold text-sm uppercase tracking-wide">
                <ChevronRight className="w-4 h-4 rotate-180" />
                Contact Information
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="font-serif text-emerald-900 text-3xl sm:text-4xl font-semibold mt-4 mb-8 leading-tight">
                Let Your Wanderlust
                <br /> Guide You
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-gray-500 mb-2">
                      Your Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full border border-gray-200 rounded-full px-5 py-3 pr-11 text-sm outline-none focus:border-lime-500 transition-colors"
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
                        placeholder="Your Phone"
                        className="w-full border border-gray-200 rounded-full px-5 py-3 pr-11 text-sm outline-none focus:border-lime-500 transition-colors"
                      />
                      <Phone className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-500 mb-2">
                    Your Address
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Your Address"
                      className="w-full border border-gray-200 rounded-full px-5 py-3 pr-11 text-sm outline-none focus:border-lime-500 transition-colors"
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
                      placeholder="Write Message.."
                      rows={4}
                      className="w-full border border-gray-200 rounded-2xl px-5 py-3 pr-11 text-sm outline-none focus:border-lime-500 transition-colors resize-none"
                    />
                    <Mail className="w-4 h-4 text-gray-400 absolute right-4 top-4" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-lime-500 hover:bg-lime-600 text-white font-medium rounded-full py-3.5 flex items-center justify-center gap-2 transition-colors duration-300"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   6. COUNTRIES CATEGORY
   ============================================================ */
function CountriesCategory() {
  const regions = [
    "Asia",
    "Europe",
    "North America",
    "Australia",
    "Latine America",
    "Africa",
  ];

  const countries = [
    { name: "Australia", flag: "australia.png" },
    { name: "Bahamas", flag: "bahamas.png" },
    { name: "Belize", flag: "belize.png" },
    { name: "Brazil", flag: "brazil.png" },
    { name: "Peru", flag: "peru.png" },
    { name: "Colombia", flag: "colombia.png" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
      <div className="text-center mb-14">
        <Reveal>
          <div className="flex items-center justify-center gap-2 text-lime-600 font-semibold text-sm uppercase tracking-wide">
            <ChevronRight className="w-4 h-4 rotate-180" />
            Countries Category
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-serif text-emerald-900 text-3xl sm:text-4xl font-semibold mt-4 leading-tight">
            Experience the World
            <br /> Anew Unveil Hidden
          </h2>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Region sidebar */}
        <Reveal y={30} className="lg:col-span-1">
          <div className="border border-gray-200 rounded-2xl divide-y divide-gray-100 overflow-hidden">
            {regions.map((region, i) => (
              <button
                key={region}
                className={`w-full flex items-center justify-between px-5 py-4 text-sm transition-colors duration-200 ${
                  i === 0
                    ? "text-emerald-900 font-semibold bg-gray-50"
                    : "text-gray-400 hover:text-emerald-900 hover:bg-gray-50"
                }`}
              >
                {region}
                <ChevronRight className="w-4 h-4" />
              </button>
            ))}
          </div>
        </Reveal>

        {/* Country grid */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {countries.map((country, i) => (
            <Reveal key={country.name} delay={i * 100} y={20}>
              <div className="border border-gray-200 rounded-xl px-5 py-4 flex items-center gap-4 hover:shadow-md hover:border-lime-300 transition-all duration-300">
                <img
                  src={`https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/${country.flag}`}
                  alt={`${country.name} flag`}
                  className="w-11 h-11 rounded-full object-cover flex-shrink-0"
                />
                <span className="font-serif font-semibold text-emerald-900">
                  {country.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PAGE ROOT
   ============================================================ */
export default function RouteXAboutPage() {
  return (
    <div className="w-full bg-white font-sans">
      <HeroBreadcrumb />
      <WhoWeAre />
      <WhyChooseRouteX />
      <MissionVision />
      <HowWeHelp />
      <SimpleProcess />
      <Statistics />
      <Testimonials />
      <CTASection />

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 18s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-spin-slow { animation: none; }
        }
      `}</style>
    </div>
  );
}