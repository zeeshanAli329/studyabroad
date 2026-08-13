"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { api } from "@/lib/api";

export default function ScholarshipDetailPage() {
  const params = useParams();
  const [scholarship, setScholarship] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (params.slug) {
      fetchScholarship();
    }
  }, [params.slug]);

  const fetchScholarship = async () => {
    try {
      setLoading(true);
      const data = await api.getScholarshipBySlug(params.slug);
      setScholarship(data);
      setError(null);
    } catch (err) {
      setError("Failed to load scholarship");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="pt-24">
        <div className="mx-auto max-w-[1320px] px-6 py-16 lg:px-8">
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)]"></div>
            <p className="mt-4 text-[var(--text-secondary)]">
              Loading scholarship...
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (error || !scholarship) {
    return (
      <main className="pt-24">
        <div className="mx-auto max-w-[1320px] px-6 py-16 lg:px-8">
          <div className="text-center py-12">
            <p className="text-[var(--danger)]">
              {error || "Scholarship not found"}
            </p>
            <Link
              href="/scholarships"
              className="inline-block mt-4 px-6 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-dark)]"
            >
              Back to Scholarships
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24">
      <div className="mx-auto max-w-[1320px] px-6 py-16 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-[var(--text-secondary)] hover:text-[var(--primary)]"
            >
              Home
            </Link>
            <span className="text-[var(--text-secondary)]">/</span>
            <Link
              href="/scholarships"
              className="text-[var(--text-secondary)] hover:text-[var(--primary)]"
            >
              Scholarships
            </Link>
            <span className="text-[var(--text-secondary)]">/</span>
            <span className="text-[var(--text-primary)]">
              {scholarship.title}
            </span>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-8">
          {scholarship.featured && (
            <span className="inline-block px-3 py-1 bg-[var(--primary)] text-white text-sm font-medium rounded-full mb-4">
              Featured Scholarship
            </span>
          )}
          <h1 className="font-serif text-4xl lg:text-5xl text-[var(--text-primary)] mb-4">
            {scholarship.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-[var(--text-secondary)]">
            {scholarship.country && (
              <span className="flex items-center gap-2">
                <span className="text-2xl">{scholarship.country.flag}</span>
                {scholarship.country.name}
              </span>
            )}
            {scholarship.university && (
              <span>• {scholarship.university.name}</span>
            )}
            {scholarship.degreeLevel && (
              <span>• {scholarship.degreeLevel}</span>
            )}
            {scholarship.fieldOfStudy && (
              <span>• {scholarship.fieldOfStudy}</span>
            )}
          </div>
        </div>

        {/* Image */}
        {scholarship.image && (
          <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-8 relative">
            <img
              src={scholarship.image}
              alt={scholarship.title}
              className="w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[320px] xl:h-[380px] object-cover"
            />
          </div>
        )}

        {/* Key Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {scholarship.amount && (
            <div className="bg-[var(--background-light)] rounded-xl p-6">
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">
                Amount
              </h3>
              <p className="text-2xl font-bold text-[var(--primary)]">
                {scholarship.amount} {scholarship.currency}
              </p>
            </div>
          )}
          {scholarship.deadline && (
            <div className="bg-[var(--background-light)] rounded-xl p-6">
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">
                Deadline
              </h3>
              <p className="text-2xl font-bold text-[var(--text-primary)]">
                {new Date(scholarship.deadline).toLocaleDateString()}
              </p>
            </div>
          )}
          {scholarship.funding && (
            <div className="bg-[var(--background-light)] rounded-xl p-6">
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">
                Funding Type
              </h3>
              <p className="text-2xl font-bold text-[var(--primary)]">
                {scholarship.funding}
              </p>
            </div>
          )}
        </div>

        {/* Description */}
        {scholarship.description && (
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h2 className="font-serif text-2xl text-[var(--text-primary)] mb-4">
              Description
            </h2>
            <div className="prose max-w-none text-[var(--text-secondary)]">
              <p>{scholarship.description}</p>
            </div>
          </div>
        )}

        {/* Eligibility */}
        {scholarship.eligibility && (
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h2 className="font-serif text-2xl text-[var(--text-primary)] mb-4">
              Eligibility
            </h2>
            <div className="prose max-w-none text-[var(--text-secondary)]">
              <p>{scholarship.eligibility}</p>
            </div>
          </div>
        )}

        {/* Requirements */}
        {scholarship.requirements && (
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h2 className="font-serif text-2xl text-[var(--text-primary)] mb-4">
              Requirements
            </h2>
            <div className="prose max-w-none text-[var(--text-secondary)]">
              <p>{scholarship.requirements}</p>
            </div>
          </div>
        )}

        {/* Benefits */}
        {scholarship.benefits && (
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h2 className="font-serif text-2xl text-[var(--text-primary)] mb-4">
              Benefits
            </h2>
            <div className="prose max-w-none text-[var(--text-secondary)]">
              <p>{scholarship.benefits}</p>
            </div>
          </div>
        )}

        {/* CTA */}
        {/* <div className="bg-[var(--secondary)] rounded-xl p-8 text-center">
          <h2 className="font-serif text-2xl text-white mb-4">
            Ready to Apply?
          </h2>
          {scholarship.applicationUrl ? (
            <a
              href={scholarship.applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[var(--primary)] text-white rounded-full font-semibold hover:bg-[var(--primary-dark)] transition-colors"
            >
              Apply Now
            </a>
          ) : (
            <p className="text-white/80 mb-4">
              Application information coming soon
            </p>
          )}
          <Link
            href="/appointment"
            className="inline-block ml-4 px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-[var(--secondary)] transition-colors"
          >
            Book Consultation
          </Link>
        </div> */}
      </div>
    </main>
  );
}
