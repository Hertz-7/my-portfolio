"use client";

import { experiences } from "@/data/experience";
import { ExperienceItem } from "./ExperienceItem";
import { ExperienceTimeline, ExperienceTimelineMobile } from "./ExperienceTimeline";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 relative pt-2 pb-24 lg:pt-0 lg:pb-32"
    >
      <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[var(--accent)] mb-10 lg:mb-14">
        02 &nbsp;/&nbsp; Experience
      </p>

      <div className="relative">
        <ExperienceTimeline />
        <ExperienceTimelineMobile />

        <ul className="relative flex flex-col gap-12 lg:gap-14">
          {experiences.map((item, i) => (
            <li key={`${item.company}-${i}`}>
              <ExperienceItem item={item} index={i} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
