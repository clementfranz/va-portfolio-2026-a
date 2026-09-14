import { RouteMark } from "@/components/RouteMark";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
};

export function SectionHeading({ eyebrow, title, description, id }: SectionHeadingProps) {
  return (
    <div className="relative mb-10 max-w-2xl">
      <RouteMark className="pointer-events-none absolute -right-6 -top-4 hidden h-16 w-44 text-accent/20 md:block" />
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <div className="section-rule" />
      <h2 id={id} className="display mt-4 text-3xl font-semibold md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-ink-soft">{description}</p>
      ) : null}
    </div>
  );
}
