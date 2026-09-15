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
      className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
    >
      {/* Image thumbnail — explicit width, top-aligned */}
      {project.image && (
        <div className="w-full sm:w-32 flex-shrink-0">
          <div className="w-full aspect-[16/10] rounded border border-slate-700/50 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.imageAlt ?? project.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Project content — fills remaining width */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-col gap-1">
          {/* Title with external link */}
            <div className="flex items-baseline gap-3">
              <h3 className="font-semibold text-slate-200 text-base leading-snug group-hover:text-teal-300 transition-colors duration-200">
                {project.title}
              </h3>
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} — opens in a new tab`}
                  className="text-slate-400 hover:text-accent transition-transform duration-200 focus-visible:outline-none group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none"
                >
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </a>
            )}
          </div>

          {/* Description */}
          <p className="text-sm leading-normal text-slate-400">
            {project.description}
          </p>

          {/* Tech stack pills */}
          {project.tech && project.tech.length > 0 && (
            <ul className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((tech) => (
                <li key={tech}>
                  <span className="text-teal-300 bg-teal-400/10 rounded-full px-3 py-1 text-xs font-medium">
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
