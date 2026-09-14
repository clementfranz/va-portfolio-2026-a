import { automation, workflowStages, stock } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { CoverImage } from "@/components/CoverImage";

export function AutomationSection() {
  return (
    <section id="automation" className="section section-mesh border-b border-[var(--line)]">
      <SectionHeading eyebrow="How I work" title={automation.title} description={automation.intro} />
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="card-accent glass-card rounded-[1.25rem] p-6 pl-7 md:p-8 md:pl-8">
          <p className="eyebrow">How the workflow looks</p>
          <h3 className="display mt-3 text-2xl font-semibold text-ink">{automation.featuredTitle}</h3>
          <dl className="mt-6 space-y-4 text-sm leading-6 text-ink-soft">
            <div>
              <dt className="font-semibold text-ink">Problem</dt>
              <dd className="mt-1">{automation.problem}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Approach</dt>
              <dd className="mt-1">{automation.approach}</dd>
            </div>
          </dl>
          <ul className="mt-6 space-y-2">
            {automation.value.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-ink-soft">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </article>
        <div className="overflow-hidden rounded-[1.25rem] border border-[var(--line)] shadow-[0_10px_30px_rgba(128,24,37,0.04)]">
          <CoverImage
            src={stock.automation.src}
            alt={stock.automation.alt}
            className="h-44 md:h-52"
            sizes="(min-width: 1024px) 480px, 100vw"
          />
          <WorkflowDiagram stages={[...workflowStages]} />
        </div>
      </div>
    </section>
  );
}
