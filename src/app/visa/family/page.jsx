"use client";

import VisaPageDesign from "@/components/visa/VisaPageDesign";
import {
  Users,
  FileText,
  MessageCircle,
  DollarSign,
} from "lucide-react";

export default function FamilyVisaPage() {
  const eligibilityRequirements = [
    "Valid passport with sufficient validity",
    "Proof of eligible family relationship with the sponsor",
    "Eligible sponsor with valid citizenship, residence, or immigration status",
    "Proof of sufficient financial support where required",
    "Valid marriage, birth, or family relationship certificates",
    "Proof of suitable accommodation where required",
    "Meet applicable health and character requirements",
    "Complete any additional immigration requirements for the destination country",
  ];

  const requiredDocuments = [
    "Valid passport",
    "Completed family visa application form",
    "Recent passport-sized photographs",
    "Marriage certificate where applicable",
    "Birth certificate or proof of family relationship",
    "Sponsor's passport or identity documents",
    "Sponsor's residence permit or immigration status documents",
    "Proof of financial support or income",
    "Proof of accommodation",
    "Evidence of genuine family relationship where required",
    "Medical certificate where required",
    "Police clearance certificate where required",
  ];

  const applicationSteps = [
    {
      step: "01",
      title: "Check Eligibility",
      desc: "Review the family visa requirements and confirm that you and your sponsor meet the eligibility criteria.",
    },
    {
      step: "02",
      title: "Confirm Family Relationship",
      desc: "Prepare official documents proving your relationship with your spouse, parent, child, or other eligible family member.",
    },
    {
      step: "03",
      title: "Prepare Documents",
      desc: "Collect passports, relationship certificates, financial evidence, accommodation proof, and other required documents.",
    },
    {
      step: "04",
      title: "Prepare Sponsor Documents",
      desc: "Collect the sponsor's identity, immigration status, income, employment, and residence documents where required.",
    },
    {
      step: "05",
      title: "Submit Application",
      desc: "Complete and submit the appropriate family visa application with all required supporting documents.",
    },
    {
      step: "06",
      title: "Attend Appointment",
      desc: "Complete biometrics, an interview, medical examination, or other required appointments when applicable.",
    },
    {
      step: "07",
      title: "Visa Processing",
      desc: "Immigration authorities review your family relationship, sponsor information, financial evidence, and application.",
    },
    {
      step: "08",
      title: "Receive Decision",
      desc: "Receive your family visa decision and prepare to join your family member or relocate together.",
    },
  ];

  const familyVisaFaqs = [
    {
      question: "What is a family visa and who is it for?",
      answer:
        "A family visa generally allows eligible family members to join or live with a spouse, parent, child, or other qualifying relative in another country. Eligibility depends on the destination country's immigration rules, the family relationship, and the sponsor's immigration status.",
    },
    {
      question: "Who can apply for a family visa?",
      answer:
        "Eligible applicants may include spouses, dependent children, parents, or other qualifying relatives depending on the immigration rules of the destination country. The exact eligible family members vary by visa category and country.",
    },
    {
      question: "What documents are required for a family visa?",
      answer:
        "Common documents include a valid passport, completed visa application form, photographs, marriage or birth certificates, proof of family relationship, sponsor identification and immigration documents, financial evidence, accommodation proof, and medical or police clearance documents where required.",
    },
    {
      question: "Do I need to prove my relationship for a family visa?",
      answer:
        "Yes. Most family visa applications require official evidence proving the relationship between the applicant and sponsor. Depending on the relationship, this may include marriage certificates, birth certificates, adoption documents, or other approved evidence.",
    },
    {
      question: "How long does a family visa take to process?",
      answer:
        "Family visa processing times vary depending on the destination country, visa category, application centre, document verification, background checks, and individual circumstances. Applicants should check the applicable processing guidance and allow sufficient time.",
    },
    {
      question: "Can Studyabroad help me with my family visa application?",
      answer:
        "Yes. Studyabroad can help you understand family visa requirements, organize supporting documents, review your application, and guide you through the different stages of the family visa process so your submission is complete and well organized.",
    },
  ];

  return (
    <VisaPageDesign
      hero={{
        badge: "Family Visa Assistance",
        title: "Family Visa Guidance for",
        highlight: "Family Reunification",
        description:
          "Planning to join your family abroad? Studyabroad helps you understand family visa requirements, prepare relationship and sponsor documents, and navigate the application process with confidence.",
        image: "/familyVisa.jpg",
      }}

      overview={{
        badgeText: "Family Visa Support",
        badgeIcon: Users,
        title: "Your Family Visa Journey,",
        highlightTitle: "Made Simple & Clear",
        description:
          "Planning to reunite with your family abroad? Our consultants guide you through eligibility, relationship documents, sponsor requirements, and the family visa application process.",
        features: [
          {
            icon: FileText,
            title: "Documents",
            desc: "Prepare relationship & sponsor documents",
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
        footerNote: "For family reunification",
        imageSrc: "/familyVisa.jpg",
        imageAlt: "Family visa consultation and family reunification",
        cardSubTitle: "Family Visa Guidance",
        cardMainTitle: "From application to family reunion",
        badgeStatNumber: "20+",
        badgeStatLabel: "Countries Covered",
      }}

      eligibility={{
        title: "Who Can Apply for a Family Visa?",
        description:
          "Family visa eligibility depends on your relationship with the sponsor, the sponsor's immigration status, financial requirements, and the immigration rules of your destination.",
        requirements: eligibilityRequirements,
      }}

      documents={{
        title: "Prepare Your Family Visa Documents",
        description:
          "Family visa requirements vary by destination and relationship type. Make sure your documents are complete, accurate, valid, and properly prepared.",
        items: requiredDocuments,
      }}

      process={{
        title: "Your Family Visa Journey",
        description:
          "From checking eligibility to receiving your visa, follow a clear and organized family visa application process.",
        steps: applicationSteps,
      }}

      faq={{
        faqsData: familyVisaFaqs,
        badgeText: "Family Visa FAQs",
        title: "Got Questions About",
        highlightTitle: "Family Visas?",
        description:
          "Find answers to common questions about family visa eligibility, sponsorship, relationship documents, financial requirements, processing times, and applications.",
        imageSrc: "/familyVisa.jpg",
      }}
    />
  );
}