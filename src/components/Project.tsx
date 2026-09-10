"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project as ProjectData } from "@/data/projects";

interface ProjectProps {
  project: ProjectData;
  index: number;
}

export function Project({ project, index }: ProjectProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
      className="
        group relative grid grid-cols-1 lg:grid-cols-[140px_1fr]
        gap-y-2 lg:gap-x-8
        rounded-[6px] border border-transparent
        px-5 py-5 lg:px-6 lg:py-6
        transition-colors duration-200 ease-out
        hover:border-[rgba(47,201,194,0.18)]
        hover:bg-[rgba(20,48,50,0.5)]
      "
    >
      <p className="font-mono text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--mute)] tabular-nums pt-1">
        0{index + 1}
      </p>

      <div className="flex flex-col gap-3">
        <div className="flex items-baseline gap-2">
          <h3 className="text-[var(--light)] font-medium text-[1.0625rem] leading-[1.4] tracking-[-0.005em]">
            {project.title}
          </h3>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — opens in a new tab`}
              className="
                inline-flex items-center text-[var(--slate)]
                group-hover:text-[var(--accent)]
                transition-all duration-200 ease-out
                group-hover:translate-x-0.5
                focus-visible:outline-none focus-visible:text-[var(--accent)]
              "
            >
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
          )}
        </div>

        <p className="text-[var(--slate)] text-[1rem] leading-[1.7] max-w-[58ch]">
          {project.description}
        </p>

        {project.technologies && project.technologies.length > 0 && (
          <ul className="flex flex-wrap gap-2 pt-1">
            {project.technologies.map((tech) => (
              <li key={tech}>
                <span
                  className="
                    inline-block px-3 py-1 rounded-full
                    text-[12px] text-[var(--accent)]
                    bg-[rgba(47,201,194,0.06)]
                    border border-[rgba(47,201,194,0.14)]
                    transition-colors duration-200
                    group-hover:bg-[rgba(47,201,194,0.1)]
                    group-hover:border-[rgba(47,201,194,0.24)]
                  "
                >
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  );
}
