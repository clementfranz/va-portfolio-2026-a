import { GlassBackground } from "@/components/GlassBackground";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Specialties } from "@/components/Specialties";
import { About } from "@/components/About";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { CustomsSection } from "@/components/CustomsSection";
import { AutomationSection } from "@/components/AutomationSection";
import { CaseStudies } from "@/components/CaseStudies";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CreativeSection } from "@/components/CreativeSection";
import { SkillsGrid } from "@/components/SkillsGrid";
import { ResumeCTA } from "@/components/ResumeCTA";
import { PersonalSection } from "@/components/PersonalSection";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <GlassBackground />
      <div className="site-shell">
        <SiteHeader />
        <main id="main">
          <Hero />
          <Reveal>
            <Specialties />
          </Reveal>
          <Reveal delay={40}>
            <About />
          </Reveal>
          <Reveal>
            <ExperienceTimeline />
          </Reveal>
          <Reveal>
            <CustomsSection />
          </Reveal>
          <Reveal>
            <AutomationSection />
          </Reveal>
          <Reveal>
            <CaseStudies />
          </Reveal>
          <Reveal>
            <ProjectsSection />
          </Reveal>
          <Reveal>
            <CreativeSection />
          </Reveal>
          <Reveal>
            <SkillsGrid />
          </Reveal>
          <Reveal>
            <ResumeCTA />
          </Reveal>
          <Reveal>
            <PersonalSection />
          </Reveal>
        </main>
        <Footer />
      </div>
    </>
  );
}
