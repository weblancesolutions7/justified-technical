import companyData from "@/content/company.json";

/** Canonical site origin (no trailing slash). Override with NEXT_PUBLIC_SITE_URL in production. */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }
  return companyData.seo.siteUrl.replace(/\/$/, "");
}

export function absoluteUrl(path: string = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalized}`;
}
