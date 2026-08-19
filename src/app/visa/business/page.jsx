"use client";

import VisaPageDesign from "@/components/visa/VisaPageDesign";
import { Briefcase, FileText, MessageCircle, DollarSign } from "lucide-react";
import {
  ChevronRight,
  CheckCircle,
  
  Clock,
} from "lucide-react";


export default function BusinessVisaPage() {
  const eligibilityRequirements = [
    "Valid passport with at least 6 months validity",
    "Clear business purpose such as meetings, conferences, or events",
    "Invitation letter or supporting business correspondence",
    "Employment verification or proof of business ownership",
    "Proof of sufficient funds for the planned trip",
    "Accommodation and return travel arrangements",
    "Supporting documents showing your professional background",
    "Additional medical or police documents where required",
  ];

  const requiredDocuments = [
    "Valid passport",
    "Completed business visa application form",
    "Recent passport-sized photographs",
    "Business invitation letter",
    "Employment or business ownership proof",
    "Recent bank statements or financial evidence",
    "Flight itinerary or return ticket",
    "Hotel or accommodation confirmation",
    "Conference registration or meeting details",
    "Travel or health insurance",
    "Medical certificate where required",
    "Police clearance certificate where required",
  ];

  const applicationSteps = [
    {
      step: "01",
      title: "Understand Requirements",
      desc: "Review the visa rules and requirements for your destination.",
    },
    {
      step: "02",
      title: "Prepare Documents",
      desc: "Organize your business, financial, and personal documents.",
    },
    {
      step: "03",
      title: "Complete Application",
      desc: "Complete the appropriate business visa application carefully.",
    },
    {
      step: "04",
      title: "Submit & Pay",
      desc: "Submit your application and pay the applicable visa fees.",
    },
    {
      step: "05",
      title: "Attend Appointment",
      desc: "Provide biometrics or attend an interview when required.",
    },
    {
      step: "06",
      title: "Visa Processing",
      desc: "Your application is reviewed by the relevant authorities.",
    },
    {
      step: "07",
      title: "Receive Decision",
      desc: "Receive your visa decision and review the visa conditions.",
    },
    {
      step: "08",
      title: "Prepare to Travel",
      desc: "Finalize your travel arrangements and business itinerary.",
    },
  ];

 const businessVisaFaqs = [
  {
    question: "What is a business visa and who is it for?",
    answer:
      "A business visa is generally intended for short-term business activities such as attending meetings, conferences, negotiations, trade events, or exploring business opportunities. It normally does not authorize regular employment or paid work in the destination country.",
  },
  {
    question: "What documents are usually required for a business visa?",
    answer:
      "Common documents include a valid passport, completed visa application form, recent photographs, business invitation or supporting correspondence, employment or business ownership proof, financial evidence, travel arrangements, accommodation details, and insurance. Exact requirements vary by destination.",
  },
  {
    question: "Do I need an invitation letter for a business visa?",
    answer:
      "Many business visa applications require an invitation letter from a business partner, conference organizer, client, or company in the destination country. The letter should normally explain the purpose and duration of the visit and may include information about expenses.",
  },
  {
    question: "How long does a business visa take to process?",
    answer:
      "Processing times vary significantly depending on the destination, visa category, application centre, season, and whether additional checks are required. It is important to check the latest requirements and allow sufficient time before your intended travel date.",
  },
  {
    question: "Can I attend conferences and business meetings on a business visa?",
    answer:
      "In many destinations, attending conferences, seminars, trade events, business meetings, and negotiations can be permitted under a business visa. You should always confirm that your planned activities are allowed under the specific visa conditions of your destination.",
  },
  {
    question: "Can Studyabroad help me prepare my business visa application?",
    answer:
      "Yes. Studyabroad can help you understand the application requirements, organize supporting documents, review your financial and business evidence, and prepare you for the application process so that your submission is complete and well organized.",
  },
];

  return (
    <VisaPageDesign
      hero={{
        badge: "Business Visa Assistance",
        title: "Business Visa Guidance for",
        highlight: "International Travel",
        description:
          "Planning an international business meeting, conference, trade event, or professional visit? Studyabroad helps you understand visa requirements, prepare documents, and navigate the application process with confidence.",
        image: "/passport.jpg",
      }}

      overview={{
        badgeText: "Business Visa Support",
        badgeIcon: Briefcase,
        title: "Your Business Visa Journey,",
        highlightTitle: "Made Simple & Fast",
        description:
          "Traveling for meetings, conferences, or trade events? Our consultants guide you through every step of the business visa process.",
        features: [
          {
            icon: FileText,
            title: "Documents",
            desc: "Prepare invitation & business proof",
          },
          {
            icon: MessageCircle,
            title: "Interview",
            desc: "Handle embassy queries confidently",
          },
          {
            icon: DollarSign,
            title: "Finances",
            desc: "Show sufficient business funds",
          },
        ],
        footerMainStat: "20+ countries",
        footerSubStat: "covered",
        footerNote: "For meetings, trade & conferences",
        imageSrc: "/bussinessVisa.jpg",
        imageAlt: "Business visa consultation",
        cardSubTitle: "Business Visa Guidance",
        cardMainTitle: "From invitation to approval",
        badgeStatNumber: "20+",
        badgeStatLabel: "Countries Covered",
      }}

      eligibility={{
        title: "Who Can Apply for a Business Visa?",
        description:
          "Your eligibility depends on the purpose of travel, destination, professional background, and supporting evidence.",
        requirements: eligibilityRequirements,
      }}

      documents={{
        title: "Prepare Your Business Visa Documents",
        description:
          "Document requirements vary by destination. Make sure your supporting documents are complete, accurate, and consistent.",
        items: requiredDocuments,
      }}

      process={{
        title: "Your Business Visa Journey",
        description:
          "From understanding the requirements to receiving your visa, follow a clear and organized application process.",
        steps: applicationSteps,
      }}

      faq={{
        faqsData: businessVisaFaqs,
        badgeText: "Business Visa FAQs",
        title: "Got Questions About",
        highlightTitle: "Business Visas?",
        description:
          "Find answers to common questions regarding business travel requirements, invitation letters, processing timelines, and documentation.",
        imageSrc: "/bussinessVisa.jpg",
      }}
    />
  );
}