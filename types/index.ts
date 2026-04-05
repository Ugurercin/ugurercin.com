export type Platform = "ios" | "android";
export type AppCategory =
  | "Productivity"
  | "Wellness"
  | "Utilities"
  | "Games"
  | "Creative"
  | "Lifestyle";

export interface App {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: AppCategory;
  icon: string;
  iconGradient: [string, string];
  platforms: Platform[];
  platformsComingSoon?: Platform[];
  price: "Free" | string;
  version: string;
  downloads?: string;
  rating?: number;
  screenshots: string[];
  featured?: boolean;
  appStoreUrl?: string;
  playStoreUrl?: string;
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  privacy: {
    collectsData: boolean;
    dataTypes?: string[];
    usesTracking: boolean;
    thirdPartySDKs?: string[];
    requiresAccount: boolean;
    worksOffline: boolean;
    notes: string[];
    lastUpdated: string;
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content?: string;
}
