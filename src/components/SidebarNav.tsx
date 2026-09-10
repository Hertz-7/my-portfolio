"use client";

import { useEffect, useState } from "react";

interface NavItem {
  index: string;
  label: string;
  href: string;
}

export function SidebarNav({ items }: { items: NavItem[] }) {
  const [active, setActive] = useState<string>(items[0]?.href ?? "");

  useEffect(() => {
    const sectionIds = items.map((i) => i.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Primary" className="mt-10 flex flex-col gap-1">
      {items.map(({ index, label, href }) => {
        const isActive = active === href;
        return (
          <a
            key={href}
            href={href}
            className={`
              group relative flex items-center gap-4 py-2 pl-0
              font-mono text-[10.5px] tracking-[0.2em] uppercase
              transition-colors duration-150
              focus-visible:outline-none focus-visible:text-[var(--accent)]
            `}
          >
            <span
              aria-hidden="true"
              className={`
                inline-block h-px transition-all duration-200
                ${
                  isActive
                    ? "w-12 bg-[var(--accent)]"
                    : "w-6 bg-[var(--dim)] group-hover:w-10 group-hover:bg-[var(--accent)]"
                }
              `}
            />
            <span
              className={
                isActive
                  ? "text-[var(--accent)]"
                  : "text-[var(--dim)] group-hover:text-[var(--accent)]"
              }
            >
              {index}
            </span>
            <span
              className={
                isActive
                  ? "text-[var(--type)]"
                  : "text-[var(--dim)] group-hover:text-[var(--accent)]"
              }
            >
              {label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
