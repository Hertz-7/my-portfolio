"use client";

import { useEffect, useRef } from "react";

const STACK = [
  "NestJS",
  "Next.js 15",
  "React 19",
  "PostgreSQL",
  "pgvector",
  "Row-Level Security",
  "Drizzle",
  "Redis",
  "BullMQ",
  "Elasticsearch",
  "Azure AI Foundry",
  "Azure Container Apps",
  "Twilio",
  "WebSockets",
  "Turborepo",
  "RoBERTa",
  "PyTorch",
  "Hugging Face",
  "Jest",
  "Bicep",
];

export function StackStrip() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const xRef = useRef<number>(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const track = trackRef.current;
    if (!track) return;
    const halfWidth = track.scrollWidth / 2;
    let lastTime = 0;
    const speed = 0.3;
    const el = track;

    function tick(time: number) {
      if (lastTime === 0) lastTime = time;
      const delta = time - lastTime;
      lastTime = time;
      xRef.current -= speed * (delta / 16);
      if (xRef.current <= -halfWidth) {
        xRef.current = 0;
      }
      el.style.transform = `translateX(${xRef.current}px)`;
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const allItems = [...STACK, ...STACK];

  return (
    <div className="mt-16 border-t border-b border-[var(--hair)] overflow-hidden">
      <div
        ref={trackRef}
        className="flex whitespace-nowrap"
        style={{ willChange: "transform" }}
      >
        {allItems.map((item, i) => (
          <span
            key={i}
            className="font-mono text-[9.5px] tracking-[0.2em] uppercase text-[var(--dim)] px-5 py-3"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
