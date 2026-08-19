"use client";

import VisaPageDesign from "@/components/visa/VisaPageDesign";
import {
  Briefcase,
  FileText,
  MessageCircle,
  DollarSign,
} from "lucide-react";

export default function WorkVisaPage() {
  const eligibilityRequirements = [
    "Valid passport with sufficient validity",
    "Valid job offer or employment contract from an eligible employer",
    "Meet the required education or professional qualifications",
    "Meet the work experience requirements for the position",
    "Proof that the employer is authorized to sponsor foreign workers",
    "Proof of sufficient financial resources where required",
    "Meet applicable language or skills requirements",
    "Complete required medical or background checks where applicable",
  ];

  const requiredDocuments = [
    "Valid passport",
    "Completed work visa application form",
    "Recent passport-sized photographs",
    "Valid job offer or employment contract",
    "Employer sponsorship or work authorization documents",
    "Educational certificates and qualifications",
    "Professional experience letters",
    "Updated CV or resume",
    "Recent bank statements or financial evidence where required",
    "Proof of accommodation",
    "Medical certificate where required",
    "Police clearance certificate where required",
  ];

  const applicationSteps = [
    {
      step: "01",
      title: "Check Eligibility",
      desc: "Review the work visa requirements and confirm that you meet the eligibility criteria.",
    },
    {
      step: "02",
      title: "Secure a Job Offer",
      desc: "Obtain an eligible job offer or employment contract from an authorized employer.",
    },
    {
      step: "03",
      title: "Prepare Documents",
      desc: "Collect your passport, qualifications, employment records, and supporting documents.",
    },
    {
      step: "04",
      title: "Employer Sponsorship",
      desc: "Complete the required sponsorship or work authorization process with your employer.",
    },
    {
      step: "05",
      title: "Submit Application",
      desc: "Complete and submit your work visa application with all required supporting documents.",
    },
    {
      step: "06",
      title: "Attend Appointment",
      desc: "Provide biometrics, attend an interview, or complete additional checks when required.",
    },
    {
      step: "07",
      title: "Visa Processing",
      desc: "The relevant immigration authorities review your application and supporting evidence.",
    },
    {
      step: "08",
      title: "Receive Decision",
      desc: "Receive your work visa decision and prepare for employment and travel to your destination.",
    },
  ];

  const workVisaFaqs = [
    {
      question: "What is a work visa and who is it for?",
      answer:
        "A work visa allows eligible foreign nationals to live and work in another country for an approved employer or under specific employment conditions. Eligibility and visa conditions depend on the destination country, job type, employer, and applicant's qualifications.",
    },
    {
      question: "Do I need a job offer to apply for a work visa?",
      answer:
        "Many work visa categories require an eligible job offer from an employer in the destination country. Some countries also offer work visa or work permit routes that may not require a confirmed job offer, depending on the applicant's qualifications and the specific immigration program.",
    },
    {
      question: "What documents are required for a work visa?",
      answer:
        "Common documents include a valid passport, work visa application form, photographs, job offer or employment contract, employer sponsorship documents, educational certificates, professional experience records, financial evidence, and medical or police clearance documents where required. Exact requirements vary by country.",
    },
    {
      question: "How long does a work visa take to process?",
      answer:
        "Work visa processing times vary depending on the destination country, visa category, employer sponsorship process, application centre, season, and whether additional background or security checks are required. Applicants should allow sufficient time before their planned travel date.",
    },
    {
      question: "Can my family accompany me on a work visa?",
      answer:
        "In many countries, eligible work visa holders may be able to bring their spouse or dependent children through a dependent or family visa route. The requirements, financial conditions, and rights of family members vary depending on the destination and visa category.",
    },
    {
      question: "Can Studyabroad help me with my work visa application?",
      answer:
        "Yes. Studyabroad can help you understand the work visa requirements, organize your supporting documents, review your application, and guide you through the different stages of the process so your submission is complete and well organized.",
    },
  ];

  return (
    <VisaPageDesign
      hero={{
        badge: "Work Visa Assistance",
        title: "Work Visa Guidance for",
        highlight: "International Careers",
        description:
          "Planning to work abroad? Studyabroad helps you understand work visa requirements, prepare your employment documents, and navigate the application process with confidence.",
        image: "/passport.jpg",
      }}

      overview={{
        badgeText: "Work Visa Support",
        badgeIcon: Briefcase,
        title: "Your Work Visa Journey,",
        highlightTitle: "Made Simple & Clear",
        description:
          "Planning an international career? Our consultants guide you through job offers, documentation, sponsorship requirements, and the work visa application process.",
        features: [
          {
            icon: FileText,
            title: "Documents",
            desc: "Prepare employment & qualification documents",
          },
          {
            icon: MessageCircle,
            title: "Application",
            desc: "Get guidance throughout the visa process",
          },
          {
            icon: DollarSign,
            title: "Finances",
            desc: "Prepare required financial evidence",
          },
        ],
        footerMainStat: "20+ countries",
        footerSubStat: "covered",
        footerNote: "For international employment",
        imageSrc: "/workVisa.jpg",
        imageAlt: "Work visa consultation",
        cardSubTitle: "Work Visa Guidance",
        cardMainTitle: "From job offer to approval",
        badgeStatNumber: "20+",
        badgeStatLabel: "Countries Covered",
      }}

      eligibility={{
        title: "Who Can Apply for a Work Visa?",
        description:
          "Work visa eligibility depends on your job offer, qualifications, professional experience, employer sponsorship, and the immigration rules of your destination.",
        requirements: eligibilityRequirements,
      }}

      documents={{
        title: "Prepare Your Work Visa Documents",
        description:
          "Work visa requirements vary by destination and employment category. Make sure your documents are complete, accurate, and consistent.",
        items: requiredDocuments,
      }}

      process={{
        title: "Your Work Visa Journey",
        description:
          "From finding an eligible job to receiving your visa, follow a clear and organized work visa application process.",
        steps: applicationSteps,
      }}

      faq={{  
        faqsData: workVisaFaqs,
        badgeText: "Work Visa FAQs",
        title: "Got Questions About",
        highlightTitle: "Work Visas?",
        description:
          "Find answers to common questions about work visa eligibility, job offers, sponsorship, documents, processing times, and family applications.",
        imageSrc: "/workVisa.jpg",
      }}
    />
  );
}