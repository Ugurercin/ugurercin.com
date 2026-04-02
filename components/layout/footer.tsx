import Link from "next/link";
import { NAV_ITEMS, SOCIAL_LINKS, SITE_NAME } from "@/constants/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold">
              <span className="text-white">UE </span>
              <span className="text-amber-400">Software</span>
            </p>
            <p className="mt-1 text-xs text-white/30">
              Apps crafted for real people.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-4 md:justify-end">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/40 transition-colors hover:text-white/70"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-sm text-white/40 transition-colors hover:text-white/70"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-white/20">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
