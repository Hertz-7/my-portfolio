"use client";

import { Sidebar } from "./Sidebar";
import { About } from "./About";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import {
  ExperienceTimeline,
  ExperienceTimelineMobile,
} from "./ExperienceTimeline";

export function Portfolio() {
  return (
    <div className="portfolio-shell">
      <Sidebar />
      <main id="main-content" className="portfolio-main relative">
        <ExperienceTimeline />
        <ExperienceTimelineMobile />

        <div className="relative z-10">
          <About />
          <Experience />
          <Projects />
        </div>

        <footer className="relative z-10 mt-4 pt-8 border-t border-[var(--hair)]">
          <p className="text-[var(--dim)] text-[11px] tracking-[0.18em] uppercase">
            Designed &amp; built by Mohammad Aosaf &nbsp;·&nbsp; Islamabad, PK
          </p>
        </footer>
      </main>
    </div>
  );
}
