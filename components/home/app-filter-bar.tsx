"use client";

interface Props {
  activeFilter: string;
  onFilter: (value: string) => void;
}

const FILTERS = [
  { label: "All", value: "all" },
  { label: "iOS", value: "ios" },
  { label: "Android", value: "android" },
  { label: "Productivity", value: "Productivity" },
  { label: "Wellness", value: "Wellness" },
  { label: "Games", value: "Games" },
  { label: "Utilities", value: "Utilities" },
];

export default function AppFilterBar({ activeFilter, onFilter }: Props) {
  return (
    <div className="flex gap-2 flex-wrap mb-6 overflow-x-auto pb-1">
      {FILTERS.map((f) => (
        <button
          key={f.value}
          onClick={() => onFilter(f.value)}
          className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 ${
            activeFilter === f.value
              ? "bg-amber-400 text-black"
              : "bg-white/[0.04] text-white/50 border border-white/[0.08] hover:border-white/20 hover:text-white/70"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
