function formatCountryName(slug) {
  const countryNames = {
    usa: "USA",
    uk: "United Kingdom",
    uae: "United Arab Emirates",
    turkey: "Turkey",
    china: "China",
    germany: "Germany",
    hungary: "Hungary",
    canada: "Canada",
    australia: "Australia",
    france: "France",
    italy: "Italy",
    spain: "Spain",
    japan: "Japan",
    singapore: "Singapore",
    malaysia: "Malaysia",
    russia: "Russia",
    ireland: "Ireland",
    sweden: "Sweden",
    switzerland: "Switzerland",
    netherlands: "Netherlands",
    "new-zealand": "New Zealand",
    "south-korea": "South Korea",
    "united-kingdom": "United Kingdom",
    "united-states": "United States",
  };

  if (countryNames[slug]) {
    return countryNames[slug];
  }

  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const countryName = formatCountryName(slug);

  const title = `Study in ${countryName} for Pakistani Students | Studyabroad.com.pk`;

  const description = `Complete guide to studying in ${countryName} for Pakistani students. Explore universities, scholarships, admission requirements, tuition fees, student visa guidance and study opportunities.`;

  const canonicalUrl = `https://studyabroad.com.pk/countries/${slug}`;

  return {
    title,

    description,

    keywords: [
      `study in ${countryName}`,
      `study in ${countryName} for Pakistani students`,
      `${countryName} universities for Pakistani students`,
      `${countryName} scholarships for Pakistani students`,
      `${countryName} student visa`,
      `${countryName} admission requirements`,
      `${countryName} tuition fees`,
      `study abroad ${countryName}`,
      "study abroad Pakistan",
      "Pakistani students abroad",
      "Studyabroad.com.pk",
    ],

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title,

      description,

      url: canonicalUrl,

      siteName: "Studyabroad.com.pk",

      type: "website",
    },

    twitter: {
      card: "summary_large_image",

      title,

      description,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function CountryDetailLayout({ children }) {
  return children;
}