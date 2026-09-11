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
        group relative
        rounded-[6px] border border-transparent
        px-0 py-5 sm:px-5 sm:py-5 lg:px-6 lg:py-6
        transition-colors duration-200 ease-out
        sm:hover:border-[rgba(47,201,194,0.18)]
        sm:hover:bg-[rgba(20,48,50,0.5)]
      "
    >
      <div
        className="
          grid grid-cols-1 gap-y-2
          lg:grid-cols-[140px_1fr] lg:gap-y-0 lg:gap-x-8
        "
      >
        <p className="
          font-mono text-[11px] font-medium tracking-[0.18em] uppercase
          text-[var(--dim)] tabular-nums pt-0.5 lg:pt-1
        ">
          0{index + 1}
        </p>

        <div className="flex flex-col gap-3 sm:gap-4">
          {project.image && (
            <div className="overflow-hidden rounded-[6px] border border-[var(--hair)] bg-[var(--ground2)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.imageAlt ?? project.title}
                loading="lazy"
                className="block w-full h-auto"
              />
            </div>
          )}

          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <h3 className="text-[var(--type)] font-medium text-[1.0625rem] sm:text-[1.0625rem] leading-[1.4] tracking-[-0.005em]">
              {project.title}
            </h3>
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} — opens in a new tab`}
                className="
                  inline-flex items-center text-[var(--dim)]
                  sm:group-hover:text-[var(--accent)]
                  transition-all duration-200 ease-out
                  sm:group-hover:translate-x-0.5
                  focus-visible:outline-none focus-visible:text-[var(--accent)]
                "
              >
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </a>
            )}
          </div>

          <p className="text-[var(--prose)] text-[1rem] leading-[1.7]">
            {project.description}
          </p>

          {project.tech && project.tech.length > 0 && (
            <ul className="flex flex-wrap gap-2 pt-1">
              {project.tech.map((tech) => (
                <li key={tech}>
                  <span
                    className="
                      inline-block px-3 py-1 rounded-full
                      text-[12px] text-[var(--accent)]
                      bg-[rgba(47,201,194,0.06)]
                      border border-[rgba(47,201,194,0.14)]
                      transition-colors duration-200
                      sm:group-hover:bg-[rgba(47,201,194,0.1)]
                      sm:group-hover:border-[rgba(47,201,194,0.24)]
                    "
                  >
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.article>
  );
}
