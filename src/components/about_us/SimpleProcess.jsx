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

export function SimpleProcess() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      description: "Explore universities, programs, and destinations that match your goals and interests."
    },
    {
      num: "02",
      title: "Plan",
      description: "Work with our counselors to create a personalized roadmap for your application journey."
    },
    {
      num: "03",
      title: "Apply",
      description: "Submit applications with our expert guidance on essays, documents, and deadlines."
    },
    {
      num: "04",
      title: "Travel",
      description: "Receive visa support, pre-departure briefing, and assistance to begin your journey."
    }
  ];

  return (
    <section
      className="relative w-full overflow-hidden bg-[var(--background-light)]"
      style={{
        backgroundImage:
          "url('https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/process-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 py-16 sm:py-24 text-center ">
        <Reveal>
          <div className="flex items-center justify-center gap-2 text-[var(--primary)]  font-semibold text-sm uppercase tracking-wide">
            <ShieldCheck className="w-4 h-4" />
            Our Process
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-serif text-[var(--primary)] text-3xl sm:text-4xl font-semibold mt-4 leading-tight max-w-2xl mx-auto">
            Your Journey in Four Simple Steps
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 text-left ">
          {steps.map((step, i) => (
            <Reveal
              key={step.num}
              delay={200 + i * 100}
              y={30}
            >
              <div className="bg-white rounded-2xl shadow-2xl p-6 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <span className="block font-serif text-4xl font-bold text-[var(--primary)] mb-4">
                  {step.num}
                </span>
                <h3 className="font-serif font-semibold text-[var(--primary)] text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}