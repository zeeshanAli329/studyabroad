// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { FiArrowRight, FiX } from "react-icons/fi";
// import homeImages from "@/config/homeImages";
// import { api } from "@/lib/api";

// const Hero = () => {
//   const [advertisement, setAdvertisement] = useState(null);
//   const [showAd, setShowAd] = useState(true);

//   // useEffect(() => {
//   //   const loadAdvertisement = async () => {
//   //     try {
//   //       const response = await api.getAdvertisements();

//   //       // Handle different possible API response structures
//   //       const ads = Array.isArray(response)
//   //         ? response
//   //         : response?.advertisements ||
//   //           response?.data ||
//   //           [];

//   //       // Get an active Hero advertisement
//   //       const heroAd =
//   //         ads.find(
//   //           (ad) =>
//   //             ad.status === "ACTIVE" &&
//   //             (ad.position === "HERO" ||
//   //               ad.position === "hero" ||
//   //               ad.placement === "HERO" ||
//   //               ad.placement === "hero")
//   //         ) ||
//   //         // Fallback: show first active advertisement
//   //         ads.find(
//   //           (ad) =>
//   //             ad.status === "ACTIVE" ||
//   //             ad.status === "active"
//   //         );

//   //       if (heroAd) {
//   //         setAdvertisement(heroAd);
//   //       }
//   //     } catch (error) {
//   //       console.error("Failed to load advertisement:", error);
//   //     }
//   //   };

//   //   loadAdvertisement();
//   // }, []);
     
//   useEffect(() => {
//   const loadAdvertisement = async () => {
//     try {
//       const response = await api.getAdvertisements();

//       console.log("ADVERTISEMENT API RESPONSE:", response);

//       const ads = Array.isArray(response)
//         ? response
//         : Array.isArray(response?.data)
//           ? response.data
//           : [];

//       console.log("ADVERTISEMENT DATA:", ads);

//       // Find active hero-right advertisement
//       const heroAd = ads.find(
//         (ad) =>
//           ad.isActive === true &&
//           ad.placement?.toLowerCase() === "hero-right"
//       );

//       console.log("SELECTED HERO AD:", heroAd);

//       if (heroAd) {
//         setAdvertisement(heroAd);
//       } else {
//         setAdvertisement(null);
//       }
//     } catch (error) {
//       console.error("Failed to load advertisement:", error);
//       setAdvertisement(null);
//     }
//   };

//   loadAdvertisement();
// }, []);


//   return (
//     <section className="relative mx-0 overflow-hidden rounded-3xl bg-[var(--secondary)] px-4 py-8 sm:px-6 sm:py-10 lg:mx-8 lg:px-16 lg:py-12">
      
//       {/* Background image */}
//       <div className="absolute inset-0">
//         <img
//           src={homeImages.hero}
//           alt="Students studying abroad"
//           className="h-full w-full object-cover"
//         />

//         <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)]/95 via-[var(--secondary)]/80 to-[var(--secondary)]/60" />
//       </div>

//       {/* Main content */}
//       <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-8 sm:gap-10 lg:flex-row lg:justify-between lg:gap-12">
        
//         {/* Left content */}
//         <div className="max-w-xl text-center lg:text-left">
//           <h1 className="font-serif text-4xl leading-[1.15] text-white sm:text-5xl lg:text-[3.4rem]">
//             Your Journey
//             <br />
//             Abroad Starts
//             <br />
//             Here
//           </h1>

//           <p className="mt-6 text-lg text-white/90 sm:text-xl">
//             Expert guidance for international education, visas, scholarships,
//             and destinations. Your dream study abroad experience begins with
//             <strong className="pl-1">StudyAbroad</strong>.
//           </p>

//           <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
//             <Link
//               href="/destinations"
//               className="group inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--primary-dark)] hover:gap-3"
//             >
//               Explore Destinations
//               <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//             </Link>

//             <Link
//               href="/scholarships"
//               className="group inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[var(--secondary)]"
//             >
//               Find Scholarships
//             </Link>
//           </div>
//         </div>

//         {/* Right student image */}
//         <div className="relative h-[360px] w-[300px] shrink-0 sm:h-[420px] sm:w-[360px] md:h-[470px] md:w-[400px] lg:h-[500px] lg:w-[420px]">
          
//           {/* Dark green circle */}
//           <div className="absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full bg-[var(--primary)]/70 sm:h-[320px] sm:w-[320px] md:h-[350px] md:w-[350px] lg:h-[380px] lg:w-[380px]" />

//           {/* Student */}
//           <div className="absolute inset-0 flex items-end justify-center overflow-visible">
//             <img
//               src="/images/banner-man-img.png"
//               alt="Student ready for study abroad journey"
//               className="h-full w-full object-contain object-bottom animate-float"
//             />
//           </div>
//         </div>
//       </div>

//       {/* =====================================================
//           BACKEND ADVERTISEMENT
//           ===================================================== */}
//       {advertisement && showAd && (
//         <div className="absolute right-3 top-1/2 z-30 hidden w-[150px] -translate-y-1/2 overflow-hidden rounded-xl bg-white shadow-2xl sm:block md:right-5 md:w-[165px] lg:right-6 lg:w-[180px]">
          
//           {/* Ad label */}
//           <div className="absolute left-2 top-2 z-20 rounded bg-black/60 px-1.5 py-0.5 text-[9px] font-medium text-white">
//             Ad
//           </div>

//           {/* Close button */}
//           <button
//             type="button"
//             onClick={() => setShowAd(false)}
//             aria-label="Close advertisement"
//             className="absolute right-1.5 top-1.5 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80"
//           >
//             <FiX className="h-3.5 w-3.5" />
//           </button>

//           {/* Advertisement link */}
//           <a
//             href={advertisement.link || advertisement.url || "#"}
//             target={
//               advertisement.link || advertisement.url
//                 ? "_blank"
//                 : undefined
//             }
//             rel={
//               advertisement.link || advertisement.url
//                 ? "noopener noreferrer"
//                 : undefined
//             }
//             className="block"
//           >
//             {/* Advertisement image */}
//             {advertisement.image && (
//               <img
//                 src={advertisement.image}
//                 alt={advertisement.title || "Advertisement"}
//                 className="h-auto max-h-[280px] w-full object-cover"
//               />
//             )}

//             {/* Text fallback / content */}
//             {!advertisement.image && (
//               <div className="bg-[var(--secondary)] p-4 text-white">
//                 <h3 className="text-sm font-bold">
//                   {advertisement.title}
//                 </h3>

//                 {advertisement.description && (
//                   <p className="mt-2 text-[11px] leading-relaxed text-white/80">
//                     {advertisement.description}
//                   </p>
//                 )}

//                 <span className="mt-3 inline-block rounded-full bg-[var(--primary)] px-3 py-1.5 text-[10px] font-semibold">
//                   Learn More
//                 </span>
//               </div>
//             )}
//           </a>
//         </div>
//       )}

//       {/* Floating animation */}
//       <style jsx>{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(-18px);
//           }
//         }

//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//           will-change: transform;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;



// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { FiArrowRight, FiX } from "react-icons/fi";
// import homeImages from "@/config/homeImages";
// import { api } from "@/lib/api";

// const Hero = () => {
//   const [advertisement, setAdvertisement] = useState(null);
//   const [showAd, setShowAd] = useState(true);

//   useEffect(() => {
//     const loadAdvertisement = async () => {
//       try {
//         const response = await api.getAdvertisements();

//         const ads = Array.isArray(response)
//           ? response
//           : Array.isArray(response?.data)
//             ? response.data
//             : [];

//         const heroAd = ads.find(
//           (ad) =>
//             ad.isActive === true &&
//             ad.placement?.toLowerCase() === "hero-right"
//         );

//         if (heroAd) {
//           setAdvertisement(heroAd);
//         }
//       } catch (error) {
//         console.error("Failed to load advertisement:", error);
//       }
//     };

//     loadAdvertisement();
//   }, []);

//   return (
//     <>
//       {/* =====================================================
//           BACKEND ADVERTISEMENT
//           ABOVE HERO
//           ===================================================== */}
//       {advertisement && showAd && (
//         <div className="w-full px-0 sm:px-4 lg:px-8">
//           <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-2xl">

//             {/* Ad Label */}
//             <div className="absolute left-3 top-3 z-20 rounded bg-black/60 px-2 py-1 text-[10px] font-medium text-white">
//               Advertisement
//             </div>

//             {/* Close Button */}
//             <button
//               type="button"
//               onClick={() => setShowAd(false)}
//               aria-label="Close advertisement"
//               className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80"
//             >
//               <FiX className="h-4 w-4" />
//             </button>

//             {/* Advertisement Link */}
//             <a
//               href={advertisement.link || "#"}
//               target={advertisement.link ? "_blank" : undefined}
//               rel={
//                 advertisement.link
//                   ? "noopener noreferrer"
//                   : undefined
//               }
//               className="block w-full"
//             >
//               <img
//                 src={advertisement.image}
//                 alt={advertisement.title || "Advertisement"}
//                 className="h-[180px] w-full object-cover sm:h-[220px] md:h-[260px] lg:h-[300px]"
//               />
//             </a>
//           </div>
//         </div>
//       )}

//       {/* =====================================================
//           HERO SECTION
//           ===================================================== */}
//       <section className="relative mx-0 mt-4 overflow-hidden rounded-3xl bg-[var(--secondary)] px-4 py-8 sm:px-6 sm:py-10 lg:mx-8 lg:px-16 lg:py-12">
//         {/* Background image */}
//         <div className="absolute inset-0">
//           <img
//             src={homeImages.hero}
//             alt="Students studying abroad"
//             className="h-full w-full object-cover"
//           />

//           <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)]/95 via-[var(--secondary)]/80 to-[var(--secondary)]/60" />
//         </div>

//         {/* Main content */}
//         <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-8 sm:gap-10 lg:flex-row lg:justify-between lg:gap-12">

//           {/* Left content */}
//           <div className="max-w-xl text-center lg:text-left">
//             <h1 className="font-serif text-4xl leading-[1.15] text-white sm:text-5xl lg:text-[3.4rem]">
//               Your Journey
//               <br />
//               Abroad Starts
//               <br />
//               Here
//             </h1>

//             <p className="mt-6 text-lg text-white/90 sm:text-xl">
//               Expert guidance for international education, visas,
//               scholarships, and destinations. Your dream study abroad
//               experience begins with
//               <strong className="pl-1">StudyAbroad</strong>.
//             </p>

//             <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
//               <Link
//                 href="/destinations"
//                 className="group inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--primary-dark)] hover:gap-3"
//               >
//                 Explore Destinations
//                 <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//               </Link>

//               <Link
//                 href="/scholarships"
//                 className="group inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[var(--secondary)]"
//               >
//                 Find Scholarships
//               </Link>
//             </div>
//           </div>

//           {/* Right student image */}
//           <div className="relative h-[360px] w-[300px] shrink-0 sm:h-[420px] sm:w-[360px] md:h-[470px] md:w-[400px] lg:h-[500px] lg:w-[420px]">

//             <div className="absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full bg-[var(--primary)]/70 sm:h-[320px] sm:w-[320px] md:h-[350px] md:w-[350px] lg:h-[380px] lg:w-[380px]" />

//             <div className="absolute inset-0 flex items-end justify-center overflow-visible">
//               <img
//                 src="/images/banner-man-img.png"
//                 alt="Student ready for study abroad journey"
//                 className="h-full w-full object-contain object-bottom animate-float"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Floating animation */}
//         <style jsx>{`
//           @keyframes float {
//             0%,
//             100% {
//               transform: translateY(0);
//             }

//             50% {
//               transform: translateY(-18px);
//             }
//           }

//           .animate-float {
//             animation: float 4s ease-in-out infinite;
//             will-change: transform;
//           }
//         `}</style>
//       </section>
//     </>
//   );
// };

// export default Hero;









"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import homeImages from "@/config/homeImages";

const Hero = () => {
  return (
    <section className="relative mx-0 overflow-hidden rounded-3xl bg-[var(--secondary)] px-4 py-8 sm:px-6 sm:py-10 lg:mx-8 lg:px-16 lg:py-12">

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={homeImages.hero}
          alt="Students studying abroad"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)]/95 via-[var(--secondary)]/80 to-[var(--secondary)]/60" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-8 sm:gap-10 lg:flex-row lg:justify-between lg:gap-12">

        {/* Left content */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="font-serif text-4xl leading-[1.15] text-white sm:text-5xl lg:text-[3.4rem]">
            Your Journey
            <br />
            Abroad Starts
            <br />
            Here
          </h1>

          <p className="mt-6 text-lg text-white/90 sm:text-xl">
            Expert guidance for international education, visas,
            scholarships, and destinations. Your dream study abroad
            experience begins with
            <strong className="pl-1">StudyAbroad</strong>.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <Link
              href="/destinations"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--primary-dark)] hover:gap-3"
            >
              Explore Destinations
              <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/scholarships"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[var(--secondary)]"
            >
              Find Scholarships
            </Link>
          </div>
        </div>

        {/* Right student image */}
        <div className="relative h-[360px] w-[300px] shrink-0 sm:h-[420px] sm:w-[360px] md:h-[470px] md:w-[400px] lg:h-[500px] lg:w-[420px]">

          <div className="absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full bg-[var(--primary)]/70 sm:h-[320px] sm:w-[320px] md:h-[350px] md:w-[350px] lg:h-[380px] lg:w-[380px]" />

          <div className="absolute inset-0 flex items-end justify-center overflow-visible">
            <img
              src="/images/banner-man-img.png"
              alt="Student ready for study abroad journey"
              className="h-full w-full object-contain object-bottom animate-float"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-18px);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default Hero;