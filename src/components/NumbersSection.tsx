import { Section } from "./Section";
import { CountUp } from "./CountUp";

const METRICS = [
  {
    value: 500,
    suffix: "K+",
    caption: "Users on a live product maintained in production",
  },
  {
    value: 5,
    suffix: "",
    caption: "Reasoning agents across six clinical pathways",
  },
  {
    value: 90,
    suffix: "%",
    caption: "Faster candidate search after query optimisation",
  },
  {
    value: 3,
    suffix: "",
    caption: "Products led end to end — Dialer, Outreach, AI Voice SDR",
  },
];

export function NumbersSection() {
  return (
    <Section id="numbers" label="In Numbers">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-[var(--hair)]">
        {METRICS.map((metric, i) => (
          <div
            key={metric.caption}
            className={[
              "p-6 lg:p-8",
              i % 2 === 1 ? "border-l border-[var(--hair)]" : "",
              i < 2 ? "border-b border-[var(--hair)] lg:border-b-0" : "",
              i > 0 ? "lg:border-l lg:border-[var(--hair)]" : "",
            ].join(" ")}
          >
            <CountUp
              value={metric.value}
              suffix={metric.suffix}
              caption={metric.caption}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
