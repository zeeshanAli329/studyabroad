import next from "next";
import {Reveal} from "@/components/shared/Reveal"



    <section className="mx-auto max-w-[1320px] px-6 py-10 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Tuition-Free Routes", "Explore public universities with low or no tuition."],
            ["02", "Fully Funded", "Scholarships that can cover tuition and living costs."],
            ["03", "Multiple Levels", "Bachelor's, Master's and PhD opportunities."],
            ["04", "Pakistan Focused", "Guidance designed for Pakistani applicants."],
          ].map(([number, title, text]) => (
            <Reveal key={number}>
              <div className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/30 hover:shadow-lg">
                <span className="text-xs font-bold tracking-[.2em] text-[var(--primary)]">
                  {number}
                </span>

                <h3 className="mt-4 font-serif text-xl font-semibold">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>