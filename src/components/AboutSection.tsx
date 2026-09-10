import { Section } from "./Section";

export function AboutSection() {
  return (
    <Section id="about" label="About">
      <div className="flex flex-col gap-6 max-w-[62ch]">
        <p className="text-[1.02rem] leading-[1.74] tracking-[0.005em] text-[var(--prose)]">
          I build production AI systems — the kind that coordinate multiple reasoning agents, handle
          real clinical or enterprise workflows, and have to work correctly under load. That means
          thinking carefully about orchestration, retrieval, tenant isolation, and the APIs that tie
          everything together. I{" "}
          <span className="text-[var(--type)] font-semibold">write code that ships</span> and
          I own the infrastructure that runs it.
        </p>
        <p className="text-[1.02rem] leading-[1.74] tracking-[0.005em] text-[var(--prose)]">
          My current work at MindHYVE.ai sits at the intersection of multi-agent AI systems and
          healthcare-grade data requirements — where tenant isolation, PHI audit logging, and
          medical-legal RAG pipelines aren&apos;t optional. Before that I led delivery across three
          platforms at QLU.ai, working directly on the architecture that handles thousands of concurrent
          sessions.
        </p>
        <p className="text-[1.02rem] leading-[1.74] tracking-[0.005em] text-[var(--prose)]">
          I write about systems and production AI on GitHub and LinkedIn. FAST-NUCES, BS Computer
          Science, 2024.
        </p>
      </div>
    </Section>
  );
}
