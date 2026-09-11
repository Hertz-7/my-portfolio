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
      "Architected and shipped ChironOM, a multi-tenant healthcare AI SaaS using Turborepo, pnpm, NestJS, Next.js 15, React 19, PostgreSQL, Drizzle ORM, Redis, and Azure Container Apps — covering clinical documentation, billing, RFA / UR authorization, and QME evaluation.",
      "Maintain TheoAI in production (500K+ users) and act as the escalation point for production incidents; instrumented services with Azure Application Insights and LogRocket, tracing failures across services, logs, databases, and third-party APIs.",
      "Re-architected tenant isolation from a database-per-tenant model to shared-database PostgreSQL Row-Level Security with JWT-derived tenant context across 11 data domains, validated by automated isolation tests; owned schema design, migrations, indexing, and transactional / row-level locking for race-free writes.",
      "Built the platform's REST API in NestJS with JWT-derived tenant context, refresh-token rotation, RBAC, and Server-Sent Events for streaming AI responses to the client.",
      "Designed the Multi-HYVE orchestration layer coordinating 5 specialised reasoning agents (medical, legal, financial, risk, ethics) across 6 clinical care pathways, invoked conditionally per case signals, with human-in-the-loop physician review.",
      "Delivered an MTUS / ACOEM RAG pipeline (PDF ingestion, section-aware chunking, HNSW vector search, two-step LLM retrieval), integrating Azure AI Foundry, DeepSeek-R1, Mistral Document AI OCR, Cohere embeddings, and pgvector.",
      "Built an event-driven asynchronous document pipeline on retrying BullMQ / Redis background workers (Azure Vision OCR with pdf-parse and Tesseract fallback) for OCR, structured extraction, and QME medical-record organization.",
      "Wrote Jest unit, integration, and end-to-end tests; maintained Azure DevOps and GitHub Actions pipelines; reinforced compliance with LLM evaluation harnesses, PHI audit logging, HIPAA risk assessment, STRIDE threat modeling, and Azure Bicep IaC.",
    ],
    technologies: [
      "Next.js 15",
      "React 19",
      "NestJS",
      "Turborepo",
      "PostgreSQL RLS",
      "pgvector",
      "Azure AI Foundry",
      "BullMQ",
      "Jest",
      "Azure Bicep",
    ],
  },
  {
    date: "Sep 2024 — Jan 2026",
    role: "Senior Full Stack Engineer",
    company: "QLU.ai",
    href: "https://www.qlu.ai/",
    description: [
      "Promoted from Full Stack Engineer; led engineering for a business unit of three products (Dialer, Outreach automation, AI Voice SDR), managing a team of 3 developers and 2 QA engineers across architecture, delivery, code quality, and release process.",
      "Directed architecture and delivery for 3 core platforms using Next.js, Node.js / Express, NestJS, and PostgreSQL, scaling to 1,500+ users with 100+ concurrent sessions.",
      "Deployed and operated QLU's services on Google Cloud (Compute Engine, Cloud Run, Cloud Functions, Cloud Storage, Pub/Sub), using Cloud Logging for production debugging.",
      "Refactored the credit and subscription billing systems end-to-end for 1,500+ users; executed zero-downtime migrations of user, credit, and subscription data across PostgreSQL, MySQL, and MS SQL Server without interrupting production.",
      "Owned the end-to-end architecture for QLU's Outreach automation platform as an event-driven system with workflows, scheduling logic, and Redis-backed background jobs; used Redis caching and pub/sub fan-out for real-time updates.",
      "Maintained and extended QLU's Twilio-based outbound Dialer (AI-powered, high-volume calling platform for recruitment outreach), owning call reliability, call-state handling, status webhooks, real-time call events over WebSockets, and outbound-calling workflows.",
      "Delivered key features for QLU's core revenue product, AI People Search — natural-language candidate search over millions of profiles — supporting multi-million-dollar deal cycles; optimised complex SQL and Elasticsearch queries to improve performance by up to 90%.",
      "Engineered QLU's AI Voice SDR on top of the Dialer for autonomous outbound recruitment calls using NestJS, React, PostgreSQL, Twilio, and WebSockets.",
      "Architected and delivered the MVP for a new AI Agents application, rapidly building frontend and backend using React, Node.js, and Express.",
      "Built and maintained REST APIs in Node.js / Express and NestJS across search, billing, admin, and outreach domains; shipped QLU's admin operations panel for plan management, user blocking, and operational controls.",
      "Developed a reusable authentication microservice using Node.js, Express, and PostgreSQL, migrating 1,500+ users from a monolithic database to improve system consistency.",
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
      "Express",
      "PostgreSQL",
      "Elasticsearch",
      "Redis",
      "Twilio",
      "WebSockets",
      "GCP",
    ],
  },
  {
    date: "May 2024 — Sep 2024",
    role: "Full Stack Engineer",
    company: "Thy Reality",
    description: [
      "Built and shipped a cryptocurrency-based platform for buying and trading property shares, using NestJS, React, TypeScript, and Tailwind CSS, with secure purchase and trading workflows.",
      "Developed the companion mobile app in React Native and designed optimised GraphQL APIs, improving system performance and real-time data handling.",
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
