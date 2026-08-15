"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import "@/styles/coaching-section.css";

const coachingData = [
  {
    title: "TOEFL Coaching",
    description:
      "There are many variant of passages of engineer",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "IELTS Coaching",
    description:
      "There are many variant of passages of engineer",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "OET Coaching",
    description:
      "There are many variant of passages of engineer",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "PTE Coaching",
    description:
      "There are many variant of passages of engineer",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Duolingo Coaching",
    description:
      "There are many variant of passages of engineer",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=900&q=85",
  },
];

export default function CoachingSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateVisibleCards = () => {
      setVisibleCards(window.innerWidth <= 700 ? 1 : 3);
    };

    updateVisibleCards();

    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(
      0,
      coachingData.length - visibleCards
    );

    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCards, currentIndex]);

  const maxIndex = Math.max(
    0,
    coachingData.length - visibleCards
  );

  const goNext = () => {
    setCurrentIndex((prev) =>
      prev >= maxIndex ? 0 : prev + 1
    );
  };

  const goPrevious = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? maxIndex : prev - 1
    );
  };

  return (
    <section className="coaching-section">
      <div className="coaching-section__container">

        {/* =========================================
            HEADER
        ========================================= */}
        <div className="coaching-section__header">

          <div className="coaching-section__heading">

            <div className="coaching-section__eyebrow">
              <span className="coaching-section__eyebrow-icon">
                🎓
              </span>

              <span>SUPPORTING COACHING</span>
            </div>

            <h2>
              A Tapestry of Experiences
              <br />
              Cultural Encounters
            </h2>

          </div>

          {/* =======================================
              NAVIGATION
          ======================================= */}
          <div className="coaching-section__navigation">

            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous coaching"
              className="coaching-section__arrow"
            >
              <ArrowLeft />
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next coaching"
              className="coaching-section__arrow"
            >
              <ArrowRight />
            </button>

          </div>

        </div>

        {/* =========================================
            SLIDER
        ========================================= */}
        <div className="coaching-slider">

          <div
            className="coaching-slider__track"
            style={{
              "--slide-index": currentIndex,
            }}
          >
            {coachingData.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="coaching-card"
              >

                {/* Image */}
                <div className="coaching-card__image">
                  <img
                    src={item.image}
                    alt={item.title}
                  />
                </div>

                {/* Bottom Content */}
                <div className="coaching-card__content">

                  <div className="coaching-card__text">
                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
                  </div>

                  <button
                    type="button"
                    aria-label={`Explore ${item.title}`}
                    className="coaching-card__button"
                  >
                    <ArrowUpRight />
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