export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--hair)] mt-12">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 py-8">
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--mute)]">
          Designed &amp; built by Mohammad Aosaf · Islamabad, PK
        </p>
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--mute)] tabular-nums">
          © {year}
        </p>
      </div>
    </footer>
  );
}
