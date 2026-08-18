"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

import FreeEducationHero from "@/components/freeEducation/FreeEducationHero";
import EducationHighlights from "@/components/freeEducation/EducationHighlights";
import TuitionFreeCountries from "@/components/freeEducation/TuitionFreeCountries";
import FundingCalculator from "@/components/freeEducation/FundingCalculator";
import FundedScholarships from "@/components/freeEducation/FundedScholarships";
import UniversitiesShowcase from "@/components/freeEducation/UniversitiesShowcase";
import StudyLevels from "@/components/freeEducation/StudyLevels";
import StudyFields from "@/components/freeEducation/StudyFields";
import EligibilitySection from "@/components/freeEducation/EligibilitySection";
import FinancialNeedSection from "@/components/freeEducation/FinancialNeedSection";
import FreeEducationCTA from "@/components/freeEducation/FreeEducationCTA";

function extractArray(response, keys = []) {
  if (Array.isArray(response)) {
    return response;
  }

  for (const key of keys) {
    if (Array.isArray(response?.[key])) {
      return response[key];
    }
  }

  return [];
}

export default function FreeEducationPage() {
  const [countries, setCountries] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [scholarships, setScholarships] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadPageData() {
      try {
        setLoading(true);
        setError("");

        const results = await Promise.allSettled([
          api.getCountries(),
          api.getUniversities(),
          api.getScholarships(),
        ]);

        if (!active) return;

        const [
          countriesResult,
          universitiesResult,
          scholarshipsResult,
        ] = results;

        if (countriesResult.status === "fulfilled") {
          setCountries(
            extractArray(countriesResult.value, [
              "countries",
              "data",
              "results",
            ]),
          );
        }

        if (universitiesResult.status === "fulfilled") {
          setUniversities(
            extractArray(universitiesResult.value, [
              "universities",
              "data",
              "results",
            ]),
          );
        }

        if (scholarshipsResult.status === "fulfilled") {
          setScholarships(
            extractArray(scholarshipsResult.value, [
              "scholarships",
              "data",
              "results",
            ]),
          );
        }

        const allFailed = results.every(
          (result) => result.status === "rejected",
        );

        if (allFailed) {
          setError(
            "We could not load the education information. Please try again.",
          );
        }
      } catch (err) {
        console.error("Free education page error:", err);

        if (active) {
          setError(
            "We could not load the education information. Please try again.",
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadPageData();

    return () => {
      active = false;
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#f8faf9] text-[var(--text-primary)]">
      <FreeEducationHero />

      <EducationHighlights />

      <TuitionFreeCountries
        countries={countries}
        loading={loading}
      />

      <FundingCalculator
        countries={countries}
        loading={loading}
      />

      <FundedScholarships
        scholarships={scholarships}
        loading={loading}
      />

      <UniversitiesShowcase
        universities={universities}
        loading={loading}
      />

      <StudyLevels />

      <StudyFields />

      <EligibilitySection />

      <FinancialNeedSection />

      <FreeEducationCTA />

      {error && (
        <div className="mx-auto max-w-[1320px] px-6 pb-8 lg:px-8">
          <div className="rounded-2xl border border-red-100 bg-red-50 px-5 py-4 text-sm text-red-700">
            {error}
          </div>
        </div>
      )}
    </main>
  );
}