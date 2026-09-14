"use client";

import { experience } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";
import { useEffect, useRef, type MouseEvent, type ReactNode } from "react";

type TabletPose = {
  tx: number;
  ty: number;
  tz: number;
  rx: number;
  ry: number;
  mx: number;
  my: number;
};

const restPose: TabletPose = { tx: 0, ty: 0, tz: 0, rx: 0, ry: 0, mx: 50, my: 18 };

function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function hasFineHover() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function poseFromCursor(dx: number, dy: number): TabletPose {
  return {
    tx: -dx * 34,
    ty: -dy * 24,
    tz: 36,
    rx: dy * 11,
    ry: -dx * 14,
    mx: (dx + 0.5) * 100,
    my: (dy + 0.5) * 100,
  };
}

function viewportAim() {
  const view = window.visualViewport;
  return {
    x: (view?.width ?? window.innerWidth) / 2 + (view?.offsetLeft ?? 0),
    y: (view?.height ?? window.innerHeight) / 2 + (view?.offsetTop ?? 0),
  };
}

function ExpTablet({ children }: { children: ReactNode }) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const target = useRef<TabletPose>({ ...restPose });
  const current = useRef<TabletPose>({ ...restPose });
  const raf = useRef(0);
  const hovering = useRef(false);
  const mouseActive = useRef(false);

  const paint = (pose: TabletPose) => {
    const el = sceneRef.current;
    if (!el) return;
    el.style.setProperty("--exp-tx", `${pose.tx.toFixed(2)}px`);
    el.style.setProperty("--exp-ty", `${pose.ty.toFixed(2)}px`);
    el.style.setProperty("--exp-tz", `${pose.tz.toFixed(2)}px`);
    el.style.setProperty("--exp-rx", `${pose.rx.toFixed(2)}deg`);
    el.style.setProperty("--exp-ry", `${pose.ry.toFixed(2)}deg`);
    el.style.setProperty("--exp-mx", `${pose.mx.toFixed(1)}%`);
    el.style.setProperty("--exp-my", `${pose.my.toFixed(1)}%`);
  };

  const tick = () => {
    const c = current.current;
    const t = target.current;
    const ease = hovering.current ? 0.14 : 0.11;
    c.tx += (t.tx - c.tx) * ease;
    c.ty += (t.ty - c.ty) * ease;
    c.tz += (t.tz - c.tz) * ease;
    c.rx += (t.rx - c.rx) * ease;
    c.ry += (t.ry - c.ry) * ease;
    c.mx += (t.mx - c.mx) * ease;
    c.my += (t.my - c.my) * ease;
    paint(c);

    const settled =
      Math.abs(t.tx - c.tx) < 0.06 &&
      Math.abs(t.ty - c.ty) < 0.06 &&
      Math.abs(t.tz - c.tz) < 0.06 &&
      Math.abs(t.rx - c.rx) < 0.06 &&
      Math.abs(t.ry - c.ry) < 0.06;

    if (settled && !hovering.current) {
      paint(restPose);
      raf.current = 0;
      return;
    }

    raf.current = requestAnimationFrame(tick);
  };

  const startLoop = () => {
    if (!raf.current) raf.current = requestAnimationFrame(tick);
  };

  const applyAim = (clientX: number, clientY: number) => {
    const el = sceneRef.current;
    if (!el) return;
    const box = el.getBoundingClientRect();
    const dx = (clientX - box.left) / box.width - 0.5;
    const dy = (clientY - box.top) / box.height - 0.5;
    hovering.current = true;
    el.classList.add("is-hot");
    target.current = poseFromCursor(dx, dy);
    startLoop();
  };

  const releaseAim = () => {
    hovering.current = false;
    sceneRef.current?.classList.remove("is-hot");
    target.current = { ...restPose };
    startLoop();
  };

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reducedMotion()) return;
    mouseActive.current = true;
    applyAim(event.clientX, event.clientY);
  };

  const onLeave = () => {
    mouseActive.current = false;
    releaseAim();
  };

  useEffect(() => {
    if (reducedMotion()) return undefined;
    if (hasFineHover()) return undefined;

    let frame = 0;

    const updateFromScroll = () => {
      frame = 0;
      if (mouseActive.current) return;
      const el = sceneRef.current;
      if (!el) return;

      const box = el.getBoundingClientRect();
      const aim = viewportAim();
      const inside =
        aim.x >= box.left &&
        aim.x <= box.right &&
        aim.y >= box.top &&
        aim.y <= box.bottom;

      if (inside) {
        applyAim(aim.x, aim.y);
        return;
      }

      if (hovering.current) releaseAim();
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(updateFromScroll);
    };

    updateFromScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.visualViewport?.addEventListener("resize", onScroll);
    window.visualViewport?.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.visualViewport?.removeEventListener("resize", onScroll);
      window.visualViewport?.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div ref={sceneRef} className="exp-tablet-scene" onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="exp-tablet">{children}</div>
    </div>
  );
}

export function ExperienceTimeline() {
  return (
    <section id="experience" className="section section-mesh border-b border-[var(--line)]">
      <SectionHeading
        eyebrow="Experience"
        title="Logistics first. The rest of the work after that."
        description="The logistics role is the main one. The earlier jobs are here because that's where I learned procurement, delivery, and talking to clients."
      />
      <ol className="exp-snake">
        {experience.map((item, index) => {
          const odd = index % 2 === 0;

          return (
            <li key={item.id} className={`exp-step ${odd ? "exp-step--odd" : "exp-step--even"}`}>
              <span className="exp-mark">{index + 1}</span>
              <ExpTablet>
                <article>
                  {item.prominence === "featured" ? <p className="eyebrow mb-2">Recent</p> : null}
                  <h3 className="display text-xl font-semibold text-ink md:text-2xl">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-ink-soft">{item.organization}</p>
                  <p className="mt-2 text-xs font-medium text-ink-mute">{item.dates}</p>
                  <p className="mt-3 leading-7 text-ink-soft">{item.summary}</p>
                  {item.location ? <p className="mt-2 text-xs text-ink-mute">{item.location}</p> : null}
                  <ul className="mt-4 grid gap-1.5">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2 text-sm leading-6 text-ink-soft">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </article>
              </ExpTablet>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
