import VisaPageTemplate from "@/components/visa/Visapagetemplate";
import { visaPagesData } from "@/config/Visapagesdata";
import { visaFaqs } from "@/config/Visafaqs";
export const metadata = {
  title: "Country Requirements | Study Abroad",
  description:
    "Explore visa, financial, and documentation requirements for your target study abroad destination country.",
};

const CountryRequirementsPage = () => 
    <VisaPageTemplate
    data={{
      ...visaPagesData.IELTSPreparation,
      faqs: visaFaqs.countryRequirements,
      faqImage: visaFaqs.faqImages.countryRequirements,
    }}
  />
  ;

export default CountryRequirementsPage;