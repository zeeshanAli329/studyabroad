import Link from "next/link";
import { ArrowRight, GraduationCap, Plane, BookOpen } from "lucide-react";
import Reveal from "@/components/shared/Reveal";

export default function Features() {
  const features = [
    {
      icon: GraduationCap,
      title: "Find Your Student Visa",
      description:
        "Explore student visa options for studying abroad, including visa requirements, application guidance, and essential information for international students planning to study from Pakistan.",
      link: "/visa",
    },
    {
      icon: Plane,
      title: "Explore Study Abroad Destinations",
      description:
        "Discover top study abroad destinations, countries, universities, and international education opportunities matched to your academic background and career goals.",
      link: "/destinations",
    },
    {
      icon: BookOpen,
      title: "Study Abroad Planning",
      description:
        "Get expert guidance on universities, scholarships, admissions, and applications to plan your international education journey with confidence.",
      link: "/scholarships",
    },
  ];

  return (
    <section
      className="bg-[var(--background-light)] py-12 sm:py-16 lg:py-20"
      aria-label="Studyabroad services and opportunities"
    >
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 100}>
              <Link
                href={feature.link}
                aria-label={`${feature.title} - Studyabroad`}
                className="group rounded-2xl bg-white p-8 border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-[var(--primary)]/5 block"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--primary)]/10 group-hover:bg-[var(--primary)]/20 transition-colors">
                  <feature.icon
                    className="h-7 w-7 text-[var(--primary)]"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mb-3 font-serif text-2xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                  <strong>{feature.title}</strong>
                </h3>

                <p
                  className="mb-4 text-[var(--text-secondary)]"
                  dangerouslySetInnerHTML={{
                    __html: feature.description,
                  }}
                />

                <span className="inline-flex items-center gap-2 text-[var(--primary)] font-medium group-hover:gap-3 transition-all">
                  <strong>Learn More</strong>{" "}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}