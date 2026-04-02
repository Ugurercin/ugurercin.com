import Link from "next/link";
import type { App } from "@/types";

interface AppPrivacyProps {
  privacy: App["privacy"];
  appName: string;
  slug: string;
}

export default function AppPrivacy({ privacy, appName, slug }: AppPrivacyProps) {
  return (
    <section id="privacy" className="scroll-mt-20 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
      <div className="mb-4 flex items-center gap-3">
        <span className="text-base">🔐</span>
        <span className="text-sm font-medium text-white/70">Privacy</span>
        <span
          className={`ml-auto rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${
            privacy.collectsData
              ? "border-red-500/20 bg-red-500/10 text-red-400"
              : "border-green-500/20 bg-green-500/10 text-green-400"
          }`}
        >
          {privacy.collectsData ? "Collects data" : "No tracking"}
        </span>
      </div>

      <ul className="mb-4 space-y-2">
        {privacy.notes.map((note, i) => (
          <li key={i} className="flex gap-2.5 text-xs leading-relaxed text-white/40">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-400" />
            {note}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between border-t border-white/[0.06] pt-4">
        <span className="text-[11px] text-white/25">
          Last updated {privacy.lastUpdated}
        </span>
        <Link
          href={`/apps/${slug}/privacy`}
          className="text-[11px] text-amber-400 transition-colors hover:text-amber-300"
        >
          Read full privacy policy →
        </Link>
      </div>
    </section>
  );
}
