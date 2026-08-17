'use client';
import { SimpleProcess } from "@/components/about_us/SimpleProcess";
import { HeroBreadcrumb } from "@/components/about_us/Hero";
import Hero2AboutUs from "@/components/about_us/Hero2AboutUs";
import { MissionVision } from "@/components/about_us/MissionVision";
import { ContactSection } from "@/components/about_us/ContactSection";
import { CountriesCategory } from "@/components/about_us/CountriesCategory"
import GlobalOfferSection from "@/components/home/GlobalOfferSection";

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