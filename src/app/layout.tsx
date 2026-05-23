import type { Metadata } from "next";
import { Sansation } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import companyData from "@/content/company.json";

import themeData from "@/content/theme.json";

const sansation = Sansation({
  variable: "--font-sansation",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${companyData.name} - Power & Performance You Can Rely On`,
    template: `%s | ${companyData.shortName}`
  },
  description: companyData.mission,
  keywords: ["Machinery rental UAE", "Generator rental Dubai", "Construction equipment rental UAE", "Equipment hire Sharjah"],
  icons: {
    icon: "/images/justified-logo.jpeg",
    shortcut: "/images/justified-logo.jpeg",
    apple: "/images/justified-logo.jpeg",
  }
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
    <html lang="en" suppressHydrationWarning>
      <body style={themeVars} className={`${sansation.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
        
        {/* Floating WhatsApp Button */}
        <a 
          href={`https://wa.me/${companyData.contact.sales.replace(/[-+\s]/g, '').split(',')[0]}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
          aria-label="Contact on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </a>
      </body>
    </html>
  );
}
