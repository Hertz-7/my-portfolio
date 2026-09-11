export interface Project {
  title: string;
  href?: string;
  description: string;
  tech?: string[];
  image?: string;
  imageAlt?: string;
}

export const projects: Project[] = [
  {
    title: "QLU.ai",
    href: "https://www.qlu.ai/",
    image: "https://www.qlu.ai/images/people-search-product-1.svg",
    imageAlt: "QLU.ai — AI-powered executive search",
    description:
      "AI-powered executive search platform for finding, qualifying, and engaging executive candidates.",
    tech: ["Next.js", "AI", "Search", "Automation"],
  },
  {
    title: "QLU Outreach",
    href: "https://www.qlu.ai/outreach",
    image: "https://www.qlu.ai/images/outreach-hero-section.svg",
    imageAlt: "QLU Outreach — multi-channel campaigns",
    description:
      "Multi-channel AI outreach platform for LinkedIn, email, and phone campaigns.",
    tech: ["React", "AI", "Automation", "CRM"],
  },
  {
    title: "QLU Dialer",
    href: "https://www.qlu.ai/dialer",
    image: "https://www.qlu.ai/images/dialer-hero-section.svg",
    imageAlt: "QLU Dialer — executive search dialer",
    description:
      "Executive search dialer with recording, transcription, call disposition, and automated workflows.",
    tech: ["React", "AI", "Voice AI", "Automation"],
  },
  {
    title: "ChironAI OM",
    href: "https://chirongrid.ai/om/",
    image: "/projects/chiron-om.svg",
    imageAlt: "ChironAI OM — occupational-medicine operating system",
    description:
      "Agentic occupational-medicine operating system for the complete workers' compensation lifecycle.",
    tech: ["AI", "Agents", "Healthcare", "Next.js"],
  },
  {
    title: "TheoAI",
    href: "https://chat.theogrid.ai/",
    image: "/projects/theo-ai.svg",
    imageAlt: "TheoAI — AI-powered Islamic scholar",
    description:
      "AI-powered Islamic scholar and conversational knowledge system.",
    tech: ["AI", "LLMs", "RAG", "Agents"],
  },
  {
    title: "PropNerd",
    href: "https://propnerd.io/",
    image: "/projects/propnerd.svg",
    imageAlt: "PropNerd — fractional property investment",
    description:
      "Real-estate investing platform supporting fractional property investment and tokenization.",
    tech: ["Next.js", "Solana", "React Native", "AI"],
  },
];
