import VisaPageTemplate from "@/components/visa/Visapagetemplate";
import { visaPagesData } from "@/config/Visapagesdata";
import { visaFaqs } from "@/config/Visafaqs";
export const metadata = {
  title: "Visa Consultation | Study Abroad",
  description:
    "Get personalized student visa consultation from Study Abroad experts. Understand your options, eligibility, and the right pathway before you apply.",
};
const VisaConsultationPage = () => (
  <VisaPageTemplate
    data={{
      ...visaPagesData.visaConsultation,
      faqs: visaFaqs.visaConsultation,
      faqImage: visaFaqs.faqImages.visaConsultation,
    }}
  />
);
export default VisaConsultationPage;
