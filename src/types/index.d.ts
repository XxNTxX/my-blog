import type { MarkdownInstance } from "astro";

interface Frontmatter {
  title: string,
  pubDate: string,
  description: string,
  tags: string[],
}

export type Post = MarkdownInstance<Frontmatter>;