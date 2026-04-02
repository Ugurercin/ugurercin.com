"use client";
import { useState } from "react";
import { apps } from "@/lib/apps";
import type { Platform, AppCategory } from "@/types";

type FilterValue = "all" | Platform | AppCategory;

export function useAppFilter() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  const filteredApps =
    activeFilter === "all"
      ? apps
      : apps.filter(
          (app) =>
            app.platforms.includes(activeFilter as Platform) ||
            app.category === (activeFilter as AppCategory)
        );

  const setFilter = (value: string) => setActiveFilter(value as FilterValue);

  return { activeFilter, setFilter, filteredApps };
}
