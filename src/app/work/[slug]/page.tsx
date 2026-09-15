import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getWorkBySlug, getWorkContent, getAllWork } from "@/lib/mdx";
import { ScrollStack, ScrollStackItem } from "@/components/ScrollStack";
import { Header, Footer } from "@/components";

const mdxComponents = {
  h1: (p: React.ComponentProps<"h1">) => (
    <h1
      className="font-display font-bold text-slate-200 text-[1.85rem] leading-[1.08] tracking-[-0.028em] mt-14 mb-4"
      {...p}
    />
  ),
  h2: (p: React.ComponentProps<"h2">) => (
    <h2
      className="font-display font-bold text-slate-200 text-[1.5rem] leading-[1.12] tracking-[-0.024em] mt-14 mb-4 pt-8 border-t border-slate-800"
      {...p}
    />
  ),
  h3: (p: React.ComponentProps<"h3">) => (
    <h3
      className="font-display font-bold text-slate-200 text-[1.15rem] leading-[1.2] tracking-[-0.014em] mt-10 mb-3"
      {...p}
    />
  ),
  h4: (p: React.ComponentProps<"h4">) => (
    <h4
      className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent mt-9 mb-3"
      {...p}
    />
  ),
  p: (p: React.ComponentProps<"p">) => (
    <p
      className="font-body text-[1.02rem] leading-[1.74] tracking-[0.005em] text-slate-400 mb-5"
      {...p}
    />
  ),
  ul: (p: React.ComponentProps<"ul">) => (
    <ul className="flex flex-col gap-2 mb-6 pl-5 list-disc marker:text-accent" {...p} />
  ),
  ol: (p: React.ComponentProps<"ol">) => (
    <ol className="flex flex-col gap-2 mb-6 pl-5 list-decimal marker:text-slate-500" {...p} />
  ),
  li: (p: React.ComponentProps<"li">) => (
    <li
      className="font-body text-[1.02rem] leading-[1.7] tracking-[0.005em] text-slate-400"
      {...p}
    />
  ),
  strong: (p: React.ComponentProps<"strong">) => (
    <strong className="text-slate-200 font-semibold" {...p} />
  ),
  a: (p: React.ComponentProps<"a">) => (
    <a
      className="text-accent underline decoration-slate-700 underline-offset-4 hover:decoration-accent transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      {...p}
    />
  ),
  code: (p: React.ComponentProps<"code">) => (
    <code
      className="font-mono text-[0.86em] text-slate-200 bg-slate-900 border border-slate-700 rounded-[2px] px-1.5 py-0.5"
      {...p}
    />
  ),
  hr: () => <hr className="my-12 border-t border-slate-800" />,
  img: ({ src, alt }: React.ComponentProps<"img">) => (
    <figure className="my-10">
      <div className="overflow-hidden rounded-md border border-slate-700/50 bg-slate-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={typeof src === "string" ? src : ""}
          alt={alt ?? ""}
          loading="lazy"
          className="block w-full h-auto object-cover aspect-[16/9]"
        />
      </div>
      {alt && (
        <figcaption className="mt-3 font-mono text-[10px] tracking-[0.16em] uppercase text-slate-500">
          {alt}
        </figcaption>
      )}
    </figure>
  ),
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
        <section className="pt-16 pb-12 border-b border-slate-800">
          <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <p className="font-mono text-[9.5px] tracking-[0.2em] uppercase text-slate-500 mb-2">
                  {entry.roleLabel}
                </p>
                <h1 className="font-display font-bold text-slate-200 text-[clamp(2rem,4vw,3rem)] leading-[1.08] tracking-[-0.028em]">
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
                    className="font-mono text-[10px] tracking-[0.18em] uppercase text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ground rounded-sm"
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
                  className="font-mono text-[9px] tracking-[0.16em] uppercase text-slate-500 border border-slate-700 px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Hero image */}
        {entry.heroImage && (
          <section className="border-b border-slate-800">
            <div className="max-w-[1120px] mx-auto px-6 lg:px-8 py-10">
              <div className="overflow-hidden rounded-lg border border-slate-700/50 bg-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={entry.heroImage}
                  alt={entry.heroImageAlt ?? entry.title}
                  loading="lazy"
                  className="block w-full h-auto object-cover aspect-[16/9]"
                />
              </div>
            </div>
          </section>
        )}

        {/* Summary */}
        <section className="py-12 border-b border-slate-800">
          <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
            <p className="font-mono text-[9.5px] tracking-[0.2em] uppercase text-accent mb-4">
              Overview
            </p>
            <p className="font-body text-[1.02rem] leading-[1.74] tracking-[0.005em] text-slate-400 max-w-[62ch]">
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
        {entry.highlights && entry.highlights.length > 0 && (
          <section className="py-16 border-t border-slate-800">
            <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
              <p className="font-mono text-[9.5px] tracking-[0.2em] uppercase text-accent mb-8">
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
                {entry.highlights.map((h, i) => (
                  <ScrollStackItem
                    key={i}
                    itemClassName="bg-slate-900 border border-slate-800 p-8 rounded-xl min-h-[14rem]"
                  >
                    <h3 className="font-display font-bold text-slate-200 text-[1.2rem] leading-[1.2] tracking-[-0.014em] mb-3">
                      {h.title}
                    </h3>
                    <p className="text-[1.02rem] leading-[1.72] tracking-[0.005em] text-slate-400">
                      {h.body}
                    </p>
                  </ScrollStackItem>
                ))}
              </ScrollStack>
            </div>
          </section>
        )}

        {/* Back link */}
        <section className="py-12 border-t border-slate-800">
          <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
            <Link
              href="/#projects"
              className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate-500 hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ground rounded-sm"
            >
              ← Back to projects
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
