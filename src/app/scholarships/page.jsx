// 'use client'
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { api } from "@/lib/api";

// export default function ScholarshipsPage() {
//   const [scholarships, setScholarships] = useState([]);
//   const [featuredScholarships, setFeaturedScholarships] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filters, setFilters] = useState({
//     search: "",
//     country: "",
//     degreeLevel: "",
//     fieldOfStudy: "",
//   });

//   useEffect(() => {
//     fetchScholarships();
//   }, [filters]);

//   const fetchScholarships = async () => {
//     try {
//       setLoading(true);
//       const data = await api.getScholarships(filters);
//       setScholarships(data.scholarships || []);

//       // Fetch featured separately
//       const featuredData = await api.getScholarships({
//         featured: "true",
//         limit: 6,
//       });
//       setFeaturedScholarships(featuredData.scholarships || []);

//       setError(null);
//     } catch (err) {
//       setError("Failed to load scholarships");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleClearFilters = () => {
//     setFilters({
//       search: "",
//       country: "",
//       degreeLevel: "",
//       fieldOfStudy: "",
//     });
//   };

//   return (
//     <main className="pt-0">
//       {/* =====================================================
//     SCHOLARSHIP HERO — ONLY HERO SECTION
//     ===================================================== */}

//       <section className="relative mx-4 overflow-hidden w-full rounded-[0px] bg-amber-300 lg:mx-8">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <img
//             src="/scalorship.jpg"
//             alt="Scholarships for Pakistani Students"
//             className="h-full w-full object-cover"
//           />
//         </div>

//         {/* Dark Green Theme Overlay */}
//         <div className="absolute inset-0 bg-[var(--primary-dark)]/40" />

//         {/* Subtle Green Gradient */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-dark)]/95 via-[var(--primary-dark)]/90 to-[var(--primary-dark)]/75" />

//         {/* Decorative Circle — Top Right */}
//         <div className="absolute -right-10 -top-24 h-64 w-64 rounded-full border border-[var(--primary)]/20 sm:h-72 sm:w-72 lg:h-80 lg:w-80" />

//         {/* Decorative Circle — Bottom Right */}
//         <div className="absolute -bottom-28 right-16 h-72 w-72 rounded-full border border-[var(--primary)]/15 sm:h-80 sm:w-80 lg:right-24 lg:h-96 lg:w-96" />

//         {/* Content */}
//         <div className="relative mx-auto min-h-[500px] max-w-[1320px] px-8 py-20 sm:px-10 lg:flex lg:min-h-[520px] lg:items-center lg:px-12">
//           <div className="max-w-3xl text-left">
//             {/* Label */}
//             <div className="mb-6 inline-flex items-center rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-4 py-1.5">
//               <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />

//               <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">
//                 Scholarship Assistance
//               </span>
//             </div>

//             {/* H1 */}
//             <h1 className="font-serif text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-[64px]">
//               Scholarships for
//               <br />
//               <span className="text-[var(--primary)]">Pakistani Students</span>
//             </h1>

//             {/* Intro Copy */}
//             <p className="mt-7 max-w-2xl text-sm leading-7 text-white/85 sm:text-base lg:text-[16px]">
//               Choosing the right country is as important as choosing the right
//               scholarship. Below, find country-specific scholarship guides
//               curated for Pakistani students, including funding coverage,
//               eligibility, and deadlines.
//             </p>

//             {/* Breadcrumb */}
//             <div className="mt-7 flex items-center gap-3 text-xs">
//               <Link
//                 href="/"
//                 className="text-white/60 transition-colors hover:text-white"
//               >
//                 Studyabroad
//               </Link>

//               <span className="text-white/40">›</span>

//               <span className="text-[var(--primary)]">Scholarships</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Statistics */}
//       <section className="py-16 bg-white">
//         <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             <div>
//               <p className="text-4xl font-bold text-[var(--primary)]">
//                 {scholarships.length}+
//               </p>
//               <p className="text-[var(--text-secondary)] mt-2">Scholarships</p>
//             </div>
//             <div>
//               <p className="text-4xl font-bold text-[var(--primary)]">20+</p>
//               <p className="text-[var(--text-secondary)] mt-2">Countries</p>
//             </div>
//             <div>
//               <p className="text-4xl font-bold text-[var(--primary)]">50+</p>
//               <p className="text-[var(--text-secondary)] mt-2">Universities</p>
//             </div>
//             <div>
//               <p className="text-4xl font-bold text-[var(--primary)]">100%</p>
//               <p className="text-[var(--text-secondary)] mt-2">Verified</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Search & Filter */}
//       <section id="scholarships" className="py-16 bg-[var(--background-light)]">
//         <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
//           <div className="bg-white rounded-2xl p-8 shadow-sm">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
//                   Search Scholarships
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Search by name..."
//                   value={filters.search}
//                   onChange={(e) =>
//                     setFilters({ ...filters, search: e.target.value })
//                   }
//                   className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
//                   Country
//                 </label>
//                 <select
//                   value={filters.country}
//                   onChange={(e) =>
//                     setFilters({ ...filters, country: e.target.value })
//                   }
//                   className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
//                 >
//                   <option value="">All Countries</option>
//                   <option value="canada">Canada</option>
//                   <option value="uk">United Kingdom</option>
//                   <option value="australia">Australia</option>
//                   <option value="usa">United States</option>
//                   <option value="germany">Germany</option>
//                   <option value="new-zealand">New Zealand</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
//                   Degree Level
//                 </label>
//                 <select
//                   value={filters.degreeLevel}
//                   onChange={(e) =>
//                     setFilters({ ...filters, degreeLevel: e.target.value })
//                   }
//                   className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
//                 >
//                   <option value="">All Degrees</option>
//                   <option value="Bachelors">Bachelors</option>
//                   <option value="Masters">Masters</option>
//                   <option value="PhD">PhD</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
//                   Field of Study
//                 </label>
//                 <select
//                   value={filters.fieldOfStudy}
//                   onChange={(e) =>
//                     setFilters({ ...filters, fieldOfStudy: e.target.value })
//                   }
//                   className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
//                 >
//                   <option value="">All Fields</option>
//                   <option value="Engineering">Engineering</option>
//                   <option value="Business">Business</option>
//                   <option value="Medicine">Medicine</option>
//                   <option value="Arts">Arts</option>
//                 </select>
//               </div>
//               <div className="flex items-end">
//                 <button
//                   onClick={handleClearFilters}
//                   className="w-full px-4 py-3 border border-[var(--border)] text-[var(--text-primary)] rounded-lg hover:bg-gray-50 transition-colors"
//                 >
//                   Clear Filters
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Scholarships */}
//       {featuredScholarships.length > 0 && (
//         <section className="py-16 bg-white">
//           <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
//             <div className="flex justify-between items-center mb-12">
//               <div>
//                 <h2 className="font-serif text-3xl lg:text-4xl text-[var(--text-primary)] mb-4">
//                   Featured Scholarships
//                 </h2>
//                 <p className="text-[var(--text-secondary)]">
//                   Top scholarship opportunities for ambitious students
//                 </p>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {featuredScholarships.map((scholarship) => (
//                 <Link
//                   key={scholarship.id}
//                   href={`/scholarships/${scholarship.slug}`}
//                   className="group"
//                 >
//                   <div className="bg-white rounded-2xl shadow-sm overflow-hidden transition-all hover:shadow-lg">
//                     {scholarship.image && (
//                       <div className="aspect-[16/10] relative">
//                         <img
//                           src={scholarship.image}
//                           alt={scholarship.title}
//                           className="w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[320px] xl:h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
//                         />
//                       </div>
//                     )}
//                     <div className="p-6">
//                       <div className="flex items-center gap-2 mb-3">
//                         {scholarship.featured && (
//                           <span className="inline-block px-3 py-1 bg-[var(--primary)] text-white text-xs font-medium rounded-full">
//                             Featured
//                           </span>
//                         )}
//                         {scholarship.country && (
//                           <span className="text-2xl">
//                             {scholarship.country.flag}
//                           </span>
//                         )}
//                       </div>
//                       <h3 className="font-serif text-xl font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--primary)] transition-colors line-clamp-2">
//                         {scholarship.title}
//                       </h3>
//                       <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-3">
//                         {scholarship.university && (
//                           <span>{scholarship.university.name}</span>
//                         )}
//                         {scholarship.university && scholarship.country && (
//                           <span>•</span>
//                         )}
//                         {scholarship.country && (
//                           <span>{scholarship.country.name}</span>
//                         )}
//                       </div>
//                       {scholarship.amount && (
//                         <p className="text-[var(--primary)] font-semibold mb-2">
//                           {scholarship.amount} {scholarship.currency}
//                         </p>
//                       )}
//                       {scholarship.deadline && (
//                         <p className="text-sm text-[var(--text-secondary)] mb-4">
//                           Deadline:{" "}
//                           {new Date(scholarship.deadline).toLocaleDateString()}
//                         </p>
//                       )}
//                       {scholarship.shortDescription && (
//                         <p className="text-[var(--text-secondary)] text-sm line-clamp-2 mb-4">
//                           {scholarship.shortDescription}
//                         </p>
//                       )}
//                       <button className="w-full py-2 border border-[var(--primary)] text-[var(--primary)] rounded-lg font-medium hover:bg-[var(--primary)] hover:text-white transition-colors">
//                         View Details
//                       </button>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* All Scholarships */}
//       <section className="py-16 bg-[var(--background-light)]">
//         <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
//           <div className="flex justify-between items-center mb-12">
//             <div>
//               <h2 className="font-serif text-3xl lg:text-4xl text-[var(--text-primary)] mb-4">
//                 All Scholarships
//               </h2>
//               <p className="text-[var(--text-secondary)]">
//                 {filters.search ||
//                 filters.country ||
//                 filters.degreeLevel ||
//                 filters.fieldOfStudy
//                   ? "Filtered results"
//                   : `Showing ${scholarships.length} scholarships`}
//               </p>
//             </div>
//           </div>

//           {loading ? (
//             <div className="text-center py-12">
//               <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)]"></div>
//               <p className="mt-4 text-[var(--text-secondary)]">
//                 Loading scholarships...
//               </p>
//             </div>
//           ) : error ? (
//             <div className="text-center py-12">
//               <p className="text-[var(--danger)]">{error}</p>
//               <button
//                 onClick={fetchScholarships}
//                 className="mt-4 px-6 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-dark)]"
//               >
//                 Try Again
//               </button>
//             </div>
//           ) : scholarships.length === 0 ? (
//             <div className="text-center py-12 bg-white rounded-2xl p-8">
//               <p className="text-[var(--text-secondary)] mb-4">
//                 No scholarships found matching your criteria.
//               </p>
//               <button
//                 onClick={handleClearFilters}
//                 className="px-6 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-dark)]"
//               >
//                 Clear Filters
//               </button>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {scholarships.map((scholarship) => (
//                 <Link
//                   key={scholarship.id}
//                   href={`/scholarships/${scholarship.slug}`}
//                   className="group"
//                 >
//                   <div className="bg-white rounded-2xl shadow-sm overflow-hidden transition-all hover:shadow-lg">
//                     {scholarship.image && (
//                       <div className="aspect-[16/10] relative">
//                         <img
//                           src={scholarship.image}
//                           alt={scholarship.title}
//                           className="w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[320px] xl:h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
//                         />
//                       </div>
//                     )}
//                     <div className="p-6">
//                       <div className="flex items-center gap-2 mb-3">
//                         {scholarship.featured && (
//                           <span className="inline-block px-3 py-1 bg-[var(--primary)] text-white text-xs font-medium rounded-full">
//                             Featured
//                           </span>
//                         )}
//                         {scholarship.country && (
//                           <span className="text-2xl">
//                             {scholarship.country.flag}
//                           </span>
//                         )}
//                       </div>
//                       <h3 className="font-serif text-xl font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--primary)] transition-colors line-clamp-2">
//                         {scholarship.title}
//                       </h3>
//                       <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-3">
//                         {scholarship.university && (
//                           <span>{scholarship.university.name}</span>
//                         )}
//                         {scholarship.university && scholarship.country && (
//                           <span>•</span>
//                         )}
//                         {scholarship.country && (
//                           <span>{scholarship.country.name}</span>
//                         )}
//                       </div>
//                       {scholarship.amount && (
//                         <p className="text-[var(--primary)] font-semibold mb-2">
//                           {scholarship.amount} {scholarship.currency}
//                         </p>
//                       )}
//                       {scholarship.deadline && (
//                         <p className="text-sm text-[var(--text-secondary)] mb-4">
//                           Deadline:{" "}
//                           {new Date(scholarship.deadline).toLocaleDateString()}
//                         </p>
//                       )}
//                       {scholarship.shortDescription && (
//                         <p className="text-[var(--text-secondary)] text-sm line-clamp-2 mb-4">
//                           {scholarship.shortDescription}
//                         </p>
//                       )}
//                       <button className="w-full py-2 border border-[var(--primary)] text-[var(--primary)] rounded-lg font-medium hover:bg-[var(--primary)] hover:text-white transition-colors">
//                         View Details
//                       </button>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>
//     </main>
//   );
// }



"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { api } from "@/lib/api";

export default function ScholarshipsPage() {
  const [scholarships, setScholarships] = useState([]);
  const [featuredScholarships, setFeaturedScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({
    search: "",
    country: "",
    degreeLevel: "",
    fieldOfStudy: "",
  });

  useEffect(() => {
    fetchScholarships();
  }, [filters]);

  const fetchScholarships = async () => {
    try {
      setLoading(true);

      const data = await api.getScholarships(filters);
      setScholarships(data.scholarships || []);

      // Fetch featured separately
      const featuredData = await api.getScholarships({
        featured: "true",
        limit: 6,
      });

      setFeaturedScholarships(featuredData.scholarships || []);

      setError(null);
    } catch (err) {
      setError("Failed to load scholarships");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleClearFilters = () => {
    setFilters({
      search: "",
      country: "",
      degreeLevel: "",
      fieldOfStudy: "",
    });
  };

  return (
    <main className="w-full max-w-full overflow-x-hidden pt-0">
      {/* =====================================================
          SCHOLARSHIP HERO
          ===================================================== */}

      <section className="relative w-full max-w-full overflow-hidden rounded-none">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/scalorship.jpg"
            alt="Scholarships for Pakistani Students"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Dark Green Theme Overlay */}
        <div className="absolute inset-0 z-10 bg-[var(--primary-dark)]/40" />

        {/* Green Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[var(--primary-dark)]/95 via-[var(--primary-dark)]/90 to-[var(--primary-dark)]/75" />

        {/* Decorative Circle — Top Right */}
        <div className="pointer-events-none absolute -right-24 -top-24 z-10 h-64 w-64 rounded-full border border-[var(--primary)]/20 sm:-right-20 sm:h-72 sm:w-72 lg:-right-16 lg:-top-28 lg:h-80 lg:w-80" />

        {/* Decorative Circle — Bottom Right */}
        <div className="pointer-events-none absolute -bottom-32 -right-24 z-10 h-72 w-72 rounded-full border border-[var(--primary)]/15 sm:-right-16 sm:h-80 sm:w-80 lg:-right-8 lg:h-96 lg:w-96" />

        {/* Hero Content */}
        <div className="relative z-20 mx-auto flex min-h-[500px] w-full max-w-[1320px] items-center px-6 py-20 lg:min-h-[540px] lg:px-8 lg:py-24">
          <div className="w-full max-w-3xl">
            {/* Label */}
            <div className="mb-6 inline-flex max-w-full items-center rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-4 py-1.5">
              <span className="mr-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--primary)] sm:text-[11px]">
                Scholarship Assistance
              </span>
            </div>

            {/* H1 */}
            <h1 className="max-w-2xl font-serif text-[38px] font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:max-w-3xl lg:text-6xl xl:text-[64px]">
              Scholarships for
              <br />
              <span className="text-[var(--primary)]">
                Pakistani Students
              </span>
            </h1>

            {/* Intro Copy */}
            <p className="mt-6 w-full max-w-2xl text-sm leading-7 text-white/85 sm:mt-7 sm:text-base lg:text-[16px]">
              Choosing the right country is as important as choosing the right
              scholarship. Below, find country-specific scholarship guides
              curated for Pakistani students, including funding coverage,
              eligibility, and deadlines.
            </p>

            {/* Breadcrumb */}
            <div className="mt-6 flex items-center gap-3 text-xs sm:mt-7">
              <Link
                href="/"
                className="text-white/60 transition-colors hover:text-white"
              >
                Studyabroad
              </Link>

              <span className="text-white/40">›</span>

              <span className="text-[var(--primary)]">
                Scholarships
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATISTICS
          ===================================================== */}

      <section className="w-full bg-white py-16">
        <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <p className="text-4xl font-bold text-[var(--primary)]">
                {scholarships.length}+
              </p>

              <p className="mt-2 text-[var(--text-secondary)]">
                Scholarships
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-[var(--primary)]">
                20+
              </p>

              <p className="mt-2 text-[var(--text-secondary)]">
                Countries
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-[var(--primary)]">
                50+
              </p>

              <p className="mt-2 text-[var(--text-secondary)]">
                Universities
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-[var(--primary)]">
                100%
              </p>

              <p className="mt-2 text-[var(--text-secondary)]">
                Verified
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SEARCH & FILTER
          ===================================================== */}

      <section
        id="scholarships"
        className="w-full bg-[var(--background-light)] py-16"
      >
        <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-8">
          <div className="w-full rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
              {/* Search */}
              <div className="min-w-0">
                <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                  Search Scholarships
                </label>

                <input
                  type="text"
                  placeholder="Search by name..."
                  value={filters.search}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      search: e.target.value,
                    })
                  }
                  className="w-full min-w-0 rounded-lg border border-[var(--border)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>

              {/* Country */}
              <div className="min-w-0">
                <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                  Country
                </label>

                <select
                  value={filters.country}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      country: e.target.value,
                    })
                  }
                  className="w-full min-w-0 rounded-lg border border-[var(--border)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                >
                  <option value="">All Countries</option>
                  <option value="canada">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="australia">Australia</option>
                  <option value="usa">United States</option>
                  <option value="germany">Germany</option>
                  <option value="new-zealand">New Zealand</option>
                </select>
              </div>

              {/* Degree Level */}
              <div className="min-w-0">
                <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                  Degree Level
                </label>

                <select
                  value={filters.degreeLevel}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      degreeLevel: e.target.value,
                    })
                  }
                  className="w-full min-w-0 rounded-lg border border-[var(--border)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                >
                  <option value="">All Degrees</option>
                  <option value="Bachelors">Bachelors</option>
                  <option value="Masters">Masters</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>

              {/* Field of Study */}
              <div className="min-w-0">
                <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                  Field of Study
                </label>

                <select
                  value={filters.fieldOfStudy}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      fieldOfStudy: e.target.value,
                    })
                  }
                  className="w-full min-w-0 rounded-lg border border-[var(--border)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                >
                  <option value="">All Fields</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Business">Business</option>
                  <option value="Medicine">Medicine</option>
                  <option value="Arts">Arts</option>
                </select>
              </div>

              {/* Clear */}
              <div className="flex min-w-0 items-end">
                <button
                  onClick={handleClearFilters}
                  className="w-full rounded-lg border border-[var(--border)] px-4 py-3 text-[var(--text-primary)] transition-colors hover:bg-gray-50"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED SCHOLARSHIPS
          ===================================================== */}

      {featuredScholarships.length > 0 && (
        <section className="w-full bg-white py-16">
          <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-8">
            <div className="mb-12 flex items-center justify-between">
              <div className="min-w-0">
                <h2 className="mb-4 font-serif text-3xl text-[var(--text-primary)] lg:text-4xl">
                  Featured Scholarships
                </h2>

                <p className="text-[var(--text-secondary)]">
                  Top scholarship opportunities for ambitious students
                </p>
              </div>
            </div>

            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredScholarships.map((scholarship) => (
                <Link
                  key={scholarship.id}
                  href={`/scholarships/${scholarship.slug}`}
                  className="group block min-w-0"
                >
                  <div className="w-full overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-lg">
                    {scholarship.image && (
                      <div className="relative aspect-[16/10] w-full overflow-hidden">
                        <img
                          src={scholarship.image}
                          alt={scholarship.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}

                    <div className="p-6">
                      <div className="mb-3 flex items-center gap-2">
                        {scholarship.featured && (
                          <span className="inline-block rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-medium text-white">
                            Featured
                          </span>
                        )}

                        {scholarship.country && (
                          <span className="text-2xl">
                            {scholarship.country.flag}
                          </span>
                        )}
                      </div>

                      <h3 className="mb-2 line-clamp-2 font-serif text-xl font-semibold text-[var(--text-primary)] transition-colors group-hover:text-[var(--primary)]">
                        {scholarship.title}
                      </h3>

                      <div className="mb-3 flex flex-wrap items-center gap-2 text-sm text-[var(--text-secondary)]">
                        {scholarship.university && (
                          <span>{scholarship.university.name}</span>
                        )}

                        {scholarship.university &&
                          scholarship.country && <span>•</span>}

                        {scholarship.country && (
                          <span>{scholarship.country.name}</span>
                        )}
                      </div>

                      {scholarship.amount && (
                        <p className="mb-2 font-semibold text-[var(--primary)]">
                          {scholarship.amount} {scholarship.currency}
                        </p>
                      )}

                      {scholarship.deadline && (
                        <p className="mb-4 text-sm text-[var(--text-secondary)]">
                          Deadline:{" "}
                          {new Date(
                            scholarship.deadline
                          ).toLocaleDateString()}
                        </p>
                      )}

                      {scholarship.shortDescription && (
                        <p className="mb-4 line-clamp-2 text-sm text-[var(--text-secondary)]">
                          {scholarship.shortDescription}
                        </p>
                      )}

                      <span className="block w-full rounded-lg border border-[var(--primary)] py-2 text-center font-medium text-[var(--primary)] transition-colors hover:bg-[var(--primary)] hover:text-white">
                        View Details
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          ALL SCHOLARSHIPS
          ===================================================== */}

      <section className="w-full bg-[var(--background-light)] py-16">
        <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-8">
          <div className="mb-12 flex items-center justify-between">
            <div className="min-w-0">
              <h2 className="mb-4 font-serif  text-3xl text-[var(--text-primary)] lg:text-4xl">
                All Scholarships
              </h2>

              <p className="text-[var(--text-secondary)]">
                {filters.search ||
                filters.country ||
                filters.degreeLevel ||
                filters.fieldOfStudy
                  ? "Filtered results"
                  : `Showing ${scholarships.length} scholarships`}
              </p>
            </div>
          </div>

          {/* Loading */}
          {loading ? (
            <div className="py-12 text-center">
              <div className="inline-block h-12 w-12 animate-spin rounded-full border-b-2 border-[var(--primary)]"></div>

              <p className="mt-4 text-[var(--text-secondary)]">
                Loading scholarships...
              </p>
            </div>
          ) : error ? (
            /* Error */
            <div className="py-12 text-center">
              <p className="text-[var(--danger)]">{error}</p>

              <button
                onClick={fetchScholarships}
                className="mt-4 rounded-lg bg-[var(--primary)] px-6 py-2 text-white hover:bg-[var(--primary-dark)]"
              >
                Try Again
              </button>
            </div>
          ) : scholarships.length === 0 ? (
            /* Empty */
            <div className="w-full rounded-2xl bg-white p-8 py-12 text-center">
              <p className="mb-4 text-[var(--text-secondary)]">
                No scholarships found matching your criteria.
              </p>

              <button
                onClick={handleClearFilters}
                className="rounded-lg bg-[var(--primary)] px-6 py-2 text-white hover:bg-[var(--primary-dark)]"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            /* Scholarship Cards */
            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {scholarships.map((scholarship) => (
                <Link
                  key={scholarship.id}
                  href={`/scholarships/${scholarship.slug}`}
                  className="group block min-w-0"
                >
                  <div className="w-full overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-lg">
                    {scholarship.image && (
                      <div className="relative aspect-[16/10] w-full overflow-hidden">
                        <img
                          src={scholarship.image}
                          alt={scholarship.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}

                    <div className="p-6">
                      <div className="mb-3 flex items-center gap-2">
                        {scholarship.featured && (
                          <span className="inline-block rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-medium text-white">
                            Featured
                          </span>
                        )}

                        {scholarship.country && (
                          <span className="text-2xl">
                            {scholarship.country.flag}
                          </span>
                        )}
                      </div>

                      <h3 className="mb-2 line-clamp-2 font-serif text-xl font-semibold text-[var(--text-primary)] transition-colors group-hover:text-[var(--primary)]">
                        {scholarship.title}
                      </h3>

                      <div className="mb-3 flex flex-wrap items-center gap-2 text-sm text-[var(--text-secondary)]">
                        {scholarship.university && (
                          <span>{scholarship.university.name}</span>
                        )}

                        {scholarship.university &&
                          scholarship.country && <span>•</span>}

                        {scholarship.country && (
                          <span>{scholarship.country.name}</span>
                        )}
                      </div>

                      {scholarship.amount && (
                        <p className="mb-2 font-semibold text-[var(--primary)]">
                          {scholarship.amount} {scholarship.currency}
                        </p>
                      )}

                      {scholarship.deadline && (
                        <p className="mb-4 text-sm text-[var(--text-secondary)]">
                          Deadline:{" "}
                          {new Date(
                            scholarship.deadline
                          ).toLocaleDateString()}
                        </p>
                      )}

                      {scholarship.shortDescription && (
                        <p className="mb-4 line-clamp-2 text-sm text-[var(--text-secondary)]">
                          {scholarship.shortDescription}
                        </p>
                      )}

                      <span className="block w-full rounded-lg border border-[var(--primary)] py-2 text-center font-medium text-[var(--primary)] transition-colors hover:bg-[var(--primary)] hover:text-white">
                        View Details
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
