import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { apps, getAppBySlug } from "@/lib/apps";
import ScrollProgress from "@/components/ui/scroll-progress";
import SectionLabel from "@/components/ui/section-label";
import AppHero from "@/components/apps/app-hero";
import AppStatsBar from "@/components/apps/app-stats-bar";
import AppScreenshots from "@/components/apps/app-screenshots";
import AppDescription from "@/components/apps/app-description";
import AppFeatures from "@/components/apps/app-features";
import AppPrivacy from "@/components/apps/app-privacy";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) return {};
  return {
    title: app.name,
    description: app.tagline,
    openGraph: {
      title: app.name,
      description: app.tagline,
      images: [`/apps/${app.slug}/opengraph-image`],
    },
    twitter: {
      card: "summary_large_image",
      title: app.name,
      description: app.tagline,
    },
  };
}

export default async function AppDetailPage({ params }: Props) {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) notFound();

  return (
    <>
    <ScrollProgress />
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 md:px-8">
      <nav className="mb-8 flex items-center gap-1.5 text-xs text-white/30">
        <Link href="/apps" className="hover:text-white/60 transition-colors">
          Apps
        </Link>
        <span>›</span>
        <span className="text-white/60">{app.name}</span>
      </nav>

      <div className="flex flex-col gap-10">
        <AppHero app={app} />

        <AppStatsBar
          rating={app.rating}
          downloads={app.downloads}
          version={app.version}
          price={app.price}
        />

        <div>
          <SectionLabel>Screenshots</SectionLabel>
          <div className="mt-4">
            <AppScreenshots
              screenshots={app.screenshots}
              appName={app.name}
              icon={app.icon}
            />
          </div>
        </div>

        <div>
          <SectionLabel>About this app</SectionLabel>
          <div className="mt-3">
            <AppDescription description={app.description} />
          </div>
        </div>

        <div>
          <SectionLabel>Features</SectionLabel>
          <div className="mt-4">
            <AppFeatures features={app.features} />
          </div>
        </div>

        <AppPrivacy privacy={app.privacy} appName={app.name} slug={app.slug} />
      </div>
    </div>
    </>
  );
}
