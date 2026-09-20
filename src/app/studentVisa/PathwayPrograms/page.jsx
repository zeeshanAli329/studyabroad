import VisaPageTemplate from "@/components/visa/Visapagetemplate";
import { visaPagesData } from "@/config/Visapagesdata";
import { visaFaqs } from "@/config/Visafaqs";

export const metadata = {
  title: "Pathway Programs | Study Abroad",
  description:
    "Explore foundation, diploma, and pre-masters pathway programs that bridge you into your target degree abroad.",
};

const PathwayProgramsPage = () => (
  <VisaPageTemplate
    data={{
      ...visaPagesData.pathwayPrograms,
      faqs: visaFaqs.PathwayPrograms,
      faqImage: visaFaqs.faqImages.PathwayPrograms,
    }}
  />
);

export default PathwayProgramsPage;
