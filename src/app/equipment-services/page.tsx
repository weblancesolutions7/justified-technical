"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import companyData from "@/content/company.json";
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
  Droplets
} from "lucide-react";

const sections = [
  { id: "hero", name: "Overview" },
  { id: "equipment", name: "Equipment" },
  { id: "industries", name: "Industries" },
  { id: "technical", name: "Technical" },
  { id: "why-choose-us", name: "Why Us" },
];

export default function EquipmentServicesPage() {
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: "-20% 0px -70% 0px" });

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-white selection:bg-[#3B3C89] selection:text-white font-sans">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#3B3C89] z-[100] origin-left" style={{ scaleX }} />



      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/out-story-2.jpeg"
            alt="Equipment and Services Background"
            fill
            priority
            className="object-cover opacity-50 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/55 to-[#0a0a0a]" />
        </div>
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-8 bg-[#3B3C89]" />
              <span className="text-[#9FA0CD] text-xs md:text-sm font-black uppercase tracking-[0.5em]">Industrial Solutions</span>
              <div className="h-px w-8 bg-[#3B3C89]" />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-10 leading-tight tracking-tighter uppercase">
              Equipment & <span className="text-[#9FA0CD]">Services</span>
            </h1>

            <p className="text-white/50 text-base md:text-lg lg:text-xl leading-relaxed mb-12 max-w-3xl mx-auto font-medium">
              Reliable generator rental, heavy machinery, and temporary power systems designed for the UAE's most critical industrial operations and infrastructure projects.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-24">
              <Link href="#equipment" className="bg-[#3B3C89] text-white px-12 py-5 font-black uppercase tracking-widest text-[11px] hover:bg-white hover:text-[#3B3C89] transition-all flex items-center gap-3 group">
                Explore Fleet <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="border border-white/20 text-white px-12 py-5 font-black uppercase tracking-widest text-[11px] hover:border-[#9FA0CD] hover:text-[#9FA0CD] transition-all">
                Request a Quote
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
              <div className="bg-[#0a0a0a] py-12 px-6">
                <p className="text-xs font-bold text-white/30 uppercase tracking-[0.3em] mb-4">Generator Range</p>
                <p className="text-3xl md:text-4xl font-black text-white italic">20 – 1250 <span className="text-xs not-italic text-white/40">kVA</span></p>
              </div>
              <div className="bg-[#0a0a0a] py-12 px-6">
                <p className="text-xs font-bold text-white/30 uppercase tracking-[0.3em] mb-4">Service Coverage</p>
                <p className="text-3xl md:text-4xl font-black text-white italic">UAE-WIDE</p>
              </div>
              <div className="bg-[#0a0a0a] py-12 px-6">
                <p className="text-xs font-bold text-white/30 uppercase tracking-[0.3em] mb-4">Technical Support</p>
                <p className="text-3xl md:text-4xl font-black text-white italic">24/7 <span className="text-xs not-italic text-white/40">Response</span></p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EQUIPMENT SHOWCASE */}
      <section id="equipment" className="bg-[#0a0a0a]">
        {[
          {
            title: "Generators",
            range: "20–1250 kVA",
            desc: "High-performance rental generators for prime and standby applications. Fuel-efficient and sound-attenuated.",
            image: "/images/equipment/Generators.jpg.jpeg",
            specs: ["Soundproof Enclosures", "Synchronization Ready", "External Fuel Tank Links"]
          },
          {
            title: "Air Compressors",
            range: "150–1200 CFM",
            desc: "Industrial-grade diesel compressors for construction and oil field operations across the Emirates.",
            image: "/images/equipment/Air Compressor.jpg.jpeg",
            specs: ["High-Pressure Outputs", "Portable Units", "Environmental Safety Compliance"],
            reverse: true
          },
          {
            title: "Tower Lights",
            range: "Diesel & Solar",
            desc: "Advanced mobile lighting systems designed for 24/7 construction sites and remote industrial yards.",
            image: "/images/equipment/Tower Lights.jpg.jpeg",
            specs: ["LED Efficiency", "Silent Operation", "Fast Deployment"]
          },
          {
            title: "Welding Machines",
            range: "400A – 600A",
            desc: "Heavy-duty diesel-driven welding generators for structural steel and fabrication projects.",
            image: "/images/equipment/Welding Machines.jpg.jpeg",
            specs: ["Multi-Process Capability", "Auxiliary Power", "Rough-Terrain Mobility"],
            reverse: true
          },
          {
            title: "Load Banks & Panels",
            range: "Testing & Distribution",
            desc: "Complete power testing systems, ATS panels, and distribution boards for seamless site integration.",
            image: "/images/equipment/6.jpg.jpeg",
            specs: ["Resistive/Reactive Banks", "Automatic Transfer Switches", "Armored Power Cables"]
          }
        ].map((item, idx) => (
          <div key={idx} className="relative w-full border-b border-white/5 flex flex-col lg:flex-row min-h-[70vh]">
            <div className={`w-full lg:w-1/2 relative min-h-[400px] ${item.reverse ? "lg:order-2" : ""}`}>
              <Image src={item.image} alt={item.title} fill sizes="(max-width: 1024px) 100vw, 50vw" unoptimized className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className={`w-full lg:w-1/2 bg-[#0a0a0a] flex flex-col justify-center px-6 py-12 md:p-20 ${item.reverse ? "lg:order-1 lg:text-right lg:items-end text-left items-start" : ""}`}>
              <span className="text-[#9FA0CD] text-xs md:text-sm font-black uppercase tracking-[0.4em] mb-4">{item.range}</span>
              <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tight">{item.title}</h2>
              <p className="text-white/50 text-base md:text-lg leading-relaxed mb-10 max-w-xl text-left">{item.desc}</p>
              <ul className={`space-y-4 mb-12 flex flex-col ${item.reverse ? "lg:items-end items-start" : ""}`}>
                {item.specs.map((spec, sIdx) => (
                  <li key={sIdx} className={`flex items-center gap-3 text-white/70 font-bold uppercase tracking-widest text-[10px] ${item.reverse ? "lg:flex-row flex-row" : "flex-row"}`}>
                    <div className={`w-1.5 h-1.5 bg-[#9FA0CD] ${item.reverse ? "lg:hidden block" : "block"}`} />
                    <span>{spec}</span>
                    <div className={`w-1.5 h-1.5 bg-[#9FA0CD] ${item.reverse ? "lg:block hidden" : "hidden"}`} />
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-4 text-white group uppercase font-black tracking-widest text-[10px]">
                Request Technical Specs <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform text-[#9FA0CD]" />
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="relative py-32 border-b border-white/5 text-white overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Industries We Support (Construction).jpg.jpeg"
            alt="Industries We Support Background"
            fill
            className="object-cover opacity-60 grayscale"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/40" />
        </div>
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="mb-24 text-center">
            <span className="text-[#9FA0CD] text-xs md:text-sm font-black uppercase tracking-[0.5em] mb-6 block">Project Applications</span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight text-white">Industries We <span className="text-white/20">Support</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Construction", icon: HardHat, desc: "Powering infrastructure and high-rise developments across the UAE." },
              { title: "Oil & Gas", icon: Droplets, desc: "Certified equipment for extreme offshore and refinery conditions." },
              { title: "Events", icon: Zap, desc: "Silent power solutions for major concerts and corporate exhibitions." },
              { title: "Marine", icon: Anchor, desc: "Temporary power for dry docks and vessel maintenance operations." },
              { title: "Data Centers", icon: Database, desc: "Redundant power testing and backup for critical IT infrastructure." },
              { title: "Manufacturing", icon: Settings, desc: "Industrial-grade machinery for production lines and facility support." }
            ].map((industry, i) => (
              <div key={i} className="p-10 border border-white/5 bg-white/5 hover:border-[#9FA0CD]/40 transition-all group backdrop-blur-sm">
                <industry.icon size={40} className="text-[#9FA0CD] mb-8 opacity-40 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl md:text-2xl font-black mb-4 uppercase tracking-tight text-white">{industry.title}</h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL GRID */}
      <section id="technical" className="py-32 bg-[#0a0a0a] border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="text-[#9FA0CD] text-xs md:text-sm font-black uppercase tracking-[0.5em] mb-6 block">Fleet Capacity</span>
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight leading-none">Technical <br /><span className="text-white/20">Capabilities</span></h2>
            </div>
            <p className="max-w-xs text-white/30 text-xs font-black uppercase tracking-widest leading-relaxed">Standardized machinery specifications for seamless site integration and operational excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              { label: "Generator Range", value: "20–1250+ kVA", unit: "POWER" },
              { label: "Air Compressors", value: "150–1200 CFM", unit: "FLOW" },
              { label: "ATS Panels", value: "100A–1600A", unit: "CONTROL" },
              { label: "Fuel Tanks", value: "50–4000 Gallons", unit: "STORAGE" },
              { label: "Power Cables", value: "16–240 mm²", unit: "DISTRIBUTION" },
              { label: "Response Time", value: "24/7 Immediate", unit: "EMERGENCY" },
            ].map((cap, i) => (
              <div key={i} className="bg-[#0a0a0a] p-12 hover:bg-[#0f0f0f] transition-all group">
                <p className="text-white/30 text-xs font-black uppercase tracking-[0.4em] mb-4">{cap.label}</p>
                <p className="text-2xl md:text-3xl font-black text-white mb-6 uppercase tracking-tighter">{cap.value}</p>
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-[#3B3C89]" />
                  <span className="text-[10px] text-white/20 font-black tracking-widest">{cap.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-choose-us" className="relative py-24 overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/equipment/6.jpg.jpeg"
            alt={`Why Choose ${companyData.shortName} Background`}
            fill
            className="object-cover opacity-50 grayscale"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-[#FBFCFD] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-5">
              <span className="text-[#9FA0CD] text-xs md:text-sm font-black uppercase tracking-[0.5em] mb-6 block">Our Commitment</span>
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase leading-tight tracking-tighter mb-12">Why Choose <br /><span className="text-white/20">{companyData.shortName}</span></h2>
              <p className="text-white/40 text-base md:text-lg leading-relaxed max-w-sm text-left">Decades of combined expertise in providing reliable machinery and temporary power for the UAE's industrial giants.</p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
              {[
                { title: "Fast Deployment", desc: "Rapid machinery delivery across all UAE Emirates via our logistical network." },
                { title: "Reliable Fleet", desc: "Rigorous load-testing and preventative maintenance for every unit." },
                { title: "Technical Expertise", desc: "Certified engineers and operators with field-proven industrial experience." },
                { title: "Industrial Support", desc: "Robust systems designed to keep your site operational under extreme conditions." }
              ].map((item, i) => (
                <div key={i}>
                  <p className="text-[#9FA0CD] font-black text-xs mb-4 uppercase tracking-[0.3em]">0{i + 1}</p>
                  <h3 className="text-lg md:text-xl font-black uppercase mb-4 tracking-tight text-white">{item.title}</h3>
                  <p className="text-white/40 text-sm md:text-base leading-relaxed text-left">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
