import { Header, Footer, HeroSection, Section, Rule, WorkIndex } from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />

        <Rule />

        <Section id="work" label="Selected Work">
          <WorkIndex />
        </Section>

        <Rule />

        <Section id="numbers" label="In Numbers">
          <p className="text-[1.02rem] leading-[1.74] tracking-[0.005em] text-[var(--prose)] max-w-[62ch]">
            Numbers content goes here — P4 builds the count-up section.
          </p>
        </Section>

        <Rule />

        <Section id="contact" label="Contact">
          <p className="text-[1.02rem] leading-[1.74] tracking-[0.005em] text-[var(--prose)] max-w-[62ch]">
            Contact content goes here — P5 builds the contact section.
          </p>
        </Section>
      </main>
      <Footer />
    </>
  );
}
