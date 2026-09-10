import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="layout-shell">
        <Sidebar />
        <main id="main-content" className="layout-main flex flex-col">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <Footer />
        </main>
      </div>
    </SmoothScroll>
  );
}
