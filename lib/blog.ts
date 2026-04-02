import fs from "fs";
import path from "path";
import type { BlogPost } from "@/types";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function parseFrontmatter(raw: string): {
  data: Record<string, string>;
  content: string;
} {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const data: Record<string, string> = {};
  match[1].split("\n").forEach((line) => {
    const [key, ...rest] = line.split(": ");
    if (key) data[key.trim()] = rest.join(": ").trim().replace(/^"|"$/g, "");
  });

  return { data, content: match[2] };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      const { data } = parseFrontmatter(raw);
      return {
        slug: file.replace(".mdx", ""),
        title: data.title ?? "",
        date: data.date ?? "",
        summary: data.summary ?? "",
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = parseFrontmatter(raw);

  return {
    slug,
    title: data.title ?? "",
    date: data.date ?? "",
    summary: data.summary ?? "",
    content,
  };
}
