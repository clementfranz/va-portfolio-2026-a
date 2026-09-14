"use client";

import { profile } from "@/data/profile";

const liveLinks = [
  {
    href: profile.linkedinUrl,
    label: "LinkedIn",
    src: "/assets/logos/linkedin.svg?v=5",
  },
  {
    href: profile.onlineJobsUrl,
    label: "OnlineJobs.ph",
    src: "/assets/logos/onlinejobs.png?v=5",
  },
] as const;

export function ProfileLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={className ? `profile-logos ${className}` : "profile-logos"}>
      {liveLinks.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="profile-logo-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            title={link.label}
          >
            <img src={link.src} alt="" width={28} height={28} className="profile-logo-square" draggable={false} />
          </a>
        </li>
      ))}
      <li>
        <span className="profile-logo-link" aria-label="Upwork" title="Upwork">
          <img src="/assets/logos/upwork.svg?v=5" alt="" width={28} height={28} className="profile-logo-square" draggable={false} />
        </span>
      </li>
    </ul>
  );
}
