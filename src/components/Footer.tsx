export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--hair)] mt-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 py-8">
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--dim)]">
          Designed &amp; built by Mohammad Aosaf &nbsp;·&nbsp; Islamabad, PK
        </p>
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--dim)] tabular-nums">
          © {year}
        </p>
      </div>
    </footer>
  );
}
