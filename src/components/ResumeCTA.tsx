import { profile, stock } from "@/data/profile";
import { ProfileLinks } from "@/components/ProfileLinks";
import { SectionHeading } from "@/components/SectionHeading";
import { CoverImage } from "@/components/CoverImage";

export function ResumeCTA() {
  return (
    <section id="resume" className="section section-mesh border-b border-[var(--line)] bg-paper-soft/70">
      <SectionHeading
        eyebrow="Resume"
        title="Resume & professional profiles"
        description="Download my resume, or find me on LinkedIn and OnlineJobs.ph."
      />
      <div className="card-accent glass-card overflow-hidden rounded-[1.5rem] p-0 md:grid md:grid-cols-[0.85fr_1.15fr]">
        <CoverImage
          src={stock.resume.src}
          alt={stock.resume.alt}
          className="h-44 md:h-full md:min-h-[14rem]"
          sizes="(min-width: 768px) 420px, 100vw"
        />
        <div className="flex flex-col justify-center gap-5 p-6 pl-7 md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <p className="display text-2xl font-semibold text-ink">Download my resume</p>
            <p className="mt-2 text-sm text-ink-mute">The PDF, plus LinkedIn and OnlineJobs.ph.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href={profile.resumePath} className="btn btn-primary" download>
              Download resume
            </a>
            <ProfileLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
