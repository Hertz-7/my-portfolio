"use client";

import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from "framer-motion";
import { useRef } from "react";

/**
 * Decorative curved timeline.
 *
 * Anchored to the entire right column so the curve keeps drawing as the
 * user scrolls through About → Experience → Projects → Footer. Once the
 * bottom of the column passes the top of the viewport it clamps at
 * pathLength: 1. Lives in the 110px gutter — never crosses text.
 */

const VIEW_W = 110;
const VIEW_H = 1600;

const PATH =
  "M 35 0 C 90 160, 95 320, 50 480 C 5 640, 90 800, 45 960 C 70 1080, 30 1200, 60 1320 C 90 1440, 50 1540, 55 1600";

interface Milestone {
  y: number;
  x: number;
}

const MILESTONES: Milestone[] = [
  { y: 180, x: 75 },
  { y: 420, x: 45 },
  { y: 660, x: 80 },
  { y: 900, x: 50 },
  { y: 1140, x: 75 },
  { y: 1380, x: 55 },
];

export function ExperienceTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "end 20%"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1], {
    clamp: true,
  });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="
        hidden lg:block
        pointer-events-none
        absolute
        top-0 bottom-0
        -left-[110px]
        w-[110px]
        z-0
      "
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="none"
        className="block"
      >
        <motion.path
          d={PATH}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeOpacity={0.35}
          style={
            reduce
              ? { pathLength: 1, opacity: 1 }
              : { pathLength, opacity: 0.95 }
          }
        />

        {MILESTONES.map((m, i) => (
          <MilestoneDot
            key={i}
            progress={scrollYProgress}
            cx={m.x}
            cy={(m.y / VIEW_H) * 100}
            reduce={reduce}
          />
        ))}
      </svg>
    </div>
  );
}

function MilestoneDot({
  progress,
  cx,
  cy,
  reduce,
}: {
  progress: MotionValue<number>;
  cx: number;
  cy: number;
  reduce: boolean | null;
}) {
  const gate = useTransform(
    progress,
    [
      Math.max(0, cy / 100 - 0.05),
      Math.min(1, cy / 100 + 0.02),
    ],
    [0, 1],
    { clamp: true }
  );

  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r={2.2}
      fill="var(--ground)"
      stroke="var(--accent)"
      strokeWidth={0.7}
      strokeOpacity={0.6}
      style={{
        opacity: reduce ? 0.9 : gate,
        scale: reduce ? 1 : gate,
      }}
    />
  );
}

export function ExperienceTimelineMobile() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "end 20%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1], {
    clamp: true,
  });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="lg:hidden pointer-events-none absolute left-2 top-0 bottom-0 w-px"
    >
      <motion.div
        className="h-full w-full bg-[var(--accent)]"
        style={{
          scaleY: reduce ? 1 : scaleY,
          opacity: 0.35,
          transformOrigin: "top",
        }}
      />
    </div>
  );
}
