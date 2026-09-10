import { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  label?: string;
}

export function Section({ children, className = "", id, label }: SectionProps) {
  return (
    <section id={id} className={`py-12 lg:py-20 ${className}`}>
      <Container>
        {label && (
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--accent)] mb-8 lg:mb-12">
            {label}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
