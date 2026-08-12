import Link from "next/link";
import { ArrowRight, GraduationCap, Plane, BookOpen } from "lucide-react";
import Reveal from "@/components/shared/Reveal";

export default function Features() {
  const features = [
    {
      icon: GraduationCap,
      title: "Find Your Visa",
      description: "Explore visa options for study, work, travel, and more with our comprehensive guides.",
      link: "/visa"
    },
    {
      icon: Plane,
      title: "Travel Opportunities",
      description: "Explore top countries for international education.",
      link: "/countries"
    },
    {
      icon: BookOpen,
      title: "Study Abroad Planning",
      description: "Get expert guidance on universities, scholarships, and application processes.",
      link: "/scholarships"
    }
  ];

  return (
    <section className="bg-[var(--background-light)] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 100}>
              <Link
                href={feature.link}
                className="group rounded-2xl bg-white p-8 border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-[var(--primary)]/5 block"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--primary)]/10 group-hover:bg-[var(--primary)]/20 transition-colors">
                  <feature.icon className="h-7 w-7 text-[var(--primary)]" />
                </div>
                <h3 className="mb-3 font-serif text-2xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                  {feature.title}
                </h3>
                <p className="mb-4 text-[var(--text-secondary)]">
                  {feature.description}
                </p>
                <span className="inline-flex items-center gap-2 text-[var(--primary)] font-medium group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}