import { profile } from "@/data/profile";
import { ProfileLinks } from "@/components/ProfileLinks";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] px-6 py-8 text-sm text-ink-mute md:px-12">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p>
          {profile.name} · {profile.headline}
        </p>
        <ProfileLinks />
      </div>
      <p className="mt-2">Based in {profile.location}.</p>
      <p className="mt-3 text-xs text-ink-mute/80">
        The photos on this page are stock, not shots from client sites.
      </p>
    </footer>
  );
}
