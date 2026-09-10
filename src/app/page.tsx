export default function Home() {
  return (
    <main className="w-full max-w-3xl mx-auto px-6 py-20">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--dim)] mb-16">
        P0 — Token &amp; Type Proof
      </p>

      <section className="mb-16">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)] mb-6">
          Colour Tokens
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { token: "--ground", value: "#05100E", bg: "bg-[#05100E]", label: "Page ground" },
            { token: "--ground2", value: "#081916", bg: "bg-[#081916]", label: "Raised surface" },
            { token: "--hair", value: "#16302C", bg: "bg-[#16302C]", label: "Hairline rules" },
            { token: "--type", value: "#EAF3ED", bg: "bg-[#EAF3ED]", label: "Headings / figures" },
            { token: "--prose", value: "#C4D3CC", bg: "bg-[#C4D3CC]", label: "Body copy" },
            { token: "--dim", value: "#7F9A93", bg: "bg-[#7F9A93]", label: "Labels / mono only" },
            { token: "--accent", value: "#3FBF9E", bg: "bg-[#3FBF9E]", label: "Accent / CTAs" },
          ].map(({ token, value, bg, label }) => (
            <div key={token} className="flex flex-col gap-2">
              <div
                className={`h-16 w-full border border-[var(--hair)] ${bg}`}
              />
              <p className="font-mono text-[9px] text-[var(--accent)]">{token}</p>
              <p className="font-mono text-[9px] text-[var(--dim)]">{value}</p>
              <p className="text-[11px] text-[var(--prose)]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)] mb-6">
          Display — Newsreader 500 (serif)
        </p>
        <div className="flex flex-col gap-4">
          <p
            className="font-display text-[var(--type)] leading-[1.1] tracking-[-0.014em]"
            style={{ fontSize: "clamp(2.1rem, 4.7vw, 3.6rem)" }}
          >
            I build production AI systems — from multi-agent reasoning to the platform underneath.
          </p>
          <p className="font-display text-[var(--type)] leading-[1.1] tracking-[-0.014em] text-[1.8rem]">
            ChironOM
          </p>
          <p className="font-display text-[var(--type)] leading-[1.1] tracking-[-0.014em] text-[1.4rem]">
            500K+
          </p>
        </div>
      </section>

      <section className="mb-16">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)] mb-6">
          Body — Instrument Sans 400 (sans)
        </p>
        <div className="flex flex-col gap-4 max-w-[62ch]">
          <p className="text-[1.06rem] leading-[1.72] tracking-[0.003em] text-[var(--prose)]">
            Currently at MindHYVE.ai, where I architected and shipped ChironOM — a multi-tenant
            healthcare AI platform coordinating five specialised reasoning agents across six clinical
            pathways, with retrieval grounded in medical-legal guidelines. Before that I led engineering
            across three platforms at QLU.ai.
          </p>
          <p className="text-[1.06rem] leading-[1.72] tracking-[0.003em] text-[var(--prose)]">
            The stack spans NestJS, Next.js 15, PostgreSQL with Row-Level Security, pgvector, Azure
            AI Foundry, BullMQ, and event-driven architectures built for scale.
          </p>
        </div>
      </section>

      <section>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)] mb-6">
          Mono — IBM Plex Mono 400/500 (labels only)
        </p>
        <div className="flex flex-col gap-3">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--dim)]">
            AI &amp; Full-Stack Engineer — Islamabad, PK
          </p>
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--dim)]">
            MindHYVE.ai — AI &amp; Full-Stack Engineer
          </p>
          <p className="font-mono text-[9px] tracking-[0.24em] uppercase text-[var(--dim)]">
            NestJS · Next.js 15 · PostgreSQL · pgvector
          </p>
          <p className="font-mono text-[9px] tracking-[0.22em] uppercase text-[var(--accent)]">
            View work
          </p>
        </div>
      </section>
    </main>
  );
}
