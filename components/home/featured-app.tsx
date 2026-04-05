import Link from "next/link";
import { apps } from "@/lib/apps";
import AppIcon from "@/components/ui/app-icon";
import PlatformBadge from "@/components/ui/platform-badge";
import SectionLabel from "@/components/ui/section-label";

export default function FeaturedApp() {
  const app = apps.find((a) => a.featured);
  if (!app) return null;

  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-16 sm:px-6 md:px-8">
      <SectionLabel>Featured</SectionLabel>
      <Link href={`/apps/${app.slug}`} className="block mt-3">
        <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8
          hover:border-amber-400/20 transition-colors duration-300 overflow-hidden group">
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "radial-gradient(ellipse at 20% 50%, rgba(245,158,11,0.06) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <AppIcon icon={app.icon} gradient={app.iconGradient} size="lg" />
            <div className="flex-1">
              <div className="mb-1">
                <span className="text-[10px] font-medium uppercase tracking-widest text-amber-400">
                  {app.category}
                </span>
              </div>
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-1">
                {app.name}
              </h2>
              <p className="text-sm text-white/50 leading-relaxed max-w-md">
                {app.tagline}
              </p>
              <div className="flex gap-2 mt-3">
                {app.platforms.map((p) => (
                  <PlatformBadge key={p} platform={p} />
                ))}
                {app.platformsComingSoon?.map((p) => (
                  <PlatformBadge key={p} platform={p} comingSoon />
                ))}
              </div>
            </div>
            <div className="sm:items-end">
              <span className="text-xs text-amber-400/70 font-medium">
                View app →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
