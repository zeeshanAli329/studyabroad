"use client";

import { useState } from "react";
import Reveal from "@/components/shared/Reveal";
import { Send, CheckCircle2, ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 800);
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <Reveal direction="up" delay={0}>
          <div
            className="
              group relative overflow-hidden rounded-[28px]
              bg-[var(--primary-dark)]
              border border-[var(--primary)]/20
              shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              transition-all duration-500
              hover:border-[var(--primary)]/50
              hover:shadow-[0_25px_80px_rgba(0,0,0,0.18)]
            "
          >
            {/* Animated light border */}
            <div className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-r from-transparent via-[var(--primary)]/50 to-transparent blur-sm" />
            </div>

            {/* Top light effect */}
            <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[var(--primary)]/20 blur-[90px] transition-all duration-700 group-hover:scale-150 group-hover:bg-[var(--primary)]/30" />

            {/* Right glow */}
            <div className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[var(--primary)]/15 blur-[80px] transition-all duration-700 group-hover:scale-125" />

            {/* Left glow */}
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[var(--primary)]/10 blur-[90px]" />

            {/* Decorative circles */}
            <div className="pointer-events-none absolute right-8 top-8 h-20 w-20 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-125" />
            <div className="pointer-events-none absolute right-14 top-14 h-8 w-8 rounded-full border border-[var(--primary)]/30 transition-transform duration-700 group-hover:scale-150" />

            <div className="relative z-10 flex flex-col items-center justify-between gap-10 p-7 sm:p-10 lg:flex-row lg:p-14">
              {/* Content */}
              <div className="max-w-xl text-center lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/30 bg-white/5 px-4 py-2 backdrop-blur-sm">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--primary)]" />

                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                    Stay Updated
                  </span>
                </div>

                <h2 className="mt-5 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                  Never Miss a Visa
                  <br />
                  <span className="text-[var(--primary)]">
                    Update or Travel Tip
                  </span>
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/65 sm:text-base">
                  Join <strong className="pl-1">StudyAbroad</strong> newsletter for the latest visa news, destination
                  guides, scholarship opportunities, and exclusive offers
                  delivered straight to your inbox.
                </p>

                {/* Small feature row */}
                <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
                  {["Visa Updates", "Travel Tips", "Scholarships"].map(
                    (item) => (
                      <span
                        key={item}
                        className="
                          rounded-full border border-white/10
                          bg-white/5 px-3 py-1.5
                          text-xs text-white/70
                          backdrop-blur-sm
                          transition-all duration-300
                          hover:border-[var(--primary)]/40
                          hover:bg-[var(--primary)]/10
                          hover:text-white
                        "
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Form */}
              <div className="w-full max-w-xl lg:max-w-[470px]">
                {status === "success" ? (
                  <div
                    className="
                      relative overflow-hidden rounded-2xl
                      border border-[var(--primary)]/30
                      bg-white/10 p-6 sm:p-7
                      backdrop-blur-md
                    "
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent" />

                    <div className="relative flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/20">
                        <CheckCircle2 className="h-6 w-6" />
                      </div>

                      <div>
                        <h3 className="font-semibold text-white">
                          You&apos;re subscribed!
                        </h3>

                        <p className="mt-1 text-sm text-white/60">
                          Check your inbox for our latest updates.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative">
                    <div
                      className="
                        rounded-2xl border border-white/15
                        bg-white/10 p-2
                        shadow-2xl backdrop-blur-xl
                        transition-all duration-500
                        focus-within:border-[var(--primary)]/60
                        focus-within:bg-white/15
                        focus-within:shadow-[0_0_35px_rgba(128,205,30,0.12)]
                      "
                    >
                      <div className="flex flex-col gap-2 sm:flex-row">
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className="
                            min-w-0 flex-1 rounded-xl
                            bg-transparent px-4 py-4
                            text-sm text-white
                            outline-none
                            placeholder:text-white/40
                          "
                        />

                        <button
                          type="submit"
                          disabled={status === "submitting"}
                          className="
                            group/btn inline-flex shrink-0
                            items-center justify-center gap-2
                            rounded-xl
                            bg-[var(--primary)]
                            px-6 py-4
                            text-sm font-semibold text-white
                            shadow-lg shadow-[var(--primary)]/20
                            transition-all duration-300
                            hover:-translate-y-0.5
                            hover:gap-3
                            hover:shadow-[0_10px_30px_rgba(128,205,30,0.3)]
                            disabled:cursor-not-allowed
                            disabled:opacity-60
                          "
                        >
                          {status === "submitting" ? (
                            <>
                              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Subscribe
                              <Send className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-white/40">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[var(--primary)]" />
                      No spam. Unsubscribe anytime.
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Bottom animated line */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--primary)] transition-all duration-700 group-hover:w-full" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}