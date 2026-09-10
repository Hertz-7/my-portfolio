"use client";

import { motion } from "framer-motion";
import { Navigation } from "./Navigation";
import { SocialLinks } from "./SocialLinks";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export function Sidebar() {
  return (
    <aside className="portfolio-sidebar">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col gap-6"
      >
        <header className="flex flex-col gap-3">
          <h1 className="text-[var(--light)] font-bold leading-[1.05] tracking-[-0.02em] text-[clamp(2.75rem,4.5vw,3.5rem)]">
            Mohammad&nbsp;Aosaf
          </h1>
          <p className="text-[var(--light)] text-[1.125rem] leading-[1.3] font-medium">
            AI &amp; Full-Stack Engineer
          </p>
          <p className="text-[var(--slate)] text-[0.95rem] leading-[1.6] max-w-[300px]">
            I build accessible, production AI systems end to end — from
            multi-agent reasoning to the platform underneath.
          </p>
        </header>

        <div className="my-8 lg:my-16">
          <Navigation items={NAV_ITEMS} />
        </div>

        <div className="mt-auto">
          <SocialLinks />
        </div>
      </motion.div>
    </aside>
  );
}
