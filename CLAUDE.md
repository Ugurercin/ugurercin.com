# CLAUDE.md — UE Software App Showcase Website

## Project Overview

This is the official website for **UE Software**, an indie app studio. It showcases all published iOS and Android apps, hosts per-app privacy policies, includes a blog, an about section, and a newsletter signup.

**Live URL:** (to be configured)
**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS · shadcn/ui · Framer Motion

---

## Design System

### Theme
- **Mode:** Dark only. Background is `#0a0a0f` (near-black). Do not add a light mode toggle.
- **Accent color:** Warm amber/orange — use Tailwind's `amber-400` (`#f59e0b`) and `orange-400` (`#fb923c`) for gradients and highlights.
- **Text hierarchy:**
  - Primary: `white`
  - Secondary: `rgba(255,255,255,0.5)`
  - Muted: `rgba(255,255,255,0.25)`
- **Borders:** Always `0.5px` or `1px`, color `rgba(255,255,255,0.08)` for subtle, `rgba(255,255,255,0.12)` for emphasis.
- **Border radius:** Cards use `rounded-2xl`, buttons `rounded-xl`, pills `rounded-full`.

### Typography
- Font: Use `Geist` (from `next/font/google`) for headings, `Inter` for body.
- Hero heading: `text-4xl font-semibold tracking-tight text-white`
- Section titles: `text-xs font-medium uppercase tracking-widest text-white/40`
- Body: `text-sm text-white/50 leading-relaxed`

### Accent Glow
For featured elements (app icons, hero), apply a subtle amber glow:
```css
box-shadow: 0 0 40px rgba(245, 158, 11, 0.15);
```

---

## File Structure

Every file has one job. Never merge two concerns into one file. If a page section grows beyond ~80 lines, extract it into its own component.

```
/
├── app/
│   ├── layout.tsx                        # Root layout — mounts Nav + Footer only, no logic
│   ├── page.tsx                          # Home page — composes sections, no inline JSX blocks
│   ├── globals.css                       # Global styles + CSS variables only
│   │
│   ├── apps/
│   │   ├── page.tsx                      # All apps grid page
│   │   └── [slug]/
│   │       ├── page.tsx                  # App detail page — composes sections, no inline JSX
│   │       └── privacy/
│   │           └── page.tsx              # Standalone privacy policy page for this app
│   │
│   ├── blog/
│   │   ├── page.tsx                      # Blog index
│   │   └── [slug]/
│   │       └── page.tsx                  # Individual blog post
│   │
│   └── api/
│       └── newsletter/
│           └── route.ts                  # POST handler for newsletter signup
│
├── components/
│   │
│   ├── layout/                           # Site-wide chrome
│   │   ├── nav.tsx                       # Top navigation bar
│   │   ├── nav-mobile.tsx                # Hamburger menu (mobile only)
│   │   └── footer.tsx                    # Site footer
│   │
│   ├── home/                             # Sections used only on the home page
│   │   ├── hero.tsx                      # Hero headline + CTA + stats
│   │   ├── apps-preview.tsx              # "Featured apps" grid strip on home
│   │   ├── about-strip.tsx               # About me / studio section
│   │   ├── newsletter-section.tsx        # Newsletter heading + form wrapper
│   │   └── blog-preview.tsx              # Latest 2–3 posts preview strip
│   │
│   ├── apps/                             # Sections used on app pages
│   │   ├── app-card.tsx                  # Single app card (used in grids)
│   │   ├── app-grid.tsx                  # Responsive grid of AppCards
│   │   ├── app-hero.tsx                  # Detail page hero (icon, name, download btns)
│   │   ├── app-stats-bar.tsx             # Rating · Downloads · Version · Price strip
│   │   ├── app-screenshots.tsx           # Horizontal scroll screenshot row
│   │   ├── app-description.tsx           # "About this app" text block
│   │   ├── app-features.tsx              # Features grid (2-col cards)
│   │   └── app-privacy.tsx              # Privacy policy section (#privacy anchor)
│   │
│   ├── blog/                             # Blog-specific components
│   │   ├── blog-card.tsx                 # Single post card
│   │   ├── blog-grid.tsx                 # Grid of BlogCards
│   │   └── blog-post-layout.tsx          # MDX post wrapper with back link
│   │
│   └── ui/                               # Shared, generic UI primitives
│       ├── platform-badge.tsx            # iOS / Android pill badge
│       ├── section-label.tsx             # Uppercase muted section heading
│       ├── newsletter-form.tsx           # Controlled email input + submit
│       ├── download-button.tsx           # App Store / Play Store button
│       └── app-icon.tsx                  # Gradient icon square with glow
│
├── lib/
│   ├── apps.ts                           # App data array + types (single source of truth)
│   ├── blog.ts                           # Blog post loader utilities (reads /content/blog/)
│   └── utils.ts                          # cn() helper + any shared utility functions
│
├── types/
│   └── index.ts                          # All shared TypeScript types and interfaces
│                                         # (App, Platform, AppCategory, BlogPost, etc.)
│
├── hooks/
│   └── use-newsletter.ts                 # Newsletter form state + submit logic
│
├── constants/
│   └── site.ts                           # Site name, URL, social links, nav items
│                                         # e.g. SITE_NAME, SOCIAL_LINKS, NAV_ITEMS
│
├── content/
│   ├── blog/                             # MDX blog post files
│   │   └── hello-world.mdx               # Example post
│   └── privacy/                          # Per-app privacy policy MDX files
│       └── quite-wins.mdx                # Privacy policy for Quite Wins
│
└── public/
    └── apps/
        └── quite-wins/                   # One folder per app slug
            ├── icon.png                  # App icon image (optional, fallback to emoji)
            └── screenshots/
                ├── 01.png
                ├── 02.png
                └── 03.png
```

### Folder rules Claude Code must follow

- **`components/layout/`** — Only Nav and Footer live here. Nothing else.
- **`components/home/`** — Components used exclusively on the home page. If a component is reused elsewhere, move it to `components/ui/`.
- **`components/apps/`** — One file per section of the app detail page. Each file exports a single default component.
- **`components/ui/`** — Truly generic, reusable primitives. No page-specific logic. These wrap or extend shadcn components.
- **`lib/apps.ts`** — The only place app data lives. Pages and components import from here, never define their own data.
- **`types/index.ts`** — All TypeScript types in one file. Never define types inside component files.
- **`constants/site.ts`** — All magic strings (site name, nav links, social URLs) live here. Never hardcode these in components.
- **`hooks/`** — Any stateful logic that isn't rendering belongs in a custom hook.
- **`content/privacy/`** — One MDX file per app, named `{slug}.mdx`. This is the only place privacy policy prose lives. Never hardcode privacy text in components or `lib/apps.ts`.
- **`app/apps/[slug]/privacy/page.tsx`** — A dedicated, standalone page for each app's privacy policy. This is the URL submitted to App Store and Google Play.
- **Page files (`app/**/page.tsx`)** — Pages are composers only. They import section components and arrange them. No large inline JSX blocks, no business logic, no data fetching logic (use lib/ for that).

### Naming conventions

- Component files: `kebab-case.tsx` (e.g. `app-card.tsx`)
- Component exports: `PascalCase` default export matching the filename concept (e.g. `export default function AppCard`)
- Types: `PascalCase` (e.g. `App`, `BlogPost`, `Platform`)
- Constants: `SCREAMING_SNAKE_CASE` (e.g. `SITE_NAME`, `NAV_ITEMS`)
- Hooks: `camelCase` prefixed with `use` (e.g. `useNewsletter`)
- Utility functions: `camelCase` (e.g. `formatDate`, `getAppBySlug`)

---

## App Data Schema

Define all apps in `lib/apps.ts`. This is the single source of truth for everything.

```typescript
export type Platform = "ios" | "android";
export type AppCategory = "Productivity" | "Wellness" | "Utilities" | "Games" | "Creative" | "Lifestyle";

export interface App {
  slug: string;               // URL slug e.g. "quite-wins"
  name: string;               // Display name e.g. "Quite Wins"
  tagline: string;            // One-liner shown on card and detail hero
  description: string;        // 2-3 sentence description for detail page
  category: AppCategory;
  icon: string;               // Emoji or path to icon image
  iconGradient: [string, string]; // Tailwind gradient colors e.g. ["from-amber-400", "to-orange-500"]
  platforms: Platform[];
  price: "Free" | string;     // "Free" or "$2.99" etc.
  version: string;
  downloads?: string;         // e.g. "10k+"
  rating?: number;            // e.g. 4.9
  screenshots: string[];      // Paths to screenshot images in /public/apps/{slug}/
  appStoreUrl?: string;
  playStoreUrl?: string;
  features: {
    icon: string;             // Emoji
    title: string;
    description: string;
  }[];
  privacy: {
    collectsData: boolean;
    dataTypes?: string[];     // e.g. ["Usage analytics"]
    usesTracking: boolean;
    thirdPartySDKs?: string[];
    requiresAccount: boolean;
    worksOffline: boolean;
    notes: string[];          // Bullet points for the privacy section
    lastUpdated: string;      // e.g. "January 2026"
  };
}

export const apps: App[] = [
  {
    slug: "quite-wins",
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
    screenshots: [],           // Add paths when screenshots are ready
    appStoreUrl: "",           // Add App Store URL
    playStoreUrl: "",          // Add Play Store URL
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
      requiresAccount: false,
      worksOffline: true,
      notes: [
        "Quite Wins does not collect, store, or transmit any personal data. All wins, streaks, and garden data are stored locally on your device only.",
        "We do not use any third-party analytics, advertising SDKs, or crash reporting tools that access user data.",
        "No account or sign-in is required. The app works entirely offline.",
        "Deleting the app removes all data permanently from your device.",
      ],
      lastUpdated: "January 2026",
    },
  },
  // Add more apps here following the same schema
];
```

---

## Privacy Policy System

### How it works

Every app has its own dedicated privacy policy page at:
```
https://uesoftware.com/apps/{slug}/privacy
```

This is the URL you submit to the App Store and Google Play Store as the privacy policy link. It is a clean, standalone page — no nav clutter, just the policy content.

### URL examples
- Quite Wins → `https://uesoftware.com/apps/quite-wins/privacy`
- Next app → `https://uesoftware.com/apps/{slug}/privacy`

### File structure for privacy policies

Each app's privacy policy is written as an MDX file:
```
content/
└── privacy/
    ├── quite-wins.mdx       ← one file per app, named by slug
    └── {slug}.mdx
```

The MDX file has frontmatter + free-form prose:
```mdx
---
appName: "Quite Wins"
lastUpdated: "January 2026"
collectsData: false
---

## Privacy Policy for Quite Wins

**Last updated: January 2026**

Quite Wins does not collect, store, or transmit any personal data...

### What data we collect
None. All data is stored locally on your device.

### Third-party services
This app does not use any third-party analytics, advertising, or tracking SDKs.

### Contact
For questions, contact: hello@uesoftware.com
```

### Privacy page (`app/apps/[slug]/privacy/page.tsx`)

- Statically generated via `generateStaticParams` from `lib/apps.ts`
- Reads the matching `content/privacy/{slug}.mdx` file
- Renders a **minimal, clean layout** — no full site nav/footer chrome
- Just: UE Software logo (links home) + policy content + "← Back to {App Name}" link
- Must be fully readable and professional — App Store reviewers will visit this URL
- Generates correct metadata: `title: "Privacy Policy — {App Name} | UE Software"`

### Privacy page layout spec

```
[UE Software logo]                    [← Back to Quite Wins]

Privacy Policy — Quite Wins
Last updated: January 2026

{MDX content rendered here}

---
© 2026 UE Software · hello@uesoftware.com
```

- Background: same `#0a0a0f` dark theme
- Max width: `max-w-2xl mx-auto` — narrow readable column
- Padding: `px-4 py-12 sm:px-6`
- Prose styles: use Tailwind Typography (`@tailwindcss/typography`) with a dark prose variant

### Privacy summary on the app detail page

The app detail page (`/apps/[slug]`) still shows a **short privacy summary** via `AppPrivacy` component — not the full policy. It includes:
- "No tracking" / "Collects data" badge
- 3–4 bullet points from `app.privacy.notes` in `lib/apps.ts`
- A link: `"Read full privacy policy →"` pointing to `/apps/{slug}/privacy`

### Adding a new app's privacy policy — checklist

1. Add the app to `lib/apps.ts` with its `slug` and `privacy` summary fields
2. Create `content/privacy/{slug}.mdx` with the full policy prose
3. The privacy page at `/apps/{slug}/privacy` is auto-generated — no extra page file needed
4. Submit `https://uesoftware.com/apps/{slug}/privacy` to the App Store / Play Store

### lib/privacy.ts

Create `lib/privacy.ts` to handle reading privacy MDX files:
```typescript
// getPrivacyPolicy(slug: string): Promise<{ content: string, frontmatter: PrivacyFrontmatter }>
// Reads content/privacy/{slug}.mdx
// Returns parsed frontmatter + MDX content string
// Throws notFound() if file doesn't exist
```

---

## Page Specifications

### Home Page (`app/page.tsx`)

Sections in order:

1. **Hero**
   - Eyebrow pill: `● Independent App Studio` in amber
   - H1: `Apps built for` + amber gradient text `real people.`
   - Subtext: short description of UE Software
   - Two CTAs: `Browse apps` (amber filled) + `Read the blog` (ghost)
   - Stats row: Total apps · Total downloads · Avg rating — separated by a top border

2. **App Showcase Grid**
   - Section label + "View all →" link
   - `grid-cols-2 md:grid-cols-3` responsive grid
   - Each `<AppCard />` shows: icon, name, category, platform badges (iOS/Android pills)
   - Clicking a card navigates to `/apps/[slug]`
   - Add a subtle hover: `scale-[1.02]` and border brightens to `rgba(255,255,255,0.15)`

3. **About Strip**
   - Avatar circle with initials + gradient background
   - Short personal bio text
   - Link to full about section or contact

4. **Newsletter**
   - Section label: `Stay in the loop`
   - Single email input + submit button (use shadcn `Input` + `Button`)
   - On submit: POST to `/api/newsletter` (implement with Resend or similar)
   - Success state: replace form with a confirmation message

5. **Blog Preview**
   - Show latest 2–3 posts as cards
   - Link to `/blog`

---

### App Detail Page (`app/apps/[slug]/page.tsx`)

Generate statically with `generateStaticParams` from `lib/apps.ts`.

Sections in order:

1. **Breadcrumb nav:** `Apps › {App Name}`

2. **App Hero**
   - Large icon (72px, rounded-2xl, amber gradient + glow)
   - App name (text-2xl), tagline, platform pills, price pill
   - Download buttons: App Store + Google Play (use SVG logos, not emoji)
   - If `appStoreUrl` or `playStoreUrl` is empty, hide that button

3. **Stats bar**
   - Rating · Downloads · Version · Price
   - Separated by vertical dividers

4. **Screenshots**
   - Horizontal scroll row of phone-sized screenshot cards
   - If no screenshots yet, show placeholder cards with the app icon

5. **About this app**
   - Full `description` text

6. **Features grid**
   - `grid-cols-2` cards, each with emoji icon, title, short description
   - Use shadcn `Card` component

7. **Privacy Policy** (anchor: `#privacy`)
   - Render from `app.privacy` data
   - Show a "No tracking" or "Collects data" badge depending on `collectsData`
   - Bullet list from `privacy.notes`
   - "Last updated {lastUpdated}" at the bottom
   - This section must be linkable directly: `/apps/quite-wins#privacy`
   - Use this URL format when submitting to App Store / Play Store for the privacy policy link

---

### Blog (`app/blog/`)

- Use MDX for blog posts stored in `/content/blog/`
- Each post has frontmatter: `title`, `date`, `summary`, `slug`
- Blog index: grid of post cards (title, date, summary excerpt)
- Post page: full MDX render with a back link

---

## Component Specs

Each component has one responsibility. Props come from `types/index.ts`. No component defines its own types inline.

### Layout

**`components/layout/nav.tsx`**
- Renders full desktop nav: logo + links + CTA button
- Imports `NAV_ITEMS` and `SITE_NAME` from `constants/site.ts`
- On mobile: hides links, shows hamburger icon that toggles `NavMobile`
- Sticky, `backdrop-blur-md`, `bg-[#0a0a0f]/80`, `border-b border-white/[0.06]`
- Logo: `UE ` (white) + `Software` (amber)

**`components/layout/nav-mobile.tsx`**
- Full-screen slide-down drawer for mobile nav
- Shown/hidden via state passed from `nav.tsx`
- Links close the drawer on tap

**`components/layout/footer.tsx`**
- Imports `SOCIAL_LINKS`, `NAV_ITEMS`, `SITE_NAME` from `constants/site.ts`
- Desktop: logo left, links right, copyright below
- Mobile: all stacked vertically, centered

### UI Primitives (`components/ui/`)

**`platform-badge.tsx`** — Props: `platform: Platform`. iOS → blue pill, Android → green pill.

**`section-label.tsx`** — Props: `children`. Small uppercase muted section heading. Used before every major section.

**`download-button.tsx`** — Props: `store: "appstore" | "playstore", url: string`. Renders correct SVG logo + label. Returns `null` if `url` is empty.

**`app-icon.tsx`** — Props: `icon: string, gradient: [string, string], size?: "sm"|"md"|"lg"`. Gradient rounded square with amber glow. sm=40px (cards), md=56px, lg=72px (detail hero).

**`newsletter-form.tsx`** — Standalone controlled form. Uses `useNewsletter()` hook. shadcn Input + Button. Four states: idle / loading / success / error.

### App Components (`components/apps/`)

**`app-card.tsx`** — Props: `app: App`. Links to `/apps/[slug]`. Shows AppIcon(sm), name, tagline, PlatformBadges. Hover: scale + border brighten. shadcn Card base.

**`app-grid.tsx`** — Props: `apps: App[]`. `grid-cols-1 sm:grid-cols-2 md:grid-cols-3`. Maps apps → AppCard. No other logic.

**`app-hero.tsx`** — Props: `app: App`. AppIcon(lg) + name + tagline + pills + DownloadButtons. `flex-col` on mobile, `sm:flex-row`.

**`app-stats-bar.tsx`** — Props: `rating?, downloads?, version, price`. Four stats with dividers. Omits stat if value is undefined.

**`app-screenshots.tsx`** — Props: `screenshots: string[], appName: string, icon: string`. `overflow-x-auto snap-x snap-mandatory`. If screenshots empty → 4 placeholder cards with icon.

**`app-features.tsx`** — Props: `features: App["features"]`. `grid-cols-1 sm:grid-cols-2`. Each feature in a shadcn Card: emoji + title + description.

**`app-privacy.tsx`** — Props: `privacy: App["privacy"], appName: string, slug: string`. Shows a **summary** of the privacy policy — badge, 3–4 bullet points, and a "Read full privacy policy →" link to `/apps/{slug}/privacy`. Does NOT render the full policy text.

### Blog Components (`components/blog/`)

**`blog-card.tsx`** — Props: `post: BlogPost`. Title, date, summary excerpt. Links to `/blog/[slug]`.

**`blog-grid.tsx`** — Props: `posts: BlogPost[]`. Responsive grid of BlogCards.

**`blog-post-layout.tsx`** — Wraps MDX content with back link and consistent padding.

### Home Sections (`components/home/`)

One file per home page section. These are not reused elsewhere — if a component gets reused, move it to `components/ui/`.

- **`hero.tsx`** — Eyebrow pill, H1, subtext, CTA buttons, stats row
- **`apps-preview.tsx`** — "Featured apps" heading + AppGrid (shows first 6 apps)
- **`about-strip.tsx`** — Avatar, bio text, contact link
- **`newsletter-section.tsx`** — Section label + NewsletterForm
- **`blog-preview.tsx`** — "Latest posts" heading + BlogGrid (shows latest 3)

---

## Newsletter API (`app/api/newsletter/route.ts`)

```typescript
// POST handler
// Accepts: { email: string }
// Validate email format
// Integrate with Resend (preferred) or Mailchimp
// Return { success: true } or { error: string }
// Store RESEND_API_KEY in .env.local
```

---

## SEO & Metadata

In `app/layout.tsx` set base metadata:
```typescript
export const metadata: Metadata = {
  title: { default: "UE Software", template: "%s | UE Software" },
  description: "Apps crafted for real people. iOS & Android.",
  openGraph: { ... },
};
```

Each app detail page should generate its own metadata:
```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  const app = apps.find(a => a.slug === params.slug);
  return {
    title: app.name,
    description: app.tagline,
  };
}
```

Each privacy policy page generates its own metadata:
```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  const app = apps.find(a => a.slug === params.slug);
  return {
    title: `Privacy Policy — ${app.name}`,
    description: `Privacy policy for ${app.name} by UE Software.`,
    robots: { index: true, follow: false }, // indexable but don't follow links
  };
}
```

---

## Project Status

> **The Next.js backbone is already bootstrapped.** `create-next-app` has been run with TypeScript, Tailwind CSS, and the App Router. Do not re-run `create-next-app` or reinitialise the project — it will overwrite existing files.

### Already done
- [x] `create-next-app` — Next.js 15, TypeScript, Tailwind CSS, App Router, no `src/` dir
- [x] Base `package.json`, `tsconfig.json`, `tailwind.config.ts`, `next.config.ts` exist

### Still needed — run these before building

```bash
# shadcn — initialise then add required components
npx shadcn@latest init
npx shadcn@latest add card button input badge separator navigation-menu

# Additional packages
npm install framer-motion
npm install resend                    # For newsletter API
npm install @next/mdx @mdx-js/loader  # For blog MDX support
npm install next-mdx-remote           # MDX rendering in pages
```

---

## Environment Variables

```env
# .env.local
RESEND_API_KEY=re_xxxxxxxxxxxx
NEXT_PUBLIC_SITE_URL=https://uesoftware.com
```

---

## Shared Types (`types/index.ts`)

All TypeScript types live here. Never define types inside component or page files.

```typescript
export type Platform = "ios" | "android";
export type AppCategory = "Productivity" | "Wellness" | "Utilities" | "Games" | "Creative" | "Lifestyle";

export interface App { /* full schema — see lib/apps.ts */ }

export interface BlogPost {
  slug: string;
  title: string;
  date: string;        // ISO string e.g. "2026-01-15"
  summary: string;
  content?: string;    // populated on post page only
}
```

---

## Site Constants (`constants/site.ts`)

All magic strings live here. Components import from here — never hardcode.

```typescript
export const SITE_NAME = "UE Software";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://uesoftware.com";
export const SITE_DESCRIPTION = "Apps crafted for real people. iOS & Android.";

export const NAV_ITEMS = [
  { label: "Apps", href: "/apps" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/#about" },
];

export const SOCIAL_LINKS = [
  { label: "Twitter", href: "https://twitter.com/" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "Email", href: "mailto:hello@uesoftware.com" },
];
```

---

## Hooks (`hooks/`)

**`use-newsletter.ts`**
```typescript
// Manages email input state, loading, success, error
// Calls POST /api/newsletter
// Returns: { email, setEmail, status, handleSubmit }
// status: "idle" | "loading" | "success" | "error"
```

---

## Key Rules for Claude Code

1. **Never use light backgrounds.** The entire site is dark. Background is always `#0a0a0f` or `rgba(255,255,255,0.02–0.05)` for card surfaces.
2. **Amber is the only accent color.** Do not introduce blues, purples, or greens except for platform badge pills (iOS = blue, Android = green).
3. **Every app has a standalone privacy page at `/apps/{slug}/privacy`.** This is the URL submitted to App Store and Google Play — never use the main app detail page URL for this. The privacy page must be statically generated, minimal, and readable.
4. **App data comes only from `lib/apps.ts`.** No hardcoded strings in page components.
5. **All pages are statically generated** — use `generateStaticParams` for `[slug]` routes.
6. **Framer Motion** for page transitions and card hover animations only. Keep it subtle — no large bouncing or spinning effects.
7. **shadcn components** are the base for all interactive UI (inputs, buttons, cards). Style them with Tailwind variants on top, do not create custom component primitives from scratch.
8. **Mobile first — strictly enforced.** Every layout must be designed for mobile first and scale up. Specific rules:
   - App grid: `grid-cols-1 sm:grid-cols-2 md:grid-cols-3`
   - Hero heading: `text-3xl sm:text-4xl md:text-5xl`
   - Hero subtext: `text-sm sm:text-base`
   - Stats row on home: `grid-cols-3` on all sizes, smaller font on mobile — do not hide
   - App detail hero: stack icon + meta vertically on mobile (`flex-col sm:flex-row`)
   - Download buttons: stack vertically on mobile (`flex-col sm:flex-row`)
   - Features grid: `grid-cols-1 sm:grid-cols-2` — never force 2 cols on small screens
   - Nav: collapse links into a hamburger menu on mobile (`md:hidden` / `hidden md:flex`)
   - Footer: stack logo, links, and socials vertically on mobile, centered
   - Screenshots row: `overflow-x-auto` with `snap-x snap-mandatory` for touch swipe
   - Padding: `px-4 sm:px-6 md:px-8 lg:px-12` — never flat large padding on all screens
   - Never use fixed pixel widths on containers — always `max-w-*` with `w-full`
9. **Screenshots:** If `app.screenshots` is an empty array, render placeholder cards — never crash or hide the section.
10. **Download buttons:** Hide App Store button if `appStoreUrl` is empty, hide Play Store button if `playStoreUrl` is empty.
11. **One component, one file, one job.** If a component exceeds ~80 lines of JSX, it should be split. Page files (`app/**/page.tsx`) must only compose section components — no inline JSX blocks longer than a few lines.
12. **No magic strings in components.** Site name, URLs, nav items, and social links all come from `constants/site.ts`. Types always come from `types/index.ts`.
13. **No business logic in components.** API calls, data fetching, and form state belong in `lib/` or `hooks/`. Components only render.