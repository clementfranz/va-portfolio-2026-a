import { contact, profile } from "@/data/profile";
import { ProfileLinks } from "@/components/ProfileLinks";
import { SectionHeading } from "@/components/SectionHeading";

export function ContactSection() {
  return (
    <section id="contact" className="section section-mesh">
      <SectionHeading eyebrow="Let's talk" title={contact.title} description={contact.cta} />
      <div className="card-accent glass-card rounded-[1.5rem] p-6 pl-7 md:p-8">
        <div className="flex flex-wrap items-center gap-4">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            Email me
          </a>
          <ProfileLinks className="profile-logos-contact" />
        </div>
        <p className="mt-5 text-sm text-ink-soft">
          <a href={`mailto:${profile.email}`} className="font-medium hover:text-accent">
            {profile.email}
          </a>
        </p>
        <p className="mt-2 text-xs text-ink-mute">{contact.note}</p>
      </div>
    </section>
  );
}
