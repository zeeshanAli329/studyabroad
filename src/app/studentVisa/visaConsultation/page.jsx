import VisaPageTemplate from "@/components/visa/Visapagetemplate";
import { visaPagesData } from "@/config/Visapagesdata";

export const metadata = {
  title: "Visa Consultation | Study Abroad",
  description:
    "Get personalized student visa consultation from Study Abroad experts. Understand your options, eligibility, and the right pathway before you apply.",
};

const VisaConsultationPage = () => <VisaPageTemplate data={visaPagesData.visaConsultation} />;

export default VisaConsultationPage;