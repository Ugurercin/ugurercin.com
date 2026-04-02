import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import SectionLabel from "@/components/ui/section-label";
import BlogGrid from "@/components/blog/blog-grid";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts, updates, and stories from UE Software.",
};
//Te
export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 md:px-8">
      <div className="mb-8 flex flex-col gap-2">
        <SectionLabel>Blog</SectionLabel>
        <h1 className="text-2xl font-semibold tracking-tight text-white">
          Thoughts & updates
        </h1>
        <p className="text-sm text-white/50">
          Stories and updates from the studio.
        </p>
      </div>

      {posts.length > 0 ? (
        <BlogGrid posts={posts} />
      ) : (
        <p className="text-sm text-white/30">No posts yet. Check back soon.</p>
      )}
    </div>
  );
}
