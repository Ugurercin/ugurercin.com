import { getChangelogEntries } from "@/lib/changelog";
import SectionLabel from "@/components/ui/section-label";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Updates and release notes from UE Software.",
};

export default function ChangelogPage() {
  const entries = getChangelogEntries();

  return (
    <main className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <SectionLabel>Changelog</SectionLabel>
      <h1 className="text-3xl font-semibold text-white mt-2 mb-12">What's new</h1>

      <div className="flex flex-col gap-10">
        {entries.map((entry) => (
          <div key={entry.slug} className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
              <div className="w-px flex-1 bg-white/[0.06] mt-2" />
            </div>
            <div className="pb-10 flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-medium text-amber-400">{entry.appName}</span>
                <span className="text-xs text-white/25">v{entry.version}</span>
              </div>
              <div className="text-xs text-white/30 mb-4">
                {new Date(entry.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="prose prose-invert prose-sm max-w-none prose-li:text-white/50 prose-p:text-white/50">
                <MDXRemote source={entry.content} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
