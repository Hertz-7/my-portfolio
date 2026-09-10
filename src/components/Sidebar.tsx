import Link from "next/link";
import { SidebarNav } from "./SidebarNav";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/Hertz-7",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mohammad-aosaf",
    icon: LinkedinIcon,
  },
  {
    label: "Email",
    href: "mailto:mohammadaosaf@gmail.com",
    icon: MailIcon,
  },
  {
    label: "Résumé",
    href: "/resume.pdf",
    icon: ResumeIcon,
  },
];

const NAV_ITEMS = [
  { index: "01", label: "About", href: "#about" },
  { index: "02", label: "Experience", href: "#experience" },
  { index: "03", label: "Projects", href: "#projects" },
];

export function Sidebar() {
  return (
    <aside
      className="
        lg:sticky lg:top-0 lg:h-screen lg:w-[260px] lg:shrink-0
        flex flex-col
        px-6 pt-10 pb-8 lg:px-8 lg:pt-14 lg:pb-12
        bg-[var(--ground)]
      "
    >
      <div className="flex flex-col gap-2">
        <Link
          href="/"
          className="
            font-display font-bold leading-[1.05] tracking-[-0.028em]
            text-[var(--type)]
            text-[clamp(1.85rem,2.4vw,2.4rem)]
            hover:text-[var(--accent)] transition-colors
            focus-visible:outline-none focus-visible:text-[var(--accent)]
            rounded-sm
          "
        >
          Mohammad&nbsp;Aosaf
        </Link>
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--dim)]">
          AI &amp; Full-Stack Engineer
        </p>
      </div>

      <p className="mt-5 font-body text-[0.98rem] leading-[1.7] text-[var(--prose)] max-w-[24ch]">
        I build accessible, production AI systems end to end — from
        multi-agent reasoning to the platform underneath.
      </p>

      <SidebarNav items={NAV_ITEMS} />

      <div className="mt-auto pt-10 flex items-center gap-5">
        {SOCIALS.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={label}
            className="
              text-[var(--dim)] hover:text-[var(--accent)]
              transition-colors duration-150
              focus-visible:outline-none focus-visible:text-[var(--accent)]
            "
          >
            <Icon className="w-[18px] h-[18px]" />
          </a>
        ))}
      </div>
    </aside>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17.91-.25 1.89-.38 2.86-.39.97.01 1.95.13 2.86.39 2.19-1.48 3.15-1.17 3.15-1.17.63 1.58.23 2.75.11 3.04.73.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.36.78 1.07.78 2.16v3.21c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43A2.06 2.06 0 1 1 5.34 3.3a2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.78C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.78 24h20.44c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </svg>
  );
}

function ResumeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h4" />
    </svg>
  );
}
