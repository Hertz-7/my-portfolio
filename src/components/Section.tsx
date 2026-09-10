import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-20 lg:py-28 ${className}`}
    >
      {children}
    </section>
  );
}
