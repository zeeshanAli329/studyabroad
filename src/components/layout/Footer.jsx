// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaPinterestP,
//   FaTiktok,
//   FaChevronRight,
//   FaArrowUp,
// } from "react-icons/fa";
// import { HiOutlineTicket } from "react-icons/hi2";
// import { FiGlobe } from "react-icons/fi";
// import { API_URL } from "@/lib/api";

// const Footer = () => {
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [email, setEmail] = useState("");
//   const [subscribing, setSubscribing] = useState(false);
//   const [subscribeMessage, setSubscribeMessage] = useState(null);
//   const [subscribeError, setSubscribeError] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 400);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleSubscribe = async (e) => {
//     e.preventDefault();
//     if (!email) return;

//     setSubscribing(true);
//     setSubscribeMessage(null);
//     setSubscribeError(null);

//     try {
//       const response = await fetch(`${API_URL}/subscribers/subscribe`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setSubscribeMessage(
//           data.message || "Thank you for subscribing to RouteX!",
//         );
//         setEmail("");
//       } else {
//         setSubscribeError(
//           data.error || "Failed to subscribe. Please try again.",
//         );
//       }
//     } catch (error) {
//       console.error("Subscription error:", error);
//       setSubscribeError("Failed to subscribe. Please try again.");
//     } finally {
//       setSubscribing(false);
//     }
//   };

//   const servicesLinks = [
//     { title: "Student Visa", link: "/visa/student" },
//     { title: "Work Visa", link: "/visa/work" },
//     { title: "Tourist Visa", link: "/visa/tourist" },
//     { title: "Business Visa", link: "/visa/business" },
//   ];

//   const destinationLinks = [
//     { title: "Countries", link: "/countries" },
//     { title: "Destinations", link: "/destinations" },
//     { title: "Universities", link: "/universities" },
//     { title: "Scholarships", link: "/scholarships" },
//   ];

//   const usefulLinks = [
//     { title: "About Us", link: "/about" },
//     { title: "Scholarships", link: "/scholarships" },
//     { title: "All Scholarships", link: "/scholarships" },
//     { title: "Featured Scholarships", link: "/scholarships?featured=true" },
//     { title: "Contact", link: "/contact" },
//   ];

//   const socialLinks = [
//     { icon: <FaFacebookF />, link: "https://facebook.com" },
//     { icon: <FaInstagram />, link: "https://instagram.com" },
//     { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
//     { icon: <FaPinterestP />, link: "https://pinterest.com" },
//     { icon: <FaTiktok />, link: "https://tiktok.com" },
//   ];

//   return (
//     <footer
//       className="relative overflow-hidden bg-[var(--secondary,var(--primary-dark))] text-white"
//       aria-label="StudyAbroad footer"
//     >
//       {/* SEO Keywords / Semantic Information */}
//       <div className="sr-only">
//         StudyAbroad is an international education and visa consultancy helping
//         students with student visas, work visas, tourist visas, business visas,
//         international universities, study abroad destinations, scholarships,
//         admissions, and overseas education opportunities.
//       </div>

//       {/* ================= TOP SUPPORT STRIP ================= */}

//       <div className="relative z-10 border-b border-white/10">
//         <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-2 lg:px-8">
//           <div className="flex items-center gap-5">
//             <div
//               className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--primary,var(--primary))] text-3xl text-white"
//               aria-hidden="true"
//             >
//               <HiOutlineTicket />
//             </div>

//             <h3 className="font-serif text-xl leading-snug font-semibold sm:text-2xl">
//               Need Any Support For
//               <br className="hidden sm:block" /> Tour And Visa?
//             </h3>
//           </div>

//           <div className="flex items-center gap-5 sm:border-l sm:border-white/10 sm:pl-8">
//             <div
//               className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--primary,var(--primary))] text-3xl text-white"
//               aria-hidden="true"
//             >
//               <FiGlobe />
//             </div>

//             <h3 className="font-serif text-xl leading-snug font-semibold sm:text-2xl">
//               Are You Ready For Get
//               <br className="hidden sm:block" /> Started Travelling?
//             </h3>
//           </div>
//         </div>
//       </div>

//       {/* ================= MAIN FOOTER ================= */}

//       <div
//         className="relative bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage:
//             'url("https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/footer1-bg-img.png")',
//         }}
//       >
//         <div className="relative z-10 mx-auto max-w-[1320px] px-6 py-16 lg:px-8">
//           <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
//             {/* ===== BRAND COLUMN ===== */}

//             <div>
//               <Link
//                 href="/"
//                 aria-label="RouteX Home"
//                 className="mb-5 inline-block font-serif text-2xl font-bold text-white"
//               >
//                 <strong>StudyAbroad</strong>
//               </Link>

//               <p className="mb-5 max-w-[260px] text-[15px] leading-relaxed text-white/70">
//                 StudyAbroad provides professional study abroad, visa consultancy,
//                 university admission, scholarship, and international education
//                 guidance for students worldwide.
//               </p>

//               <div
//                 className="flex items-center gap-3"
//                 aria-label="StudyAbroad social media links"
//               >
//                 {socialLinks.map((item, idx) => (
//                   <a
//                     key={idx}
//                     href={item.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={`RouteX social media ${idx + 1}`}
//                     className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-[14px] transition hover:border-[var(--primary,var(--primary))] hover:bg-[var(--primary,var(--primary))]"
//                   >
//                     {item.icon}
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* ===== SERVICES COLUMN ===== */}

//             <nav aria-label="RouteX visa services">
//               <h4 className="mb-5 font-serif text-lg font-semibold">
//                 Visa Services
//               </h4>

//               <ul className="flex flex-col gap-3">
//                 {servicesLinks.map((item, idx) => (
//                   <li key={idx}>
//                     <Link
//                       href={item.link}
//                       className="flex items-center gap-2 text-[15px] text-white/80 transition hover:text-white"
//                     >
//                       <FaChevronRight
//                         className="text-[10px] text-[white]"
//                         aria-hidden="true"
//                       />
//                       {item.title}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </nav>

//             {/* ===== COUNTRIES / DESTINATIONS / UNIVERSITIES ===== */}

//             <nav aria-label="RouteX study abroad destinations">
//               <h4 className="mb-5 font-serif text-lg font-semibold">
//                 Study Abroad
//               </h4>

//               <ul className="flex flex-col gap-3">
//                 {destinationLinks.map((item, idx) => (
//                   <li key={idx}>
//                     <Link
//                       href={item.link}
//                       className="flex items-center gap-2 text-[15px] text-white/80 transition hover:text-[white]"
//                     >
//                       <FaChevronRight
//                         className="text-[10px] text-[white]"
//                         aria-hidden="true"
//                       />
//                       {item.title}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </nav>

//             {/* ===== USEFUL LINKS COLUMN ===== */}

//             <nav aria-label="RouteX useful links">
//               <h4 className="mb-5 font-serif text-lg font-semibold">
//                 Useful Links
//               </h4>

//               <ul className="flex flex-col gap-3">
//                 {usefulLinks.map((item, idx) => (
//                   <li key={idx}>
//                     <Link
//                       href={item.link}
//                       className="flex items-center gap-2 text-[15px] text-white/80 transition hover:text-[white]"
//                     >
//                       <FaChevronRight
//                         className="text-[10px] text-[white]"
//                         aria-hidden="true"
//                       />
//                       {item.title}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </nav>

//             {/* ===== NEWSLETTER COLUMN ===== */}

//             <div>
//               <h4 className="mb-5 font-serif text-lg font-semibold">
//                 Subscribe Our Newsletter
//               </h4>

//               <form
//                 onSubmit={handleSubscribe}
//                 className="flex w-full max-w-[340px] items-center overflow-hidden rounded-full bg-white p-1.5"
//                 aria-label="RouteX newsletter subscription"
//               >
//                 <input
//                   type="email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Email address"
//                   aria-label="Email address"
//                   className="w-full min-w-0 bg-transparent px-4 py-2 text-[14px] text-gray-800 outline-none placeholder:text-gray-400"
//                 />

//                 <button
//                   type="submit"
//                   disabled={subscribing}
//                   className="shrink-0 rounded-full bg-[var(--primary,var(--primary))] px-5 py-2.5 text-[14px] font-semibold whitespace-nowrap text-white transition hover:bg-[var(--primary-dark,var(--primary))] disabled:opacity-50"
//                 >
//                   {subscribing ? "Subscribing..." : "Subscribe"}
//                 </button>
//               </form>

//               {subscribeMessage && (
//                 <p
//                   className="mt-3 text-sm text-[var(--success)]"
//                   role="status"
//                 >
//                   {subscribeMessage}
//                 </p>
//               )}

//               {subscribeError && (
//                 <p
//                   className="mt-3 text-sm text-red-400"
//                   role="alert"
//                 >
//                   {subscribeError}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* ================= BOTTOM BAR ================= */}

//         <div className="relative z-10 border-t border-white/10">
//           <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-4 px-6 py-6 text-[14px] text-white/70 sm:flex-row lg:px-8">
//             <p>
//               Copyright © 2026 <strong>StudyAbroad</strong>. All Rights Reserved.
//             </p>

//             <nav aria-label="RouteX legal links">
//               <div className="flex items-center gap-6">
//                 <Link
//                   href="/terms"
//                   className="transition hover:text-white"
//                 >
//                   Terms &amp; Conditions
//                 </Link>

//                 <Link
//                   href="/privacy"
//                   className="transition hover:text-white"
//                 >
//                   Privacy Policy
//                 </Link>

//                 <Link
//                   href="/contact"
//                   className="transition hover:text-white"
//                 >
//                   Contact Us
//                 </Link>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </div>

//       {/* ================= SCROLL TO TOP BUTTON ================= */}

//       <button
//         onClick={scrollToTop}
//         aria-label="Scroll to top"
//         className={`fixed right-6 bottom-6 z-[100] flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--primary,var(--primary))] shadow-lg transition-all duration-300 hover:bg-[var(--primary,var(--primary))] hover:text-white ${
//           showScrollTop
//             ? "translate-y-0 opacity-100"
//             : "pointer-events-none translate-y-4 opacity-0"
//         }`}
//       >
//         <FaArrowUp />
//       </button>
//     </footer>
//   );
// };

// export default Footer;

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTiktok,
  FaChevronRight,
  FaArrowUp,
} from "react-icons/fa";
import { HiOutlineTicket } from "react-icons/hi2";
import { FiGlobe } from "react-icons/fi";
import { API_URL } from "@/lib/api";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState(null);
  const [subscribeError, setSubscribeError] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setSubscribing(true);
    setSubscribeMessage(null);
    setSubscribeError(null);

    try {
      const response = await fetch(`${API_URL}/subscribers/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubscribeMessage(
          data.message || "Thank you for subscribing to RouteX!",
        );
        setEmail("");
      } else {
        setSubscribeError(
          data.error || "Failed to subscribe. Please try again.",
        );
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setSubscribeError("Failed to subscribe. Please try again.");
    } finally {
      setSubscribing(false);
    }
  };

  const servicesLinks = [
    { title: "Student Visa", link: "/visa/student" },
    { title: "Work Visa", link: "/visa/work" },
    { title: "Tourist Visa", link: "/visa/tourist" },
    { title: "Business Visa", link: "/visa/business" },
  ];

  const destinationLinks = [
    { title: "Countries", link: "/countries" },
    { title: "Destinations", link: "/destinations" },
    { title: "Universities", link: "/universities" },
    { title: "Scholarships", link: "/scholarships" },
  ];

  const usefulLinks = [
    { title: "About Us", link: "/about" },
    { title: "Scholarships", link: "/scholarships" },
    { title: "All Scholarships", link: "/scholarships" },
    { title: "Featured Scholarships", link: "/scholarships?featured=true" },
    { title: "Contact", link: "/contact" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, link: "https://facebook.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
    { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
    { icon: <FaPinterestP />, link: "https://pinterest.com" },
    { icon: <FaTiktok />, link: "https://tiktok.com" },
  ];

  return (
    <footer
      className="relative overflow-hidden bg-[var(--secondary,var(--primary-dark))] text-white"
      aria-label="StudyAbroad footer"
    >
      {/* SEO Keywords / Semantic Information */}
      <div className="sr-only">
        StudyAbroad is an international education and visa consultancy helping
        students with student visas, work visas, tourist visas, business visas,
        international universities, study abroad destinations, scholarships,
        admissions, and overseas education opportunities.
      </div>

      {/* ================= TOP SUPPORT STRIP ================= */}

      <div className="relative z-10 border-b border-white/10">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-2 lg:px-8">
          <div className="flex items-center gap-5">
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--primary,var(--primary))] text-3xl text-white"
              aria-hidden="true"
            >
              <HiOutlineTicket />
            </div>

            <h3 className="font-serif text-xl leading-snug font-semibold sm:text-2xl">
              Need Any Support For
              <br className="hidden sm:block" /> Tour And Visa?
            </h3>
          </div>

          <div className="flex items-center gap-5 sm:border-l sm:border-white/10 sm:pl-8">
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--primary,var(--primary))] text-3xl text-white"
              aria-hidden="true"
            >
              <FiGlobe />
            </div>

            <h3 className="font-serif text-xl leading-snug font-semibold sm:text-2xl">
              Are You Ready For Get
              <br className="hidden sm:block" /> Started Travelling?
            </h3>
          </div>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}

      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/footer1-bg-img.png")',
        }}
      >
        <div className="relative z-10 mx-auto max-w-[1320px] px-6 py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            {/* ===== BRAND COLUMN ===== */}

            <div>
              <Link
                href="/"
                aria-label="RouteX Home"
                className="mb-5 inline-block font-serif text-2xl font-bold text-white"
              >
                <strong>StudyAbroad</strong>
              </Link>

              <p className="mb-5 max-w-[260px] text-[15px] leading-relaxed text-white/70">
                StudyAbroad provides professional study abroad, visa consultancy,
                university admission, scholarship, and international education
                guidance for students worldwide.
              </p>

              <div
                className="flex items-center gap-3"
                aria-label="StudyAbroad social media links"
              >
                {socialLinks.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`RouteX social media ${idx + 1}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-[14px] transition hover:border-[var(--primary,var(--primary))] hover:bg-[var(--primary,var(--primary))]"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* ===== SERVICES COLUMN ===== */}

            <nav aria-label="RouteX visa services">
              <h4 className="mb-5 font-serif text-lg font-semibold">
                Visa Services
              </h4>

              <ul className="flex flex-col gap-3">
                {servicesLinks.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.link}
                      className="group relative block pl-10 text-[15px] text-white/80 transition-all duration-300 hover:translate-x-2 hover:text-white"
                    >
                      {/* Initial Arrow Icon */}
                      <FaChevronRight className="absolute left-0 top-1/2 text-[10px] -translate-y-1/2 text-white transition-opacity duration-300 group-hover:opacity-0" />
                      
                      {/* Hover Line */}
                      <span className="absolute left-0 top-1/2 h-[2px] w-0 -translate-y-1/2 bg-[var(--primary)] transition-all duration-300 group-hover:w-6" />

                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* ===== COUNTRIES / DESTINATIONS / UNIVERSITIES ===== */}

            <nav aria-label="RouteX study abroad destinations">
              <h4 className="mb-5 font-serif text-lg font-semibold">
                Study Abroad
              </h4>

              <ul className="flex flex-col gap-3">
                {destinationLinks.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.link}
                      className="group relative block pl-10 text-[15px] text-white/80 transition-all duration-300 hover:translate-x-2 hover:text-white"
                    >
                      {/* Initial Arrow Icon */}
                      <FaChevronRight className="absolute left-0 top-1/2 text-[10px] -translate-y-1/2 text-white transition-opacity duration-300 group-hover:opacity-0" />

                      {/* Hover Line */}
                      <span className="absolute left-0 top-1/2 h-[2px] w-0 -translate-y-1/2 bg-[var(--primary)] transition-all duration-300 group-hover:w-6" />

                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* ===== USEFUL LINKS COLUMN ===== */}

            <nav aria-label="RouteX useful links">
              <h4 className="mb-5 font-serif text-lg font-semibold">
                Useful Links
              </h4>

              <ul className="flex flex-col gap-3">
                {usefulLinks.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.link}
                      className="group relative block pl-10 text-[15px] text-white/80 transition-all duration-300 hover:translate-x-2 hover:text-white"
                    >
                      {/* Initial Arrow Icon */}
                      <FaChevronRight className="absolute left-0 top-1/2 text-[10px] -translate-y-1/2 text-white transition-opacity duration-300 group-hover:opacity-0" />

                      {/* Hover Line */}
                      <span className="absolute left-0 top-1/2 h-[2px] w-0 -translate-y-1/2 bg-[var(--primary)] transition-all duration-300 group-hover:w-6" />

                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* ===== NEWSLETTER COLUMN ===== */}

            <div>
              <h4 className="mb-5 font-serif text-lg font-semibold">
                Subscribe Our Newsletter
              </h4>

              <form
                onSubmit={handleSubscribe}
                className="flex w-full max-w-[340px] items-center overflow-hidden rounded-full bg-white p-1.5"
                aria-label="RouteX newsletter subscription"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  aria-label="Email address"
                  className="w-full min-w-0 bg-transparent px-4 py-2 text-[14px] text-gray-800 outline-none placeholder:text-gray-400"
                />

                <button
                  type="submit"
                  disabled={subscribing}
                  className="shrink-0 rounded-full bg-[var(--primary,var(--primary))] px-5 py-2.5 text-[14px] font-semibold whitespace-nowrap text-white transition hover:bg-[var(--primary-dark,var(--primary))] disabled:opacity-50"
                >
                  {subscribing ? "Subscribing..." : "Subscribe"}
                </button>
              </form>

              {subscribeMessage && (
                <p
                  className="mt-3 text-sm text-[var(--success)]"
                  role="status"
                >
                  {subscribeMessage}
                </p>
              )}

              {subscribeError && (
                <p
                  className="mt-3 text-sm text-red-400"
                  role="alert"
                >
                  {subscribeError}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}

        <div className="relative z-10 border-t border-white/10">
          <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-4 px-6 py-6 text-[14px] text-white/70 sm:flex-row lg:px-8">
            <p>
              Copyright © 2026 <strong>StudyAbroad</strong>. All Rights Reserved.
            </p>

            <nav aria-label="RouteX legal links">
              <div className="flex items-center gap-6">
                <Link
                  href="/terms"
                  className="transition hover:text-white"
                >
                  Terms &amp; Conditions
                </Link>

                <Link
                  href="/privacy"
                  className="transition hover:text-white"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/contact"
                  className="transition hover:text-white"
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* ================= SCROLL TO TOP BUTTON ================= */}

      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed right-6 bottom-6 z-[100] flex h-12 w-12 items-center justify-center cursor-pointer rounded-full bg-white text-[var(--primary,var(--primary))] shadow-lg transition-all duration-300 hover:bg-[var(--primary,var(--primary))] hover:text-white ${
          showScrollTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;