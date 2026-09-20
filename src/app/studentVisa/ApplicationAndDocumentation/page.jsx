import VisaPageTemplate from "@/components/visa/Visapagetemplate";
import { visaPagesData } from "@/config/Visapagesdata";
import { visaFaqs } from "@/config/Visafaqs";
export const metadata = {
  title: "Application and Documentation | Study Abroad",
  description:
    "Get expert help preparing accurate, complete visa and university application documents to avoid delays and rejections.",
};

const ApplicationAndDocumentationPage = () => (
  <VisaPageTemplate
    data={{
      ...visaPagesData.applicationAndDocumentation,
      faqs: visaFaqs.ApplicationAndDocumentationdata,
      faqImage: visaFaqs.faqImages.ApplicationAndDocumentationdata,
    }}
  />
);

export default ApplicationAndDocumentationPage;