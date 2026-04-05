"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { App } from "@/types";
import AppIcon from "@/components/ui/app-icon";
import PlatformBadge from "@/components/ui/platform-badge";
import { EASE_SPRING } from "@/lib/motion";

interface AppCardProps {
  app: App;
}

export default function AppCard({ app }: AppCardProps) {
  return (
    <Link href={`/apps/${app.slug}`} className="block">
      <motion.div
        className="group relative will-animate"
        whileHover={{ scale: 1.025, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={EASE_SPRING}
      >
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
            transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: "0 0 28px rgba(245,158,11,0.1), 0 0 1px rgba(245,158,11,0.2)" }}
        />
        <div className="relative flex flex-col gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors duration-300 group-hover:border-amber-400/20">
          <motion.div layoutId={`app-icon-${app.slug}`} className="will-animate">
            <AppIcon icon={app.icon} gradient={app.iconGradient} size="sm" />
          </motion.div>
          <div>
            <p className="text-sm font-semibold text-white">{app.name}</p>
            <p className="mt-0.5 line-clamp-2 text-xs text-white/50">
              {app.tagline}
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {app.platforms.map((p) => (
              <PlatformBadge key={p} platform={p} />
            ))}
            {app.platformsComingSoon?.map((p) => (
              <PlatformBadge key={p} platform={p} comingSoon />
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
