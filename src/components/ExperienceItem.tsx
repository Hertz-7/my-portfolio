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
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.05,
      }}
      className="
        group relative
        rounded-[6px] border border-transparent
        px-0 py-5 sm:px-5 sm:py-5 lg:px-6 lg:py-6
        transition-colors duration-200 ease-out
        sm:hover:border-[rgba(47,201,194,0.18)]
        sm:hover:bg-[rgba(20,48,50,0.5)]
        sm:focus-within:border-[rgba(47,201,194,0.18)]
        sm:focus-within:bg-[rgba(20,48,50,0.5)]
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
          text-[var(--dim)] tabular-nums pt-0.5
          lg:pt-1
        ">
          {item.date}
        </p>

        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <h3 className="text-[var(--type)] font-medium text-[1.0625rem] sm:text-[1.0625rem] leading-[1.4] tracking-[-0.005em]">
              <span>{item.role}</span>
              <span className="text-[var(--dim)] mx-2" aria-hidden="true">·</span>
              <span>{item.company}</span>
            </h3>
            {item.href && (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.company} — opens in a new tab`}
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

          <ul className="flex flex-col gap-2 pl-4 list-disc marker:text-[var(--accent)]">
            {item.description.map((point, i) => (
              <li
                key={i}
                className="text-[var(--prose)] text-[0.95rem] leading-[1.65] tracking-[0.005em]"
              >
                {point}
              </li>
            ))}
          </ul>

          {item.links && item.links.length > 0 && (
            <ul className="flex flex-wrap gap-x-4 sm:gap-x-5 gap-y-1.5 pt-1">
              {item.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-1.5
                      text-[var(--dim)] hover:text-[var(--accent)]
                      text-[0.825rem] tracking-[0.02em]
                      transition-colors duration-200
                      focus-visible:outline-none focus-visible:text-[var(--accent)]
                    "
                  >
                    <ArrowUpRight className="w-3 h-3" strokeWidth={1.5} />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}

          {item.technologies.length > 0 && (
            <ul className="flex flex-wrap gap-2 pt-2">
              {item.technologies.map((tech) => (
                <li key={tech}>
                  <span
                    className="
                      inline-block
                      px-3 py-1
                      rounded-full
                      text-[12px]
                      text-[var(--accent)]
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
