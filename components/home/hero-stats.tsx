"use client";
import { apps } from "@/lib/apps";
import CountUp from "@/components/motion/count-up";

function computeStats() {
  const downloadNums = apps
    .filter((a) => a.downloads)
    .map((a) => parseInt(a.downloads!.replace(/[^0-9]/g, "")));
  const totalDownloads = downloadNums.reduce((acc, n) => acc + n, 0);

  const rated = apps.filter((a) => a.rating !== undefined);
  const avgRating =
    rated.length > 0
      ? rated.reduce((acc, a) => acc + a.rating!, 0) / rated.length
      : null;

  return { appCount: apps.length, totalDownloads, avgRating };
}

export default function HeroStats() {
  const { appCount, totalDownloads, avgRating } = computeStats();

  return (
    <div className="mt-4 grid grid-cols-3 border-t border-white/[0.08] pt-6">
      <div className="flex flex-col gap-0.5">
        <span className="text-xl font-semibold text-white sm:text-2xl">
          <CountUp target={appCount} suffix="+" />
        </span>
        <span className="text-[10px] uppercase tracking-widest text-white/30">
          Apps
        </span>
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="text-xl font-semibold text-white sm:text-2xl">
          {totalDownloads > 0 ? (
            <CountUp target={totalDownloads} suffix="k+" />
          ) : (
            "—"
          )}
        </span>
        <span className="text-[10px] uppercase tracking-widest text-white/30">
          Downloads
        </span>
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="text-xl font-semibold text-white sm:text-2xl">
          {avgRating !== null ? `${avgRating.toFixed(1)} ★` : "—"}
        </span>
        <span className="text-[10px] uppercase tracking-widest text-white/30">
          Avg rating
        </span>
      </div>
    </div>
  );
}
