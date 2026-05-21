"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Zap, Settings, ArrowRight, PhoneCall, Mail, MapPin, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import companyData from "@/content/company.json";
import { industriesData } from "@/content/industries";
import EquipmentShowcase from "@/components/EquipmentShowcase";

const capacityOptions: Record<string, string[]> = {
  Generators: ["20kVA - 250kVA Mobile", "250kVA - 500kVA High Performance", "500kVA - 1250kVA+ Synchronized Grid"],
  Compressors: ["150CFM - 400CFM Utility", "400CFM - 800CFM Mid-Pressure", "800CFM - 1200CFM Oil-Free High Pressure"],
  Lights: ["4000W LED Heavy Duty Spec", "Solar Mobile Hybrid Smart Fleet"],
  Testing: ["100kW - 1000kW Grid Simulation", "1000kW - 3000kW High Voltage Load Banks"]
};

const categoryImages: Record<string, { image: string, label: string, tags: string[] }> = {
  Generators: {
    image: "/images/generator_hero_v2.png",
    label: "Super-Silent Prime Generator",
    tags: ["1250kVA Heavy Duty", "Acoustic Attenuation (65dBA)", "Integrated ATS & Synchronization"]
  },
  Compressors: {
    image: "/images/lifting_cutout.png",
    label: "High-Pressure Diesel Compressor",
    tags: ["1200 CFM Airflow", "Skid & Trailer Mounted", "Extreme Temperature Tolerant"]
  },
  Lights: {
    image: "/images/loader_cutout.png",
    label: "Mobile LED Lighting Tower",
    tags: ["9m Vertical Hydraulic Mast", "Solar Hybrid System", "Multi-Directional LED Panels"]
  },
  Testing: {
    image: "/images/compaction_cutout.png",
    label: "Armored Load Bank Depot",
    tags: ["3000kW Grid Synchronization", "Continuous Data Logging", "Heavy Duty Cabling Sets"]
  }
};

export default function Home() {
  const [configCategory, setConfigCategory] = useState("Generators");
  const [configCapacity, setConfigCapacity] = useState("500kVA - 1250kVA+ Synchronized Grid");
  const [isPaused, setIsPaused] = useState(false);
  const [activeTab, setActiveTab] = useState<"about" | "vision">("about");
  const equipmentScrollRef = useRef<HTMLDivElement>(null);

  // Synchronize capacity selection when category changes
  const handleCategoryChange = (cat: string) => {
    setConfigCategory(cat);
    setConfigCapacity(capacityOptions[cat][0]);
  };

  // Auto-scroll equipment
  useEffect(() => {
    if (isPaused) return;
    const container = equipmentScrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      const isEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth - 10;
      if (isEnd) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const cardWidth = container.clientWidth * (window.innerWidth < 768 ? 0.85 : window.innerWidth < 1024 ? 0.45 : 0.3);
        const scrollAmount = cardWidth + 32;
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollEquipment = (direction: "left" | "right") => {
    const container = equipmentScrollRef.current;
    if (!container) return;
    const cardWidth = container.clientWidth * (window.innerWidth < 768 ? 0.85 : window.innerWidth < 1024 ? 0.45 : 0.3);
    const scrollAmount = cardWidth + 32;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  return (
    <div className="bg-[#0A0C14] text-[#FBFCFD] min-h-screen relative">

      {/* BACKGROUND GRAPHIC LINES */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111424_1px,transparent_1px),linear-gradient(to_bottom,#111424_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none z-0" />

      {/* 1. HERO SECTION (Asymmetric Modern Editorial Split) */}
      <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#05060A] to-[#0A0C14] border-b border-white/5">
        {/* Backdrop Image */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/Home Page.jpg.jpeg"
            alt="Heavy Machinery Background"
            fill
            sizes="100vw"
            className="object-cover object-center filter grayscale contrast-125"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05060A] via-[#05060A]/95 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C14] via-transparent to-transparent" />
        </div>

        {/* Dynamic Halos */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#3B3C89] opacity-10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left Column: Bold Industrial Display */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* dispatch status badge */}
              <div className="border border-[#9FA0CD]/20 bg-[#3B3C89]/20 text-[#9FA0CD] px-4.5 py-1.5 rounded-full text-[9px] font-black tracking-widest uppercase mb-8 inline-flex items-center gap-2 shadow-inner">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                ACTIVE UAE INDUSTRIAL FLEET • GCC INTEGRITY SECURED
              </div>

              {/* Massive display heading with premium typography */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black text-white leading-[1.05] tracking-tight uppercase mb-6 text-left">
                Uncompromising <br className="hidden md:block" />
                <span className="text-[#9FA0CD] drop-shadow-[0_4px_8px_rgba(59,60,137,0.3)]">Power Solutions</span>. <br />
                Seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5253B3] to-[#9FA0CD]">Deployment</span>.
              </h1>

              {/* Professional Description */}
              <p className="text-white/60 text-xs md:text-sm lg:text-base font-semibold tracking-wide leading-relaxed max-w-xl mb-10 text-left">
                Justified Technical delivers high-performance synchronized soundproof generator rentals exceeding 1250kVA+, air compressors, and site distribution logistics backed by 24/7 technical field engineering across Dubai, Abu Dhabi, and the entire UAE.
              </p>

              {/* Direct call-to-actions */}
              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href="#justified-dispatch-gateway"
                  className="bg-[#3B3C89] hover:bg-[#5253B3] text-white px-8 py-4.5 rounded-2xl font-black text-[10px] tracking-widest uppercase transition-all shadow-lg shadow-[#3B3C89]/30 hover:scale-[1.02] active:scale-95 cursor-pointer"
                >
                  Consult Fleet Experts
                </Link>
                <Link
                  href="/equipment-services"
                  className="bg-transparent border border-white/10 hover:border-[#3B3C89]/40 hover:bg-[#3B3C89]/10 text-white px-8 py-4.5 rounded-2xl font-black text-[10px] tracking-widest uppercase transition-all"
                >
                  Explore Spec Sheets
                </Link>
              </div>

              {/* Integrated Fleet Configurator Card */}
              <div className="bg-[#111424]/60 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-2xl w-full max-w-xl text-left relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#3B3C89]" />
                <span className="text-[#9FA0CD] font-black text-[9px] uppercase tracking-widest block mb-4 ml-2">
                  Interactive Fleet Configurator
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 ml-2">
                  {/* Category Class Select */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[8px] font-black text-white/40 uppercase tracking-wider">01. Equipment Class</label>
                    <div className="relative">
                      <select
                        value={configCategory}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                        className="w-full bg-[#0A0C14]/90 border border-white/5 rounded-xl p-3.5 text-white focus:outline-none transition-all font-bold text-xs appearance-none cursor-pointer hover:border-[#3B3C89]/30"
                      >
                        <option value="Generators">Silent Generators</option>
                        <option value="Compressors">Air Compressors</option>
                        <option value="Lights">Mobile Tower Lights</option>
                        <option value="Testing">Testing Load Banks</option>
                      </select>
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-white/50">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Capacity Need Select */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[8px] font-black text-white/40 uppercase tracking-wider">02. Capacity Need</label>
                    <div className="relative">
                      <select
                        value={configCapacity}
                        onChange={(e) => setConfigCapacity(e.target.value)}
                        className="w-full bg-[#0A0C14]/90 border border-white/5 rounded-xl p-3.5 text-white focus:outline-none transition-all font-bold text-xs appearance-none cursor-pointer hover:border-[#3B3C89]/30"
                      >
                        {capacityOptions[configCategory].map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-white/50">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const contactSection = document.getElementById("justified-dispatch-gateway");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="w-[calc(100%-8px)] ml-2 bg-[#3B3C89] hover:bg-[#5253B3] text-white py-4 rounded-xl font-black text-[10px] tracking-widest uppercase transition-all shadow-md hover:scale-[1.01] active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  Configure & Get Spec Sheet
                </button>
              </div>

            </div>

            {/* Right Column: Layered Machinery Spotlight */}
            <div className="lg:col-span-5 relative w-full h-[400px] lg:h-[550px] flex items-center justify-center">
              {/* Halos & pedestals */}
              <div className="absolute w-[350px] h-[350px] bg-[#3B3C89] opacity-10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-[10%] w-[90%] h-[35px] bg-gradient-to-r from-[#3B3C89]/30 via-transparent to-[#3B3C89]/30 rounded-[100%] border border-white/5 shadow-2xl" />

              <div className="relative w-full h-full flex items-center justify-center z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={configCategory}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative w-full h-full flex flex-col justify-end items-center"
                  >
                    {/* Floating Machine Cutout */}
                    <div className="relative w-full h-[70%] flex items-end justify-center mb-6">
                      <Image
                        src={categoryImages[configCategory].image}
                        alt={categoryImages[configCategory].label}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)]"
                        priority
                      />
                    </div>

                    {/* Spec Spotlight Card */}
                    <div className="bg-[#111424]/90 backdrop-blur-md border border-white/10 rounded-2xl p-4.5 shadow-2xl text-left max-w-sm w-full">
                      <span className="text-[#9FA0CD] font-black text-[8px] tracking-widest uppercase block mb-1">
                        Active Fleet Specs
                      </span>
                      <h4 className="text-white font-sans font-black text-sm uppercase tracking-tight mb-3">
                        {categoryImages[configCategory].label}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {categoryImages[configCategory].tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-[#3B3C89]/40 border border-[#3B3C89]/50 text-white/90 px-2 py-0.5 rounded text-[7.5px] font-black uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS BANNER SECTION (Unified Dark Theme) */}
      <section className="relative z-40 bg-[#05060A] border-y border-white/5 py-16">
        <div className="container mx-auto px-6 md:px-8 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-left">
            {[
              { label: "Established", value: "2018", suffix: "", desc: "Heavy Industrial Support in UAE" },
              { label: "Fleet Capacity", value: "1250", suffix: "+kVA", desc: "Prime Synchronized Units" },
              { label: "Engineering Standby", value: "24/7", suffix: "", desc: "Rapid Field Action Deployments" },
              { label: "Operational Uptime", value: "99.9", suffix: "%", desc: "Zero Work Site Interruption" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-start lg:border-r last:border-0 border-white/5 pr-2 lg:pr-6 text-left"
              >
                <div className="flex items-baseline">
                  <span className="text-4xl md:text-5xl font-sans font-black text-[#FBFCFD] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-2xl font-sans font-black text-[#9FA0CD] ml-0.5">
                    {stat.suffix}
                  </span>
                </div>
                <span className="text-[#9FA0CD] font-black uppercase tracking-widest text-[9px] md:text-[10px] mt-3 mb-1.5">
                  {stat.label}
                </span>
                <span className="text-white/50 text-[10px] font-semibold leading-relaxed">
                  {stat.desc}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT US SECTION (COMPLETELY REDESIGNED BLUEPRINT SPREAD) */}
      <section className="py-28 bg-[#0A0C14] relative border-b border-white/5">
        <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-[#3B3C89] opacity-[0.05] rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-start gap-16 lg:gap-20">

            {/* Left Content Column */}
            <div className="flex-1 w-full text-left order-2 lg:order-1">
              <span className="text-[#9FA0CD] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs block mb-4">
                Established Legacy
              </span>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black text-white mb-8 leading-[1.05] tracking-tight uppercase">
                Heavy machinery <br className="hidden md:block" />
                integration you can <br className="hidden md:block" />
                trust… <span className="text-[#9FA0CD]">anytime, anywhere.</span>
              </h2>

              {/* Sub-tab selection */}
              <div className="flex border-b border-white/10 mb-8">
                <button
                  onClick={() => setActiveTab("about")}
                  className={`pb-4 px-2 font-black uppercase text-[10px] tracking-widest transition-all relative cursor-pointer ${activeTab === "about" ? "text-white" : "text-white/40 hover:text-white/80"
                    }`}
                >
                  Our Background
                  {activeTab === "about" && (
                    <motion.div layoutId="about-tab-indicator" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#3B3C89]" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("vision")}
                  className={`pb-4 px-8 font-black uppercase text-[10px] tracking-widest transition-all relative cursor-pointer ${activeTab === "vision" ? "text-white" : "text-white/40 hover:text-white/80"
                    }`}
                >
                  Our Promise
                  {activeTab === "vision" && (
                    <motion.div layoutId="about-tab-indicator" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#3B3C89]" />
                  )}
                </button>
              </div>

              <div className="text-white/60 mb-12 leading-relaxed text-sm md:text-base max-w-2xl font-semibold min-h-[120px]">
                <AnimatePresence mode="wait">
                  {activeTab === "about" ? (
                    <motion.div
                      key="about-txt"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <p>
                        Established in 2018, **Justified Technical** was founded to deliver absolute reliability in structural heavy machinery, power synchronizations, and site air solutions across the growing GCC market.
                      </p>
                      <p>
                        Through precise planning and strict asset loading, we have secured a leading position, supplying massive synchronized diesel power grids exceeding 1250kVA+ and industrial-grade high-volume mobile utility fleets.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="vision-txt"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <p>
                        We operate under rigid corporate standards to eliminate power downtime. Our mandate is simple: secure, compliant, zero-interruption industrial services.
                      </p>
                      <p>
                        Every generator load bank, silent canopy, and high-pressure system in our UAE depots undergoes complete physical field testing before deploying to your site coordinate.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Advantage Pillars (Badges layout) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { step: "01", title: "Client Focus", desc: "Adapting capacities to match precise project lifespans." },
                  { step: "02", title: "Strict Support", desc: "Rigorous diagnostic audits preventing work halts." },
                  { step: "03", title: "GCC Reach", desc: "Rapid freight networks covering the entire UAE." }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="border border-white/5 rounded-2xl p-5 hover:border-[#3B3C89]/30 transition-all bg-[#111424]/40 text-left relative group overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-8 h-8 bg-[#3B3C89]/5 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="font-sans font-black text-xs text-[#9FA0CD] block mb-3">{item.step}</span>
                    <h3 className="text-white font-sans font-black uppercase tracking-wider text-xs md:text-sm mb-2">{item.title}</h3>
                    <p className="text-white/40 text-[10.5px] leading-relaxed font-semibold">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Architectural Blueprint Image Frame (Screenshot Redesign) */}
            <div className="flex-1 w-full relative order-1 lg:order-2 lg:sticky lg:top-32 z-20 self-start">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full relative flex items-center justify-center"
              >
                {/* Fine architectural layout grid border */}
                <div className="absolute inset-[-10px] border border-dashed border-[#3B3C89]/10 rounded-3xl pointer-events-none" />
                <div className="absolute inset-0 bg-[#3B3C89]/5 rounded-3xl translate-x-4 translate-y-4 -z-10 blur-md" />

                {/* Outer architectural container */}
                <div className="relative w-full h-[450px] lg:h-[550px] rounded-3xl overflow-hidden border border-white/10 bg-[#111424]/40 p-3 shadow-2xl backdrop-blur-sm">

                  {/* HUD markings on inner border */}
                  <div className="absolute top-4 left-6 z-20 text-[7px] font-black uppercase tracking-widest text-[#9FA0CD]/60 bg-[#0A0C14]/80 px-2 py-0.5 rounded border border-white/5">
                    SYS_REF: JUSTIFIED_DEPOT_04
                  </div>
                  <div className="absolute top-4 right-6 z-20 text-[7px] font-black uppercase tracking-widest text-[#9FA0CD]/60 bg-[#0A0C14]/80 px-2 py-0.5 rounded border border-white/5">
                    LOC: DXB_PORT_DEPOT
                  </div>
                  <div className="absolute bottom-6 left-6 z-20 text-[7px] font-black uppercase tracking-widest text-emerald-400 bg-[#0A0C14]/80 px-2 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1 shadow-md">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                    FLEET LOAD AUDIT: COM_PASSED
                  </div>
                  <div className="absolute bottom-6 right-6 z-20 text-[7px] font-black uppercase tracking-widest text-white/40 bg-[#0A0C14]/80 px-2 py-0.5 rounded border border-white/5">
                    EST_2018
                  </div>

                  {/* Inner image container */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/5">
                    <Image
                      src="/images/about us.jpg.jpeg"
                      alt="Justified Technical Heavy generator and compressor onsite"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={95}
                      className="object-cover transition-transform duration-700 hover:scale-105 filter brightness-90 contrast-110"
                      priority
                    />
                    {/* Elegant editorial color wash overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C14]/50 via-transparent to-[#0A0C14]/20" />
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CORE VALUES SECTION (Unified Dark Theme Cards) */}
      <section className="bg-[#05060A] py-28 relative overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
          <div className="mb-20 text-left">
            <span className="text-[#9FA0CD] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs block mb-4">
              Our Operating Standards
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black text-white uppercase tracking-tight">
              Corporate vision & <br />
              <span className="text-[#9FA0CD]">unwavering standards</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Our Vision",
                desc: "To scale as the lead provider of heavy civil machinery and standby synchronized temporary power logistics across the GCC, driving reliability through state-of-the-art diagnostic fleets.",
                icon: <Zap size={22} />,
                step: "01"
              },
              {
                title: "Our Values",
                desc: "We commit to complete operational safety and transport speed. Our engineers deliver 24/7 onsite response setups that modern infrastructure developers rely upon.",
                icon: <ShieldCheck size={22} />,
                step: "02"
              },
              {
                title: "Our Standards",
                desc: "We mandate complete mechanical audits prior to fleet dispatch, upholding zero-harm operational targets and investing in environmentally conscious silent canopies.",
                icon: <Settings size={22} />,
                step: "03"
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-white/5 rounded-3xl p-8 bg-[#111424]/30 hover:border-[#3B3C89]/30 transition-all duration-300 relative group flex flex-col justify-between min-h-[300px] shadow-lg"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#3B3C89]/5 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-[#3B3C89]/20 text-[#9FA0CD] border border-[#3B3C89]/20 flex items-center justify-center transition-all group-hover:bg-[#3B3C89] group-hover:text-white shadow-inner">
                      {card.icon}
                    </div>
                    <span className="text-[#9FA0CD] font-sans font-black text-sm">{card.step}</span>
                  </div>
                  <h3 className="text-white text-xl font-sans font-black mb-4 uppercase tracking-wider">{card.title}</h3>
                  <p className="text-white/60 leading-relaxed text-xs md:text-sm font-semibold">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EQUIPMENT FLEET CAROUSEL SECTION (Dark Sleek Carousel) */}
      <section className="py-28 bg-[#0A0C14] border-b border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl text-left">
              <span className="text-[#9FA0CD] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs block mb-4">
                Depot Inventory
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black text-white mb-6 tracking-tight uppercase">
                Heavy-Duty Rental Range & <br />
                <span className="text-[#9FA0CD]">Power Solutions</span>
              </h2>
              <p className="text-white/50 text-xs md:text-sm leading-relaxed font-semibold">
                Explore our certified, load-tested fleet of silent generators, industrial air compressors, and site distribution systems ready for instant UAE deployment.
              </p>
            </div>
            <div className="flex gap-4 items-center self-start lg:self-end">
              <button
                onClick={() => scrollEquipment("left")}
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-[#3B3C89] hover:border-transparent transition-all active:scale-95 cursor-pointer"
                aria-label="Scroll Left"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scrollEquipment("right")}
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-[#3B3C89] hover:border-transparent transition-all active:scale-95 cursor-pointer"
                aria-label="Scroll Right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            ref={equipmentScrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex overflow-x-auto gap-8 pb-6 px-4 -mx-4 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {[
              {
                title: "Silent Generators",
                range: "20–1250 kVA+",
                desc: "High-performance synchronized rental generators for prime and standby power canopies. Fuel-efficient and soundproof.",
                image: "/images/equipment/Generators.jpg.jpeg",
                techMeters: [
                  { label: "Acoustic Attenuation", val: "95%" },
                  { label: "Load Sync Readiness", val: "92%" },
                  { label: "Active Fuel Economy", val: "96%" }
                ]
              },
              {
                title: "Air Compressors",
                range: "150–1200 CFM",
                desc: "Industrial-grade diesel utility compressors for pipeline blowing, dredging, and sandblasting operations.",
                image: "/images/equipment/Air Compressor.jpg.jpeg",
                techMeters: [
                  { label: "High Pressure Delivery", val: "98%" },
                  { label: "Heavy Duty Autonomy", val: "94%" },
                  { label: "Offshore Certification", val: "90%" }
                ]
              },
              {
                title: "Tower Lights",
                range: "Diesel & Solar Smart",
                desc: "Advanced mobile light grids designed for 24/7 rapid airport work sites and high-density construction lines.",
                image: "/images/equipment/Tower Lights.jpg.jpeg",
                techMeters: [
                  { label: "Luminous Reach Scope", val: "95%" },
                  { label: "Solar Autonomy Index", val: "96%" },
                  { label: "Hydraulic Mast Stability", val: "92%" }
                ]
              },
              {
                title: "Welding Machines",
                range: "400A – 600A Grid",
                desc: "Heavy-duty diesel-driven welding generators for marine fabrication and critical pipeline welding projects.",
                image: "/images/equipment/Welding Machines.jpg.jpeg",
                techMeters: [
                  { label: "Arc Stability Rating", val: "96%" },
                  { label: "Transit Mobility", val: "90%" },
                  { label: "Auxiliary Output Flow", val: "88%" }
                ]
              },
              {
                title: "Load Banks & Distribution",
                range: "Testing up to 3000kW",
                desc: "Grid testing load bank units, ATS panels, armored cabling sets, and outdoor distribution blocks.",
                image: "/images/equipment/6.jpg.jpeg",
                techMeters: [
                  { label: "Diagnostic Accuracy", val: "98%" },
                  { label: "ATS Reaction Time", val: "97%" },
                  { label: "Armored Grid Shielding", val: "95%" }
                ]
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col bg-[#111424]/40 border border-white/5 rounded-3xl overflow-hidden hover:border-[#3B3C89]/30 transition-all duration-500 shadow-2xl flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] snap-start text-left"
              >
                {/* Image Section */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 30vw"
                    unoptimized
                    className="object-cover group-hover:scale-102 transition-transform duration-500 filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111424] via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-6 bg-[#3B3C89] text-white px-3.5 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest border border-white/5">
                    {item.range}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-white text-2xl font-black mb-3 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-white/50 text-xs md:text-sm leading-relaxed mb-6 font-semibold flex-grow">
                    {item.desc}
                  </p>

                  {/* Spec meters */}
                  <div className="space-y-4 mb-6 border-t border-white/5 pt-6">
                    {item.techMeters.map((meter, mIdx) => (
                      <div key={mIdx}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[8px] font-black uppercase tracking-widest text-white/40">{meter.label}</span>
                          <span className="text-[8px] font-black uppercase tracking-widest text-[#9FA0CD]">{meter.val}</span>
                        </div>
                        <div className="w-full h-1 bg-[#0A0C14] rounded-full overflow-hidden border border-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: meter.val }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="h-full bg-[#3B3C89] rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-white hover:text-[#9FA0CD] font-black uppercase tracking-widest text-[9px] transition-colors mt-auto group/link"
                  >
                    Request Fleet Specifications <ArrowRight size={12} className="text-[#3B3C89] group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DYNAMIC EQUIPMENT SHOWCASE SECTION (Showcases Upgraded Specifications Board) */}
      <section className="py-28 bg-[#05060A] border-b border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
          <EquipmentShowcase industries={industriesData} />
          <div className="mt-16 text-center">
            <Link
              href="/equipment-services"
              className="inline-flex items-center gap-2 text-[#9FA0CD] font-black uppercase tracking-widest text-xs hover:underline group"
            >
              View Full Fleet Blueprint Specifications <ArrowRight size={16} className="text-[#3B3C89] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US SECTION (Elegant Dark Flank Layout) */}
      <section className="py-28 bg-[#0A0C14] relative overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#9FA0CD] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs block mb-4">
              Our Core Strengths
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black text-white mb-6 tracking-tight uppercase">
              Why engineers trust <br />
              <span className="text-[#9FA0CD]">Justified Technical</span>
            </h2>
          </div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 pb-16">

            {/* Center Worker Image Cutout (Visual Stage on Dark Base) */}
            <div className="hidden lg:flex w-[450px] justify-center relative h-[600px] z-30 absolute left-1/2 -translate-x-1/2 bottom-0 pointer-events-none">
              <div className="absolute bottom-[2%] w-[80%] h-[30px] bg-[#3B3C89]/20 rounded-full blur-[10px]" />
              <Image
                src="/images/13.jpg.png"
                alt="Justified Technical Site Engineer Cutout"
                fill
                sizes="450px"
                unoptimized
                className="object-contain object-bottom scale-[1.3] origin-bottom drop-shadow-[0_20px_40px_rgba(59,60,137,0.25)] filter brightness-95"
                priority
              />
            </div>

            {/* Left Advantage Cards */}
            <div className="flex flex-col gap-6 w-full lg:w-[38%] z-20 text-left">
              {[
                { title: "Expert Mechanical Division", desc: "A highly-qualified field engineering team with deep GCC standard expertise and rigorous tooling." },
                { title: "Strict 24/7 Support Service", desc: "Active telemetry dispatch ensuring instantaneous field assistance to avoid downtime completely.", highlight: true },
                { title: "Complete Site Logistics Flow", desc: "Full turn-key power setups covering synchronized boards, cabling blocks, and safety testing." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-6 md:p-8 rounded-3xl shadow-2xl transition-all duration-300 hover:scale-[1.01] border ${item.highlight
                      ? "bg-[#3B3C89] border-transparent text-white lg:translate-x-4 shadow-[#3B3C89]/10"
                      : "bg-[#111424]/40 border-white/5 text-white hover:border-[#3B3C89]/25 lg:-translate-x-2"
                    }`}
                >
                  <h3 className="text-xl font-sans font-black mb-3 leading-tight uppercase tracking-tight">{item.title}</h3>
                  <p className={`font-semibold leading-relaxed text-xs md:text-sm ${item.highlight ? "text-white/80" : "text-white/50"}`}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Right Advantage Cards */}
            <div className="flex flex-col gap-6 w-full lg:w-[38%] z-20 text-left lg:text-right mt-6 lg:mt-0">
              {[
                { title: "UAE-Wide Depot Network", desc: "Central machinery depots positioned optimally across Ajman, Dubai, and Abu Dhabi for rapid dispatch." },
                { title: "Strategic Load Profile Auditing", desc: "Professional technical modeling to determine exact synchronization needs for complex builds.", highlight: true },
                { title: "Adaptive Commercial Leases", desc: "Tailored monthly, quarterly, or long-term operational leases built strictly around client parameters." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-6 md:p-8 rounded-3xl shadow-2xl transition-all duration-300 hover:scale-[1.01] border ${item.highlight
                      ? "bg-[#3B3C89] border-transparent text-white lg:-translate-x-4 shadow-[#3B3C89]/10"
                      : "bg-[#111424]/40 border-white/5 text-white hover:border-[#3B3C89]/25 lg:translate-x-2"
                    }`}
                >
                  <h3 className="text-xl font-sans font-black mb-3 leading-tight uppercase tracking-tight">{item.title}</h3>
                  <p className={`font-semibold leading-relaxed text-xs md:text-sm ${item.highlight ? "text-white/80" : "text-white/50"}`}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 8. DIRECT CALLBACK FORM & DIRECTORY GRID (Sleek Dark Interface) */}
      <section id="justified-dispatch-gateway" className="py-28 bg-[#05060A] relative overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#3B3C89] opacity-[0.03] rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-[#3B3C89] opacity-[0.03] rounded-full blur-[130px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#111424]/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 lg:p-20 overflow-hidden shadow-2xl relative"
          >
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#3B3C89]/30 to-transparent pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">

              {/* Left Column: Direct Corporate Contacts */}
              <div className="lg:col-span-6 flex flex-col gap-8 text-left">
                <div>
                  <span className="text-[#9FA0CD] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs block mb-4">
                    Site Logistics Directory
                  </span>
                  <h2 className="text-3xl md:text-5xl font-sans font-black text-white mb-4 tracking-tight uppercase leading-[1.1]">
                    Fleet Deployment <br />
                    <span className="text-[#9FA0CD]">Contact</span> Directory
                  </h2>
                  <p className="text-white/50 text-xs md:text-sm font-semibold tracking-wide leading-relaxed max-w-xl">
                    Connect directly with our coordinators. Your inquiry will be immediately routed to the specialized manager in your respective UAE sector for rapid freight and assembly setups.
                  </p>
                </div>

                {/* Corporate Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 w-full">
                  {[
                    {
                      label: "Sales & Engineering Dept",
                      val: companyData.contact.sales,
                      icon: <PhoneCall size={16} />,
                      tag: "DIRECT FLEET LEASES"
                    },
                    {
                      label: "Accounts & Compliance Dept",
                      val: companyData.contact.accounts,
                      icon: <PhoneCall size={16} />,
                      tag: "BILLING & AUDITS"
                    },
                    {
                      label: "HQ Administration Standby",
                      val: companyData.contact.tel,
                      icon: <PhoneCall size={16} />,
                      tag: "24/7 FLIGHT ASSISTANCE"
                    },
                    {
                      label: "Secure Corporate Dispatch Email",
                      val: companyData.contact.email,
                      icon: <Mail size={16} />,
                      tag: "PROJECT ROUTING",
                      href: `mailto:${companyData.contact.email}`
                    },
                    {
                      label: "HQ base depot",
                      val: "PO BOX: 5475, AJMAN/SHARJAH, UAE",
                      icon: <MapPin size={16} />,
                      tag: "CENTRAL BASE DEPOT",
                      isWide: true
                    }
                  ].map((card, idx) => (
                    <div
                      key={idx}
                      className={`group flex items-start gap-4 p-5 rounded-2xl bg-[#0A0C14]/40 border border-white/5 hover:border-[#3B3C89]/30 transition-all duration-300 ${card.isWide ? "md:col-span-2" : ""
                        }`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#3B3C89]/20 text-[#9FA0CD] group-hover:bg-[#3B3C89] group-hover:text-white transition-all flex items-center justify-center flex-shrink-0 shadow-inner border border-[#3B3C89]/10">
                        {card.icon}
                      </div>
                      <div className="min-w-0">
                        <span className="text-[#3B3C89] font-black text-[7px] tracking-widest uppercase block mb-1">
                          {card.tag}
                        </span>
                        <h4 className="text-white font-black uppercase tracking-widest text-[8px] mb-1 opacity-40">
                          {card.label}
                        </h4>
                        {card.href ? (
                          <a
                            href={card.href}
                            className="text-white hover:text-[#9FA0CD] font-black text-xs md:text-sm transition-colors truncate block"
                          >
                            {card.val}
                          </a>
                        ) : (
                          <p className="text-white font-black text-xs md:text-sm truncate block">
                            {card.val}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Secure Callback form */}
              <div className="lg:col-span-6 w-full">
                <div className="bg-[#0A0C14]/60 border border-white/5 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-2xl backdrop-blur-md">
                  <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#3B3C89]/20 to-transparent" />

                  <div className="mb-8 text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[8px] font-black uppercase tracking-widest text-emerald-400">DISPATCH GATEWAY ENCRYPTED</span>
                    </div>
                    <h3 className="text-2xl font-sans font-black text-white mb-2 tracking-tighter uppercase">
                      Direct Project Inquiry
                    </h3>
                    <p className="text-white/40 text-xs font-semibold uppercase tracking-wider">
                      Complete parameters to receive a technical callback within 2 hours.
                    </p>
                  </div>

                  <form className="flex flex-col gap-5">
                    {/* Grid Name and Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5 text-left">
                        <label className="text-white font-black uppercase tracking-widest text-[8px] ml-4 opacity-50">Coordinator Name *</label>
                        <input
                          type="text"
                          className="bg-[#0A0C14]/80 border border-white/10 focus:border-[#3B3C89] rounded-xl p-4 text-white focus:outline-none transition-all font-bold placeholder:text-white/20 text-xs shadow-inner"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-1.5 text-left">
                        <label className="text-white font-black uppercase tracking-widest text-[8px] ml-4 opacity-50">Secure Email *</label>
                        <input
                          type="email"
                          className="bg-[#0A0C14]/80 border border-white/10 focus:border-[#3B3C89] rounded-xl p-4 text-white focus:outline-none transition-all font-bold placeholder:text-white/20 text-xs shadow-inner"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5 text-left">
                        <label className="text-white font-black uppercase tracking-widest text-[8px] ml-4 opacity-50">Phone Number *</label>
                        <input
                          type="tel"
                          className="bg-[#0A0C14]/80 border border-white/10 focus:border-[#3B3C89] rounded-xl p-4 text-white focus:outline-none transition-all font-bold placeholder:text-white/20 text-xs shadow-inner"
                          placeholder="Your Number"
                          required
                        />
                      </div>

                      {/* Selector for deployment classes */}
                      <div className="flex flex-col gap-1.5 text-left">
                        <label className="text-white font-black uppercase tracking-widest text-[8px] ml-4 opacity-50">Deployment Class *</label>
                        <div className="relative">
                          <select
                            name="deploymentClass"
                            value={configCategory}
                            onChange={(e) => handleCategoryChange(e.target.value)}
                            className="w-full bg-[#0A0C14]/80 border border-white/10 focus:border-[#3B3C89] rounded-xl p-4 text-white focus:outline-none transition-all font-bold text-xs shadow-inner appearance-none cursor-pointer"
                            required
                          >
                            <option value="Generators" className="bg-[#0A0C14] text-white">Silent Generators</option>
                            <option value="Compressors" className="bg-[#0A0C14] text-white">Air Compressors</option>
                            <option value="Lights" className="bg-[#0A0C14] text-white">Mobile Tower Lights</option>
                            <option value="Testing" className="bg-[#0A0C14] text-white">Testing Load Banks</option>
                          </select>
                          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-white/50">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="text-white font-black uppercase tracking-widest text-[8px] ml-4 opacity-50">Project Scope & Setup Duration *</label>
                      <textarea
                        rows={4}
                        className="bg-[#0A0C14]/80 border border-white/10 focus:border-[#3B3C89] rounded-xl p-4 text-white focus:outline-none transition-all font-bold placeholder:text-white/20 resize-none text-xs shadow-inner"
                        placeholder="Detail the requested capacity, site location, load profile, or setup duration..."
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="bg-[#3B3C89] hover:bg-[#5253B3] text-white font-black uppercase tracking-widest py-5 rounded-xl hover:scale-[1.01] active:scale-95 transition-all shadow-xl shadow-[#3B3C89]/20 mt-4 text-[10px] flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      Submit Project Inquiry
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
