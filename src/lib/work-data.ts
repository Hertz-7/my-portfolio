import { WorkEntry } from "./work";

export const WORK_INDEX: WorkEntry[] = [
  {
    slug: "chironom",
    title: "ChironAI OM",
    roleLabel: "MindHYVE.ai — architected & shipped",
    period: "2024–Present",
    summary:
      "Multi-tenant healthcare AI platform covering clinical documentation, billing, authorisation and medical evaluation. Five specialised reasoning agents across six clinical pathways, with retrieval grounded in medical-legal guidelines and human-in-the-loop physician review.",
    tags: ["NestJS", "Next.js", "PostgreSQL", "pgvector", "Azure AI Foundry", "Redis"],
    links: [{ label: "Visit ↗", href: "https://chirongrid.ai/om/" }],
    heroImage: "/work/chironom/hero.svg",
    heroImageAlt: "ChironAI OM — multi-tenant healthcare AI platform",
    highlights: [
      {
        title: "Multi-Agent Orchestration",
        body: "Five specialised reasoning agents — medical, legal, financial, risk, ethics — coordinated conditionally per case signals across six clinical pathways.",
      },
      {
        title: "RAG Pipeline",
        body: "MTUS/ACOEM guidelines retrieval: PDF ingestion, section-aware chunking, HNSW vector search, two-step LLM retrieval with citation checking.",
      },
      {
        title: "Tenant Isolation",
        body: "PostgreSQL Row-Level Security with JWT-derived tenant context across 11 data domains, validated by automated isolation tests on every PR.",
      },
    ],
    order: 1,
  },
  {
    slug: "ai-people-search",
    title: "QLU.ai — AI People Search",
    roleLabel: "QLU.ai — core revenue product",
    period: "2024–2026",
    summary:
      "Natural-language candidate search over millions of executive profiles. Freeform queries are translated into optimised SQL and Elasticsearch; query optimisation work delivered up to 90% latency reduction on complex searches.",
    tags: ["React", "NestJS", "PostgreSQL", "Elasticsearch"],
    links: [{ label: "Visit ↗", href: "https://www.qlu.ai/" }],
    heroImage: "/work/ai-people-search/hero.svg",
    heroImageAlt: "QLU.ai — AI People Search",
    order: 2,
  },
  {
    slug: "outreach-automation",
    title: "QLU Outreach",
    roleLabel: "QLU.ai — end-to-end architecture",
    period: "2024–2026",
    summary:
      "Event-driven outreach system with campaign workflows, scheduling logic, and Redis-backed background jobs. Redis pub/sub fan-out delivers real-time status updates to the dashboard as each touch executes.",
    tags: ["Node.js", "Express", "Redis", "BullMQ", "WebSockets"],
    links: [{ label: "Visit ↗", href: "https://www.qlu.ai/outreach" }],
    heroImage: "/work/outreach-automation/hero.svg",
    heroImageAlt: "QLU.ai — Outreach Automation",
    order: 3,
  },
  {
    slug: "dialer-voice-sdr",
    title: "QLU Dialer",
    roleLabel: "QLU.ai — Twilio outbound platform",
    period: "2024–2026",
    summary:
      "High-volume Twilio outbound calling infrastructure for recruitment outreach — call reliability, call-state handling, status webhooks, real-time call events over WebSockets. The AI Voice SDR runs on top of the Dialer for autonomous calls.",
    tags: ["NestJS", "Twilio", "WebSockets", "PostgreSQL", "AI Voice"],
    links: [{ label: "Visit ↗", href: "https://www.qlu.ai/dialer" }],
    heroImage: "/work/dialer-voice-sdr/hero.svg",
    heroImageAlt: "QLU.ai — Twilio Dialer and AI Voice SDR",
    order: 4,
  },
  {
    slug: "propnerd",
    title: "PropNerd",
    roleLabel: "Built & shipped — fractional property investment platform",
    period: "2024",
    summary:
      "Real-estate investing platform supporting fractional property investment and tokenization on Solana, with a React Native companion app and AI-assisted tooling.",
    tags: ["Next.js", "Solana", "React Native", "AI", "TypeScript"],
    links: [{ label: "Visit ↗", href: "https://propnerd.io/" }],
    heroImage: "/projects/propnerd.svg",
    heroImageAlt: "PropNerd — fractional property investment",
    order: 5,
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
    order: 6,
  },
];
