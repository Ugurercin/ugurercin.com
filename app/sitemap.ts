import { MetadataRoute } from "next";
import { apps } from "@/lib/apps";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllPosts();

  const appRoutes = apps.flatMap((app) => [
    {
      url: `${SITE_URL}/apps/${app.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/apps/${app.slug}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
  ]);

  const blogRoutes = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/apps`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/changelog`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    ...appRoutes,
    ...blogRoutes,
  ];
}
