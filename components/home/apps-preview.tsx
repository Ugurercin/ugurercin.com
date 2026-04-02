import Link from "next/link";
import { apps } from "@/lib/apps";
import SectionLabel from "@/components/ui/section-label";
import AppGrid from "@/components/apps/app-grid";

export default function AppsPreview() {
  const featured = apps.slice(0, 6);

  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-20 sm:px-6 md:px-8">
      <div className="mb-6 flex items-center justify-between">
        <SectionLabel>Featured apps</SectionLabel>
        <Link
          href="/apps"
          className="text-xs text-white/40 transition-colors hover:text-white/70"
        >
          View all →
        </Link>
      </div>
      <AppGrid apps={featured} />
    </section>
  );
}
