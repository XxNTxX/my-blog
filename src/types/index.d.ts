import type { MarkdownInstance } from "astro";

export interface Frontmatter {
  title: string,
  pubDate: string,
  description: string,
  tags: string[],
}

export type Post = MarkdownInstance<Frontmatter>;