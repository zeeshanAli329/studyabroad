import {
  BookOpen,
  Search,
  FileCheck2,
  PenLine,
  Users,
  Send,
  GraduationCap,
  Award,
  Globe2,
  Building2,
  AlertTriangle,
  CheckCircle2,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";


const SCHOLARSHIP_TYPES = [
  {
    icon: Award,
    title: "Fully Funded",
    desc: "Covers tuition, living costs, travel, and often health insurance — the most competitive category.",
  },
  {
    icon: GraduationCap,
    title: "Merit-Based",
    desc: "Awarded on academic performance, test scores, or achievements rather than financial need.",
  },
  {
    icon: Users,
    title: "Need-Based",
    desc: "Awarded based on demonstrated financial need, usually requiring income or hardship documentation.",
  },
  {
    icon: Globe2,
    title: "Country-Specific",
    desc: "Funded by a destination country's government to attract international students, often tied to bilateral agreements.",
  },
  {
    icon: Building2,
    title: "University-Specific",
    desc: "Offered directly by a university to applicants of a particular program, department, or nationality.",
  },
  {
    icon: BookOpen,
    title: "Subject-Specific",
    desc: "Targeted at students pursuing a particular field of study, such as engineering, medicine, or the arts.",
  },
];

const APPLICATION_STEPS = [
  {
    step: "01",
    icon: Search,
    title: "Research & Shortlist",
    desc: "Identify scholarships that match your academic level, field of study, and target country. Note each one's eligibility criteria and deadline.",
  },
  {
    step: "02",
    icon: CheckCircle2,
    title: "Check Eligibility",
    desc: "Confirm you meet every requirement — GPA, test scores, nationality, and any program-specific conditions — before investing time in the application.",
  },
  {
    step: "03",
    icon: FileCheck2,
    title: "Prepare Documents",
    desc: "Gather transcripts, test scores, passport, financial documents, and photos. Get translations or attestations done early if required.",
  },
  {
    step: "04",
    icon: PenLine,
    title: "Write Your SOP & Essays",
    desc: "Draft a statement of purpose tailored to each scholarship — generic essays are one of the most common reasons for rejection.",
  },
  {
    step: "05",
    icon: Users,
    title: "Secure Recommendation Letters",
    desc: "Request letters from professors or employers who know your work well, and give them enough time to write a strong, specific letter.",
  },
  {
    step: "06",
    icon: Send,
    title: "Submit & Track",
    desc: "Submit before the deadline, save confirmation receipts, and follow up if the scholarship provider requests additional information.",
  },
];

const CHECKLIST = [
  "Valid passport (with at least 6 months validity)",
  "Academic transcripts and degree certificates",
  "English or other language proficiency test scores",
  "Statement of Purpose (SOP)",
  "Letters of recommendation (usually 2-3)",
  "Updated CV or resume",
  "Financial documents (where required)",
  "Passport-sized photographs",
];

const COMMON_MISTAKES = [
  {
    title: "Missing the deadline",
    desc: "Scholarship deadlines are rarely extended. Submitting even one day late typically disqualifies the application entirely.",
  },
  {
    title: "Using a generic SOP",
    desc: "A statement of purpose that isn't tailored to the specific scholarship and university reads as copy-pasted, and reviewers notice.",
  },
  {
    title: "Ignoring eligibility criteria",
    desc: "Applying without meeting GPA, test score, or nationality requirements wastes time on both sides and lowers your odds on future attempts with the same provider.",
  },
  {
    title: "Weak or last-minute recommendation letters",
    desc: "A rushed letter from someone who doesn't know your work well carries far less weight than a detailed one requested well in advance.",
  },
  {
    title: "Not proofreading the application",
    desc: "Spelling errors, inconsistent dates, or mismatched information across documents can undermine an otherwise strong application.",
  },
  {
    title: "Applying to only one scholarship",
    desc: "Relying on a single application significantly limits your chances. Apply to multiple scholarships that genuinely fit your profile.",
  },
];

export default function GuideContent() {
  return (
    <>
      {/* ============== INTRO ============== */}
      <section className="mx-auto max-w-[900px] px-6 py-16 text-center sm:py-20 lg:px-8">
        <span className="mb-3 inline-block font-serif text-[13px] font-bold uppercase tracking-wide text-[var(--primary)]">
          Getting Started
        </span>
        <h2 className="mb-4 font-serif text-[24px] sm:text-[30px] font-bold text-[var(--primary-dark)]">
          What Is a Scholarship, and How Does It Work?
        </h2>
        <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
          A scholarship is financial support awarded to a student to help cover
          the cost of their education, based on merit, need, nationality, field
          of study, or a combination of these. Scholarships can be offered by
          governments, universities, or private organizations, and can cover
          anywhere from a portion of tuition to the full cost of your studies.
          Understanding the type of scholarship you're eligible for is the
          first step to building a realistic, well-targeted application plan.
        </p>
      </section>

      {/* ============== TYPES OF SCHOLARSHIPS ============== */}
      <section className="bg-[var(--background-light)] py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block font-serif text-[13px] font-bold uppercase tracking-wide text-[var(--primary)]">
              Know Your Options
            </span>
            <h2 className="font-serif text-[24px] sm:text-[30px] font-bold text-[var(--primary-dark)]">
              Types of Scholarships
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SCHOLARSHIP_TYPES.map((type) => (
              <div
                key={type.title}
                className="group rounded-2xl border border-[var(--border)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                  <type.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-serif text-[15px] font-bold uppercase text-[var(--primary-dark)]">
                  {type.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-[var(--text-secondary)]">
                  {type.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== APPLICATION PROCESS ============== */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block font-serif text-[13px] font-bold uppercase tracking-wide text-[var(--primary)]">
              Step by Step
            </span>
            <h2 className="font-serif text-[24px] sm:text-[30px] font-bold text-[var(--primary-dark)]">
              The Scholarship Application Process
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {APPLICATION_STEPS.map((step) => (
              <div
                key={step.step}
                className="relative rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-serif text-[32px] font-bold text-[var(--primary)]/15">
                    {step.step}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                    <step.icon className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="mb-2 font-serif text-[15px] font-bold uppercase text-[var(--primary-dark)]">
                  {step.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-[var(--text-secondary)]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== DOCUMENT CHECKLIST ============== */}
      <section className="bg-[var(--background-light)] py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div>
              <span className="mb-3 inline-block font-serif text-[13px] font-bold uppercase tracking-wide text-[var(--primary)]">
                Be Prepared
              </span>
              <h2 className="mb-6 font-serif text-[24px] sm:text-[28px] font-bold text-[var(--primary-dark)]">
                Documents You'll Typically Need
              </h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {CHECKLIST.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-white p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--success)]" />
                    <span className="text-[13px] leading-relaxed text-[var(--text-primary)]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* side CTA card */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--primary-dark)] to-[var(--primary)] p-8 text-white">
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[var(--accent)]/20 blur-3xl" />
              <h3 className="relative mb-3 font-serif text-[20px] font-bold">
                Not sure which scholarships fit your profile?
              </h3>
              <p className="relative mb-6 text-[13px] leading-relaxed text-white/75">
                Talk to a consultant and get a shortlist matched to your
                academic background, budget, and target destination — free of
                charge.
              </p>
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[var(--btn)] px-6 py-3 text-[13px] font-serif font-bold uppercase text-white transition-colors duration-300"
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-[var(--primary)] transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <span className="relative z-10">Book a Free Consultation</span>
                <ArrowRight className="relative z-10 h-3 w-3 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============== COMMON MISTAKES ============== */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block font-serif text-[13px] font-bold uppercase tracking-wide text-[var(--primary)]">
              Avoid These
            </span>
            <h2 className="font-serif text-[24px] sm:text-[30px] font-bold text-[var(--primary-dark)]">
              Common Mistakes to Avoid
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_MISTAKES.map((mistake) => (
              <div
                key={mistake.title}
                className="rounded-2xl border border-[var(--danger)]/15 bg-[var(--danger)]/5 p-6"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--danger)]/10 text-[var(--danger)]">
                  <AlertTriangle className="h-4 w-4" />
                </div>
                <h3 className="mb-2 font-serif text-[14px] font-bold uppercase text-[var(--primary-dark)]">
                  {mistake.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-[var(--text-secondary)]">
                  {mistake.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== PRO TIP CALLOUT ============== */}
      <section className="mx-auto max-w-[1000px] px-6 pb-16 sm:pb-20 lg:px-8">
        <div className="flex items-start gap-4 rounded-2xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-6 sm:p-8">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/20 text-[var(--btn)]">
            <Lightbulb className="h-5 w-5" />
          </div>
          <div>
            <h3 className="mb-2 font-serif text-[16px] font-bold text-[var(--primary-dark)]">
              Pro Tip
            </h3>
            <p className="text-[14px] leading-relaxed text-[var(--text-secondary)]">
              Keep a simple spreadsheet tracking every scholarship you apply
              to — deadline, required documents, submission status, and
              follow-up dates. Missed deadlines are one of the most avoidable
              reasons applications fail, and a single tracker prevents that
              entirely once you're juggling more than two or three
              applications at once.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}