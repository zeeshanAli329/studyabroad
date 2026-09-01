// "use client";

// import { useEffect, useState } from "react";
// import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
// import { api } from "@/lib/api";
// import "@/styles/countries-section.css";

// const CARDS_PER_PAGE = 5;

// export default function CountriesSection() {
//   const [countries, setCountries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(0);
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   useEffect(() => {
//     fetchCountries();
//   }, []);

//   const fetchCountries = async () => {
//     try {
//       setLoading(true);

//       const data = await api.getCountries();

//       setCountries(Array.isArray(data) ? data : []);

//       setError(null);
//     } catch (err) {
//       console.error("Failed to load countries:", err);
//       setError("Failed to load countries");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const totalPages = Math.ceil(countries.length / CARDS_PER_PAGE);

//   const startIndex = page * CARDS_PER_PAGE;

//   const visibleCountries = countries.slice(
//     startIndex,
//     startIndex + CARDS_PER_PAGE
//   );

//   const goNext = () => {
//     if (page < totalPages - 1) {
//       setPage((prev) => prev + 1);
//       setHoveredIndex(null);
//     }
//   };

//   const goPrevious = () => {
//     if (page > 0) {
//       setPage((prev) => prev - 1);
//       setHoveredIndex(null);
//     }
//   };

//   if (loading) {
//     return (
//       <section className="countries-section">
//         <div className="countries-section__container">
//           <div className="countries-section__loading">
//             <div className="countries-section__loader" />
//             <p>Loading countries...</p>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (error) {
//     return (
//       <section className="countries-section">
//         <div className="countries-section__container">
//           <div className="countries-section__error">
//             <p>{error}</p>

//             <button onClick={fetchCountries}>
//               Try Again
//             </button>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (!countries.length) {
//     return (
//       <section className="countries-section">
//         <div className="countries-section__container">
//           <div className="countries-section__empty">
//             <p>No countries available.</p>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="countries-section">
//       {/* Soft background decoration */}
//       <div className="countries-section__glow countries-section__glow--one" />
//       <div className="countries-section__glow countries-section__glow--two" />

//       <div className="countries-section__container">

//         {/* Header */}
//         <div className="countries-section__header">

//           <div className="countries-section__heading">

//             <div className="countries-section__eyebrow">
//               <span />
//               <span>Our Countries</span>
//             </div>

//             <h2>
//               Making Memories Around
//               <br />
//               <span>World Unforgettable</span>
//             </h2>

//           </div>

//           {/* Navigation */}
//           {totalPages > 1 && (
//             <div className="countries-section__navigation">

//               <button
//                 type="button"
//                 onClick={goPrevious}
//                 disabled={page === 0}
//                 aria-label="Previous countries"
//                 className="countries-section__arrow"
//               >
//                 <ArrowLeft />
//               </button>

//               <button
//                 type="button"
//                 onClick={goNext}
//                 disabled={page === totalPages - 1}
//                 aria-label="Next countries"
//                 className="countries-section__arrow"
//               >
//                 <ArrowRight />
//               </button>

//             </div>
//           )}

//         </div>

//         {/* Country Cards */}
//         <div className="countries-section__cards">

//           {visibleCountries.map((country, index) => {

//             const isHovered = hoveredIndex === index;

//             return (
//               <article
//                 key={country.id || country.slug || index}
//                 className={`country-card ${
//                   isHovered ? "country-card--active" : ""
//                 }`}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//               >

//                 {/* Image */}
//                 <div className="country-card__image-wrapper">

//                   {country.image ? (
//                     <img
//                       src={country.image}
//                       alt={country.name || "Study destination"}
//                       className="country-card__image"
//                       loading={index < 2 ? "eager" : "lazy"}
//                       decoding="async"
//                     />
//                   ) : (
//                     <div className="country-card__image-placeholder">
//                       <span>
//                         {country.name?.charAt(0) || "C"}
//                       </span>
//                     </div>
//                   )}

//                   {/* Image overlay */}
//                   <div className="country-card__image-overlay" />

//                   {/* Dynamic Country Flag */}
//                   {country.flag && (
//                     <div className="country-card__flag">
//                       <img
//                         src={country.flag}
//                         alt={`${country.name || "Country"} flag`}
//                         loading="lazy"
//                         decoding="async"
//                       />
//                     </div>
//                   )}

//                 </div>

//                 {/* Hover Content */}
//                 <div className="country-card__content">

//                   <div className="country-card__content-inner">

//                     <div className="country-card__content-label">
//                       Study Destination
//                     </div>

//                     <h3>
//                       Study in{" "}
//                       <span>{country.name}</span>
//                     </h3>

//                     <p>
//                       {country.description ||
//                         `Explore education opportunities, universities and study options in ${country.name}.`}
//                     </p>

//                     <a
//                       href={`/countries/${country.slug}`}
//                       className="country-card__button"
//                       onClick={(event) => event.stopPropagation()}
//                     >
//                       <span>Apply Now</span>

//                       <ArrowUpRight />
//                     </a>

//                   </div>

//                 </div>

//               </article>
//             );
//           })}

//         </div>

//       </div>
//     </section>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
// import { api } from "@/lib/api";
// import "@/styles/countries-section.css";

// const DESKTOP_CARDS_PER_PAGE = 5;
// const MOBILE_CARDS_PER_PAGE = 1;

// export default function CountriesSection() {
//   const [countries, setCountries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(0);
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);

//   /* =========================================================
//      MOBILE / DESKTOP DETECTION
//   ========================================================= */
//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 768px)");

//     const handleScreenChange = (event) => {
//       setIsMobile(event.matches);
//       setPage(0);
//       setHoveredIndex(null);
//     };

//     setIsMobile(mediaQuery.matches);

//     mediaQuery.addEventListener("change", handleScreenChange);

//     return () => {
//       mediaQuery.removeEventListener("change", handleScreenChange);
//     };
//   }, []);

//   /* =========================================================
//      FETCH COUNTRIES
//   ========================================================= */
//   useEffect(() => {
//     let mounted = true;

//     const loadCountries = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const data = await api.getCountries();

//         if (!mounted) return;

//         setCountries(Array.isArray(data) ? data : []);
//       } catch (err) {
//         if (!mounted) return;

//         console.error("Failed to load countries:", err);
//         setError("Failed to load countries");
//       } finally {
//         if (mounted) {
//           setLoading(false);
//         }
//       }
//     };

//     loadCountries();

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   /* =========================================================
//      RETRY FETCH
//   ========================================================= */
//   const fetchCountries = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       const data = await api.getCountries();

//       setCountries(Array.isArray(data) ? data : []);
//       setPage(0);
//       setHoveredIndex(null);
//     } catch (err) {
//       console.error("Failed to load countries:", err);
//       setError("Failed to load countries");
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* =========================================================
//      PAGINATION
     
//      Desktop = 5
//      Mobile = 1
//   ========================================================= */
//   const cardsPerPage = isMobile
//     ? MOBILE_CARDS_PER_PAGE
//     : DESKTOP_CARDS_PER_PAGE;

//   const totalPages = Math.ceil(
//     countries.length / cardsPerPage
//   );

//   const startIndex = page * cardsPerPage;

//   const visibleCountries = countries.slice(
//     startIndex,
//     startIndex + cardsPerPage
//   );

//   /* =========================================================
//      NEXT
//   ========================================================= */
//   const goNext = () => {
//     if (page < totalPages - 1) {
//       setPage((prev) => prev + 1);
//       setHoveredIndex(null);
//     }
//   };

//   /* =========================================================
//      PREVIOUS
//   ========================================================= */
//   const goPrevious = () => {
//     if (page > 0) {
//       setPage((prev) => prev - 1);
//       setHoveredIndex(null);
//     }
//   };

//   /* =========================================================
//      LOADING
//   ========================================================= */
//   if (loading) {
//     return (
//       <section className="countries-section">
//         <div className="countries-section__container">
//           <div className="countries-section__loading">
//             <div className="countries-section__loader" />

//             <p>Loading countries...</p>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   /* =========================================================
//      ERROR
//   ========================================================= */
//   if (error) {
//     return (
//       <section className="countries-section">
//         <div className="countries-section__container">
//           <div className="countries-section__error">
//             <p>{error}</p>

//             <button
//               type="button"
//               onClick={fetchCountries}
//             >
//               Try Again
//             </button>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   /* =========================================================
//      EMPTY
//   ========================================================= */
//   if (!countries.length) {
//     return (
//       <section className="countries-section">
//         <div className="countries-section__container">
//           <div className="countries-section__empty">
//             <p>No countries available.</p>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="countries-section">
//       {/* Background glow */}
//       <div className="countries-section__glow countries-section__glow--one" />

//       <div className="countries-section__glow countries-section__glow--two" />

//       <div className="countries-section__container">

//         {/* =====================================================
//             HEADER
//         ===================================================== */}
//         <div className="countries-section__header">

//           <div className="countries-section__heading">

//             <div className="countries-section__eyebrow">
//               <span />
//               <span>Our Countries</span>
//             </div>

//             <h2>
//               Making Memories Around
//               <br />
//               <span>World Unforgettable</span>
//             </h2>

//           </div>

//           {/* ===================================================
//               NAVIGATION
//           =================================================== */}
//           {totalPages > 1 && (
//             <div className="countries-section__navigation">

//               <button
//                 type="button"
//                 onClick={goPrevious}
//                 disabled={page === 0}
//                 aria-label="Previous country"
//                 className="countries-section__arrow"
//               >
//                 <ArrowLeft />
//               </button>

//               <button
//                 type="button"
//                 onClick={goNext}
//                 disabled={page === totalPages - 1}
//                 aria-label="Next country"
//                 className="countries-section__arrow"
//               >
//                 <ArrowRight />
//               </button>

//             </div>
//           )}

//         </div>

//         {/* =====================================================
//             COUNTRY CARDS
//         ===================================================== */}
//         <div
//           className={`countries-section__cards ${
//             isMobile
//               ? "countries-section__cards--mobile"
//               : ""
//           }`}
//         >

//           {visibleCountries.map((country, index) => {

//             /*
//              * Desktop:
//              * Card content appears on hover.
//              *
//              * Mobile:
//              * Card content is always visible.
//              */
//             const isActive =
//               isMobile || hoveredIndex === index;

//             const isFirstVisibleImage =
//               page === 0 && index === 0;

//             return (
//               <article
//                 key={
//                   country.id ||
//                   country.slug ||
//                   `${startIndex}-${index}`
//                 }
//                 className={`country-card ${
//                   isActive
//                     ? "country-card--active"
//                     : ""
//                 } ${
//                   isMobile
//                     ? "country-card--mobile"
//                     : ""
//                 }`}
//                 onMouseEnter={() => {
//                   if (!isMobile) {
//                     setHoveredIndex(index);
//                   }
//                 }}
//                 onMouseLeave={() => {
//                   if (!isMobile) {
//                     setHoveredIndex(null);
//                   }
//                 }}
//               >

//                 {/* =================================================
//                     IMAGE
//                 ================================================= */}
//                 <div className="country-card__image-wrapper">

//                   {country.image ? (
//                     <img
//                       src={country.image}
//                       alt={
//                         country.name ||
//                         "Study destination"
//                       }
//                       className="country-card__image"

//                       /*
//                        * Only first visible image loads
//                        * immediately.
//                        */
//                       loading={
//                         isFirstVisibleImage
//                           ? "eager"
//                           : "lazy"
//                       }

//                       decoding="async"

//                       /*
//                        * Give high priority only
//                        * to the first image.
//                        */
//                       fetchPriority={
//                         isFirstVisibleImage
//                           ? "high"
//                           : "auto"
//                       }
//                     />
//                   ) : (

//                     <div className="country-card__image-placeholder">

//                       <span>
//                         {country.name?.charAt(0) || "C"}
//                       </span>

//                     </div>

//                   )}

//                   {/* Image overlay */}
//                   <div className="country-card__image-overlay" />

//                   {/* Country flag */}
//                   {country.flag && (
//                     <div className="country-card__flag">

//                       <img
//                         src={country.flag}
//                         alt={`${country.name || "Country"} flag`}
//                         loading="lazy"
//                         decoding="async"
//                       />

//                     </div>
//                   )}

//                 </div>

//                 {/* =================================================
//                     CONTENT
//                 ================================================= */}
//                 <div className="country-card__content">

//                   <div className="country-card__content-inner">

//                     <div className="country-card__content-label">
//                       Study Destination
//                     </div>

//                     <h3>
//                       Study in{" "}
//                       <span>
//                         {country.name}
//                       </span>
//                     </h3>

//                     <p>
//                       {country.description ||
//                         `Explore education opportunities, universities and study options in ${country.name}.`}
//                     </p>

//                     <a
//                       href={`/countries/${country.slug}`}
//                       className="country-card__button"
//                       onClick={(event) => {
//                         event.stopPropagation();
//                       }}
//                     >
//                       <span>
//                         Apply Now
//                       </span>

//                       <ArrowUpRight />

//                     </a>

//                   </div>

//                 </div>

//               </article>
//             );
//           })}

//         </div>

//       </div>
//     </section>
//   );
// }






















"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { api } from "@/lib/api";
import "@/styles/countries-section.css";

const DESKTOP_CARDS_PER_PAGE = 5;
const MOBILE_CARDS_PER_PAGE = 1;

export default function CountriesSection() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [isMobile, setIsMobile] = useState(false);

  /*
   * Controls mobile slide direction.
   *
   * next     = slide from right
   * previous = slide from left
   */
  const [slideDirection, setSlideDirection] = useState("next");

  /* =========================================================
     MOBILE / DESKTOP DETECTION
  ========================================================= */

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const updateScreenSize = (event) => {
      setIsMobile(event.matches);
      setPage(0);
      setHoveredIndex(null);
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", updateScreenSize);

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updateScreenSize
      );
    };
  }, []);

  /* =========================================================
     FETCH COUNTRIES
  ========================================================= */

  useEffect(() => {
    let mounted = true;

    const loadCountries = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await api.getCountries();

        if (!mounted) return;

        setCountries(Array.isArray(data) ? data : []);
      } catch (err) {
        if (!mounted) return;

        console.error(
          "Failed to load countries:",
          err
        );

        setError("Failed to load countries");
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadCountries();

    return () => {
      mounted = false;
    };
  }, []);

  /* =========================================================
     RETRY
  ========================================================= */

  const fetchCountries = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await api.getCountries();

      setCountries(Array.isArray(data) ? data : []);

      setPage(0);
      setHoveredIndex(null);
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

  /* =========================================================
     PAGINATION
  ========================================================= */

  const cardsPerPage = isMobile
    ? MOBILE_CARDS_PER_PAGE
    : DESKTOP_CARDS_PER_PAGE;

  const totalPages = Math.ceil(
    countries.length / cardsPerPage
  );

  const startIndex = page * cardsPerPage;

  const visibleCountries = countries.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  /* =========================================================
     NEXT
  ========================================================= */

  const goNext = () => {
    if (page >= totalPages - 1) return;

    setSlideDirection("next");

    setPage((prev) => prev + 1);

    setHoveredIndex(null);
  };

  /* =========================================================
     PREVIOUS
  ========================================================= */

  const goPrevious = () => {
    if (page <= 0) return;

    setSlideDirection("previous");

    setPage((prev) => prev - 1);

    setHoveredIndex(null);
  };

  /* =========================================================
     LOADING
  ========================================================= */

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

  /* =========================================================
     ERROR
  ========================================================= */

  if (error) {
    return (
      <section className="countries-section">
        <div className="countries-section__container">
          <div className="countries-section__error">
            <p>{error}</p>

            <button
              type="button"
              onClick={fetchCountries}
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  /* =========================================================
     EMPTY
  ========================================================= */

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

  /* =========================================================
     MAIN
  ========================================================= */

  return (
    <section className="countries-section">

      {/* Background glow */}
      <div
        className="
          countries-section__glow
          countries-section__glow--one
        "
      />

      <div
        className="
          countries-section__glow
          countries-section__glow--two
        "
      />

      <div className="countries-section__container">

        {/* =====================================================
            HEADER
        ===================================================== */}

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

          {/* ===================================================
              NAVIGATION
          =================================================== */}

          {totalPages > 1 && (
            <div className="countries-section__navigation">

              <button
                type="button"
                onClick={goPrevious}
                disabled={page === 0}
                aria-label="Previous country"
                className="countries-section__arrow"
              >
                <ArrowLeft />
              </button>

              <button
                type="button"
                onClick={goNext}
                disabled={
                  page === totalPages - 1
                }
                aria-label="Next country"
                className="countries-section__arrow"
              >
                <ArrowRight />
              </button>

            </div>
          )}

        </div>

        {/* =====================================================
            COUNTRY CARDS
        ===================================================== */}

        <div
          className={`
            countries-section__cards
            ${
              isMobile
                ? "countries-section__cards--mobile"
                : ""
            }
          `}
        >

          {visibleCountries.map(
            (country, index) => {

              const isActive =
                isMobile ||
                hoveredIndex === index;

              const isFirstImage =
                page === 0 &&
                index === 0;

              return (
                <article
                  /*
                   * page is included in the key.
                   *
                   * This forces the mobile card to
                   * re-enter when Next/Previous is clicked.
                   */
                  key={`
                    ${country.id || country.slug || index}
                    -
                    ${page}
                  `}

                  className={`
                    country-card

                    ${
                      isActive
                        ? "country-card--active"
                        : ""
                    }

                    ${
                      isMobile
                        ? "country-card--mobile"
                        : ""
                    }

                    ${
                      isMobile
                        ? `country-card--${slideDirection}`
                        : ""
                    }
                  `}

                  onMouseEnter={() => {
                    if (!isMobile) {
                      setHoveredIndex(index);
                    }
                  }}

                  onMouseLeave={() => {
                    if (!isMobile) {
                      setHoveredIndex(null);
                    }
                  }}
                >

                  {/* =================================================
                      IMAGE
                  ================================================= */}

                  <div className="country-card__image-wrapper">

                    {country.image ? (
                      <img
                        src={country.image}
                        alt={
                          country.name ||
                          "Study destination"
                        }

                        className="country-card__image"

                        /*
                         * Only first image gets
                         * high loading priority.
                         */
                        loading={
                          isFirstImage
                            ? "eager"
                            : "lazy"
                        }

                        decoding="async"

                        fetchPriority={
                          isFirstImage
                            ? "high"
                            : "auto"
                        }
                      />
                    ) : (
                      <div className="country-card__image-placeholder">

                        <span>
                          {
                            country.name?.charAt(
                              0
                            ) || "C"
                          }
                        </span>

                      </div>
                    )}

                    {/* Image overlay */}
                    <div className="country-card__image-overlay" />

                    {/* Country flag */}
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

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div className="country-card__content">

                    <div className="country-card__content-inner">

                      <div className="country-card__content-label">
                        Study Destination
                      </div>

                      <h3>
                        Study in{" "}
                        <span>
                          {country.name}
                        </span>
                      </h3>

                      <p>
                        {country.description ||
                          `Explore education opportunities, universities and study options in ${country.name}.`}
                      </p>

                      <a
                        href={`/countries/${country.slug}`}
                        className="country-card__button"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        <span>
                          Apply Now
                        </span>

                        <ArrowUpRight />

                      </a>

                    </div>

                  </div>

                </article>
              );
            }
          )}

        </div>

      </div>
    </section>
  );
}