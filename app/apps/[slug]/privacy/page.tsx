import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { apps } from "@/lib/apps";
import { getPrivacyPolicy } from "@/lib/privacy";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = apps.find((a) => a.slug === slug);
  if (!app) return {};
  return {
    title: `Privacy Policy — ${app.name}`,
    description: `Privacy policy for ${app.name} by UE Software.`,
    robots: { index: true, follow: false },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { slug } = await params;
  const app = apps.find((a) => a.slug === slug);
  if (!app) notFound();

  let policy;
  try {
    policy = getPrivacyPolicy(slug);
  } catch {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <header className="border-b border-white/[0.06] px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-2xl items-center justify-between">
          <Link href="/" className="text-sm font-semibold">
            <span className="text-white">UE </span>
            <span className="text-amber-400">Software</span>
          </Link>
          <Link
            href={`/apps/${slug}`}
            className="text-sm text-white/40 transition-colors hover:text-white/70"
          >
            ← Back to {app.name}
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        <div className="prose prose-invert prose-sm max-w-none prose-headings:font-medium prose-headings:text-white prose-p:leading-relaxed prose-p:text-white/50 prose-strong:text-white/80 prose-a:text-amber-400 prose-a:no-underline prose-li:text-white/50 prose-hr:border-white/10 hover:prose-a:underline">
          <MDXRemote source={policy.content} />
        </div>
      </main>

      <footer className="border-t border-white/[0.06] px-4 py-6 sm:px-6">
        <div className="mx-auto max-w-2xl text-center text-xs text-white/20">
          © {new Date().getFullYear()} UE Software · hello@uesoftware.com
        </div>
      </footer>
    </div>
  );
}
