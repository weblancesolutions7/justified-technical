"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Zap,
  Wrench,
  Building,
  Sliders,
  Send,
  PhoneCall,
  ShieldCheck
} from "lucide-react";
import companyData from "@/content/company.json";

function ContactContent() {
  const searchParams = useSearchParams();
  const kvaParam = searchParams.get("kva");
  const sectorParam = searchParams.get("sector");

  const [activeCategory, setActiveCategory] = useState<"rental" | "technical" | "general">("rental");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    kva: "",
    sector: "construction",
    urgency: "standard",
    details: "",
    companyName: "",
    equipmentModel: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfigSummary, setShowConfigSummary] = useState(false);

  // Sync parameters from URL load estimator
  useEffect(() => {
    if (kvaParam || sectorParam) {
      setActiveCategory("rental");
      setShowConfigSummary(true);
      setFormData(prev => ({
        ...prev,
        kva: kvaParam || "",
        sector: sectorParam || "construction"
      }));
    }
  }, [kvaParam, sectorParam]);

  const getTechnicalAdvice = () => {
    const kvaVal = parseInt(formData.kva || "0", 10);
    const sectorVal = formData.sector;

    if (sectorVal === "oilgas") {
      return "Offshore package with integrated spark arrestor, Chalwyn valve, and double-walled skid fuel tanks recommended.";
    }
    if (kvaVal >= 800) {
      return `Synchronized parallel generator array recommended for redundant ${formData.kva} kVA site configuration.`;
    }
    if (sectorVal === "events" || sectorVal === "hospitality") {
      return "Super-silent diesel enclosure with specialized acoustic baffling under 65 dBA at 7m recommended.";
    }
    return "Heavy-duty industrial diesel assembly with standard automatic transfer switches (ATS) recommended.";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      kva: "",
      sector: "construction",
      urgency: "standard",
      details: "",
      companyName: "",
      equipmentModel: ""
    });
    setIsSubmitted(false);
    setShowConfigSummary(false);
  };

  return (
    <div className="bg-[#05060A] text-white min-h-screen font-sans antialiased overflow-x-hidden selection:bg-[#3B3C89] selection:text-white">
      
      {/* ═══════════════════════════════════════════════════════
          1. CINEMATIC HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-36 pb-20 overflow-hidden border-b border-white/[0.04]">
        {/* Dynamic mesh blueprint grids in background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#05060A] to-[#05060A]" />
        
        {/* Ambient mesh flare orbs */}
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#3B3C89] opacity-[0.09] rounded-full blur-[140px] pointer-events-none animate-pulse duration-[10000ms]" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#9FA0CD] opacity-[0.05] rounded-full blur-[140px] pointer-events-none" />

        {/* Low-opacity background image for depth */}
        <div className="absolute inset-0 opacity-[0.10] pointer-events-none">
          <Image
            src="/images/contact us background.jpg.jpeg"
            alt="Operations command grid background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter grayscale brightness-50"
          />
        </div>

        <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10 text-center">
          {/* Pulsing UAE coverage status banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 bg-[#3B3C89]/10 border border-[#3B3C89]/25 rounded-full px-5 py-2.5 mb-8 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#9FA0CD] flex items-center gap-1.5 text-center">
              24/7 Operations Coverage Enabled: <span className="text-white">Sharjah • Dubai • Abu Dhabi • Northern Emirates</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-[clamp(1.8rem,6vw,4.5rem)] font-black leading-[1.0] tracking-tight uppercase mb-8 max-w-4xl mx-auto"
          >
            Connect With Our <br />
            <span className="text-[#9FA0CD] bg-clip-text text-transparent bg-gradient-to-r from-[#9FA0CD] via-white to-[#3B3C89]">Operations Command</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/45 text-sm md:text-base font-semibold max-w-2xl mx-auto leading-relaxed"
          >
            Consult with our heavy machinery coordinators, dispatch engineers, and electrical power sync teams for turn-key logistics and emergency support across the UAE.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. 24/7 BREAKDOWN HOTLINE GATEWAY
      ═══════════════════════════════════════════════════════ */}
      <section className="relative -mt-16 z-20 px-6 md:px-8 max-w-5xl mx-auto">
        <div className="bg-[#111424]/90 border border-white/[0.06] rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
          {/* Inner ambient flare line */}
          <div className="absolute top-0 left-[15%] w-[30%] h-[2px] bg-gradient-to-r from-transparent via-[#3B3C89]/60 to-transparent" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/25 flex items-center justify-center shrink-0">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                </span>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 px-2 py-0.5 rounded">
                    Critical Alert
                  </span>
                  <span className="text-xs font-bold text-[#9FA0CD]">120 Min Mobilization SLA</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mt-1.5 font-sans">
                  24/7 EMERGENCY DISPATCH GATEWAY
                </h3>
                <p className="text-white/40 text-xs font-semibold mt-1">
                  Experiencing a power failure or machinery breakdown? Connect instantly with our standby technicians.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
              <a
                href={`tel:${companyData.contact.sales.split(",")[0].trim()}`}
                className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-[10px] py-4 px-8 rounded-xl transition-all shadow-xl shadow-red-600/15 group-hover:scale-[1.02] active:scale-95 text-center shrink-0"
              >
                <PhoneCall size={14} className="animate-pulse" />
                Call Emergency Operations
              </a>
              <div className="bg-[#05060A]/60 border border-white/[0.04] p-3 rounded-xl flex items-center gap-3 text-left">
                <Clock size={16} className="text-white/45" />
                <div>
                  <span className="text-[9px] font-black uppercase tracking-wider text-white/30 block leading-none">
                    Average Response
                  </span>
                  <span className="text-xs font-black text-emerald-400 font-sans">
                    Under 15 Minutes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3. SMART CONTACT FORM (CENTERED LAYOUT)
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 max-w-4xl mx-auto px-6 md:px-8">
        <div className="bg-[#111424]/40 border border-white/[0.05] rounded-3xl p-6 md:p-10 backdrop-blur-md relative">
          <div className="absolute top-0 right-[25%] w-[150px] h-[1px] bg-gradient-to-r from-transparent via-[#9FA0CD]/30 to-transparent" />
          
          <div className="mb-8 text-left">
            <span className="text-[#9FA0CD] font-black uppercase tracking-widest text-[10px] block mb-2">
              Secure Site Mobilization
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
              OPERATIONAL DISPATCH INQUIRY
            </h2>
            <p className="text-white/40 text-xs font-semibold mt-1">
              Configure your requirements below to instantly route to our specialized coordinator.
            </p>
          </div>

          {/* Smart Category Switcher Tabs */}
          <div className="grid grid-cols-3 gap-2 bg-[#05060A]/80 border border-white/[0.04] p-1.5 rounded-2xl mb-8">
            {[
              { id: "rental", label: "Rental Inquiry", icon: <Zap size={14} /> },
              { id: "technical", label: "Technical Support", icon: <Wrench size={14} /> },
              { id: "general", label: "General Enquiry", icon: <Building size={14} /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveCategory(tab.id as any);
                  if (isSubmitted) setIsSubmitted(false);
                }}
                className={`flex flex-col sm:flex-row items-center justify-center gap-2 py-3 px-2 rounded-xl text-center font-black uppercase tracking-widest text-[9px] sm:text-[10px] transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? "bg-[#3B3C89] text-white shadow-md shadow-[#3B3C89]/20"
                    : "text-white/40 hover:text-white/70 hover:bg-white/[0.02]"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success-form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center flex flex-col items-center gap-6 my-8 text-left"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                  <ShieldCheck size={32} />
                </div>
                <div className="text-center">
                  <h3 className="text-white font-black text-xl uppercase tracking-wider font-sans">
                    Request Authenticated & Routed
                  </h3>
                  <p className="text-white/60 text-xs font-semibold mt-2 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-bold">{formData.name}</span>. Your {activeCategory} payload has been received and routed directly to our Dubai Operations Command.
                  </p>
                </div>
                <div className="w-full bg-[#05060A]/40 border border-white/[0.04] p-4 rounded-xl text-left text-xs space-y-2 max-w-md mx-auto">
                  <div className="flex justify-between">
                    <span className="text-white/40 font-semibold">Priority Status:</span>
                    <span className={`font-black uppercase tracking-widest ${formData.urgency === "emergency" ? "text-red-400 animate-pulse" : "text-[#9FA0CD]"}`}>
                      {formData.urgency === "emergency" ? "CRITICAL EMERGENCY" : "STANDARD ROUTING"}
                    </span>
                  </div>
                  {formData.kva && (
                    <div className="flex justify-between">
                      <span className="text-white/40 font-semibold">Power Config:</span>
                      <span className="text-white font-black">{formData.kva} kVA ({formData.sector})</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-white/40 font-semibold">Expected Call Back:</span>
                    <span className="text-emerald-400 font-black uppercase tracking-wider">
                      {formData.urgency === "emergency" ? "Within 15 Mins" : "Within 2 Hours"}
                    </span>
                  </div>
                </div>
                <button
                  onClick={resetForm}
                  className="inline-flex items-center gap-2 border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] text-white/70 hover:text-white font-black uppercase tracking-widest text-[9px] py-3.5 px-8 rounded-xl transition-all mx-auto"
                >
                  Submit Another Dispatch Request
                </button>
              </motion.div>
            ) : (
              <motion.form
                key={activeCategory}
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-left"
              >
                {/* Glassmorphic URL-bound Estimator banner */}
                {showConfigSummary && (formData.kva || formData.sector) && (
                  <div className="bg-[#3B3C89]/10 border border-[#3B3C89]/30 rounded-2xl p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#3B3C89]/10 rounded-full blur-2xl pointer-events-none" />
                    <button
                      type="button"
                      onClick={() => setShowConfigSummary(false)}
                      className="absolute top-3 right-3 text-white/45 hover:text-white text-xs font-black"
                    >
                      ✕
                    </button>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-xl bg-[#3B3C89]/20 border border-[#3B3C89]/40 flex items-center justify-center text-[#9FA0CD] shrink-0 mt-0.5">
                        <Sliders size={16} />
                      </div>
                      <div>
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#9FA0CD] block">
                          CONNECTED CONFIGURATION DETECTED
                        </span>
                        <span className="text-white font-black text-sm uppercase tracking-wide mt-1 block">
                          Estimated Power: {formData.kva ? `${formData.kva} kVA` : "Not Configured"} • Sector: {formData.sector}
                        </span>
                        <p className="text-white/45 text-[10px] font-semibold mt-2 border-t border-white/[0.04] pt-2">
                          <span className="text-[#9FA0CD] font-bold">Engineering Advice:</span> {getTechnicalAdvice()}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Core fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-[10px] font-black uppercase tracking-widest mb-2 opacity-50">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full bg-[#05060A]/60 border border-white/[0.08] focus:border-[#3B3C89] rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-[#3B3C89] transition-all text-sm font-semibold"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-white text-[10px] font-black uppercase tracking-widest mb-2 opacity-50">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. john@company.com"
                      className="w-full bg-[#05060A]/60 border border-white/[0.08] focus:border-[#3B3C89] rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-[#3B3C89] transition-all text-sm font-semibold"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-[10px] font-black uppercase tracking-widest mb-2 opacity-50">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +971 50 123 4567"
                      className="w-full bg-[#05060A]/60 border border-white/[0.08] focus:border-[#3B3C89] rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-[#3B3C89] transition-all text-sm font-semibold"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-white text-[10px] font-black uppercase tracking-widest mb-2 opacity-50">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      placeholder="e.g. Al Naboodah Contracting"
                      className="w-full bg-[#05060A]/60 border border-white/[0.08] focus:border-[#3B3C89] rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-[#3B3C89] transition-all text-sm font-semibold"
                      value={formData.companyName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Dynamic Category Specific Fields */}
                {activeCategory === "rental" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2"
                  >
                    <div>
                      <label className="block text-white text-[10px] font-black uppercase tracking-widest mb-2 opacity-50">
                        Target Power Capacity (kVA)
                      </label>
                      <input
                        type="number"
                        name="kva"
                        placeholder="e.g. 500"
                        className="w-full bg-[#05060A]/60 border border-white/[0.08] focus:border-[#3B3C89] rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-[#3B3C89] transition-all text-sm font-semibold"
                        value={formData.kva}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="block text-white text-[10px] font-black uppercase tracking-widest mb-2 opacity-50">
                        Industrial Sector
                      </label>
                      <select
                        name="sector"
                        className="w-full bg-[#05060A] border border-white/[0.08] focus:border-[#3B3C89] rounded-xl px-5 py-4 text-white/70 focus:outline-none focus:ring-1 focus:ring-[#3B3C89] transition-all text-sm font-semibold [&>option]:bg-[#05060A] [&>option]:text-white"
                        value={formData.sector}
                        onChange={handleInputChange}
                      >
                        <option value="construction">Civil Construction</option>
                        <option value="manufacturing">Manufacturing & Heavy Industry</option>
                        <option value="events">Mega Events & Entertainment</option>
                        <option value="oilgas">Oil & Gas (Offshore/Onshore)</option>
                        <option value="telecom">Telecommunications</option>
                        <option value="utility">Utility & Municipal Services</option>
                        <option value="marine">Marine & Shipyards</option>
                        <option value="other">Other Industrial Sectors</option>
                      </select>
                    </div>
                  </motion.div>
                )}

                {activeCategory === "technical" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2"
                  >
                    <div>
                      <label className="block text-white text-[10px] font-black uppercase tracking-widest mb-2 opacity-50">
                        Equipment / Machinery Model
                      </label>
                      <input
                        type="text"
                        name="equipmentModel"
                        placeholder="e.g. Cummins 500kVA Generator"
                        className="w-full bg-[#05060A]/60 border border-white/[0.08] focus:border-[#3B3C89] rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-[#3B3C89] transition-all text-sm font-semibold"
                        value={formData.equipmentModel}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="block text-white text-[10px] font-black uppercase tracking-widest mb-2 opacity-50">
                        Technical Dispatch Urgency
                      </label>
                      <select
                        name="urgency"
                        className="w-full bg-[#05060A] border border-white/[0.08] focus:border-[#3B3C89] rounded-xl px-5 py-4 text-white/70 focus:outline-none focus:ring-1 focus:ring-[#3B3C89] transition-all text-sm font-semibold [&>option]:bg-[#05060A] [&>option]:text-white"
                        value={formData.urgency}
                        onChange={handleInputChange}
                      >
                        <option value="standard">Standard Support Call (2 Hours)</option>
                        <option value="emergency">EMERGENCY SYSTEM BREAKDOWN (15 Mins)</option>
                      </select>
                    </div>
                  </motion.div>
                )}

                {/* Message Detail field */}
                <div>
                  <label className="block text-white text-[10px] font-black uppercase tracking-widest mb-2 opacity-50">
                    {activeCategory === "rental"
                      ? "Specific Mobilization Requirements *"
                      : activeCategory === "technical"
                      ? "Details of Technical Fault / Site Setup Requirements *"
                      : "Detailed Inquiry Requirements *"}
                  </label>
                  <textarea
                    name="details"
                    required
                    rows={5}
                    placeholder={
                      activeCategory === "rental"
                        ? "Please specify cable length, duration, auxiliary fuel tank requirements..."
                        : activeCategory === "technical"
                        ? "Please describe the fault codes, electrical symptoms, or specialized site synchronization configuration..."
                        : "Describe your general machinery, pricing, or strategic partnership requirements..."
                    }
                    className="w-full bg-[#05060A]/60 border border-white/[0.08] focus:border-[#3B3C89] rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-[#3B3C89] transition-all resize-none text-sm font-semibold"
                    value={formData.details}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#3B3C89] hover:bg-[#5253B3] text-white py-4.5 rounded-xl font-black text-[10px] transition-all hover:scale-[1.01] active:scale-95 uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-[#3B3C89]/20"
                >
                  <Send size={12} />
                  <span>Submit Dispatch Request</span>
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          4. DEPARTMENTAL GRID CARDS
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#0A0C14] border-y border-white/[0.04] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        
        <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#9FA0CD] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs block mb-3">
              Specialized Routing
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">
              CORPORATE DEPARTMENTS & CHANNELS
            </h2>
            <p className="text-white/40 text-xs font-semibold max-w-lg mx-auto mt-2 leading-relaxed">
              Connect directly with our specialized teams for quotes, field support, and financial coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sales Department */}
            <div className="bg-[#111424]/40 border border-white/[0.04] hover:border-[#3B3C89]/20 rounded-3xl p-8 flex flex-col justify-between min-h-[300px] overflow-hidden transition-all duration-300 hover:scale-[1.01] relative group">
              <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-[60px] bg-gradient-to-br from-[#3B3C89]/15 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
              
              <div>
                <div className="flex justify-between items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#3B3C89]/10 border border-[#3B3C89]/25 flex items-center justify-center text-[#9FA0CD]">
                    <Zap size={20} />
                  </div>
                  <span className="border border-emerald-500/20 bg-emerald-500/10 rounded px-2 py-0.5 text-[8px] font-black uppercase tracking-widest text-emerald-400">
                    SLA: 15 Mins
                  </span>
                </div>
                
                <span className="text-white/35 text-[9px] font-black uppercase tracking-widest block mb-1">
                  Sales & Rentals
                </span>
                <h3 className="text-white font-black text-lg uppercase tracking-tight font-sans">
                  ENGINEERED ESTIMATION
                </h3>
                <p className="text-white/40 text-xs font-semibold mt-2.5 leading-relaxed">
                  Request detailed configuration proposals, rates sheets, and project timeline consultations for heavy machinery.
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/[0.03] space-y-2 text-xs font-semibold">
                <div className="flex items-center gap-3">
                  <Phone size={14} className="text-[#9FA0CD]" />
                  <span className="text-white/60">{companyData.contact.sales}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={14} className="text-[#9FA0CD]" />
                  <a href={`mailto:${companyData.contact.email}`} className="text-white/60 hover:text-white transition-colors">{companyData.contact.email}</a>
                </div>
              </div>
            </div>

            {/* Operations Department */}
            <div className="bg-[#111424]/40 border border-white/[0.04] hover:border-[#3B3C89]/20 rounded-3xl p-8 flex flex-col justify-between min-h-[300px] overflow-hidden transition-all duration-300 hover:scale-[1.01] relative group">
              <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-[60px] bg-gradient-to-br from-[#3B3C89]/15 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
              
              <div>
                <div className="flex justify-between items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#3B3C89]/10 border border-[#3B3C89]/25 flex items-center justify-center text-[#9FA0CD]">
                    <Wrench size={20} />
                  </div>
                  <span className="border border-red-500/20 bg-red-500/10 rounded px-2 py-0.5 text-[8px] font-black uppercase tracking-widest text-red-400">
                    SLA: 24/7 ACTIVE
                  </span>
                </div>
                
                <span className="text-white/35 text-[9px] font-black uppercase tracking-widest block mb-1">
                  Logistics & Support
                </span>
                <h3 className="text-white font-black text-lg uppercase tracking-tight font-sans">
                  TECHNICAL COMMAND
                </h3>
                <p className="text-white/40 text-xs font-semibold mt-2.5 leading-relaxed">
                  Coordinate immediate site mobilizations, refueling logs, preventive scheduling, and mechanical field support.
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/[0.03] space-y-2 text-xs font-semibold">
                <div className="flex items-center gap-3">
                  <Phone size={14} className="text-[#9FA0CD]" />
                  <span className="text-white/60">{companyData.contact.tel}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={14} className="text-[#9FA0CD]" />
                  <a href={`mailto:${companyData.contact.rentalEmail}`} className="text-white/60 hover:text-white transition-colors">{companyData.contact.rentalEmail}</a>
                </div>
              </div>
            </div>

            {/* Accounts Department */}
            <div className="bg-[#111424]/40 border border-white/[0.04] hover:border-[#3B3C89]/20 rounded-3xl p-8 flex flex-col justify-between min-h-[300px] overflow-hidden transition-all duration-300 hover:scale-[1.01] relative group">
              <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-[60px] bg-gradient-to-br from-[#3B3C89]/15 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
              
              <div>
                <div className="flex justify-between items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#3B3C89]/10 border border-[#3B3C89]/25 flex items-center justify-center text-[#9FA0CD]">
                    <Building size={20} />
                  </div>
                  <span className="border border-[#9FA0CD]/20 bg-[#9FA0CD]/10 rounded px-2 py-0.5 text-[8px] font-black uppercase tracking-widest text-[#9FA0CD]">
                    SLA: 2 Hours
                  </span>
                </div>
                
                <span className="text-white/35 text-[9px] font-black uppercase tracking-widest block mb-1">
                  Billing & Finance
                </span>
                <h3 className="text-white font-black text-lg uppercase tracking-tight font-sans">
                  ACCOUNTS & COMPLIANCE
                </h3>
                <p className="text-white/40 text-xs font-semibold mt-2.5 leading-relaxed">
                  Manage vendor registrations, credit contracts, tax invoices, and financial compliance certifications.
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/[0.03] space-y-2 text-xs font-semibold">
                <div className="flex items-center gap-3">
                  <Phone size={14} className="text-[#9FA0CD]" />
                  <span className="text-white/60">{companyData.contact.accounts}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={14} className="text-[#9FA0CD]" />
                  <a href={`mailto:${companyData.contact.email}`} className="text-white/60 hover:text-white transition-colors">{companyData.contact.email}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#05060A] text-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-t-2 border-r-2 border-[#3B3C89] animate-spin" />
          <span className="text-[10px] font-black uppercase tracking-widest text-[#9FA0CD] animate-pulse">
            Loading Operations Gateway...
          </span>
        </div>
      </div>
    }>
      <ContactContent />
    </Suspense>
  );
}
