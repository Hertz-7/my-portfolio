import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

interface ButtonBaseProps {
  children: ReactNode;
  variant?: "default" | "ghost";
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsAnchor = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button({
  children,
  variant = "default",
  className = "",
  href,
  ...props
}: ButtonProps) {
  const baseClassName = `inline-flex items-center justify-center px-5 py-2.5 font-mono text-[10px] tracking-[0.18em] uppercase rounded-[2px] transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ground)] ${className}`;

  if (variant === "ghost") {
    const ghostClassName = `font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--dim)] border-b border-[var(--hair)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ground)] rounded-sm ${className}`;

    if (href) {
      return (
        <a href={href} className={ghostClassName} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {children}
        </a>
      );
    }
    return (
      <button
        className={ghostClassName}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }

  const filledClassName = `bg-[var(--accent)] text-[var(--ground)] hover:opacity-90 ${baseClassName}`;

  if (href) {
    return (
      <a
        href={href}
        className={filledClassName}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={filledClassName}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
