export const FALLBACK_IMAGE = "/internatinalStudent.webp";

export function getImage(item) {
  return (
    item?.image ||
    item?.coverImage ||
    item?.featuredImage ||
    item?.thumbnail ||
    item?.photo ||
    FALLBACK_IMAGE
  );
}

export function cleanText(value, fallback = "") {
  if (!value) return fallback;

  return String(value)
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function getCountryName(item) {
  if (!item) return "International";

  return (
    item?.country?.name ||
    item?.countryName ||
    item?.destination ||
    item?.country ||
    item?.name ||
    "International"
  );
}

export function getScholarshipTitle(item) {
  return (
    item?.title ||
    item?.name ||
    item?.scholarshipName ||
    "Scholarship Opportunity"
  );
}

export function getScholarshipLevel(item) {
  return (
    item?.degreeLevel ||
    item?.level ||
    item?.studyLevel ||
    item?.degree ||
    "Multiple Levels"
  );
}

export function getScholarshipDeadline(item) {
  return (
    item?.deadline ||
    item?.applicationDeadline ||
    item?.closingDate ||
    item?.lastDate ||
    null
  );
}

export function getFundingType(item) {
  return (
    item?.fundingType ||
    item?.funding ||
    item?.coverage ||
    item?.awardType ||
    "Funding Available"
  );
}

export function formatDate(date) {
  if (!date) return "Check details";

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return String(date);
  }

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(parsed);
}

/*
 * Country data can already contain currency information.
 *
 * Supported examples:
 * currency: "EUR"
 * currencyCode: "EUR"
 * currencySymbol: "€"
 *
 * If the backend doesn't provide it, USD is used.
 */
export function getCurrencyCode(country) {
  return (
    country?.currencyCode ||
    country?.currency ||
    country?.currency_code ||
    "USD"
  );
}

export function getCurrencySymbol(country) {
  const code = getCurrencyCode(country);

  try {
    const parts = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: code,
      currencyDisplay: "narrowSymbol",
    }).formatToParts(0);

    return (
      parts.find((part) => part.type === "currency")?.value ||
      "$"
    );
  } catch {
    return "$";
  }
}

export function formatMoney(value, currency = "USD") {
  const number = Number(value);

  if (!Number.isFinite(number)) {
    return "$0";
  }

  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(number);
  } catch {
    return `$${Math.round(number).toLocaleString("en-US")}`;
  }
}

export function formatUSD(value) {
  const number = Number(value);

  if (!Number.isFinite(number)) {
    return "$0";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(number);
}

export function getLivingCost(country) {
  return (
    country?.livingCost ||
    country?.costOfLiving ||
    country?.monthlyLivingCost ||
    country?.estimatedLivingCost ||
    null
  );
}

export function getLanguage(country) {
  return (
    country?.language ||
    country?.languages ||
    country?.officialLanguage ||
    "Depends on programme"
  );
}

export function getTuition(country) {
  return (
    country?.tuition ||
    country?.tuitionFee ||
    country?.tuitionStatus ||
    country?.educationCost ||
    country?.description ||
    "Check the current university and programme requirements."
  );
}