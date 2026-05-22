export interface Industry {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  cardDescription: string;
  highlights: string[];
  features: string[];
  image: string;
}

function industry(
  entry: Omit<Industry, "title" | "features"> & {
    name: string;
    highlights: string[];
    cardDescription: string;
  }
): Industry {
  return { ...entry, title: entry.name, features: entry.highlights };
}

export const industriesList: Industry[] = [
  industry({
    id: "construction",
    name: "Construction",
    subtitle: "Infrastructure & Commercial Projects",
    description:
      "Powering fast-track building projects, urban infrastructure, and residential developments across Dubai, Abu Dhabi, and the Northern Emirates with reliable generators and site equipment.",
    cardDescription:
      "Reliable equipment and power solutions to keep construction projects on schedule and on budget.",
    highlights: ["Tower cranes & site power", "Heavy-duty generators", "24/7 emergency dispatch"],
    image: "/images/excavator_cutout.png",
  }),
  industry({
    id: "events",
    name: "Events & Exhibitions",
    subtitle: "Concerts, Sports & Trade Shows",
    description:
      "Delivering silent generator grids and stable power distribution for national exhibitions, stadium events, and outdoor productions across the UAE.",
    cardDescription:
      "Powering events, exhibitions, and large gatherings with uninterrupted energy and support.",
    highlights: ["Super-silent enclosures", "Synchronized power", "Rapid setup & teardown"],
    image: "/images/new-equipment/Tower light night.png",
  }),
  industry({
    id: "oil-gas",
    name: "Oil & Gas",
    subtitle: "Upstream & Downstream",
    description:
      "Providing specialized equipment for offshore rigs, refineries, and remote desert operations where safety, compliance, and uptime are critical.",
    cardDescription:
      "Durable and high-performance equipment for demanding oil & gas operations.",
    highlights: ["Certified safe equipment", "High-pressure compressors", "Extreme environment ready"],
    image: "/images/lifting_cutout.png",
  }),
  industry({
    id: "industrial",
    name: "Industrial Operations",
    subtitle: "Plants & Heavy Industry",
    description:
      "Supporting factories, warehouses, and industrial facilities with high-capacity power, compressed air, and distribution solutions built for continuous operation.",
    cardDescription:
      "Supporting industrial facilities with efficient machinery for smooth day-to-day operations.",
    highlights: ["1250+ kVA capacity", "Load banks & testing", "ATS & distribution boards"],
    image: "/images/compaction_cutout.png",
  }),
  industry({
    id: "infrastructure",
    name: "Critical Infrastructure",
    subtitle: "Utilities & Public Sector",
    description:
      "Supporting utilities, telecom, healthcare, and government projects with dependable power systems and technical expertise you can trust.",
    cardDescription:
      "Ensuring continuous power and reliable equipment for essential infrastructure and public services.",
    highlights: ["Mission-critical uptime", "Expert engineering support", "Safety-first operations"],
    image: "/images/new-equipment/Distribution boards and change over switch board.png",
  }),
  industry({
    id: "manufacturing",
    name: "Manufacturing & Logistics",
    subtitle: "Production & Distribution",
    description:
      "Ensuring zero downtime for production lines, logistics hubs, and manufacturing plants during grid maintenance or peak demand periods.",
    cardDescription:
      "Enhancing productivity with dependable machinery solutions for manufacturing and logistics operations.",
    highlights: ["High-capacity generators", "Fuel management", "Maintenance & support"],
    image: "/images/dump_truck_cutout.png",
  }),
  industry({
    id: "hotels",
    name: "Hotels & Venues",
    subtitle: "Hospitality & Leisure",
    description:
      "Backup power and temporary solutions for hotels, resorts, and venue operations — discreet, reliable, and ready when guests cannot be interrupted.",
    cardDescription:
      "Providing power and equipment solutions for hotels, resorts, and hospitality venues.",
    highlights: ["Low-noise solutions", "Flexible rental terms", "UAE-wide coverage"],
    image: "/images/new-equipment/soundproof generator.png",
  }),
  industry({
    id: "entertainment",
    name: "Entertainment & Events",
    subtitle: "Festivals & Live Productions",
    description:
      "Delivering safe, reliable power for concerts, festivals, and large-scale outdoor entertainment across the UAE.",
    cardDescription:
      "Delivering safe and reliable power for concerts, festivals, and large-scale entertainment events.",
    highlights: ["Outdoor event power", "Silent generator grids", "Rapid deployment"],
    image: "/images/Powering every industry.png",
  }),
];

/** @deprecated Use `industriesList` */
export const industriesData = industriesList;
