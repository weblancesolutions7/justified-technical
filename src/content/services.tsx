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
};

export const servicesList: ServiceItem[] = [
  {
    id: "generators",
    title: "SOUND PROOF GENERATORS",
    subtitle: "(5 KVA - 1500 KVA)",
    desc: "Wide range of soundproof generators from 5 KVA to 1500 KVA to ensure uninterrupted power for any project.",
    image: "/images/new-equipment/soundproof generator.png",
    icon: <Zap size={18} strokeWidth={2} />,
    contactLabel: "Silent Generators",
  },
  {
    id: "cables",
    title: "High-Insulation Power Cables",
    subtitle: "UP TO 5000 METER",
    desc: "High quality cables for power distribution and connections available up to 5000 meter.",
    image: "/images/new-equipment/cables.png",
    icon: <Cable size={18} strokeWidth={2} />,
    contactLabel: "Cables",
  },
  {
    id: "distribution",
    title: "DISTRIBUTION BOARD &",
    subtitle: "CHANGE OVER SWITCH BOARD",
    desc: "Reliable distribution boards and change over switch boards for safe and efficient power management.",
    image: "/images/new-equipment/Distribution boards and change over switch board.png",
    icon: <Sliders size={18} strokeWidth={2} />,
    contactLabel: "Distribution Boards",
  },
  {
    id: "ats",
    title: "AUTOMATIC TRANSFER SWITCHES",
    subtitle: "(ATS)",
    desc: "Automatic transfer switches for seamless mains-to-generator changeover, protecting critical loads during power outages.",
    image: "/images/new-equipment/Distribution boards and change over switch board.png",
    icon: <ArrowLeftRight size={18} strokeWidth={2} />,
    contactLabel: "Automatic Transfer Switches (ATS)",
  },
  {
    id: "sync-panels",
    title: "INTELLIGENT SYNCHRONIZING PANELS",
    subtitle: "",
    desc: "Advanced synchronizing panels for paralleling multiple generators with intelligent load sharing and stable power delivery.",
    image: "/images/Smart & Efficient Operations.jpg.jpeg",
    icon: <Network size={18} strokeWidth={2} />,
    contactLabel: "Intelligent Synchronizing Panels",
  },
  {
    id: "welding",
    title: "INDUSTRIAL FIELD WELDING MACHINE",
    subtitle: "",
    desc: "Heavy-duty field welding machines for industrial fabrication, pipeline work, and on-site repair in demanding environments.",
    image: "/images/equipment/Welding Machines.jpg.jpeg",
    icon: <Flame size={18} strokeWidth={2} />,
    contactLabel: "Industrial Field Welding Machine",
  },
  {
    id: "compressors",
    title: "AIR COMPRESSORS",
    subtitle: "(150 CFM - 950 CFM)",
    desc: "High performance air compressors ranging from 150 CFM to 950 CFM for industrial applications.",
    image: "/images/new-equipment/Air compressor (services).png",
    icon: <Wind size={18} strokeWidth={2} />,
    contactLabel: "Air Compressors",
  },
  {
    id: "lights",
    title: "TOWER LIGHTS",
    subtitle: "",
    desc: "High illumination tower lights for enhanced visibility and safety at project sites.",
    image: "/images/new-equipment/Tower light night.png",
    icon: <Lightbulb size={18} strokeWidth={2} />,
    contactLabel: "Tower Lights",
  },
  {
    id: "tanks",
    title: "Auxiliary Industrial Diesel Fuel Tanks",
    subtitle: "",
    desc: "Durable and compliant diesel tanks for safe fuel storage and supply.",
    image: "/images/new-equipment/diesel tank.png",
    icon: <Database size={18} strokeWidth={2} />,
    contactLabel: "Auxiliary Industrial Diesel Fuel Tanks",
  },
  {
    id: "loadbank",
    title: "LOAD BANK",
    subtitle: "",
    desc: "Advanced load bank solutions for testing and maintaining generator performance.",
    image: "/images/new-equipment/load bank (services).png",
    icon: <Cpu size={18} strokeWidth={2} />,
    contactLabel: "Load Bank",
  },
  {
    id: "support",
    title: "MAINTENANCE & SUPPORT",
    subtitle: "",
    desc: "Expert maintenance and 24/7 support to ensure maximum uptime and reliable operation.",
    image: "/images/new-equipment/Maintenance and support (2).png",
    icon: <Wrench size={18} strokeWidth={2} />,
    contactLabel: "Maintenance & Support",
  },
];
