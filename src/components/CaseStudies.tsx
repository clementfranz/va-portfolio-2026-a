"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { caseStudies, type CaseStudy } from "@/data/profile";
import { Modal } from "@/components/Modal";
import { CaseStudyCover, CaseStudyLogo } from "@/components/CaseStudyArt";
import { StudyStepsCarousel } from "@/components/StudyStepsCarousel";

function CaseStudyHeading({ study, titleId }: { study: CaseStudy; titleId: string }) {
  return (
    <div className="study-modal-head">
      <div className="study-modal-brand">
        <CaseStudyLogo studyId={study.id} />
        <div>
          <h3 id={titleId} className="study-modal-title">
            {study.title}
          </h3>
          <p className="study-modal-kicker">{study.category}</p>
          <p className="study-modal-tagline">{study.tagline}</p>
        </div>
      </div>
      <div className="study-modal-cover" aria-hidden="true">
        <CaseStudyCover studyId={study.id} />
      </div>
    </div>
  );
}

function Chevron({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      {dir === "prev" ? (
        <path d="M11.5 3.5L6 9l5.5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M6.5 3.5L12 9l-5.5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

function GoArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function animateScrollLeft(scroller: HTMLElement, left: number, duration = 220) {
  const from = scroller.scrollLeft;
  const delta = left - from;
  if (Math.abs(delta) < 1) return () => undefined;

  if (prefersReducedMotion()) {
    scroller.scrollLeft = left;
    return () => undefined;
  }

  const previousSnap = scroller.style.scrollSnapType;
  scroller.style.scrollSnapType = "none";
  const start = performance.now();
  let frame = 0;
  const easeOut = (t: number) => 1 - (1 - t) ** 3;

  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    scroller.scrollLeft = from + delta * easeOut(t);
    if (t < 1) {
      frame = requestAnimationFrame(tick);
      return;
    }
    scroller.style.scrollSnapType = previousSnap;
  };

  frame = requestAnimationFrame(tick);
  return () => {
    cancelAnimationFrame(frame);
    scroller.style.scrollSnapType = previousSnap;
  };
}

export function CaseStudies() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const stopScrollRef = useRef<(() => void) | undefined>(undefined);
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState<CaseStudy | null>(null);
  const last = caseStudies.length - 1;

  const commitIndex = (next: number) => {
    if (indexRef.current === next) return;
    indexRef.current = next;
    setIndex(next);
  };

  const goTo = (next: number) => {
    const clamped = Math.max(0, Math.min(last, next));
    const scroller = scrollerRef.current;
    const slide = scroller?.children[clamped] as HTMLElement | undefined;
    const origin = scroller?.children[0] as HTMLElement | undefined;
    if (!scroller || !slide || !origin) return;
    stopScrollRef.current?.();
    stopScrollRef.current = animateScrollLeft(scroller, slide.offsetLeft - origin.offsetLeft);
    commitIndex(clamped);
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const nearestIndex = () => {
      const slides = [...scroller.children] as HTMLElement[];
      const origin = slides[0]?.offsetLeft ?? 0;
      let nearest = 0;
      let best = Infinity;
      slides.forEach((slide, i) => {
        const distance = Math.abs(slide.offsetLeft - origin - scroller.scrollLeft);
        if (distance < best) {
          best = distance;
          nearest = i;
        }
      });
      return nearest;
    };

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        commitIndex(nearestIndex());
      });
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      stopScrollRef.current?.();
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="case-studies" className="section study-band">
      <div className="study-head">
        <div>
          <div className="section-rule study-rule" />
          <h2 className="display study-title">
            <span className="study-title-strong">Case</span>{" "}
            <span className="study-title-soft">studies</span>
          </h2>
          <p className="study-lede">
            A few pieces of work. Open a card if you want the challenge, what I did, and how it helped.
          </p>
        </div>
        <p className="study-aside">
          <span>Logistics</span>
          <span>Automation</span>
          <span>Delivery</span>
        </p>
      </div>

      <div className="study-carousel-shell">
        <button
          type="button"
          className="study-nav-btn study-nav-side study-nav-prev"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          aria-label="Previous case study"
        >
          <Chevron dir="prev" />
        </button>

        <div
          ref={scrollerRef}
          className="study-carousel"
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Case studies"
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
          {caseStudies.map((study, i) => (
            <article key={study.id} className="study-slide">
              <button
                type="button"
                className="study-card"
                onClick={() => setActive(study)}
                aria-label={`${study.title}. Open full case study.`}
              >
                <Image
                  src={study.image}
                  alt={study.imageAlt}
                  fill
                  sizes="(min-width: 768px) 720px, 88vw"
                  quality={70}
                  draggable={false}
                  className="study-card-img"
                  priority={i === 0}
                  loading={i < 2 ? "eager" : "lazy"}
                />
                <span className="study-card-veil" aria-hidden="true" />
                <span className="study-card-index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                  <i />
                </span>
                <span className="study-card-copy">
                  <span className="study-card-kicker">{study.category}</span>
                  <span className="study-card-title">{study.title}</span>
                  <span className="study-card-summary">{study.result}</span>
                  <span className="study-card-action">
                    <span>View details</span>
                    <span className="study-card-go" aria-hidden="true">
                      <GoArrow />
                    </span>
                  </span>
                </span>
              </button>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="study-nav-btn study-nav-side study-nav-next"
          onClick={() => goTo(index + 1)}
          disabled={index === last}
          aria-label="Next case study"
        >
          <Chevron dir="next" />
        </button>
      </div>

      <div className="study-foot">
        <p className="study-foot-note">A few different kinds of work.</p>
        <div className="study-dots" role="tablist" aria-label="Case study slides">
          {caseStudies.map((study, i) => (
            <button
              key={study.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show ${study.title}`}
              className={`study-dot ${i === index ? "is-active" : ""}`}
              aria-current={i === index ? "true" : undefined}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <button
          type="button"
          className="study-view-all"
          onClick={() => goTo(index === last ? 0 : last)}
        >
          View all case studies
          <span aria-hidden="true">→</span>
        </button>
      </div>

      {active ? (
        <Modal
          open
          title={active.title}
          panelClassName="study-modal-panel"
          heading={(titleId) => <CaseStudyHeading study={active} titleId={titleId} />}
          onClose={() => setActive(null)}
        >
          <StudyStepsCarousel key={active.id} study={active} />
        </Modal>
      ) : null}
    </section>
  );
}
