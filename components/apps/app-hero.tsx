import type { App } from "@/types";
import AppIcon from "@/components/ui/app-icon";
import PlatformBadge from "@/components/ui/platform-badge";
import DownloadButton from "@/components/ui/download-button";

interface AppHeroProps {
  app: App;
}

export default function AppHero({ app }: AppHeroProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
      <AppIcon icon={app.icon} gradient={app.iconGradient} size="lg" />

      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            {app.name}
          </h1>
          <p className="mt-1 text-sm text-white/50">{app.tagline}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {app.platforms.map((p) => (
            <PlatformBadge key={p} platform={p} />
          ))}
          <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-medium text-white/40">
            {app.price}
          </span>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          {app.appStoreUrl && (
            <DownloadButton store="appstore" url={app.appStoreUrl} />
          )}
          {app.playStoreUrl && (
            <DownloadButton store="playstore" url={app.playStoreUrl} />
          )}
        </div>
      </div>
    </div>
  );
}
