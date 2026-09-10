import Link from "next/link";

const NAV_LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#numbers", label: "Numbers" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-[62px] border-b border-[var(--hair)] bg-[var(--ground)]/80 backdrop-blur-md">
      <div className="h-full flex items-center justify-between px-6 lg:px-8">
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--dim)]">
          Mohammad Aosaf
        </span>
        <nav className="flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--dim)] hover:text-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ground)] rounded-sm"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
