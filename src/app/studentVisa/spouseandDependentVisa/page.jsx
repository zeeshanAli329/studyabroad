import VisaPageTemplate from "@/components/visa/Visapagetemplate";
import { visaPagesData } from "@/config/Visapagesdata";

export const metadata = {
  title: "Spouse and Dependent Visa | Study Abroad",
  description:
    "Understand eligibility and requirements for bringing your spouse or children with you on a student visa.",
};

const SpouseAndDependentVisaPage = () => (
  <VisaPageTemplate data={visaPagesData.spouseandDependentVisa} />
);

export default SpouseAndDependentVisaPage;