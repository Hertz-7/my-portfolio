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
        <header className="flex flex-col gap-3 max-w-[320px]">
          <h1 className="text-[var(--type)] font-display font-bold leading-[1.05] tracking-[-0.028em] text-[clamp(2.75rem,4.4vw,3.4rem)]">
            Mohammad&nbsp;Aosaf
          </h1>
          <p className="text-[var(--type)] text-[1.125rem] leading-[1.3] font-medium">
            AI &amp; Full-Stack Engineer
          </p>
          <p className="text-[var(--prose)] text-[0.95rem] leading-[1.6]">
            I build accessible, production AI systems end to end — from
            multi-agent reasoning to the platform underneath.
          </p>
        </header>

        <div className="my-10 lg:my-16">
          <Navigation items={NAV_ITEMS} />
        </div>

        <div className="mt-auto pt-10">
          <SocialLinks />
        </div>
      </motion.div>
    </aside>
  );
}
