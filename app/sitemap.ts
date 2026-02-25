import { MetadataRoute } from "next";
import projects from "@/data/projects.json";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // ✅ FIXED: Using the actual live domain pardis.in
  const baseUrl = "https://pardis.in";

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/flats-in-chembur`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/flats-in-bandra`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    },
  ];

  // ✅ FIXED: Only include completed and ongoing projects in sitemap.
  // Proposed projects have no real content yet — including them wastes Google's crawl budget
  // and can hurt your rankings with thin/duplicate content pages.
  const projectPages = projects
    .filter((project) =>
      project.status === "completed" || project.status === "ongoing"
    )
    .map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      // Give ongoing projects slightly higher priority as they have active inventory
      priority: project.status === "ongoing" ? 0.9 : 0.8,
    }));

  return [...staticPages, ...projectPages];
}
