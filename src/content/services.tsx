import type { ReactNode } from "react";
import {
  ArrowLeftRight,
  Cable,
  Cpu,
  Database,
  Flame,
  Lightbulb,
  Network,
  Sliders,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";

export type ServiceItem = {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  icon: ReactNode;
  contactLabel: string;
  category: "rental" | "repair";
};

export const servicesList: ServiceItem[] = [
  {
    id: "generators",
    title: "POWER GENERATION EQUIPMENT",
    subtitle: "(5 KVA - 1500 KVA+)",
    desc: "Diesel Generators ranging from 5 KVA to 1500 KVA+ suitable for temporary power, backup power, and continuous operations. Includes standalone and synchronized generator systems.",
    image: "/images/new-equipment/soundproof generator.png",
    icon: <Zap size={18} strokeWidth={2} />,
    contactLabel: "Power Generation Equipment (5 KVA - 1500 KVA+)",
    category: "rental",
  },
  {
    id: "compressors",
    title: "AIR COMPRESSORS",
    subtitle: "(150 CFM - 1200 CFM)",
    desc: "Industrial air compressors ranging from 150 CFM to 1200 CFM. Suitable for construction, drilling, sandblasting, and heavy-duty applications.",
    image: "/images/new-equipment/Air compressor (services).png",
    icon: <Wind size={18} strokeWidth={2} />,
    contactLabel: "Air Compressors (150 CFM - 1200 CFM)",
    category: "rental",
  },
  {
    id: "lights",
    title: "TOWER LIGHTS",
    subtitle: "(4 x 320W LED)",
    desc: "High illumination tower lights for enhanced visibility and safety at project sites.",
    image: "/images/new-equipment/Tower light night.png",
    icon: <Lightbulb size={18} strokeWidth={2} />,
    contactLabel: "Tower Lights (4 x 320W LED)",
    category: "rental",
  },
  {
    id: "welding",
    title: "WELDING MACHINES",
    subtitle: "(400 A - 600 A)",
    desc: "Heavy-duty welding machines from 400A to 600A for industrial fabrication, pipeline work, and on-site repair in demanding environments.",
    image: "/images/equipment/Welding Machines.jpg.jpeg",
    icon: <Flame size={18} strokeWidth={2} />,
    contactLabel: "Welding Machines (400 A - 600 A)",
    category: "rental",
  },
  {
    id: "tanks",
    title: "DIESEL TANKS",
    subtitle: "(1000 Ltr - 10000 Ltr)",
    desc: "Durable and compliant diesel tanks for safe fuel storage and supply.",
    image: "/images/new-equipment/diesel tank.png",
    icon: <Database size={18} strokeWidth={2} />,
    contactLabel: "Diesel Tanks (1000 Ltr - 10000 Ltr)",
    category: "rental",
  },
  {
    id: "distribution",
    title: "DISTRIBUTION BOARDS",
    subtitle: "(100 AMP - 1600 AMP)",
    desc: "Reliable and weatherproof distribution boards for safe, organized, and efficient power management across site networks.",
    image: "/images/new-equipment/Distribution boards and change over switch board.png",
    icon: <Sliders size={18} strokeWidth={2} />,
    contactLabel: "Distribution Boards (100 AMP - 1600 AMP)",
    category: "rental",
  },
  {
    id: "ats",
    title: "CHANGEOVER SWITCH & ATS",
    subtitle: "(100 AMP - 1600 AMP)",
    desc: "Automatic and manual transfer switches for seamless mains-to-generator changeover, protecting critical loads from interruptions.",
    image: "/images/new-equipment/ATS.png",
    icon: <ArrowLeftRight size={18} strokeWidth={2} />,
    contactLabel: "Changeover Switch & ATS (100 AMP - 1600 AMP)",
    category: "rental",
  },
  {
    id: "cables",
    title: "HIGH-INSULATION POWER CABLES",
    subtitle: "UP TO 5000 METER",
    desc: "High quality cables for power distribution and connections available up to 5000 meter.",
    image: "/images/new-equipment/cables.png",
    icon: <Cable size={18} strokeWidth={2} />,
    contactLabel: "Cables Up to 5000 Meter",
    category: "rental",
  },
  {
    id: "loadbank",
    title: "LOAD BANK",
    subtitle: "(100 KW - 2000 KW)",
    desc: "Advanced load bank solutions for testing and maintaining generator performance.",
    image: "/images/new-equipment/load bank (services).png",
    icon: <Cpu size={18} strokeWidth={2} />,
    contactLabel: "Load Bank (100 KW - 2000 KW)",
    category: "rental",
  },
  {
    id: "sync-panels",
    title: "INTELLIGENT SYNCHRONIZING PANELS",
    subtitle: "",
    desc: "Advanced synchronizing panels for paralleling multiple generators with intelligent load sharing and stable power delivery.",
    image: "/images/new-equipment/ISP.png",
    icon: <Network size={18} strokeWidth={2} />,
    contactLabel: "Intelligent Synchronizing Panels",
    category: "rental",
  },
  {
    id: "support",
    title: "MAINTENANCE & SUPPORT SERVICES",
    subtitle: "",
    desc: "Our dedicated Abu Dhabi workshop and field technician fleet are fully equipped to handle major and minor repairs, diagnostics, and preventive maintenance for all types of industrial equipment and generators, specializing in diesel generators, air compressors, tower lights, and welding machines. We ensure minimum downtime and peak performance for your projects.",
    image: "/images/new-equipment/Maintenance and support (2).png",
    icon: <Wrench size={18} strokeWidth={2} />,
    contactLabel: "Maintenance & Support Services",
    category: "repair",
  },
];
