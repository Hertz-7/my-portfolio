import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getWorkBySlug, getWorkContent, getAllWork } from "@/lib/mdx";
import { ScrollStack, ScrollStackItem } from "@/components/ScrollStack";
import { Header, Footer } from "@/components";

const mdxComponents = {
  h1: (p: React.ComponentProps<"h1">) => (
    <h1
      className="font-display font-bold text-[var(--type)] text-[1.85rem] leading-[1.08] tracking-[-0.028em] mt-14 mb-4"
      {...p}
    />
  ),
  h2: (p: React.ComponentProps<"h2">) => (
    <h2
      className="font-display font-bold text-[var(--type)] text-[1.5rem] leading-[1.12] tracking-[-0.024em] mt-14 mb-4 pt-8 border-t border-[var(--hair)]"
      {...p}
    />
  ),
  h3: (p: React.ComponentProps<"h3">) => (
    <h3
      className="font-display font-bold text-[var(--type)] text-[1.15rem] leading-[1.2] tracking-[-0.014em] mt-10 mb-3"
      {...p}
    />
  ),
  h4: (p: React.ComponentProps<"h4">) => (
    <h4
      className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--accent)] mt-9 mb-3"
      {...p}
    />
  ),
  p: (p: React.ComponentProps<"p">) => (
    <p
      className="font-body text-[1.02rem] leading-[1.74] tracking-[0.005em] text-[var(--prose)] mb-5"
      {...p}
    />
  ),
  ul: (p: React.ComponentProps<"ul">) => (
    <ul className="flex flex-col gap-2 mb-6 pl-5 list-disc marker:text-[var(--accent)]" {...p} />
  ),
  ol: (p: React.ComponentProps<"ol">) => (
    <ol className="flex flex-col gap-2 mb-6 pl-5 list-decimal marker:text-[var(--dim)]" {...p} />
  ),
  li: (p: React.ComponentProps<"li">) => (
    <li
      className="font-body text-[1.02rem] leading-[1.7] tracking-[0.005em] text-[var(--prose)]"
      {...p}
    />
  ),
  strong: (p: React.ComponentProps<"strong">) => (
    <strong className="text-[var(--type)] font-semibold" {...p} />
  ),
  a: (p: React.ComponentProps<"a">) => (
    <a
      className="text-[var(--accent)] underline decoration-[var(--hair)] underline-offset-4 hover:decoration-[var(--accent)] transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      {...p}
    />
  ),
  code: (p: React.ComponentProps<"code">) => (
    <code
      className="font-mono text-[0.86em] text-[var(--type)] bg-[var(--ground2)] border border-[var(--hair)] rounded-[2px] px-1.5 py-0.5"
      {...p}
    />
  ),
  hr: () => <hr className="my-12 border-t border-[var(--hair)]" />,
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const entries = getAllWork();
  return entries
    .filter((e) => e.slug !== "theoai" && e.slug !== "newsbiasdetect")
    .map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const entry = getWorkBySlug(slug);
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.summary,
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const entry = getWorkBySlug(slug);
  if (!entry || slug === "theoai" || slug === "newsbiasdetect") {
    notFound();
  }

  const content = getWorkContent(slug);

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {/* Case study header */}
        <section className="pt-16 pb-12 border-b border-[var(--hair)]">
          <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <p className="font-mono text-[9.5px] tracking-[0.2em] uppercase text-[var(--dim)] mb-2">
                  {entry.roleLabel}
                </p>
                <h1 className="font-display font-bold text-[var(--type)] text-[clamp(2rem,4vw,3rem)] leading-[1.08] tracking-[-0.028em]">
                  {entry.title}
                </h1>
              </div>
              <div className="flex flex-col gap-2 sm:items-end">
                {entry.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--accent)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--ground)] rounded-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[9px] tracking-[0.16em] uppercase text-[var(--dim)] border border-[var(--hair)] px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="py-12 border-b border-[var(--hair)]">
          <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
            <p className="font-mono text-[9.5px] tracking-[0.2em] uppercase text-[var(--accent)] mb-4">
              Overview
            </p>
            <p className="font-body text-[1.02rem] leading-[1.74] tracking-[0.005em] text-[var(--prose)] max-w-[62ch]">
              {entry.summary}
            </p>
          </div>
        </section>

        {/* MDX content */}
        <section className="py-16">
          <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
            <article className="max-w-[62ch]">
              <MDXRemote source={content} components={mdxComponents} />
            </article>
          </div>
        </section>

        {/* Scroll Stack highlights */}
        <section className="py-16 border-t border-[var(--hair)]">
          <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
            <p className="font-mono text-[9.5px] tracking-[0.2em] uppercase text-[var(--accent)] mb-8">
              Highlights
            </p>
            <ScrollStack
              itemDistance={80}
              itemScale={0.04}
              itemStackDistance={40}
              stackPosition="30%"
              scaleEndPosition="15%"
              baseScale={0.88}
              blurAmount={2}
            >
              <ScrollStackItem itemClassName="bg-[var(--ground2)] border border-[var(--hair)] p-8 rounded-xl min-h-[14rem]">
                <h3 className="font-display font-bold text-[var(--type)] text-[1.2rem] leading-[1.2] tracking-[-0.014em] mb-3">
                  Multi-Agent Orchestration
                </h3>
                <p className="text-[1.02rem] leading-[1.72] tracking-[0.005em] text-[var(--prose)]">
                  Five specialised reasoning agents — medical, legal, financial, risk, ethics — coordinated conditionally per case signals across six clinical pathways.
                </p>
              </ScrollStackItem>
              <ScrollStackItem itemClassName="bg-[var(--ground2)] border border-[var(--hair)] p-8 rounded-xl min-h-[14rem]">
                <h3 className="font-display font-bold text-[var(--type)] text-[1.2rem] leading-[1.2] tracking-[-0.014em] mb-3">
                  RAG Pipeline
                </h3>
                <p className="text-[1.02rem] leading-[1.72] tracking-[0.005em] text-[var(--prose)]">
                  MTUS/ACOEM guidelines retrieval: PDF ingestion, section-aware chunking, HNSW vector search, two-step LLM retrieval with citation checking.
                </p>
              </ScrollStackItem>
              <ScrollStackItem itemClassName="bg-[var(--ground2)] border border-[var(--hair)] p-8 rounded-xl min-h-[14rem]">
                <h3 className="font-display font-bold text-[var(--type)] text-[1.2rem] leading-[1.2] tracking-[-0.014em] mb-3">
                  Tenant Isolation
                </h3>
                <p className="text-[1.02rem] leading-[1.72] tracking-[0.005em] text-[var(--prose)]">
                  PostgreSQL Row-Level Security with JWT-derived tenant context across 11 data domains, validated by automated isolation tests on every PR.
                </p>
              </ScrollStackItem>
            </ScrollStack>
          </div>
        </section>

        {/* Back link */}
        <section className="py-12 border-t border-[var(--hair)]">
          <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
            <Link
              href="/#work"
              className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--dim)] hover:text-[var(--accent)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--ground)] rounded-sm"
            >
              ← Back to work
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
