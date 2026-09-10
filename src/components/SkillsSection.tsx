import { Section } from "./Section";

const SKILL_GROUPS = [
  {
    group: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"],
  },
  {
    group: "Frameworks & Libraries",
    skills: [
      "Next.js",
      "React.js",
      "React Native",
      "Node.js",
      "Express",
      "NestJS",
      "GraphQL",
      "Tailwind CSS",
    ],
  },
  {
    group: "Databases & Data",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MS SQL Server",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "pgvector",
      "Drizzle ORM",
      "Sequelize",
    ],
  },
  {
    group: "AI & ML",
    skills: [
      "PyTorch",
      "Hugging Face Transformers",
      "scikit-learn",
      "pandas",
      "NumPy",
      "Gensim/LDA",
      "RAG",
      "LLM integration",
      "vector search",
      "embeddings",
      "fine-tuning",
      "BERT/RoBERTa",
      "multi-agent orchestration",
      "NLP",
      "model evaluation",
    ],
  },
  {
    group: "Cloud & DevOps",
    skills: [
      "Azure (Container Apps, AI Foundry, Bicep)",
      "GCP (Compute Engine, Cloud Run, Cloud Functions, Cloud Storage, Pub/Sub)",
      "Docker",
      "Azure DevOps Pipelines",
      "GitHub Actions",
      "Turborepo",
      "pnpm",
      "BullMQ",
      "Git",
    ],
  },
  {
    group: "Testing & Observability",
    skills: [
      "Jest (unit, integration, e2e)",
      "Azure Application Insights",
      "LogRocket",
      "Cloud Logging",
    ],
  },
];

export function SkillsSection() {
  return (
    <Section id="skills" label="Skills">
      <div className="flex flex-col">
        {SKILL_GROUPS.map((group, gi) => (
          <div
            key={group.group}
            className={`grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-4 py-6 ${
              gi > 0 ? "border-t border-[var(--hair)]" : ""
            }`}
          >
            <p className="font-mono text-[9.5px] tracking-[0.18em] uppercase text-[var(--dim)]">
              {group.group}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-[9px] tracking-[0.16em] uppercase text-[var(--dim)] border border-[var(--hair)] px-2 py-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
