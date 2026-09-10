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
    value: 11,
    suffix: "",
    caption: "Data domains isolated via Postgres row-level security",
  },
];

export function NumbersSection() {
  return (
    <Section id="numbers" label="In Numbers">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-[var(--hair)]">
        {METRICS.map((metric, i) => (
          <div
            key={metric.caption}
            className={`px-0 py-6 lg:py-8 ${
              i > 0 ? "lg:border-l lg:border-[var(--hair)]" : ""
            } ${i % 2 === 1 ? "pl-6 lg:pl-8 border-l border-[var(--hair)]" : ""} ${
              i < 2 ? "border-b border-[var(--hair)] lg:border-b-0" : ""
            }`}
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
