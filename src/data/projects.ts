export interface Project {
  title: string;
  href?: string;
  description: string;
  technologies?: string[];
}

export const projects: Project[] = [
  {
    title: "ChironOM",
    href: "https://chirongrid.ai/om/",
    description:
      "Multi-tenant healthcare AI SaaS at MindHYVE.ai — clinical documentation, billing, RFA / UR authorisation, and QME evaluation. Five specialised reasoning agents across six clinical pathways, MTUS / ACOEM RAG, and tenant isolation moved into PostgreSQL Row-Level Security across 11 data domains.",
    technologies: ["NestJS", "Next.js 15", "PostgreSQL RLS", "pgvector", "Azure AI Foundry"],
  },
  {
    title: "TheoAI",
    href: "https://chat.theogrid.ai/",
    description:
      "Live MindHYVE.ai product at 500K+ users. Maintained in production — observability with Azure Application Insights and LogRocket, and the escalation point for incidents tracing failures across services, logs, databases and third-party APIs.",
    technologies: ["Azure App Insights", "LogRocket", "Incident Response"],
  },
  {
    title: "AI People Search — QLU.ai",
    href: "https://www.qlu.ai/",
    description:
      "QLU.ai's core revenue product — natural-language candidate search over millions of executive profiles. Translates freeform queries into optimised SQL and Elasticsearch; query optimisation work delivered up to 90% latency reduction on complex searches, supporting multi-million-dollar deal cycles.",
    technologies: ["React", "NestJS", "PostgreSQL", "Elasticsearch"],
  },
  {
    title: "Outreach Automation — QLU.ai",
    href: "https://www.qlu.ai/outreach",
    description:
      "Event-driven outreach system with campaign workflows and scheduling logic targeting candidates by availability, seniority, industry, and engagement history. Redis-backed background jobs for execution; Redis pub/sub fan-out delivers real-time status updates to the dashboard.",
    technologies: ["Node.js", "Express", "Redis", "BullMQ", "WebSockets"],
  },
  {
    title: "Twilio Dialer & AI Voice SDR — QLU.ai",
    href: "https://www.qlu.ai/dialer",
    description:
      "High-volume Twilio outbound calling infrastructure for recruitment outreach — call reliability, call-state handling, status webhooks, real-time call events over WebSockets. The AI Voice SDR is built directly on the Dialer for autonomous outbound calls with speech recognition, response generation, and call disposition logging.",
    technologies: ["NestJS", "React", "Twilio", "WebSockets", "PostgreSQL"],
  },
  {
    title: "AI Agents — QLU.ai",
    description:
      "Architected and delivered the MVP for a new AI Agents application, rapidly building the frontend and backend architecture with React, Node.js, and Express.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
  },
  {
    title: "Crypto Property Trading Platform — Thy Reality",
    description:
      "Cryptocurrency-based platform for buying and trading property shares, built with NestJS, React, TypeScript and Tailwind CSS, with secure purchase and trading workflows. Companion mobile app in React Native on optimised GraphQL APIs.",
    technologies: ["NestJS", "React Native", "TypeScript", "GraphQL", "Tailwind CSS"],
  },
];