"use client";

import { useMemo, useState } from "react";
import Reveal from "@/components/shared/Reveal";

import {
  formatMoney,
  formatUSD,
  getCurrencyCode,
  getCurrencySymbol,
  getLivingCost,
} from "./freeEducationUtils";

const DEFAULT_RATES = {
  USD: 1,
  EUR: 1.16,
  GBP: 1.35,
  CAD: 0.73,
  AUD: 0.65,
  CHF: 1.27,
  NOK: 0.095,
  SEK: 0.106,
  DKK: 0.156,
  PLN: 0.27,
  CZK: 0.047,
  HUF: 0.0029,
  CNY: 0.14,
  TRY: 0.023,
  JPY: 0.0067,
  KRW: 0.00074,
  NZD: 0.59,
  AED: 0.272,
  SAR: 0.267,
  PKR: 0.00357,
};

export default function FundingCalculator({
  countries = [],
  loading = false,
}) {
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [countrySearch, setCountrySearch] = useState("");
  const [countryOpen, setCountryOpen] = useState(false);

  const [tuition, setTuition] = useState(0);
  const [living, setLiving] = useState(1000);
  const [months, setMonths] = useState(12);
  const [accommodation, setAccommodation] = useState(0);
  const [travel, setTravel] = useState(1000);
  const [insurance, setInsurance] = useState(500);
  const [other, setOther] = useState(500);
  const [funding, setFunding] = useState(0);

  const selectedCountry = useMemo(() => {
    return (
      countries.find(
        (country) =>
          String(country.id) === String(selectedCountryId),
      ) || null
    );
  }, [countries, selectedCountryId]);

  const currencyCode = getCurrencyCode(selectedCountry);

  const currencySymbol = getCurrencySymbol(selectedCountry);

  const filteredCountries = useMemo(() => {
    const query = countrySearch.trim().toLowerCase();

    if (!query) return countries;

    return countries.filter((country) =>
      String(country?.name || "")
        .toLowerCase()
        .includes(query),
    );
  }, [countries, countrySearch]);

  const rateToUSD =
    DEFAULT_RATES[currencyCode] ||
    Number(selectedCountry?.currencyToUSD) ||
    1;

  const totalLocal =
    Number(tuition || 0) +
    Number(living || 0) * Number(months || 0) +
    Number(accommodation || 0) * Number(months || 0) +
    Number(travel || 0) +
    Number(insurance || 0) +
    Number(other || 0) -
    Number(funding || 0);

  const safeTotalLocal = Math.max(totalLocal, 0);

  const totalUSD = safeTotalLocal * rateToUSD;

  const monthlyLocal =
    Number(living || 0) + Number(accommodation || 0);

  const monthlyUSD = monthlyLocal * rateToUSD;

  function selectCountry(country) {
    setSelectedCountryId(country.id);
    setCountrySearch(country.name || "");
    setCountryOpen(false);

    const backendLiving = Number(getLivingCost(country));

    if (Number.isFinite(backendLiving) && backendLiving > 0) {
      setLiving(backendLiving);
    }

    if (country?.tuitionFee) {
      const backendTuition = Number(country.tuitionFee);

      if (Number.isFinite(backendTuition)) {
        setTuition(backendTuition);
      }
    }
  }

  function resetCalculator() {
    setSelectedCountryId("");
    setCountrySearch("");
    setTuition(0);
    setLiving(1000);
    setMonths(12);
    setAccommodation(0);
    setTravel(1000);
    setInsurance(500);
    setOther(500);
    setFunding(0);
  }

  return (
    <Reveal>
      <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_25px_80px_rgba(0,0,0,.07)]">
        {/* Header */}
        <div className="border-b border-gray-100 px-6 py-7 lg:px-8">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--primary)]">
                Study Budget Planner
              </span>

              <h2 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">
                Estimate your total study cost
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">
                Select a country, enter your expected expenses and compare
                the estimated budget in local currency and US dollars.
              </p>
            </div>

            <button
              type="button"
              onClick={resetCalculator}
              className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold transition-all hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_360px]">
          {/* Inputs */}
          <div className="p-6 lg:p-8">
            {/* Country */}
            <div className="relative">
              <label className="mb-2 block text-sm font-semibold">
                Select study country
              </label>

              <button
                type="button"
                onClick={() => setCountryOpen((value) => !value)}
                className={`flex w-full items-center justify-between rounded-xl border bg-white px-4 py-3.5 text-left transition-all ${
                  countryOpen
                    ? "border-[var(--primary)] ring-4 ring-[var(--primary)]/5"
                    : "border-gray-200 hover:border-[var(--primary)]/40"
                }`}
              >
                <span
                  className={
                    selectedCountry
                      ? "font-medium"
                      : "text-[var(--text-secondary)]"
                  }
                >
                  {selectedCountry?.name || "Search and select a country"}
                </span>

                <span className="text-[var(--text-secondary)]">
                  {countryOpen ? "⌃" : "⌄"}
                </span>
              </button>

              {countryOpen && (
                <div className="absolute left-0 right-0 z-30 mt-2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
                  <div className="border-b border-gray-100 p-3">
                    <input
                      value={countrySearch}
                      onChange={(event) =>
                        setCountrySearch(event.target.value)
                      }
                      autoFocus
                      placeholder="Search country..."
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/5"
                    />
                  </div>

                  <div className="max-h-64 overflow-y-auto p-2">
                    {loading ? (
                      <div className="px-4 py-5 text-sm text-[var(--text-secondary)]">
                        Loading countries...
                      </div>
                    ) : filteredCountries.length === 0 ? (
                      <div className="px-4 py-5 text-sm text-[var(--text-secondary)]">
                        No country found.
                      </div>
                    ) : (
                      filteredCountries.map((country) => (
                        <button
                          type="button"
                          key={country.id || country.slug}
                          onClick={() => selectCountry(country)}
                          className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition-all hover:bg-[var(--primary)]/5 ${
                            String(country.id) ===
                            String(selectedCountryId)
                              ? "bg-[var(--primary)]/5 font-semibold text-[var(--primary)]"
                              : ""
                          }`}
                        >
                          <span>{country.name}</span>

                          <span className="text-xs text-[var(--text-secondary)]">
                            {getCurrencyCode(country)}
                          </span>
                        </button>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {selectedCountry && (
              <div className="mt-4 flex flex-wrap items-center gap-3 rounded-xl border border-[var(--primary)]/10 bg-[var(--primary)]/5 px-4 py-3">
                <span className="text-sm font-semibold">
                  {selectedCountry.name}
                </span>

                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[var(--primary)]">
                  {currencyCode}
                </span>

                <span className="text-xs text-[var(--text-secondary)]">
                  {currencySymbol} local estimate · $ USD comparison
                </span>
              </div>
            )}

            {/* Inputs */}
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <MoneyInput
                label={`Annual Tuition (${currencyCode})`}
                value={tuition}
                onChange={setTuition}
                symbol={currencySymbol}
              />

              <MoneyInput
                label={`Monthly Living Cost (${currencyCode})`}
                value={living}
                onChange={setLiving}
                symbol={currencySymbol}
              />

              <MoneyInput
                label={`Monthly Accommodation (${currencyCode})`}
                value={accommodation}
                onChange={setAccommodation}
                symbol={currencySymbol}
              />

              <NumberInput
                label="Study Duration"
                value={months}
                onChange={setMonths}
                suffix="months"
              />

              <MoneyInput
                label={`Travel & Flight (${currencyCode})`}
                value={travel}
                onChange={setTravel}
                symbol={currencySymbol}
              />

              <MoneyInput
                label={`Insurance (${currencyCode})`}
                value={insurance}
                onChange={setInsurance}
                symbol={currencySymbol}
              />

              <MoneyInput
                label={`Other Expenses (${currencyCode})`}
                value={other}
                onChange={setOther}
                symbol={currencySymbol}
              />

              <MoneyInput
                label={`Scholarship / Funding (${currencyCode})`}
                value={funding}
                onChange={setFunding}
                symbol={currencySymbol}
              />
            </div>
          </div>

          {/* Result */}
          <aside className="border-t border-gray-100 bg-[#f7faf8] p-6 lg:border-l lg:border-t-0 lg:p-8">
            <div className="sticky top-6">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[var(--primary)]">
                Estimated Budget
              </p>

              <h3 className="mt-2 font-serif text-2xl font-semibold">
                Your study cost
              </h3>

              <div className="mt-7 rounded-2xl bg-[var(--primary)] p-6 text-white shadow-lg">
                <p className="text-xs font-bold uppercase tracking-wider text-white/70">
                  Local Currency
                </p>

                <p className="mt-2 text-4xl font-bold tracking-tight">
                  {formatMoney(safeTotalLocal, currencyCode)}
                </p>

                <p className="mt-2 text-sm text-white/70">
                  {currencyCode} estimated total
                </p>
              </div>

              <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                  USD Comparison
                </p>

                <p className="mt-2 text-3xl font-bold text-[var(--text-primary)]">
                  {formatUSD(totalUSD)}
                </p>

                <p className="mt-2 text-xs leading-5 text-[var(--text-secondary)]">
                  Approximate USD comparison. Exchange rates are indicative
                  and should not be treated as a live bank rate.
                </p>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <SummaryItem
                  label="Monthly"
                  value={formatMoney(monthlyLocal, currencyCode)}
                />

                <SummaryItem
                  label="Monthly USD"
                  value={formatUSD(monthlyUSD)}
                />
              </div>

              <div className="mt-5 rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[var(--text-secondary)]">
                    Currency
                  </span>

                  <strong>{currencyCode}</strong>
                </div>

                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="text-[var(--text-secondary)]">
                    Symbol
                  </span>

                  <strong>{currencySymbol}</strong>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Reveal>
  );
}

function MoneyInput({
  label,
  value,
  onChange,
  symbol,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold">
        {label}
      </label>

      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-[var(--primary)]">
          {symbol}
        </span>

        <input
          type="number"
          min="0"
          value={value}
          onChange={(event) =>
            onChange(Number(event.target.value) || 0)
          }
          className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-10 pr-4 text-sm outline-none transition-all focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/5"
        />
      </div>
    </div>
  );
}

function NumberInput({
  label,
  value,
  onChange,
  suffix,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold">
        {label}
      </label>

      <div className="relative">
        <input
          type="number"
          min="1"
          value={value}
          onChange={(event) =>
            onChange(Number(event.target.value) || 1)
          }
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 pr-20 text-sm outline-none transition-all focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/5"
        />

        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-[var(--text-secondary)]">
          {suffix}
        </span>
      </div>
    </div>
  );
}

function SummaryItem({ label, value }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <p className="text-xs text-[var(--text-secondary)]">
        {label}
      </p>

      <p className="mt-1 text-sm font-bold">
        {value}
      </p>
    </div>
  );
}