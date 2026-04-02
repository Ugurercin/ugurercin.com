import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PrivacyFrontmatter {
  appName: string;
  lastUpdated: string;
  collectsData: boolean;
}

export interface PrivacyPolicy {
  frontmatter: PrivacyFrontmatter;
  content: string;
}

const PRIVACY_DIR = path.join(process.cwd(), "content/privacy");

export function getPrivacyPolicy(slug: string): PrivacyPolicy {
  const filePath = path.join(PRIVACY_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`No privacy policy found for slug: ${slug}`);
  }
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    frontmatter: data as PrivacyFrontmatter,
    content,
  };
}
