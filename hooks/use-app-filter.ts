"use client";
import { useState, useMemo } from "react";
import { apps } from "@/lib/apps";
import type { Platform, AppCategory } from "@/types";

type FilterValue = "all" | Platform | AppCategory;

const PLATFORM_FILTERS = [
  { label: "iOS", value: "ios" as Platform },
  { label: "Android", value: "android" as Platform },
];

export function useAppFilter() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  const categoryFilters = useMemo(() => {
    const seen = new Set<AppCategory>();
    for (const app of apps) {
      seen.add(app.category);
    }
    return Array.from(seen).map((c) => ({ label: c, value: c }));
  }, []);

  const availableFilters = useMemo(
    () => [
      { label: "All", value: "all" as FilterValue },
      ...PLATFORM_FILTERS,
      ...categoryFilters,
    ],
    [categoryFilters]
  );

  const filteredApps =
    activeFilter === "all"
      ? apps
      : apps.filter(
          (app) =>
            app.platforms.includes(activeFilter as Platform) ||
            app.category === (activeFilter as AppCategory)
        );

  const setFilter = (value: string) => setActiveFilter(value as FilterValue);

  return { activeFilter, setFilter, filteredApps, availableFilters };
}
