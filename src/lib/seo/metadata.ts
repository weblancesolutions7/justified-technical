import type { Metadata } from "next";
import companyData from "@/content/company.json";
import { absoluteUrl, getSiteUrl } from "@/lib/site";

const { seo } = companyData;

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = seo.ogImage,
  noIndex = false,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = ogImage.startsWith("http") ? ogImage : absoluteUrl(ogImage);
  const allKeywords = [...new Set([...seo.keywords, ...keywords])];

  return {
    title,
    description,
    keywords: allKeywords,
    authors: [{ name: companyData.legalName.full, url: getSiteUrl() }],
    creator: companyData.legalName.full,
    publisher: companyData.legalName.full,
    category: "Industrial Equipment Rental",
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    alternates: {
      canonical: url,
      languages: {
        "en-AE": url,
        "x-default": url,
      },
    },
    openGraph: {
      type: "website",
      locale: seo.locale,
      url,
      siteName: companyData.name,
      title: `${title} | ${companyData.name}`,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${companyData.name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${companyData.name}`,
      description,
      images: [imageUrl],
    },
  };
}

export const homePageMetadata = createPageMetadata({
  title: seo.homeTitle,
  description: seo.homeDescription,
  path: "/",
  keywords: seo.homeKeywords,
  ogImage: seo.ogImage,
});

export const aboutPageMetadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn about Justified Technical Solutions — Abu Dhabi equipment rental and repair since 2013. Trusted generators, compressors, and 24/7 support across the UAE.",
  path: "/about",
  keywords: ["about Justified Technical", "equipment rental company Abu Dhabi"],
});

export const servicesPageMetadata = createPageMetadata({
  title: "Equipment & Services",
  description:
    "Rent soundproof diesel generators (5–1500 kVA), air compressors, tower lights, ATS panels, load banks, and distribution boards. UAE-wide delivery and 24/7 support.",
  path: "/equipment-services",
  keywords: [
    "generator rental Abu Dhabi",
    "diesel generator hire UAE",
    "air compressor rental",
    "tower light rental",
    "load bank testing UAE",
  ],
});

export const industriesPageMetadata = createPageMetadata({
  title: "Industries We Serve",
  description:
    "Power and equipment solutions for construction, oil & gas, events, manufacturing, hospitality, data centers, film production, and marine operations across the UAE.",
  path: "/industries",
  keywords: [
    "industrial power solutions UAE",
    "construction generator rental",
    "oil and gas equipment rental",
    "event power rental Abu Dhabi",
  ],
});

export const contactPageMetadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Request a quote for generator rental, equipment hire, or repair in Abu Dhabi and across the UAE. Call our sales team or send a message — response within 2 hours.",
  path: "/contact",
  keywords: ["contact generator rental Abu Dhabi", "equipment rental quote UAE"],
  ogImage: "/images/Contact ud.png",
});
