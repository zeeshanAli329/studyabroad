"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { api } from "@/lib/api";

const FALLBACK_COUNTRIES = [
  "Australia",
  "Austria",
  "Belgium",
  "Canada",
  "China",
  "Czech Republic",
  "Denmark",
  "Finland",
  "France",
  "Germany",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Japan",
  "Malaysia",
  "Netherlands",
  "New Zealand",
  "Norway",
  "Poland",
  "Portugal",
  "South Korea",
  "Spain",
  "Sweden",
  "Switzerland",
  "Türkiye",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
];

const CURRENCY_META = {
  USD: {
    code: "USD",
    symbol: "$",
    name: "US Dollar",
    rateToUSD: 1,
  },

  EUR: {
    code: "EUR",
    symbol: "€",
    name: "Euro",
    rateToUSD: 1.16,
  },

  GBP: {
    code: "GBP",
    symbol: "£",
    name: "British Pound",
    rateToUSD: 1.34,
  },

  CAD: {
    code: "CAD",
    symbol: "C$",
    name: "Canadian Dollar",
    rateToUSD: 0.73,
  },

  AUD: {
    code: "AUD",
    symbol: "A$",
    name: "Australian Dollar",
    rateToUSD: 0.65,
  },

  NZD: {
    code: "NZD",
    symbol: "NZ$",
    name: "New Zealand Dollar",
    rateToUSD: 0.59,
  },

  CHF: {
    code: "CHF",
    symbol: "CHF",
    name: "Swiss Franc",
    rateToUSD: 1.27,
  },

  SEK: {
    code: "SEK",
    symbol: "kr",
    name: "Swedish Krona",
    rateToUSD: 0.108,
  },

  NOK: {
    code: "NOK",
    symbol: "kr",
    name: "Norwegian Krone",
    rateToUSD: 0.101,
  },

  DKK: {
    code: "DKK",
    symbol: "kr",
    name: "Danish Krone",
    rateToUSD: 0.155,
  },

  ISK: {
    code: "ISK",
    symbol: "kr",
    name: "Icelandic Króna",
    rateToUSD: 0.0074,
  },

  PLN: {
    code: "PLN",
    symbol: "zł",
    name: "Polish Zloty",
    rateToUSD: 0.275,
  },

  HUF: {
    code: "HUF",
    symbol: "Ft",
    name: "Hungarian Forint",
    rateToUSD: 0.0028,
  },

  CNY: {
    code: "CNY",
    symbol: "¥",
    name: "Chinese Yuan",
    rateToUSD: 0.139,
  },

  JPY: {
    code: "JPY",
    symbol: "¥",
    name: "Japanese Yen",
    rateToUSD: 0.0067,
  },

  KRW: {
    code: "KRW",
    symbol: "₩",
    name: "South Korean Won",
    rateToUSD: 0.00068,
  },

  MYR: {
    code: "MYR",
    symbol: "RM",
    name: "Malaysian Ringgit",
    rateToUSD: 0.238,
  },

  AED: {
    code: "AED",
    symbol: "د.إ",
    name: "UAE Dirham",
    rateToUSD: 0.2723,
  },

  TRY: {
    code: "TRY",
    symbol: "₺",
    name: "Turkish Lira",
    rateToUSD: 0.0248,
  },

  CZK: {
    code: "CZK",
    symbol: "Kč",
    name: "Czech Koruna",
    rateToUSD: 0.0478,
  },
};

const COUNTRY_CURRENCY = {
  Australia: "AUD",
  Austria: "EUR",
  Belgium: "EUR",
  Canada: "CAD",
  China: "CNY",
  "Czech Republic": "CZK",
  Denmark: "DKK",
  Finland: "EUR",
  France: "EUR",
  Germany: "EUR",
  Hungary: "HUF",
  Iceland: "ISK",
  Ireland: "EUR",
  Italy: "EUR",
  Japan: "JPY",
  Malaysia: "MYR",
  Netherlands: "EUR",
  "New Zealand": "NZD",
  Norway: "NOK",
  Poland: "PLN",
  Portugal: "EUR",
  "South Korea": "KRW",
  Spain: "EUR",
  Sweden: "SEK",
  Switzerland: "CHF",
  Türkiye: "TRY",
  Turkey: "TRY",
  "United Arab Emirates": "AED",
  "United Kingdom": "GBP",
  "United States": "USD",
};

const COUNTRY_ALIASES = {
  "Czechia": "Czech Republic",
  "Türkiye": "Türkiye",
  Turkey: "Türkiye",
  UK: "United Kingdom",
  USA: "United States",
  "United States of America": "United States",
  UAE: "United Arab Emirates",
};

function getCountryName(country) {
  if (!country) return "";

  if (typeof country === "string") {
    return country;
  }

  return (
    country.name ||
    country.countryName ||
    country.title ||
    country.label ||
    ""
  );
}

function getCountryImage(country) {
  if (!country || typeof country !== "object") return null;

  return (
    country.image ||
    country.coverImage ||
    country.banner ||
    country.thumbnail ||
    country.flagImage ||
    null
  );
}

function getCountryCurrency(countryName, countryObject) {
  const directCurrency =
    countryObject?.currency ||
    countryObject?.currencyCode ||
    countryObject?.currency_code;

  if (directCurrency) {
    const normalized = String(directCurrency).toUpperCase();

    if (CURRENCY_META[normalized]) {
      return normalized;
    }
  }

  const normalizedName =
    COUNTRY_ALIASES[countryName] || countryName;

  return COUNTRY_CURRENCY[normalizedName] || "USD";
}

function normalizeCountries(payload) {
  let raw = [];

  if (Array.isArray(payload)) {
    raw = payload;
  } else if (payload?.countries && Array.isArray(payload.countries)) {
    raw = payload.countries;
  } else if (payload?.data && Array.isArray(payload.data)) {
    raw = payload.data;
  } else if (payload?.results && Array.isArray(payload.results)) {
    raw = payload.results;
  }

  const unique = new Map();

  raw.forEach((country) => {
    const name = getCountryName(country);

    if (!name) return;

    const key = name.toLowerCase().trim();

    if (!unique.has(key)) {
      unique.set(key, {
        ...((typeof country === "object" && country) || {}),
        name,
      });
    }
  });

  return Array.from(unique.values()).sort((a, b) =>
    a.name.localeCompare(b.name)
  );
}

function formatUSD(value) {
  const amount = Number(value) || 0;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatLocal(value, currencyCode) {
  const currency = CURRENCY_META[currencyCode] || CURRENCY_META.USD;

  return `${currency.symbol}${new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(Number(value) || 0)}`;
}

function NumberInput({
  label,
  value,
  onChange,
  placeholder,
  icon,
  help,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">
        {label}
      </label>

      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]">
          {icon}
        </span>

        <input
          type="number"
          min="0"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm font-medium text-[var(--text-primary)] outline-none transition-all placeholder:text-slate-400 focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/10"
        />
      </div>

      {help && (
        <p className="mt-1.5 text-xs text-[var(--text-secondary)]">
          {help}
        </p>
      )}
    </div>
  );
}

export default function FundingCalculator() {
  const [countries, setCountries] = useState([]);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [countryError, setCountryError] = useState("");

  const [selectedCountry, setSelectedCountry] = useState("");
  const [search, setSearch] = useState("");
  const [countryOpen, setCountryOpen] = useState(false);

  const [tuition, setTuition] = useState("12000");
  const [living, setLiving] = useState("8000");
  const [accommodation, setAccommodation] = useState("5000");
  const [travel, setTravel] = useState("1200");
  const [insurance, setInsurance] = useState("600");
  const [other, setOther] = useState("800");

  const dropdownRef = useRef(null);

  useEffect(() => {
    let mounted = true;

    const loadCountries = async () => {
      try {
        setLoadingCountries(true);
        setCountryError("");

        const response = await api.getCountries();

        if (!mounted) return;

        const normalized = normalizeCountries(response);

        if (normalized.length > 0) {
          setCountries(normalized);

          if (!selectedCountry) {
            setSelectedCountry(normalized[0].name);
          }
        } else {
          /*
           * Only used when the API returns no usable country records.
           * The actual country list normally comes from your backend.
           */
          const fallback = FALLBACK_COUNTRIES.map((name) => ({
            name,
          }));

          setCountries(fallback);

          if (!selectedCountry) {
            setSelectedCountry(fallback[0]?.name || "");
          }
        }
      } catch (error) {
        console.error("Funding calculator country error:", error);

        if (!mounted) return;

        setCountryError(
          "Countries could not be loaded from the server. Please try again."
        );

        const fallback = FALLBACK_COUNTRIES.map((name) => ({
          name,
        }));

        setCountries(fallback);

        if (!selectedCountry) {
          setSelectedCountry(fallback[0]?.name || "");
        }
      } finally {
        if (mounted) {
          setLoadingCountries(false);
        }
      }
    };

    loadCountries();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setCountryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedCountryObject = useMemo(() => {
    return (
      countries.find(
        (country) =>
          country.name.toLowerCase() ===
          selectedCountry.toLowerCase()
      ) || null
    );
  }, [countries, selectedCountry]);

  const currencyCode = useMemo(() => {
    return getCountryCurrency(
      selectedCountry,
      selectedCountryObject
    );
  }, [selectedCountry, selectedCountryObject]);

  const currency =
    CURRENCY_META[currencyCode] || CURRENCY_META.USD;

  const filteredCountries = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return countries;
    }

    return countries.filter((country) =>
      country.name.toLowerCase().includes(query)
    );
  }, [countries, search]);

  const totals = useMemo(() => {
    const tuitionValue = Number(tuition) || 0;
    const livingValue = Number(living) || 0;
    const accommodationValue = Number(accommodation) || 0;
    const travelValue = Number(travel) || 0;
    const insuranceValue = Number(insurance) || 0;
    const otherValue = Number(other) || 0;

    const totalLocal =
      tuitionValue +
      livingValue +
      accommodationValue +
      travelValue +
      insuranceValue +
      otherValue;

    const totalUSD = totalLocal * currency.rateToUSD;

    const tuitionUSD = tuitionValue * currency.rateToUSD;
    const livingUSD = livingValue * currency.rateToUSD;
    const accommodationUSD =
      accommodationValue * currency.rateToUSD;
    const travelUSD = travelValue * currency.rateToUSD;
    const insuranceUSD = insuranceValue * currency.rateToUSD;
    const otherUSD = otherValue * currency.rateToUSD;

    const monthlyLocal =
      livingValue + accommodationValue;

    const monthlyUSD =
      monthlyLocal * currency.rateToUSD;

    return {
      tuitionValue,
      livingValue,
      accommodationValue,
      travelValue,
      insuranceValue,
      otherValue,
      totalLocal,
      totalUSD,
      tuitionUSD,
      livingUSD,
      accommodationUSD,
      travelUSD,
      insuranceUSD,
      otherUSD,
      monthlyLocal,
      monthlyUSD,
    };
  }, [
    tuition,
    living,
    accommodation,
    travel,
    insurance,
    other,
    currency,
  ]);

  const selectCountry = (country) => {
    setSelectedCountry(country.name);
    setSearch("");
    setCountryOpen(false);
  };

  const clearCalculator = () => {
    setTuition("");
    setLiving("");
    setAccommodation("");
    setTravel("");
    setInsurance("");
    setOther("");
  };

  const retryCountries = async () => {
    try {
      setLoadingCountries(true);
      setCountryError("");

      const response = await api.getCountries();
      const normalized = normalizeCountries(response);

      if (normalized.length) {
        setCountries(normalized);
        setSelectedCountry(
          selectedCountry || normalized[0].name
        );
      } else {
        throw new Error("No countries returned");
      }
    } catch (error) {
      console.error(error);
      setCountryError("Unable to load countries.");
    } finally {
      setLoadingCountries(false);
    }
  };

  return (
    <section className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--primary)]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative">
        {/* Header */}
        <div className="border-b border-slate-100 px-6 py-7 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[var(--primary)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                Study Cost Planner
              </div>

              <h2 className="font-serif text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
                Estimate Your Study Abroad Funding
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">
                Select your destination and enter your expected costs.
                Your estimate is automatically converted and compared
                in US dollars.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg shadow-sm">
                $
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Main comparison
                </p>
                <p className="text-sm font-bold text-slate-800">
                  US Dollars (USD)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT */}
          <div className="border-b border-slate-100 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
            <div className="mb-7">
              <h3 className="text-base font-bold text-[var(--text-primary)]">
                Destination & expenses
              </h3>

              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                Costs are entered in the selected country's currency
                and automatically converted to USD.
              </p>
            </div>

            {/* Country selector */}
            <div ref={dropdownRef} className="relative mb-7">
              <label className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">
                Study destination
              </label>

              <button
                type="button"
                onClick={() => setCountryOpen((value) => !value)}
                className={`flex h-14 w-full items-center justify-between rounded-xl border bg-white px-4 text-left transition-all ${
                  countryOpen
                    ? "border-[var(--primary)] ring-4 ring-[var(--primary)]/10"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex min-w-0 items-center gap-3">
                  {getCountryImage(selectedCountryObject) ? (
                    <img
                      src={getCountryImage(selectedCountryObject)}
                      alt=""
                      className="h-8 w-11 rounded-md object-cover"
                    />
                  ) : (
                    <div className="flex h-8 w-11 items-center justify-center rounded-md bg-slate-100 text-sm">
                      🌍
                    </div>
                  )}

                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-slate-800">
                      {selectedCountry || "Select a country"}
                    </p>

                    <p className="text-xs text-slate-400">
                      {currency.code} · {currency.name}
                    </p>
                  </div>
                </div>

                <svg
                  className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${
                    countryOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {countryOpen && (
                <div className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.16)]">
                  <div className="border-b border-slate-100 p-3">
                    <div className="relative">
                      <svg
                        className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <circle
                          cx="8.5"
                          cy="8.5"
                          r="5.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M13 13L17 17"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>

                      <input
                        autoFocus
                        value={search}
                        onChange={(e) =>
                          setSearch(e.target.value)
                        }
                        placeholder="Search country..."
                        className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm outline-none transition focus:border-[var(--primary)] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="max-h-72 overflow-y-auto p-2">
                    {loadingCountries ? (
                      <div className="px-4 py-8 text-center text-sm text-slate-400">
                        Loading countries...
                      </div>
                    ) : filteredCountries.length === 0 ? (
                      <div className="px-4 py-8 text-center text-sm text-slate-400">
                        No country found.
                      </div>
                    ) : (
                      filteredCountries.map((country) => {
                        const code = getCountryCurrency(
                          country.name,
                          country
                        );

                        const isSelected =
                          country.name.toLowerCase() ===
                          selectedCountry.toLowerCase();

                        return (
                          <button
                            key={`${country.name}-${country.id || code}`}
                            type="button"
                            onClick={() =>
                              selectCountry(country)
                            }
                            className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition ${
                              isSelected
                                ? "bg-[var(--primary)]/8"
                                : "hover:bg-slate-50"
                            }`}
                          >
                            {getCountryImage(country) ? (
                              <img
                                src={getCountryImage(country)}
                                alt=""
                                className="h-9 w-12 rounded-md object-cover"
                              />
                            ) : (
                              <div className="flex h-9 w-12 items-center justify-center rounded-md bg-slate-100 text-sm">
                                🌍
                              </div>
                            )}

                            <div className="min-w-0 flex-1">
                              <p
                                className={`truncate text-sm font-semibold ${
                                  isSelected
                                    ? "text-[var(--primary)]"
                                    : "text-slate-700"
                                }`}
                              >
                                {country.name}
                              </p>

                              <p className="text-xs text-slate-400">
                                {CURRENCY_META[code]?.name || code}
                              </p>
                            </div>

                            {isSelected && (
                              <svg
                                className="h-5 w-5 text-[var(--primary)]"
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <path
                                  d="M5 10.5L8.2 13.5L15 6.5"
                                  stroke="currentColor"
                                  strokeWidth="1.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </button>
                        );
                      })
                    )}
                  </div>
                </div>
              )}

              {countryError && (
                <div className="mt-2 flex items-center justify-between gap-3 text-xs text-amber-600">
                  <span>{countryError}</span>

                  <button
                    type="button"
                    onClick={retryCountries}
                    className="font-bold underline underline-offset-2"
                  >
                    Retry
                  </button>
                </div>
              )}
            </div>

            {/* Currency indicator */}
            <div className="mb-7 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Selected currency
                </p>

                <p className="mt-0.5 text-sm font-bold text-slate-800">
                  {currency.code} · {currency.name}
                </p>
              </div>

              <div className="flex h-10 min-w-10 items-center justify-center rounded-lg bg-white px-3 text-lg font-bold text-[var(--primary)] shadow-sm">
                {currency.symbol}
              </div>
            </div>

            {/* Expense grid */}
            <div className="grid gap-5 sm:grid-cols-2">
              <NumberInput
                label="Annual tuition"
                value={tuition}
                onChange={setTuition}
                placeholder="12000"
                icon={currency.symbol}
                help="Expected tuition for one academic year."
              />

              <NumberInput
                label="Living expenses"
                value={living}
                onChange={setLiving}
                placeholder="8000"
                icon={currency.symbol}
                help="Food, transport and daily expenses."
              />

              <NumberInput
                label="Accommodation"
                value={accommodation}
                onChange={setAccommodation}
                placeholder="5000"
                icon={currency.symbol}
                help="Estimated yearly accommodation."
              />

              <NumberInput
                label="Travel"
                value={travel}
                onChange={setTravel}
                placeholder="1200"
                icon={currency.symbol}
                help="Flights and local travel."
              />

              <NumberInput
                label="Health insurance"
                value={insurance}
                onChange={setInsurance}
                placeholder="600"
                icon={currency.symbol}
                help="Estimated annual insurance cost."
              />

              <NumberInput
                label="Other expenses"
                value={other}
                onChange={setOther}
                placeholder="800"
                icon={currency.symbol}
                help="Books, applications and other costs."
              />
            </div>

            <button
              type="button"
              onClick={clearCalculator}
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-[var(--primary)]"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5 5L15 15M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              Clear calculator
            </button>
          </div>

          {/* RIGHT */}
          <div className="bg-slate-50/70 p-6 sm:p-8 lg:p-10">
            <div className="mb-7">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--primary)]">
                Your estimate
              </p>

              <h3 className="mt-2 font-serif text-2xl font-semibold text-[var(--text-primary)]">
                Annual study budget
              </h3>
            </div>

            {/* Main USD result */}
            <div className="relative overflow-hidden rounded-2xl bg-[var(--secondary)] p-6 text-white shadow-xl">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-white/10" />
              <div className="absolute -bottom-14 -left-10 h-32 w-32 rounded-full border border-white/10" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                      Total estimated cost
                    </p>

                    <p className="mt-3 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                      {formatUSD(totals.totalUSD)}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-xl">
                    $
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold">
                    {selectedCountry || "Selected destination"}
                  </span>

                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold">
                    USD comparison
                  </span>
                </div>
              </div>
            </div>

            {/* Local currency comparison */}
            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Local estimate
                  </p>

                  <p className="mt-1 text-xl font-bold text-slate-800">
                    {formatLocal(
                      totals.totalLocal,
                      currencyCode
                    )}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    USD equivalent
                  </p>

                  <p className="mt-1 text-xl font-bold text-[var(--primary)]">
                    {formatUSD(totals.totalUSD)}
                  </p>
                </div>
              </div>

              <div className="mt-4 h-px bg-slate-100" />

              <p className="mt-3 text-xs leading-5 text-slate-400">
                Currency conversion shown for comparison purposes.
                Exchange rates can change and should be verified before
                making financial decisions.
              </p>
            </div>

            {/* Monthly budget */}
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-sm">
                  $
                </div>

                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Monthly living
                </p>

                <p className="mt-1 text-xl font-bold text-slate-800">
                  {formatUSD(totals.monthlyUSD)}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-sm">
                  %
                </div>

                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Tuition share
                </p>

                <p className="mt-1 text-xl font-bold text-slate-800">
                  {totals.totalUSD > 0
                    ? Math.round(
                        (totals.tuitionUSD /
                          totals.totalUSD) *
                          100
                      )
                    : 0}
                  %
                </p>
              </div>
            </div>

            {/* Breakdown */}
            <div className="mt-7">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-800">
                  Cost breakdown
                </h4>

                <span className="text-xs font-semibold text-slate-400">
                  USD
                </span>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                {[
                  ["Tuition", totals.tuitionUSD],
                  ["Living expenses", totals.livingUSD],
                  ["Accommodation", totals.accommodationUSD],
                  ["Travel", totals.travelUSD],
                  ["Insurance", totals.insuranceUSD],
                  ["Other", totals.otherUSD],
                ].map(([label, value], index) => (
                  <div
                    key={label}
                    className={`flex items-center justify-between px-4 py-3.5 ${
                      index !== 5
                        ? "border-b border-slate-100"
                        : ""
                    }`}
                  >
                    <span className="text-sm text-slate-500">
                      {label}
                    </span>

                    <span className="text-sm font-bold text-slate-800">
                      {formatUSD(value)}
                    </span>
                  </div>
                ))}

                <div className="flex items-center justify-between bg-slate-50 px-4 py-4">
                  <span className="text-sm font-bold text-slate-800">
                    Estimated total
                  </span>

                  <span className="text-base font-bold text-[var(--primary)]">
                    {formatUSD(totals.totalUSD)}
                  </span>
                </div>
              </div>
            </div>

            {/* Funding message */}
            <div className="mt-6 rounded-2xl border border-[var(--primary)]/15 bg-[var(--primary)]/5 p-5">
              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[var(--primary)] shadow-sm">
                  ✓
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-800">
                    Looking for fully funded options?
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Scholarships can significantly reduce or completely
                    cover tuition, accommodation, travel and living
                    expenses. Compare your estimated budget with
                    available funding opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="border-t border-slate-100 px-6 py-4 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-2 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <span>
              Estimates are for planning purposes only.
            </span>

            <span className="font-semibold">
              All primary comparisons are shown in USD ($).
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}