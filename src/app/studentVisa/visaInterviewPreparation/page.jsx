import VisaPageTemplate from "@/components/visa/Visapagetemplate";
import { visaPagesData } from "@/config/Visapagesdata";

export const metadata = {
  title: "Visa Interview Preparation | Study Abroad",
  description:
    "Prepare for your student visa interview with mock sessions, common question practice, and expert coaching.",
};

const VisaInterviewPreparationPage = () => (
  <VisaPageTemplate data={visaPagesData.visaInterviewPreparation} />
);

export default VisaInterviewPreparationPage;