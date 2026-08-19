import next from "next";
import {
  ChevronRight,
  ShieldCheck,
  FileText,
  Clock,
  CheckCircle,
  Globe,
  MessageCircle,
  DollarSign,
  XCircle,
  PlaneTakeoff,
} from "lucide-react";

  // 4.1 Visa Requirements by Country
  const countryRequirements = [
    { country: "Turkey", note: "Documents, proof of funds, and processing times specific to Turkish student visas." },
    { country: "China", note: "Documents, proof of funds, and processing times specific to Chinese student visas." },
    { country: "Germany", note: "Documents, proof of funds, and processing times specific to German student visas." },
    { country: "UK", note: "Documents, proof of funds, and processing times specific to UK student visas." },
    { country: "USA", note: "Documents, proof of funds, and processing times specific to US student visas." },
    { country: "Hungary", note: "Documents, proof of funds, and processing times specific to Hungarian student visas." },
    { country: "Gulf Countries", note: "Documents, proof of funds, and processing times specific to Gulf country student visas." },
  ];

export default function VisaRequirements(){
    return(
        <section
  id="visa-requirements-by-country"
  className="relative overflow-hidden bg-[#f7faf8] py-20 sm:py-24"
>
  {/* Subtle background decoration */}
  <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-lime-200/20 blur-3xl" />
  <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-emerald-200/20 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
    
    {/* Section Heading */}
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-800 shadow-sm">
        <Globe className="h-4 w-4 text-lime-600" />
        Visa Requirements by Country
      </div>

      <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-emerald-950 sm:text-4xl lg:text-5xl">
        Country-Specific Requirements
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600">
        Required documents, proof of funds, and processing times for our top
        study destinations.
      </p>
    </div>

    {/* Country Cards */}
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {countryRequirements.map((item, index) => (
        <div
          key={item.country}
          className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_8px_30px_rgba(15,58,45,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-lime-200 hover:shadow-[0_18px_45px_rgba(15,58,45,0.12)]"
        >
          {/* Top accent */}
          <div className="absolute left-0 top-0 h-1 w-0 bg-lime-400 transition-all duration-300 group-hover:w-full" />

          {/* Number + Icon */}
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-950 text-lime-300 transition-transform duration-300 group-hover:scale-105">
              <Globe className="h-5 w-5" />
            </div>

            <span className="font-serif text-4xl font-bold text-emerald-900/10">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Content */}
          <div className="mt-6">
            <h3 className="font-serif text-xl font-semibold text-emerald-950">
              {item.country}
            </h3>

            <div className="mt-3 h-px w-10 bg-lime-400 transition-all duration-300 group-hover:w-16" />

            <p className="mt-4 text-sm leading-6 text-gray-600">
              {item.note}
            </p>
          </div>

          {/* Bottom */}
          <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-emerald-800">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime-100">
              <CheckCircle className="h-3.5 w-3.5 text-lime-700" />
            </span>
            Visa Guidance Available
          </div>

          {/* Hover decoration */}
          <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-lime-100/50 transition-transform duration-500 group-hover:scale-[2]" />
        </div>
      ))}
    </div>
  </div>
</section>
    )
}