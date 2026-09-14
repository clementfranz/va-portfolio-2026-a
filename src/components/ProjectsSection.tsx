"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";
import { Modal } from "@/components/Modal";
import { CoverImage } from "@/components/CoverImage";

function MapPin() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function ClientCapsule({ label }: { label: string }) {
  return (
    <span className="client-capsule inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wide text-white">
      <MapPin />
      {label}
    </span>
  );
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  return (
    <article className="card-accent glass-card flex h-full flex-col overflow-hidden rounded-[1.25rem] p-0">
      <CoverImage
        src={project.image}
        alt={project.imageAlt}
        className="h-44"
        sizes="(min-width: 768px) 460px, 100vw"
      />
      <div className="flex h-full flex-col p-6 pl-7">
        <div className="flex flex-wrap items-center gap-2">
          <ClientCapsule label={project.clientLabel} />
          <span className="text-xs font-medium text-ink-mute">{project.industry}</span>
        </div>
        <h3 className="display mt-4 text-xl font-semibold text-ink">{project.title}</h3>
        <p className="mt-1 text-sm font-medium text-ink-soft">{project.role}</p>
        <p className="mt-3 flex-1 text-sm leading-6 text-ink-soft">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li key={tech} className="chip !py-1 !text-xs">
              {tech}
            </li>
          ))}
        </ul>
        <button type="button" className="btn btn-secondary mt-5 self-start" onClick={() => onOpen(project)}>
          View details
        </button>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="section section-mesh border-b border-[var(--line)]">
      <SectionHeading
        eyebrow="Projects"
        title="Technical projects"
        description="Systems I built for a university, a school, inventory, and a live raffle. Same kind of problem-solving I use in logistics."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setActive} />
        ))}
      </div>
      {active ? (
        <Modal open title={active.title} onClose={() => setActive(null)}>
          <div className="space-y-4">
            <ClientCapsule label={active.clientLabel} />
            <p>
              <strong className="text-ink">Industry:</strong> {active.industry}
            </p>
            <p>
              <strong className="text-ink">Role:</strong> {active.role}
            </p>
            <p>{active.description}</p>
            <ul className="space-y-2">
              {active.details.map((detail) => (
                <li key={detail} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </Modal>
      ) : null}
    </section>
  );
}
