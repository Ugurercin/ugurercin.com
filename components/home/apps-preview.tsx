"use client";
import { useAppFilter } from "@/hooks/use-app-filter";
import AppFilterBar from "@/components/home/app-filter-bar";
import AppGrid from "@/components/apps/app-grid";
import SectionLabel from "@/components/ui/section-label";

export default function AppsPreview() {
  const { activeFilter, setFilter, filteredApps } = useAppFilter();

  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-20 sm:px-6 md:px-8">
      <div className="mb-4 flex items-center justify-between">
        <SectionLabel>All Apps</SectionLabel>
      </div>
      <AppFilterBar activeFilter={activeFilter} onFilter={setFilter} />
      <AppGrid apps={filteredApps} />
    </section>
  );
}
