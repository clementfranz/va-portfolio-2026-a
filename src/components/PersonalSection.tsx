import { interests } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";
import { CoverImage } from "@/components/CoverImage";

export function PersonalSection() {
  return (
    <section id="outside-work" className="section section-mesh border-b border-[var(--line)]">
      <SectionHeading
        eyebrow="Outside work"
        title="Outside the spreadsheet"
        description="A few things I do when I'm not in a spreadsheet."
      />
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {interests.map((item) => (
          <li key={item.title} className="overflow-hidden rounded-2xl border border-[var(--line)] bg-paper-soft">
            <CoverImage
              src={item.image}
              alt={item.imageAlt}
              className="h-28"
              sizes="(min-width: 1024px) 180px, 50vw"
            />
            <div className="px-4 py-4">
              <p className="text-sm font-semibold text-ink">{item.title}</p>
              <p className="mt-1 text-xs leading-5 text-ink-mute">{item.note}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
