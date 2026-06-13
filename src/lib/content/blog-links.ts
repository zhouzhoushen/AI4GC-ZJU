import type { BlogResourceKind, BlogResourceLink } from "@/types/lab";

/** Default button labels per resource kind (overridable via the post's `label`). */
export const BLOG_RESOURCE_LABELS: Record<BlogResourceKind, string> = {
  paper: "Paper",
  code: "Code",
  xiaohongshu: "小红书",
  wechat: "微信公众号",
  website: "Website",
};

type RawBlogLink = {
  kind: BlogResourceKind;
  href: string;
  label?: string;
};

/** Trims hrefs and fills in default labels so the UI always has a label. */
export function resolveBlogResourceLinks(links: RawBlogLink[] | undefined): BlogResourceLink[] {
  if (!links) {
    return [];
  }

  return links
    .map((link) => ({
      kind: link.kind,
      href: link.href.trim(),
      label: link.label?.trim() || BLOG_RESOURCE_LABELS[link.kind],
    }))
    .filter((link) => link.href.length > 0);
}
