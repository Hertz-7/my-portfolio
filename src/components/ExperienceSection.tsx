const EXPERIENCE = [
  {
    period: "2026 — Present",
    role: "AI & Full-Stack Engineer",
    company: "MindHYVE.ai",
    companyHref: "https://chirongrid.ai/om/",
    description:
      "Architecting and shipping ChironOM — a multi-tenant healthcare AI platform covering clinical documentation, billing, authorisation and medical evaluation. Five specialised reasoning agents across six clinical pathways, with retrieval grounded in medical-legal guidelines and human-in-the-loop physician review.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "pgvector", "Azure AI Foundry"],
    liveLinks: [{ label: "ChironOM ↗", href: "https://chirongrid.ai/om/" }],
  },
  {
    period: "2024 — 2026",
    role: "Senior Full Stack Engineer",
    company: "QLU.ai",
    companyHref: "https://www.qlu.ai/",
    description:
      "Led engineering for a three-product business unit (Dialer, Outreach automation, AI Voice SDR) — managing three developers and two QA engineers across architecture, delivery, code quality and release process. Natural-language candidate search over millions of profiles, event-driven outreach, and a Twilio dialer carrying an autonomous voice SDR.",
    tags: [
      "React",
      "NestJS",
      "Elasticsearch",
      "Redis",
      "Twilio",
      "WebSockets",
    ],
    liveLinks: [
      { label: "QLU.ai ↗", href: "https://www.qlu.ai/" },
      { label: "Outreach ↗", href: "https://www.qlu.ai/outreach" },
      { label: "Dialer ↗", href: "https://www.qlu.ai/dialer" },
    ],
  },
  {
    period: "2024",
    role: "Full Stack Engineer",
    company: "Thy Reality",
    companyHref: null,
    description:
      "Crypto property-share platform. Next.js + NestJS + PostgreSQL stack; built the investor dashboard, KYC onboarding flow, and the share-allocation ledger.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Web3"],
    liveLinks: [],
  },
  {
    period: "2023",
    role: "React Developer Intern",
    company: "Hexa IT",
    companyHref: null,
    description:
      "Built reusable React component libraries and shipped internal admin tools for client engagements.",
    tags: ["React", "TypeScript", "SCSS"],
    liveLinks: [],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 lg:py-28">
      <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--accent)] mb-12">
        02 &nbsp;/&nbsp; Experience
      </p>

      <ul className="flex flex-col gap-6">
        {EXPERIENCE.map((item, i) => (
          <li key={`${item.company}-${i}`}>
            <ExperienceCard item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function ExperienceCard({
  item,
}: {
  item: (typeof EXPERIENCE)[number];
}) {
  return (
    <article
      className="
        grid grid-cols-1 lg:grid-cols-[10rem_1fr] gap-4 lg:gap-10
        rounded-[12px] border border-[var(--hair)] bg-[var(--ground2)]
        p-6 lg:p-8
        transition-colors duration-150
        hover:border-[var(--accent)]
      "
    >
      <div className="flex flex-col gap-1.5">
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--dim)] tabular-nums">
          {item.period}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h3 className="font-display font-bold text-[var(--type)] text-[clamp(1.15rem,1.5vw,1.35rem)] leading-[1.15] tracking-[-0.014em]">
            {item.role}
          </h3>
          <p className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-[var(--accent)]">
            {item.companyHref ? (
              <a
                href={item.companyHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--type)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ground2)] rounded-sm"
              >
                {item.company}
              </a>
            ) : (
              item.company
            )}
          </p>
        </div>

        <p className="font-body text-[1rem] leading-[1.72] tracking-[0.005em] text-[var(--prose)] max-w-[58ch]">
          {item.description}
        </p>

        {item.tags.length > 0 && (
          <ul className="flex flex-wrap gap-2 pt-1">
            {item.tags.map((tag) => (
              <li
                key={tag}
                className="font-mono text-[9.5px] tracking-[0.16em] uppercase text-[var(--dim)] border border-[var(--hair)] px-2 py-1 rounded-[2px]"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        {item.liveLinks.length > 0 && (
          <div className="flex flex-wrap gap-x-5 gap-y-1 pt-2">
            {item.liveLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ground2)] rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
