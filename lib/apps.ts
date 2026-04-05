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
    platforms: ["android"],
    platformsComingSoon: ["ios"],
    price: "Free",
    version: "2.1.0",
    downloads: "10k+",
    rating: 4.9,
    screenshots: [],
appStoreUrl: "https://apps.apple.com/app/quite-wins/id123456789",
playStoreUrl: "https://play.google.com/store/apps/details?id=com.uesoftware.quitewins",
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
  {
    slug: "drone-wars",
    name: "Drone Wars",
    tagline: "Survive the swarm. Dominate the galaxy.",
    description:
      "Drone Wars is a fast-paced space shooter where you pilot a lone fighter against endless waves of enemy drones. Dodge, blast, and outlast increasingly brutal swarms across deep space. Simple controls, brutal difficulty, one more run.",
    category: "Games",
    icon: "🚀",
    iconGradient: ["from-violet-500", "to-indigo-600"],
    platforms: ["android"],
    platformsComingSoon: ["ios"],
    price: "Free",
    version: "1.0.0",
    downloads: "5k+",
    rating: 4.7,
    featured: false,
    screenshots: [],
appStoreUrl: "https://apps.apple.com/app/drone-wars/id987654321",
playStoreUrl: "https://play.google.com/store/apps/details?id=com.uesoftware.dronewars",
    features: [
      {
        icon: "🎮",
        title: "One-thumb controls",
        description: "Tap and drag to move. Simple to learn, hard to master.",
      },
      {
        icon: "🌊",
        title: "Endless waves",
        description: "Procedurally generated enemy swarms that never repeat.",
      },
      {
        icon: "💥",
        title: "Power-ups",
        description: "Collect weapons and shields to turn the tide.",
      },
      {
        icon: "🏆",
        title: "Leaderboards",
        description: "Compete for the highest score with Game Center.",
      },
      {
        icon: "🎵",
        title: "Original soundtrack",
        description: "Pulse-pounding music that reacts to gameplay intensity.",
      },
      {
        icon: "🔒",
        title: "No ads, no trackers",
        description: "Pure gameplay. No interruptions, no data collection.",
      },
    ],
    privacy: {
      collectsData: false,
      usesTracking: false,
      thirdPartySDKs: ["Google Play Services", "AdMob", "Expo"],
      requiresAccount: false,
      worksOffline: true,
      notes: [
        "Game progress and settings are stored locally on your device using AsyncStorage and never sent to our servers.",
        "AdMob may collect your Advertising ID to serve ads. You can opt out in your device settings.",
        "Google Play Services is used for achievements and leaderboards on Android.",
        "No account or sign-in is required to play.",
        "Uninstalling the app permanently removes all local data from your device.",
      ],
      lastUpdated: "April 2026",
    },
  },
  {
    slug: "pack-away",
    name: "Pack Away",
    tagline: "Your thoughts, safely stored away.",
    description:
      "Pack Away is a private journaling app designed for people who write to think. Capture your thoughts, ideas, and reflections in a distraction-free space. Everything stays on your device — no cloud, no account, no noise.",
    category: "Lifestyle",
    icon: "📝",
    iconGradient: ["from-emerald-400", "to-teal-500"],
    platforms: ["android"],
    platformsComingSoon: ["ios"],
    price: "Free",
    version: "1.0.0",
    downloads: "",
    rating: undefined,
    featured: false,
    screenshots: [],
    appStoreUrl: "",
    playStoreUrl: "",
    features: [
      {
        icon: "✍️",
        title: "Distraction-free writing",
        description: "A clean canvas with nothing in your way.",
      },
      {
        icon: "🔒",
        title: "Stays on your device",
        description: "No cloud sync, no account. Your words are yours alone.",
      },
      {
        icon: "📁",
        title: "Organize your writings",
        description: "Group entries into collections however you like.",
      },
      {
        icon: "🔍",
        title: "Quick search",
        description: "Find any entry instantly across all your writings.",
      },
      {
        icon: "🌙",
        title: "Dark and light mode",
        description: "Write comfortably any time of day.",
      },
      {
        icon: "📤",
        title: "Export anytime",
        description: "Export your writings as plain text or PDF.",
      },
    ],
    privacy: {
      collectsData: false,
      usesTracking: false,
      requiresAccount: false,
      worksOffline: true,
      notes: [
        "Pack Away does not collect, store, or transmit any personal data.",
        "All your writings are stored locally on your device and never leave it.",
        "We do not use any third-party analytics, advertising SDKs, or tracking tools.",
        "No account or sign-in is required. The app works entirely offline.",
        "Deleting the app permanently removes all writings from your device.",
      ],
      lastUpdated: "April 2026",
    },
  },
];

export function getAppBySlug(slug: string): App | undefined {
  return apps.find((app) => app.slug === slug);
}
