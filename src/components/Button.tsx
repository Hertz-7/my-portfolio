import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "default" | "ghost";
}

export function Button({
  children,
  variant = "default",
  className = "",
  ...props
}: ButtonProps) {
  if (variant === "ghost") {
    return (
      <button
        className={`font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--dim)] border-b border-[var(--hair)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ground)] rounded-sm ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={`inline-flex items-center justify-center px-5 py-2.5 bg-[var(--accent)] text-[var(--ground)] font-mono text-[10px] tracking-[0.18em] uppercase rounded-[2px] hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ground)] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
