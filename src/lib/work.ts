export interface WorkFrontmatter {
  title: string;
  roleLabel: string;
  period: string;
  summary: string;
  tags: string[];
  links: { label: string; href: string }[];
  order: number;
  heroImage?: string;
  heroImageAlt?: string;
  highlights?: { title: string; body: string }[];
}

export interface WorkEntry extends WorkFrontmatter {
  slug: string;
}
