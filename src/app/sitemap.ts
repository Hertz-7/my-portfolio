import { MetadataRoute } from "next";
import { WORK_INDEX } from "@/lib/work-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE = "https://mohammadaosaf.com";

  const caseStudies = WORK_INDEX.filter(
    (entry) => entry.slug !== "theoai" && entry.slug !== "newsbiasdetect",
  ).map((entry) => ({
    url: `${BASE}/work/${entry.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...caseStudies,
  ];
}