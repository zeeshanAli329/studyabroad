import next from "next";
import { Reveal } from "@/app/(site)/about/page";
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
  className="relative w-full overflow-hidden"
  style={{
    backgroundImage:
      "linear-gradient(120deg, rgba(15,58,45,0.92), rgba(15,58,45,0.75)), url('https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/breadcrumb.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
    <Reveal>
      <h1 className="text-white text-4xl sm:text-5xl font-heading font-semibold tracking-tight">
        Your Journey Abroad Starts Here
      </h1>
    </Reveal>

    <Reveal delay={240}>
      <div className="flex items-center gap-2 text-white/80 text-sm mt-6">
        <span>STUDYABROAD</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-lime-400">About Us</span>
      </div>
    </Reveal>
  </div>
</section>
  );
}