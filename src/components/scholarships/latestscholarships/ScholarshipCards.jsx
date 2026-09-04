"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Award,
  CalendarDays,
  CheckCircle2,
  Clock3,
  ExternalLink,
  Globe2,
  GraduationCap,
  Search,
  Sparkles,
  WalletCards,
  X,
} from "lucide-react";

/* =========================================================
   HELPERS
========================================================= */

const formatDate = (date) => {
  if (!date) return "Not specified";

  try {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return "Not specified";
  }
};

const getDaysRemaining = (deadline) => {
  if (!deadline) return null;

  const deadlineDate = new Date(deadline);

  if (Number.isNaN(deadlineDate.getTime())) return null;

  const now = new Date();

  deadlineDate.setHours(23, 59, 59, 999);
  now.setHours(0, 0, 0, 0);

  return Math.ceil(
    (deadlineDate.getTime() - now.getTime()) /
      (1000 * 60 * 60 * 24)
  );
};

const getStatusClass = (status) => {
  const normalized = String(status || "").toLowerCase();

  if (
    normalized.includes("open") ||
    normalized.includes("active") ||
    normalized.includes("available")
  ) {
    return "border-[var(--success)]/20 bg-[var(--success)]/10 text-[var(--success)]";
  }

  if (
    normalized.includes("closed") ||
    normalized.includes("expired")
  ) {
    return "border-[var(--danger)]/20 bg-[var(--danger)]/10 text-[var(--danger)]";
  }

  return "border-[var(--warning)]/20 bg-[var(--warning)]/10 text-[var(--warning)]";
};

const getDeadlineClass = (days) => {
  if (days === null) {
    return "border-[var(--border)] bg-[var(--background-light)] text-[var(--text-secondary)]";
  }

  if (days < 0) {
    return "border-[var(--danger)]/20 bg-[var(--danger)]/5 text-[var(--danger)]";
  }

  if (days <= 7) {
    return "border-[var(--warning)]/20 bg-[var(--warning)]/5 text-[var(--warning)]";
  }

  return "border-[var(--primary-light)]/20 bg-[var(--primary)]/5 text-[var(--primary)]";
};

const getData = (scholarship) => ({
  title:
    scholarship?.title ||
    scholarship?.scholarshipName ||
    "Scholarship Opportunity",

  country:
    scholarship?.country ||
    scholarship?.countryName ||
    "International",

  level:
    scholarship?.level ||
    scholarship?.degreeLevel ||
    "Multiple Levels",

  fundingType:
    scholarship?.fundingType ||
    scholarship?.funding ||
    "Scholarship Funding",

  coverage:
    scholarship?.coverage ||
    scholarship?.coverageDetails ||
    "Funding details available.",

  eligibility:
    scholarship?.eligibility ||
    scholarship?.eligibilitySnapshot ||
    "Check the official requirements.",

  deadline:
    scholarship?.deadline ||
    scholarship?.deadlineDate ||
    null,

  addedAt:
    scholarship?.addedAt ||
    scholarship?.addedDate ||
    scholarship?.createdAt ||
    null,

  officialUrl:
    scholarship?.officialUrl ||
    scholarship?.applyUrl ||
    scholarship?.url ||
    null,

  status:
    scholarship?.status ||
    "Open",

  imageUrl:
    scholarship?.imageUrl ||
    scholarship?.image ||
    scholarship?.banner ||
    scholarship?.logo ||
    null,

  featured: Boolean(
    scholarship?.featured ||
      scholarship?.isFeatured
  ),
});

/* =========================================================
   SKELETON
========================================================= */

function ScholarshipCardSkeleton() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[var(--primary-light)] bg-[var(--surface)] shadow-[0_16px_45px_rgba(11,31,58,0.12)]">
      <div className="flex w-full flex-col lg:flex-row">
        <div className="relative h-52 w-full shrink-0 animate-pulse bg-[var(--primary)]/5 lg:h-[310px] lg:w-[31%]" />

        <div className="flex-1 p-5 sm:p-6">
          <div className="mb-3 flex gap-2">
            <div className="h-6 w-24 animate-pulse rounded-full bg-[var(--primary)]/10" />
            <div className="h-6 w-28 animate-pulse rounded-full bg-[var(--primary)]/10" />
          </div>

          <div className="mb-3 h-7 w-3/4 animate-pulse rounded-lg bg-[var(--primary)]/10" />

          <div className="mb-5 h-4 w-1/2 animate-pulse rounded-lg bg-[var(--primary)]/10" />

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="h-24 animate-pulse rounded-xl bg-[var(--primary)]/5" />
            <div className="h-24 animate-pulse rounded-xl bg-[var(--primary)]/5" />
            <div className="h-24 animate-pulse rounded-xl bg-[var(--primary)]/5" />
          </div>

          <div className="mt-4 h-14 animate-pulse rounded-xl bg-[var(--primary)]/5" />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   IMAGE
========================================================= */

function ScholarshipImage({
  src,
  title,
}) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--primary)]/10 via-[var(--surface)] to-[var(--primary-light)]/10">
        <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-[var(--primary)]/10 blur-3xl" />

        <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-[var(--accent)]/15 blur-3xl" />

        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-[var(--primary)]/10 bg-[var(--surface)] shadow-xl">
          <Award
            size={38}
            strokeWidth={1.5}
            className="text-[var(--primary)]"
          />
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={title}
      className="absolute inset-0 h-full w-full object-cover"
      onError={() => setImageError(true)}
    />
  );
}

/* =========================================================
   SCHOLARSHIP CARD
========================================================= */

function ScholarshipCard({ scholarship }) {
  const data = getData(scholarship);

  const daysRemaining = getDaysRemaining(
    data.deadline
  );

  const isExpired =
    daysRemaining !== null && daysRemaining < 0;

  const isClosingSoon =
    daysRemaining !== null &&
    daysRemaining >= 0 &&
    daysRemaining <= 7;

  const detailsHref = scholarship?.slug
    ? `/scholarships/${scholarship.slug}`
    : scholarship?.id
      ? `/scholarships/${scholarship.id}`
      : "/contact";

  return (
    <article className="w-full overflow-hidden rounded-2xl border border-[var(--primary-light)] bg-[var(--surface)] shadow-[0_18px_50px_rgba(11,31,58,0.14)]">
      <div className="flex w-full flex-col lg:flex-row">

        {/* =================================================
            IMAGE
        ================================================= */}

        <div className="relative h-52 w-full shrink-0 overflow-hidden bg-[var(--primary)]/5 sm:h-60 lg:h-auto lg:min-h-[310px] lg:w-[31%]">
          <ScholarshipImage
            src={data.imageUrl}
            title={data.title}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/70 via-[var(--primary-dark)]/10 to-transparent" />

          {data.featured && (
            <div className="absolute left-4 top-4">
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-[var(--primary-dark)]/85 px-3 py-1.5 text-[11px] font-bold text-white shadow-lg backdrop-blur-md">
                <Sparkles
                  size={13}
                  className="text-[var(--accent)]"
                />
                Featured Opportunity
              </div>
            </div>
          )}

          {data.addedAt && (
            <div className="absolute right-4 top-4">
              <div className="rounded-full border border-white/20 bg-white/90 px-3 py-1.5 text-[10px] font-bold text-[var(--primary-dark)] shadow-md backdrop-blur-md">
                New
              </div>
            </div>
          )}

          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Globe2
                size={15}
                className="shrink-0 text-[var(--accent)]"
              />

              <span className="truncate">
                {data.country}
              </span>
            </div>
          </div>
        </div>

        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5 lg:p-6">

          {/* BADGES */}

          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold ${getStatusClass(
                data.status
              )}`}
            >
              <CheckCircle2 size={12} />
              {data.status}
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--primary)]/10 bg-[var(--primary)]/5 px-2.5 py-1 text-[11px] font-semibold text-[var(--primary)]">
              <GraduationCap size={12} />
              {data.level}
            </span>
          </div>

          {/* TITLE */}

          <h2 className="max-w-3xl text-xl font-extrabold leading-tight tracking-tight text-[var(--text-primary)] sm:text-2xl">
            {data.title}
          </h2>

          {/* META */}

          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[var(--text-secondary)] sm:text-sm">
            <div className="flex items-center gap-1.5">
              <Globe2
                size={14}
                className="text-[var(--primary)]"
              />

              <span>
                {data.country}
              </span>
            </div>

            {data.addedAt && (
              <div className="flex items-center gap-1.5">
                <CalendarDays
                  size={14}
                  className="text-[var(--primary)]"
                />

                <span>
                  Added {formatDate(data.addedAt)}
                </span>
              </div>
            )}
          </div>

          <div className="my-4 h-px bg-[var(--border)]" />

          {/* DETAILS */}

          <div className="grid gap-2.5 sm:grid-cols-3">

            {/* FUNDING */}

            <div className="rounded-xl border border-[var(--primary-light)] bg-[var(--primary)]/5 p-3.5">
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--primary)]/10">
                <WalletCards
                  size={16}
                  className="text-[var(--primary)]"
                />
              </div>

              <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                Funding
              </p>

              <p className="line-clamp-2 text-xs font-bold leading-5 text-[var(--text-primary)] sm:text-sm">
                {data.fundingType}
              </p>
            </div>

            {/* COVERAGE */}

            <div className="rounded-xl border border-[var(--primary-light)] bg-[var(--accent)]/10 p-3.5">
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent)]/15">
                <Award
                  size={16}
                  className="text-[var(--btn)]"
                />
              </div>

              <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                Coverage
              </p>

              <p className="line-clamp-2 text-xs font-bold leading-5 text-[var(--text-primary)] sm:text-sm">
                {data.coverage}
              </p>
            </div>

            {/* ELIGIBILITY */}

            <div className="rounded-xl border border-[var(--primary-light)] bg-[var(--success)]/5 p-3.5">
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--success)]/10">
                <CheckCircle2
                  size={16}
                  className="text-[var(--success)]"
                />
              </div>

              <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                Eligibility
              </p>

              <p className="line-clamp-2 text-xs font-bold leading-5 text-[var(--text-primary)] sm:text-sm">
                {data.eligibility}
              </p>
            </div>
          </div>

          {/* DEADLINE + BUTTON */}

          <div className="mt-4 flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">

            {/* DEADLINE */}

            <div
              className={`flex min-w-0 flex-1 items-center gap-2.5 rounded-xl border px-3.5 py-2.5 ${getDeadlineClass(
                daysRemaining
              )}`}
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/70">
                <Clock3 size={16} />
              </div>

              <div className="min-w-0">
                <p className="text-[9px] font-bold uppercase tracking-wider opacity-70">
                  Application Deadline
                </p>

                <div className="mt-0.5 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-extrabold sm:text-sm">
                    {formatDate(data.deadline)}
                  </span>

                  {daysRemaining !== null && (
                    <span className="text-[11px] font-semibold">
                      {isExpired
                        ? "Deadline passed"
                        : isClosingSoon
                          ? `${daysRemaining} ${
                              daysRemaining === 1
                                ? "day"
                                : "days"
                            } left`
                          : `${daysRemaining} days left`}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* BUTTON */}

            <div className="w-full shrink-0 xl:w-auto">
              {data.officialUrl ? (
                <a
                  href={data.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--btn)] px-5 py-3 text-sm font-bold text-[var(--text-light)] shadow-[0_8px_20px_rgba(201,139,29,0.22)] focus:outline-none focus:ring-2 focus:ring-[var(--btn)]/40 focus:ring-offset-2 sm:w-auto"
                >
                  View Details
                  <ExternalLink size={15} />
                </a>
              ) : (
                <Link
                  href={detailsHref}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--btn)] px-5 py-3 text-sm font-bold text-[var(--text-light)] shadow-[0_8px_20px_rgba(201,139,29,0.22)] focus:outline-none focus:ring-2 focus:ring-[var(--btn)]/40 focus:ring-offset-2 sm:w-auto"
                >
                  View Details
                  <ExternalLink size={15} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   MAIN SCHOLARSHIP CARDS
========================================================= */

export default function ScholarshipCards({
  scholarships = [],
  loading = false,
}) {
  const [search, setSearch] = useState("");

  const filteredScholarships = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return scholarships;

    return scholarships.filter((scholarship) => {
      const data = getData(scholarship);

      const searchableText = [
        data.title,
        data.country,
        data.level,
        data.fundingType,
        data.coverage,
        data.eligibility,
        data.status,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(query);
    });
  }, [scholarships, search]);

  return (
    <section className="w-full bg-[var(--background-light)] py-6 sm:py-8 lg:py-10">
      <div className="mx-auto max-w-[1320px] px-0 lg:px-8">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mb-5 flex w-full flex-col gap-4 lg:mb-6 lg:flex-row lg:items-end lg:justify-between">

          <div className="w-full max-w-2xl px-3 lg:px-0">

            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[var(--primary-light)] bg-[var(--primary)]/5 px-3 py-1.5 text-[11px] font-bold text-[var(--primary)]">
              <Sparkles size={13} />
              Scholarship Opportunities
            </div>

            <h1 className="text-2xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-3xl lg:text-4xl">
              Find the right scholarship for you
            </h1>

            <p className="mt-2 max-w-xl text-xs leading-5 text-[var(--text-secondary)] sm:text-sm">
              Explore international scholarship opportunities
              and discover funding options for your study abroad
              journey.
            </p>
          </div>

          {/* SEARCH */}

          <div className="w-full lg:max-w-sm px-3 lg:px-0">
            <label
              htmlFor="scholarship-search"
              className="sr-only"
            >
              Search scholarships
            </label>

            <div className="relative">
              <Search
                size={17}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]"
              />

              <input
                id="scholarship-search"
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search scholarships..."
                className="h-11 w-full rounded-xl border border-[var(--primary-light)] bg-[var(--surface)] pl-10 pr-10 text-sm font-medium text-[var(--text-primary)] outline-none placeholder:text-[var(--text-secondary)] focus:border-[var(--primary-light)] focus:ring-4 focus:ring-[var(--primary)]/10"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg bg-[var(--primary)]/5 text-[var(--text-secondary)]"
                >
                  <X size={15} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* =================================================
            COUNT
        ================================================= */}

        {!loading && scholarships.length > 0 && (
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs font-medium text-[var(--text-secondary)] sm:text-sm">
              Showing{" "}
              <span className="font-bold text-[var(--text-primary)]">
                {filteredScholarships.length}
              </span>{" "}
              {filteredScholarships.length === 1
                ? "scholarship"
                : "scholarships"}
            </p>

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="text-xs font-bold text-[var(--primary)] sm:text-sm"
              >
                Clear search
              </button>
            )}
          </div>
        )}

        {/* =================================================
            LOADING
        ================================================= */}

        {loading ? (
          <div className="w-full space-y-4">
            <ScholarshipCardSkeleton />
            <ScholarshipCardSkeleton />
            <ScholarshipCardSkeleton />
          </div>
        ) : filteredScholarships.length > 0 ? (
          <div className="w-full space-y-4">
            {filteredScholarships.map(
              (scholarship, index) => (
                <ScholarshipCard
                  key={
                    scholarship?.id ||
                    scholarship?.slug ||
                    `${scholarship?.title}-${index}`
                  }
                  scholarship={scholarship}
                />
              )
            )}
          </div>
        ) : (
          <div className="w-full rounded-2xl border border-[var(--primary-light)] bg-[var(--surface)] px-5 py-10 text-center shadow-[0_14px_40px_rgba(11,31,58,0.10)] sm:px-6 sm:py-12">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary)]/10">
              <Search
                size={25}
                className="text-[var(--primary)]"
              />
            </div>

            <h3 className="mt-4 text-lg font-extrabold text-[var(--text-primary)]">
              No scholarships found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-xs leading-5 text-[var(--text-secondary)] sm:text-sm">
              {search
                ? `We couldn't find any scholarships matching "${search}". Try a different search term.`
                : "There are currently no scholarship opportunities available."}
            </p>

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--btn)] px-5 py-2.5 text-sm font-bold text-[var(--text-light)]"
              >
                <X size={15} />
                Clear Search
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}