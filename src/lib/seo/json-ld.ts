import companyData from "@/content/company.json";
import { servicesList } from "@/content/services";
import { absoluteUrl, getSiteUrl } from "@/lib/site";

const telInternational = companyData.contact.tel.startsWith("+")
  ? companyData.contact.tel
  : `+971${companyData.contact.tel.replace(/^0/, "")}`;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${getSiteUrl()}/#organization`,
    name: companyData.legalName.full,
    alternateName: [companyData.name, companyData.shortName],
    url: getSiteUrl(),
    logo: absoluteUrl(companyData.seo.logo),
    image: absoluteUrl(companyData.seo.ogImage),
    description: companyData.mission,
    foundingDate: String(companyData.established),
    email: companyData.contact.email,
    telephone: telInternational,
    sameAs: [companyData.contact.linkedin],
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    knowsAbout: [
      "Diesel generator rental",
      "Industrial equipment rental",
      "Power distribution",
      "Equipment repair UAE",
    ],
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${getSiteUrl()}/#localbusiness`,
    name: companyData.legalName.full,
    image: absoluteUrl(companyData.seo.ogImage),
    url: getSiteUrl(),
    telephone: telInternational,
    email: companyData.contact.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abu Dhabi",
      addressRegion: "Abu Dhabi",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.363,
      longitude: 54.483,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "17:00",
    },
    parentOrganization: { "@id": `${getSiteUrl()}/#organization` },
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${getSiteUrl()}/#website`,
    name: companyData.name,
    url: getSiteUrl(),
    description: companyData.seo.homeDescription,
    publisher: { "@id": `${getSiteUrl()}/#organization` },
    inLanguage: "en-AE",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${getSiteUrl()}/equipment-services?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function webPageJsonLd({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": `${getSiteUrl()}/#website` },
    about: { "@id": `${getSiteUrl()}/#organization` },
    inLanguage: "en-AE",
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function servicesItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Equipment & Technical Services",
    itemListElement: servicesList.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.desc,
        provider: { "@id": `${getSiteUrl()}/#organization` },
        areaServed: "United Arab Emirates",
        url: absoluteUrl(`/equipment-services#${service.id}`),
      },
    })),
  };
}

export function contactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": absoluteUrl("/contact#contactpage"),
    url: absoluteUrl("/contact"),
    name: "Contact Justified Technical",
    description: companyData.seo.contactDescription,
    mainEntity: { "@id": `${getSiteUrl()}/#localbusiness` },
  };
}

export function globalJsonLdGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationJsonLd(), localBusinessJsonLd(), webSiteJsonLd()],
  };
}
