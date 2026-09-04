import {
  CheckCircle2,
  RefreshCw,
  Sparkles,
} from "lucide-react";

export default function ScholarshipHero({ count }) {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-16 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute right-[-100px] top-[-220px] h-[420px] w-[420px] rounded-full bg-sky-400/10" />

      <div className="pointer-events-none absolute bottom-[-180px] left-[-80px] h-[280px] w-[280px] rounded-full bg-amber-400/10" />

      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="relative z-10 max-w-[850px]">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs font-bold text-amber-400">
            <Sparkles size={16} />
            Fresh Scholarship Opportunities
          </div>

          <h1 className="m-0 text-[32px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[38px] md:text-5xl lg:text-[62px]">
            Latest Scholarships
            <span className="text-sky-400">
              {" "}
              — Newly Announced Opportunities
            </span>
          </h1>

          <p className="mt-6 max-w-[760px] text-base leading-relaxed text-white/80 sm:text-lg">
            Stay updated with newly announced scholarship opportunities
            for Pakistani students. Discover new opportunities from
            universities, governments, and scholarship providers.
          </p>

          <div className="mt-9 flex flex-col flex-wrap gap-3 sm:flex-row">

            <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-xs text-white/80 sm:min-w-[170px] sm:text-sm">
              <strong className="text-xl text-white">
                {count}
              </strong>

              <span>Latest Opportunities</span>
            </div>

            <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-xs text-white/80 sm:min-w-[170px] sm:text-sm">
              <CheckCircle2
                size={20}
                className="shrink-0 text-sky-400"
              />

              <span>Official Sources</span>
            </div>

            <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-xs text-white/80 sm:min-w-[170px] sm:text-sm">
              <RefreshCw
                size={20}
                className="shrink-0 text-sky-400"
              />

              <span>Regularly Updated</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}