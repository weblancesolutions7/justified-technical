import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { aboutPageMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = aboutPageMetadata;

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/about",
            title: "About Us",
            description: aboutPageMetadata.description as string,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
