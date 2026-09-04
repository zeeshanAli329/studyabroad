import LatestScholarshipsClient from "./page";
export const metadata = {
  title: "Latest Scholarships 2026 for Pakistani Students | StudyAbroad",
  description:
    "Newly announced scholarships for Pakistani students, updated weekly. Fresh deadlines for UK, USA, Germany, China & Turkey — apply before they close.",
  keywords: [
    "new scholarships Pakistan 2026",
    "latest scholarship announcements",
    "scholarships open now Pakistan",
    "upcoming scholarship deadlines",
  ],
  alternates: {
    canonical: "https://studyabroad-kohl-two.vercel.app/scholarships/latest-scholarships",
  },
  openGraph: {
    title: "Latest Scholarships 2026 for Pakistani Students | StudyAbroad",
    description:
      "Newly announced scholarships for Pakistani students, updated weekly. Fresh deadlines for UK, USA, Germany, China & Turkey — apply before they close.",
    url: "https://studyabroad-kohl-two.vercel.app/scholarships/latest-scholarships",
    siteName: "StudyAbroad",
    locale: "en_PK",
    type: "website",
  },
};

// This file stays a server component (so `metadata` works). All the
// interactive bits — fetching, search, countdowns — live in the client
// component below.
export default function LatestScholarshipsPage() {
  return <LatestScholarshipsClient />;
}