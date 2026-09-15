"use client";

import { Sidebar } from "./Sidebar";
import { About } from "./About";
import { Experience } from "./Experience";
import { Projects } from "./Projects";

export function Portfolio() {
  return (
    <div className="max-w-screen-xl mx-auto min-h-screen px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:items-start">
        {/* Left sidebar — sticky 50% width column */}
        <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <Sidebar />
        </div>

        {/* Right content — 50% width column */}
        <div className="lg:w-1/2 lg:py-24">
          <main id="main-content">
            <About />
            <Projects />
            <Experience />
          </main>
        </div>
      </div>
    </div>
  );
}
