"use client";

import { useRef, useEffect, useState } from "react";

interface CountUpProps {
  value: number;
  suffix?: string;
  caption: string;
}

export function CountUp({ value, suffix = "", caption }: CountUpProps) {
  const [displayed, setDisplayed] = useState(value);
  const ref = useRef<HTMLParagraphElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setDisplayed(value);
      return;
    }

    if (hasRun.current) return;
    hasRun.current = true;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const duration = 950;
          const start = performance.now();
          const startVal = 0;

          function step(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(startVal + (value - startVal) * eased);
            setDisplayed(current);
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDisplayed(value);
            }
          }

          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="flex flex-col gap-2">
      <p
        ref={ref}
        className="font-display font-bold text-[var(--type)] text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-[-0.028em] tabular-nums"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {displayed}
        {suffix}
      </p>
      <p className="font-mono text-[9.5px] tracking-[0.18em] uppercase text-[var(--dim)] leading-snug max-w-[20ch]">
        {caption}
      </p>
    </div>
  );
}
