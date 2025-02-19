import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://khimio.uz";

  const pages = [
    { path: "/", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/media", priority: 0.7 },
    { path: "/imio2023", priority: 0.5 },
    { path: "/imio2024", priority: 0.5 },
    { path: "/results", priority: 0.6 },
    { path: "/uzbekistan", priority: 0.7 },
    { path: "/regulations", priority: 0.8 },
    { path: "/programme", priority: 0.8 },
    { path: "/press", priority: 0.7 },
    { path: "/organization", priority: 0.7 },
    { path: "/problems", priority: 0.6 },
    { path: "/partnership", priority: 0.7 },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date().toISOString(), 
    priority: page.priority,
  }));
}
