import { customs, stock } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";
import { CoverImage } from "@/components/CoverImage";

export function CustomsSection() {
  return (
    <section id="customs" className="section section-mesh border-b border-[var(--line)] bg-paper-soft/60">
      <SectionHeading eyebrow="Compliance support" title={customs.title} description={customs.intro} />
      <CoverImage
        src={stock.customs.src}
        alt={stock.customs.alt}
        className="cover-banner mb-8"
        sizes="(min-width: 1100px) 980px, 100vw"
      />
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {customs.capabilities.map((item) => (
          <li key={item} className="glass-card rounded-2xl px-4 py-4 text-sm font-medium text-ink-soft">
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-8 max-w-3xl text-xs leading-5 text-ink-mute">{customs.disclaimer}</p>
    </section>
  );
}
