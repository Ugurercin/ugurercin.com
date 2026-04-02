interface AppStatsBarProps {
  rating?: number;
  downloads?: string;
  version: string;
  price: string;
}

interface StatItemProps {
  label: string;
  value: string;
}

function StatItem({ label, value }: StatItemProps) {
  return (
    <div className="flex flex-col items-center gap-0.5 px-4">
      <span className="text-base font-semibold text-white">{value}</span>
      <span className="text-[10px] uppercase tracking-wider text-white/30">
        {label}
      </span>
    </div>
  );
}

export default function AppStatsBar({
  rating,
  downloads,
  version,
  price,
}: AppStatsBarProps) {
  const stats = [
    rating !== undefined && { label: "Rating", value: `${rating} ★` },
    downloads && { label: "Downloads", value: downloads },
    { label: "Version", value: `v${version}` },
    { label: "Price", value: price },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <div className="flex items-center overflow-x-auto rounded-2xl border border-white/[0.08] bg-white/[0.02]">
      {stats.map((stat, i) => (
        <div key={stat.label} className="flex items-center">
          {i > 0 && <div className="h-8 w-px bg-white/[0.08]" />}
          <StatItem label={stat.label} value={stat.value} />
        </div>
      ))}
    </div>
  );
}
