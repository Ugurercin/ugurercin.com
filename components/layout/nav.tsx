"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, SITE_NAME } from "@/constants/site";
import NavMobile from "./nav-mobile";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0a0a0f]/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6 md:px-8">
          <Link href="/" className="text-sm font-semibold">
            <span className="text-white">UE </span>
            <span className="text-amber-400">Software</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-1.5 text-sm text-white/60 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/apps"
            className="hidden rounded-xl bg-amber-400 px-3 py-1.5 text-sm font-medium text-black transition-colors hover:bg-amber-300 md:block"
          >
            Browse apps
          </Link>

          <button
            className="flex h-8 w-8 items-center justify-center rounded-lg text-white/60 hover:text-white md:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <NavMobile open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
