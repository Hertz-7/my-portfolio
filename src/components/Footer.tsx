import Link from "next/link";

const EMAIL = "mohammadaosaf@gmail.com";
const GITHUB = "https://github.com/Hertz-7";
const LINKEDIN = "https://linkedin.com/in/mohammad-aosaf";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--hair)]">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 py-8 lg:px-8 max-w-[1120px] mx-auto w-full">
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${EMAIL}`}
            className="font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--dim)] hover:text-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ground)] rounded-sm"
          >
            {EMAIL}
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--dim)] hover:text-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ground)] rounded-sm"
          >
            GitHub
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--dim)] hover:text-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ground)] rounded-sm"
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--dim)] hover:text-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ground)] rounded-sm"
          >
            Résumé
          </a>
        </div>
        <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--dim)]">
          Islamabad, PK
        </span>
      </div>
    </footer>
  );
}
