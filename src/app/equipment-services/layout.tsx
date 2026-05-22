import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipment & Technical Services | Justified Technical",
  description: "Explore UAE's premier industrial equipment rental fleet, including high-capacity synchronized diesel generators, air compressors, and welding grids.",
};

export default function EquipmentServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
