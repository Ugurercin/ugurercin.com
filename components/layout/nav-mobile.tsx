"use client";

import Link from "next/link";
import { NAV_ITEMS } from "@/constants/site";

interface NavMobileProps {
  open: boolean;
  onClose: () => void;
}

export default function NavMobile({ open, onClose }: NavMobileProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 flex flex-col bg-[#0a0a0f] pt-16">
      <nav className="flex flex-col gap-1 px-4 pt-6">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="rounded-xl px-4 py-3 text-base font-medium text-white/70 transition-colors hover:bg-white/[0.04] hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
