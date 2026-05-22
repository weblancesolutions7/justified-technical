"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Wrench,
  Globe,
  Clock,
  Users,
  HeartHandshake,
  TrendingUp,
  ChevronRight,
  Sparkles,
  Shield,
  Activity,
  Compass,
  ArrowUpRight
} from "lucide-react";
import companyData from "@/content/company.json";

export default function About() {
  // State for interactive Philosophy accordion
  const [activePhilosophyTab, setActivePhilosophyTab] = useState(0);

  // State for interactive Core Values list switcher
  const [activeValueTab, setActiveValueTab] = useState(0);

  const philosophyTabs = [
    {
      title: "Our Operational Philosophy",
      subtitle: "Uncompromising Quality & Execution",
      desc: "At Justified Technical, we believe that industrial machinery is only as good as the service backing it. We don't just lease power units; we synchronize entire site environments. Our operation is engineered around absolute system uptime, prompt mobilization, and rigorous technical validation before any machine leaves our depots.",
      metric: "99.98%",
      metricLabel: "Operational Uptime"
    },
    {
      title: "Technical Strength",
      subtitle: "Engineered for Complex Deployments",
      desc: "Our strength lies in technical precision. We design and deliver sophisticated synchronized generator networks, automatic transfer panels (ATS), and custom load distribution grids. Every project is overseen by qualified electrical and mechanical engineers who understand how to optimize fuel curves and load requirements.",
      metric: "1250+ kVA",
      metricLabel: "Single Unit Capacity"
    },
    {
      title: "Execution Power",
      subtitle: "Rapid Mobilization Across UAE",
      desc: "Time is currency on industrial job sites. Our logistics team operates on a 24/7 high-alert deployment cycle. With fully stocked machinery depots strategically placed in Ajman, Dubai, and Abu Dhabi, we can coordinate and execute complex site delivery and setup faster than industry standards.",
      metric: "3 Depot",
      metricLabel: "Strategic Hubs"
    }
  ];

  const coreValuesList = [
    {
      title: "Client Commitment",
      desc: "We place our client partnerships at the core of our operations. We work intimately with project managers and site engineers to customize equipment specifications, ensuring you receive optimized packages matching your specific timeline, budget, and power constraints.",
      highlight: "Custom configurations designed strictly around your site parameters.",
      icon: <HeartHandshake size={22} />
    },
    {
      title: "Reliability",
      desc: "In high-stakes industrial operations, reliability is not a metric—it is the foundation of trust. We maintain our entire generator, welding machine, and compressor fleet to strict manufacturer guidelines, guaranteeing performance in extreme environmental conditions.",
      highlight: "Preventative servicing cycles scheduled around zero site disruption.",
      icon: <ShieldCheck size={22} />
    },
    {
      title: "Continuous Improvement",
      desc: "The energy and machinery sector is constantly evolving. We consistently invest in modern machinery, technical training, and state-of-the-art diagnostic load banks to ensure our fleet brings the highest efficiency and lowest emission profiles directly to your job site.",
      highlight: "Regular fleet upgrades featuring highly advanced synchronization tech.",
      icon: <TrendingUp size={22} />
    },
    {
      title: "Safety First",
      desc: "We hold ourselves to a zero-harm safety culture. From initial cabling setup to high-voltage grid synchronization, we enforce strict compliance, protective barriers, and comprehensive testing protocols to safeguard your workforce and your valuable project site.",
      highlight: "Mandatory multi-point safety testing before power activation.",
      icon: <Shield size={22} />
    },
    {
      title: "Integrity",
      desc: "Transparency defines our operations. We offer straight-up specifications, fair rates, and honest assessments of what equipment your project requires. No hidden fuel surcharges, no unexpected maintenance fees—just transparent, professional partnership.",
      highlight: "Clear, itemized proposals detailing exact capabilities.",
      icon: <Globe size={22} />
    },
    {
      title: "Teamwork",
      desc: "Our technical teams, logistics crews, and engineers work in harmony with your project stakeholders. By operating as an extension of your own crew, we eliminate communication gaps and deliver seamless operational continuity.",
      highlight: "Synchronized collaboration from initial planning to field execution.",
      icon: <Users size={22} />
    },
    {
      title: "Responsible Growth",
      desc: "As we expand our footprint across the Emirates, we build sustainably. We prioritize fuel-efficient engines, proper oil containment measures, and long-lasting mechanical designs that minimize environmental impacts while powering the country's development.",
      highlight: "Eco-conscious fleet optimization matching modern emission rules.",
      icon: <Activity size={22} />
    }
  ];

  const eras = [
    {
      num: "01",
      era: "The Spark",
      years: "2018 – 2020",
      title: "Fleet Foundations",
      desc: "Justified Technical was established in Ajman to bridge a key gap: the demand for highly reliable rental generators and robust site equipment. Starting with a dedicated, high-performance fleet of construction-ready machines, we built a reputation for bulletproof reliability and elite support.",
      bgImage: "/images/about us.jpg.jpeg"
    },
    {
      num: "02",
      era: "The Network",
      years: "2021 – 2023",
      title: "UAE-Wide Expansion",
      desc: "Responding to rapid client growth, we opened operational logistics hubs across Dubai and Abu Dhabi. We scaled our fleet capacity significantly, breaking past the 1,000 kVA benchmark and deploying advanced, multi-unit synchronized power grids on critical infrastructure sites.",
      bgImage: "/images/out-story-2.jpeg"
    },
    {
      num: "03",
      era: "The Peak",
      years: "2024 – Present",
      title: "Engineering Leadership",
      desc: "Today, we stand as a premier provider of heavy machinery and synchronized power setups up to 1,250+ kVA. Offering total turnkey power solutions—incorporating distribution boards, heavy-duty armored cabling, load bank analysis, and around-the-clock technical command.",
      bgImage: "/images/Oil & Gas.jpg.jpeg"
    }
  ];

  return (
    <div className="bg-[#05060A] text-white min-h-screen font-sans antialiased overflow-x-hidden selection:bg-[#3B3C89] selection:text-white">
      
      {/* ═══════════════════════════════════════════════════════
          1. CINEMATIC MINIMALIST HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-24 overflow-hidden border-b border-white/[0.04]">
        {/* Abstract futuristic grid & radial glows */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#05060A] to-[#05060A]" />
        
        {/* Giant glowing background text */}
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14vw] font-black uppercase text-white/[0.01] tracking-widest select-none pointer-events-none text-center leading-none">
          PERFORMANCE
        </div>

        {/* Ambient light orbs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#3B3C89] opacity-[0.08] rounded-full blur-[120px] pointer-events-none animate-pulse duration-[8000ms]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#9FA0CD] opacity-[0.04] rounded-full blur-[160px] pointer-events-none" />

        {/* Low-opacity background image for depth */}
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none">
          <Image
            src="/images/Home Page.jpg.jpeg"
            alt="Cinematic background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter grayscale brightness-50"
          />
        </div>

        <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-[#3B3C89]/10 border border-[#3B3C89]/25 rounded-full px-5 py-2 mb-8 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#3B3C89] animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9FA0CD]">
              UAE Industrial Machinery Leader
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-[clamp(2rem,7vw,5.5rem)] font-black leading-[0.9] tracking-tight uppercase mb-10 max-w-5xl mx-auto"
          >
            Forged in pressure<span className="text-[#3B3C89]">.</span>
            <br />
            Built for <span className="text-[#9FA0CD] bg-clip-text text-transparent bg-gradient-to-r from-[#9FA0CD] via-white to-[#3B3C89]">performance</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/45 text-sm md:text-lg font-medium max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Justified Technical delivers customized, high-capacity machinery rental, load-bank engineering, and turnkey power synchronization built for continuous uptime in the UAE.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#3B3C89] hover:bg-[#5253B3] text-white font-black uppercase tracking-widest text-[9px] py-4 px-10 rounded-xl transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-[#3B3C89]/25 group"
            >
              Consult Engineers <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/equipment-services"
              className="inline-flex items-center gap-2 border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] text-white/70 hover:text-white font-black uppercase tracking-widest text-[9px] py-4 px-10 rounded-xl transition-all backdrop-blur-sm"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>

        {/* Dynamic down-arrow scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-[9px] font-black uppercase tracking-widest">
          <span className="animate-bounce">↓</span>
          <span>Scroll to Explore</span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. FLOATING GLASSMORPHIC STATS BANNER
      ═══════════════════════════════════════════════════════ */}
      <section className="relative -mt-16 z-20 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#111424]/40 border border-white/[0.06] rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          {/* Inner ambient flare */}
          <div className="absolute top-0 left-[20%] w-[200px] h-[2px] bg-gradient-to-r from-transparent via-[#3B3C89]/40 to-transparent" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.05]">
            {[
              { stat: "1250+ kVA", label: "Fleet Capacity", sub: "Synchronized diesel units" },
              { stat: "24/7 Support", label: "Active Dispatch", sub: "Continuous technician response" },
              { stat: "3 Hub Depots", label: "UAE Coverage", sub: "Abu Dhabi, Dubai, Ajman" },
              { stat: "Since 2018", label: "Industry Standard", sub: "Trusted technical partner" }
            ].map((item, idx) => (
              <div key={idx} className={`flex flex-col text-left pt-6 lg:pt-0 ${idx > 0 ? "lg:pl-8" : ""} ${idx === 1 || idx === 3 ? "pl-4 md:pl-0" : ""}`}>
                <span className="text-2xl md:text-4xl font-sans font-black text-white leading-none mb-2">
                  {item.stat}
                </span>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#9FA0CD] mb-1">
                  {item.label}
                </span>
                <span className="text-[9px] font-semibold text-white/30">
                  {item.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3. PHILOSOPHY INTERACTIVE ACCORDION
      ═══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#05060A] relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Brand statement and image */}
            <div className="lg:col-span-5 text-left flex flex-col gap-8">
              <div>
                <span className="text-[#9FA0CD] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs block mb-4">
                  Built on Precision
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase tracking-tight">
                  A new breed <br />
                  of <span className="text-[#9FA0CD]">strength</span>
                </h2>
              </div>

              <blockquote className="border-l-2 border-[#3B3C89] pl-6 py-2 text-white/45 text-sm md:text-base font-semibold leading-relaxed italic">
                &ldquo;We don&apos;t just supply heavy machinery. We design power, synchronize networks, and support operations so you face zero downtime.&rdquo;
              </blockquote>

              {/* Decorative asset block */}
              <div className="relative h-[280px] w-full rounded-2xl overflow-hidden border border-white/[0.05] shadow-2xl">
                <Image
                  src="/images/10.jpg.jpeg"
                  alt="Industrial power setup"
                  fill
                  sizes="450px"
                  className="object-cover filter brightness-[0.75] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060A] via-transparent to-transparent" />
                <div className="absolute top-4 right-4 bg-[#05060A]/80 border border-white/10 rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-widest text-emerald-400 flex items-center gap-1.5 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  Field Calibrated
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Accordion */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {philosophyTabs.map((tab, idx) => {
                const isOpen = activePhilosophyTab === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-500 overflow-hidden ${
                      isOpen
                        ? "bg-[#111424]/60 border-[#3B3C89]/30 shadow-xl"
                        : "bg-[#111424]/20 border-white/[0.03] hover:border-white/[0.08]"
                    }`}
                  >
                    <button
                      onClick={() => setActivePhilosophyTab(idx)}
                      className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-6 cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <span className={`text-sm font-black font-sans leading-none ${
                          isOpen ? "text-[#9FA0CD]" : "text-white/20"
                        }`}>
                          0{idx + 1}
                        </span>
                        <h3 className="text-white font-black text-sm md:text-lg uppercase tracking-tight">
                          {tab.title}
                        </h3>
                      </div>
                      <span className={`text-xs md:text-sm font-black transition-transform duration-500 ${
                        isOpen ? "rotate-90 text-[#3B3C89]" : "text-white/20"
                      }`}>
                        ➔
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                          <div className="px-6 md:px-8 pb-8 border-t border-white/[0.03] pt-6">
                            <span className="text-[#9FA0CD] font-black uppercase tracking-widest text-[9px] block mb-3">
                              {tab.subtitle}
                            </span>
                            <p className="text-white/45 text-xs md:text-sm font-semibold leading-relaxed mb-6">
                              {tab.desc}
                            </p>
                            
                            <div className="inline-flex items-center gap-6 bg-[#05060A]/60 border border-white/[0.04] p-4 rounded-xl">
                              <span className="text-2xl font-black text-white leading-none">
                                {tab.metric}
                              </span>
                              <div className="w-[1px] h-6 bg-white/[0.05]" />
                              <span className="text-[9px] font-black uppercase tracking-widest text-white/40">
                                {tab.metricLabel}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          4. EPOCH MILESTONES JOURNEY GRID
      ═══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#0A0C14] border-y border-white/[0.04] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        
        <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#9FA0CD] font-black uppercase tracking-[0.45em] text-[10px] md:text-xs block mb-4">
              Chronological Epochs
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight max-w-3xl mx-auto leading-tight">
              Our growth <br />
              milestone <span className="text-[#9FA0CD]">eras</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {eras.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl border border-white/[0.04] bg-[#111424]/30 hover:bg-[#111424]/60 p-8 flex flex-col justify-between min-h-[480px] overflow-hidden transition-all duration-500 hover:scale-[1.01]"
              >
                {/* Micro ambient spotlight on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-[80px] bg-gradient-to-br from-[#3B3C89]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

                {/* Grid image frame overlay inside cards */}
                <div className="absolute inset-0 -z-10 opacity-[0.02] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none">
                  <Image
                    src={item.bgImage}
                    alt={item.era}
                    fill
                    sizes="400px"
                    className="object-cover filter grayscale contrast-[1.2]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C14] via-transparent to-transparent" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[#3B3C89] font-black font-sans text-5xl leading-none opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                      {item.num}
                    </span>
                    <span className="border border-[#3B3C89]/30 bg-[#3B3C89]/10 rounded-full px-4 py-1 text-[9px] font-black uppercase tracking-widest text-[#9FA0CD]">
                      {item.years}
                    </span>
                  </div>

                  <span className="text-white/30 text-[9px] font-black uppercase tracking-[0.2em] block mb-2">
                    {item.era}
                  </span>
                  <h3 className="text-white font-black text-xl md:text-2xl uppercase tracking-tight mb-4">
                    {item.title}
                  </h3>
                  <p className="text-white/45 text-xs md:text-sm font-semibold leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.03] flex items-center justify-between">
                  <span className="text-[8px] font-black uppercase tracking-widest text-[#9FA0CD]/50">
                    Justified History Block
                  </span>
                  <span className="text-white/10 group-hover:text-[#3B3C89] group-hover:translate-x-1 transition-all">
                    ➔
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          5. DYNAMIC CORE VALUES SWITCHER
      ═══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#05060A] relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
            <div className="text-left">
              <span className="text-[#9FA0CD] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs block mb-4">
                Internal Mandates
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
                Our core <span className="text-[#9FA0CD]">principles</span>
              </h2>
            </div>
            <p className="text-white/35 text-xs md:text-sm font-semibold max-w-md leading-relaxed">
              Seven distinct directives built into our recruitment, technical preparation, fleet procurement, and on-site operation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Interactive Menu List */}
            <div className="lg:col-span-5 flex flex-col gap-2">
              {coreValuesList.map((val, idx) => {
                const isActive = activeValueTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveValueTab(idx)}
                    className={`w-full text-left py-4 px-6 rounded-xl border flex items-center justify-between gap-4 transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-[#3B3C89] border-transparent text-white shadow-lg shadow-[#3B3C89]/15"
                        : "bg-[#111424]/40 border-white/[0.04] text-white/50 hover:text-white/80 hover:border-white/[0.08]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-[10px] font-black ${isActive ? "text-white/60" : "text-[#3B3C89]"}`}>
                        0{idx + 1}
                      </span>
                      <span className="font-black text-xs md:text-sm uppercase tracking-tight">
                        {val.title}
                      </span>
                    </div>
                    <ArrowUpRight size={13} className={`transition-transform duration-300 ${isActive ? "rotate-45 text-white" : "opacity-30"}`} />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Transition Detail Card */}
            <div className="lg:col-span-7">
              <div className="h-full bg-[#111424]/40 border border-white/[0.06] rounded-3xl p-8 md:p-12 relative flex flex-col justify-between overflow-hidden shadow-2xl min-h-[400px]">
                {/* Floating graphic element */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#3B3C89] opacity-[0.03] rounded-full blur-[80px]" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeValueTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-8"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#3B3C89]/15 border border-[#3B3C89]/30 text-[#9FA0CD] flex items-center justify-center">
                        {coreValuesList[activeValueTab].icon}
                      </div>
                      <div>
                        <span className="text-[#3B3C89] text-[10px] font-black uppercase tracking-widest">
                          Operational Value 0{activeValueTab + 1}
                        </span>
                        <h3 className="text-white font-black text-xl md:text-2xl uppercase tracking-tight mt-1">
                          {coreValuesList[activeValueTab].title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-white/45 text-sm md:text-base font-semibold leading-relaxed">
                      {coreValuesList[activeValueTab].desc}
                    </p>

                    <div className="bg-[#05060A]/80 border border-white/[0.04] p-5 rounded-2xl mt-4">
                      <span className="text-[#9FA0CD] text-[9px] font-black uppercase tracking-widest block mb-2">
                        Guaranteed Execution Standard
                      </span>
                      <span className="text-white font-bold text-xs md:text-sm">
                        &ldquo;{coreValuesList[activeValueTab].highlight}&rdquo;
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 pt-6 border-t border-white/[0.03] flex justify-between items-center text-[8px] font-black uppercase tracking-widest text-white/20">
                  <span>Field Deployment Integrity System</span>
                  <span>Certified Operations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          6. GLOWING STANDARDS GRID
      ═══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#0A0C14] border-t border-white/[0.04] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/our-standards.jpeg"
            alt="Standards outline background"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-[0.06] filter grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-[#0A0C14]/90" />
        </div>

        <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
          <div className="text-left mb-20">
            <span className="text-[#9FA0CD] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs block mb-4">
              Non-Negotiable Mandates
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight">
              Safety & Quality <br />
              <span className="text-[#9FA0CD]">Standards</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "Rigorous Fleet Audits",
                desc: "We perform full electrical synchronization and physical pressure checks on all power assemblies and machinery prior to site dispatch, ensuring immediate peak operation.",
                icon: <Activity size={22} className="text-[#9FA0CD]" />
              },
              {
                num: "02",
                title: "Zero-Harm Safety Protocol",
                desc: "Every temporary installation matches high-voltage protective protocols. We coordinate ATS setup and power block routing to protect your teams and prevent site damage.",
                icon: <ShieldCheck size={22} className="text-emerald-400" />
              },
              {
                num: "03",
                title: "Prompt Command Deployments",
                desc: "We guarantee field technicians are on call 24 hours a day, 7 days a week, providing remote oversight and rapid on-site troubleshooting wherever needed across the UAE.",
                icon: <Clock size={22} className="text-[#3B3C89]" />
              },
              {
                num: "04",
                title: "Clean Mechanical Operations",
                desc: "Our machinery setups utilize localized spill mitigation containment and efficient generator fuel systems to respect the environment while keeping major sites energized.",
                icon: <Compass size={22} className="text-amber-400" />
              }
            ].map((std, idx) => (
              <div
                key={idx}
                className="group relative bg-[#111424]/40 border border-white/[0.04] hover:border-[#3B3C89]/25 rounded-3xl p-8 backdrop-blur-md overflow-hidden transition-all duration-300"
              >
                {/* Card glow effect */}
                <div className="absolute -inset-px bg-gradient-to-br from-[#3B3C89]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                <div className="flex justify-between items-start gap-4 mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#05060A]/80 border border-white/[0.05] flex items-center justify-center">
                    {std.icon}
                  </div>
                  <span className="text-3xl font-black text-[#3B3C89]/25 tabular-nums leading-none">
                    {std.num}
                  </span>
                </div>

                <div className="relative z-10">
                  <h3 className="text-white font-black text-lg md:text-xl uppercase tracking-tight mb-3">
                    {std.title}
                  </h3>
                  <p className="text-white/40 text-xs md:text-sm font-semibold leading-relaxed">
                    {std.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          7. DUAL ACTION SPLIT-SCREEN CTA
      ═══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#05060A] relative overflow-hidden">
        {/* Glow orbs */}
        <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] bg-[#3B3C89] opacity-[0.03] rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] bg-[#3B3C89] opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Left Card: Specialized Engineering Solutions */}
            <div className="bg-[#111424]/40 border border-white/[0.05] rounded-3xl p-8 md:p-14 relative overflow-hidden flex flex-col justify-between min-h-[420px] transition-all duration-300 hover:border-[#3B3C89]/25 group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3B3C89]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
              
              <div>
                <span className="text-[#9FA0CD] font-black uppercase tracking-[0.3em] text-[10px] block mb-6">
                  Engineered Power
                </span>
                <h3 className="text-white font-black text-2xl md:text-3xl uppercase tracking-tight leading-tight mb-4">
                  Synchronized setups <br />
                  and engineering support
                </h3>
                <p className="text-white/40 text-xs md:text-sm font-semibold leading-relaxed max-w-md">
                  Consult with our specialized electrical and mechanical engineers for grid synchronization, load tests, site cabling, and rapid deployments.
                </p>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center justify-between pt-6 border-t border-white/[0.03]">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#9FA0CD]">
                  Complete technical deployment
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#3B3C89] hover:bg-[#5253B3] text-white font-black uppercase tracking-widest text-[9px] py-4 px-8 rounded-xl transition-all w-full sm:w-auto justify-center shadow-lg shadow-[#3B3C89]/15 group/btn"
                >
                  Consult Team <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Card: Fleet Rental Inquiry */}
            <div className="bg-gradient-to-b from-[#111424]/80 to-[#111424]/20 border border-white/[0.05] rounded-3xl p-8 md:p-14 relative overflow-hidden flex flex-col justify-between min-h-[420px] transition-all duration-300 hover:border-[#9FA0CD]/25 group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#9FA0CD]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
              
              <div>
                <span className="text-amber-400 font-black uppercase tracking-[0.3em] text-[10px] block mb-6">
                  Immediate Dispatch
                </span>
                <h3 className="text-white font-black text-2xl md:text-3xl uppercase tracking-tight leading-tight mb-4">
                  Rent high-capacity <br />
                  generators & machinery
                </h3>
                <p className="text-white/40 text-xs md:text-sm font-semibold leading-relaxed max-w-md">
                  Browse our high-performance rental fleet including diesel generators, industrial air compressors, welding units, and advanced accessories.
                </p>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center justify-between pt-6 border-t border-white/[0.03]">
                <span className="text-[9px] font-black uppercase tracking-widest text-amber-400">
                  Over 1,250 kVA single unit capacity
                </span>
                <Link
                  href="/equipment-services"
                  className="inline-flex items-center gap-2 border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] text-white font-black uppercase tracking-widest text-[9px] py-4 px-8 rounded-xl transition-all w-full sm:w-auto justify-center group/btn"
                >
                  Browse Fleet <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
