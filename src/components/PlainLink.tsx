import { ReactNode, AnchorHTMLAttributes } from "react";

interface PlainLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export function PlainLink({
  children,
  className = "",
  ...props
}: PlainLinkProps) {
  return (
    <a
      className={`font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--dim)] border-b border-[var(--hair)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ground)] rounded-sm ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
