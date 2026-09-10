import { Header, Footer, Section, Container, Rule } from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Section id="work" label="Selected Work">
          <Container>
            <p className="font-body text-[1.02rem] leading-[1.74] tracking-[0.005em] text-[var(--prose)] max-w-[62ch]">
              Selected work content goes here — P2 builds the hero and work index.
            </p>
          </Container>
        </Section>
        <Rule />
        <Section id="numbers" label="In Numbers">
          <Container>
            <p className="font-body text-[1.02rem] leading-[1.74] tracking-[0.005em] text-[var(--prose)] max-w-[62ch]">
              Numbers content goes here — P4 builds the count-up section.
            </p>
          </Container>
        </Section>
        <Rule />
        <Section id="contact" label="Contact">
          <Container>
            <p className="font-body text-[1.02rem] leading-[1.74] tracking-[0.005em] text-[var(--prose)] max-w-[62ch]">
              Contact content goes here — P5 builds the contact section.
            </p>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
