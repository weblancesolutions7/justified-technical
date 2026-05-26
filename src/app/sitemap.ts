import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

type SitemapRoute = {
  path: string;
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
};

const routes: SitemapRoute[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.85, changeFrequency: "monthly" },
  { path: "/industries", priority: 0.9, changeFrequency: "monthly" },
  { path: "/equipment-services", priority: 0.95, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const lastModified = new Date();

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
