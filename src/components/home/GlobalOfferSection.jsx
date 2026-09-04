"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 10,
    suffix: "00+",
    label: "Students Guided",
  },
  {
    value: 20,
    suffix: "+",
    label: "Countries Covered",
  },
  {
    value: 5,
    suffix: "k+",
    label: "Winning award",
  },
  {
    value: 100,
    suffix: "+",
    label: "Partner Universities",
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
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-[var(--background-light)] py-[50px] sm:py-[50px] md:py-[60px] lg:py-[70px] xl:py-[85px]"
    >
      <div className="mx-auto grid w-full max-w-[1320px] px-0 rounded-2xl lg:px-8 grid-cols-1 items-stretch gap-0 md:grid-cols-[280px_minmax(0,1fr)] md:gap-[18px] lg:grid-cols-[310px_minmax(0,1fr)] lg:gap-[22px] xl:grid-cols-[355px_minmax(0,1fr)] xl:gap-[30px]">
        {/* =========================================
            LEFT GIRL IMAGE
        ========================================= */}

        <div className="relative h-[350px] overflow-hidden lg:rounded-2xl rounded-none sm:h-[390px] md:h-auto md:min-h-[475px] lg:min-h-[500px] xl:min-h-[535px]">
          <img
            src="/images/gl.png"
            alt="Student holding passport"
            className="block h-full w-full object-cover object-center"
          />
        </div>

        {/* =========================================
            RIGHT SIDE
        ========================================= */}
        <div className="flex min-w-0 flex-col gap-4 md:gap-[26px]">
          {/* =======================================
              OFFER CARD
          ======================================= */}
          <div className="relative min-h-[390px] overflow-hidden rounded-[19px] bg-[var(--surface)] md:flex md:min-h-[280px] md:items-stretch lg:min-h-[300px] xl:min-h-[325px]">
            <div className="relative z-[2] w-full px-6 pb-5 pt-7 md:w-[62%] md:px-[15px] md:pb-6 md:pl-8 md:pt-7 lg:pl-10 xl:w-[56%] xl:pb-[30px] xl:pl-[53px] xl:pr-5 xl:pt-[35px]">
              {/* Globe icon */}
              <div className="mb-3.5 flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[var(--primary)] text-[var(--surface)] xl:h-[70px] xl:w-[70px]">
                <Globe2 className="h-[31px] w-[31px] stroke-[1.35] xl:h-[38px] xl:w-[38px]" />
              </div>

              <h2 className="m-0 mb-3 font-serif text-xl font-bold leading-[1.25] text-[var(--primary)] md:text-[19px] xl:text-xl">
                Get our best offers quickly
              </h2>

              <p className="m-0 max-w-full font-serif text-[13px] leading-[1.8] text-[var(--text-secondary)] md:text-xs xl:max-w-[430px] xl:text-sm">
                Discover the best study abroad opportunities and get expert
                guidance for your international education journey.
              </p>

              <Link
                href="/contact"
                className="group mt-[18px] inline-flex h-12 min-w-[132px] items-center justify-center gap-3 rounded-full border-2 border-[var(--border)] bg-transparent px-6 font-serif text-[13px] font-bold text-[var(--primary-dark)] no-underline transition-colors duration-200 ease-out hover:border-[var(--primary)] hover:text-[var(--primary-dark)] md:mt-[17px] md:h-12 md:min-w-[115px] xl:mt-[22px] xl:h-14"
              >
                <span>Contact us</span>
                <ArrowRight className="h-[17px] w-[17px] transition-transform duration-200 ease-out group-hover:translate-x-[3px]" />
              </Link>
            </div>

            {/* Global image */}
            <div className="absolute lg:bottom-0 xl:right-0 right-5  h-[190px] w-full md:top-0 md:h-full md:w-[38%] xl:w-1/2 ">
              <img
                src="/images/global.png"
                alt="Global study abroad travel"
                className="block h-full w-full object-contain object-center object-bottom md:object-center"
              />
            </div>
          </div>

          {/* =======================================
              STATISTICS
          ======================================= */}
   
          <div className="grid w-full grid-cols-2 items-center gap-x-4 gap-y-7 rounded-none lg:rounded-[19px]  bg-[var(--primary)] px-5 py-[30px] md:min-h-[155px] md:grid-cols-4 md:gap-x-[22px] md:px-[22px] md:py-5 lg:px-[30px] xl:min-h-[175px] xl:px-[42px] xl:py-[25px]">
            {stats.map((stat) => (
              <div
                key={`${stat.value}-${stat.label}`}
                className="min-w-0 text-center md:text-center"
              >
                <div className="mb-2 font-serif text-[35px] font-bold leading-none text-[var(--surface)] md:text-[32px] xl:text-[clamp(36px,3vw,47px)]">
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    start={counterStarted}
                  />
                </div>

                <div className="font-serif text-xs font-bold leading-[1.3] text-[var(--surface)] md:text-[11px] xl:text-[13px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
