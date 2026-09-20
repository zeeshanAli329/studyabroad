import VisaPageTemplate from "@/components/visa/Visapagetemplate";
import { visaPagesData } from "@/config/Visapagesdata";

export const metadata = {
  title: "Pathway Programs | Study Abroad",
  description:
    "Explore foundation, diploma, and pre-masters pathway programs that bridge you into your target degree abroad.",
};

const PathwayProgramsPage = () => <VisaPageTemplate data={visaPagesData.pathwayPrograms} />;

export default PathwayProgramsPage;