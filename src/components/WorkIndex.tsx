"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Section } from "./Section";
import { WORK_INDEX } from "@/lib/work-data";
import { WorkEntry } from "@/lib/work";

export function WorkIndex() {
  const [active, setActive] = useState<WorkEntry>(WORK_INDEX[0]);

  const handleSelect = useCallback((entry: WorkEntry) => {
    setActive(entry);
  }, []);

  return (
    <Section id="work" label="01 — Selected work">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-0 border border-[var(--hair)]">
      {/* Left: tab list */}
      <div
        role="tablist"
        aria-label="Selected work"
        className="flex flex-col"
      >
        {WORK_INDEX.map((entry) => {
          const isActive = active.slug === entry.slug;
          return (
            <WorkRow
              key={entry.slug}
              entry={entry}
              isActive={isActive}
              onSelect={handleSelect}
            />
          );
        })}
      </div>

        {/* Right: preview panel */}
        <div className="border-t lg:border-t-0 lg:border-l border-[var(--hair)] bg-[var(--ground2)] p-6 lg:p-8">
          <PreviewPanel entry={active} />
        </div>
      </div>
    </Section>
  );
}

function WorkRow({
  entry,
  isActive,
  onSelect,
}: {
  entry: WorkEntry;
  isActive: boolean;
  onSelect: (e: WorkEntry) => void;
}) {
  const hasPage = entry.slug !== "theoai" && entry.slug !== "newsbiasdetect";
  const isClickable = hasPage || entry.links.length > 0;

  const triggerProps = {
    role: "tab" as const,
    "aria-selected": isActive,
    tabIndex: isActive ? 0 : -1,
    onClick: () => onSelect(entry),
    onPointerEnter: () => onSelect(entry),
    onFocus: () => onSelect(entry),
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const idx = WORK_INDEX.findIndex((w) => w.slug === entry.slug);
        if (idx < WORK_INDEX.length - 1) onSelect(WORK_INDEX[idx + 1]);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        const idx = WORK_INDEX.findIndex((w) => w.slug === entry.slug);
        if (idx > 0) onSelect(WORK_INDEX[idx - 1]);
      }
    },
  };

  const inner = (
    <div
      className={`
        px-6 py-5 border-b border-[var(--hair)] cursor-pointer
        transition-all duration-150
        ${isActive ? "translate-x-3.5" : ""}
      `}
    >
      <p
        className={`
          font-display font-bold leading-[1.1] tracking-[-0.014em]
          text-[clamp(1.45rem,2vw,2.05rem)]
          ${isActive ? "text-[var(--type)]" : "text-[var(--dim)]"}
          transition-colors duration-150
        `}
      >
        {entry.title}
      </p>
      <p
        className={`
          font-mono text-[9.5px] tracking-[0.18em] uppercase mt-1.5
          ${isActive ? "text-[var(--accent)]" : "text-[var(--dim)]"}
          transition-colors duration-150
        `}
      >
        {entry.roleLabel}
      </p>
    </div>
  );

  if (isClickable && hasPage) {
    return (
      <div {...triggerProps}>
        <Link href={`/work/${entry.slug}`} className="block focus:outline-none">
          {inner}
        </Link>
      </div>
    );
  }

  return <div {...triggerProps}>{inner}</div>;
}

function PreviewPanel({ entry }: { entry: WorkEntry }) {
  const hasPage = entry.slug !== "theoai" && entry.slug !== "newsbiasdetect";

  return (
    <div className="flex flex-col h-full">
      {/* Screenshot slot */}
      <div className="w-full aspect-[16/10] bg-[var(--ground)] border border-[var(--hair)] mb-5 flex items-center justify-center">
        <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-[var(--dim)]">
          16:10 screenshot
        </span>
      </div>

      {/* Project name */}
      <p className="font-display font-bold text-[var(--type)] text-[1.4rem] leading-[1.1] tracking-[-0.014em] mb-3">
        {entry.title}
      </p>

      {/* Summary */}
      <p className="font-body text-[1.02rem] leading-[1.72] tracking-[0.005em] text-[var(--prose)] mb-5 max-w-[62ch]">
        {entry.summary}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {entry.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[9px] tracking-[0.16em] uppercase text-[var(--dim)] border border-[var(--hair)] px-2 py-1"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      {entry.links.length > 0 && (
        <div className="mt-auto flex flex-col gap-2">
          {entry.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--accent)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--ground2)] rounded-sm self-start"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* View case study link */}
      {hasPage && (
        <div className="mt-4 pt-4 border-t border-[var(--hair)]">
          <Link
            href={`/work/${entry.slug}`}
            className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--accent)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--ground2)] rounded-sm"
          >
            View case study →
          </Link>
        </div>
      )}
    </div>
  );
}
