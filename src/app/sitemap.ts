import type { MetadataRoute } from "next";
import { getAllDocs } from "@/lib/docs";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = "https://prohorcloud.com";
  const locales = ["en", "bn"];
  const docRoutes: MetadataRoute.Sitemap = [];
  const routes: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    routes.push({
      url: `${domain}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    });
    routes.push({
      url: `${domain}/${locale}/docs`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    });

    const docs = getAllDocs(locale);
    for (const doc of docs) {
      docRoutes.push({
        url: `${domain}/${locale}/docs/${doc.slug.join("/")}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.6,
      });
    }
  }

  return [...routes, ...docRoutes];
}
