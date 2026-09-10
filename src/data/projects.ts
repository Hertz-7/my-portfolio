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
      "Multi-tenant healthcare AI platform — clinical documentation, billing, authorisation and medical evaluation. Multi-agent reasoning with retrieval grounded in medical-legal guidelines and human-in-the-loop physician review.",
    technologies: ["NestJS", "Next.js", "PostgreSQL", "pgvector", "Azure AI Foundry"],
  },
  {
    title: "QLU.ai",
    href: "https://www.qlu.ai/",
    description:
      "AI-native executive sourcing. Natural-language candidate search over millions of profiles, an event-driven outreach system, and a Twilio dialer carrying an autonomous voice SDR.",
    technologies: ["React", "NestJS", "Elasticsearch", "Twilio", "WebSockets"],
  },
  {
    title: "TheoAI",
    href: "https://chat.theogrid.ai/",
    description:
      "Production AI assistant at 500K+ users. Maintained in production — observability, incident response, tracing across services, logs, databases and third-party APIs.",
    technologies: ["Azure App Insights", "LogRocket", "Incident Response"],
  },
];
