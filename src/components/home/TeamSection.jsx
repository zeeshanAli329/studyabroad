"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/shared/Reveal";
import {
  Plus,
  Minus,
  Facebook,
  Twitter,
  Instagram,
  ArrowUpRight,
} from "lucide-react";

const team = [
  {
    id: "courtney",
    name: "Courtney Henry",
    role: "Medical Assistant",
    bio: "Our experienced consultants provide personalized guidance to help students choose the right destination, university, and visa pathway.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1000&fit=crop",
  },
  {
    id: "ronald",
    name: "Ronald Richards",
    role: "Marketing Coordinator",
    bio: "We help students understand international education opportunities and make confident decisions about their future.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=1000&fit=crop",
  },
  {
    id: "albert",
    name: "Albert Flores",
    role: "Web Designer",
    bio: "From university selection to applications and pre-departure support, our team stays with students throughout their journey.",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&h=1000&fit=crop",
  },
];

export default function TeamSection() {
  const [activeId, setActiveId] = useState(team[0].id);

  const activeMember =
    team.find((member) => member.id === activeId) || team[0];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Decorative background outline */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full border border-[var(--primary)]/10" />
      <div className="pointer-events-none absolute -right-20 top-32 h-52 w-52 rounded-full border border-[var(--primary)]/10" />

      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* LEFT */}
          <Reveal
            direction="left"
            delay={0}
            className="lg:col-span-7"
          >
            <div>
              <span className="relative inline-block text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                Our Coaching

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[var(--primary)] transition-all duration-500 group-hover:w-full" />
              </span>

              <h2 className="mt-4 mb-8 font-serif text-3xl leading-tight text-[var(--text-primary)] sm:text-4xl lg:mb-10 lg:text-5xl">
                Exploring the Unknown
                <br />
                <span className="text-[var(--primary)]">
                  Voyages of Wonder
                </span>
              </h2>

              <div className="space-y-3 sm:space-y-4">
                {team.map((member, index) => {
                  const isActive = member.id === activeId;

                  return (
                    <div
                      key={member.id}
                      className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ${
                        isActive
                          ? "border-[var(--primary)]/50 shadow-lg shadow-[var(--primary)]/10"
                          : "border-gray-200 hover:border-[var(--primary)]/40"
                      }`}
                    >
                      {/* Animated fill */}
                      <div
                        className={`absolute inset-0 origin-left bg-[var(--primary)]/5 transition-transform duration-500 ${
                          isActive ? "scale-x-100" : "scale-x-0"
                        }`}
                      />

                      <button
                        type="button"
                        onClick={() => setActiveId(member.id)}
                        className="relative z-10 flex w-full items-center justify-between gap-4 p-4 text-left sm:p-5"
                      >
                        <div className="flex items-center gap-4">
                          {/* Number */}
                          <span
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-xs font-bold transition-all duration-500 ${
                              isActive
                                ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                                : "border-[var(--primary)]/20 text-[var(--primary)] group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white"
                            }`}
                          >
                            0{index + 1}
                          </span>

                          <div>
                            <h3 className="text-sm font-semibold text-[var(--text-primary)] sm:text-base">
                              {member.name}
                            </h3>

                            <p className="mt-0.5 text-xs text-[var(--text-secondary)] sm:text-sm">
                              {member.role}
                            </p>
                          </div>
                        </div>

                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
                            isActive
                              ? "rotate-0 bg-[var(--primary)] text-white"
                              : "border border-[var(--primary)]/30 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white"
                          }`}
                        >
                          {isActive ? (
                            <Minus className="h-4 w-4" />
                          ) : (
                            <Plus className="h-4 w-4" />
                          )}
                        </div>
                      </button>

                      {/* Accordion */}
                      <div
                        className="grid transition-all duration-500 ease-in-out"
                        style={{
                          gridTemplateRows: isActive ? "1fr" : "0fr",
                        }}
                      >
                        <div className="overflow-hidden">
                          <p className="px-4 pb-5 pl-[4.5rem] text-xs leading-relaxed text-[var(--text-secondary)] sm:px-5 sm:pb-5 sm:pl-[5rem] sm:text-sm">
                            {member.bio}
                          </p>
                        </div>
                      </div>

                      {/* Bottom fill line */}
                      <div
                        className={`absolute bottom-0 left-0 h-[3px] bg-[var(--primary)] transition-all duration-700 ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* RIGHT IMAGE */}
          <Reveal
            direction="right"
            delay={150}
            className="lg:col-span-5"
          >
            <div className="group relative">
              {/* Outline decoration */}
              <div className="absolute -inset-3 rounded-[2rem] border border-[var(--primary)]/20 transition-all duration-500 group-hover:-inset-5 group-hover:border-[var(--primary)]/40" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem] bg-gray-100 shadow-2xl">
                {/* <Image
                  key={activeMember.id}
                  src={activeMember.image}
                  alt={activeMember.name}
                  fill
                  priority
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                /> */}
                <img
  key={activeMember.id}
  src={activeMember.image}
  alt={activeMember.name}
  className="w-full h-[220px] sm:h-[280px] md:h-[360px] lg:h-[420px] xl:h-[500px] object-cover transition-all duration-700 group-hover:scale-105"
/>

                {/* Image overlay fill */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Moving shine */}
                <div className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg] bg-white/20 transition-all duration-1000 group-hover:left-[130%]" />

                {/* Member information */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <div className="translate-y-3 opacity-90 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="mb-1 text-xs font-medium uppercase tracking-widest text-white/70">
                      {activeMember.role}
                    </p>

                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {activeMember.name}
                    </h3>
                  </div>
                </div>

                {/* Social pill */}
                <div className="absolute left-4 top-4 flex -translate-x-3 items-center gap-1 rounded-full bg-white/95 p-1.5 opacity-0 shadow-lg backdrop-blur-md transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 sm:left-5 sm:top-5">
                  {[Facebook, Twitter, Instagram].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      aria-label="Social media"
                      className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white"
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>

                {/* Arrow */}
                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-md transition-all duration-500 group-hover:rotate-45 group-hover:bg-[var(--primary)] group-hover:border-[var(--primary)]">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}