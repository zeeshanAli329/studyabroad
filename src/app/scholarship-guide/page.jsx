import ScholarshipsHero from "@/components/scholarships/latestscholarships/ScholarshipHero";
import GuideContent from "./GuideContent";
import Faq from "@/components/visa/Faq";
import { scholarshipGuideFaqs } from "./scholarshipGuideFaqs";
import Link from 'next/link'


export const metadata = {
  title: "Scholarship Guide for Pakistani Students | Studyabroad.com.pk",
  description:
    "A complete step-by-step guide to finding, applying for, and winning scholarships as a Pakistani student — types of scholarships, required documents, application steps, and common mistakes to avoid.",
  keywords: [
    "scholarship guide for Pakistani students",
    "how to apply for scholarships abroad",
    "fully funded scholarship application process",
    "study abroad scholarship documents",
    "scholarship application mistakes",
  ],
  openGraph: {
    title: "Scholarship Guide for Pakistani Students | Studyabroad.com.pk",
    description:
      "Everything you need to know to find and win a study abroad scholarship — from choosing the right type to avoiding the mistakes that get applications rejected.",
    type: "article",
  },
};

export default function ScholarshipGuidePage() {
  return (
    <main className="w-full max-w-full overflow-x-hidden scroll ">
      <ScholarshipsHero
        image="/scalorship.jpg"
        badge="Free Resource"
        titleLine1="The Complete"
        titleHighlight="Scholarship Guide"
        description="Everything you need to know to find, prepare for, and win a study abroad scholarship — from choosing the right type of funding to avoiding the mistakes that get strong applications rejected."
        breadcrumbLabel="Scholarship Guide"
      />

      <GuideContent />

      <Faq
        faqsData={scholarshipGuideFaqs}
        badgeText="Scholarship Guide FAQs"
        title="Answers Before"
        highlightTitle="You Apply"
        description="Common questions about eligibility, timing, and the scholarship application process."
        imageSrc="/scalorship.jpg"
      />

   
    </main>
  );
}