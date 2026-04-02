import Link from "next/link";
import { apps } from "@/lib/apps";

function totalDownloads() {
  const nums = apps
    .filter((a) => a.downloads)
    .map((a) => parseInt(a.downloads!.replace(/[^0-9]/g, "")));
  const sum = nums.reduce((acc, n) => acc + n, 0);
  return sum > 0 ? `${sum}k+` : "—";
}

function avgRating() {
  const rated = apps.filter((a) => a.rating !== undefined);
  if (!rated.length) return "—";
  const avg = rated.reduce((acc, a) => acc + a.rating!, 0) / rated.length;
  return avg.toFixed(1);
}

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28 md:px-8">
      <div className="flex flex-col gap-6">
        <div className="flex">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-400">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            Independent App Studio
          </span>
        </div>

        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Apps built for{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              real people.
            </span>
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50 sm:text-base">
            UE Software is a one-person indie studio crafting thoughtful iOS and
            Android apps that make everyday life a little bit better.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/apps"
            className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-amber-300"
          >
            Browse apps
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-white/70 transition-colors hover:border-white/20 hover:text-white"
          >
            Read the blog
          </Link>
        </div>

        <div className="mt-4 grid grid-cols-3 border-t border-white/[0.08] pt-6">
          <div className="flex flex-col gap-0.5">
            <span className="text-xl font-semibold text-white sm:text-2xl">
              {apps.length}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-white/30">
              Apps
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-xl font-semibold text-white sm:text-2xl">
              {totalDownloads()}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-white/30">
              Downloads
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-xl font-semibold text-white sm:text-2xl">
              {avgRating()} ★
            </span>
            <span className="text-[10px] uppercase tracking-widest text-white/30">
              Avg rating
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
