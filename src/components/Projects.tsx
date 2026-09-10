"use client";

import { projects } from "@/data/projects";
import { Project } from "./Project";

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 pt-2 pb-24 lg:pt-0 lg:pb-32"
    >
      <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[var(--accent)] mb-6 sm:mb-8 lg:mb-14">
        03 &nbsp;/&nbsp; Projects
      </p>

      <ul className="flex flex-col gap-10 sm:gap-12 lg:gap-14">
        {projects.map((project, i) => (
          <li key={project.title}>
            <Project project={project} index={i} />
          </li>
        ))}
      </ul>
    </section>
  );
}
