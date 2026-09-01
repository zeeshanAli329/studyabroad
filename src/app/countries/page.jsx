"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { api } from "@/lib/api";

export default function CountriesPage() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [typedCountry, setTypedCountry] = useState("");
  const [countryIndex, setCountryIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // ============================================================
  // DYNAMIC TYPING EFFECT
  // ============================================================
  useEffect(() => {
    if (!countries.length) return;

    const typingCountries = countries
      .map((country) => country.name)
      .filter(Boolean);

    if (!typingCountries.length) return;

    if (countryIndex >= typingCountries.length) {
      setCountryIndex(0);
      return;
    }

    const currentCountry = typingCountries[countryIndex];

    if (!currentCountry) return;

    const typingSpeed = isDeleting ? 60 : 110;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentCountry.substring(
          0,
          typedCountry.length + 1
        );

        setTypedCountry(nextText);

        if (nextText === currentCountry) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1200);
        }
      } else {
        const nextText = currentCountry.substring(
          0,
          Math.max(typedCountry.length - 1, 0)
        );

        setTypedCountry(nextText);

        if (nextText === "") {
          setIsDeleting(false);

          setCountryIndex(
            (prev) => (prev + 1) % typingCountries.length
          );
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [
    typedCountry,
    isDeleting,
    countryIndex,
    countries,
  ]);

  // ============================================================
  // FETCH COUNTRIES
  // ============================================================
  useEffect(() => {
    fetchCountries();
  }, []);

  // ============================================================
  // GET COUNTRIES
  // ============================================================
  const fetchCountries = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await api.getCountries();

      console.log("COUNTRIES API RESPONSE:", data);

      if (!Array.isArray(data)) {
        console.error(
          "Countries API did not return an array:",
          data
        );

        setCountries([]);
        setError("Invalid countries data received.");
        return;
      }

      /*
       * Country images come directly from:
       *
       * country.image
       *
       * This is the image saved in the database/dashboard.
       */
      const formattedCountries = data.map((country) => {
        console.log(
          `COUNTRY: ${country.name}`,
          "IMAGE:",
          country.image
        );

        return {
          ...country,
          image: country.image || null,
        };
      });

      setCountries(formattedCountries);
    } catch (err) {
      console.error(
        "Failed to load countries:",
        err
      );

      setError("Failed to load countries");
    } finally {
      setLoading(false);
    }
  };

  // ============================================================
  // PAGE
  // ============================================================
  return (
    <main className="overflow-x-hidden">

      {/* ========================================================
          HERO SECTION
      ========================================================= */}
      <section
        className="relative mx-4 mb-8 w-[calc(100%-2rem)] overflow-hidden rounded-3xl sm:mx-6 sm:w-[calc(100%-3rem)] lg:mx-8 lg:w-[calc(100%-4rem)]"
        style={{
          backgroundImage:
            "linear-gradient(120deg, var(--primary-dark), var(--primary-dark)), url('https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/breadcrumb.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Soft green glow */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[var(--primary)]/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-[var(--primary)]/10 blur-3xl" />

        {/* Subtle outline */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl border border-[var(--border)]/20" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">

          {/* Small label */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--primary)]/80" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)] sm:text-sm">
              Global Opportunities
            </span>

            <span className="h-px w-10 bg-[var(--primary)]/80" />
          </div>

          {/* Main Heading */}
          <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Explore Study Destinations
          </h1>

          {/* Dynamic typing text */}
          <div className="mt-4 flex min-h-[44px] items-center text-2xl font-semibold text-[var(--primary)] sm:text-3xl">
            <span>Study in&nbsp;</span>

            <span className="relative inline-block min-w-[10px]">
              {typedCountry}

              <span className="ml-1 inline-block h-7 w-[2px] translate-y-1 animate-pulse bg-[var(--primary-light)] sm:h-8" />
            </span>
          </div>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            Discover leading study destinations and
            find the right country for your international
            education journey.
          </p>

          {/* Small decorative line */}
          <div className="mt-8 flex items-center gap-2">
            <span className="h-1 w-12 rounded-full bg-[var(--primary)]/80" />
            <span className="h-1 w-2 rounded-full bg-[var(--primary-light)]/40" />
            <span className="h-1 w-2 rounded-full bg-[var(--primary-light)]/20" />
          </div>
        </div>
      </section>

      {/* ========================================================
          COUNTRIES SECTION
      ========================================================= */}
      <div className="mx-auto max-w-[1320px] px-6 py-8 lg:px-8">

        {/* LOADING */}
        {loading ? (
          <div className="py-12 text-center">
            <div className="mx-auto inline-block h-12 w-12 animate-spin rounded-full border-b-2 border-[var(--primary)]" />

            <p className="mt-4 text-[var(--text-secondary)]">
              Loading countries...
            </p>
          </div>
        ) : error ? (

          /* ERROR */
          <div className="py-12 text-center">
            <p className="text-[var(--danger)]">
              {error}
            </p>

            <button
              onClick={fetchCountries}
              className="mt-4 rounded-lg bg-[var(--primary)] px-6 py-2 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary-dark)] hover:shadow-lg"
            >
              Try Again
            </button>
          </div>

        ) : countries.length === 0 ? (

          /* NO COUNTRIES */
          <div className="py-12 text-center">
            <p className="text-[var(--text-secondary)]">
              No countries available.
            </p>
          </div>

        ) : (

          /* COUNTRY GRID */
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {countries.map((country) => (
              <Link
                key={country.id}
                href={`/countries/${country.slug}`}
                className="group relative block h-full"
              >
                <div className="relative h-full overflow-hidden rounded-2xl border border-[var(--primary)]/10 bg-white p-1.5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[var(--primary)]/40 hover:shadow-[0_18px_45px_var(--primary)]">

                  {/* Soft hover fill */}
                  <div className="pointer-events-none absolute inset-0 z-0 translate-y-full bg-gradient-to-b from-[var(--primary)]/[0.04] to-[var(--primary)]/[0.10] transition-transform duration-700 ease-out group-hover:translate-y-0" />

                  {/* Outer glow */}
                  <div className="pointer-events-none absolute -inset-px rounded-2xl border border-transparent transition-all duration-500 group-hover:border-[var(--primary)]/30" />

                  {/* IMAGE */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">

                    {country.image ? (
                      <img
                        src={country.image}
                        alt={country.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        onError={(event) => {
                          console.error(
                            "IMAGE FAILED:",
                            country.name,
                            country.image
                          );

                          event.currentTarget.style.display =
                            "none";

                          const parent =
                            event.currentTarget.parentElement;

                          if (parent) {
                            const message =
                              document.createElement("div");

                            message.className =
                              "absolute inset-0 flex items-center justify-center text-sm text-gray-400";

                            message.innerText =
                              "Image not available";

                            parent.appendChild(message);
                          }
                        }}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-sm text-gray-400">
                        No image available
                      </div>
                    )}

                    {/* Image overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />

                    {/* Green glow */}
                    <div className="pointer-events-none absolute -bottom-16 -right-16 h-36 w-36 rounded-full bg-[var(--primary)]/20 blur-3xl transition-all duration-500 group-hover:bg-[var(--primary-light)]/30" />

                    {/* Country name badge */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-md">
                        {country.name}
                      </div>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10 p-5">

                    <div className="mb-3">
                      <h2 className="font-serif text-xl font-semibold text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--primary)]">
                        {country.name}
                      </h2>
                    </div>

                    {country.description && (
                      <p className="mb-4 line-clamp-2 text-sm leading-6 text-[var(--text-secondary)]">
                        {country.description}
                      </p>
                    )}

                    {/* Explore button */}
                    <div className="relative mt-4 overflow-hidden rounded-xl border border-[var(--primary)]/20 bg-[var(--primary)]/[0.03] transition-all duration-300 group-hover:border-[var(--primary)]/40 group-hover:bg-[var(--primary)]/[0.06]">
                      <div className="flex w-full items-center justify-center py-2.5 text-sm font-semibold text-[var(--primary)] transition-all duration-300 group-hover:tracking-wide">
                        Explore Country
                      </div>
                    </div>
                  </div>

                  {/* Professional corner outline */}
                  <div className="pointer-events-none absolute left-3 top-3 h-8 w-8 rounded-tl-xl border-l-2 border-t-2 border-[var(--primary)]/0 transition-all duration-500 group-hover:border-[var(--primary)]/50" />

                  <div className="pointer-events-none absolute bottom-3 right-3 h-8 w-8 rounded-br-xl border-b-2 border-r-2 border-[var(--primary)]/0 transition-all duration-500 group-hover:border-[var(--primary)]/50" />

                </div>
              </Link>
            ))}

          </div>
        )}
      </div>
    </main>
  );
}