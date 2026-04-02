"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

interface Props {
  screenshots: string[];
  appName: string;
  icon: string;
}

export default function AppScreenshots({ screenshots, appName, icon }: Props) {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const hasScreenshots = screenshots.length > 0;
  const items = hasScreenshots
    ? screenshots
    : Array.from({ length: 4 }, (_, i) => `placeholder-${i}`);

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-3 select-none">
          {items.map((src, i) => (
            <div
              key={src}
              className="shrink-0 w-[140px] h-[260px] sm:w-[160px] sm:h-[300px]
                rounded-2xl border border-white/[0.08] bg-white/[0.02]
                flex flex-col items-center justify-center overflow-hidden"
            >
              {hasScreenshots ? (
                <Image
                  src={src}
                  alt={`${appName} screenshot ${i + 1}`}
                  width={160}
                  height={300}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 opacity-20">
                  <span className="text-3xl">{icon}</span>
                  <span className="text-[10px] text-white/40">Screenshot {i + 1}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {!hasScreenshots && (
        <p className="text-[11px] text-white/20 mt-3">Screenshots coming soon</p>
      )}
    </div>
  );
}
