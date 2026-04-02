import type { Platform } from "@/types";

interface PlatformBadgeProps {
  platform: Platform;
}

export default function PlatformBadge({ platform }: PlatformBadgeProps) {
  const isIos = platform === "ios";
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${
        isIos
          ? "bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20"
          : "bg-green-500/10 text-green-400 ring-1 ring-green-500/20"
      }`}
    >
      {isIos ? "iOS" : "Android"}
    </span>
  );
}
