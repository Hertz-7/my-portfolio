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
      // Follow actual DOM order, not the nav array order.
      .sort((a, b) => a.offsetTop - b.offsetTop);

    if (sections.length === 0) return;

    // View line: a section becomes active the moment its top edge
    // crosses 30% from the top of the viewport.
    const VIEW_LINE_RATIO = 0.3;

    let ticking = false;

    const update = () => {
      ticking = false;
      const line = window.innerHeight * VIEW_LINE_RATIO;

      let current = `#${sections[0].id}`;
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= line) {
          current = `#${s.id}`;
        }
      }

      // Bottom-of-page guard: once the footer is reached, the last
      // section stays active even if its top never crosses the line.
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
      <nav
        aria-label="Primary"
        className="flex flex-row flex-wrap items-center gap-x-6 gap-y-2 lg:hidden"
      >
        {items.map(({ label, href }) => {
          const isActive = active === href;
          return (
            <a
              key={href}
              href={href}
              className={`
                relative inline-flex items-center
                text-[11px] font-medium tracking-[0.18em] uppercase
                py-2
                transition-colors duration-200
                focus-visible:outline-none focus-visible:text-[var(--accent)]
                ${
                  isActive
                    ? "text-[var(--accent)]"
                    : "text-[var(--dim)] hover:text-[var(--type)]"
                }
              `}
            >
              <motion.span
                aria-hidden="true"
                initial={false}
                animate={{
                  width: isActive ? "100%" : "0%",
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute left-0 bottom-0 h-px bg-[var(--accent)]"
              />
              {label}
            </a>
          );
        })}
      </nav>
    );
  }

  return (
    <nav
      aria-label="Primary"
      className="hidden lg:flex flex-col gap-3"
    >
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
                backgroundColor: isActive ? "var(--accent)" : "var(--dim)",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="block h-px"
            />
            <span
              className={
                isActive
                  ? "text-[var(--accent)]"
                  : "text-[var(--dim)] group-hover:text-[var(--accent)] transition-colors duration-200"
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
