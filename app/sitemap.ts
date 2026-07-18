import type { MetadataRoute } from "next";
import { blogPosts, solutionPages } from "@/lib/seo-content";

const baseUrl = "https://mikhmoai.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/solutions`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/pour-debutants`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/pour-techniciens`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/providers`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/downloads`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...solutionPages.map((page) => ({ url: `${baseUrl}/solutions/${page.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 })),
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...blogPosts.map((post) => ({ url: `${baseUrl}/blog/${post.slug}`, lastModified: new Date(post.publishedAt), changeFrequency: "monthly" as const, priority: 0.75 })),
    { url: `${baseUrl}/support`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/status`, lastModified: now, changeFrequency: "daily", priority: 0.4 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/account-deletion`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
