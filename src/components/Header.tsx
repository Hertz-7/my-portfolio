import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-[var(--hair)]">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-[var(--light)] font-bold text-[1rem] tracking-[-0.01em] hover:text-[var(--accent)] transition-colors"
        >
          Mohammad Aosaf
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/#about"
            className="text-[10px] tracking-[0.18em] uppercase text-[var(--slate)] hover:text-[var(--accent)] transition-colors"
          >
            About
          </Link>
          <Link
            href="/#experience"
            className="text-[10px] tracking-[0.18em] uppercase text-[var(--slate)] hover:text-[var(--accent)] transition-colors"
          >
            Experience
          </Link>
          <Link
            href="/#projects"
            className="text-[10px] tracking-[0.18em] uppercase text-[var(--slate)] hover:text-[var(--accent)] transition-colors"
          >
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
}
