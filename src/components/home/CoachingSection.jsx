// "use client";

// import { useEffect, useState } from "react";
// import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
// import "@/styles/coaching-section.css";

// const coachingData = [
//   {
//     title: "TOEFL Coaching",
//     description: "There are many variant of passages of engineer",
//     image:
//       "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85",
//   },
//   {
//     title: "IELTS Coaching",
//     description: "There are many variant of passages of engineer",
//     image:
//       "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=85",
//   },
//   {
//     title: "OET Coaching",
//     description: "There are many variant of passages of engineer",
//     image:
//       "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=85",
//   },
//   {
//     title: "PTE Coaching",
//     description: "There are many variant of passages of engineer",
//     image:
//       "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85",
//   },
//   {
//     title: "Duolingo Coaching",
//     description: "There are many variant of passages of engineer",
//     image:
//       "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=900&q=85",
//   },
// ];

// export default function CoachingSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [visibleCards, setVisibleCards] = useState(3);

//   useEffect(() => {
//     const updateVisibleCards = () => {
//       setVisibleCards(window.innerWidth <= 700 ? 1 : 3);
//     };

//     updateVisibleCards();

//     window.addEventListener("resize", updateVisibleCards);

//     return () => {
//       window.removeEventListener("resize", updateVisibleCards);
//     };
//   }, []);

//   useEffect(() => {
//     const maxIndex = Math.max(0, coachingData.length - visibleCards);

//     if (currentIndex > maxIndex) {
//       setCurrentIndex(maxIndex);
//     }
//   }, [visibleCards, currentIndex]);

//   const maxIndex = Math.max(0, coachingData.length - visibleCards);

//   const goNext = () => {
//     setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
//   };

//   const goPrevious = () => {
//     setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
//   };

//   return (
//     <section className="coaching-section">
//       <div className="coaching-section__container">
//         {/* =========================================
//             HEADER
//         ========================================= */}
//         <div className="coaching-section__header">
//           <div className="coaching-section__heading">
//             <div className="coaching-section__eyebrow">
//               <span className="coaching-section__eyebrow-icon">🎓</span>

//               <span>SUPPORTING COACHING</span>
//             </div>

//             <h2>
//               A Tapestry of Experiences
//               <br />
//               Cultural Encounters
//             </h2>
//           </div>

//           {/* =======================================
//               NAVIGATION
//           ======================================= */}
//           <div className="coaching-section__navigation">
//             <button
//               type="button"
//               onClick={goPrevious}
//               aria-label="Previous coaching"
//               className="coaching-section__arrow"
//             >
//               <ArrowLeft />
//             </button>

//             <button
//               type="button"
//               onClick={goNext}
//               aria-label="Next coaching"
//               className="coaching-section__arrow"
//             >
//               <ArrowRight />
//             </button>
//           </div>
//         </div>

//         {/* =========================================
//             SLIDER
//         ========================================= */}
//         <div className="coaching-slider">
//           <div
//             className="coaching-slider__track"
//             style={{
//               "--slide-index": currentIndex,
//             }}
//           >
//             {coachingData.map((item, index) => (
//               <article key={`${item.title}-${index}`} className="coaching-card">
//                 {/* Image */}
//                 <div className="coaching-card__image">
//                   <img src={item.image} alt={item.title} />
//                 </div>

//                 {/* Bottom Content */}
//                 <div className="coaching-card__content">
//                   <div className="coaching-card__text">
//                     <h3>{item.title}</h3>

//                     <p>{item.description}</p>
//                   </div>

//                   <button
//                     type="button"
//                     aria-label={`Explore ${item.title}`}
//                     className="coaching-card__button group"
//                   >
//                     <div className="transition-transform  group-hover:rotate-40">
//                       <ArrowUpRight />
//                     </div>
//                   </button>

//                   {/* <button
//                     type="button"
//                     aria-label={`Explore ${item.title}`}
//                     className="coaching-card__button "
//                   >
//                     <div className="hover:rotate-30">
//                     <ArrowUpRight />
//                     </div>
//                   </button> */}
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const coachingData = [
  {
    title: "TOEFL Coaching",
    description: "There are many variant of passages of engineer",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "IELTS Coaching",
    description: "There are many variant of passages of engineer",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "OET Coaching",
    description: "There are many variant of passages of engineer",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "PTE Coaching",
    description: "There are many variant of passages of engineer",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Duolingo Coaching",
    description: "There are many variant of passages of engineer",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=900&q=85",
  },
];

export default function CoachingSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;

      if (width <= 700) {
        setVisibleCards(1);
      } else if (width <= 900) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();

    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(0, coachingData.length - visibleCards);

    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCards, currentIndex]);

  const maxIndex = Math.max(0, coachingData.length - visibleCards);

  const goNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goPrevious = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  /*
    Slider movement:
    Desktop  = 3 cards
    Tablet   = 2 cards
    Mobile   = 1 card
  */
  const getTrackTransform = () => {
    if (visibleCards === 1) {
      return `translateX(calc(${currentIndex} * -100%))`;
    }

    if (visibleCards === 2) {
      return `translateX(calc(${currentIndex} * (-1 * ((100% - 18px) / 2 + 18px))))`;
    }

    return `translateX(calc(${currentIndex} * (-1 * ((100% - 40px) / 3 + 20px))))`;
  };

  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[var(--background-light)]
        px-0
        pb-[72px]
        pt-[70px]
        max-[1200px]:px-0
        max-[1200px]:pb-[68px]
        max-[1200px]:pt-[65px]
        max-[900px]:px-0
        max-[900px]:pb-[62px]
        max-[900px]:pt-[58px]
        max-[700px]:px-0
        max-[700px]:pb-[55px]
        max-[700px]:pt-12
        max-[450px]:px-[0px]
        max-[450px]:pb-12
        max-[450px]:pt-[42px]
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1320px]
          px-0
          lg:px-8
        "
      >
        {/* =========================================
            HEADER
        ========================================= */}
        <div
          className="
            mb-[42px]
            flex
            w-full
            px-6
            lg:px-0
            items-end
            justify-between
            gap-[30px]
            max-[1200px]:mb-[38px]
            max-[900px]:mb-8
            max-[700px]:mb-7
            max-[700px]:flex-col
            max-[700px]:items-start
            max-[700px]:gap-5
          "
        >
          {/* Heading */}
          <div className="min-w-0">
            {/* Eyebrow */}
            <div
              className="
                mb-2.5
                flex
                items-center
                gap-[6px]
                font-serif
                text-xs
                font-bold
                uppercase
                leading-none
                tracking-[0.12em]
                text-[var(--primary-dark)]
                max-[900px]:text-[11px]
                max-[700px]:mb-[9px]
                max-[700px]:text-[10px]
              "
            >
              <span
                className="
                  inline-flex
                  items-center
                  justify-center
                  text-xs
                  leading-none
                "
              >
                🎓
              </span>

              <span>SUPPORTING COACHING</span>
            </div>

            {/* Main Heading */}
            <h2
              className="
                m-0
                font-serif
                text-[clamp(38px,3.45vw,54px)]
                font-bold
                leading-[1.08]
                tracking-[-0.025em]
                text-[var(--primary)]
                max-[1200px]:text-[45px]
                max-[900px]:text-[37px]
                max-[700px]:text-[31px]
                max-[700px]:leading-[1.1]
                max-[450px]:text-[27px]
              "
            >
              A Tapestry of Experiences
              <br />
              Cultural Encounters
            </h2>
          </div>

          {/* =======================================
              NAVIGATION
          ======================================= */}
          <div
            className="
              flex
              shrink-0
              items-center
              gap-[14px]
              pb-1
              max-[700px]:self-end
              max-[700px]:pb-0
            "
          >
            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous coaching"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border-2
                border-[var(--border)]
                bg-transparent
                p-0
                text-[var(--primary-dark)]
                transition-[background-color,border-color,color]
                duration-[220ms]
                ease-out
                hover:border-[var(--primary)]
                hover:bg-[var(--primary)]
                hover:text-[var(--surface)]
                cursor-pointer
              "
            >
              <ArrowLeft className="h-[15px] w-[15px]" />
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next coaching"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border-2
                border-[var(--border)]
                bg-transparent
                p-0
                text-[var(--primary-dark)]
                transition-[background-color,border-color,color]
                duration-[220ms]
                ease-out
                hover:border-[var(--primary)]
                hover:bg-[var(--primary)]
                hover:text-[var(--surface)]
                cursor-pointer
              "
            >
              <ArrowRight className="h-[15px] w-[15px]" />
            </button>
          </div>
        </div>

        {/* =========================================
            SLIDER
        ========================================= */}
        <div className="w-full overflow-hidden">
          <div
            className={`
              flex
              w-full
              will-change-transform
              transition-transform
              duration-500
              ease-in-out
              ${
                visibleCards === 1
                  ? "gap-0"
                  : visibleCards === 2
                    ? "gap-[18px]"
                    : "gap-5"
              }
            `}
            style={{
              transform: getTrackTransform(),
            }}
          >
            {coachingData.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className={`
                  relative
                  shrink-0
                  overflow-hidden
                  rounded-[10px]
                  bg-transparent
                  ${
                    visibleCards === 1
                      ? "w-full basis-full"
                      : visibleCards === 2
                        ? "w-[calc((100%-18px)/2)] basis-[calc((100%-18px)/2)]"
                        : "w-[calc((100%-40px)/3)] basis-[calc((100%-40px)/3)]"
                  }
                  h-[330px]
                  max-[1200px]:h-[315px]
                  max-[900px]:h-[315px]
                  max-[700px]:h-[390px]
                  max-[700px]:rounded-xl
                  max-[450px]:h-[370px]
                `}
              >
                {/* =========================================
                    IMAGE
                ========================================= */}
                <div
                  className="
                    h-full
                    w-full
                    overflow-hidden
                    rounded-[10px]
                    max-[700px]:rounded-xl
                  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="
                      block
                      h-full
                      w-full
                      rounded-[10px]
                      object-cover
                      object-center
                      transition-transform
                      duration-[450ms]
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      hover:scale-[1.045]
                      max-[700px]:rounded-xl
                    "
                  />
                </div>

                {/* =========================================
                    BOTTOM CONTENT
                ========================================= */}
                <div
                  className="
                            absolute
                             bottom-0    
                              left-[40px]            
                             lg:left-[19px]                     
                             right-0                     
                             z-[2]                     
                             flex                     
                             min-h-[112px]                     
                             items-center                     
                             justify-between            

                             gap-4                     
                             rounded-tl-[21px]                     
                             rounded-br-[10px]                    
                             bg-[var(--surface)]                     
                             px-6                     
                             py-5                     
                             pl-[27px]                     
                             max-[1200px]:left-[17px]                     
                             max-[1200px]:px-5                     
                             max-[1200px]:py-[18px]                     
                             max-[1200px]:pl-6                     
                             max-[900px]:left-[15px]                    
                              max-[900px]:min-h-[105px]                     
                              max-[900px]:px-[18px]                     
                              max-[900px]:py-[17px]                     
                              max-[900px]:pl-[22px]                    
                               max-[700px]:left-3                    
                                max-[700px]:min-h-[125px]                    
                                 max-[700px]:rounded-tl-[22px]                    
                                  max-[700px]:rounded-br-xl                     
                                  max-[700px]:px-5                     
                                  max-[700px]:py-5                     
                                  ax-[700px]:pl-6                     
                                  max-[450px]:left-2.5                     
                                  max-[450px]:min-h-[116px]                   
                                   max-[450px]:px-4                    
                                    max-[450px]:py-[18px]                 
                                        max-[450px]:pl-[21px]                   
                                               "
                >
                  {/* Text */}
                  <div className="min-w-0">
                    <h3
                      className="
                        m-0
                        mb-[9px]
                        font-serif
                        text-xl
                        font-bold
                        leading-[1.15]
                        tracking-[-0.01em]
                        text-[var(--primary-dark)]
                        max-[1200px]:text-lg
                        max-[900px]:text-[17px]
                        max-[700px]:mb-[9px]
                        max-[700px]:text-[21px]
                        max-[450px]:text-[19px]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        m-0
                        max-w-[255px]
                        font-serif
                        text-[13px]
                        font-normal
                        leading-[1.55]
                        text-[var(--text-secondary)]
                        max-[1200px]:text-xs
                        max-[900px]:max-w-[190px]
                        max-[900px]:text-[11px]
                        max-[700px]:max-w-[225px]
                        max-[700px]:text-[13px]
                        max-[700px]:leading-[1.5]
                        max-[450px]:max-w-[195px]
                        max-[450px]:text-xs
                      "
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* =========================================
                      CARD ARROW
                  ========================================= */}
                  <button
                    type="button"
                    aria-label={`Explore ${item.title}`}
                    className="
    group
    ml-auto
    flex
    h-12
    w-20
    shrink-0
    items-center
    justify-center
    rounded-[14px]
    border-2
    border-[var(--primary)]
    bg-[var(--primary)]
    p-0
    text-white
    cursor-pointer

    transition-[background-color,border-color,color]
    duration-[220ms]
    ease-out

    lg:border-[var(--border)]
    lg:bg-[var(--surface)]
    lg:text-[var(--primary-dark)]
    lg:hover:border-[var(--primary)]
    lg:hover:bg-[var(--primary)]
    lg:hover:text-white

    max-[900px]:h-11
    max-[900px]:w-20

    max-[700px]:h-14
    max-[700px]:w-[52px]
    max-[700px]:rounded-[15px]

    max-[450px]:h-[53px]
    max-[450px]:w-20
  "
                  >
                    <div
                      className="
                        transition-transform  duration-300  ease-[cubic-bezier(0.22,1,0.36,1)] lg:group-hover:rotate-[40deg] rotate-45  "
                    >
                      <ArrowUpRight
                        className="
                          h-[17px]
                          w-[30px]
                          max-[700px]:h-[18px]
                          max-[700px]:w-[18px]
                        "
                      />
                    </div>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
