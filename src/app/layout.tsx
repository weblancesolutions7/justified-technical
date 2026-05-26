import type { Metadata, Viewport } from "next";
import { Sansation } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import companyData from "@/content/company.json";
import { globalJsonLdGraph } from "@/lib/seo";
import { absoluteUrl, getSiteUrl } from "@/lib/site";

import themeData from "@/content/theme.json";

const sansation = Sansation({
  variable: "--font-sansation",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  adjustFontFallback: false,
});

const { seo } = companyData;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#001C55",
};

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${seo.homeTitle} | ${companyData.name}`,
    template: `%s | ${companyData.name}`,
  },
  description: seo.homeDescription,
  keywords: seo.keywords,
  applicationName: companyData.name,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  authors: [{ name: companyData.legalName.full, url: getSiteUrl() }],
  creator: companyData.legalName.full,
  publisher: companyData.legalName.full,
  icons: {
    icon: seo.logo,
    shortcut: seo.logo,
    apple: seo.logo,
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: getSiteUrl(),
    languages: {
      "en-AE": getSiteUrl(),
      "x-default": getSiteUrl(),
    },
  },
  openGraph: {
    type: "website",
    locale: seo.locale,
    url: getSiteUrl(),
    siteName: companyData.name,
    title: `${seo.homeTitle} | ${companyData.name}`,
    description: seo.homeDescription,
    images: [
      {
        url: absoluteUrl(seo.ogImage),
        width: 1200,
        height: 630,
        alt: `${companyData.name} — industrial equipment rental UAE`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${seo.homeTitle} | ${companyData.name}`,
    description: seo.homeDescription,
    images: [absoluteUrl(seo.ogImage)],
  },
  robots: {
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
  verification: {
    // Add tokens when available: google: "...", yandex: "..."
  },
  other: {
    "geo.region": "AE-AZ",
    "geo.placename": "Abu Dhabi",
    "geo.position": "24.363;54.483",
    ICBM: "24.363, 54.483",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeVars = {
    "--color-brand": themeData.colors.brand,
    "--color-brand-hover": themeData.colors.brandHover,
    "--color-brand-dark": themeData.colors.brandDark,
    "--color-dark": themeData.colors.background,
    "--color-darker": themeData.colors.backgroundDarker,
    "--color-light": themeData.colors.foreground,
    "--color-gray-soft": themeData.colors.graySoft,
    "--background": themeData.colors.background,
    "--foreground": themeData.colors.foreground,
  } as React.CSSProperties;

  return (
    <html lang="en-AE" suppressHydrationWarning>
      <body style={themeVars} className={`${sansation.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <JsonLd data={globalJsonLdGraph()} />
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScroll>

        <a
          href={`https://wa.me/${companyData.contact.sales.replace(/[-+\s]/g, "").split(",")[0]}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
          aria-label="Contact on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
