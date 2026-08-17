import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import BrandLogos from "@/components/home/BrandLogos";
import PopularCountries from "@/components/home/PopularCountries";
import Services from "@/components/home/Services";
import BlogSection from "@/components/home/BlogSection";
import FAQSection from "@/components/home/FAQSection";
import Testimonial from "@/components/home/Testimonial";
import CTA from "@/components/home/CTA";
import TeamSection from "@/components/home/TeamSection";
import GlobalOfferSection from "@/components/home/GlobalOfferSection";
import CoachingSection from "@/components/home/CoachingSection";
// import { SimpleProcess } from "./(site)/about/page";
import { SimpleProcess } from "@/components/about_us/SimpleProcess";
import AdBanner from "@/components/ads/AdBanner";

// import AdBanner from "@/components/AdBanner";

export const metadata = {
  title: "StudyAbroad Scholarships & Free Education for Pakistani Students",

  description:
    "Free education, fully funded scholarships & student visa guidance for Pakistani students. Trusted study abroad consultants, 100+ success stories.",

  keywords: [
    "scholarships for Pakistani students",
    "fully funded scholarships",
    "free education abroad",
    "study abroad for Pakistani students",
    "student visa guidance",
    "study abroad consultants Pakistan",
    "international scholarships",
    "study abroad scholarships",
  ],

  authors: [{ name: "Study Abroad" }],

  creator: "Study Abroad",

  publisher: "Study Abroad",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Scholarships & Free Education for Pakistani Students",
    description:
      "Free education, fully funded scholarships & student visa guidance for Pakistani students. Trusted study abroad consultants, 100+ success stories.",
    type: "website",
    locale: "en_PK",
    siteName: "Study Abroad",
  },

  twitter: {
    card: "summary_large_image",
    title: "Scholarships & Free Education for Pakistani Students",
    description:
      "Free education, fully funded scholarships & student visa guidance for Pakistani students. Trusted study abroad consultants, 100+ success stories.",
  },
};




export default function Home() {
  return (
    <>
      {/* Ad: Above Hero */}
      <AdBanner
        placement="home-top"
        className="mx-auto h-[180px] w-full max-w-7xl rounded-2xl sm:h-[220px] lg:h-[280px]"
      />

      <Hero />

      {/* Ad: Between Hero and Features */}
      <AdBanner
        placement="hero-bottom"
        className="mx-auto my-8 h-[180px] w-full max-w-7xl rounded-2xl sm:h-[220px] lg:h-[280px]"
      />

      <Features />

      {/* Ad: Before About */}
      <AdBanner
        placement="about-top"
        className="mx-auto my-8 h-[180px] w-full max-w-7xl rounded-2xl sm:h-[220px] lg:h-[280px]"
      />

      <AboutSection />

      <WhyChooseUs />

      <BrandLogos />

      {/* Ad: Before Countries */}
      <AdBanner
        placement="countries-top"
        className="mx-auto my-8 h-[180px] w-full max-w-7xl rounded-2xl sm:h-[220px] lg:h-[280px]"
      />

      <PopularCountries />

      <Services />

      <GlobalOfferSection />

      <CoachingSection />

      {/* Ad: Before Blog */}
      <AdBanner
        placement="blog-top"
        className="mx-auto my-8 h-[180px] w-full max-w-7xl rounded-2xl sm:h-[220px] lg:h-[280px]"
      />

      <BlogSection />

      <SimpleProcess />

      <TeamSection />

      <FAQSection />

      <Testimonial />

      {/* Ad: Before CTA */}
      <AdBanner
        placement="cta-top"
        className="mx-auto my-8 h-[180px] w-full max-w-7xl rounded-2xl sm:h-[220px] lg:h-[280px]"
      />

      <CTA />
    </>
  );
}