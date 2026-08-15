"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ChevronRight,
  GraduationCap,
  MapPin,
  DollarSign,
  Clock,
  ShieldCheck,
  Globe2,
  Users,
  CheckCircle,
  ArrowUpRight,
  BookOpen,
  Plane,
  Award,
  Building2,
  Sparkles,
} from "lucide-react";
import { api } from "@/lib/api";

export default function CountryDetailPage() {
  const params = useParams();

  const [country, setCountry] = useState(null);
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (params.slug) {
      fetchCountryData();
    }
  }, [params.slug]);

  const fetchCountryData = async () => {
    try {
      setLoading(true);

      const [countryData, universitiesData] = await Promise.all([
        api.getCountryBySlug(params.slug),
        api.getUniversities({ country: params.slug }),
      ]);

      setCountry(countryData);
      setUniversities(universitiesData || []);
      setError(null);
    } catch (err) {
      setError("Failed to load country information");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getCountryImage = () => {
    if (country?.image) return country.image;

    const images = {
      USA:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1600&h=1000&fit=crop",
      "United States":
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1600&h=1000&fit=crop",
      UK:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&h=1000&fit=crop",
      "United Kingdom":
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&h=1000&fit=crop",
      Canada:
        "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1600&h=1000&fit=crop",
      Australia:
        "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1600&h=1000&fit=crop",
      Germany:
        "https://images.unsplash.com/photo-1580136608260-4eb11f8b2df0?w=1600&h=1000&fit=crop",
      France:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&h=1000&fit=crop",
      Japan:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1600&h=1000&fit=crop",
      "New Zealand":
        "https://images.unsplash.com/photo-1507699622177-3888a5f755f8?w=1600&h=1000&fit=crop",
      Singapore:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1600&h=1000&fit=crop",
      Netherlands:
        "https://images.unsplash.com/photo-1584467842683-76c5a1807c03?w=1600&h=1000&fit=crop",
      Sweden:
        "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=1600&h=1000&fit=crop",
      Switzerland:
        "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1600&h=1000&fit=crop",
      Ireland:
        "https://images.unsplash.com/photo-1558974476-1b80c7a46e30?w=1600&h=1000&fit=crop",
      Spain:
        "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1600&h=1000&fit=crop",
      Italy:
        "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1600&h=1000&fit=crop",
    };

    return (
      images[country?.name] ||
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&h=1000&fit=crop"
    );
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f8faf7]">
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <div className="mx-auto h-14 w-14 animate-spin rounded-full border-[3px] border-emerald-900/10 border-t-lime-500" />
            <p className="mt-5 text-sm font-medium text-gray-500">
              Loading country information...
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (error || !country) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f8faf7] px-6">
        <div className="w-full max-w-lg rounded-3xl border border-lime-500/20 bg-white p-10 text-center shadow-xl shadow-emerald-950/5">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-500/10 text-lime-600">
            <Globe2 className="h-7 w-7" />
          </div>

          <h1 className="mt-5 font-serif text-2xl font-semibold text-emerald-950">
            Country Not Found
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            {error || "We couldn't find this country."}
          </p>

          <Link
            href="/countries"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-lime-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-lime-600 hover:shadow-xl hover:shadow-lime-500/20"
          >
            Back to Countries
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    );
  }

  const countryInfo = [
    {
      icon: GraduationCap,
      label: "Top Universities",
      value: universities.length ? `${universities.length}+` : "50+",
    },
    {
      icon: DollarSign,
      label: "Tuition Range",
      value: "$10K - $50K",
    },
    {
      icon: Clock,
      label: "Visa Processing",
      value: "2 - 8 Weeks",
    },
    {
      icon: Users,
      label: "International Students",
      value: "500K+",
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: "World-Class Education",
      desc: "Study at internationally recognized universities with excellent academic and research opportunities.",
    },
    {
      icon: Globe2,
      title: "Global Recognition",
      desc: "Earn internationally respected qualifications that can open doors to global career opportunities.",
    },
    {
      icon: Users,
      title: "Multicultural Environment",
      desc: "Connect with students from around the world and experience a diverse international community.",
    },
    {
      icon: Building2,
      title: "Career Opportunities",
      desc: "Access strong career opportunities, internships and post-study pathways after graduation.",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Welcoming",
      desc: "Enjoy a welcoming environment with excellent facilities and a high standard of living.",
    },
    {
      icon: Sparkles,
      title: "Scholarship Options",
      desc: "Explore scholarships, grants and financial support designed for international students.",
    },
  ];

  const visaRequirements = [
    "Valid passport with sufficient validity",
    "Acceptance letter from a recognized institution",
    "Proof of sufficient funds",
    "English language proficiency where required",
    "Medical examination and health insurance",
    "Police clearance certificate where required",
  ];

  return (
    <main className="overflow-hidden bg-[#f8faf7] text-[var(--text-primary)]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative px-4 pt-4 sm:px-6 lg:px-8">
        <div
          className="group relative min-h-[600px] overflow-hidden rounded-[32px] bg-emerald-950"
        >
          {/* Country image */}
          <img
            src={getCountryImage()}
            alt={country.name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/85 to-emerald-950/30" />

          {/* Green fill effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-emerald-950/30" />

          {/* Green glows */}
          <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-lime-400/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-lime-400/15 blur-[120px]" />

          {/* Outline */}
          <div className="pointer-events-none absolute inset-3 rounded-[28px] border border-lime-300/20" />

          {/* Content */}
          <div className="relative z-10 flex min-h-[600px] items-center">
            <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-14">

              {/* Breadcrumb */}
              <div className="mb-8 flex flex-wrap items-center gap-2 text-sm">
                <Link
                  href="/"
                  className="text-white/60 transition-colors hover:text-lime-300"
                >
                  RouteX
                </Link>

                <ChevronRight className="h-4 w-4 text-white/30" />

                <Link
                  href="/countries"
                  className="text-white/60 transition-colors hover:text-lime-300"
                >
                  Countries
                </Link>

                <ChevronRight className="h-4 w-4 text-white/30" />

                <span className="font-medium text-lime-300">
                  {country.name}
                </span>
              </div>

              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-300/25 bg-lime-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-lime-300 backdrop-blur-md">
                <Globe2 className="h-4 w-4" />
                Study Destination
              </div>

              {/* Heading */}
              <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Study in{" "}
                <span className="text-lime-300">{country.name}</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                {country.description ||
                  `Discover world-class education, leading universities and exciting opportunities for international students in ${country.name}.`}
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/universities"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-lime-950/20 transition-all duration-300 hover:-translate-y-1 hover:bg-lime-400 hover:shadow-xl hover:shadow-lime-500/20"
                >
                  Explore Universities
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-lime-300/40 hover:bg-lime-400/15"
                >
                  Get Free Guidance
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Bottom stats */}
              <div className="mt-12 flex flex-wrap gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-md">
                  <p className="text-xs text-white/50">Destination</p>
                  <p className="mt-1 font-semibold text-white">
                    {country.name}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-md">
                  <p className="text-xs text-white/50">Universities</p>
                  <p className="mt-1 font-semibold text-white">
                    {universities.length || "50+"}
                  </p>
                </div>

                <div className="rounded-2xl border border-lime-300/20 bg-lime-400/10 px-5 py-3 backdrop-blur-md">
                  <p className="text-xs text-lime-200/60">International</p>
                  <p className="mt-1 font-semibold text-lime-200">
                    Students Welcome
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative corners */}
          <div className="pointer-events-none absolute left-7 top-7 h-12 w-12 rounded-tl-2xl border-l-2 border-t-2 border-lime-300/40" />
          <div className="pointer-events-none absolute bottom-7 right-7 h-12 w-12 rounded-br-2xl border-b-2 border-r-2 border-lime-300/40" />
        </div>
      </section>

      {/* =========================================================
          INFO CARDS
      ========================================================= */}
      <section className="relative py-16 sm:py-20">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-lime-400/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {countryInfo.map((info, index) => {
              const Icon = info.icon;

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-lime-500/15 bg-white p-6 shadow-[0_8px_35px_rgba(15,58,45,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-lime-500/40 hover:shadow-[0_20px_50px_rgba(107,181,43,0.14)]"
                >
                  {/* Filled hover background */}
                  <div className="absolute inset-0 -translate-y-full bg-gradient-to-br from-lime-500/[0.07] via-lime-500/[0.03] to-transparent transition-transform duration-700 group-hover:translate-y-0" />

                  {/* Green side line */}
                  <div className="absolute bottom-0 left-0 top-0 w-1 origin-bottom scale-y-0 rounded-full bg-lime-500 transition-transform duration-500 group-hover:scale-y-100" />

                  <div className="relative">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-lime-500/20 bg-lime-500/10 text-lime-600 transition-all duration-500 group-hover:border-lime-500 group-hover:bg-lime-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-lime-500/20">
                      <Icon className="h-6 w-6" />
                    </div>

                    <p className="text-sm text-gray-500">
                      {info.label}
                    </p>

                    <p className="mt-2 font-serif text-xl font-semibold text-emerald-950">
                      {info.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO / IMAGE
      ========================================================= */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-lime-400/10 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Image */}
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-tl-3xl border-l-2 border-t-2 border-lime-500/40" />

              <div className="group relative overflow-hidden rounded-[30px] border border-lime-500/20 bg-white p-2 shadow-[0_25px_70px_rgba(15,58,45,0.10)]">
                <img
                  src={getCountryImage()}
                  alt={`Study in ${country.name}`}
                  className="h-[420px] w-full rounded-[24px] object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                <div className="absolute inset-2 rounded-[24px] bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                    <MapPin className="h-4 w-4 text-lime-300" />
                    {country.name}
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-br-3xl border-b-2 border-r-2 border-lime-500/40" />
            </div>

            {/* Content */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime-500/20 bg-lime-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-lime-700">
                <BookOpen className="h-4 w-4" />
                Your Study Journey
              </div>

              <h2 className="font-serif text-4xl font-semibold leading-tight text-emerald-950 sm:text-5xl">
                Your future starts in{" "}
                <span className="text-lime-600">{country.name}</span>
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-600">
                {country.description ||
                  `Studying in <strong>${country.name}</strong> gives international students the opportunity to experience high-quality education, develop global connections and build a successful international career.`}
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Globally recognized qualifications",
                  "International student-friendly environment",
                  "Excellent career opportunities",
                ].map((item) => (
                  <div
                    key={item}
                    className="group flex items-center gap-4 rounded-2xl border border-lime-500/10 bg-lime-500/[0.03] p-4 transition-all duration-300 hover:border-lime-500/25 hover:bg-lime-500/[0.07]"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-lime-500/10 text-lime-600 transition-all group-hover:bg-lime-500 group-hover:text-white">
                      <CheckCircle className="h-5 w-5" />
                    </div>

                    <span className="text-sm font-semibold text-emerald-950">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY STUDY HERE
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#f4f8f1] py-20 sm:py-28">
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-lime-400/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-lime-400/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime-500/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-lime-700 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Why Choose {country.name}
            </div>

            <h2 className="font-serif text-4xl font-semibold text-emerald-950 sm:text-5xl">
              Everything you need for a better future
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Discover why thousands of international students choose{" "}
              {country.name} for their education and career journey.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-lime-500/15 bg-white p-7 shadow-[0_8px_35px_rgba(15,58,45,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-lime-500/40 hover:shadow-[0_20px_50px_rgba(107,181,43,0.13)]"
                >
                  {/* Fill effect */}
                  <div className="absolute inset-0 translate-y-full bg-gradient-to-t from-lime-500/[0.08] to-transparent transition-transform duration-700 group-hover:translate-y-0" />

                  {/* Number */}
                  <div className="absolute right-5 top-5 font-serif text-5xl font-bold text-lime-500/[0.08] transition-colors duration-500 group-hover:text-lime-500/[0.15]">
                    0{index + 1}
                  </div>

                  <div className="relative">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-lime-500/20 bg-lime-500/10 text-lime-600 transition-all duration-500 group-hover:bg-lime-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-lime-500/20">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-emerald-950">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {benefit.desc}
                    </p>

                    <div className="mt-6 h-1 w-8 rounded-full bg-lime-500/30 transition-all duration-500 group-hover:w-16 group-hover:bg-lime-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          UNIVERSITIES
      ========================================================= */}
  {universities.length > 0 && (
  <section className="relative overflow-hidden bg-white py-20 sm:py-28">
    <div className="pointer-events-none absolute left-0 top-20 h-80 w-80 rounded-full bg-lime-400/10 blur-[110px]" />

    <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
      <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-lime-500/20 bg-lime-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-lime-700">
            <GraduationCap className="h-4 w-4" />
            Top Universities
          </div>

          <h2 className="font-serif text-4xl font-semibold text-emerald-950 sm:text-5xl">
            Study at leading universities
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600">
            Explore universities and institutions available in{" "}
            {country.name}.
          </p>
        </div>

        <Link
          href="/universities"
          className="group hidden items-center gap-2 rounded-full border border-lime-500/20 bg-lime-500/5 px-5 py-3 text-sm font-semibold text-lime-700 transition-all hover:border-lime-500/40 hover:bg-lime-500 hover:text-white sm:inline-flex"
        >
          View All
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {universities.slice(0, 6).map((university) => (
          <Link
            key={university.id}
            href={`/universities/${university.slug}`}
            className="group relative block overflow-hidden rounded-2xl border border-lime-500/15 bg-white shadow-[0_8px_30px_rgba(15,58,45,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-lime-500/40 hover:shadow-[0_20px_45px_rgba(107,181,43,0.13)]"
          >
            <div className="absolute inset-0 translate-y-full bg-gradient-to-t from-lime-500/[0.07] to-transparent transition-transform duration-700 group-hover:translate-y-0" />

            <div className="absolute left-0 right-0 top-0 z-10 h-1 origin-left scale-x-0 bg-lime-500 transition-transform duration-500 group-hover:scale-x-100" />

            {university.image && (
              <div className="relative w-full h-[180px] sm:h-[200px] overflow-hidden">
                <img
                  src={university.image}
                  alt={university.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            )}

            <div className="relative p-6">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-lime-500/20 bg-lime-500/10 text-lime-600 transition-all duration-500 group-hover:bg-lime-500 group-hover:text-white">
                  <GraduationCap className="h-5 w-5" />
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-lime-500/10 bg-lime-500/5 text-lime-600 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              <h3 className="font-serif text-xl font-semibold leading-7 text-emerald-950 group-hover:text-lime-600 transition-colors">
                {university.name}
              </h3>

              {university.location && (
                <p className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="h-4 w-4 text-lime-600" />
                  {university.location}
                </p>
              )}

              {university.rank && (
                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-lime-500/15 bg-lime-500/5 px-3 py-1.5 text-xs font-semibold text-lime-700">
                  <Award className="h-3.5 w-3.5" />
                  World Rank #{university.rank}
                </div>
              )}

              <div className="mt-6 h-px bg-gradient-to-r from-lime-500/20 via-lime-500/5 to-transparent" />
            </div>
          </Link>
        ))}
      </div>

      <Link
        href="/universities"
        className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full border border-lime-500/20 bg-lime-500/5 px-6 py-3 text-sm font-semibold text-lime-700 transition-all hover:border-lime-500 hover:bg-lime-500 hover:text-white sm:hidden"
      >
        View All Universities
        <ChevronRight className="h-4 w-4" />
      </Link>
    </div>
  </section>
)}

      <section className="relative overflow-hidden px-6 py-20 sm:py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[130px]" />

        <div className="relative mx-auto max-w-5xl">
          <div className="group relative overflow-hidden rounded-[32px] border border-lime-500/20 bg-white p-[1px] shadow-[0_20px_70px_rgba(15,58,45,0.07)]">
            {/* Fill */}
            <div className="absolute inset-0 bg-gradient-to-br from-lime-500/[0.08] via-transparent to-emerald-900/[0.04]" />

            {/* Outline glow */}
            <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-lime-500/10 transition-all duration-500 group-hover:border-lime-500/30" />

            <div className="relative px-6 py-14 text-center sm:px-12 sm:py-20">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-lime-500/20 bg-lime-500/10 text-lime-600">
                <GraduationCap className="h-7 w-7" />
              </div>

              <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl font-semibold leading-tight text-emerald-950 sm:text-5xl">
                Ready to study in{" "}
                <span className="text-lime-600">{country.name}</span>?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
                Let our experienced counselors help you choose the right
                university and guide you from application to arrival.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/appointment"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime-500 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-lime-600 hover:shadow-xl hover:shadow-lime-500/20"
                >
                  Book Free Consultation
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-950/15 bg-white px-8 py-4 text-sm font-bold text-emerald-950 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-950 hover:bg-emerald-950 hover:text-white"
                >
                  Contact Us
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}