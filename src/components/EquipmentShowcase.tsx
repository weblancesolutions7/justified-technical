"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Industry } from "@/content/industries";
import { ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { type } from "@/lib/typography";

export default function EquipmentShowcase({ industries }: { industries: Industry[] }) {
  const [activeId, setActiveId] = useState(industries[0].id);

  const activeIndustry = industries.find((i) => i.id === activeId) || industries[0];

  return (
    <div className="max-w-[1400px] mx-auto py-12 text-left">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className={`text-[#9FA0CD] ${type.eyebrow} tracking-[0.4em] block mb-4`}>
            Custom Industrial Sync
          </span>
          <h2 className={`${type.sectionTitle} text-white`}>
            Sector-Specific <br />
            <span className="text-[#9FA0CD]">Power & Fleet Solutions</span>
          </h2>
        </div>
        <p className={`text-white/50 ${type.body} max-w-md`}>
          We engineer custom equipment sync profiles tailored specifically to the compliance standards, safety requirements, and operational capacities of each UAE core sector.
        </p>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* Left Column: Asymmetric Vertical Navigation Tabs (4 cols) */}
        <div className="lg:col-span-3 flex flex-row overflow-x-auto gap-3 pb-3 scrollbar-hide lg:flex-col lg:overflow-visible lg:pb-0 justify-start lg:justify-center">
          {industries.map((ind) => {
            const isActive = ind.id === activeId;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveId(ind.id)}
                className={`relative flex-shrink-0 w-[240px] sm:w-[280px] lg:w-full text-left px-6 py-5 rounded-2xl transition-all duration-300 border flex flex-col justify-center cursor-pointer ${
                  isActive
                    ? "bg-[#3B3C89] border-transparent shadow-lg shadow-[#3B3C89]/20"
                    : "bg-[#111424]/40 border-white/5 hover:border-[#3B3C89]/30 hover:bg-[#111424]/80"
                }`}
              >
                <div className="flex justify-between items-center w-full">
                  <span className={`${type.cardTitle} text-white`}>
                    {ind.title}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="active-dot"
                      className="w-1.5 h-1.5 rounded-full bg-[#9FA0CD]"
                    />
                  )}
                </div>
                <span
                  className={`${type.micro} uppercase tracking-widest mt-1 ${
                    isActive ? "text-[#9FA0CD]" : "text-white/30"
                  }`}
                >
                  {ind.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Center Column: Detailed Specs & Capability Board (5 cols) */}
        <div className="lg:col-span-5 bg-[#111424]/40 border border-white/10 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden min-h-[450px]">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#3B3C89]/5 rounded-full blur-xl pointer-events-none" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col h-full justify-between"
            >
              <div>
                {/* Sector Spec Headers */}
                <div className="flex items-center gap-2 mb-6">
                  <span className={`bg-[#3B3C89]/30 border border-[#3B3C89]/40 text-[#9FA0CD] px-2.5 py-0.5 rounded ${type.micro} uppercase tracking-widest`}>
                    GCC COMPLIANCE ACTIVE
                  </span>
                  <span className={`text-white/20 ${type.micro} uppercase tracking-widest`}>
                    DEPOT: DXB_CENTRAL
                  </span>
                </div>

                <h3 className={`text-white ${type.panelTitle} mb-4`}>
                  {activeIndustry.title} Operations
                </h3>
                <p className={`text-white/60 ${type.body} mb-8`}>
                  {activeIndustry.description}
                </p>

                {/* Checklist Features */}
                <div className="space-y-4">
                  <span className={`text-white/30 ${type.micro} uppercase tracking-widest block mb-2`}>
                    SECTOR CAPABILITY MATRIX
                  </span>
                  {activeIndustry.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#9FA0CD] mt-0.5 flex-shrink-0" />
                      <span className={`text-white/80 ${type.caption} font-bold`}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* B2B Call to Action link */}
              <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                <div className="flex flex-col">
                  <span className={`${type.micro} uppercase tracking-widest text-white/30`}>SPECIFICATION PROFILE</span>
                  <span className={`text-white ${type.micro} uppercase tracking-wider`}>SEC_COMPLIANT_V4.PDF</span>
                </div>
                <button
                  onClick={() => {
                    const contactSection = document.getElementById("justified-dispatch-gateway");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={`flex items-center gap-1.5 text-white hover:text-[#9FA0CD] ${type.micro} uppercase tracking-widest transition-colors cursor-pointer`}
                >
                  Consult Sector Leads <ArrowRight size={12} className="text-[#3B3C89]" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Visual Machinery spotlight & Pedestal (3 cols) */}
        <div className="lg:col-span-4 bg-[#111424]/20 border border-white/5 rounded-3xl p-6 flex flex-col justify-end items-center relative overflow-hidden min-h-[450px]">
          {/* Futuristic blueprint glowing pedestal */}
          <div className="absolute bottom-[10%] w-[80%] h-[20px] bg-gradient-to-r from-[#3B3C89]/40 via-[#3B3C89]/10 to-[#3B3C89]/40 rounded-full blur-[8px] z-0" />
          <div className="absolute bottom-[10%] w-[75%] h-[5px] bg-[#3B3C89] opacity-35 rounded-full border border-white/10 z-0" />
          
          <div className="absolute top-[10%] left-[-10%] w-32 h-32 bg-[#3B3C89]/5 rounded-full blur-xl pointer-events-none" />

          {/* Machine image spotlight */}
          <div className="relative w-full h-[65%] flex items-end justify-center z-10 mb-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: -15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative w-full h-full flex items-end justify-center"
              >
                <Image
                  src={activeIndustry.image}
                  alt={activeIndustry.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Status HUD indicator */}
          <div className="w-full bg-[#0A0C14]/80 border border-white/5 rounded-2xl p-4 relative z-10">
            <div className="flex justify-between items-center">
              <div>
                <span className={`${type.micro} uppercase tracking-widest text-[#9FA0CD] block mb-0.5`}>ACTIVE DISPATCH DEPLOYMENT</span>
                <span className={`text-white ${type.cardTitle}`}>{activeIndustry.title} Fleet</span>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse border border-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
