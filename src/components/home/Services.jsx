"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/shared/Reveal";
import {
  ArrowUpRight,
  Briefcase,
  HardHat,
  GraduationCap,
  Compass,
} from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Business Visa",
    description:
      "Professional guidance for business visas, documentation, applications and international business opportunities.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&h=500&fit=crop",
    href: "/visa/business",
  },
  {
    icon: HardHat,
    title: "Working Visa",
    description:
      "Complete support for working abroad, from document preparation to visa application and approval.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=500&fit=crop",
    href: "/visa/work",
  },
  {
    icon: GraduationCap,
    title: "Student Visa",
    description:
      "Personalized student visa assistance for universities, applications, scholarships and admissions.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=700&h=500&fit=crop",
    href: "/visa/student",
  },
  {
    icon: Compass,
    title: "Tourist Visa",
    description:
      "Make your international travel easier with professional tourist visa consultation and documentation.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=700&h=500&fit=crop",
    href: "/visa/tourist",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Soft ambient green lights */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[var(--primary)]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[var(--primary)]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal direction="up" delay={0}>
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            <div className="mb-4 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--primary)]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)] sm:text-sm">
                Visa Category
              </span>

              <span className="h-px w-8 bg-[var(--primary)]" />
            </div>

            <h2 className="font-serif text-3xl leading-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
              Find The Right Visa
              <span className="block text-[var(--primary)]">
                For Your Journey
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
              Professional visa consultation and personalized guidance
              designed to make your international journey simpler.
            </p>
          </div>
        </Reveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal
                key={service.title}
                direction="up"
                delay={index * 100}
              >
                <Link
                  href={service.href}
                  className="group relative block h-full overflow-hidden rounded-3xl border border-[var(--primary)]/10 bg-white p-3 shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-[var(--primary)]/30 hover:shadow-[0_15px_40px_rgba(107,181,43,0.12)]"
                >
                  {/* Very soft green background glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 z-0 h-48 w-48 rounded-full bg-[var(--primary)]/0 blur-3xl transition-all duration-700 group-hover:bg-[var(--primary)]/15" />

                  <div className="pointer-events-none absolute -bottom-20 -left-20 z-0 h-48 w-48 rounded-full bg-[var(--primary)]/0 blur-3xl transition-all duration-700 group-hover:bg-[var(--primary)]/10" />

                  {/* Image */}
                  <div className="relative z-10 h-48 overflow-hidden rounded-2xl sm:h-52">
                    {/* <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    /> */}
                    <img
  src={service.image}
  alt={service.title}
  className="w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[320px] xl:h-[380px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
/>

                    {/* Light image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent transition-all duration-700 group-hover:from-black/45" />

                    {/* Soft green light on image */}
                    <div className="absolute inset-0 bg-[var(--primary)]/0 transition-all duration-700 group-hover:bg-[var(--primary)]/10" />

                    {/* Icon */}
                    <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/15 text-white shadow-sm backdrop-blur-md transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-[var(--primary)] group-hover:shadow-[0_0_18px_rgba(255,255,255,0.25)]">
                      <Icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-105" />
                    </div>

                    {/* Arrow */}
                    <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/10 text-white backdrop-blur-md transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-[var(--primary)]">
                      <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:rotate-12" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 px-3 pb-3 pt-5">
                    <h3 className="mb-2 text-lg font-bold text-[var(--text-primary)] transition-colors duration-500 group-hover:text-[var(--primary)]">
                      {service.title}
                    </h3>

                    <p className="text-sm leading-6 text-[var(--text-secondary)]">
                      {service.description}
                    </p>

                    {/* Explore */}
                    <div className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
                      <span className="relative">
                        Explore Service

                        {/* Animated underline */}
                        <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--primary)] transition-all duration-500 group-hover:w-full" />
                      </span>

                      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>

                  {/* Soft professional outline */}
                  <div className="pointer-events-none absolute inset-1 z-30 rounded-[22px] border border-transparent transition-all duration-500 group-hover:border-[var(--primary)]/30" />

                  {/* Very subtle highlight */}
                  <div className="pointer-events-none absolute inset-0 z-20 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_30px_rgba(107,181,43,0.08)]" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}