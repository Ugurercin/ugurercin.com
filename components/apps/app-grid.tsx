import type { App } from "@/types";
import AppCard from "./app-card";

interface AppGridProps {
  apps: App[];
}

export default function AppGrid({ apps }: AppGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {apps.map((app) => (
        <AppCard key={app.slug} app={app} />
      ))}
    </div>
  );
}
