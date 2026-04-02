import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ChangelogEntry {
  date: string;
  appName: string;
  version: string;
  content: string;
  slug: string;
}

const DIR = path.join(process.cwd(), "content/changelog");

export function getChangelogEntries(): ChangelogEntry[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(DIR, f), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug: f.replace(".mdx", ""),
        date: data.date,
        appName: data.appName,
        version: data.version,
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
