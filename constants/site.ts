export const SITE_NAME = "UE Software";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://uesoftware.com";
export const SITE_DESCRIPTION = "Apps crafted for real people. iOS & Android.";

export const NAV_ITEMS = [
  { label: "Apps", href: "/apps" },
  { label: "Blog", href: "/blog" },
  { label: "Changelog", href: "/changelog" },
  { label: "About", href: "/#about" },
];

export const SOCIAL_LINKS = [
  { label: "Twitter", href: "https://twitter.com/" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "Email", href: "mailto:hello@uesoftware.com" },
];
