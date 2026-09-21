// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { api } from "@/lib/api";

// export default function FeaturedScholarships({ limit = 6 }) {
//   const [scholarships, setScholarships] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchFeatured();
//   }, []);

//   const fetchFeatured = async () => {
//     try {
//       setLoading(true);
//       const data = await api.getScholarships({ featured: "true", limit });
//       setScholarships(data.scholarships || []);
//       setError(null);
//     } catch (err) {
//       setError("Failed to load featured scholarships");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <section className="w-full bg-white py-16">
//         <div className="mx-auto w-full max-w-[1320px] px-6 text-center lg:px-8">
//           <div className="inline-block h-10 w-10 animate-spin rounded-full border-b-2 border-[var(--primary)]" />
//         </div>
//       </section>
//     );
//   }

//   if (error || scholarships.length === 0) return null;

//   return (
//     <section className="w-full bg-white py-16">
//       <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-8">
//         <div className="mb-12">
//           <h2 className="mb-4 font-serif text-3xl text-[var(--text-primary)] lg:text-4xl">
//             Featured Scholarships
//           </h2>
//           <p className="text-[var(--text-secondary)]">
//             Top scholarship opportunities for ambitious students
//           </p>
//         </div>

//         <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {scholarships.map((scholarship) => (
//             <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // Shared card — kept local here; see note below about extracting it once.
// function ScholarshipCard({ scholarship }) {
//   return (
//     <Link href={`/scholarships/${scholarship.slug}`} className="group block min-w-0">
//       <div className="w-full overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-lg">
//         {scholarship.image && (
//           <div className="relative aspect-[16/10] w-full overflow-hidden">
//             <img
//               src={scholarship.image}
//               alt={scholarship.title}
//               className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//             />
//           </div>
//         )}

//         <div className="p-6">
//           <div className="mb-3 flex items-center gap-2">
//             {scholarship.featured && (
//               <span className="inline-block rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-medium text-white">
//                 Featured
//               </span>
//             )}
//             {scholarship.country && (
//               <span className="text-2xl">{scholarship.country.flag}</span>
//             )}
//           </div>

//           <h3 className="mb-2 line-clamp-2 font-serif text-xl font-semibold text-[var(--text-primary)] transition-colors group-hover:text-[var(--primary)]">
//             {scholarship.title}
//           </h3>

//           <div className="mb-3 flex flex-wrap items-center gap-2 text-sm text-[var(--text-secondary)]">
//             {scholarship.university && <span>{scholarship.university.name}</span>}
//             {scholarship.university && scholarship.country && <span>•</span>}
//             {scholarship.country && <span>{scholarship.country.name}</span>}
//           </div>

//           {scholarship.amount && (
//             <p className="mb-2 font-semibold text-[var(--primary)]">
//               {scholarship.amount} {scholarship.currency}
//             </p>
//           )}

//           {scholarship.deadline && (
//             <p className="mb-4 text-sm text-[var(--text-secondary)]">
//               Deadline: {new Date(scholarship.deadline).toLocaleDateString()}
//             </p>
//           )}

//           {scholarship.shortDescription && (
//             <p className="mb-4 line-clamp-2 text-sm text-[var(--text-secondary)]">
//               {scholarship.shortDescription}
//             </p>
//           )}

//           <span className="block w-full rounded-lg border border-[var(--primary)] py-2 text-center font-medium text-[var(--primary)] transition-colors hover:bg-[var(--primary)] hover:text-white">
//             View Details
//           </span>
//         </div>
//       </div>
//     </Link>
//   );
// }




"use client";

import { useState, useEffect } from "react";
import ScholarshipsHero from "@/components/scholarships/latestscholarships/ScholarshipHero";
import ScholarshipCards from "@/components/scholarships/latestscholarships/ScholarshipCards";
import { api } from "@/lib/api";

export default function FeaturedScholarships() {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFeatured();
  }, []);

  const fetchFeatured = async () => {
    try {
      setLoading(true);
      const data = await api.getScholarships({ featured: "true" });
      setScholarships(data.scholarships || []);
      setError(null);
    } catch (err) {
      setError("Failed to load featured scholarships");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ScholarshipsHero
        image="/scalorship.jpg"
        badge="Hand-Picked Opportunities"
        titleLine1="Featured"
        titleHighlight="Scholarships"
        description="Our consultants' top picks — fully funded and high-coverage scholarships worth prioritizing in your applications this cycle."
        breadcrumbLabel="Featured Scholarships"
      />

      {error ? (
        <div className="mx-auto w-full max-w-[1320px] px-6 py-12 text-center lg:px-8">
          <p className="text-[var(--danger)]">{error}</p>
          <button
            onClick={fetchFeatured}
            className="mt-4 rounded-lg bg-[var(--primary)] px-6 py-2 text-white hover:bg-[var(--primary-dark)]"
          >
            Try Again
          </button>
        </div>
      ) : (
        <ScholarshipCards scholarships={scholarships} loading={loading} />
      )}
    </>
  );
}