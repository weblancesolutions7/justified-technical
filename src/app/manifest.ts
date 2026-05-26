import type { MetadataRoute } from "next";
import companyData from "@/content/company.json";
import { absoluteUrl } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: companyData.legalName.full,
    short_name: companyData.shortName,
    description: companyData.seo.homeDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#001C55",
    theme_color: "#001C55",
    lang: "en-AE",
    orientation: "portrait-primary",
    icons: [
      {
        src: companyData.seo.logo,
        sizes: "any",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
    categories: ["business", "utilities"],
    scope: absoluteUrl("/"),
    id: absoluteUrl("/"),
  };
}
