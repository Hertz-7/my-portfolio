import {
  Header,
  Footer,
  HeroSection,
  Rule,
  WorkIndex,
  NumbersSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  EducationSection,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <HeroSection />

        <Rule />

        <WorkIndex />

        <Rule />

        <NumbersSection />

        <Rule />

        <AboutSection />

        <Rule />

        <SkillsSection />

        <Rule />

        <ExperienceSection />

        <Rule />

        <ProjectsSection />

        <Rule />

        <EducationSection />

        <Rule />

        <footer className="py-12 border-t border-[var(--hair)]" id="contact">
          <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
            <p className="font-mono text-[9.5px] tracking-[0.18em] uppercase text-[var(--dim)]">
              mohammadaosaf@gmail.com —{" "}
              <a
                href="https://github.com/Hertz-7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent)] transition-colors"
              >
                GitHub
              </a>{" "}
              —{" "}
              <a
                href="https://linkedin.com/in/mohammad-aosaf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent)] transition-colors"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </footer>
      </main>
      <Footer />
    </>
  );
}
