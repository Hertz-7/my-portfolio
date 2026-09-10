import { Sidebar } from "./Sidebar";
import { About } from "./About";
import { Experience } from "./Experience";
import { Projects } from "./Projects";

export function Portfolio() {
  return (
    <div className="portfolio-shell">
      <Sidebar />
      <main id="main-content" className="portfolio-main">
        <About />
        <Experience />
        <Projects />
        <footer className="mt-12 pt-8 border-t border-[var(--hair)]">
          <p className="text-[var(--mute)] text-[11px] tracking-[0.18em] uppercase">
            Designed &amp; built by Mohammad Aosaf &nbsp;·&nbsp; Islamabad, PK
          </p>
        </footer>
      </main>
    </div>
  );
}
