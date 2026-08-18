"use client";

import VisaPageDesign from "@/components/visa/VisaPageDesign";
import {
  GraduationCap,
  FileText,
  MessageCircle,
  DollarSign,
} from "lucide-react";

export default function StudentVisaPage() {
  const eligibilityRequirements = [
    "Valid passport with sufficient validity for international travel",
    "Confirmed admission or offer letter from a recognized educational institution",
    "Proof that you meet the academic requirements of your chosen study program",
    "Proof of sufficient funds to cover tuition fees, living expenses, and travel costs",
    "Valid sponsorship or financial support documents where applicable",
    "Required English language or other language proficiency evidence",
    "Medical examination or health certificate where required",
    "Meet the student visa and immigration requirements of the destination country",
  ];

  const requiredDocuments = [
    "Valid passport",
    "CNIC or B-Form where applicable",
    "University or college offer letter",
    "Confirmation of enrollment or admission document",
    "Academic transcripts and certificates",
    "HEC or IBCC attested educational documents where required",
    "Proof of funds or financial sponsorship",
    "Bank statements and financial documents",
    "Sponsorship letter or affidavit where applicable",
    "Medical certificate or health examination documents",
    "Recent passport-sized photographs",
    "Completed student visa application form",
  ];

  const applicationSteps = [
    {
      step: "01",
      title: "Check Student Visa Eligibility",
      desc: "Review the student visa requirements for your destination and confirm that you meet the academic, financial, and immigration criteria.",
    },
    {
      step: "02",
      title: "Secure Your Admission",
      desc: "Obtain an offer letter or admission confirmation from a recognized university, college, or educational institution.",
    },
    {
      step: "03",
      title: "Prepare Your Documents",
      desc: "Organize your passport, academic records, admission documents, financial evidence, and other required student visa documents.",
    },
    {
      step: "04",
      title: "Prepare Financial Proof",
      desc: "Prepare bank statements, sponsorship letters, and other financial evidence required to demonstrate that your study and living expenses can be covered.",
    },
    {
      step: "05",
      title: "Complete Visa Application",
      desc: "Complete the student visa application form accurately and provide information that matches your admission and supporting documents.",
    },
    {
      step: "06",
      title: "Attend Biometrics & Interview",
      desc: "Attend your visa appointment, provide biometrics, and prepare for a student visa interview if required by the destination country.",
    },
    {
      step: "07",
      title: "Student Visa Processing",
      desc: "The relevant embassy or immigration authority reviews your application, academic background, financial evidence, and study plans.",
    },
    {
      step: "08",
      title: "Receive Your Visa & Prepare to Travel",
      desc: "Receive your student visa decision and complete your final travel, accommodation, insurance, and pre-departure arrangements.",
    },
  ];

  const studentVisaFaqs = [
    {
      question: "What is a student visa and who needs one?",
      answer:
        "A student visa allows an international student to study legally at an approved educational institution in another country. Pakistani students normally need a student visa or study permit when their chosen destination requires immigration permission for international students.",
    },
    {
      question: "What documents are required for a student visa from Pakistan?",
      answer:
        "Common student visa documents include a valid passport, CNIC or B-Form where applicable, university offer letter, academic transcripts and certificates, financial evidence, sponsorship documents, photographs, medical documents, and a completed visa application form. Exact requirements depend on the destination country.",
    },
    {
      question: "Do Pakistani students need to show bank statements for a student visa?",
      answer:
        "Many student visa applications require proof that the student can cover tuition fees and living expenses. This may include bank statements, sponsorship letters, education loans, scholarship documents, or other accepted financial evidence. The required amount and format vary by country.",
    },
    {
      question: "Do I need an interview for a student visa?",
      answer:
        "Some countries and visa categories require student visa interviews or credibility interviews. Students may be asked about their university, chosen course, academic background, career plans, financial situation, and reasons for studying abroad.",
    },
    {
      question: "How long does a student visa take to process?",
      answer:
        "Student visa processing times vary by country, visa category, application centre, season, document verification, and individual circumstances. Pakistani students should apply well before their university intake and allow additional time for biometrics or interviews where required.",
    },
    {
      question: "Why do Pakistani student visa applications get rejected?",
      answer:
        "Student visa applications can be refused for different reasons, including insufficient financial evidence, inconsistent information, incomplete documentation, concerns about the genuine purpose of study, weak academic progression, or failure to meet specific immigration requirements. The exact reason depends on the individual application and destination country.",
    },
    {
      question: "Can I reapply after my student visa is refused?",
      answer:
        "In many cases, applicants can submit a new student visa application after a refusal, depending on the destination country's rules. Before reapplying, it is important to understand the refusal reasons, correct weaknesses in the previous application, and provide stronger or clearer supporting evidence.",
    },
    {
      question: "Can Studyabroad help Pakistani students with student visa applications?",
      answer:
        "Yes. Studyabroad can guide Pakistani students through student visa requirements, document preparation, financial proof, visa application forms, interview preparation, and pre-departure planning for studying abroad.",
    },
  ];

  return (
    <VisaPageDesign
      hero={{
        badge: "Student Visa Assistance",
        title: "Student Visa Guidance for",
        highlight: "Pakistani Students",
        description:
          "Getting a student visa is often the most stressful part of studying abroad. Our consultants guide Pakistani students through every step, from document preparation and financial proof to visa interviews and final travel preparation, so nothing stands between you and your study abroad journey.",
        image: "/studentvisa.jpg",
      }}

      overview={{
        badgeText: "Student Visa Support",
        badgeIcon: GraduationCap,
        title: "Your Student Visa Journey,",
        highlightTitle: "Made Simple & Clear",
        description:
          "Planning to study abroad from Pakistan? Our student visa consultants help you understand country-specific requirements, prepare your documents, organize financial evidence, and confidently navigate the visa application process.",
        features: [
          {
            icon: FileText,
            title: "Documents",
            desc: "Prepare academic & visa documents",
          },
          {
            icon: MessageCircle,
            title: "Visa Interview",
            desc: "Prepare for common interview questions",
          },
          {
            icon: DollarSign,
            title: "Financial Proof",
            desc: "Prepare funds & sponsorship evidence",
          },
        ],
        footerMainStat: "20+ countries",
        footerSubStat: "covered",
        footerNote: "For international study",
        imageSrc: "/studentvisa.jpg",
        imageAlt:
          "Student visa consultation for Pakistani students planning to study abroad",
        cardSubTitle: "Student Visa Guidance",
        cardMainTitle: "From admission to visa approval",
        badgeStatNumber: "20+",
        badgeStatLabel: "Countries Covered",
      }}

      eligibility={{
        title: "Who Can Apply for a Student Visa?",
        description:
          "Student visa eligibility depends on your academic background, university admission, financial situation, study plans, and the immigration requirements of your chosen destination.",
        requirements: eligibilityRequirements,
      }}

      documents={{
        title: "Required Student Visa Documents Checklist",
        description:
          "Preparing the right documents is one of the most important parts of a successful student visa application. Pakistani students should ensure their academic, financial, personal, and admission documents are complete and consistent.",
        items: requiredDocuments,
      }}

      process={{
        title: "Your Student Visa Application Journey",
        description:
          "From receiving your university offer letter to getting your student visa, follow a clear and organized application process designed to help you prepare with confidence.",
        steps: applicationSteps,
      }}

      faq={{
        faqsData: studentVisaFaqs,
        badgeText: "Student Visa FAQs",
        title: "Got Questions About",
        highlightTitle: "Student Visas?",
        description:
          "Find answers to common questions about student visa requirements for Pakistani students, documents, financial proof, visa interviews, processing times, refusals, and reapplications.",
        imageSrc: "/studentvisa.jpg",
      }}
    />
  );
}