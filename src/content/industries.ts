export interface Industry {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
}

export const industriesData: Industry[] = [
  {
    id: "construction",
    title: "Construction",
    subtitle: "Infrastructure & Commercial",
    description: "Powering fast-track building projects, urban infrastructure, and residential developments across Dubai, Abu Dhabi, and the Northern Emirates.",
    features: ["Heavy Earthmoving Equipment", "Continuous Site Power", "24/7 Emergency Support"],
    image: "/images/excavator_cutout.png"
  },
  {
    id: "oil-gas",
    title: "Oil & Gas",
    subtitle: "Upstream & Downstream",
    description: "Providing specialized high-pressure air compressors and certified equipment for extreme offshore rigs and remote desert oil fields.",
    features: ["Certified Safe Equipment", "High-Pressure Compressors", "Extreme Temperature Tolerant"],
    image: "/images/lifting_cutout.png"
  },
  {
    id: "marine",
    title: "Marine & Ports",
    subtitle: "Dredging & Port Operations",
    description: "Delivering marine-grade dredging machinery and temporary power for vessel maintenance, dry docks, and deep-water reclamation.",
    features: ["Corrosion-Resistant Units", "High-Capacity Submersible Pumps", "Dredging & Excavation Fleet"],
    image: "/images/dredging_cutout.png"
  },
  {
    id: "events",
    title: "Events",
    subtitle: "Concerts & Exhibitions",
    description: "Supplying silent generator grids and stable power distribution for major national exhibitions, sports events, and stadium productions.",
    features: ["Super-Silent Enclosures", "Seamless Synchronization", "Compact Footprint Layouts"],
    image: "/images/dump_truck_cutout.png"
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    subtitle: "Factory Plants",
    description: "Ensuring zero downtime for industrial production lines and manufacturing plants during shutdowns or power grid maintenance.",
    features: ["High-Capacity Generators (1250kVA+)", "ATS Integration & Power Panels", "Fuel Management Services"],
    image: "/images/compaction_cutout.png"
  }
];
