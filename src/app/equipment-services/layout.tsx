import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  servicesItemListJsonLd,
  servicesPageMetadata,
  webPageJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = servicesPageMetadata;

export default function EquipmentServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/equipment-services",
            title: "Equipment & Services",
            description: servicesPageMetadata.description as string,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/equipment-services" },
          ]),
          servicesItemListJsonLd(),
        ]}
      />
      {children}
    </>
  );
}
