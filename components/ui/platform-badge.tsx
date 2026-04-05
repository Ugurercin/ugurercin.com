import type { Platform } from "@/types";

interface Props {
  platform: Platform;
  comingSoon?: boolean;
}

export default function PlatformBadge({ platform, comingSoon = false }: Props) {
  if (platform === "ios" && comingSoon) {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium
        border border-dashed border-white/20 text-white/30">
        <span>🍎</span>
        iOS · Coming Soon
      </span>
    );
  }

  if (platform === "ios") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium
        bg-blue-500/10 text-blue-400 border border-blue-500/20">
        <span>🍎</span>
        iOS
      </span>
    );
  }

  if (platform === "android") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium
        bg-green-500/10 text-green-400 border border-green-500/20">
        <span>▶</span>
        Android
      </span>
    );
  }

  return null;
}
