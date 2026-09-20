import VisaPageTemplate from "@/components/visa/Visapagetemplate";
import { visaPagesData } from "@/config/Visapagesdata";

export const metadata = {
  title: "University Selection | Study Abroad",
  description:
    "Find universities that match your grades, budget, and career goals with expert university selection guidance from Study Abroad.",
};

const UniversitySelectionPage = () => (
  <VisaPageTemplate
    data={{
      ...visaPagesData.visaConsultation,
      faqs: visaFaqs.visaConsultation,
      faqImage: visaFaqs.faqImages.visaConsultation,
    }}
  />
);

export default UniversitySelectionPage;
