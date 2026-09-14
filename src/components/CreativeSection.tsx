"use client";

import { useState } from "react";
import Image from "next/image";
import { creativeWork, type CreativeWork } from "@/data/profile";
import { Modal } from "@/components/Modal";

function GoArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CreativeIcon({ kind }: { kind: CreativeWork["id"] }) {
  if (kind === "graphic-thumbnails") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 20h4l10.2-10.2a2.8 2.8 0 0 0-4-4L4 16v4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M13.2 6.8 17.2 10.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M16.2 17.5h4.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (kind === "publication-design") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7 4.5h10a2 2 0 0 1 2 2V19l-3-1.6-3 1.6-3-1.6-3 1.6V6.5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9.2 9h5.6M9.2 12.2h5.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="12" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 20h8M12 17v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M10.2 9.2 15 11l-4.8 1.8V9.2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function CreativeSection() {
  const [active, setActive] = useState<CreativeWork | null>(null);

  return (
    <section id="creative" className="section creative-band">
      <div className="creative-head">
        <div>
          <div className="section-rule creative-rule" />
          <h2 className="display creative-title">
            <span className="creative-title-strong">Design</span>{" "}
            <span className="creative-title-soft">&amp; creative work</span>
          </h2>
          <p className="creative-lede">
            I also do design work — thumbnails, layouts, presentations. Logistics is still the main job.
          </p>
        </div>
        <p className="creative-aside">
          <span>Thumbnails</span>
          <span>Layouts</span>
          <span>Presentations</span>
        </p>
      </div>

      <div className="creative-grid">
        {creativeWork.map((item, i) => (
          <article key={item.id} className="creative-card">
            <button
              type="button"
              className="creative-card-hit"
              onClick={() => setActive(item)}
              aria-label={`${item.title}. Open details.`}
            >
              <span className="creative-card-media">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  quality={70}
                  loading="lazy"
                  draggable={false}
                  className="creative-card-img"
                />
                <span className="creative-card-wash" aria-hidden="true" />
                <span className="creative-card-index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                  <i />
                </span>
              </span>
              <span className="creative-card-icon" aria-hidden="true">
                <CreativeIcon kind={item.id} />
              </span>
              <span className="creative-card-body">
                <span className="creative-card-name">{item.title}</span>
                <span className="creative-card-summary">{item.summary}</span>
                <span className="creative-card-action">
                  <span className="creative-card-pill">View details</span>
                  <span className="creative-card-go">
                    <GoArrow />
                  </span>
                </span>
              </span>
            </button>
          </article>
        ))}
      </div>

      {active ? (
        <Modal open title={active.title} onClose={() => setActive(null)}>
          <div className="space-y-4">
            <p>{active.summary}</p>
            <ul className="flex flex-wrap gap-2">
              {active.tools.map((tool) => (
                <li key={tool} className="chip">
                  {tool}
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {active.details.map((detail) => (
                <li key={detail} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </Modal>
      ) : null}
    </section>
  );
}
