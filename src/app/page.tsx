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
      </main>
      <Footer />
    </>
  );
}
