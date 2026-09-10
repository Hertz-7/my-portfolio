"use client";

import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from "framer-motion";
import { useRef } from "react";

/**
 * Desktop curved timeline.
 *
 * Anchored to the entire main column so it animates 0 → 1 across the full
 * scroll (About → Experience → Projects → Footer) and stays at 1 once the
 * user reaches the end of the page. Sits in the gutter between sidebar
 * and content — never crosses the readable text.
 */

const VIEW_W = 110;
const VIEW_H = 1400;

const PATH =
  "M 35 0 C 90 140, 95 280, 50 420 C 5 560, 90 700, 45 840 C 70 960, 30 1080, 60 1200 C 90 1320, 50 1380, 55 1400";

interface Milestone {
  y: number;
  x: number;
}

const MILESTONES: Milestone[] = [
  { y: 180, x: 75 },
  { y: 380, x: 45 },
  { y: 620, x: 80 },
  { y: 820, x: 50 },
  { y: 1020, x: 75 },
  { y: 1240, x: 55 },
];

export function ExperienceTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Anchor to the timeline container itself so the curve carries
  // through the entire scroll range of the main column, and clamps
  // at pathLength: 1 once the bottom of the column passes the top
  // 20% of the viewport — i.e. once the user has reached the end.
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
  // Each dot fades in over a narrow band of scroll progress centred
  // on its position. The last input/output pair is [1, 1] so once the
  // user reaches the end of the scroll the dot stays fully visible.
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

/**
 * Mobile fallback — single vertical accent line running along the left
 * edge of the experience list. No curve; never crosses content.
 */
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
