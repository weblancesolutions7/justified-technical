import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Justified Technical",
  description: "Since 2018 UAE's Trusted Machinery & Power Solutions Partner",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
