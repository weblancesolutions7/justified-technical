import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { homePageMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = homePageMetadata;

export default function Home() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ path: "/", title: "Home", description: homePageMetadata.description as string })} />
      <HomePage />
    </>
  );
}
