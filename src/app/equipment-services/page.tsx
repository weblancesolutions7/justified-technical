"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Settings,
  ArrowRight,
  MapPin,
  ChevronRight,
  Gauge,
  Wind,
  UtilityPole,
  Database,
  Anchor,
  HardHat,
  Droplets,
  Wrench,
  Clock,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Sliders
} from "lucide-react";
import companyData from "@/content/company.json";

export default function EquipmentServicesPage() {
  // State for Estimator Calculator
  const [estIndustry, setEstIndustry] = useState("construction");
  const [estPower, setEstPower] = useState(250); // kVA

  // State for interactive Fleet category tabs
  const [activeCategory, setActiveCategory] = useState("generators");

  // State for Hotspot hovered item
  const [hoveredHotspot, setHoveredHotspot] = useState<number | null>(null);

  const industries = [
    { id: "construction", name: "Construction", icon: <HardHat size={18} /> },
    { id: "oilgas", name: "Oil & Gas", icon: <Droplets size={18} /> },
    { id: "datacenters", name: "Data Centers", icon: <Database size={18} /> },
    { id: "events", name: "Events & Concerts", icon: <Zap size={18} /> },
    { id: "manufacturing", name: "Manufacturing", icon: <Settings size={18} /> }
  ];

  // Dynamic calculations for the Power Estimator
  const getEstimationDetails = () => {
    let generatorRecommendation = "";
    let tankSize = "";
    let cableSpec = "";
    let panelSpec = "";

    if (estPower <= 150) {
      generatorRecommendation = "1x 150 kVA Soundproof Cummins Diesel Generator";
      tankSize = "250 Gallon External Bunded Fuel Tank";
      cableSpec = "35mm² 4-Core Armored Copper Cables";
      panelSpec = "250A Automatic Transfer Switch (ATS) Panel";
    } else if (estPower <= 400) {
      generatorRecommendation = "1x 400 kVA Soundproof Perkins Diesel Generator";
      tankSize = "500 Gallon External Bunded Fuel Tank";
      cableSpec = "95mm² 4-Core Armored Copper Cables";
      panelSpec = "630A Automatic Transfer Switch (ATS) Panel";
    } else if (estPower <= 800) {
      generatorRecommendation = "1x 800 kVA High-Efficiency Cummins Power Unit";
      tankSize = "1,000 Gallon Double-Walled External Tank";
      cableSpec = "185mm² Dual-Run Armored Cables";
      panelSpec = "1250A Integrated ATS Changeover Panel";
    } else {
      // Synchronized grid system for heavy power requirements
      const units = Math.ceil(estPower / 500);
      generatorRecommendation = `${units}x 500 kVA Synchronized Diesel Generators (Grid Parallel Array)`;
      tankSize = `${units * 500} Gallon Parallel Fuel Supply Arrays`;
      cableSpec = "240mm² Multi-Run Flexible Armored Cabling Blocks";
      panelSpec = "1600A Deif Integrated Generator Synchronization Panel";
    }

    return {
      generators: generatorRecommendation,
      fuel: tankSize,
      cabling: cableSpec,
      switchgear: panelSpec
    };
  };

  const estimation = getEstimationDetails();

  const categories = [
    { id: "generators", title: "Diesel Generators", range: "20–1250 kVA" },
    { id: "compressors", title: "Air Compressors", range: "150–1200 CFM" },
    { id: "lights", title: "Mobile Light Towers", range: "Diesel & Solar" },
    { id: "welding", title: "Welding Generators", range: "400A – 600A" },
    { id: "loadbanks", title: "Load Banks & Cables", range: "Testing Systems" }
  ];

  const fleetData: Record<string, {
    title: string;
    range: string;
    desc: string;
    image: string;
    specs: { label: string; val: string }[];
    hotspots: { x: string; y: string; text: string }[];
  }> = {
    generators: {
      title: "High-Capacity Diesel Generators",
      range: "20 kVA to 1250+ kVA",
      desc: "Our generator fleet is optimized for extreme continuous deployment on UAE industrial sites. Built within premium soundproof enclosures, these units are synchronization-ready and feature integrated external fuel connections.",
      image: "/images/Advanced Equipment & Power Solutions.jpg.jpeg",
      specs: [
        { label: "Prime Output", val: "20 kVA – 1250 kVA" },
        { label: "Control System", val: "DeepSea / Deif Intelligent Controllers" },
        { label: "Sound Rating", val: "68 dBA @ 7m (Super Silent)" },
        { label: "Fuel System", val: "Dual-valved external tank links" },
        { label: "Mobility", val: "Skid-mounted / Trailer configurations" }
      ],
      hotspots: [
        { x: "25%", y: "30%", text: "Extra large tropical cooling radiators designed specifically for extreme 50°C UAE summer heat cycles." },
        { x: "65%", y: "45%", text: "DeepSea digital synchronization control blocks for load sharing and smart safety shut-downs." },
        { x: "45%", y: "75%", text: "Integrated heavy-duty containment bases matching environmental protection mandates." }
      ]
    },
    compressors: {
      title: "High-Pressure Air Compressors",
      range: "150 CFM to 1200 CFM",
      desc: "Industrial-grade rotary screw air compressors engineered to support sandblasting, construction, and oil field pipelines. Highly responsive diesel-driven systems built for high-demand, rugged operational grids.",
      image: "/images/equipment/Air Compressor.jpg.jpeg",
      specs: [
        { label: "Delivery Volume", val: "150 CFM – 1200 CFM" },
        { label: "Pressure Range", val: "7 bar – 25 bar (100–360 psi)" },
        { label: "Engine Type", val: "Caterpillar / Cummins Tier 3 Diesel" },
        { label: "Outlets", val: "Multi-manifold quick couplers" },
        { label: "Mounting", val: "Heavy-duty towing wheels with handbrakes" }
      ],
      hotspots: [
        { x: "35%", y: "35%", text: "Premium rotary screw air-end units designed for continuous operational cycles under full loads." },
        { x: "55%", y: "75%", text: "Enclosed environmental collection trays preventing direct fluid leakage onto job sites." }
      ]
    },
    lights: {
      title: "Mobile Lighting Towers",
      range: "Diesel & Solar Solutions",
      desc: "Heavy-duty portable light towers for round-the-clock infrastructure projects. Available in super-silent diesel designs and advanced off-grid solar-powered arrays to accommodate zero-emission protocols.",
      image: "/images/equipment/Tower Lights.jpg.jpeg",
      specs: [
        { label: "Luminosity", val: "4x 350W LED arrays (Over 150,000 lumens)" },
        { label: "Mast Height", val: "Up to 9 meters (360° pneumatic rotation)" },
        { label: "Run Time", val: "Up to 70 hours (Diesel) / Autonomous (Solar)" },
        { label: "Noise Rating", val: "Zero noise (Solar) / 60 dBA @ 7m (Silent Diesel)" },
        { label: "Wind Stability", val: "Certified stability up to 80 km/h winds" }
      ],
      hotspots: [
        { x: "45%", y: "20%", text: "Ultra-bright LED panel modules providing immediate daylight visibility with minimal energy draw." },
        { x: "70%", y: "50%", text: "Compact solar panel arrays that automatically unfold for clean charging." }
      ]
    },
    welding: {
      title: "Multi-Operator Welding Units",
      range: "400A to 600A Outputs",
      desc: "Heavy-duty diesel-driven welding generators engineered for extreme structural fabrication, marine works, and pipeline execution. Capable of powering multiple tools simultaneously through integrated auxiliary outputs.",
      image: "/images/equipment/Welding Machines.jpg.jpeg",
      specs: [
        { label: "Amperage Output", val: "400A – 600A @ 60% Duty Cycle" },
        { label: "Processes", val: "Stick, TIG, MIG, Flux-Cored, Arc Gouging" },
        { label: "Auxiliary Power", val: "Up to 15 kW of three-phase 415V power" },
        { label: "Engine Type", val: "Kubota / Perkins Liquid-Cooled Diesel" },
        { label: "Rough Terrain", val: "Integrated wheel kits with steering bars" }
      ],
      hotspots: [
        { x: "30%", y: "45%", text: "Multi-operator connection terminals allowing multiple welders to operate from a single diesel unit." },
        { x: "65%", y: "70%", text: "Heavy duty copper-wound auxiliary alternator providing clean local tool power." }
      ]
    },
    loadbanks: {
      title: "Load Banks & Cabling Systems",
      range: "Resistive & Reactive Testing",
      desc: "Comprehensive technical validation equipment. High-capacity load banks for proving critical backup systems, ATS automated switchboards, and hundreds of meters of temporary armored cabling for reliable site routing.",
      image: "/images/equipment/6.jpg.jpeg",
      specs: [
        { label: "Test Capacity", val: "100 kW – 3000 kW units" },
        { label: "ATS Amperage", val: "100A – 1600A Changeover Panels" },
        { label: "Cable Core", val: "16mm² – 240mm² armored copper flex" },
        { label: "Controls", val: "Handheld digital load stepping monitors" },
        { label: "Safety Pack", val: "Over-temp indicators and automatic duct fans" }
      ],
      hotspots: [
        { x: "50%", y: "30%", text: "Force-draft vertical exhaust fans cooling heavy-duty resistive heating elements." },
        { x: "35%", y: "75%", text: "Heavy copper busbar connection matrices for secure armored locking cabling clips." }
      ]
    }
  };

  return (
    <div className="bg-[#05060A] text-white min-h-screen font-sans antialiased overflow-x-hidden selection:bg-[#3B3C89] selection:text-white">
      
      {/* ═══════════════════════════════════════════════════════
          1. CINEMATIC TECHNICAL HERO & LIVE READY STATE
      ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-24 overflow-hidden border-b border-white/[0.04]">
        {/* Background grids and elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[#3B3C89] opacity-[0.06] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-[#9FA0CD] opacity-[0.03] rounded-full blur-[160px] pointer-events-none" />

        {/* Ambient low-opacity image background */}
        <div className="absolute inset-0 opacity-[0.14] pointer-events-none">
          <Image
            src="/images/Industries We Support (Construction).jpg.jpeg"
            alt="Technical assets blueprint"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter grayscale brightness-50"
          />
        </div>

        <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-[#3B3C89]/10 border border-[#3B3C89]/25 rounded-full px-5 py-2 mb-8 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#9FA0CD]">
              Continuous Grid Integrity
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[clamp(2.2rem,7.5vw,5.5rem)] font-black leading-[0.92] tracking-tighter uppercase mb-10 max-w-6xl mx-auto"
          >
            Engineered fleet<span className="text-[#3B3C89]">.</span>
            <br />
            Synchronized <span className="text-[#9FA0CD] bg-clip-text text-transparent bg-gradient-to-r from-[#9FA0CD] via-white to-[#3B3C89]">power</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/45 text-sm md:text-lg font-medium max-w-2xl mx-auto leading-relaxed mb-16"
          >
            From extreme-output diesel generators to heavy industrial air compressors and structural welding arrays—our fleet is engineered to secure absolute continuity across the UAE.
          </motion.p>

          {/* Floating live readiness board */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-[#111424]/40 border border-white/[0.06] rounded-3xl p-6 md:p-8 max-w-5xl mx-auto backdrop-blur-xl shadow-2xl text-left relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.01] rounded-bl-[40px] pointer-events-none" />
            
            {[
              { label: "Fleet Availability", val: "98.4%", desc: "Ready for immediate delivery" },
              { label: "Synchronized Output", val: "42,000+ kVA", desc: "Active network capacity" },
              { label: "Mobilization Speed", val: "120 Mins", desc: "Average emergency dispatch" },
              { label: "UAE Hubs Coverage", val: "100%", desc: "Abu Dhabi, Dubai, Northern Emirates" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-white/30 text-[9px] font-black uppercase tracking-wider mb-2">
                  {item.label}
                </span>
                <span className="text-xl md:text-3xl font-sans font-black text-white leading-none mb-1">
                  {item.val}
                </span>
                <span className="text-[8px] font-semibold text-white/40">
                  {item.desc}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. INTERACTIVE SITE POWER ESTIMATOR
      ═══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#05060A] relative overflow-hidden border-b border-white/[0.04]">
        <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#9FA0CD] font-black uppercase tracking-[0.45em] text-[10px] md:text-xs block mb-4">
              Operational Estimation Tools
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
              Interactive site load <span className="text-[#9FA0CD]">calculator</span>
            </h2>
            <p className="text-white/40 text-xs md:text-sm font-semibold max-w-md mx-auto leading-relaxed mt-4">
              Select your sector and slide your power parameters to view custom engineering equipment and cabling configuration recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Control Column */}
            <div className="lg:col-span-5 bg-[#111424]/40 border border-white/[0.06] rounded-3xl p-8 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-[#9FA0CD] text-[9px] font-black uppercase tracking-widest block mb-4">
                  Step 1: Select Application
                </span>
                <div className="flex flex-col gap-2 mb-8">
                  {industries.map((ind) => (
                    <button
                      key={ind.id}
                      onClick={() => setEstIndustry(ind.id)}
                      className={`w-full py-3.5 px-5 rounded-xl border flex items-center justify-between text-left transition-all duration-300 cursor-pointer ${
                        estIndustry === ind.id
                          ? "bg-[#3B3C89] border-transparent text-white shadow-lg shadow-[#3B3C89]/20"
                          : "bg-[#05060A]/40 border-white/[0.03] text-white/50 hover:text-white/80 hover:border-white/[0.08]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {ind.icon}
                        <span className="font-black text-xs md:text-sm uppercase tracking-tight">{ind.name}</span>
                      </div>
                      <ChevronRight size={14} className={estIndustry === ind.id ? "translate-x-1" : "opacity-30"} />
                    </button>
                  ))}
                </div>

                <span className="text-[#9FA0CD] text-[9px] font-black uppercase tracking-widest block mb-4">
                  Step 2: Define Output Capacity
                </span>
                
                {/* Custom Styled Slider */}
                <div className="mb-4">
                  <div className="flex justify-between items-baseline mb-3">
                    <span className="text-white/30 text-[9px] font-bold uppercase">Estimated Peak Draw</span>
                    <span className="text-2xl font-sans font-black text-white italic">
                      {estPower} <span className="text-xs not-italic text-white/40">kVA</span>
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="1500"
                    step="50"
                    value={estPower}
                    onChange={(e) => setEstPower(Number(e.target.value))}
                    className="w-full h-2 bg-[#05060A]/60 rounded-lg appearance-none cursor-pointer accent-[#3B3C89]"
                  />
                  <div className="flex justify-between text-[8px] font-black text-white/20 mt-2 uppercase tracking-widest">
                    <span>50 kVA</span>
                    <span>750 kVA</span>
                    <span>1500 kVA+</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.03] text-[8px] font-black uppercase tracking-widest text-[#9FA0CD]/50 flex justify-between">
                <span>Integrated Engineering Estimator</span>
                <span>Version 1.4</span>
              </div>
            </div>

            {/* Right Output Recommendation Column */}
            <div className="lg:col-span-7">
              <div className="bg-gradient-to-br from-[#111424]/60 to-[#111424]/20 border border-white/[0.06] rounded-3xl p-8 md:p-10 h-full flex flex-col justify-between shadow-2xl relative overflow-hidden min-h-[440px]">
                {/* Floating flare grid */}
                <div className="absolute top-0 right-0 w-[260px] h-[260px] bg-[#3B3C89] opacity-[0.03] rounded-full blur-[80px]" />
                
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="w-1.5 h-1.5 bg-[#9FA0CD] rounded-full" />
                    <span className="text-[#9FA0CD] text-[9px] font-black uppercase tracking-widest">
                      Engineering Recommendation Output
                    </span>
                  </div>

                  <h3 className="text-white font-black text-xl md:text-2xl uppercase tracking-tight leading-tight mb-8">
                    Suggested Package <br />
                    for <span className="text-[#9FA0CD]">{industries.find(i => i.id === estIndustry)?.name} ({estPower} kVA)</span>
                  </h3>

                  <div className="space-y-4">
                    {[
                      { title: "Generator Configuration", val: estimation.generators, icon: <Sliders size={15} /> },
                      { title: "External Fuel Storage", val: estimation.fuel, icon: <Droplets size={15} /> },
                      { title: "Cabling Blocks Spec", val: estimation.cabling, icon: <UtilityPole size={15} /> },
                      { title: "ATS / Control Gear Switch", val: estimation.switchgear, icon: <Cpu size={15} /> }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex gap-4 p-4 rounded-xl bg-[#05060A]/50 border border-white/[0.04] items-center hover:border-white/[0.08] transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#3B3C89]/15 border border-[#3B3C89]/30 text-[#9FA0CD] flex items-center justify-center flex-shrink-0">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <span className="text-white/30 text-[8px] font-black uppercase tracking-widest block mb-1">
                            {item.title}
                          </span>
                          <span className="text-white font-bold text-xs md:text-sm">
                            {item.val}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.03] flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <span className="text-[8px] font-black uppercase tracking-widest text-white/20">
                    Calculations match extreme 50°C summer safety margins
                  </span>
                  <Link
                    href={`/contact?kva=${estPower}&sector=${estIndustry}`}
                    className="inline-flex items-center gap-2 bg-[#3B3C89] hover:bg-[#5253B3] text-white font-black uppercase tracking-widest text-[9px] py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-[#3B3C89]/15 group"
                  >
                    Request Pricing <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3. DYNAMIC FLEET SPEC CENTER & HOTSPOTS
      ═══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#0A0C14] relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
            <div className="text-left">
              <span className="text-[#9FA0CD] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs block mb-4">
                Equipment Portfolio
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
                Our active <span className="text-[#9FA0CD]">rental</span> fleet
              </h2>
            </div>
            
            {/* Horizontal tab filter menu */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setHoveredHotspot(null);
                  }}
                  className={`py-3 px-5 rounded-xl border font-black text-[10px] uppercase tracking-widest transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? "bg-[#3B3C89] border-transparent text-white shadow-lg shadow-[#3B3C89]/15"
                      : "bg-[#111424]/40 border-white/[0.04] text-white/50 hover:text-white/80 hover:border-white/[0.08]"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Image with hotspots */}
            <div className="lg:col-span-6 relative h-[420px] lg:h-[520px] w-full rounded-3xl overflow-hidden border border-white/[0.06] shadow-2xl group/img">
              <Image
                src={fleetData[activeCategory].image}
                alt={fleetData[activeCategory].title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover filter brightness-[0.7] group-hover/img:scale-[1.02] transition-transform duration-[8000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C14] via-[#0A0C14]/30 to-transparent" />

              {/* Hotspot Pins */}
              {fleetData[activeCategory].hotspots.map((hs, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{ top: hs.y, left: hs.x }}
                  onMouseEnter={() => setHoveredHotspot(i)}
                  onMouseLeave={() => setHoveredHotspot(null)}
                >
                  <button className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#3B3C89] text-white cursor-pointer select-none">
                    <span className="absolute inset-0 rounded-full bg-[#3B3C89] opacity-40 animate-ping" />
                    <span className="relative font-sans text-xs font-black">?</span>
                  </button>

                  <AnimatePresence>
                    {hoveredHotspot === i && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 bg-[#111424] border border-white/10 p-4 rounded-xl shadow-2xl backdrop-blur-md z-50 text-left"
                      >
                        <span className="text-[#9FA0CD] text-[8px] font-black uppercase tracking-widest block mb-1">
                          Technical Design Detail
                        </span>
                        <p className="text-white text-xs font-semibold leading-relaxed">
                          {hs.text}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="absolute bottom-6 left-6 bg-[#0A0C14]/80 border border-white/10 rounded-full px-4 py-1 text-[9px] font-black uppercase tracking-widest text-[#9FA0CD]">
                Hover [?] hotspots for details
              </div>
            </div>

            {/* Right: Technical specifications and comparison */}
            <div className="lg:col-span-6 text-left flex flex-col gap-6">
              <div>
                <span className="text-[#9FA0CD] font-black uppercase tracking-widest text-[9px] block mb-2">
                  Category: {activeCategory.toUpperCase()}
                </span>
                <h3 className="text-white font-black text-2xl md:text-4xl uppercase tracking-tight mb-4">
                  {fleetData[activeCategory].title}
                </h3>
                <p className="text-white/45 text-sm md:text-base leading-relaxed mb-8">
                  {fleetData[activeCategory].desc}
                </p>
              </div>

              {/* Technical Specifications table */}
              <div className="bg-[#111424]/40 border border-white/[0.05] rounded-2xl overflow-hidden shadow-lg">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-white/[0.04] bg-[#05060A]/40 text-left">
                      <th className="py-4 px-6 text-[9px] font-black uppercase tracking-widest text-white/30">Parameter</th>
                      <th className="py-4 px-6 text-[9px] font-black uppercase tracking-widest text-[#9FA0CD] text-right">Value Specification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.03]">
                    {fleetData[activeCategory].specs.map((sp, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                        <td className="py-3.5 px-6 text-xs font-bold text-white/40">{sp.label}</td>
                        <td className="py-3.5 px-6 text-xs font-black text-white text-right uppercase tracking-tight">{sp.val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#3B3C89] hover:bg-[#5253B3] text-white font-black uppercase tracking-widest text-[9px] py-4 px-8 rounded-xl transition-all group w-full sm:w-auto"
                >
                  Request Fleet Specs <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          5. LUXURY INDUSTRY BLUEPRINT SHOWCASE
      ═══════════════════════════════════════════════════════ */}
      <section className="relative py-32 border-b border-white/[0.04] text-white overflow-hidden bg-[#0A0C14]">
        
        <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none">
          <Image
            src="/images/Industries We Support (Construction).jpg.jpeg"
            alt="Engineering blueprint base"
            fill
            sizes="100vw"
            className="object-cover object-center filter grayscale brightness-50"
          />
        </div>

        <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
          <div className="mb-24 text-center">
            <span className="text-[#9FA0CD] text-xs md:text-sm font-black uppercase tracking-[0.45em] mb-4 block">
              Project Applications
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              Industries we <span className="text-white/35">support</span>
            </h2>
            <p className="text-white/40 text-xs md:text-sm font-semibold max-w-md mx-auto leading-relaxed mt-4">
              We provide tailored machinery blueprints and redundant power frameworks engineered to match sector-specific compliance codes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Construction Grid",
                icon: <HardHat size={22} />,
                desc: "High-performance power networks and silent air systems delivering multi-shift uptime across major high-rise development grids.",
                pack: "1x 500 kVA Generator + 1x 750 CFM Compressor + 4x LED Mobile Light Towers"
              },
              {
                title: "Oil & Gas Blocks",
                icon: <Droplets size={22} />,
                desc: "Fully certified heavy diesel units featuring spark arrestors and chalwyn valves for highly explosive refinery environments.",
                pack: "2x 400 kVA Offshore Synchronized Generators + Armored Cable Bunds + ATS"
              },
              {
                title: "Data System Center",
                icon: <Database size={22} />,
                desc: "Ultra-precise resistive/reactive load banks and automated ATS switches testing critical servers for emergency failovers.",
                pack: "1x 1500 kW Resistive Load Bank + 1x 1600A Automatic Transfer Switch Panel"
              },
              {
                title: "Marine Dry Docks",
                icon: <Anchor size={22} />,
                desc: "Heavy welding generator arrays and robust high-pressure air distribution systems supporting continuous vessel repairs.",
                pack: "4x 500A Multi-Operator Welding Units + 1x 1200 CFM Compressor"
              },
              {
                title: "Events & Festivals",
                icon: <Zap size={22} />,
                desc: "Super-silent diesel systems configured in parallel to provide flicker-free redundant grid stability for major concerts.",
                pack: "2x 500 kVA Super Silent Synchronized Generators + Power Distribution boards"
              },
              {
                title: "Manufacturing Lines",
                icon: <Settings size={22} />,
                desc: "Robust backup generators and portable compressor grids preventing production drops during utility schedule updates.",
                pack: "1x 800 kVA Primary Generator + 1x 500 Gallon Fuel Tank + Custom cabling"
              }
            ].map((industry, i) => (
              <div
                key={i}
                className="group relative p-8 border border-white/[0.04] bg-[#111424]/30 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.01] hover:border-[#3B3C89]/25 flex flex-col justify-between min-h-[340px]"
              >
                {/* Grid blueprint schematic drawing lines on hover */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,60,137,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,60,137,0.03)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#3B3C89]/[0.04] rounded-bl-[60px] pointer-events-none" />

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#3B3C89]/15 border border-[#3B3C89]/20 text-[#9FA0CD] flex items-center justify-center mb-6 relative z-10 group-hover:bg-[#3B3C89] group-hover:text-white transition-all duration-300">
                    {industry.icon}
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-black mb-3 uppercase tracking-tight text-white relative z-10">
                    {industry.title}
                  </h3>
                  
                  <p className="text-white/40 text-xs md:text-sm font-semibold leading-relaxed mb-6 relative z-10">
                    {industry.desc}
                  </p>
                </div>

                <div className="bg-[#05060A]/80 border border-white/[0.04] p-4 rounded-xl relative z-10 mt-2">
                  <span className="text-[#9FA0CD] text-[8px] font-black uppercase tracking-widest block mb-1">
                    Standard Equipment Pack Recommendation
                  </span>
                  <span className="text-white text-[11px] font-bold">
                    {industry.pack}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          6. INTERACTIVE TECHNICAL CAPABILITIES MATRIX
      ═══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#05060A] border-b border-white/[0.04]">
        <div className="container mx-auto px-6 md:px-8 max-w-7xl">
          
          <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="text-left">
              <span className="text-[#9FA0CD] font-black uppercase tracking-[0.45em] text-[10px] md:text-xs block mb-4">
                Field Capabilities
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none">
                Technical <br />
                <span className="text-white/35">Integrations</span>
              </h2>
            </div>
            <p className="max-w-xs text-white/35 text-xs font-semibold leading-relaxed">
              Standardized engineering operations that secure seamless site setups, rapid compliance licensing, and absolute structural safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              { label: "Generator Coupling", val: "Up to 1250+ kVA", unit: "Synchronized systems", icon: <Sliders size={18} /> },
              { label: "High Volume Air Flow", val: "150 – 1200 CFM", unit: "Air rotary screw pack", icon: <Wind size={18} /> },
              { label: "Cabling Blocks Spec", val: "16mm² – 240mm²", unit: "Flexible armored copper", icon: <UtilityPole size={18} /> },
              { label: "Automatic Transfers", val: "100A – 1600A", unit: "Integrated ATS panels", icon: <Cpu size={18} /> },
              { label: "Integrated Storage", val: "50 – 4000 Gallons", unit: "Double-walled bunded tanks", icon: <Droplets size={18} /> },
              { label: "Emergency Dispatch", val: "24/7 Field Support", unit: "Immediate technician crew", icon: <Clock size={18} /> },
            ].map((cap, i) => (
              <div key={i} className="bg-[#05060A] p-10 hover:bg-[#111424]/30 transition-all group text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#3B3C89]/[0.02] rounded-bl-[40px] pointer-events-none" />
                
                <div className="w-10 h-10 rounded-xl bg-[#3B3C89]/10 border border-[#3B3C89]/20 text-[#9FA0CD] flex items-center justify-center mb-6 group-hover:bg-[#3B3C89] group-hover:text-white transition-all duration-300">
                  {cap.icon}
                </div>

                <p className="text-white/35 text-[9px] font-black uppercase tracking-[0.3em] mb-3">
                  {cap.label}
                </p>
                <p className="text-xl md:text-2xl font-black text-white mb-6 uppercase tracking-tight">
                  {cap.val}
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="h-px w-6 bg-[#3B3C89]" />
                  <span className="text-[9px] text-[#9FA0CD] font-black uppercase tracking-wider">
                    {cap.unit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          7. DUAL-ACTION INTEGRATED CTA
      ═══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#0A0C14] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact us background.jpg.jpeg"
            alt="Support request footer"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-[0.06] filter grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-[#0A0C14]/90" />
        </div>

        <div className="container mx-auto px-6 md:px-8 max-w-5xl text-center relative z-10">
          <span className="text-[#9FA0CD] font-black uppercase tracking-[0.5em] text-[9px] md:text-[10px] block mb-6 animate-pulse">
            Secure Site Continuity Today
          </span>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight uppercase tracking-tight mb-8">
            Powering UAE&apos;s <br />
            critical infrastructure<span className="text-[#3B3C89]">.</span>
          </h2>
          
          <p className="text-white/40 text-sm md:text-base font-semibold max-w-xl mx-auto leading-relaxed mb-12">
            Let our engineering teams coordinate, synchronize, and deploy bulletproof machinery arrays custom built around your site constraints.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#3B3C89] hover:bg-[#5253B3] text-white font-black uppercase tracking-widest text-[9px] py-4.5 px-10 rounded-xl transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-[#3B3C89]/20 w-full sm:w-auto group"
            >
              Consult With Our Engineers <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 bg-white/[0.01] hover:bg-white/[0.04] text-white/70 hover:text-white font-black uppercase tracking-widest text-[9px] py-4.5 px-10 rounded-xl transition-all w-full sm:w-auto"
            >
              Learn More About Justified
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
