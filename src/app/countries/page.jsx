"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { api } from "@/lib/api";

export default function CountriesPage() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      setLoading(true);
      const data = await api.getCountries();
      setCountries(data || []);
      setError(null);
    } catch (err) {
      setError("Failed to load countries");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-24">
      <div className="mx-auto max-w-[1320px] px-6 py-16 lg:px-8">
        <h1 className="font-serif text-4xl text-[var(--text-primary)] lg:text-5xl mb-4">
          Study Destinations
        </h1>
        <p className="text-lg text-[var(--text-secondary)] mb-8">
          Explore countries around the world for your international education journey.
        </p>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)]"></div>
            <p className="mt-4 text-[var(--text-secondary)]">Loading countries...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-[var(--danger)]">{error}</p>
            <button
              onClick={fetchCountries}
              className="mt-4 px-6 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-dark)]"
            >
              Try Again
            </button>
          </div>
        ) : countries.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[var(--text-secondary)]">No countries available.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country) => (
              <Link
                key={country.id}
                href={`/countries/${country.slug}`}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-lg">
                  <div className="aspect-[4/3] relative">
                    {country.image ? (
                      <Image
                        src={country.image}
                        alt={country.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-[var(--background-light)] flex items-center justify-center">
                        <span className="text-6xl">{country.flag || '🌍'}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-4xl">{country.flag || '🌍'}</span>
                      <h3 className="font-serif text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                        {country.name}
                      </h3>
                    </div>
                    {country.description && (
                      <p className="text-[var(--text-secondary)] text-sm line-clamp-2 mb-4">
                        {country.description}
                      </p>
                    )}
                    <button className="w-full py-2 border border-[var(--primary)] text-[var(--primary)] rounded-lg font-medium hover:bg-[var(--primary)] hover:text-white transition-colors">
                      Explore Country
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
