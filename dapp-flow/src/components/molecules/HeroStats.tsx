const stats = [
  { label: "SKILL start", value: "10" },
  { label: "Avatar NFT", value: "01" },
  { label: "Skill badges", value: "SBT" },
];

export function HeroStats() {
  return (
    <div className="mt-10 grid max-w-2xl grid-cols-3 border border-df-border bg-df-surface/90">
      {stats.map((stat) => (
        <div className="border-r border-df-border p-4 last:border-r-0" key={stat.label}>
          <p className="font-mono text-2xl font-bold text-df-accent">
            {stat.value}
          </p>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-df-muted-strong">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
