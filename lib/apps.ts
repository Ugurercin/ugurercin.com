import type { App } from "@/types";

export const apps: App[] = [
  {
    slug: "quite-wins",
    featured: true,
    name: "Quite Wins",
    tagline: "Track small wins. Watch your garden grow.",
    description:
      "Quite Wins helps you notice and record the small daily victories that are easy to overlook — finishing a workout, drinking enough water, or simply getting out of bed on a hard day. Every win you log plants a new plant in your personal garden. Watch your garden flourish as your wins compound into real progress.",
    category: "Productivity",
    icon: "🌱",
    iconGradient: ["from-amber-400", "to-orange-500"],
    platforms: ["ios", "android"],
    price: "Free",
    version: "2.1.0",
    downloads: "10k+",
    rating: 4.9,
    screenshots: [],
    appStoreUrl: "",
    playStoreUrl: "",
    features: [
      {
        icon: "✍️",
        title: "Log wins instantly",
        description: "Capture victories in seconds with zero friction.",
      },
      {
        icon: "🌿",
        title: "Plant a garden",
        description: "Every win grows a new plant in your personal garden.",
      },
      {
        icon: "📈",
        title: "Streak tracking",
        description: "See your momentum build day by day.",
      },
      {
        icon: "🔔",
        title: "Daily reminders",
        description: "Gentle nudges to reflect on your day.",
      },
      {
        icon: "🎮",
        title: "Gamified progress",
        description: "Unlock rare plants as your win streaks grow.",
      },
      {
        icon: "🔒",
        title: "100% private",
        description: "All data stays on your device. No account needed.",
      },
    ],
    privacy: {
      collectsData: false,
      usesTracking: false,
      thirdPartySDKs: ["RevenueCat"],
      requiresAccount: false,
      worksOffline: true,
      notes: [
        "All your wins, streaks, and garden data are stored locally on your device only and never transmitted to our servers.",
        "We use RevenueCat solely to verify in-app purchases. No personal data is shared beyond what Apple or Google provide for purchase receipt validation.",
        "No account or sign-in is required. The app works entirely offline.",
        "Uninstalling the app permanently deletes all local data from your device.",
      ],
      lastUpdated: "April 2026",
    },
  },
];

export function getAppBySlug(slug: string): App | undefined {
  return apps.find((app) => app.slug === slug);
}
