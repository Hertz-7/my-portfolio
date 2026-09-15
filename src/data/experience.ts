export interface Experience {
  date: string;
  role: string;
  company: string;
  href?: string;
  description: string[];
  links?: { label: string; href: string }[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    date: "Jan 2026 — Present",
    role: "Full-Stack & AI Engineer",
    company: "MindHYVE.ai",
    href: "https://www.mindhyve.ai/",
    description: [
      "Architected ChironOM, a multi-tenant healthcare AI SaaS with clinical documentation, billing, authorization, and QME evaluation — built on NestJS, Next.js 15, React 19, PostgreSQL with Row-Level Security, Redis, and Azure Container Apps.",
      "Re-architected tenant isolation to shared-database RLS across 11 data domains; built the REST API with JWT tenant context, refresh-token rotation, and RBAC.",
      "Designed the Multi-HYVE orchestration layer coordinating 5 specialized reasoning agents across 6 clinical care pathways with human-in-the-loop review.",
      "Delivered an MTUS/ACOEM RAG pipeline and an event-driven document pipeline (BullMQ/Redis workers + Azure Vision OCR) for medical-record processing.",
    ],
    technologies: [
      "Next.js 15",
      "React 19",
      "NestJS",
      "PostgreSQL",
      "Azure AI",
      "BullMQ",
    ],
  },
  {
    date: "Sep 2024 — Jan 2026",
    role: "Senior Full Stack Engineer",
    company: "QLU.ai",
    href: "https://www.qlu.ai/",
    description: [
      "Led engineering for 3 products (Dialer, Outreach automation, AI Voice SDR) across architecture, delivery, and release — managing 3 developers and 2 QA engineers.",
      "Architected and delivered the outreach automation platform as an event-driven system with workflows, scheduling, and Redis-backed background jobs for real-time updates.",
      "Built QLU's AI Voice SDR and maintained the Twilio-based Dialer for high-volume autonomous outbound calls with WebSocket-driven call events.",
      "Optimized complex SQL and Elasticsearch queries for AI People Search, improving performance by up to 90% on natural-language candidate search over millions of profiles.",
      "Executed zero-downtime migrations of user, credit, and subscription data across PostgreSQL, MySQL, and MS SQL Server for 1,500+ users.",
    ],
    links: [
      { label: "AI People Search ↗", href: "https://www.qlu.ai/" },
      { label: "Outreach ↗", href: "https://www.qlu.ai/outreach" },
      { label: "Dialer ↗", href: "https://www.qlu.ai/dialer" },
    ],
    technologies: [
      "Next.js",
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Twilio",
      "GCP",
    ],
  },
  {
    date: "May 2024 — Sep 2024",
    role: "Full Stack Engineer",
    company: "Thy Reality",
    description: [
      "Built a cryptocurrency-based property trading platform with NestJS, React, TypeScript, and Tailwind CSS, covering purchase and trading workflows.",
      "Developed the mobile companion app in React Native and designed GraphQL APIs for improved real-time data handling.",
    ],
    technologies: ["NestJS", "React", "React Native", "TypeScript", "GraphQL", "Tailwind CSS"],
  },
  {
    date: "Jun 2023 — Aug 2023",
    role: "React Developer Intern",
    company: "Hexa IT",
    description: [
      "Built reusable React components and user-facing features for production web applications, integrating RESTful APIs to backend services.",
    ],
    technologies: ["React", "JavaScript", "REST APIs"],
  },
];
