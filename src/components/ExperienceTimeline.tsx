"use client";

import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from "framer-motion";
import { useRef } from "react";

/**
 * Desktop curved timeline.
 *
 * Lives in the 110px gutter between sidebar and content — never crosses
 * the readable text. Animates pathLength from 0 → 1 as the user scrolls
 * past the Experience section, with milestone dots fading in as the
 * line reaches each one.
 */

const VIEW_W = 110;
const VIEW_H = 1000;

const PATH =
  "M 35 0 C 75 160, 95 300, 55 430 C 15 560, 80 700, 45 820 C 75 900, 60 950, 55 1000";

interface Milestone {
  y: number;
  x: number;
}

const MILESTONES: Milestone[] = [
  { y: 200, x: 70 },
  { y: 460, x: 40 },
  { y: 700, x: 65 },
  { y: 900, x: 50 },
];

export function ExperienceTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 20%"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

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
            cy={m.y}
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
      Math.max(0, cy / VIEW_H - 0.06),
      Math.min(1, cy / VIEW_H + 0.02),
    ],
    [0, 1]
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
    offset: ["start 90%", "end 20%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

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
