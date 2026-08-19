import next from "next";
import Reveal from "@/components/shared/Reveal";
import {
  ChevronRight,
  Phone,
  ArrowRight,
  ShieldCheck,
  Globe2,
  Mail,
  MapPin,
  Send,
} from "lucide-react";


export function CountriesCategory() {
  const regions = [
    "Asia",
    "Europe",
    "North America",
    "Australia",
    "Latine America",
    "Africa",
  ];

  const countries = [
    { name: "Australia", flag: "australia.png" },
    { name: "Bahamas", flag: "bahamas.png" },
    { name: "Belize", flag: "belize.png" },
    { name: "Brazil", flag: "brazil.png" },
    { name: "Peru", flag: "peru.png" },
    { name: "Colombia", flag: "colombia.png" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
      <div className="text-center mb-14">
        <Reveal>
          <div className="flex items-center justify-center gap-2 text-lime-600 font-semibold text-sm uppercase tracking-wide">
            <ChevronRight className="w-4 h-4 rotate-180" />
            Countries Category
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-serif text-emerald-900 text-3xl sm:text-4xl font-semibold mt-4 leading-tight">
            Experience the World
            <br /> Anew Unveil Hidden
          </h2>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Region sidebar */}
        <Reveal y={30} className="lg:col-span-1">
          <div className="border border-gray-200 rounded-2xl divide-y divide-gray-100 overflow-hidden">
            {regions.map((region, i) => (
              <button
                key={region}
                className={`w-full flex items-center justify-between px-5 py-4 text-sm transition-colors duration-200 ${
                  i === 0
                    ? "text-emerald-900 font-semibold bg-gray-50"
                    : "text-gray-400 hover:text-emerald-900 hover:bg-gray-50"
                }`}
              >
                {region}
                <ChevronRight className="w-4 h-4" />
              </button>
            ))}
          </div>
        </Reveal>

        {/* Country grid */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {countries.map((country, i) => (
            <Reveal key={country.name} delay={i * 100} y={20}>
              <div className="border border-gray-200 rounded-xl px-5 py-4 flex items-center gap-4 hover:shadow-md hover:border-lime-300 transition-all duration-300">
                <img
                  src={`https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/${country.flag}`}
                  alt={`${country.name} flag`}
                  className="w-11 h-11 rounded-full object-cover flex-shrink-0"
                />
                <span className="font-serif font-semibold text-emerald-900">
                  {country.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}