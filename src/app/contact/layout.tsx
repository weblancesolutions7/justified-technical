import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Our Engineering Teams | Justified Technical",
  description: "Get in touch with Justified Technical's 24/7 industrial machinery depots and power coordinators. Request quotes for synchronized generator rentals, load tests, and emergency dispatch across the UAE.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
