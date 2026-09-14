import { skillGroups } from "@/data/profile";

type SkillGroupId = (typeof skillGroups)[number]["id"];

function GoArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckMark() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M2 5.2 4.1 7.2 8 2.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SkillIcon({ kind }: { kind: SkillGroupId }) {
  if (kind === "logistics-operations") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 16.5V8.8A1.8 1.8 0 0 1 4.8 7h8.9v9.5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M13.7 11h4.1l2.7 3.2v2.3h-6.8" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <circle cx="7.2" cy="16.8" r="1.7" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="16.6" cy="16.8" r="1.7" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }

  if (kind === "compliance-research") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="6.2" stroke="currentColor" strokeWidth="1.7" />
        <path d="m15.8 15.8 4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (kind === "automation-development") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M10.2 3.6h3.6l.5 2.2c.6.2 1.1.6 1.6 1l2.1-.8 1.8 3.1-1.6 1.5c.1.5.1 1 .1 1.4s0 .9-.1 1.4l1.6 1.5-1.8 3.1-2.1-.8c-.5.4-1 .8-1.6 1l-.5 2.2h-3.6l-.5-2.2a6.7 6.7 0 0 1-1.6-1l-2.1.8-1.8-3.1 1.6-1.5A6.5 6.5 0 0 1 6.2 12c0-.5 0-.9.1-1.4L4.7 9.1 6.5 6l2.1.8c.5-.4 1-.8 1.6-1l.5-2.2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  if (kind === "web-design") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3.5" y="5" width="17" height="12" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8 20h8M12 17v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="8.4" cy="8" r="2.35" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="15.7" cy="8.4" r="2.05" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.8 18.2c.5-3 2.6-4.6 4.6-4.6 2 0 4.1 1.6 4.6 4.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M13.2 14.4c1.5-.7 3.4-.5 4.6 1.2.6.9.8 1.7.9 2.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function SkillsGrid() {
  return (
    <section id="skills" className="section skills-band">
      <div className="skills-head">
        <div>
          <div className="section-rule skills-rule" />
          <h2 className="display skills-title">
            <span className="skills-title-strong">Skills</span>{" "}
            <span className="skills-title-soft">&amp; tools</span>
          </h2>
          <p className="skills-lede">
            Operations, research, automation, web, and communication — grouped the way I use them.
          </p>
        </div>
        <p className="skills-aside">
          <span>Operations</span>
          <span>Research</span>
          <span>Automation</span>
        </p>
      </div>

      <div className="skills-board">
        {skillGroups.map((group, i) => (
          <article key={group.id} className="skills-card">
            <span className="skills-card-corner" aria-hidden="true" />
            <div className="skills-card-head">
              <span className="skills-card-icon" aria-hidden="true">
                <SkillIcon kind={group.id} />
              </span>
              <h3 className="skills-card-title">{group.title}</h3>
              <span className="skills-card-index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <ul className="skills-list">
              {group.skills.map((skill) => (
                <li key={skill}>
                  <span className="skills-check" aria-hidden="true">
                    <CheckMark />
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="skills-foot">
        <a className="skills-cta" href="#contact">
          Let&apos;s talk
          <span className="skills-cta-go" aria-hidden="true">
            <GoArrow />
          </span>
        </a>
      </div>
    </section>
  );
}
