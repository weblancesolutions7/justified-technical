import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, contactPageJsonLd, contactPageMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = contactPageMetadata;

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          contactPageJsonLd(),
          webPageJsonLd({
            path: "/contact",
            title: "Contact Us",
            description: contactPageMetadata.description as string,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
