"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

interface NavigationProps {
  items: NavItem[];
  orientation?: "vertical" | "horizontal";
}

export function Navigation({ items, orientation = "vertical" }: NavigationProps) {
  const [active, setActive] = useState<string>(items[0]?.href ?? "");

  useEffect(() => {
    const sectionIds = items.map((i) => i.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
      .sort((a, b) => a.offsetTop - b.offsetTop);

    if (sections.length === 0) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const line = window.innerHeight * 0.3;
      let current = `#${sections[0].id}`;
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= line) {
          current = `#${s.id}`;
        }
      }
      const doc = document.documentElement;
      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 2) {
        current = `#${sections[sections.length - 1].id}`;
      }
      setActive((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items]);

  if (orientation === "horizontal") {
    return (
      <nav aria-label="Primary" className="flex flex-row flex-wrap items-center gap-x-6 gap-y-2">
        {items.map(({ label, href }) => {
          const isActive = active === href;
          return (
            <a
              key={href}
              href={href}
              className={`
                relative text-xs font-medium tracking-[0.18em] uppercase
                py-2 transition-colors duration-200
                focus-visible:outline-none focus-visible:text-accent
                ${isActive ? "text-accent" : "text-slate-400 hover:text-slate-200"}
              `}
            >
              {isActive && (
                <motion.span
                  layoutId="active-underline"
                  className="absolute left-0 bottom-0 h-px w-full bg-accent"
                  transition={{ duration: 0.25, ease: "easeOut" }}
                />
              )}
              {label}
            </a>
          );
        })}
      </nav>
    );
  }

  return (
    <nav aria-label="Primary" className="flex flex-col gap-2">
      {items.map(({ label, href }) => {
        const isActive = active === href;
        return (
          <motion.a
            key={href}
            href={href}
            initial={false}
            animate={{ opacity: isActive ? 1 : 0.65 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              group flex items-center gap-5
              text-xs font-medium tracking-[0.18em] uppercase
              focus-visible:outline-none focus-visible:opacity-100
            "
          >
            <motion.span
              aria-hidden="true"
              initial={false}
              animate={{
                width: isActive ? 48 : 24,
                backgroundColor: isActive ? "var(--accent)" : "var(--dim)",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="block h-px"
            />
            <span
              className={
                isActive
                  ? "text-slate-200"
                  : "text-slate-400 group-hover:text-slate-200 transition-colors duration-200"
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
