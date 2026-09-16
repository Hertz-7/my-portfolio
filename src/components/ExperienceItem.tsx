"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Experience as ExperienceData } from "@/data/experience";

interface ExperienceItemProps {
  item: ExperienceData;
  index: number;
}

export function ExperienceItem({ item, index }: ExperienceItemProps) {
  return (
    <motion.a
      href={item.href ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${item.company} — opens in a new tab`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.05,
      }}
      className="group relative flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 transition-colors duration-200 no-underline"
    >
      {/* Date column */}
      <div className="sm:w-32 flex-shrink-0">
        <p className="font-mono text-xs tracking-[0.12em] uppercase text-slate-500 tabular-nums">
          {item.date}
        </p>
      </div>

      {/* Content column */}
      <div className="flex flex-col gap-3 min-w-0 flex-1">
        {/* Role & Company */}
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <h3 className="font-semibold text-slate-200 text-base leading-snug group-hover:!text-teal-300 transition-colors duration-200">
            <span>{item.role}</span>
            <span className="text-slate-500 mx-1">·</span>
            <span>{item.company}</span>
          </h3>
          <span className="text-slate-500 transition-transform duration-200 group-hover:!-translate-y-1 group-hover:!translate-x-1 motion-reduce:transition-none">
            <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </span>
        </div>

        {/* Description points */}
        <ul className="flex flex-col gap-2 pl-4 list-disc marker:text-accent">
          {item.description.map((point, i) => (
            <li
              key={i}
              className="text-sm leading-relaxed text-slate-400"
            >
              {point}
            </li>
          ))}
        </ul>

        {/* Links — converted to divs to avoid nested anchors */}
        {item.links && item.links.length > 0 && (
          <ul className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
            {item.links.map((link) => (
              <li key={link.href}>
                <div
                  role="link"
                  tabIndex={0}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(link.href, "_blank", "noopener,noreferrer");
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(link.href, "_blank", "noopener,noreferrer");
                    }
                  }}
                  className="
                    inline-flex items-center gap-1.5
                    text-xs text-slate-400 hover:text-accent
                    transition-colors duration-200
                    focus-visible:outline-none focus-visible:text-accent cursor-pointer
                  "
                >
                  <ArrowUpRight className="w-3 h-3" strokeWidth={1.5} />
                  <span>{link.label}</span>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Technology pills */}
        {item.technologies.length > 0 && (
          <ul className="flex flex-wrap gap-2 pt-1">
            {item.technologies.map((tech) => (
              <li key={tech}>
                <span className="text-teal-300 bg-teal-400/10 rounded-full px-3 py-1 text-xs font-medium">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.a>
  );
}
