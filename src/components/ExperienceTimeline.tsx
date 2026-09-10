"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ExperienceTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden lg:block"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        className="absolute inset-0"
      >
        <defs>
          <linearGradient id="tl-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#64ffda" stopOpacity="0" />
            <stop offset="15%" stopColor="#64ffda" stopOpacity="0.55" />
            <stop offset="85%" stopColor="#64ffda" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#64ffda" stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.path
          d="M 35 0 C 80 220, -10 420, 55 620 C 100 780, 30 880, 60 1000"
          fill="none"
          stroke="url(#tl-fade)"
          strokeWidth="0.6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />

        {[0.18, 0.42, 0.66, 0.88].map((p, i) => (
          <motion.circle
            key={i}
            cx={35 + (i % 2 === 0 ? 0 : 20)}
            cy={p * 1000}
            r={2.4}
            fill="#0b1428"
            stroke="#64ffda"
            strokeWidth={0.5}
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 0.9 } : {}}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: 0.5 + i * 0.12,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function ExperienceTimelineMobile() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute left-6 top-0 bottom-0 w-px lg:hidden"
    >
      <motion.div
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 1.4, ease: "easeInOut" }}
        style={{ transformOrigin: "top" }}
        className="h-full w-full bg-[var(--accent)]/45"
      />
    </div>
  );
}
