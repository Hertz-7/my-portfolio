import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { WorkEntry, WorkFrontmatter } from "./work";

const CONTENT_DIR = path.join(process.cwd(), "src/content/work");

export function getWorkSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getWorkBySlug(slug: string): WorkEntry | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data } = matter(raw);

  return {
    slug,
    ...(data as WorkFrontmatter),
  };
}

export function getAllWork(): WorkEntry[] {
  const slugs = getWorkSlugs();
  return slugs
    .map((slug) => getWorkBySlug(slug))
    .filter((w): w is WorkEntry => w !== null)
    .sort((a, b) => a.order - b.order);
}

export function getWorkContent(slug: string): string {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return "";
  const raw = fs.readFileSync(filePath, "utf8");
  const { content } = matter(raw);
  return content;
}
