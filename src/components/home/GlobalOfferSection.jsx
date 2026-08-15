"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "@/styles/global-offer-section.css";

const stats = [
  {
    value: 10,
    suffix: "k+",
    label: "Complete project",
  },
  {
    value: 20,
    suffix: "+",
    label: "Team member",
  },
  {
    value: 5,
    suffix: "k+",
    label: "Winning award",
  },
  {
    value: 100,
    suffix: "+",
    label: "Complete project",
  },
];

function AnimatedNumber({ value, suffix, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    const duration = 1600;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Smooth ease-out
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [start, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function GlobalOfferSection() {
  const sectionRef = useRef(null);
  const [counterStarted, setCounterStarted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCounterStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="global-offer-section">
      <div className="global-offer-section__container">
        {/* =========================================
            LEFT GIRL IMAGE
        ========================================= */}
        <div className="global-offer-section__girl">
          <img
            src="/images/gl.png"
            alt="Student holding passport"
            className="global-offer-section__girl-image"
          />

          {/* Small green dot from reference */}
          <span className="global-offer-section__dot" aria-hidden="true" />
        </div>

        {/* =========================================
            RIGHT SIDE
        ========================================= */}
        <div className="global-offer-section__right">
          {/* =======================================
              OFFER CARD
          ======================================= */}
          <div className="global-offer-card">
            <div className="global-offer-card__content">
              {/* Globe icon */}
              <div className="global-offer-card__icon">
                <Globe2 />
              </div>

              <h2>Get our best offers quickly</h2>

              <p>
                Discover the best study abroad opportunities and get expert
                guidance for your international education journey.
              </p>

              <Link href="/contact" className="global-offer-card__button">
                <span>Contact us</span>
                <ArrowRight />
              </Link>
            </div>

            {/* Global image */}
            <div className="global-offer-card__image">
              <img
                src="/images/global.png"
                alt="Global study abroad travel"
                className="global-offer-card__global-image"
              />
            </div>
          </div>

          {/* =======================================
              STATISTICS
          ======================================= */}
          <div className="global-stats">
            {stats.map((stat) => (
              <div key={`${stat.value}-${stat.label}`} className="global-stat">
                <div className="global-stat__number">
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    start={counterStarted}
                  />
                </div>

                <div className="global-stat__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
