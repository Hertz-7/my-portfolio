import { WorkEntry } from "./work";

export const WORK_INDEX: WorkEntry[] = [
  {
    slug: "chironom",
    title: "ChironOM",
    roleLabel: "MindHYVE.ai — architected & shipped",
    period: "2024–Present",
    summary:
      "Multi-tenant healthcare AI platform. Five specialised reasoning agents across six clinical pathways, MTUS/ACOEM retrieval, and tenant isolation moved into Postgres row-level security across 11 data domains.",
    tags: ["NestJS", "Next.js 15", "PostgreSQL RLS", "pgvector", "Azure AI Foundry", "BullMQ"],
    links: [{ label: "Visit ↗", href: "https://chirongrid.ai/om/" }],
    order: 1,
  },
  {
    slug: "qlu",
    title: "QLU.ai",
    roleLabel: "Senior Full Stack Engineer — led a team of 3",
    period: "2024–2026",
    summary:
      "AI-native executive sourcing platform. Natural-language candidate search over millions of profiles, an event-driven outreach system, and a Twilio dialer carrying an autonomous voice SDR.",
    tags: ["React", "NestJS", "Elasticsearch", "Redis", "Twilio", "WebSockets"],
    links: [{ label: "Visit ↗", href: "https://www.qlu.ai/" }],
    order: 2,
  },
  {
    slug: "theoai",
    title: "TheoAI",
    roleLabel: "MindHYVE.ai — maintained in production",
    period: "2024–Present",
    summary:
      "Live product at 500K+ users. Instrumented observability, and the escalation point for production incidents — tracing failures across services, logs, databases and third-party APIs.",
    tags: ["Azure App Insights", "LogRocket", "Incident response"],
    links: [{ label: "Visit ↗", href: "https://chat.theogrid.ai/" }],
    order: 3,
  },
  {
    slug: "newsbiasdetect",
    title: "NewsBiasDetect",
    roleLabel: "Research — IEEE-format paper",
    period: "2023–2024",
    summary:
      "Political bias detection across Pakistani news. A 1,000-article dataset annotated with expert journalists, and four fine-tuned transformers compared; RoBERTa best at 0.796 accuracy.",
    tags: ["PyTorch", "RoBERTa", "Hugging Face", "LDA"],
    links: [],
    order: 4,
  },
];
