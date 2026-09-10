import { Section } from "./Section";

export function EducationSection() {
  return (
    <Section id="education" label="Education">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <div className="flex flex-col">
            <p className="font-display font-bold text-[1.02rem] leading-[1.74] tracking-[0.005em] text-[var(--type)]">
              FAST-NUCES, Islamabad
            </p>
            <p className="font-body text-[1.02rem] leading-[1.74] tracking-[0.005em] text-[var(--prose)]">
              BS Computer Science
            </p>
          </div>
          <p className="font-mono text-[9.5px] tracking-[0.16em] uppercase text-[var(--dim)]">
            2020–2024
          </p>
        </div>
        <p className="font-mono text-[9.5px] tracking-[0.18em] uppercase text-[var(--dim)]">
          CGPA 3.44
        </p>
      </div>
    </Section>
  );
}
