"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
  ArrowRight,
  ChevronRight,
  GraduationCap,
  MapPin,
  Globe2,
  BookOpen,
  Building2,
  CheckCircle,
  Users,
  BriefcaseBusiness,
  Plane,
  Clock,
  DollarSign,
  ShieldCheck,
} from "lucide-react";

import { api } from "@/lib/api";
import homeImages from "@/config/homeImages";
import Reveal from "@/components/shared/Reveal";

export default function DestinationDetailPage() {
  const params = useParams();

  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (params?.slug) {
      fetchDestination();
    }
  }, [params?.slug]);

  const fetchDestination = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await api.getDestinationBySlug(params.slug);

      setDestination(data);
    } catch (err) {
      console.error("Failed to load destination:", err);
      setError("Failed to load destination information.");
    } finally {
      setLoading(false);
    }
  };

  /* ---------------------------------------------
     Loading
  --------------------------------------------- */

  if (loading) {
    return (
      <main className="min-h-screen pt-24">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="h-12 w-12 rounded-full border-4 border-gray-200 border-t-[var(--primary)] animate-spin" />

            <p className="mt-5 text-[var(--text-secondary)]">
              Loading destination...
            </p>
          </div>
        </div>
      </main>
    );
  }

  /* ---------------------------------------------
     Error / Not Found
  --------------------------------------------- */

  if (error || !destination) {
    return (
      <main className="min-h-screen pt-24">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-red-50 flex items-center justify-center">
              <Globe2 className="w-8 h-8 text-red-500" />
            </div>

            <h1 className="font-serif text-3xl font-semibold text-[var(--text-primary)]">
              Destination Not Found
            </h1>

            <p className="mt-3 text-[var(--text-secondary)]">
              {error ||
                "We couldn't find the destination you're looking for."}
            </p>

            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-[var(--primary)] text-white font-medium hover:bg-[var(--primary-dark)] transition-colors"
            >
              <ChevronRight className="w-4 h-4 rotate-180" />
              Back to Destinations
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const country = destination.country;

  const universities = destination.universities || [];
  const courses = destination.courses || [];
  const benefits = destination.benefits || [];

  const destinationImage =
    destination.image || homeImages.destinationFallback;

  /* ---------------------------------------------
     Default benefits
     Used only when database does not provide them.
  --------------------------------------------- */

  const defaultBenefits = [
    {
      title: "Quality Education",
      description:
        "Access excellent educational institutions and internationally recognized academic programs.",
      icon: GraduationCap,
    },
    {
      title: "Global Opportunities",
      description:
        "Build an international profile and gain valuable experience in a global academic environment.",
      icon: Globe2,
    },
    {
      title: "Career Development",
      description:
        "Develop practical skills and explore opportunities to build your future career.",
      icon: BriefcaseBusiness,
    },
    {
      title: "International Community",
      description:
        "Meet students from different backgrounds and become part of a diverse global community.",
      icon: Users,
    },
    {
      title: "Student Experience",
      description:
        "Enjoy a rewarding student lifestyle while discovering a new culture and environment.",
      icon: BookOpen,
    },
    {
      title: "Professional Guidance",
      description:
        "Get guidance throughout your study abroad journey, from choosing a destination to applying.",
      icon: ShieldCheck,
    },
  ];

  const benefitItems =
    benefits.length > 0
      ? benefits.map((benefit) => ({
          ...benefit,
          icon: CheckCircle,
        }))
      : defaultBenefits;

  return (
    <main className="min-h-screen bg-white">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden">
        <div className="relative min-h-[520px] lg:min-h-[600px]">
          <Image
            src={destinationImage}
            alt={destination.name}
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-dark)]/95 via-[var(--primary-dark)]/80 to-[var(--primary-dark)]/35" />

          <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-8 py-20 lg:py-28">
            {/* Breadcrumb */}
            <Reveal>
              <div className="flex flex-wrap items-center gap-2 text-sm mb-8">
                <Link
                  href="/"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Home
                </Link>

                <ChevronRight className="w-4 h-4 text-white/50" />

                <Link
                  href="/destinations"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Destinations
                </Link>

                <ChevronRight className="w-4 h-4 text-white/50" />

                <span className="text-[var(--primary)] font-medium">
                  {destination.name}
                </span>
              </div>
            </Reveal>

            {/* Country */}
            {country?.name && (
              <Reveal delay={100}>
                <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
                  <MapPin className="w-4 h-4 text-[var(--primary)]" />

                  <span className="text-white/90 text-sm font-medium">
                    {country.name}
                  </span>
                </div>
              </Reveal>
            )}

            {/* Title */}
            <Reveal delay={150}>
              <h1 className="max-w-4xl font-serif text-4xl sm:text-5xl lg:text-7xl font-semibold text-white leading-[1.05]">
                Study in {destination.name}
              </h1>
            </Reveal>

            {/* Description */}
            {destination.description && (
              <Reveal delay={200}>
                <p className="max-w-2xl mt-6 text-lg lg:text-xl leading-relaxed text-white/85">
                  {destination.description}
                </p>
              </Reveal>
            )}

            {/* Buttons */}
            <Reveal delay={250}>
              <div className="flex flex-col sm:flex-row gap-4 mt-9">
                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[var(--primary)] hover:bg-[var(--primary-light)] text-white font-semibold transition-all shadow-lg"
                >
                  Book Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/universities"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-semibold transition-all"
                >
                  Explore Universities
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK INFORMATION
      ========================================================= */}

      <section className="relative z-20 -mt-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="p-6 border-b sm:border-r lg:border-b-0 border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[var(--background-light)] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[var(--primary)]" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Country
                    </p>

                    <p className="font-semibold text-[var(--primary)]">
                      {country?.name || "International"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 border-b lg:border-b-0 lg:border-r border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[var(--background-light)] flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-[var(--primary)]" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Education
                    </p>

                    <p className="font-semibold text-[var(--primary)]">
                      World Class
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 border-b sm:border-b-0 sm:border-r border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[var(--background-light)] flex items-center justify-center">
                    <Globe2 className="w-5 h-5 text-[var(--primary)]" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Experience
                    </p>

                    <p className="font-semibold text-[var(--primary)]">
                      International
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[var(--background-light)] flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-[var(--primary)]" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Study
                    </p>

                    <p className="font-semibold text-[var(--primary)]">
                      Multiple Options
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          OVERVIEW
      ========================================================= */}

      <section className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div>
              <div className="flex items-center gap-2 text-[var(--primary)] font-semibold text-sm uppercase tracking-wider mb-4">
                <Globe2 className="w-4 h-4" />
                Destination Overview
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--primary)] leading-tight">
                Your journey starts in{" "}
                <span className="text-[var(--primary)]">
                  {destination.name}
                </span>
              </h2>

              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {destination.description ||
                    `Discover study opportunities in ${destination.name} and take the next step toward your international education goals.`}
                </p>

                {destination.overview && (
                  <p>{destination.overview}</p>
                )}
              </div>

              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 mt-8 text-[var(--primary)] font-semibold hover:gap-3 transition-all"
              >
                Get expert guidance
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-4 bg-[var(--background-light)] rounded-3xl -z-10 rotate-2" />

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                {/* <Image
                  src={destinationImage}
                  alt={`${destination.name} destination`}
                  fill
                  className="object-cover"
                /> */}
            <img
  src={destinationImage}
  alt={`${destination.name} destination`}
  className="w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[320px] xl:h-[380px] object-cover"
/>
            
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          WHY STUDY HERE
      ========================================================= */}

      <section className="bg-[var(--background-light)] py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="flex justify-center items-center gap-2 text-[var(--primary)] font-semibold text-sm uppercase tracking-wider mb-4">
                <ShieldCheck className="w-4 h-4" />
                Why Choose {destination.name}
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--primary)]">
                Everything you need for your next chapter
              </h2>

              <p className="mt-5 text-gray-600 leading-relaxed">
                Explore the advantages of choosing {destination.name} for
                your international education journey.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefitItems.map((benefit, index) => {
              const Icon = benefit.icon || CheckCircle;

              return (
                <Reveal key={index} delay={index * 80}>
                  <div className="h-full bg-white rounded-2xl border border-gray-100 p-7 shadow-sm hover:shadow-lg transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-[var(--background-light)] flex items-center justify-center mb-5 group-hover:bg-[var(--primary)] transition-colors">
                      <Icon className="w-6 h-6 text-[var(--primary)] group-hover:text-white transition-colors" />
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-[var(--primary)] mb-3">
                      {benefit.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description ||
                        benefit.desc ||
                        "Discover valuable opportunities and experiences as an international student."}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          STUDY OPTIONS
      ========================================================= */}

      {(courses.length > 0 || destination.studyOptions?.length > 0) && (
        <section className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <Reveal>
            <div className="mb-12">
              <div className="flex items-center gap-2 text-[var(--primary)] font-semibold text-sm uppercase tracking-wider mb-4">
                <BookOpen className="w-4 h-4" />
                Study Options
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--primary)]">
                Find the right program for you
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(courses.length > 0
              ? courses
              : destination.studyOptions
            ).map((course, index) => (
              <Reveal key={course.id || index} delay={index * 80}>
                <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl bg-[var(--background-light)] flex items-center justify-center mb-5">
                    <GraduationCap className="w-5 h-5 text-[var(--primary)]" />
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-[var(--primary)] mb-2">
                    {course.name || course.title}
                  </h3>

                  {(course.description || course.desc) && (
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {course.description || course.desc}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* =========================================================
          UNIVERSITIES
      ========================================================= */}

      {universities.length > 0 && (
        <section className="bg-[var(--background-light)] py-20 lg:py-28">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12">
              <Reveal>
                <div>
                  <div className="flex items-center gap-2 text-[var(--primary)] font-semibold text-sm uppercase tracking-wider mb-3">
                    <Building2 className="w-4 h-4" />
                    Education
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[var(--primary)]">
                    Universities in {destination.name}
                  </h2>
                </div>
              </Reveal>

              <Link
                href="/universities"
                className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:gap-3 transition-all"
              >
                View all universities
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {universities.slice(0, 6).map((university, index) => (
                <Reveal key={university.id || index} delay={index * 80}>
                  <Link
                    href={`/universities/${university.slug}`}
                    className="group block h-full"
                  >
                    <div className="h-full bg-white rounded-2xl border border-gray-100 p-6 shadow-sm group-hover:shadow-lg transition-all">
                      <div className="w-12 h-12 rounded-xl bg-[var(--background-light)] flex items-center justify-center mb-5">
                        <GraduationCap className="w-6 h-6 text-[var(--primary)]" />
                      </div>

                      <h3 className="font-serif text-xl font-semibold text-[var(--primary)] group-hover:text-[var(--primary)] transition-colors">
                        {university.name}
                      </h3>

                      {university.location && (
                        <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
                          <MapPin className="w-4 h-4" />
                          {university.location}
                        </div>
                      )}

                      <div className="flex items-center gap-2 mt-5 text-[var(--primary)] font-medium text-sm">
                        View university
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          APPLICATION JOURNEY
      ========================================================= */}

      <section className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex justify-center items-center gap-2 text-[var(--primary)] font-semibold text-sm uppercase tracking-wider mb-4">
              <Plane className="w-4 h-4" />
              Your Journey
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--primary)]">
              From planning to studying abroad
            </h2>

            <p className="mt-5 text-gray-600">
              We can help you navigate every important step of your
              international education journey.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              number: "01",
              title: "Choose Your Destination",
              description:
                "Explore your options and find the destination that matches your academic goals.",
            },
            {
              number: "02",
              title: "Select Your University",
              description:
                "Compare institutions and find a program that fits your ambitions.",
            },
            {
              number: "03",
              title: "Prepare Your Application",
              description:
                "Get support with documents, applications and the admission process.",
            },
            {
              number: "04",
              title: "Start Your Journey",
              description:
                "Prepare for your move and begin your international student experience.",
            },
          ].map((step, index) => (
            <Reveal key={step.number} delay={index * 80}>
              <div className="relative">
                <div className="text-5xl font-serif font-semibold text-[var(--primary-light)]">
                  {step.number}
                </div>

                <h3 className="font-serif text-xl font-semibold text-[var(--primary)] mt-3 mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="px-4 lg:px-8 pb-16 lg:pb-24">
        <Reveal>
          <div className="relative overflow-hidden max-w-[1320px] mx-auto rounded-3xl bg-[var(--primary)]">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[var(--primary)]/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-[var(--primary)]/10 blur-3xl" />

            <div className="relative z-10 px-6 sm:px-12 lg:px-20 py-16 lg:py-20">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 text-[var(--primary)] font-semibold text-sm uppercase tracking-wider mb-5">
                  <GraduationCap className="w-4 h-4" />
                  Start Your Journey
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                  Ready to study in {destination.name}?
                </h2>

                <p className="mt-5 text-white/70 text-lg leading-relaxed max-w-2xl">
                  Let our experienced counselors help you choose the right
                  university, prepare your application and take the next step
                  toward your international education goals.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Link
                    href="/appointment"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[var(--primary)] hover:bg-[var(--primary-light)] text-white font-semibold transition-colors"
                  >
                    Book a Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white hover:bg-white/10 font-semibold transition-colors"
                  >
                    Contact Us
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}