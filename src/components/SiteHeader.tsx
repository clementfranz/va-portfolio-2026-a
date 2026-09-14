"use client";

import { useEffect, useId, useState } from "react";
import { mobileNavLinks, navLinks, profile } from "@/data/profile";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-white/86 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-12">
        <a href="#main" className="site-brand">
          <span className="site-brand-name">{profile.name}</span>
          <span className="site-brand-tag">{profile.brandTag}</span>
        </a>
        <div className="flex items-center gap-3">
          <nav aria-label="Primary" className="hidden items-center gap-5 text-sm font-medium text-ink-soft md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-ink">
                {link.label}
              </a>
            ))}
          </nav>
          <span className="header-contact hidden md:inline-flex">
            <a href="#contact" className="btn btn-primary !min-h-10 !px-4 text-sm">
              Contact
            </a>
          </span>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-ink md:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
                <path d="M1 1h16M1 7h16M1 13h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {open ? (
        <nav
          id={menuId}
          aria-label="Mobile"
          className="border-t border-[var(--line)] bg-white px-4 py-3 md:hidden"
        >
          <ul className="flex flex-col">
            {mobileNavLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-xl px-3 py-3 text-sm font-medium text-ink-soft hover:bg-accent-soft hover:text-accent"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
