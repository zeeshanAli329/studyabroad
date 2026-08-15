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
import { SimpleProcess } from "./(site)/about/page";


export default function Home() {
  return(
<>
    <Hero />
    <Features />
    <AboutSection />
    <WhyChooseUs />
    <BrandLogos />
    <PopularCountries />
    <Services />
    <GlobalOfferSection />
    <CoachingSection />
    <BlogSection />
    <SimpleProcess />
    <TeamSection />
    <FAQSection />
    <Testimonial />
    <CTA />
</>
  )

}
