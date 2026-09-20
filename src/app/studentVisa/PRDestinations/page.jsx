import VisaPageTemplate from "@/components/visa/Visapagetemplate";
import { visaPagesData } from "@/config/Visapagesdata";
import { visaFaqs } from "@/config/Visafaqs";

export const metadata = {
  title: "PR Destinations (Permanent Residency Pathways) | Study Abroad",
  description:
    "Discover study abroad destinations with clear permanent residency pathways and plan your long-term settlement journey.",
};

const PRDestinationsPage = () => (
  <VisaPageTemplate
    data={{
      ...visaPagesData.PRDestinations,
      faqs: visaFaqs.PRDestinations,
      faqImage: visaFaqs.faqImages.PRDestinations,
    }}
  />
);

export default PRDestinationsPage;
