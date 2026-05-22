import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | Justified Technical",
  description:
    "Power solutions for construction, oil & gas, events, manufacturing, hospitality, and critical infrastructure across the UAE.",
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
