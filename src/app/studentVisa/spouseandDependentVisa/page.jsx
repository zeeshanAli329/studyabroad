import VisaPageTemplate from "@/components/visa/Visapagetemplate";
import { visaPagesData } from "@/config/Visapagesdata";
import { visaFaqs } from "@/config/Visafaqs";

export const metadata = {
  title: "Spouse and Dependent Visa | Study Abroad",
  description:
    "Understand eligibility and requirements for bringing your spouse or children with you on a student visa.",
};

const SpouseAndDependentVisaPage = () => (
  <VisaPageTemplate
    data={{
      ...visaPagesData.spouseandDependentVisa,
      faqs: visaFaqs.spouseandDependentVisa,
      faqImage: visaFaqs.faqImages.spouseandDependentVisa,
    }}
  />
);

export default SpouseAndDependentVisaPage;
