"use client";

import { experiences } from "@/data/experience";
import { ExperienceItem } from "./ExperienceItem";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 pt-16 pb-24"
    >
      <h2 className="text-xs font-medium tracking-[0.22em] uppercase text-slate-400 mb-8">
        Experience
      </h2>

      <ul className="flex flex-col gap-12 group/list">
        {experiences.map((item, i) => (
          <li key={`${item.company}-${i}`} className="group group-hover/list:opacity-50 hover:!opacity-100 border border-transparent hover:border-slate-100/10 bg-transparent hover:bg-slate-800/30 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] transition-all duration-300 rounded-lg px-4 py-4 lg:px-6 lg:py-5">
            <ExperienceItem item={item} index={i} />
          </li>
        ))}
      </ul>
    </section>
  );
}
