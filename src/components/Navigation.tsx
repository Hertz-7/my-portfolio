"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

interface NavigationProps {
  items: NavItem[];
}

export function Navigation({ items }: NavigationProps) {
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
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
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
    <nav aria-label="Primary" className="hidden lg:flex flex-col gap-3">
      {items.map(({ label, href }) => {
        const isActive = active === href;
        return (
          <motion.a
            key={href}
            href={href}
            initial={false}
            animate={{
              opacity: isActive ? 1 : 0.65,
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              group flex items-center gap-5
              text-[11px] font-medium tracking-[0.18em] uppercase
              focus-visible:outline-none focus-visible:opacity-100
            "
          >
            <motion.span
              aria-hidden="true"
              initial={false}
              animate={{
                width: isActive ? 60 : 30,
                backgroundColor: isActive ? "var(--accent)" : "var(--mute)",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="block h-px"
            />
            <span
              className={
                isActive
                  ? "text-[var(--accent)]"
                  : "text-[var(--slate)] group-hover:text-[var(--accent)] transition-colors duration-200"
              }
            >
              {label}
            </span>
          </motion.a>
        );
      })}
    </nav>
  );
}
