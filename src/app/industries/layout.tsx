import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, industriesPageMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = industriesPageMetadata;

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/industries",
            title: "Industries We Serve",
            description: industriesPageMetadata.description as string,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
