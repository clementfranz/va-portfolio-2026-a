import { about, stock } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";
import { CoverImage } from "@/components/CoverImage";

export function About() {
  return (
    <section id="about" className="section section-mesh border-b border-[var(--line)]">
      <SectionHeading eyebrow="About" title={about.title} description={about.lead} />
      <CoverImage
        src={stock.about.src}
        alt={stock.about.alt}
        className="cover-banner mb-10"
        sizes="(min-width: 1100px) 980px, 100vw"
      />
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5 text-base leading-7 text-ink-soft">
          {about.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <aside className="card-accent glass-card rounded-[1.25rem] p-6 pl-7">
          <p className="eyebrow mb-4">Current logistics work includes</p>
          <ul className="space-y-2.5 text-sm leading-6 text-ink-soft">
            {about.currentFocus.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
