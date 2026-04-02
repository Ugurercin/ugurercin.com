import Link from "next/link";

interface BlogPostLayoutProps {
  children: React.ReactNode;
  title: string;
  date: string;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostLayout({
  children,
  title,
  date,
}: BlogPostLayoutProps) {
  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-16 sm:px-6 md:px-8">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-1 text-xs text-white/40 transition-colors hover:text-white/70"
      >
        ← Back to blog
      </Link>

      <article>
        <header className="mb-8">
          <p className="mb-2 text-xs text-white/30">{formatDate(date)}</p>
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            {title}
          </h1>
        </header>
        <div className="prose prose-invert prose-sm max-w-none prose-headings:text-white prose-p:text-white/60 prose-a:text-amber-400 prose-strong:text-white">
          {children}
        </div>
      </article>
    </main>
  );
}
