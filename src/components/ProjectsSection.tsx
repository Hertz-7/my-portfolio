const PROJECTS = [
  {
    title: "NewsBiasDetect",
    period: "2023 — 2024",
    roleLabel: "Research · IEEE-format paper",
    summary:
      "Political bias detection across Pakistani news. Built a 1,000-article annotated dataset with expert journalists, fine-tuned four transformer architectures (BERT, RoBERTa, DistilBERT, XLNet), and benchmarked topic modelling with LDA. RoBERTa reached 0.796 accuracy and 0.767 F1.",
    tags: ["PyTorch", "RoBERTa", "Hugging Face", "LDA"],
    href: null,
  },
  {
    title: "Semantic Textual Relatedness",
    period: "2024",
    roleLabel: "Research · SemEval 2024 Task 1",
    summary:
      "BERT-based regression system for English semantic relatedness, evaluated on the SemEval 2024 Task 1 dataset. Compared cross-encoder and bi-encoder architectures with a sentence-transformer baseline.",
    tags: ["BERT", "PyTorch", "NLP"],
    href: null,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 lg:py-28">
      <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--accent)] mb-12">
        03 &nbsp;/&nbsp; Projects &amp; Research
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      <div className="mt-12">
        <h3 className="font-display font-bold text-[var(--type)] text-[1.4rem] leading-[1.1] tracking-[-0.014em] mb-4">
          Selected live products
        </h3>
        <ul className="flex flex-col gap-3">
          <LiveLinkRow
            title="ChironOM"
            company="MindHYVE.ai"
            description="Healthcare AI platform — clinical documentation, billing, authorisation, medical evaluation."
            href="https://chirongrid.ai/om/"
          />
          <LiveLinkRow
            title="QLU.ai"
            company="QLU.ai"
            description="AI-native executive sourcing — natural-language candidate search, outreach, voice SDR."
            href="https://www.qlu.ai/"
          />
          <LiveLinkRow
            title="TheoAI"
            company="MindHYVE.ai"
            description="Production AI assistant maintained at 500K+ users — observability and incident response."
            href="https://chat.theogrid.ai/"
          />
        </ul>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  return (
    <article
      className="
        group relative flex flex-col gap-4
        rounded-[12px] border border-[var(--hair)] bg-[var(--ground2)]
        p-6 lg:p-8 min-h-[260px]
        transition-colors duration-150
        hover:border-[var(--accent)]
      "
    >
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--accent)] tabular-nums">
          0{index + 1}
        </p>
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--dim)] tabular-nums">
          {project.period}
        </p>
      </div>

      <div>
        <h3 className="font-display font-bold text-[var(--type)] text-[clamp(1.25rem,1.6vw,1.55rem)] leading-[1.12] tracking-[-0.014em] mb-2">
          {project.title}
        </h3>
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--dim)]">
          {project.roleLabel}
        </p>
      </div>

      <p className="font-body text-[0.98rem] leading-[1.72] tracking-[0.005em] text-[var(--prose)]">
        {project.summary}
      </p>

      {project.tags.length > 0 && (
        <ul className="flex flex-wrap gap-2 mt-auto pt-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="font-mono text-[9.5px] tracking-[0.16em] uppercase text-[var(--dim)] border border-[var(--hair)] px-2 py-1 rounded-[2px]"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

function LiveLinkRow({
  title,
  company,
  description,
  href,
}: {
  title: string;
  company: string;
  description: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group flex items-baseline justify-between gap-6
          py-4 border-t border-[var(--hair)]
          transition-colors duration-150
          hover:[&_h4]:text-[var(--accent)]
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ground)] rounded-sm
        "
      >
        <div className="flex-1">
          <h4 className="font-display font-bold text-[var(--type)] text-[1.1rem] leading-[1.15] tracking-[-0.014em] transition-colors">
            {title}
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--dim)] ml-3 align-middle">
              · {company}
            </span>
          </h4>
          <p className="font-body text-[0.95rem] leading-[1.7] tracking-[0.005em] text-[var(--prose)] mt-1.5">
            {description}
          </p>
        </div>
        <span
          aria-hidden="true"
          className="
            font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--accent)]
            shrink-0 translate-y-0 group-hover:-translate-y-0.5
            transition-transform duration-150
          "
        >
          ↗
        </span>
      </a>
    </li>
  );
}
