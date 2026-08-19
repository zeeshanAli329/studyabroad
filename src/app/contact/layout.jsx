import { Metadata } from "next";

export const metadata = {
  title: "Contact Us | Free Study Abroad Consultation for Pakistani Students",

  description:
    "Get free guidance on scholarships, free education, and student visas abroad. Contact our expert consultants for personalized support.",

  keywords: [
    "contact study abroad consultants Pakistan",
    "free study abroad consultation Pakistan",
    "study abroad guidance for Pakistani students",
    "study abroad consultants Pakistan",
    "scholarship consultation Pakistan",
    "student visa consultation Pakistan",
    "free education consultation Pakistan",
    "study abroad counseling Pakistan",
  ],

  alternates: {
    canonical: "https://studyabroad.com.pk/contact",
  },

  openGraph: {
    title:
      "Contact Us | Free Study Abroad Consultation for Pakistani Students",

    description:
      "Get free guidance on scholarships, free education, and student visas abroad. Contact our expert consultants for personalized support.",

    url: "https://studyabroad.com.pk/contact",

    siteName: "Studyabroad.com.pk",

    type: "website",

    locale: "en_PK",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Contact Us | Free Study Abroad Consultation for Pakistani Students",

    description:
      "Get free guidance on scholarships, free education, and student visas abroad. Contact our expert consultants for personalized support.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function ContactLayout({ children }) {
  return children;
}