import { Section } from "./Section";

const EXPERIENCE = [
  {
    number: "01",
    role: "AI & Full-Stack Engineer",
    company: "MindHYVE.ai",
    period: "Jan 2026 — Present",
    note: "Agentic Full-Cycle Engineer",
  },
  {
    number: "02",
    role: "Senior Full Stack Engineer",
    company: "QLU.ai",
    period: "Jul 2024 — Jan 2026",
    note: "Led engineering for a business unit of 3 products (Dialer, Outreach, AI Voice SDR), 3 engineers + 2 QA",
  },
  {
    number: "03",
    role: "Full Stack Engineer",
    company: "Thy Reality",
    period: "May 2024 — Sep 2024",
    note: "Crypto property-share platform",
  },
  {
    number: "04",
    role: "React Developer Intern",
    company: "Hexa IT",
    period: "Jun 2023 — Aug 2023",
    note: "",
  },
];

export function ExperienceSection() {
  return (
    <Section id="experience" label="Experience">
      <div className="flex flex-col">
        {EXPERIENCE.map((item, i) => (
          <div
            key={item.company}
            className={`grid grid-cols-[2.5rem_1fr] gap-4 py-6 ${
              i > 0 ? "border-t border-[var(--hair)]" : ""
            }`}
          >
            <span className="font-mono text-[9px] tracking-[0.18em] text-[var(--dim)] pt-0.5">
              {item.number}
            </span>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div className="flex flex-col">
                <p className="text-[1.02rem] leading-[1.72] tracking-[0.005em] text-[var(--type)] font-semibold">
                  {item.role}
                </p>
                <p className="font-mono text-[9.5px] tracking-[0.16em] uppercase text-[var(--dim)]">
                  {item.company}
                  {item.note ? ` — ${item.note}` : ""}
                </p>
              </div>
              <p className="font-mono text-[9.5px] tracking-[0.16em] uppercase text-[var(--dim)] shrink-0">
                {item.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
