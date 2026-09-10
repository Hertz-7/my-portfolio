import { Button } from "./Button";
import { PlainLink } from "./PlainLink";
import { CredentialStrip } from "./CredentialStrip";
import { StackStrip } from "./StackStrip";

export function HeroSection() {
  return (
    <section className="pt-16 pb-0 lg:pt-20">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
        <p className="font-mono text-[9.5px] tracking-[0.22em] uppercase text-[var(--dim)] mb-8">
          AI &amp; Full-Stack Engineer — Islamabad, PK
        </p>

        <h1
          className="font-display font-bold text-[var(--type)] leading-[1.08] tracking-[-0.028em] text-wrap balance max-w-[24ch]"
          style={{ fontSize: "clamp(2.1rem, 4.7vw, 3.6rem)" }}
        >
          I build{" "}
          <em
            className="font-normal italic"
            style={{ fontStyle: "normal", color: "var(--accent)" }}
          >
            production AI systems
          </em>{" "}
          — from multi-agent reasoning to the platform underneath.
        </h1>

        <p className="mt-6 font-body text-[1.02rem] leading-[1.74] tracking-[0.005em] text-[var(--prose)] max-w-[62ch]">
          Currently at{" "}
          <span className="text-[var(--type)] font-semibold">MindHYVE.ai</span>, where I
          architected and shipped{" "}
          <span className="text-[var(--type)] font-semibold">ChironOM</span> — a multi-tenant
          healthcare AI platform coordinating five specialised reasoning agents across six clinical
          pathways, with retrieval grounded in medical-legal guidelines. Before that I led engineering
          across three platforms at{" "}
          <span className="text-[var(--type)] font-semibold">QLU.ai</span>.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Button href="#work">View work</Button>
          <PlainLink href="/resume.pdf">Résumé</PlainLink>
          <PlainLink href="mailto:mohammadaosaf@gmail.com">Get in touch</PlainLink>
        </div>

        <CredentialStrip />
      </div>

      <StackStrip />
    </section>
  );
}
