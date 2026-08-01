const stats = [
  { v: "12M+", l: "em lances" },
  { v: "340", l: "leilões" },
  { v: "2.1k", l: "pecuaristas" },
];

export function StatsStrip() {
  return (
    <section className="px-5">
      <div className="card-premium grid grid-cols-3 divide-x divide-border overflow-hidden">
        {stats.map((s) => (
          <div key={s.l} className="px-3 py-4 text-center">
            <p className="text-platinum font-display text-lg font-bold leading-none">
              {s.v}
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              {s.l}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
