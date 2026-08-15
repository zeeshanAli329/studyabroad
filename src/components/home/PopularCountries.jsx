"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { api } from "@/lib/api";
import "@/styles/countries-section.css";

const CARDS_PER_PAGE = 5;

export default function CountriesSection() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      setLoading(true);

      const data = await api.getCountries();

      setCountries(Array.isArray(data) ? data : []);

      setError(null);
    } catch (err) {
      console.error("Failed to load countries:", err);
      setError("Failed to load countries");
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(countries.length / CARDS_PER_PAGE);

  const startIndex = page * CARDS_PER_PAGE;

  const visibleCountries = countries.slice(
    startIndex,
    startIndex + CARDS_PER_PAGE
  );

  const goNext = () => {
    if (page < totalPages - 1) {
      setPage((prev) => prev + 1);
      setHoveredIndex(null);
    }
  };

  const goPrevious = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
      setHoveredIndex(null);
    }
  };

  if (loading) {
    return (
      <section className="countries-section">
        <div className="countries-section__container">
          <div className="countries-section__loading">
            <div className="countries-section__loader" />
            <p>Loading countries...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="countries-section">
        <div className="countries-section__container">
          <div className="countries-section__error">
            <p>{error}</p>

            <button onClick={fetchCountries}>
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (!countries.length) {
    return (
      <section className="countries-section">
        <div className="countries-section__container">
          <div className="countries-section__empty">
            <p>No countries available.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="countries-section">
      {/* Soft background decoration */}
      <div className="countries-section__glow countries-section__glow--one" />
      <div className="countries-section__glow countries-section__glow--two" />

      <div className="countries-section__container">

        {/* Header */}
        <div className="countries-section__header">

          <div className="countries-section__heading">

            <div className="countries-section__eyebrow">
              <span />
              <span>Our Countries</span>
            </div>

            <h2>
              Making Memories Around
              <br />
              <span>World Unforgettable</span>
            </h2>

          </div>

          {/* Navigation */}
          {totalPages > 1 && (
            <div className="countries-section__navigation">

              <button
                type="button"
                onClick={goPrevious}
                disabled={page === 0}
                aria-label="Previous countries"
                className="countries-section__arrow"
              >
                <ArrowLeft />
              </button>

              <button
                type="button"
                onClick={goNext}
                disabled={page === totalPages - 1}
                aria-label="Next countries"
                className="countries-section__arrow"
              >
                <ArrowRight />
              </button>

            </div>
          )}

        </div>

        {/* Country Cards */}
        <div className="countries-section__cards">

          {visibleCountries.map((country, index) => {

            const isHovered = hoveredIndex === index;

            return (
              <article
                key={country.id || country.slug || index}
                className={`country-card ${
                  isHovered ? "country-card--active" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >

                {/* Image */}
                <div className="country-card__image-wrapper">

                  {country.image ? (
                    <img
                      src={country.image}
                      alt={country.name || "Study destination"}
                      className="country-card__image"
                      loading={index < 2 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  ) : (
                    <div className="country-card__image-placeholder">
                      <span>
                        {country.name?.charAt(0) || "C"}
                      </span>
                    </div>
                  )}

                  {/* Image overlay */}
                  <div className="country-card__image-overlay" />

                  {/* Dynamic Country Flag */}
                  {country.flag && (
                    <div className="country-card__flag">
                      <img
                        src={country.flag}
                        alt={`${country.name || "Country"} flag`}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  )}

                </div>

                {/* Hover Content */}
                <div className="country-card__content">

                  <div className="country-card__content-inner">

                    <div className="country-card__content-label">
                      Study Destination
                    </div>

                    <h3>
                      Study in{" "}
                      <span>{country.name}</span>
                    </h3>

                    <p>
                      {country.description ||
                        `Explore education opportunities, universities and study options in ${country.name}.`}
                    </p>

                    <a
                      href={`/countries/${country.slug}`}
                      className="country-card__button"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <span>Apply Now</span>

                      <ArrowUpRight />
                    </a>

                  </div>

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}