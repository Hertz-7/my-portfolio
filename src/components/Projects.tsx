"use client";

import { projects } from "@/data/projects";
import { Project } from "./Project";

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 pt-16 pb-24"
    >
      <h2 className="text-xs font-medium tracking-[0.22em] uppercase text-slate-400 mb-8">
        Projects
      </h2>

      <ul className="flex flex-col gap-12 group/list">
        {projects.map((project, i) => (
          <li key={project.title} className="group group-hover/list:opacity-50 hover:!opacity-100 border border-transparent hover:border-slate-100/10 bg-transparent hover:bg-slate-800/30 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] transition-all duration-300 rounded-lg px-4 py-4 lg:px-6 lg:py-5">
            <Project project={project} index={i} />
          </li>
        ))}
      </ul>
    </section>
  );
}
