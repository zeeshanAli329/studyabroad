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

export function HeroBreadcrumb() {
  return (
   <section
  className="relative w-full overflow-hidden -top-3"
  style={{
    backgroundImage:
      "linear-gradient(120deg, var(--primary-dark), var(--primary-dark)), url('https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/breadcrumb.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="max-w-[1320px] mx-auto px-6 lg:px-8 py-16 sm:py-24">
    <Reveal>
      <h1 className="text-white text-4xl sm:text-5xl font-heading font-semibold tracking-tight">
        Your Journey Abroad Starts Here
      </h1>
    </Reveal>

    <Reveal delay={240}>
      <div className="flex items-center gap-2 text-white/80 text-sm mt-6">
        <span>STUDYABROAD</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-[var(--primary)]">About Us</span>
      </div>
    </Reveal>
  </div>
</section>
  );
}