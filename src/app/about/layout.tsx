import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Justified Technical",
  description: "Since 2013, Abu Dhabi’s trusted partner for equipment rental and repair across the UAE.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
