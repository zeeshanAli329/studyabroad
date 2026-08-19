"use client";

import Link from "next/link";
import Reveal from "@/components/shared/Reveal";
import {
  ArrowUpRight,
  Scan,
  UserRound,
  Globe2,
  BookOpen,
} from "lucide-react";

import "@/styles/visa-section.css";

const services = [
  {
    icon: Scan,
    title: "Business Visa",
    description:
      "Get professional business visa guidance, document preparation, application support, and assistance for international business travel.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&h=500&fit=crop",
    href: "/visa/business",
    alt: "Business professionals discussing international business opportunities",
  },
  {
    icon: UserRound,
    title: "Working Visa",
    description:
      "Get complete work visa assistance for working abroad, including document preparation, application guidance, and visa support.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=500&fit=crop",
    href: "/visa/work",
    alt: "Professionals working together for international career opportunities",
  },
  {
    icon: Globe2,
    title: "Student Visa",
    description:
      "Get personalized student visa assistance for studying abroad, including university applications, admissions, scholarships, and visa guidance.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=700&h=500&fit=crop",
    href: "/visa/student",
    alt: "International students preparing for study abroad opportunities",
  },
  {
    icon: BookOpen,
    title: "Tourist Visa",
    description:
      "Make international travel easier with professional tourist visa consultation, documentation assistance, and application guidance.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=700&h=500&fit=crop",
    href: "/visa/tourist",
    alt: "Traveler preparing for an international trip and tourist visa",
  },
];

export default function Services() {
  return (
    <section
      aria-labelledby="visa-services-heading"
      className="visa-section"
    >
      <div className="visa-section__container">

        {/* Header */}
        <Reveal direction="up" delay={0}>
          <header className="visa-section__header">

            <div className="visa-section__eyebrow">
              <span className="visa-section__eyebrow-icon" aria-hidden="true">
                ✦
              </span>

              <span>Visa Category</span>
            </div>

            <h2 id="visa-services-heading">
              Seeking Adventure Thrills
              <span>and Excitement Await</span>
            </h2>

          </header>
        </Reveal>

        {/* Visa Cards */}
        <div
          className="visa-grid"
          aria-label="International visa services"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal
                key={service.title}
                direction="up"
                delay={index * 100}
              >
                <article className="visa-card">

                  <Link
                    href={service.href}
                    aria-label={`Learn more about ${service.title} services`}
                    className="visa-card__link"
                  >

                    {/* Image */}
                    <div className="visa-card__image-wrapper">
                      <img
                        src={service.image}
                        alt={service.alt}
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                        className="visa-card__image"
                      />
                    </div>

                    {/* Content */}
                    <div className="visa-card__content">

                      <h3>{service.title}</h3>

                      <p>{service.description}</p>

                      {/* Bottom Area */}
                      <div className="visa-card__bottom">

                        {/* Arrow */}
                        <span
                          className="visa-card__arrow"
                          aria-hidden="true"
                        >
                          <ArrowUpRight />
                        </span>

                        {/* Small Service Icon */}
                        <span
                          className="visa-card__service-icon"
                          aria-hidden="true"
                        >
                          <Icon />
                        </span>

                      </div>

                    </div>

                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}