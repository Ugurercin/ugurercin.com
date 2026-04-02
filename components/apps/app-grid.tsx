import type { App } from "@/types";
import AppCard from "./app-card";
import StaggerChildren, { StaggerItem, staggerItemVariants } from "@/components/motion/stagger-children";

interface AppGridProps {
  apps: App[];
}

export default function AppGrid({ apps }: AppGridProps) {
  return (
    <StaggerChildren className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {apps.map((app) => (
        <StaggerItem key={app.slug} variants={staggerItemVariants}>
          <AppCard app={app} />
        </StaggerItem>
      ))}
    </StaggerChildren>
  );
}
