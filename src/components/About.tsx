"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 relative z-10 pt-2 pb-16 lg:pt-0 lg:pb-20"
    >
      <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[var(--accent)] mb-6 sm:mb-8 lg:mb-10">
        01 &nbsp;/&nbsp; About
      </p>

      <div className="flex flex-col gap-5 sm:gap-6 text-[var(--prose)] text-[1rem] sm:text-[1.0625rem] leading-[1.7]">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Hi there! I&apos;m Mohammad Aosaf, and I like building things. I&apos;m
          an AI and full-stack engineer with expertise in crafting production
          AI systems — multi-agent reasoning, retrieval over regulated source
          material, and the multi-tenant platforms that run them.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
        >
          Currently, I&apos;m an AI &amp; Full-Stack Engineer at{" "}
          <strong className="text-[var(--type)] font-semibold">MindHYVE.ai</strong>
          , where I architected and shipped{" "}
          <strong className="text-[var(--type)] font-semibold">ChironOM</strong>{" "}
          — a multi-tenant healthcare AI platform coordinating five specialised
          reasoning agents across six clinical pathways, with retrieval grounded
          in medical-legal guidelines and human-in-the-loop physician review.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.16 }}
        >
          Previously, I&apos;ve worked across a wide range of environments — from
          startups to large product teams — including{" "}
          <strong className="text-[var(--type)] font-semibold">QLU.ai</strong>,
          where I led engineering for a three-product business unit (Dialer,
          Outreach, AI Voice SDR) managing three developers and two QA
          engineers.
        </motion.p>
      </div>
    </section>
  );
}
