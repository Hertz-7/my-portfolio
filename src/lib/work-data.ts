import { WorkEntry } from "./work";

export const WORK_INDEX: WorkEntry[] = [
  {
    slug: "chironom",
    title: "ChironOM",
    roleLabel: "MindHYVE.ai — architected & shipped",
    period: "2024–Present",
    summary:
      "Multi-tenant healthcare AI platform covering clinical documentation, billing, authorisation and medical evaluation. Five specialised reasoning agents across six clinical pathways, with retrieval grounded in medical-legal guidelines and human-in-the-loop physician review.",
    tags: ["NestJS", "Next.js", "PostgreSQL", "pgvector", "Azure AI Foundry", "Redis"],
    links: [{ label: "Visit ↗", href: "https://chirongrid.ai/om/" }],
    order: 1,
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
    order: 2,
  },
  {
    slug: "ai-people-search",
    title: "AI People Search",
    roleLabel: "QLU.ai — core revenue product",
    period: "2024–2026",
    summary:
      "Natural-language candidate search over millions of executive profiles. Freeform queries are translated into optimised SQL and Elasticsearch; query optimisation work delivered up to 90% latency reduction on complex searches.",
    tags: ["React", "NestJS", "PostgreSQL", "Elasticsearch"],
    links: [{ label: "Visit ↗", href: "https://www.qlu.ai/" }],
    order: 3,
  },
  {
    slug: "outreach-automation",
    title: "Outreach Automation",
    roleLabel: "QLU.ai — end-to-end architecture",
    period: "2024–2026",
    summary:
      "Event-driven outreach system with campaign workflows, scheduling logic, and Redis-backed background jobs. Redis pub/sub fan-out delivers real-time status updates to the dashboard as each touch executes.",
    tags: ["Node.js", "Express", "Redis", "BullMQ", "WebSockets"],
    links: [{ label: "Visit ↗", href: "https://www.qlu.ai/outreach" }],
    order: 4,
  },
  {
    slug: "dialer-voice-sdr",
    title: "Twilio Dialer & AI Voice SDR",
    roleLabel: "QLU.ai — Twilio outbound platform",
    period: "2024–2026",
    summary:
      "High-volume Twilio outbound calling infrastructure for recruitment outreach — call reliability, call-state handling, status webhooks, real-time call events over WebSockets. The AI Voice SDR runs on top of the Dialer for autonomous calls.",
    tags: ["NestJS", "Twilio", "WebSockets", "PostgreSQL", "AI Voice"],
    links: [{ label: "Visit ↗", href: "https://www.qlu.ai/dialer" }],
    order: 5,
  },
  {
    slug: "ai-agents",
    title: "AI Agents",
    roleLabel: "QLU.ai — MVP architecture & delivery",
    period: "2024–2026",
    summary:
      "Rapid MVP for QLU's new AI Agents application — frontend and backend architecture using React, Node.js, and Express.",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
    links: [{ label: "QLU.ai ↗", href: "https://www.qlu.ai/" }],
    order: 6,
  },
  {
    slug: "crypto-property",
    title: "Crypto Property Trading",
    roleLabel: "Thy Reality — built & shipped",
    period: "2024",
    summary:
      "Cryptocurrency-based platform for buying and trading property shares, with a React Native companion app on optimised GraphQL APIs.",
    tags: ["NestJS", "React Native", "TypeScript", "GraphQL", "Tailwind CSS"],
    links: [],
    order: 7,
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
    order: 8,
  },
];