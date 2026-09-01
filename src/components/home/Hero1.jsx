// "use client";

// import Link from "next/link";
// import {
//   FiArrowRight,
//   FiMessageCircle,
//   FiGlobe,
//   FiBookOpen,
//   FiUsers,
//   FiFileText,
//   FiMenu,
// } from "react-icons/fi";

// const Hero1 = () => {
//   return (
//     <section className="relative min-h-screen overflow-hidden bg-[var(--secondary)] text-white">
//       {/* =========================================================
//           BACKGROUND EFFECTS
//       ========================================================= */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         {/* Top glow */}
//         <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />

//         {/* Bottom glow */}
//         <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[var(--primary)]/10 blur-3xl" />

//         {/* Small decorative dots */}
//         <div className="hero-dot absolute left-[8%] top-[25%]" />
//         <div className="hero-dot absolute left-[45%] top-[15%]" />
//         <div className="hero-dot absolute right-[10%] top-[35%]" />
//         <div className="hero-dot absolute right-[30%] bottom-[25%]" />
//       </div>

//       {/* =========================================================
//           LAPTOP NAVBAR
//           Hidden on mobile/tablet
//       ========================================================= */}
//       <div className="relative z-50 hidden px-6 pt-5 lg:block xl:px-10">
//         <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 backdrop-blur-md">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-3">
//             <div className="flex h-11 w-11 items-center justify-center overflow-hidden">
 
//             </div>

//             <div className="leading-none">
//               <h2 className="text-xl font-bold tracking-wide text-white">
//                 Route<span className="text-[var(--primary)]">X</span>
//               </h2>
//               <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.25em] text-white/50">
//                 Study Abroad
//               </p>
//             </div>
//           </Link>

//           {/* Navigation */}
//           <div className="flex items-center gap-7">
//             <Link
//               href="/"
//               className="text-sm font-medium text-white transition-colors hover:text-[var(--primary)]"
//             >
//               Home
//             </Link>

//             <Link
//               href="/about"
//               className="text-sm font-medium text-white/80 transition-colors hover:text-[var(--primary)]"
//             >
//               About Us
//             </Link>

//             <Link
//               href="/services"
//               className="text-sm font-medium text-white/80 transition-colors hover:text-[var(--primary)]"
//             >
//               Services
//             </Link>

//             <Link
//               href="/countries"
//               className="text-sm font-medium text-white/80 transition-colors hover:text-[var(--primary)]"
//             >
//               Countries
//             </Link>

//             <Link
//               href="/universities"
//               className="text-sm font-medium text-white/80 transition-colors hover:text-[var(--primary)]"
//             >
//               Universities
//             </Link>

//             <Link
//               href="/blog"
//               className="text-sm font-medium text-white/80 transition-colors hover:text-[var(--primary)]"
//             >
//               Blog
//             </Link>

//             <Link
//               href="/contact"
//               className="text-sm font-medium text-white/80 transition-colors hover:text-[var(--primary)]"
//             >
//               Contact
//             </Link>
//           </div>

//           {/* Navbar CTA */}
//           <div className="flex items-center gap-3">
//             <Link
//               href="/contact"
//               className="group flex items-center gap-2 rounded-full border border-[var(--primary)]/60 px-5 py-2.5 text-sm font-semibold text-[var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white"
//             >
//               Talk to an Expert
//               <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
//             </Link>

//             <button
//               type="button"
//               className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/80 transition-all hover:border-[var(--primary)] hover:text-[var(--primary)]"
//             >
//               <FiMenu size={19} />
//             </button>
//           </div>
//         </nav>
//       </div>

//       {/* =========================================================
//           MAIN HERO
//       ========================================================= */}
//       <div className="relative z-10 mx-auto flex min-h-[calc(100vh-90px)] max-w-7xl flex-col px-5 pb-10 pt-12 sm:px-8 sm:pt-16 lg:flex-row lg:items-center lg:gap-8 lg:px-8 lg:pb-14 lg:pt-10">
//         {/* =====================================================
//             LEFT CONTENT
//         ===================================================== */}
//         <div className="relative z-30 w-full lg:w-[52%]">
//           {/* Eyebrow */}
//           <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-sm">
//             <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary)]/15 text-[var(--primary)]">
//               ✈
//             </span>

//             <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 sm:text-xs">
//               Your Global Journey Starts Here
//             </span>
//           </div>

//           {/* Heading */}
//           <h1 className="max-w-3xl font-serif text-[2.8rem] font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.1rem] xl:text-[4.5rem]">
//             Study Abroad
//             <br />
//             <span className="hero-gradient-text">
//               Without Limits.
//             </span>
//           </h1>

//           {/* Description */}
//           <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
//             We make your dream of studying at top universities around the world
//             simple, affordable and achievable.
//           </p>

//           {/* Buttons */}
//           <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//             <Link
//               href="/universities"
//               className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[var(--primary)] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[var(--primary)]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--primary)]/30"
//             >
//               Explore Universities

//               <FiArrowRight
//                 size={18}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </Link>

//             <Link
//               href="/contact"
//               className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:bg-white/[0.06]"
//             >
//               Talk to an Expert

//               <FiMessageCircle
//                 size={17}
//                 className="transition-transform duration-300 group-hover:scale-110"
//               />
//             </Link>
//           </div>

//           {/* ===================================================
//               TRUST FEATURES
//           =================================================== */}
//           <div className="mt-10 flex flex-wrap gap-x-7 gap-y-5">
//             <div className="flex items-center gap-3">
//               <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
//                 <FiBookOpen
//                   size={18}
//                   className="text-[var(--primary)]"
//                 />
//               </div>

//               <div>
//                 <p className="text-lg font-bold">500+</p>
//                 <p className="text-xs text-white/50">Universities</p>
//               </div>
//             </div>

//             <div className="hidden h-10 w-px bg-white/10 sm:block" />

//             <div className="flex items-center gap-3">
//               <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
//                 <FiUsers
//                   size={18}
//                   className="text-[var(--primary)]"
//                 />
//               </div>

//               <div>
//                 <p className="text-lg font-bold">Expert</p>
//                 <p className="text-xs text-white/50">Counselors</p>
//               </div>
//             </div>

//             <div className="hidden h-10 w-px bg-white/10 sm:block" />

//             <div className="flex items-center gap-3">
//               <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
//                 <FiFileText
//                   size={18}
//                   className="text-[var(--primary)]"
//                 />
//               </div>

//               <div>
//                 <p className="text-lg font-bold">Visa</p>
//                 <p className="text-xs text-white/50">Support</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* =====================================================
//             RIGHT VISUAL
//         ===================================================== */}
//         <div className="relative mt-14 flex min-h-[450px] w-full items-center justify-center lg:mt-0 lg:min-h-[590px] lg:w-[48%]">
//           {/* Globe */}
//           <div className="absolute right-1/2 top-1/2 h-[360px] w-[360px] translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/20 bg-blue-500/[0.03] shadow-[0_0_100px_rgba(50,150,255,0.08)] sm:h-[430px] sm:w-[430px] lg:h-[500px] lg:w-[500px]">
//             <div className="absolute inset-5 rounded-full border border-blue-400/10" />
//             <div className="absolute inset-12 rounded-full border border-blue-400/10" />

//             {/* Globe latitude */}
//             <div className="absolute left-1/2 top-1/2 h-[55%] w-full -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-blue-400/10" />

//             <div className="absolute left-1/2 top-1/2 h-full w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-blue-400/10" />

//             {/* Globe center */}
//             <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_20px_5px_rgba(50,150,255,0.4)]" />

//             {/* Orbit */}
//             <div className="absolute inset-[-30px] rounded-full border border-blue-400/10 animate-spin-slow" />
//           </div>

//           {/* =================================================
//               STUDENT
//           ================================================= */}
//           <div className="absolute bottom-0 left-1/2 z-20 h-[430px] w-[340px] -translate-x-1/2 sm:h-[500px] sm:w-[390px] lg:h-[560px] lg:w-[430px]">
//             <img
//               src="/images/banner-man-img.png"
//               alt="Student studying abroad"
//               className="h-full w-full object-contain object-bottom drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)] animate-student"
//             />
//           </div>

//           {/* =================================================
//               EIFFEL TOWER
//           ================================================= */}
//           <div className="absolute bottom-0 right-[-5px] z-10 h-[280px] sm:right-[-10px] sm:h-[340px] lg:right-[-25px] lg:h-[390px]">
//             <img
//               src="/banner-right-towor.png"
//               alt="Eiffel Tower"
//               className="h-full w-auto object-contain object-bottom opacity-80 animate-tower"
//             />
//           </div>

//           {/* =================================================
//               UK CARD
//           ================================================= */}
//           <div className="destination-card absolute left-[-5px] top-[50px] z-30 w-[145px] rounded-2xl border border-white/20 bg-[#0b2348]/90 p-3 shadow-xl backdrop-blur-md sm:left-0 sm:top-[65px] sm:w-[160px]">
//             <div className="relative h-[65px] overflow-hidden rounded-xl">
//               <img
//                 src="/images/uk.jpg"
//                 alt="Study in UK"
//                 className="h-full w-full object-cover"
//               />

//               <div className="absolute inset-0 bg-black/20" />
//             </div>

//             <div className="mt-2 flex items-center gap-2">
//               <span className="text-lg">🇬🇧</span>

//               <div>
//                 <p className="text-[9px] text-white/50">Study in</p>
//                 <p className="text-sm font-bold">UK</p>
//               </div>
//             </div>
//           </div>

//           {/* =================================================
//               USA CARD
//           ================================================= */}
//           <div className="destination-card absolute left-[-15px] top-[230px] z-30 w-[145px] rounded-2xl border border-white/20 bg-[#0b2348]/90 p-3 shadow-xl backdrop-blur-md sm:left-[-10px] sm:top-[250px] sm:w-[160px]">
//             <div className="relative h-[65px] overflow-hidden rounded-xl">
//               <img
//                 src="/images/usa.jpg"
//                 alt="Study in USA"
//                 className="h-full w-full object-cover"
//               />

//               <div className="absolute inset-0 bg-black/20" />
//             </div>

//             <div className="mt-2 flex items-center gap-2">
//               <span className="text-lg">🇺🇸</span>

//               <div>
//                 <p className="text-[9px] text-white/50">Study in</p>
//                 <p className="text-sm font-bold">USA</p>
//               </div>
//             </div>
//           </div>

//           {/* =================================================
//               CANADA CARD
//           ================================================= */}
//           <div className="destination-card absolute bottom-[65px] left-[-5px] z-30 w-[145px] rounded-2xl border border-white/20 bg-[#0b2348]/90 p-3 shadow-xl backdrop-blur-md sm:left-0 sm:bottom-[75px] sm:w-[160px]">
//             <div className="relative h-[65px] overflow-hidden rounded-xl">
//               <img
//                 src="/images/canada.jpg"
//                 alt="Study in Canada"
//                 className="h-full w-full object-cover"
//               />

//               <div className="absolute inset-0 bg-black/20" />
//             </div>

//             <div className="mt-2 flex items-center gap-2">
//               <span className="text-lg">🇨🇦</span>

//               <div>
//                 <p className="text-[9px] text-white/50">Study in</p>
//                 <p className="text-sm font-bold">Canada</p>
//               </div>
//             </div>
//           </div>

//           {/* =================================================
//               AUSTRALIA CARD
//           ================================================= */}
//           <div className="destination-card absolute right-[-5px] top-[205px] z-30 w-[145px] rounded-2xl border border-white/20 bg-[#0b2348]/90 p-3 shadow-xl backdrop-blur-md sm:right-[-5px] sm:top-[225px] sm:w-[160px]">
//             <div className="relative h-[65px] overflow-hidden rounded-xl">
//               <img
//                 src="/images/australia.jpg"
//                 alt="Study in Australia"
//                 className="h-full w-full object-cover"
//               />

//               <div className="absolute inset-0 bg-black/20" />
//             </div>

//             <div className="mt-2 flex items-center gap-2">
//               <span className="text-lg">🇦🇺</span>

//               <div>
//                 <p className="text-[9px] text-white/50">Study in</p>
//                 <p className="text-sm font-bold">Australia</p>
//               </div>
//             </div>
//           </div>

//           {/* =================================================
//               STUDENTS GUIDED CARD
//           ================================================= */}
//           <div className="absolute bottom-[15px] right-[-5px] z-40 flex w-[175px] items-center gap-3 rounded-2xl border border-blue-300/20 bg-[#0b2348]/95 p-3 shadow-xl backdrop-blur-md sm:right-0 sm:w-[190px] lg:bottom-[25px]">
//             <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)] text-white">
//               <FiUsers size={21} />
//             </div>

//             <div>
//               <p className="text-xl font-bold">1000+</p>
//               <p className="text-[10px] leading-4 text-white/50">
//                 Students Guided
//                 <br />
//                 Successfully
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* =========================================================
//           BOTTOM STATS
//       ========================================================= */}
//       <div className="relative z-30 mx-auto mb-5 max-w-7xl px-5 sm:px-8 lg:px-8">
//         <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-md md:grid-cols-4">
//           {/* Countries */}
//           <div className="flex items-center gap-3 border-b border-white/10 p-5 md:border-b-0 md:border-r">
//             <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-400/20">
//               <FiGlobe className="text-blue-400" size={20} />
//             </div>

//             <div>
//               <p className="text-xl font-bold sm:text-2xl">15+</p>
//               <p className="text-xs text-white/50">Countries</p>
//             </div>
//           </div>

//           {/* Universities */}
//           <div className="flex items-center gap-3 border-b border-white/10 p-5 md:border-b-0 md:border-r">
//             <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-400/20">
//               <FiBookOpen className="text-blue-400" size={20} />
//             </div>

//             <div>
//               <p className="text-xl font-bold sm:text-2xl">500+</p>
//               <p className="text-xs text-white/50">Universities</p>
//             </div>
//           </div>

//           {/* Students */}
//           <div className="flex items-center gap-3 p-5 md:border-r">
//             <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-400/20">
//               <FiUsers className="text-blue-400" size={20} />
//             </div>

//             <div>
//               <p className="text-xl font-bold sm:text-2xl">1000+</p>
//               <p className="text-xs text-white/50">Students Placed</p>
//             </div>
//           </div>

//           {/* Visa */}
//           <div className="flex items-center gap-3 p-5">
//             <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-400/20">
//               <FiFileText className="text-blue-400" size={20} />
//             </div>

//             <div>
//               <p className="text-xl font-bold sm:text-2xl">98%</p>
//               <p className="text-xs text-white/50">Visa Success Rate</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* =========================================================
//           CSS
//       ========================================================= */}
//       <style jsx>{`
//         .hero-gradient-text {
//           background: linear-gradient(
//             90deg,
//             #ffffff 0%,
//             #66adff 45%,
//             var(--primary) 100%
//           );
//           -webkit-background-clip: text;
//           background-clip: text;
//           color: transparent;
//         }

//         .hero-dot {
//           height: 4px;
//           width: 4px;
//           border-radius: 999px;
//           background: rgba(100, 170, 255, 0.7);
//           box-shadow: 0 0 12px rgba(100, 170, 255, 0.5);
//           animation: pulse-dot 3s ease-in-out infinite;
//         }

//         .destination-card {
//           transition:
//             transform 0.3s ease,
//             border-color 0.3s ease,
//             box-shadow 0.3s ease;
//           animation: card-float 5s ease-in-out infinite;
//         }

//         .destination-card:hover {
//           transform: translateY(-6px) scale(1.02);
//           border-color: rgba(140, 198, 63, 0.5);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
//         }

//         .animate-student {
//           animation: student-float 5s ease-in-out infinite;
//           will-change: transform;
//         }

//         .animate-tower {
//           animation: tower-float 4s ease-in-out infinite;
//           will-change: transform;
//         }

//         .animate-spin-slow {
//           animation: spin-slow 25s linear infinite;
//         }

//         @keyframes student-float {
//           0%,
//           100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(-8px);
//           }
//         }

//         @keyframes tower-float {
//           0%,
//           100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(-10px);
//           }
//         }

//         @keyframes card-float {
//           0%,
//           100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(-7px);
//           }
//         }

//         @keyframes pulse-dot {
//           0%,
//           100% {
//             opacity: 0.3;
//             transform: scale(0.8);
//           }

//           50% {
//             opacity: 1;
//             transform: scale(1.3);
//           }
//         }

//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }

//           to {
//             transform: rotate(360deg);
//           }
//         }

//         @media (max-width: 767px) {
//           .destination-card {
//             transform: scale(0.9);
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .destination-card,
//           .animate-student,
//           .animate-tower,
//           .animate-spin-slow,
//           .hero-dot {
//             animation: none;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero1;















"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiMessageCircle,
  FiGlobe,
  FiBookOpen,
  FiUsers,
  FiFileText,
  FiMenu,
} from "react-icons/fi";

const Hero1 = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--secondary)] text-white">
      {/* =========================================================
          BACKGROUND EFFECTS
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[var(--primary)]/10 blur-3xl" />
        <div className="hero-dot absolute left-[8%] top-[25%]" />
        <div className="hero-dot absolute left-[45%] top-[15%]" />
        <div className="hero-dot absolute right-[10%] top-[35%]" />
        <div className="hero-dot absolute right-[30%] bottom-[25%]" />
      </div>

      {/* =========================================================
          LAPTOP NAVBAR
      ========================================================= */}
      <div className="relative z-50 hidden px-6 pt-5 lg:block xl:px-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 backdrop-blur-md">
          {/* <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden" />
            <div className="leading-none">
              <h2 className="text-xl font-bold tracking-wide text-white">
                Route<span className="text-[var(--primary)]">X</span>
              </h2>
              <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.25em] text-white/50">
                Study Abroad
              </p>
            </div>
          </Link> */}
            <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 items-center rounded-xl bg-white/95 px-3 py-1.5 shadow-md">
              <Image
                src="/logo.png"
                alt="Study Abroad logo"
                width={160}
                height={40}
                priority
                className="h-8 w-auto object-contain sm:h-9"
              />
            </div>
          </Link>

          <div className="flex items-center gap-7">
            <Link href="/" className="text-sm font-medium text-white transition-colors hover:text-[var(--primary)]">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-white/80 transition-colors hover:text-[var(--primary)]">
              About Us
            </Link>
            <Link href="/services" className="text-sm font-medium text-white/80 transition-colors hover:text-[var(--primary)]">
              Services
            </Link>
            <Link href="/countries" className="text-sm font-medium text-white/80 transition-colors hover:text-[var(--primary)]">
              Countries
            </Link>
            <Link href="/universities" className="text-sm font-medium text-white/80 transition-colors hover:text-[var(--primary)]">
              Universities
            </Link>
            <Link href="/blog" className="text-sm font-medium text-white/80 transition-colors hover:text-[var(--primary)]">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium text-white/80 transition-colors hover:text-[var(--primary)]">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-full border border-[var(--primary)]/60 px-5 py-2.5 text-sm font-semibold text-[var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white"
            >
              Talk to an Expert
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/80 transition-all hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              <FiMenu size={19} />
            </button>
          </div>
        </nav>
      </div>

      {/* =========================================================
          MAIN HERO
      ========================================================= */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-90px)] max-w-7xl flex-col px-5 pb-10 pt-12 sm:px-8 sm:pt-16 lg:flex-row lg:items-center lg:gap-8 lg:px-8 lg:pb-14 lg:pt-10">
        {/* LEFT CONTENT */}
        <div className="relative z-30 w-full lg:w-[52%]">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary)]/15 text-[var(--primary)]">
              ✈
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 sm:text-xs">
              Your Global Journey Starts Here
            </span>
          </div>

          <h1 className="max-w-3xl font-serif text-[2.8rem] font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.1rem] xl:text-[4.5rem]">
            Study Abroad
            <br />
            <span className="hero-gradient-text">Without Limits.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            We make your dream of studying at top universities around the world
            simple, affordable and achievable.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/universities"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[var(--primary)] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[var(--primary)]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--primary)]/30"
            >
              Explore Universities
              <FiArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:bg-white/[0.06]"
            >
              Talk to an Expert
              <FiMessageCircle size={17} className="transition-transform duration-300 group-hover:scale-110" />
            </Link>
          </div>

          {/* TRUST FEATURES */}
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                <FiBookOpen size={18} className="text-[var(--primary)]" />
              </div>
              <div>
                <p className="text-lg font-bold">500+</p>
                <p className="text-xs text-white/50">Universities</p>
              </div>
            </div>

            <div className="hidden h-10 w-px bg-white/10 sm:block" />

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                <FiUsers size={18} className="text-[var(--primary)]" />
              </div>
              <div>
                <p className="text-lg font-bold">Expert</p>
                <p className="text-xs text-white/50">Counselors</p>
              </div>
            </div>

            <div className="hidden h-10 w-px bg-white/10 sm:block" />

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                <FiFileText size={18} className="text-[var(--primary)]" />
              </div>
              <div>
                <p className="text-lg font-bold">Visa</p>
                <p className="text-xs text-white/50">Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative mt-14 flex min-h-[450px] w-full items-center justify-center lg:mt-0 lg:min-h-[590px] lg:w-[48%]">
          {/* Globe ring */}
          <div className="absolute right-1/2 top-1/2 h-[360px] w-[360px] translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/20 bg-blue-500/[0.03] shadow-[0_0_100px_rgba(50,150,255,0.08)] sm:h-[430px] sm:w-[430px] lg:h-[480px] lg:w-[480px]">
            <div className="absolute inset-5 rounded-full border border-blue-400/10" />
            <div className="absolute left-1/2 top-1/2 h-[55%] w-full -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-blue-400/10" />
            <div className="absolute left-1/2 top-1/2 h-full w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-blue-400/10" />
            <div className="absolute inset-[-30px] rounded-full border border-blue-400/10 animate-spin-slow" />
          </div>

          {/* MAIN CIRCULAR PHOTO — sized to sit inside the globe ring, not spill over it */}
          <div className="relative z-20 h-[210px] w-[210px] overflow-hidden rounded-full border-4 border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:h-[260px] sm:w-[260px] lg:h-[300px] lg:w-[300px] animate-student">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&h=500&q=80"
              alt="International student ready to study abroad"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
          </div>

          {/* UK CARD — Big Ben */}
          <div className="destination-card absolute left-[-5px] top-[20px] z-30 w-[145px] rounded-2xl border border-white/20 bg-[#0b2348]/90 p-3 shadow-xl backdrop-blur-md sm:left-0 sm:top-[35px] sm:w-[160px]">
            <div className="relative h-[65px] overflow-hidden rounded-xl bg-[#0b2348]">
              <img
                src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=300&h=200&q=80"
                alt="Study in the UK — Big Ben, London"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-lg">🇬🇧</span>
              <div>
                <p className="text-[9px] text-white/60">Study in</p>
                <p className="text-sm font-bold text-white">UK</p>
              </div>
            </div>
          </div>

          {/* USA CARD — Statue of Liberty */}
          <div className="destination-card absolute left-[-15px] top-[260px] z-30 w-[145px] rounded-2xl border border-white/20 bg-[#0b2348]/90 p-3 shadow-xl backdrop-blur-md sm:left-[-10px] sm:top-[280px] sm:w-[160px]">
            <div className="relative h-[65px] overflow-hidden rounded-xl bg-[#0b2348]">
              <img
                src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=300&h=200&q=80"
                alt="Study in the USA — Statue of Liberty, New York"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-lg">🇺🇸</span>
              <div>
                <p className="text-[9px] text-white/60">Study in</p>
                <p className="text-sm font-bold text-white">USA</p>
              </div>
            </div>
          </div>

          {/* CANADA CARD — CN Tower */}
          <div className="destination-card absolute bottom-[40px] left-[-5px] z-30 w-[145px] rounded-2xl border border-white/20 bg-[#0b2348]/90 p-3 shadow-xl backdrop-blur-md sm:left-0 sm:bottom-[50px] sm:w-[160px]">
            <div className="relative h-[65px] overflow-hidden rounded-xl bg-[#0b2348]">
              <img
                src="https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&w=300&h=200&q=80"
                alt="Study in Canada — CN Tower, Toronto"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-lg">🇨🇦</span>
              <div>
                <p className="text-[9px] text-white/60">Study in</p>
                <p className="text-sm font-bold text-white">Canada</p>
              </div>
            </div>
          </div>

          {/* AUSTRALIA CARD — Sydney Opera House */}
          <div className="destination-card absolute right-[-5px] top-[180px] z-30 w-[145px] rounded-2xl border border-white/20 bg-[#0b2348]/90 p-3 shadow-xl backdrop-blur-md sm:right-[-5px] sm:top-[195px] sm:w-[160px]">
            <div className="relative h-[65px] overflow-hidden rounded-xl bg-[#0b2348]">
              <img
                src="https://images.unsplash.com/photo-1524293581917-878a6d017c71?auto=format&fit=crop&w=300&h=200&q=80"
                alt="Study in Australia — Sydney Opera House"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-lg">🇦🇺</span>
              <div>
                <p className="text-[9px] text-white/60">Study in</p>
                <p className="text-sm font-bold text-white">Australia</p>
              </div>
            </div>
          </div>

          {/* STUDENTS GUIDED CARD */}
          <div className="absolute bottom-[0px] right-[-5px] z-40 flex w-[175px] items-center gap-3 rounded-2xl border border-blue-300/20 bg-[#0b2348]/95 p-3 shadow-xl backdrop-blur-md sm:right-0 sm:w-[190px]">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)] text-white">
              <FiUsers size={21} />
            </div>
            <div>
              <p className="text-xl font-bold text-white">1000+</p>
              <p className="text-[10px] leading-4 text-white/60">
                Students Guided
                <br />
                Successfully
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM STATS
      ========================================================= */}
      <div className="relative z-30 mx-auto mb-5 max-w-7xl px-5 sm:px-8 lg:px-8">
        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-md md:grid-cols-4">
          <div className="flex items-center gap-3 border-b border-white/10 p-5 md:border-b-0 md:border-r">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-400/20">
              <FiGlobe className="text-blue-400" size={20} />
            </div>
            <div>
              <p className="text-xl font-bold sm:text-2xl">15+</p>
              <p className="text-xs text-white/50">Countries</p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-b border-white/10 p-5 md:border-b-0 md:border-r">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-400/20">
              <FiBookOpen className="text-blue-400" size={20} />
            </div>
            <div>
              <p className="text-xl font-bold sm:text-2xl">500+</p>
              <p className="text-xs text-white/50">Universities</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-5 md:border-r">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-400/20">
              <FiUsers className="text-blue-400" size={20} />
            </div>
            <div>
              <p className="text-xl font-bold sm:text-2xl">1000+</p>
              <p className="text-xs text-white/50">Students Placed</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-400/20">
              <FiFileText className="text-blue-400" size={20} />
            </div>
            <div>
              <p className="text-xl font-bold sm:text-2xl">98%</p>
              <p className="text-xs text-white/50">Visa Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-gradient-text {
          background: linear-gradient(90deg, #ffffff 0%, #66adff 45%, var(--primary) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-dot {
          height: 4px;
          width: 4px;
          border-radius: 999px;
          background: rgba(100, 170, 255, 0.7);
          box-shadow: 0 0 12px rgba(100, 170, 255, 0.5);
          animation: pulse-dot 3s ease-in-out infinite;
        }

        .destination-card {
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          animation: card-float 5s ease-in-out infinite;
        }

        .destination-card:hover {
          transform: translateY(-6px) scale(1.02);
          border-color: rgba(140, 198, 63, 0.5);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
        }

        .animate-student {
          animation: student-float 5s ease-in-out infinite;
          will-change: transform;
        }

        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }

        @keyframes student-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes card-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.3); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 767px) {
          .destination-card {
            transform: scale(0.9);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .destination-card,
          .animate-student,
          .animate-spin-slow,
          .hero-dot {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero1;