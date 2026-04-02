import Link from "next/link";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="group flex flex-col gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-colors hover:border-white/[0.15] hover:bg-white/[0.04]">
        <p className="text-xs text-white/30">{formatDate(post.date)}</p>
        <h3 className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
          {post.title}
        </h3>
        <p className="text-xs leading-relaxed text-white/50 line-clamp-2">
          {post.summary}
        </p>
      </div>
    </Link>
  );
}
