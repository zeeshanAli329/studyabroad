import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ScholarshipsHero({
  image = "/scalorship.jpg",
  badge = "Scholarship Assistance",
  titleLine1,
  titleHighlight,
  description,
  breadcrumbLabel,
  stats, // optional: [{ value: "120+", label: "Scholarships" }, ...]
  ctaText = "Book a Free Consultation",
  ctaHref = "/contact",
  secondaryCtaText,
  secondaryCtaHref,
}) {
  return (
    <section className="relative -top-15  w-full max-w-full overflow-hidden bg-[var(--primary-dark)]">
      {/* ===== Background mesh / texture ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute  inset-0 bg-gradient-to-br from-[var(--primary-dark)] via-[var(--primary-dark)] to-[var(--primary)]" />
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* glow orbs */}
        <div className="absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-[var(--primary-light)]/25 blur-[120px]" />
        <div className="absolute -right-20 top-1/3 h-[380px] w-[380px] rounded-full bg-[var(--accent)]/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-[var(--btn)]/15 blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:py-28">
        {/* ===================== LEFT: COPY ===================== */}
        <div className="max-w-2xl">
          {/* breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-[12px] font-serif uppercase tracking-wide text-white/50">
            <Link href="/" className="transition hover:text-white">
              Studyabroad
            </Link>
            <span>/</span>
            <span className="text-[var(--primary-light)]">{breadcrumbLabel}</span>
          </div>

          {/* badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-1.5">
            <Sparkles size={13} className="text-[var(--accent)]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
              {badge}
            </span>
          </div>

          <h1 className="font-serif text-[36px] font-bold leading-[1.1] tracking-tight text-white sm:text-[46px] lg:text-[54px]">
            {titleLine1}
            <br />
            <span className="bg-gradient-to-r from-[var(--primary-light)] to-[var(--accent)] bg-clip-text text-transparent">
              {titleHighlight}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70 sm:text-[16px]">
            {description}
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href={ctaHref}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[var(--btn)] px-6 py-3.5 text-[14px] font-serif font-bold uppercase text-white transition-colors duration-300"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-[var(--primary)] transition-transform duration-500 ease-out group-hover:scale-x-100" />
              <span className="relative z-10">{ctaText}</span>
              <ArrowRight className="relative z-10 h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </Link>

            {secondaryCtaText && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-[14px] font-serif font-bold uppercase text-white transition hover:bg-white/10"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>

          {/* inline stat pills */}
          {stats && stats.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex min-w-[130px] items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
                >
                  <span className="font-serif text-xl font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="text-[11px] leading-tight text-white/60">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ===================== RIGHT: IMAGE CARD ===================== */}
        <div className="relative mx-auto w-full max-w-[460px] lg:max-w-none">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 shadow-2xl shadow-black/40">
            <img
              src={image}
              alt={titleLine1}
              className="h-[320px] w-full object-cover sm:h-[400px] lg:h-[460px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/70 via-transparent to-transparent" />
          </div>

          {/* floating glass badge — top */}
          <div className="absolute -top-5 left-5 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md sm:left-8">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--success)]/15 text-[var(--success)]">
              <Sparkles size={16} />
            </div>
            <div>
              <p className="text-[11px] font-bold text-[var(--text-primary)]">
                100% Verified
              </p>
              <p className="text-[10px] text-[var(--text-secondary)]">
                Checked before listing
              </p>
            </div>
          </div>

          {/* floating glass badge — bottom */}
          <div className="absolute -bottom-6 right-4 rounded-2xl border border-white/15 bg-[var(--primary-dark)]/90 px-5 py-3.5 shadow-xl backdrop-blur-md sm:right-8">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-white/60">
              Trusted By
            </p>
            <p className="font-serif text-lg font-bold text-white">
              1,000+ Students
            </p>
          </div>
        </div>
      </div>

      {/* ===== bottom stats bar (kept for pages that render it below the fold) ===== */}
    </section>
  );
}