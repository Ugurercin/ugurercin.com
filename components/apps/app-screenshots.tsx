import Image from "next/image";

interface AppScreenshotsProps {
  screenshots: string[];
  appName: string;
  icon: string;
}

function PlaceholderCard({ icon, appName }: { icon: string; appName: string }) {
  return (
    <div className="flex h-[420px] w-[195px] flex-shrink-0 snap-start items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.02]">
      <div className="flex flex-col items-center gap-2">
        <span className="text-4xl" role="img" aria-label={appName}>
          {icon}
        </span>
        <span className="text-xs text-white/20">Screenshot coming soon</span>
      </div>
    </div>
  );
}

export default function AppScreenshots({
  screenshots,
  appName,
  icon,
}: AppScreenshotsProps) {
  const items =
    screenshots.length > 0 ? screenshots : Array.from({ length: 4 });

  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex gap-3 snap-x snap-mandatory w-max">
        {items.map((src, i) =>
          screenshots.length > 0 ? (
            <div
              key={i}
              className="relative h-[420px] w-[195px] flex-shrink-0 snap-start overflow-hidden rounded-2xl border border-white/[0.08]"
            >
              <Image
                src={src as string}
                alt={`${appName} screenshot ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <PlaceholderCard key={i} icon={icon} appName={appName} />
          ),
        )}
      </div>
    </div>
  );
}
