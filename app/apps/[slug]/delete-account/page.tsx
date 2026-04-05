import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { apps } from "@/lib/apps";

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
    title: `Delete Account — ${app.name} | UE Software`,
    description: `How to delete your ${app.name} account and all associated data.`,
    robots: { index: true, follow: false },
  };
}

export default async function DeleteAccountPage({ params }: Props) {
  const { slug } = await params;
  const app = apps.find((a) => a.slug === slug);
  if (!app) notFound();

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
        <h1 className="text-2xl font-semibold tracking-tight text-white">
          Delete Account — {app.name}
        </h1>

        <p className="mt-6 text-sm leading-relaxed text-white/50">
          To delete your account and all associated data, open{" "}
          <span className="text-white/80">{app.name} → Settings → Delete Account</span>.
        </p>

        <p className="mt-4 text-sm leading-relaxed text-white/50">
          You can also email us at{" "}
          <a
            href="mailto:ue.softwaredev@gmail.com"
            className="text-amber-400 hover:underline"
          >
            ue.softwaredev@gmail.com
          </a>{" "}
          to request deletion.
        </p>
      </main>

      <footer className="border-t border-white/[0.06] px-4 py-6 sm:px-6">
        <div className="mx-auto max-w-2xl text-center text-xs text-white/20">
          © {new Date().getFullYear()} UE Software · ue.softwaredev@gmail.com
        </div>
      </footer>
    </div>
  );
}
