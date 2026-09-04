// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import { Fraunces } from "next/font/google";
// import {
//   ArrowRight,
//   Bell,
//   BookmarkPlus,
//   CalendarClock,
//   MapPin,
//   RefreshCw,
//   Search,
//   ShieldCheck,
// } from "lucide-react";
// import ScholarshipImage from "@/components/scholarships/ScholarshipImage";

// const fraunces = Fraunces({
//   subsets: ["latin"],
//   weight: ["500", "600"],
//   variable: "--font-fraunces",
// });

// const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// export default function LatestScholarshipsClient() {
//   const [scholarships, setScholarships] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     let ignore = false;

//     async function fetchScholarships() {
//       try {
//         setLoading(true);
//         setError(null);

//         const res = await fetch(`${API_URL}/scholarships/latest`);
//         if (!res.ok) throw new Error(`Failed to fetch scholarships: ${res.statusText}`);

//         const data = await res.json();
//         const list = data.scholarships || data || [];

//         // Newest-first, per the content spec — sort by addedAt/createdAt
//         // whenever the backend provides it, so editors don't have to
//         // remember to pre-sort their payload.
//         const sorted = [...list].sort((a, b) => {
//           const dateA = new Date(a.addedAt || a.addedDate || a.createdAt || 0);
//           const dateB = new Date(b.addedAt || b.addedDate || b.createdAt || 0);
//           return dateB - dateA;
//         });

//         if (!ignore) setScholarships(sorted);
//       } catch (err) {
//         if (!ignore) setError(err.message || "Something went wrong.");
//       } finally {
//         if (!ignore) setLoading(false);
//       }
//     }

//     fetchScholarships();
//     return () => {
//       ignore = true;
//     };
//   }, []);

//   const filtered = useMemo(() => {
//     const query = search.trim().toLowerCase();
//     if (!query) return scholarships;

//     return scholarships.filter((item) => {
//       const haystack = [
//         item.title,
//         item.scholarshipName,
//         item.country,
//         item.level,
//         item.degreeLevel,
//         item.fundingType,
//         item.coverage,
//       ]
//         .filter(Boolean)
//         .join(" ")
//         .toLowerCase();

//       return haystack.includes(query);
//     });
//   }, [scholarships, search]);

//   const newThisWeek = useMemo(
//     () => scholarships.filter((s) => isWithinDays(s.addedAt || s.addedDate || s.createdAt, 7)).length,
//     [scholarships]
//   );

//   return (
//     <main className={`${fraunces.variable} bg-white`}>
//       {/* ---------------------------------------------------------------
//           Masthead — sets the "we're watching this so you don't have to"
//           premise from the content brief, in the site's navy/gold palette.
//       --------------------------------------------------------------- */}
//       <section className="bg-[#0B1F3A] text-white">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-14">
//           <div className="inline-flex items-center gap-2 text-[#F2C265] text-sm font-medium">
//             <span className="relative flex h-2 w-2">
//               <span className="absolute inline-flex h-full w-full rounded-full bg-[#F2C265] opacity-75 animate-ping" />
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F2C265]" />
//             </span>
//             Tracking announcements in real time
//           </div>

//           <h1
//             className="mt-5 text-[2.5rem] sm:text-[3.25rem] leading-[1.08] font-semibold"
//             style={{ fontFamily: "var(--font-fraunces)" }}
//           >
//             Latest Scholarships — Newly
//             <br className="hidden sm:block" /> Announced Opportunities
//           </h1>

//           <p className="mt-5 max-w-2xl text-white/70 text-base sm:text-lg leading-7">
//             Scholarship cycles open and close throughout the year — some
//             without much notice. We monitor official government portals,
//             embassy pages, and university announcements so new opportunities
//             reach you as soon as they're confirmed.
//           </p>

//           <p className="mt-3 max-w-2xl text-white/50 text-sm leading-6">
//             Bookmark this page and check back weekly, or set a reminder, so
//             you never miss an early application window.
//           </p>

//           <div className="mt-9 flex flex-wrap items-center gap-x-10 gap-y-4">
//             <Stat value={scholarships.length || "—"} label="Tracked right now" />
//             <Stat value={newThisWeek || "—"} label="Added this week" />
//             <div className="flex items-center gap-2 text-white/60 text-sm">
//               <ShieldCheck size={16} className="text-[#3FA66B]" />
//               Verified from official sources
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------------------------------------------------------------
//           Feed
//       --------------------------------------------------------------- */}
//       <section className="bg-white">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
//           <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">
//             <div>
//               <h2
//                 className="text-2xl sm:text-[1.75rem] font-semibold text-[#172033]"
//                 style={{ fontFamily: "var(--font-fraunces)" }}
//               >
//                 Recently announced
//               </h2>
//               <p className="mt-1.5 text-[#64748B] text-sm">
//                 Newest first. Each entry shows the date it was added, so you
//                 can spot what's genuinely new.
//               </p>
//             </div>

//             <div className="relative w-full sm:w-72 shrink-0">
//               <Search
//                 size={17}
//                 className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]"
//               />
//               <input
//                 type="text"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search country, level, funding..."
//                 className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#E2E8F0] bg-[#F7F9FC] text-sm text-[#172033] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#1557A6]/30 focus:border-[#1557A6] transition"
//               />
//             </div>
//           </div>

//           {loading && <FeedLoading />}
//           {!loading && error && <FeedError message={error} />}
//           {!loading && !error && filtered.length === 0 && (
//             <FeedEmpty searching={Boolean(search)} onClear={() => setSearch("")} />
//           )}

//           {!loading && !error && filtered.length > 0 && (
//             <ol className="relative">
//               {filtered.map((item, index) => (
//                 <TimelineEntry
//                   key={item.id || item._id || index}
//                   scholarship={item}
//                   isLast={index === filtered.length - 1}
//                 />
//               ))}
//             </ol>
//           )}
//         </div>
//       </section>

//       {/* ---------------------------------------------------------------
//           Closing CTA
//       --------------------------------------------------------------- */}
//       <section className="bg-[#F7F9FC] border-t border-[#E2E8F0]">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
//           <div className="rounded-2xl bg-white border border-[#E2E8F0] px-6 py-8 sm:px-10 sm:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
//             <div className="flex items-start gap-4">
//               <div className="w-11 h-11 rounded-xl bg-[#FDF3E3] text-[#C98B1D] flex items-center justify-center shrink-0">
//                 <Bell size={20} />
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold text-[#172033]">
//                   Want new scholarships sent straight to you?
//                 </h3>
//                 <p className="mt-1 text-[#64748B] text-sm max-w-md">
//                   Subscribe for scholarship alerts and get notified the day a
//                   new opportunity opens.
//                 </p>
//               </div>
//             </div>

//             <Link
//               href="/contact"
//               className="inline-flex items-center justify-center gap-2 bg-[#C98B1D] hover:bg-[#b77b16] text-white font-semibold px-6 py-3 rounded-lg transition whitespace-nowrap shrink-0"
//             >
//               Subscribe for alerts
//               <ArrowRight size={17} />
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// /* ---------------------------------------------------------------------
//    Pieces
// --------------------------------------------------------------------- */

// function Stat({ value, label }) {
//   return (
//     <div>
//       <div
//         className="text-2xl font-semibold text-white"
//         style={{ fontFamily: "var(--font-fraunces)" }}
//       >
//         {value}
//       </div>
//       <div className="text-white/50 text-xs mt-0.5">{label}</div>
//     </div>
//   );
// }

// function TimelineEntry({ scholarship, isLast }) {
//   const title =
//     scholarship.title || scholarship.scholarshipName || "Scholarship Opportunity";
//   const country = scholarship.country || "International";
//   const level = scholarship.level || scholarship.degreeLevel || "Multiple levels";
//   const summary =
//     scholarship.coverage ||
//     scholarship.coverageDetails ||
//     scholarship.description ||
//     "Check the official scholarship page for full coverage and eligibility details.";
//   const deadline = scholarship.deadline || scholarship.deadlineDate;
//   const addedDate = scholarship.addedAt || scholarship.addedDate || scholarship.createdAt;
//   const status = scholarship.status || "Open";
//   const daysRemaining = getDaysRemaining(deadline);
//   const isNew = isWithinDays(addedDate, 7);
//   const thumb = scholarship.image || scholarship.thumbnail || scholarship.logo;

//   const detailHref = scholarship.slug
//     ? `/scholarships/${scholarship.slug}`
//     : `/scholarships/${scholarship.id || scholarship._id || ""}`;

//   return (
//     <li className="relative pl-9 sm:pl-12">
//       {/* Timeline rail */}
//       <span
//         className={`absolute left-[7px] sm:left-[9px] top-1 w-2.5 h-2.5 rounded-full ${
//           isNew ? "bg-[#C98B1D]" : "bg-[#CBD5E1]"
//         }`}
//       />
//       {!isLast && (
//         <span className="absolute left-3 sm:left-[13px] top-4 bottom-0 w-px bg-[#E2E8F0]" />
//       )}

//       <div className="pb-9">
//         <div className="flex flex-col sm:flex-row sm:items-start gap-4 rounded-xl border border-[#E2E8F0] p-4 sm:p-5 hover:border-[#CBD5E1] transition-colors">
//           <ScholarshipImage
//             src={thumb}
//             alt={title}
//             className="w-full sm:w-24 h-32 sm:h-24 shrink-0"
//             rounded="rounded-lg"
//           />

//           <div className="flex-1 min-w-0">
//             <div className="flex flex-wrap items-center gap-2 mb-1.5">
//               {isNew && (
//                 <span className="text-[11px] font-semibold tracking-wide text-[#C98B1D] bg-[#FDF3E3] px-2 py-0.5 rounded">
//                   NEW
//                 </span>
//               )}
//               <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusClasses(status)}`}>
//                 {status}
//               </span>
//               {addedDate && (
//                 <span className="text-xs text-[#94A3B8]">
//                   Added {formatDate(addedDate)}
//                 </span>
//               )}
//             </div>

//             <h3 className="text-[#172033] font-semibold text-base sm:text-lg leading-snug">
//               {title}
//               <span className="text-[#64748B] font-normal"> — {country} — {level}</span>
//             </h3>

//             <p className="mt-1.5 text-sm text-[#64748B] leading-6 line-clamp-2">
//               {summary}
//             </p>

//             <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
//               <span className="inline-flex items-center gap-1.5 text-xs text-[#64748B]">
//                 <MapPin size={13} />
//                 {country}
//               </span>

//               <span className="inline-flex items-center gap-1.5 text-xs text-[#64748B]">
//                 <CalendarClock size={13} />
//                 Deadline: {deadline ? formatDate(deadline) : "Check official source"}
//               </span>

//               {daysRemaining !== null && (
//                 <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${urgencyClasses(daysRemaining)}`}>
//                   {daysRemaining < 0
//                     ? "Closed"
//                     : daysRemaining === 0
//                     ? "Deadline today"
//                     : `${daysRemaining} days remaining`}
//                 </span>
//               )}
//             </div>
//           </div>

//           <Link
//             href={detailHref}
//             className="self-start sm:self-center inline-flex items-center gap-1.5 text-sm font-semibold text-[#1557A6] hover:text-[#0e3f7d] whitespace-nowrap shrink-0"
//           >
//             View Details
//             <ArrowRight size={15} />
//           </Link>
//         </div>
//       </div>
//     </li>
//   );
// }

// function FeedLoading() {
//   return (
//     <div className="space-y-4">
//       {[0, 1, 2].map((i) => (
//         <div
//           key={i}
//           className="h-28 rounded-xl border border-[#E2E8F0] bg-[#F7F9FC] animate-pulse"
//         />
//       ))}
//     </div>
//   );
// }

// function FeedError({ message }) {
//   return (
//     <div className="text-center py-16 border border-[#FBD5D5] bg-[#FEF2F2] rounded-xl">
//       <div className="w-10 h-10 mx-auto rounded-full bg-white border border-[#FBD5D5] text-[#DC2626] flex items-center justify-center font-semibold">
//         !
//       </div>
//       <h3 className="mt-3 font-semibold text-[#172033]">Unable to load scholarships</h3>
//       <p className="mt-1 text-sm text-[#64748B]">{message}</p>
//       <button
//         type="button"
//         onClick={() => window.location.reload()}
//         className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1557A6] hover:text-[#0e3f7d]"
//       >
//         <RefreshCw size={15} />
//         Try again
//       </button>
//     </div>
//   );
// }

// function FeedEmpty({ searching, onClear }) {
//   return (
//     <div className="text-center py-16 border border-[#E2E8F0] rounded-xl bg-[#F7F9FC]">
//       <div className="w-10 h-10 mx-auto rounded-full bg-white border border-[#E2E8F0] text-[#94A3B8] flex items-center justify-center">
//         <Search size={18} />
//       </div>
//       <h3 className="mt-3 font-semibold text-[#172033]">
//         {searching ? "No matches for that search" : "No new scholarships yet"}
//       </h3>
//       <p className="mt-1 text-sm text-[#64748B] max-w-sm mx-auto">
//         {searching
//           ? "Try a different country, level, or funding type."
//           : "Check back soon — this page updates as new opportunities are confirmed."}
//       </p>
//       {searching && (
//         <button
//           type="button"
//           onClick={onClear}
//           className="mt-4 text-sm font-semibold text-[#1557A6] hover:text-[#0e3f7d]"
//         >
//           Clear search
//         </button>
//       )}
//       {!searching && (
//         <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-[#94A3B8]">
//           <BookmarkPlus size={14} />
//           Bookmark this page to check back weekly
//         </div>
//       )}
//     </div>
//   );
// }

// /* ---------------------------------------------------------------------
//    Helpers
// --------------------------------------------------------------------- */

// function statusClasses(status) {
//   const value = String(status).toLowerCase();
//   if (value.includes("closed")) return "bg-[#F1F5F9] text-[#64748B]";
//   if (value.includes("soon")) return "bg-[#FDF3E3] text-[#C98B1D]";
//   return "bg-[#EAF7EF] text-[#3FA66B]";
// }

// function urgencyClasses(days) {
//   if (days < 0) return "bg-[#F1F5F9] text-[#64748B]";
//   if (days <= 7) return "bg-[#FEF2F2] text-[#DC2626]";
//   if (days <= 30) return "bg-[#FDF3E3] text-[#C98B1D]";
//   return "bg-[#EAF7EF] text-[#3FA66B]";
// }

// function formatDate(date) {
//   if (!date) return "";
//   const parsed = new Date(date);
//   if (Number.isNaN(parsed.getTime())) return date;
//   return parsed.toLocaleDateString("en-GB", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });
// }

// function getDaysRemaining(deadline) {
//   if (!deadline) return null;
//   const deadlineDate = new Date(deadline);
//   if (Number.isNaN(deadlineDate.getTime())) return null;

//   const today = new Date();
//   today.setHours(0, 0, 0, 0);
//   deadlineDate.setHours(0, 0, 0, 0);

//   return Math.ceil((deadlineDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
// }

// function isWithinDays(date, days) {
//   if (!date) return false;
//   const parsed = new Date(date);
//   if (Number.isNaN(parsed.getTime())) return false;

//   const diff = (Date.now() - parsed.getTime()) / (1000 * 60 * 60 * 24);
//   return diff >= 0 && diff <= days;
// }
"use client";

import { useEffect, useState } from "react";

import ScholarshipHero from "@/components/scholarships/latestscholarships/ScholarshipHero";
import ScholarshipCards from "@/components/scholarships/latestscholarships/ScholarshipCards";
import ScholarshipCTA from "@/components/scholarships/latestscholarships/ScholarshipCTA";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:5000/api";

export default function Latest_Scholarships_Page() {
  const [scholarships, setScholarships] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `${API_URL}/scholarships/latest`
        );

        if (!res.ok) {
          throw new Error(
            `Failed to fetch scholarships: ${res.statusText}`
          );
        }

        const data = await res.json();

        setScholarships(
          data.scholarships || []
        );

      } catch (err) {
        setError(
          err.message ||
            "Something went wrong."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchScholarships();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      <ScholarshipHero
        count={scholarships.length}
      />

      {loading ? (
        <section className="bg-slate-50 py-20">
          <div className="mx-auto flex max-w-[1320px] px-6 lg:px-8 justify-center">
            <div className="h-11 w-11 animate-spin rounded-full border-4 border-blue-100 border-t-blue-600" />
          </div>
        </section>
      ) : error ? (
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-[1320px] px-6 lg:px-8 text-center">

            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-red-100 font-bold text-red-600">
              !
            </div>

            <h2 className="mt-4 text-xl font-bold">
              Unable to load scholarships
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              {error}
            </p>

          </div>
        </section>
      ) : (
        <ScholarshipCards
          scholarships={scholarships}
        />
      )}

      <ScholarshipCTA />

    </main>
  );
}