"use client";

import { profile } from "@/data/profile";
import { HeroBackdrop, HeroStage, HeroSubject } from "@/components/HeroPortrait";
import { ProfileLinks } from "@/components/ProfileLinks";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <HeroStage>
      <HeroBackdrop />
      <div className="hero-grid">
        <Reveal className="hero-copy" delay={80}>
          <p className="eyebrow">{profile.heroEyebrow}</p>
          <h1 className="display mt-4 text-4xl font-semibold sm:text-5xl lg:text-[3.5rem]">
            {profile.name}
          </h1>
          <p className="display mt-4 text-2xl font-semibold !text-ink sm:text-3xl">
            {profile.headline}{" "}
            <span className="mt-2 block text-[0.72em] font-medium !text-ink-soft">
              {profile.subheadline}
            </span>
          </p>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink-soft">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#experience" className="btn btn-primary">
              View my experience
            </a>
            <a href={profile.resumePath} className="btn btn-secondary" download>
              Download resume
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact me
            </a>
          </div>
          <div className="mt-6">
            <ProfileLinks />
          </div>
        </Reveal>
        <div className="hero-media">
          <HeroSubject />
        </div>
      </div>
    </HeroStage>
  );
}
