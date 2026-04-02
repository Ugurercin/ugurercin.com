import type { Metadata } from "next";
import { apps } from "@/lib/apps";
import SectionLabel from "@/components/ui/section-label";
import AppGrid from "@/components/apps/app-grid";

export const metadata: Metadata = {
  title: "Apps",
  description: "All iOS and Android apps by UE Software.",
};

export default function AppsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 md:px-8">
      <div className="mb-8 flex flex-col gap-2">
        <SectionLabel>All apps</SectionLabel>
        <h1 className="text-2xl font-semibold tracking-tight text-white">
          Every app we&apos;ve built
        </h1>
        <p className="text-sm text-white/50">
          {apps.length} app{apps.length !== 1 ? "s" : ""} for iOS and Android.
        </p>
      </div>
      <AppGrid apps={apps} />
    </div>
  );
}
