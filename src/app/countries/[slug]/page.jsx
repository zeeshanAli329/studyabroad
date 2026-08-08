"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { api } from "@/lib/api";
import { ChevronRight, GraduationCap, MapPin, DollarSign, Clock, ShieldCheck, Globe2, Users, CheckCircle } from "lucide-react";

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
        api.getUniversities({ country: params.slug })
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

  if (loading) {
    return (
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-lime-500"></div>
            <p className="mt-4 text-gray-600">Loading country information...</p>
          </div>
        </div>
      </main>
    );
  }

  if (error || !country) {
    return (
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center py-12">
            <p className="text-red-600">{error || "Country not found"}</p>
            <Link
              href="/countries"
              className="inline-block mt-4 px-6 py-2 bg-lime-500 text-white rounded-lg hover:bg-lime-600"
            >
              Back to Countries
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const countryInfo = [
    { icon: GraduationCap, label: "Top Universities", value: universities.length || "50+" },
    { icon: DollarSign, label: "Tuition Range", value: "$10,000 - $50,000" },
    { icon: Clock, label: "Visa Processing", value: "2-8 weeks" },
    { icon: Users, label: "International Students", value: "500,000+" }
  ];

  return (
    <div className="w-full bg-white font-sans">
      {/* Hero Section */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(15,58,45,0.92), rgba(15,58,45,0.75)), url('${country.image || 'https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/breadcrumb.png'}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <div className="flex items-center gap-2 text-lime-400 text-sm mb-4">
            <span className="text-white/80">RouteX</span>
            <ChevronRight className="w-4 h-4 text-white/80" />
            <span className="text-white/80">Countries</span>
            <ChevronRight className="w-4 h-4 text-white/80" />
            <span>{country.name}</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{country.flag || '🌍'}</span>
            <h1 className="text-white text-4xl sm:text-5xl font-serif font-semibold tracking-tight">
              Study in {country.name}
            </h1>
          </div>
          <p className="text-white/90 text-lg sm:text-xl max-w-2xl">
            {country.description || "Discover world-class education opportunities in this amazing destination."}
          </p>
        </div>
      </section>

      {/* Country Info */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {countryInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-lime-500 flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-600 text-sm mb-1">{info.label}</p>
              <p className="font-serif font-semibold text-emerald-900 text-lg">{info.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Study Here */}
      <section className="bg-[#fafbf9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-lime-600 font-semibold text-sm uppercase tracking-wide">
              <ShieldCheck className="w-4 h-4" />
              Why Study in {country.name}
            </div>
            <h2 className="font-serif text-emerald-900 text-3xl sm:text-4xl font-semibold mt-4 leading-tight">
              Benefits of Studying Here
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "World-Class Education", desc: "Home to some of the world's top-ranked universities and research institutions." },
              { title: "Global Recognition", desc: "Degrees from here are recognized and respected worldwide." },
              { title: "Diverse Culture", desc: "Experience a multicultural environment with students from around the globe." },
              { title: "Work Opportunities", desc: "Excellent post-study work opportunities and career prospects." },
              { title: "Quality of Life", desc: "High standard of living with safe and welcoming communities." },
              { title: "Scholarship Options", desc: "Numerous scholarships and financial aid available for international students." }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="font-serif font-semibold text-emerald-900 text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universities */}
      {universities.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
          <div className="flex justify-between items-center mb-12">
            <div>
              <div className="flex items-center gap-2 text-lime-600 font-semibold text-sm uppercase tracking-wide mb-2">
                <GraduationCap className="w-4 h-4" />
                Top Universities
              </div>
              <h2 className="font-serif text-emerald-900 text-3xl sm:text-4xl font-semibold leading-tight">
                Universities in {country.name}
              </h2>
            </div>
            <Link
              href="/universities"
              className="hidden sm:inline-flex items-center gap-2 text-lime-600 font-medium hover:gap-3 transition-all"
            >
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.slice(0, 6).map((university) => (
              <Link
                key={university.id}
                href={`/universities/${university.slug}`}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-serif font-semibold text-emerald-900 text-lg mb-2 group-hover:text-lime-600 transition-colors">
                    {university.name}
                  </h3>
                  {university.location && (
                    <p className="text-gray-600 text-sm mb-3 flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {university.location}
                    </p>
                  )}
                  {university.rank && (
                    <p className="text-lime-600 font-medium text-sm">
                      World Rank: #{university.rank}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Visa Information */}
      <section className="bg-emerald-900 rounded-3xl py-16 sm:py-24 mx-4 lg:mx-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-lime-400 font-semibold text-sm uppercase tracking-wide mb-4">
                <Globe2 className="w-4 h-4" />
                Student Visa Information
              </div>
              <h2 className="font-serif text-white text-3xl sm:text-4xl font-semibold leading-tight mb-6">
                Visa Requirements for {country.name}
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                To study in {country.name}, you'll need a student visa. Our team can guide you through the entire application process, from document preparation to visa interview preparation.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Valid passport with at least 6 months validity",
                  "Acceptance letter from a recognized institution",
                  "Proof of sufficient funds for tuition and living expenses",
                  "English language proficiency test scores (IELTS/TOEFL)",
                  "Medical examination and health insurance",
                  "Police clearance certificate"
                ].map((req, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/90">
                    <CheckCircle className="w-5 h-5 text-lime-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{req}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/visa/student"
                className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-white font-medium px-6 py-3 rounded-full transition-colors"
              >
                Learn About Student Visa <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <h3 className="font-serif text-white text-xl font-semibold mb-4">Need Visa Assistance?</h3>
              <p className="text-white/80 mb-6">
                Our visa experts have helped thousands of students successfully obtain their student visas for {country.name}.
              </p>
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 bg-white text-emerald-900 font-medium px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                Book Consultation <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24 text-center">
        <h2 className="font-serif text-emerald-900 text-3xl sm:text-4xl font-semibold leading-tight mb-6">
          Ready to Study in {country.name}?
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
          Let our expert counselors help you find the right university and guide you through the application process.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/appointment"
            className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-white font-medium px-8 py-4 rounded-full transition-colors"
          >
            Book Consultation <ChevronRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-emerald-900 text-emerald-900 font-medium px-8 py-4 rounded-full hover:bg-emerald-900 hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
