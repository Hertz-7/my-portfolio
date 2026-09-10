export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 pt-24 lg:pt-32 pb-20 lg:pb-28">
      <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--accent)] mb-8">
        01 &nbsp;/&nbsp; About
      </p>

      <div className="flex flex-col gap-5">
        <p className="font-body text-[1.05rem] leading-[1.74] tracking-[0.005em] text-[var(--prose)]">
          Hi, I&apos;m Mohammad Aosaf — an AI and full-stack engineer based in
          Islamabad. I build production AI systems end to end: multi-agent
          reasoning, retrieval over regulated source material, evaluation in
          production, and the multi-tenant platforms and infrastructure they
          run on.
        </p>
        <p className="font-body text-[1.05rem] leading-[1.74] tracking-[0.005em] text-[var(--prose)]">
          Currently at{" "}
          <a
            href="https://chirongrid.ai/om/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--type)] font-semibold underline decoration-[var(--accent)] decoration-1 underline-offset-4 hover:decoration-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ground)] rounded-sm"
          >
            MindHYVE.ai
          </a>
          , where I architected and shipped{" "}
          <a
            href="https://chirongrid.ai/om/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--type)] font-semibold underline decoration-[var(--accent)] decoration-1 underline-offset-4 hover:decoration-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ground)] rounded-sm"
          >
            ChironOM
          </a>{" "}
          — a multi-tenant healthcare AI platform coordinating five specialised
          reasoning agents across six clinical pathways, with retrieval grounded
          in medical-legal guidelines and human-in-the-loop physician review.
        </p>
        <p className="font-body text-[1.05rem] leading-[1.74] tracking-[0.005em] text-[var(--prose)]">
          Before that I led engineering at{" "}
          <a
            href="https://www.qlu.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--type)] font-semibold underline decoration-[var(--accent)] decoration-1 underline-offset-4 hover:decoration-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ground)] rounded-sm"
          >
            QLU.ai
          </a>{" "}
          for a three-product business unit (Dialer, Outreach, AI Voice SDR) —
          managing three developers and two QA engineers across architecture,
          delivery, code quality and release process.
        </p>
        <p className="font-body text-[1.05rem] leading-[1.74] tracking-[0.005em] text-[var(--prose)]">
          I&apos;ve shipped systems that serve{" "}
          <span className="text-[var(--type)] font-semibold">
            500K+ users
          </span>{" "}
          in production, debugged production incidents across services, logs,
          databases and third-party APIs, and written an IEEE-format research
          paper on political bias detection across Pakistani news.
        </p>
      </div>
    </section>
  );
}
