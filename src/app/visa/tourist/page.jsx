"use client";

import VisaPageDesign from "@/components/visa/VisaPageDesign";
import {
  Plane,
  FileText,
  MessageCircle,
  DollarSign,
} from "lucide-react";

export default function TouristVisaPage() {
  const eligibilityRequirements = [
    "Valid passport with sufficient validity for the planned trip",
    "Clear purpose of travel such as tourism, sightseeing, or visiting attractions",
    "Proof of sufficient funds to cover travel and living expenses",
    "Confirmed accommodation or suitable travel arrangements",
    "Proof of return or onward travel where required",
    "Evidence of strong ties to your home country where required",
    "Valid travel or health insurance where required",
    "Meet the destination country's immigration and entry requirements",
  ];

  const requiredDocuments = [
    "Valid passport",
    "Completed tourist visa application form",
    "Recent passport-sized photographs",
    "Proof of accommodation or hotel reservation",
    "Flight itinerary or return travel booking",
    "Recent bank statements or financial evidence",
    "Employment letter or proof of business where applicable",
    "Travel itinerary or planned activities",
    "Travel or health insurance where required",
    "Proof of family or social ties where applicable",
    "Previous travel or visa history where required",
    "Additional documents requested by the destination country",
  ];

  const applicationSteps = [
    {
      step: "01",
      title: "Check Eligibility",
      desc: "Review the tourist visa requirements and confirm that you meet the eligibility criteria for your destination.",
    },
    {
      step: "02",
      title: "Plan Your Trip",
      desc: "Decide your travel dates, destinations, accommodation, and planned tourism activities.",
    },
    {
      step: "03",
      title: "Prepare Documents",
      desc: "Collect your passport, financial evidence, accommodation details, travel itinerary, and other supporting documents.",
    },
    {
      step: "04",
      title: "Complete Application",
      desc: "Fill out the appropriate tourist visa application carefully and provide accurate travel information.",
    },
    {
      step: "05",
      title: "Submit Application",
      desc: "Submit your tourist visa application together with the required supporting documents and applicable fees.",
    },
    {
      step: "06",
      title: "Attend Appointment",
      desc: "Provide biometrics, attend an interview, or complete additional requirements when requested.",
    },
    {
      step: "07",
      title: "Visa Processing",
      desc: "The relevant immigration authorities review your application, documents, travel purpose, and financial evidence.",
    },
    {
      step: "08",
      title: "Receive Decision",
      desc: "Receive your tourist visa decision and prepare for your upcoming international trip.",
    },
  ];

  const touristVisaFaqs = [
    {
      question: "What is a tourist visa and who is it for?",
      answer:
        "A tourist visa is generally intended for people who want to visit another country temporarily for tourism, sightseeing, holidays, or other permitted short-term activities. The exact activities allowed depend on the immigration rules of the destination country.",
    },
    {
      question: "What documents are required for a tourist visa?",
      answer:
        "Common tourist visa documents include a valid passport, completed visa application form, recent photographs, proof of accommodation, flight itinerary or return travel details, financial evidence, travel insurance where required, and supporting documents showing the purpose of your visit.",
    },
    {
      question: "Do I need a hotel booking for a tourist visa?",
      answer:
        "Many tourist visa applications require proof of accommodation for the planned stay. This may include a hotel reservation, accommodation confirmation, or other acceptable evidence depending on the destination country's visa requirements.",
    },
    {
      question: "How much bank balance is required for a tourist visa?",
      answer:
        "There is no single bank balance requirement that applies to every tourist visa. Financial requirements depend on the destination country, length of stay, accommodation arrangements, travel expenses, and the applicant's circumstances. You may need to demonstrate that you can financially support yourself during the trip.",
    },
    {
      question: "How long does a tourist visa take to process?",
      answer:
        "Tourist visa processing times vary depending on the destination country, visa category, application centre, travel season, document verification, and whether additional checks are required. Applicants should apply well before their intended travel date.",
    },
    {
      question: "Can Studyabroad help me with my tourist visa application?",
      answer:
        "Yes. Studyabroad can help you understand tourist visa requirements, organize your supporting documents, review your application information, and guide you through the different stages of the tourist visa process.",
    },
  ];

  return (
    <VisaPageDesign
      hero={{
        badge: "Tourist Visa Assistance",
        title: "Tourist Visa Guidance for",
        highlight: "International Travel",
        description:
          "Planning a holiday or sightseeing trip abroad? Studyabroad helps you understand tourist visa requirements, prepare your travel documents, and navigate the application process with confidence.",
        image: "/touristVisa.jpg",
      }}

      overview={{
        badgeText: "Tourist Visa Support",
        badgeIcon: Plane,
        title: "Your Tourist Visa Journey,",
        highlightTitle: "Made Simple & Clear",
        description:
          "Planning your next international holiday? Our consultants guide you through tourist visa eligibility, travel documents, financial evidence, and the application process.",
        features: [
          {
            icon: FileText,
            title: "Documents",
            desc: "Prepare travel & supporting documents",
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
        footerNote: "For tourism & holidays",
        imageSrc: "/touristVisa.jpg",
        imageAlt: "Tourist visa consultation and international travel",
        cardSubTitle: "Tourist Visa Guidance",
        cardMainTitle: "From application to travel",
        badgeStatNumber: "20+",
        badgeStatLabel: "Countries Covered",
      }}

      eligibility={{
        title: "Who Can Apply for a Tourist Visa?",
        description:
          "Tourist visa eligibility depends on your travel purpose, financial situation, planned stay, travel history, and the immigration rules of your destination.",
        requirements: eligibilityRequirements,
      }}

      documents={{
        title: "Prepare Your Tourist Visa Documents",
        description:
          "Tourist visa requirements vary by destination. Make sure your travel, financial, accommodation, and personal documents are complete, accurate, and properly prepared.",
        items: requiredDocuments,
      }}

      process={{
        title: "Your Tourist Visa Journey",
        description:
          "From checking eligibility to receiving your visa, follow a clear and organized tourist visa application process.",
        steps: applicationSteps,
      }}

      faq={{
        faqsData: touristVisaFaqs,
        badgeText: "Tourist Visa FAQs",
        title: "Got Questions About",
        highlightTitle: "Tourist Visas?",
        description:
          "Find answers to common questions about tourist visa eligibility, required documents, bank statements, accommodation, processing times, and applications.",
        imageSrc: "/touristVisa.jpg",
      }}
    />
  );
}