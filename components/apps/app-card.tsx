"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { App } from "@/types";
import AppIcon from "@/components/ui/app-icon";
import PlatformBadge from "@/components/ui/platform-badge";

interface AppCardProps {
  app: App;
}

export default function AppCard({ app }: AppCardProps) {
  return (
    <Link href={`/apps/${app.slug}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.15 }}
        className="group flex flex-col gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 transition-colors hover:border-white/[0.15] hover:bg-white/[0.04]"
      >
        <AppIcon icon={app.icon} gradient={app.iconGradient} size="sm" />
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
        </div>
      </motion.div>
    </Link>
  );
}
