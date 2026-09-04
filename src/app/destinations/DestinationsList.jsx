"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { api } from "@/lib/api";
import homeImages from "@/config/homeImages";
import Reveal from "@/components/shared/Reveal";

export default function DestinationsList() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const data = await api.getDestinations();
      setDestinations(data.destinations || data || []);
      setError(null);
    } catch (err) {
      setError("Failed to load destinations");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)]"></div>
            <p className="mt-4 text-[var(--text-secondary)]">
              Loading destinations...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-0 pb-16">
      {/* Hero Section */}
      <div className="bg-[var(--secondary)] py-16 px-0 lg:px-8">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
          <Reveal>
            <h1 className="font-serif text-4xl lg:text-5xl text-white mb-4">
              Study Abroad Destinations
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">
              Explore our curated list of destinations perfect for international
              education. Find the right country for your academic journey.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8 py-16">
        {error ? (
          <Reveal>
            <div className="text-center py-12">
              <p className="text-red-600 mb-4">{error}</p>
              <button
                onClick={fetchDestinations}
                className="px-6 py-3 bg-[var(--primary)] text-white rounded-xl hover:bg-[var(--primary-dark)] transition-colors"
              >
                Try Again
              </button>
            </div>
          </Reveal>
        ) : destinations.length === 0 ? (
          <Reveal>
            <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <p className="text-[var(--text-secondary)] mb-4">
                No destinations available yet.
              </p>
              <p className="text-[var(--text-secondary)] text-sm">
                Check back later as we add more study abroad destinations.
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Reveal key={destination.id} delay={index * 100}>
                <Link
                  href={`/destinations/${destination.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-lg">
                    <div className="aspect-[16/10] relative overflow-hidden">
                      {/* <Image
                        src={destination.image || homeImages.destinationFallback}
                        alt={destination.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      /> */}
                      <img
                        src={
                          destination.image || homeImages.destinationFallback
                        }
                        alt={destination.name}
                        className="w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[320px] xl:h-[380px] object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-2xl font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                        {destination.name}
                      </h3>
                      {destination.country && (
                        <p className="text-[var(--text-secondary)] mb-3">
                          {destination.country.name}
                        </p>
                      )}
                      <p className="text-[var(--text-secondary)] text-sm line-clamp-2 mb-4">
                        {destination.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-[var(--primary)] font-medium group-hover:gap-3 transition-all">
                        Explore →
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
