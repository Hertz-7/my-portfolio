"use client";

import { Navigation } from "./Navigation";
import { SocialLinks } from "./SocialLinks";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

export function Sidebar() {
  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-200">
          Mohammad&nbsp;Aosaf
        </h1>
        <p className="text-lg font-medium text-slate-200">
          AI &amp; Full-Stack Engineer
        </p>
        <p className="max-w-xs mt-4 text-slate-400 leading-relaxed">
          I build accessible, production AI systems end to end — from multi-agent reasoning to the platform underneath.
        </p>
      </header>

      {/* Mobile nav */}
      <div className="lg:hidden">
        <Navigation items={NAV_ITEMS} orientation="horizontal" />
      </div>

      {/* Desktop nav — in the middle */}
      <div className="hidden lg:block">
        <Navigation items={NAV_ITEMS} orientation="vertical" />
      </div>

      {/* Social icons at bottom */}
      <div className="flex items-center gap-5 mt-8 lg:mt-0">
        <SocialLinks />
      </div>
    </div>
  );
}
