// "use client";

// import { useState, useEffect, lazy } from "react";
// import {siteConfig} from "@/config/siteConfig";
// import Link from "next/link";
// // import Image from "next/image";

// import { HiBars3 } from "react-icons/hi2";
// import { IoClose } from "react-icons/io5";
// import { FaChevronDown, FaArrowRight } from "react-icons/fa";

// const NavBar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [sticky, setSticky] = useState(false);

//   const [visaOpen, setVisaOpen] = useState(false);
//   const [scholarshipOpen, setScholarshipOpen] = useState(false);
//   const [blogOpen, setBlogOpen] = useState(false);

//   const [mobileVisa, setMobileVisa] = useState(false);
//   const [mobileScholarship, setMobileScholarship] = useState(false);
//   const [mobileBlog, setMobileBlog] = useState(false);

//   const [freeEducationOpen, setFreeEducationOpen] = useState(false);
//   const [mobileFreeEducation, setMobileFreeEducation] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setSticky(window.scrollY > 30);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const visaLinks = [
//     // { title: "Student Visa", link: "/visa" },
//     { title: "Visa Consultation", link: "/visaConsultation"},
//     { title: "University Selection", link: "/universitySelection"},
//     { title: "Pathway Programs", link: "/pathwayPrograms"},
//     { title: "Application and Documentation", link: "/applicationAndDocumentation"},
//     { title: "IELTS Preparation", link: "/IELTSPreparation"},
//     { title: "Spouse and Dependent Visa", link: "/spouseandDependentVisa"},
//     { title: "Visa Interview Preparation", link: "/visaInterviewPreparation"},
//     { title: "Post Study Work Visa", link: "/postStudyWorkVisa"},
//     { title: "Country Requirements", link: "/countryRequirements"},
//     { title: "PR Destinations (Permanent Residency Pathways)", link: "/PRDestinations"},

//   ];

//   const scholarshipLinks = [
//     { title: "All Scholarships", link: "/scholarships" },
//     { title: "Latest Scholarships", link: "/scholarships/latest-scholarships" },
//     {
//       title: "Featured Scholarships",
//       link: "/scholarships/featured-scholarships",
//     },
//     { title: "Scholarship Guide", link: "/scholarship-guide" },
//   ];

//   const blogLinks = [
//     { title: "All Blogs", link: "/blog" },
//     { title: "Latest News", link: "/blog" },
//     { title: "Travel Tips", link: "/blog" },
//     { title: "Study Abroad", link: "/blog" },
//   ];
//   const FreeEducationLinks = [
//     { title: "By Countries", link: "/countries" },
//     { title: "By Universties", link: "/universties" },
//   ];

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
//           sticky ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-md"
//         }`}
//       >
//         {/* ================= DESKTOP HEIGHT ONLY ================= */}
//         <div className="mx-auto flex h-[90px] lg:h-[80px] max-w-[1320px] items-center justify-between px-6 lg:px-8">
//           {/* ================= LOGO ================= */}
//           {/* <Link href="/" className="flex items-center shrink-0">
//             <img
//               src="/logo2.png"
//               alt="Logo"
//               className="w-[125px] h-[75px] sm:w-[145px] sm:h-[85px] lg:w-[155px]  lg:h-[72px] object-contain"
//             />
//           </Link> */}
//           <Link href="/" className="flex items-center shrink-0">
//             <img
//               src={siteConfig.LOGO}
//               alt={siteConfig.COMPANY_NAME}
//               className="w-[125px] sm:w-[145px] lg:w-[200px] h-auto object-contain"
//             />
//           </Link>

//           {/* ================= DESKTOP MENU ================= */}
//           <nav className="hidden items-center gap-9 lg:flex">
//             {/* HOME */}
//             <Link
//               href="/"
//               className="text-[15px]  font-serif font-bold uppercase transition text-[var(--primary-dark)] hover:text-[var(--primary)]"
//             >
//               Home
//             </Link>

//             {/* ABOUT US */}
//             <Link
//               href="/about"
//               className="text-[15px] font-serif font-bold uppercase text-[var(--primary-dark)] transition hover:text-[var(--primary)]"
//             >
//               About Us
//             </Link>

//             {/* ===== BLOG DROPDOWN ===== */}
//             <div
//               className="relative flex items-center"
//               onMouseEnter={() => setBlogOpen(true)}
//               onMouseLeave={() => setBlogOpen(false)}
//             >
//               <button className="flex text-[var(--primary-dark)] cursor-pointer items-center gap-1.5 text-[15px] font-serif font-bold uppercase transition hover:text-[var(--primary)]">
//                 Blog
//                 <FaChevronDown
//                   className={`text-[8px] transition ${
//                     blogOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {blogOpen && (
//                 <div className="absolute top-full left-0 w-[220px] overflow-hidden rounded-xl bg-white shadow-xl pt-2">
//                   {blogLinks.map((item) => (
//                     <Link
//                       href={item.link}
//                       className="group relative block px-5 py-3 pl-12 text-[14px] font-serif font-bold uppercase text-[var(--primary-dark)] transition-all duration-300 hover:translate-x-2 hover:text-[var(--primary)]"
//                     >
//                       {/* Hover Line */}
//                       <span className="absolute left-5 top-1/2 h-[2px] w-0 -translate-y-1/2 bg-[var(--primary)] transition-all duration-300 group-hover:w-6" />

//                       {item.title}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* ===== VISA DROPDOWN ===== */}
//  <div
//   className="relative flex items-center"
//   onMouseEnter={() => setVisaOpen(true)}
//   onMouseLeave={() => setVisaOpen(false)}
// >
//   <button className="flex items-center gap-1.5 cursor-pointer text-[15px] text-[var(--primary-dark)] font-serif font-bold uppercase transition hover:text-[var(--primary)]">
//     Student Visa
//     <FaChevronDown
//       className={`text-[8px] transition ${
//         visaOpen ? "rotate-180" : ""
//       }`}
//     />
//   </button>

//   {visaOpen && (
//     <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
//       {/* Pointer arrow */}
//       <div className="absolute left-1/2 -translate-x-1/2 top-1.5 w-3 h-3 rotate-45 bg-white border-t border-l border-[var(--border)]" />

//       <div className="relative w-[420px] rounded-2xl bg-white border border-[var(--border)] shadow-xl overflow-hidden">
//         {/* Top accent bar */}
//         <div className="h-[3px] w-full bg-gradient-to-r from-[var(--primary-dark)] via-[var(--primary)] to-[var(--primary-light)]" />

//         {/* Soft background glow */}
//         <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[var(--primary-light)]/10 blur-3xl pointer-events-none" />
//         <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-[var(--accent)]/10 blur-3xl pointer-events-none" />

//         <div className="relative grid grid-cols-2 divide-x divide-[var(--border)] py-3">
//           {[0, 1].map((col) => (
//             <div key={col}>
//               {visaLinks
//                 .filter((_, i) => i % 2 === col)
//                 .map((item) => (
//                   <Link
//                     key={item.link}
//                     href={item.link}
//                     className="group relative flex items-center justify-between gap-2 pl-5 pr-4 py-3 text-[13px] font-serif font-semibold uppercase tracking-wide text-[var(--text-primary)] transition-all duration-200 hover:bg-gradient-to-r hover:from-[var(--background-light)] hover:to-white hover:text-[var(--primary)]"
//                   >
//                     {/* Bold left border marker */}
//                     {/* <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-[3px] rounded-r bg-[var(--border)] transition-colors duration-200 group-hover:bg-[var(--accent)]" /> */}

//                     <span>{item.title}</span>

//                     <FaArrowRight
//                       className="text-[14px] text-[var(--primary)] opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
//                     />
//                   </Link>
//                 ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )}
// </div>

//             {/* ===== SCHOLARSHIP DROPDOWN ===== */}
//             <div
//               className="relative flex items-center"
//               onMouseEnter={() => setScholarshipOpen(true)}
//               onMouseLeave={() => setScholarshipOpen(false)}
//             >
//               <button className="flex text-[var(--primary-dark)] cursor-pointer items-center gap-1.5 text-[15px] font-serif font-bold uppercase transition hover:text-[var(--primary)]">
//                 Scholarships
//                 <FaChevronDown
//                   className={`text-[8px] transition ${
//                     scholarshipOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {scholarshipOpen && (
//                 <div className="absolute top-full left-0 w-[240px] text-[var(--primary-dark)] rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden pt-2">
//                   {scholarshipLinks.map((item) => (
//                     <Link
//                       href={item.link}
//                       className="group relative block px-5 py-3 pl-12 text-[14px] font-serif font-bold uppercase text-[var(--primary-dark)] transition-all duration-300 hover:translate-x-2 hover:text-[var(--primary)]"
//                     >
//                       {/* Hover Line */}
//                       <span className="absolute left-5 top-1/2 h-[2px] w-0 -translate-y-1/2 bg-[var(--primary)] transition-all duration-300 group-hover:w-6" />

//                       {item.title}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <Link
//               href="/free-education"
//               className="text-[15px] font-serif font-bold cursor-pointer uppercase text-[var(--primary-dark)] transition hover:text-[var(--primary)]"
//             >
//               Free Education
//             </Link>
//           </nav>

//           {/* ================= CONTACT BUTTON ================= */}
//           <div className="hidden lg:block">
//             <Link
//               href="/contact"
//               className="rounded-full bg-[var(--primary)] px-6 py-3 text-white text-[14px] font-serif font-bold uppercase transition-all duration-300 hover:scale-105 hover:bg-[var(--primary-dark)]"
//             >
//               CONTACT US
//             </Link>
//           </div>

//           {/* ================= MOBILE MENU BUTTON ================= */}
//           <button
//             onClick={() => setMenuOpen(true)}
//             className="text-4xl text-[var(--secondary)] lg:hidden cursor-pointer"
//           >
//             <HiBars3 />
//           </button>
//         </div>
//       </header>

//       {/* ================= MOBILE MENU ================= */}
//       <div
//         className={`fixed inset-0 z-[90] bg-black/60 transition-all duration-500 ${
//           menuOpen ? "visible opacity-100" : "invisible opacity-0"
//         }`}
//         onClick={() => setMenuOpen(false)}
//       />

//       <aside
//         className={`fixed top-0 left-0 z-[100] h-screen w-[330px] bg-white transition-all duration-500 ${
//           menuOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex items-center justify-between border-b p-6">
//           {/* <Image src="/logo2.png" alt="Logo" width={140} height={45} /> */}
//           <img src={siteConfig.LOGO} alt={siteConfig.COMPANY_NAME} width={140} height={45} />

//           <button onClick={() => setMenuOpen(false)} className="text-3xl cursor-pointer">
//             <IoClose />
//           </button>
//         </div>

//         <div className="flex flex-col">
//           <Link
//             href="/"
//             onClick={() => setMenuOpen(false)}
//             className="border-b px-6 py-5 text-[var(--primary-dark)] text-[16px] font-serif font-bold uppercase transition hover:bg-[var(--background-light)]"
//           >
//             Home
//           </Link>

//           <Link
//             href="/about"
//             onClick={() => setMenuOpen(false)}
//             className="border-b px-6 text-[var(--primary-dark)] py-5 text-[16px] font-serif font-bold uppercase transition hover:bg-[var(--background-light)]"
//           >
//             About Us
//           </Link>

//           <button
//             onClick={() => setMobileBlog(!mobileBlog)}
//             className="flex items-center text-[var(--primary-dark)] cursor-pointer justify-between border-b px-6 py-5 text-[16px] font-serif font-bold uppercase"
//           >
//             Blog
//             <FaChevronDown
//               className={`transition duration-300 ${
//                 mobileBlog ? "rotate-180" : ""
//               }`}
//             />
//           </button>

//           {mobileBlog && (
//             <div className="bg-[var(--background-light)]">
//               {blogLinks.map((item) => (
//                 <Link
//                   key={item.title}
//                   href={item.link}
//                   onClick={() => setMenuOpen(false)}
//                   className="block px-10 py-4 font-serif font-bold uppercase transition text-[var(--primary-dark)] hover:text-[var(--primary)]"
//                 >
//                   {item.title}
//                 </Link>
//               ))}
//             </div>
//           )}

//           <button
//             onClick={() => setMobileVisa(!mobileVisa)}
//             className="flex items-center text-[var(--primary-dark)] cursor-pointer justify-between border-b px-6 py-5 text-[16px] font-serif font-bold uppercase"
//           >
//             Student Visa
//             <FaChevronDown
//               className={`transition duration-300 ${
//                 mobileVisa ? "rotate-180" : ""
//               }`}
//             />
//           </button>

//           {mobileVisa && (
//             <div className="bg-[var(--background-light)]">
//               {visaLinks.map((item) => (
//                 <Link
//                   key={item.title}
//                   href={item.link}
//                   onClick={() => setMenuOpen(false)}
//                   className="block px-10 py-4 font-serif font-bold uppercase text-[var(--primary-dark)] transition hover:text-[var(--primary)]"
//                 >
//                   {item.title}
//                 </Link>
//               ))}
//             </div>
//           )}

//           <button
//             onClick={() => setMobileScholarship(!mobileScholarship)}
//             className="flex text-[var(--primary-dark)] items-center cursor-pointer justify-between border-b px-6 py-5 text-[16px] font-serif font-bold uppercase"
//           >
//             Scholarships
//             <FaChevronDown
//               className={`transition duration-300 ${
//                 mobileScholarship ? "rotate-180" : ""
//               }`}
//             />
//           </button>

//           {mobileScholarship && (
//             <div className="bg-[var(--background-light)]">
//               {scholarshipLinks.map((item) => (
//                 <Link
//                   key={item.title}
//                   href={item.link}
//                   onClick={() => setMenuOpen(false)}
//                   className="block px-10 py-4 font-serif font-bold uppercase text-[var(--primary-dark)] hover:text-[var(--primary)] transition"
//                 >
//                   {item.title}
//                 </Link>
//               ))}
//             </div>
//           )}

//           <Link
//             href="/free-education"
//             onClick={() => setMenuOpen(false)}
//             className="flex items-center text-[var(--primary-dark)] justify-between border-b px-6 py-5 text-[16px] font-serif font-bold uppercase"
//           >
//             Free Education
//           </Link>

//           <div className="p-6">
//             <Link
//               href="/contact"
//               onClick={() => setMenuOpen(false)}
//               className="block w-full rounded-full bg-[var(--primary)] py-4 text-center text-white font-serif font-bold uppercase transition-all duration-300 hover:bg-[var(--primary-dark)]"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </aside>

//       {/* Desktop = 78px, Mobile = original 90px */}
//       <div className="h-[90px] lg:h-[78px]"></div>
//     </>
//   );
// };

// export default NavBar;

"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/siteConfig";
import Link from "next/link";

import { HiBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { FaChevronDown, FaArrowRight } from "react-icons/fa";

/* =====================================================================
   Shared desktop dropdown — used by Blog, Student Visa, Scholarships,
   and Free Education so every menu looks and behaves the same way.
   ===================================================================== */
const DesktopDropdown = ({
  label,
  links,
  open,
  setOpen,
  columns = 1,
  align = "center",
}) => {
  const columnLists =
    columns === 2
      ? [
          links.filter((_, i) => i % 2 === 0),
          links.filter((_, i) => i % 2 === 1),
        ]
      : [links];

  const panelWidth = columns === 2 ? "w-[440px]" : "w-[260px]";

  const alignmentClasses =
    align === "right" ? "right-0" : "left-1/2 -translate-x-1/2";

  const arrowAlignmentClasses =
    align === "right" ? "right-6" : "left-1/2 -translate-x-1/2";

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center gap-1.5 cursor-pointer text-[13px] xl:text-[15px] text-[var(--primary-dark)] font-serif font-bold uppercase transition hover:text-[var(--primary)]"
      >
        {label}
        <FaChevronDown
          className={`text-[8px] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute top-full pt-3 z-50 transition-all duration-200 origin-top ${alignmentClasses} ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
      >
        {/* Pointer arrow */}
        <div
          className={`absolute top-1.5 w-3 h-3 rotate-45 bg-white border-t border-l border-[var(--border)] ${arrowAlignmentClasses}`}
        />

        <div
          className={`relative ${panelWidth} rounded-2xl bg-white border border-[var(--border)] shadow-xl overflow-hidden`}
        >
          {/* Top accent bar */}
          <div className="h-[3px] w-full bg-gradient-to-r from-[var(--primary-dark)] via-[var(--primary)] to-[var(--primary-light)]" />

          {/* Soft background glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[var(--primary-light)]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-[var(--accent)]/10 blur-3xl pointer-events-none" />

          <div
            className={`relative grid py-3 ${
              columns === 2
                ? "grid-cols-2 divide-x divide-[var(--border)]"
                : "grid-cols-1"
            }`}
          >
            {columnLists.map((list, col) => (
              <div key={col}>
                {list.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className="group relative flex items-center justify-between gap-3 pl-5 pr-4 py-3 text-[13px] font-serif font-semibold uppercase tracking-wide text-[var(--text-primary)] transition-all duration-200 hover:bg-gradient-to-r hover:from-[var(--background-light)] hover:to-white hover:text-[var(--primary)]"
                  >
                    {/* Bold left border marker */}
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 h-full w-[3px] scale-y-0 bg-[var(--accent)] transition-transform duration-200 origin-center group-hover:scale-y-100" />

                    <span>{item.title}</span>

                    <FaArrowRight className="shrink-0 text-[14px] text-[var(--primary)] opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* =====================================================================
   Shared mobile accordion — used for the same four menus inside the
   slide-out drawer.
   ===================================================================== */
const MobileAccordion = ({ label, links, open, setOpen, onNavigate }) => (
  <>
    <button
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      className="flex items-center text-[var(--primary-dark)] cursor-pointer justify-between border-b px-6 py-5 text-[16px] font-serif font-bold uppercase"
    >
      {label}
      <FaChevronDown
        className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      />
    </button>

    <div
      className={`bg-[var(--background-light)] overflow-hidden transition-all duration-300 ${
        open ? "max-h-[600px]" : "max-h-0"
      }`}
    >
      {links.map((item) => (
        <Link
          key={item.title}
          href={item.link}
          onClick={onNavigate}
          className="block px-10 py-4 font-serif font-bold uppercase text-[15px] text-[var(--primary-dark)] transition hover:text-[var(--primary)]"
        >
          {item.title}
        </Link>
      ))}
    </div>
  </>
);

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const [visaOpen, setVisaOpen] = useState(false);
  const [scholarshipOpen, setScholarshipOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [freeEducationOpen, setFreeEducationOpen] = useState(false);

  const [mobileVisa, setMobileVisa] = useState(false);
  const [mobileScholarship, setMobileScholarship] = useState(false);
  const [mobileBlog, setMobileBlog] = useState(false);
  const [mobileFreeEducation, setMobileFreeEducation] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll while the mobile drawer is open, and allow
  // closing it with Escape — small UX gaps the previous version had.
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleEscape = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const visaLinks = [
    { title: "Visa Consultation", link: "/studentVisa/visaConsultation" },
    // { title: "University Selection", link: "/studentVisa/universitySelection" },
    { title: "Pathway Programs", link: "/studentVisa/PathwayPrograms" },
    {
      title: "Application and Documentation",
      link: "/studentVisa/ApplicationAndDocumentation",
    },
    { title: "IELTS Preparation", link: "/studentVisa/IELTSPreparation" },
    { title: "Spouse and Dependent Visa", link: "/studentVisa/spouseandDependentVisa" },
    { title: "Visa Interview Preparation", link: "/studentVisa/visaInterviewPreparation" },
    { title: "Post Study Work Visa", link: "/studentVisa/postStudyWorkVisa" },
    { title: "Country Requirements", link: "/studentVisa/countryRequirements" },
    {
      title: "PR Destinations (Permanent Residency Pathways)",
      link: "/studentVisa/PRDestinations",
    },
  ];

  const scholarshipLinks = [
    { title: "All Scholarships", link: "/scholarships" },
    { title: "Latest Scholarships", link: "/scholarships/latest-scholarships" },
    {
      title: "Featured Scholarships",
      link: "/scholarships/featured-scholarships",
    },
    { title: "Scholarship Guide", link: "/scholarship-guide" },
  ];

  const blogLinks = [
    { title: "All Blogs", link: "/blog" },
    { title: "Latest News", link: "/blog" },
    { title: "Travel Tips", link: "/blog" },
    { title: "Study Abroad", link: "/blog" },
  ];

  const freeEducationLinks = [
    { title: "", link: "" },
    { title: "", link: "" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          sticky ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-[80px] sm:h-[90px] lg:h-[80px] max-w-[1320px] items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* ================= LOGO ================= */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src={siteConfig.LOGO}
              alt={siteConfig.COMPANY_NAME}
              className="w-[110px] sm:w-[145px] lg:w-[170px] xl:w-[200px] h-auto object-contain"
            />
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <nav className="hidden items-center gap-5 xl:gap-9 lg:flex">
            <Link
              href="/"
              className="text-[13px] xl:text-[15px] font-serif font-bold uppercase transition text-[var(--primary-dark)] hover:text-[var(--primary)]"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-[13px] xl:text-[15px] font-serif font-bold uppercase text-[var(--primary-dark)] transition hover:text-[var(--primary)]"
            >
              About Us
            </Link>

            <DesktopDropdown
              label="Blog"
              links={blogLinks}
              open={blogOpen}
              setOpen={setBlogOpen}
              columns={1}
              align="center"
            />

            <DesktopDropdown
              label="Student Visa"
              links={visaLinks}
              open={visaOpen}
              setOpen={setVisaOpen}
              columns={2}
              align="center"
            />

            <DesktopDropdown
              label="Scholarships"
              links={scholarshipLinks}
              open={scholarshipOpen}
              setOpen={setScholarshipOpen}
              columns={1}
              align="center"
            />
            <Link
              href="/free-education"
              className="text-[13px] xl:text-[15px] font-serif font-bold uppercase text-[var(--primary-dark)] transition hover:text-[var(--primary)]"
            >
              Free Education
            </Link>
          </nav>

          {/* ================= CONTACT BUTTON ================= */}
          {/* <div className="hidden lg:block">
            <Link
              href="/contact"
              className="rounded-full bg-[var(--btn)] px-4 xl:px-6 py-2.5 xl:py-3 text-white text-[13px] xl:text-[14px] font-serif font-bold uppercase transition-all duration-300 hover:scale-105 hover:bg-[var(--primary)]"
            >
              Contact Us
            </Link>
          </div> */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[var(--primary)] px-4 xl:px-6 py-2.5 xl:py-3 text-white text-[13px] xl:text-[14px] font-serif font-bold uppercase transition-colors duration-300"
            >
              {/* Fill layer — sweeps left to right on hover */}
              <span className="absolute inset-0 origin-left scale-x-0 bg-[var(--btn)] transition-transform duration-500 ease-out group-hover:scale-x-100" />

              {/* Content sits above the fill */}
              <span className="relative z-10">Contact Us</span>
              <FaArrowRight className="relative z-10 text-[12px] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
            </Link>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="text-3xl sm:text-4xl text-[var(--secondary)] lg:hidden cursor-pointer"
          >
            <HiBars3 />
          </button>
        </div>
      </header>

      {/* ================= MOBILE OVERLAY ================= */}
      <div
        className={`fixed inset-0 z-[90] bg-black/60 transition-all duration-500 ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* ================= MOBILE DRAWER ================= */}
      <aside
        className={`fixed top-0 left-0 z-[100] h-screen w-[85%] max-w-[330px] bg-white overflow-y-auto transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-5 sm:p-6">
          <img
            src={siteConfig.LOGO}
            alt={siteConfig.COMPANY_NAME}
            width={130}
            height={42}
            className="h-auto"
          />
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="text-3xl cursor-pointer"
          >
            <IoClose />
          </button>
        </div>

        <div className="flex flex-col pb-6">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="border-b px-6 py-5 text-[var(--primary-dark)] text-[15px] sm:text-[16px] font-serif font-bold uppercase transition hover:bg-[var(--background-light)]"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="border-b px-6 text-[var(--primary-dark)] py-5 text-[15px] sm:text-[16px] font-serif font-bold uppercase transition hover:bg-[var(--background-light)]"
          >
            About Us
          </Link>

          <MobileAccordion
            label="Blog"
            links={blogLinks}
            open={mobileBlog}
            setOpen={setMobileBlog}
            onNavigate={() => setMenuOpen(false)}
          />

          <MobileAccordion
            label="Student Visa"
            links={visaLinks}
            open={mobileVisa}
            setOpen={setMobileVisa}
            onNavigate={() => setMenuOpen(false)}
          />

          <MobileAccordion
            label="Scholarships"
            links={scholarshipLinks}
            open={mobileScholarship}
            setOpen={setMobileScholarship}
            onNavigate={() => setMenuOpen(false)}
          />

          {/* <MobileAccordion
            label="Free Education"
            links={freeEducationLinks}
            open={mobileFreeEducation}
            setOpen={setMobileFreeEducation}
            onNavigate={() => setMenuOpen(false)}
          /> */}
          <Link
            href="/free-education"
            onClick={() => setMenuOpen(false)}
            className="border-b px-6 text-[var(--primary-dark)] py-5 text-[15px] sm:text-[16px] font-serif font-bold uppercase transition hover:bg-[var(--background-light)]"
          >
            Free Education
          </Link>

          {/* <div className="p-6">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full rounded-full bg-[var(--primary)] py-4 text-center text-white font-serif font-bold uppercase transition-all duration-300 hover:bg-[var(--primary-dark)]"
            >
              Contact Us
            </Link>
          </div> */}
          <div className="p-6">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[var(--primary)] py-4 text-center text-white font-serif font-bold uppercase transition-colors duration-300"
            >
              {/* Fill layer — sweeps left to right on hover/active */}
              <span className="absolute inset-0 origin-left scale-x-0 bg-[var(--btn)] transition-transform duration-500 ease-out group-hover:scale-x-100 group-active:scale-x-100" />

              <span className="relative z-10">Contact Us</span>
              <FaArrowRight className="relative z-10 text-[12px] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-active:opacity-100 group-active:translate-x-0" />
            </Link>
          </div>
        </div>
      </aside>

      {/* Spacer matching header height at each breakpoint */}
      <div className="h-[80px] sm:h-[90px] lg:h-[78px]"></div>
    </>
  );
};

export default NavBar;
