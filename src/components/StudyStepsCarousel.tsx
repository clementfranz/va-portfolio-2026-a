"use client";

import { useState } from "react";
import Image from "next/image";
import { type CaseStudy } from "@/data/profile";
import { StudyFieldIcon } from "@/components/CaseStudyArt";

const STEPS = [
  { key: "challenge", heading: "Challenge", kind: "challenge" },
  { key: "approach", heading: "Approach", kind: "approach" },
  { key: "whatIDid", heading: "What I did", kind: "did" },
  { key: "result", heading: "What changed", kind: "result" },
] as const;

function Chevron({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      {dir === "prev" ? (
        <path d="M11.5 3.5L6 9l5.5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M6.5 3.5L12 9l-5.5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

export function StudyStepsCarousel({ study }: { study: CaseStudy }) {
  const [index, setIndex] = useState(0);
  const last = STEPS.length - 1;

  const goTo = (next: number) => {
    setIndex(Math.max(0, Math.min(last, next)));
  };

  return (
    <div
      className="study-steps"
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label={`${study.title} steps`}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          goTo(index + 1);
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          goTo(index - 1);
        }
      }}
    >
      <div className="study-steps-frame">
        <div className="study-steps-track" style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}>
          {STEPS.map((item, i) => {
            const slide = study.stepImages[item.key];
            return (
              <div key={item.key} className="study-step-media" aria-hidden={i !== index}>
                <Image
                  src={slide.image}
                  alt={i === index ? slide.imageAlt : ""}
                  fill
                  sizes="(min-width: 768px) 640px, 92vw"
                  quality={70}
                  priority={i === 0}
                  className="study-step-img"
                />
                <span className="study-step-wash" aria-hidden="true" />
                <span className="study-step-index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <article className="study-detail study-step-copy">
                  <StudyFieldIcon kind={item.kind} />
                  <div>
                    <h4>{item.heading}</h4>
                    <p>{study[item.key]}</p>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          className="study-step-nav study-step-nav-prev"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          aria-label="Previous step"
        >
          <Chevron dir="prev" />
        </button>
        <button
          type="button"
          className="study-step-nav study-step-nav-next"
          onClick={() => goTo(index + 1)}
          disabled={index === last}
          aria-label="Next step"
        >
          <Chevron dir="next" />
        </button>
      </div>

      <div className="study-step-dots" role="tablist" aria-label="Case study steps">
        {STEPS.map((item, i) => (
          <button
            key={item.key}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show ${item.heading}`}
            className={`study-step-dot ${i === index ? "is-active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
