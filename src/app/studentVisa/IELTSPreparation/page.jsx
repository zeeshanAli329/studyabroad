// IELTSPreparation page

import VisaPageTemplate from "@/components/visa/Visapagetemplate";
import { visaPagesData } from "@/config/Visapagesdata";
import { visaFaqs } from "@/config/Visafaqs";

export const metadata = {
  title: "IELTS Preparation | Study Abroad",
  description:
    "Structured IELTS coaching to help you hit the band score your university and visa application require.",
};

const IELTSPreparationPage = () => (
  <VisaPageTemplate
    data={{
      ...visaPagesData.IELTSPreparation,
      faqs: visaFaqs.IELTSPreparation,
      faqImage: visaFaqs.faqImages.IELTSPreparation,
    }}
  />
);

export default IELTSPreparationPage;