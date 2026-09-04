// "use client";

// import Link from "next/link";
// import Reveal from "@/components/shared/Reveal";
// import {
//   ArrowUpRight,
//   Scan,
//   UserRound,
//   Globe2,
//   BookOpen,
// } from "lucide-react";

// import "@/styles/visa-section.css";

// const services = [
//   {
//     icon: Scan,
//     title: "Business Visa",
//     description:
//       "Get professional business visa guidance, document preparation, application support, and assistance for international business travel.",
//     image:
//       "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&h=500&fit=crop",
//     href: "/visa/business",
//     alt: "Business professionals discussing international business opportunities",
//   },
//   {
//     icon: UserRound,
//     title: "Working Visa",
//     description:
//       "Get complete work visa assistance for working abroad, including document preparation, application guidance, and visa support.",
//     image:
//       "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=500&fit=crop",
//     href: "/visa/work",
//     alt: "Professionals working together for international career opportunities",
//   },
//   {
//     icon: Globe2,
//     title: "Student Visa",
//     description:
//       "Get personalized student visa assistance for studying abroad, including university applications, admissions, scholarships, and visa guidance.",
//     image:
//       "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=700&h=500&fit=crop",
//     href: "/visa/student",
//     alt: "International students preparing for study abroad opportunities",
//   },
//   {
//     icon: BookOpen,
//     title: "Tourist Visa",
//     description:
//       "Make international travel easier with professional tourist visa consultation, documentation assistance, and application guidance.",
//     image:
//       "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=700&h=500&fit=crop",
//     href: "/visa/tourist",
//     alt: "Traveler preparing for an international trip and tourist visa",
//   },
// ];

// export default function Services() {
//   return (
//     <section
//       aria-labelledby="visa-services-heading"
//       className="visa-section"
//     >
//       <div className="visa-section__container">

//         {/* Header */}
//         <Reveal direction="up" delay={0}>
//           <header className="visa-section__header">

//             <div className="visa-section__eyebrow">
//               <span className="visa-section__eyebrow-icon" aria-hidden="true">
//                 ✦
//               </span>

//               <span>Visa Category</span>
//             </div>

//             <h2 id="visa-services-heading">
//               Seeking Adventure Thrills
//               <span>and Excitement Await</span>
//             </h2>

//           </header>
//         </Reveal>

//         {/* Visa Cards */}
//         <div
//           className="visa-grid"
//           aria-label="International visa services"
//         >
//           {services.map((service, index) => {
//             const Icon = service.icon;

//             return (
//               <Reveal
//                 key={service.title}
//                 direction="up"
//                 delay={index * 100}
//               >
//                 <article className="visa-card">

//                   <Link
//                     href={service.href}
//                     aria-label={`Learn more about ${service.title} services`}
//                     className="visa-card__link"
//                   >

//                     {/* Image */}
//                     <div className="visa-card__image-wrapper">
//                       <img
//                         src={service.image}
//                         alt={service.alt}
//                         loading={index === 0 ? "eager" : "lazy"}
//                         decoding="async"
//                         className="visa-card__image"
//                       />
//                     </div>

//                     {/* Content */}
//                     <div className="visa-card__content">

//                       <h3>{service.title}</h3>

//                       <p>{service.description}</p>

//                       {/* Bottom Area */}
//                       <div className="visa-card__bottom">

//                         {/* Arrow */}
//                         <span
//                           className="visa-card__arrow"
//                           aria-hidden="true"
//                         >
//                           <ArrowUpRight />
//                         </span>

//                         {/* Small Service Icon */}
//                         <span
//                           className="visa-card__service-icon"
//                           aria-hidden="true"
//                         >
//                           <Icon />
//                         </span>

//                       </div>

//                     </div>

//                   </Link>
//                 </article>
//               </Reveal>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }
"use client";

import Link from "next/link";
import Reveal from "@/components/shared/Reveal";
import { ArrowUpRight, Scan, UserRound, Globe2, BookOpen } from "lucide-react";

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
      className="relative w-full overflow-hidden bg-[var(--background-light)]  py-12 sm:py-16 lg:py-[70px]"
    >
      <div className="mx-auto w-full max-w-[1320px] px-0   lg:px-8">
        {/* Header */}
        <Reveal direction="up" delay={0}>
          <header className="mb-8 text-center sm:mb-10 lg:mb-12">
            <div className="mb-3 inline-flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase leading-none tracking-[0.14em] text-[var(--primary)]">
              <span className="text-[9px] leading-none" aria-hidden="true">
                ✦
              </span>

              <span>Visa Category</span>
            </div>

            <h2
              id="visa-services-heading"
              className="m-0 font-serif text-[clamp(29px,3vw,48px)] font-bold leading-[1.08] tracking-[-1px] text-[var(--primary)]"
            >
              Seeking Adventure Thrills
              <span className="block">and Excitement Await</span>
            </h2>
          </header>
        </Reveal>

        {/* Visa Cards */}
        <div
          className="grid grid-cols-1 gap-3.5 sm:grid-cols-1 md:grid-cols-2 md:gap-x-10 md:gap-y-6 lg:gap-x-10 lg:gap-y-6 "
          aria-label="International visa services"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} direction="up" delay={index * 100}>
                <article className="h-full w-full ">
                  <Link
                    href={service.href}
                    aria-label={`Learn more about ${service.title} services`}
                    className="group relative flex h-full w-full flex-col overflow-hidden rounded-[14px] border border-[color-mix(in_srgb,var(--primary-dark)_14%,transparent)] bg-white/[0.18] p-2.5 no-underline transition-[border-color,box-shadow] duration-250 ease-out hover:border-[color-mix(in_srgb,var(--primary-dark)_22%,transparent)] hover:shadow-[0_10px_28px_color-mix(in_srgb,var(--primary-dark)_6%,transparent)] sm:flex-row sm:rounded-[15px] sm:p-2.5 md:h-[245px] lg:h-[275px] xl:h-[292px] xl:rounded-[18px] xl:p-2"
                  >
                    {/* Image */}
                    <div className="relative h-[165px] w-full flex-shrink-0 overflow-hidden rounded-[11px] sm:h-full sm:w-[220px] md:w-[220px] lg:w-[310px] lg:rounded-xl xl:w-[360px] xl:rounded-[15px]">
                      <img
                        src={service.image}
                        alt={service.alt}
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                        className="block h-full w-full scale-100 object-cover transition-transform duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045]"
                      />
                    </div>

                    {/* Content */}

                    <div className="relative flex min-w-0 flex-1 flex-col px-0 pb-0 pt-3.5 sm:px-4 sm:pb-0 sm:pt-4 md:px-0 lg:px-[16px] lg:pt-6 xl:px-0 xl:pt-7 xl:pl-6">
                      <h3 className="m-0 mb-1.5 font-serif text-[17px] font-bold leading-[1.2] text-[var(--primary)] sm:mb-2.5 md:mb-2.5 md:text-xl lg:text-2xl xl:text-[27px]">
                        {service.title}
                      </h3>
                      <p className="m-0 line-clamp-6 max-w-full font-serif text-[10px] leading-[1.35] text-[var(--text-secondary)] sm:text-xs md:text-xs lg:text-sm lg:leading-[1.3] xl:max-w-[320px] xl:text-base xl:leading-[1.3]">
                        {/* <p className="m-0 line-clamp-4 max-w-full font-serif text-[10px] leading-[1.55] text-[var(--text-secondary)] sm:text-xs md:text-xs lg:text-sm lg:leading-[1.65] xl:max-w-[320px] xl:text-base xl:leading-[1.75]"> */}
                        {service.description}
                      </p>

                      {/* Bottom Area */}
                      <div className="mt-auto flex items-center justify-between pb-0 pt-2  sm:pb-0 sm:pt-2">
                        {/* Arrow */}
                        <span
                          className="
                                     flex h-[30px] w-[60px] flex-shrink-0 items-center justify-center
                                     rounded-[10px]
                                     border-[1.5px] border-[var(--primary)]
                                     bg-transparent text-[var(--primary)]
                                     transition-colors duration-250 ease-out
                                     group-hover:border-[var(--primary)]
                                     group-hover:bg-[var(--primary)]
                                     group-hover:text-white
                                     sm:h-[38px] sm:w-[70px] sm:rounded-[13px]
                                     lg:h-[38px] lg:w-[70px]
                                     xl:h-[38px] xl:w-[70px] xl:rounded-[13px]
                                     "
                          aria-hidden="true"
                        >
                          <ArrowUpRight
                            className="
                              h-[15px] w-[15px] rotate-45
                              transition-transform duration-300
                              ease-[cubic-bezier(0.22,1,0.36,1)]
                              group-hover:rotate-0
                              sm:h-[18px] sm:w-[18px] sm:rotate-45
                              lg:h-[18px] lg:w-[18px]
                              xl:h-[18px] xl:w-[18px]
                            "
                          />
                        </span>

                        {/* Small Service Icon */}
                        <span
                          className="
      flex h-8 w-16 flex-shrink-0 items-center  justify-center
      text-[var(--primary-dark)]
      sm:h-10 sm:w-30
      lg:h-10 lg:w-30
      xl:h-10 xl:w-30
    "
                          aria-hidden="true"
                        >
                          <Icon
                            className="
        h-[30px] w-[30px] stroke-[1.25]
        sm:h-[38px] sm:w-[38px]
        lg:h-[38px] lg:w-[38px]
        xl:h-[38px] xl:w-[38px]
      "
                          />
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
