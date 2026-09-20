import VisaPageTemplate from "@/components/visa/Visapagetemplate";
import { visaPagesData } from "@/config/Visapagesdata";

export const metadata = {
  title: "Post Study Work Visa | Study Abroad",
  description:
    "Understand post-study work visa options and plan your career path after graduation with Study Abroad expert guidance.",
};

const PostStudyWorkVisaPage = () => <VisaPageTemplate data={visaPagesData.postStudyWorkVisa} />;

export default PostStudyWorkVisaPage;