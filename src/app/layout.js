import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import GoogleAdSense from "@/components/ads/GoogleAdSense";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "Study Abroad",
    template: "%s",
  },

  description:
    "Explore study abroad opportunities, scholarships, universities, visas and international destinations with StudyAbroad.",

  icons: {
    icon: "/ch-logo1.png",
  },

  openGraph: {
    title: "Study Abroad",
    description:
      "Explore study abroad opportunities, scholarships, universities, visas and international destinations with StudyAbroad.",
    siteName: "Study Abroad",
    type: "website",
    images: [
      {
        url: "/ch-logo1.png",
        width: 512,
        height: 512,
        alt: "Study Abroad Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Study Abroad",
    description:
      "Explore study abroad opportunities, scholarships, universities, visas and international destinations with StudyAbroad.",
    images: ["/ch-logo1.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GoogleAdSense />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
