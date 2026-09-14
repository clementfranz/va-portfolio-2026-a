"use client";

import Image from "next/image";
import { useEffect, useRef, type ReactNode } from "react";
import { profile } from "@/data/profile";

export function HeroStage({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = root.getBoundingClientRect();
      const travel = Math.max(rect.height, 1);
      const progress = Math.max(-1.15, Math.min(1.15, -rect.top / travel));
      root.style.setProperty("--hero-bg-shift", `${progress * 72}`);
      root.style.setProperty("--hero-fg-shift", `${progress * 28}`);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={rootRef} className="hero-section">
      {children}
    </section>
  );
}

export function HeroBackdrop() {
  return (
    <div className="hero-bg" aria-hidden="true">
      <div className="hero-bg-shift">
        <Image
          src={profile.heroBackgroundPath}
          alt=""
          fill
          priority
          draggable={false}
          sizes="(min-width: 1024px) 1100px, 100vw"
          className="hero-bg-img"
        />
      </div>
      <div className="hero-bg-veil" />
    </div>
  );
}

export function HeroSubject() {
  return (
    <div className="hero-fg">
      <div className="hero-fg-intro">
        <Image
          src={profile.portraitPath}
          alt={`${profile.name}, Logistics and Operations VA`}
          fill
          priority
          unoptimized
          draggable={false}
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="hero-portrait-img"
        />
      </div>
    </div>
  );
}
