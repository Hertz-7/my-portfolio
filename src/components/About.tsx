"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 pt-16 pb-24"
    >
      <h2 className="text-xs font-medium tracking-[0.22em] uppercase text-slate-400 mb-8">
        About
      </h2>

      <div className="flex flex-col gap-5 text-slate-400 leading-relaxed">
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
          <strong className="text-slate-200 font-semibold">MindHYVE.ai</strong>
          , where I architected and shipped{" "}
          <strong className="text-slate-200 font-semibold">ChironOM</strong>{" "}
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
          <strong className="text-slate-200 font-semibold">QLU.ai</strong>,
          where I led engineering for a three-product business unit (Dialer,
          Outreach, AI Voice SDR) managing three developers and two QA
          engineers.
        </motion.p>
      </div>
    </section>
  );
}
