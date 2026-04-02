import { Card } from "@/components/ui/card";
import type { App } from "@/types";

interface AppFeaturesProps {
  features: App["features"];
}

export default function AppFeatures({ features }: AppFeaturesProps) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {features.map((feature) => (
        <Card
          key={feature.title}
          className="border-white/[0.08] bg-white/[0.02] p-4"
        >
          <div className="flex items-start gap-3">
            <span className="text-xl" role="img" aria-label={feature.title}>
              {feature.icon}
            </span>
            <div>
              <p className="text-sm font-medium text-white">{feature.title}</p>
              <p className="mt-0.5 text-xs text-white/50">
                {feature.description}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
