import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import SectionLabel from "@/components/ui/section-label";
import BlogGrid from "@/components/blog/blog-grid";

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-20 sm:px-6 md:px-8">
      <div className="mb-6 flex items-center justify-between">
        <SectionLabel>Latest posts</SectionLabel>
        <Link
          href="/blog"
          className="text-xs text-white/40 transition-colors hover:text-white/70"
        >
          View all →
        </Link>
      </div>
      <BlogGrid posts={posts} />
    </section>
  );
}
