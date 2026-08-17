'use client';
import { useState, useEffect, useRef } from "react";
import { SimpleProcess } from "@/components/about_us/SimpleProcess";
import { HeroBreadcrumb } from "@/components/about_us/Hero";
import Hero2AboutUs from "@/components/about_us/Hero2AboutUs";
import { MissionVision } from "@/components/about_us/MissionVision";
import { ContactSection } from "@/components/about_us/ContactSection";
import { CountriesCategory } from "@/components/about_us/CountriesCategory"
import GlobalOfferSection from "@/components/home/GlobalOfferSection";

/* ============================================================
   Reveal — shared scroll-triggered fade + slide-up wrapper
   ============================================================ */
export function Reveal({ children, delay = 0, y = 24, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
/* ============================================================
   PAGE ROOT
   ============================================================ */
export default function RouteXAboutPage() {
  return (
    <div className="w-full bg-white font-sans">
      <HeroBreadcrumb />
      <Hero2AboutUs />
      <SimpleProcess />
      <GlobalOfferSection />
      <ContactSection />
      <CountriesCategory />
      <MissionVision />

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 18s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-spin-slow { animation: none; }
        }
      `}</style>
    </div>
  );
}