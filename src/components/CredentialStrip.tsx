const CREDENTIALS = [
  {
    label: "Current",
    value: "MindHYVE.ai — AI & Full-Stack Engineer",
  },
  {
    label: "Previously",
    value: "QLU.ai — Senior Full Stack, led a team of 3",
  },
  {
    label: "In production",
    value: "500K+ users on a live product",
  },
  {
    label: "Education",
    value: "BS Computer Science, FAST-NUCES",
  },
];

export function CredentialStrip() {
  return (
    <div className="mt-12 border-t border-[var(--hair)]">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {CREDENTIALS.map(({ label, value }, i) => (
          <div
            key={label}
            className={`px-0 py-6 lg:py-8 ${
              i > 0 ? "lg:border-l lg:border-[var(--hair)]" : ""
            } ${i % 2 === 1 ? "pl-6 lg:pl-8 border-l border-[var(--hair)]" : ""} ${
              i < 2 ? "border-b border-[var(--hair)] lg:border-b-0" : ""
            }`}
          >
            <p className="font-mono text-[9.5px] tracking-[0.2em] uppercase text-[var(--dim)] mb-2">
              {label}
            </p>
            <p className="font-body text-[var(--type)] text-[0.9rem] leading-snug">
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
