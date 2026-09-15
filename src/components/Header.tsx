import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-slate-800">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-slate-200 font-bold text-[1rem] tracking-[-0.01em] hover:text-accent transition-colors"
        >
          Mohammad Aosaf
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/#about"
            className="text-[10px] tracking-[0.18em] uppercase text-slate-400 hover:text-slate-200 transition-colors"
          >
            About
          </Link>
          <Link
            href="/#projects"
            className="text-[10px] tracking-[0.18em] uppercase text-slate-400 hover:text-slate-200 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/#experience"
            className="text-[10px] tracking-[0.18em] uppercase text-slate-400 hover:text-slate-200 transition-colors"
          >
            Experience
          </Link>
        </nav>
      </div>
    </header>
  );
}
