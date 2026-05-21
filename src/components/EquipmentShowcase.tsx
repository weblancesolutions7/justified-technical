"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Industry } from "@/content/industries";

export default function EquipmentShowcase({ industries }: { industries: Industry[] }) {
  const [activeId, setActiveId] = useState(industries[0].id);

  const activeIndustry = industries.find((i) => i.id === activeId) || industries[0];

  return (
    <div className="max-w-[1400px] mx-auto py-12">
      {/* Centered Title */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black text-white leading-tight">
          Select Your Preferred <br /> Industry
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Category Tabs (Original Pills with Scrolling) */}
        <div className="lg:col-span-4 relative z-20 h-[400px] lg:h-[550px]">
          {/* Fade Masks for elegant scrolling */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[#161616] to-transparent z-30 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#161616] to-transparent z-30 pointer-events-none" />

          <div className="flex flex-col gap-6 h-full overflow-y-auto pt-4 pb-16 px-4 scrollbar-thin scrollbar-thumb-[#3B3C89]/50 hover:scrollbar-thumb-[#3B3C89] scrollbar-track-transparent">
            {industries.map((ind) => {
              const isActive = ind.id === activeId;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveId(ind.id)}
                  className={`w-full md:max-w-sm text-center px-10 py-5 rounded-full font-black transition-all duration-300 uppercase tracking-widest text-sm border-2 flex-shrink-0 ${isActive
                    ? "bg-[#3B3C89] text-white border-[#3B3C89]"
                    : "bg-transparent text-white border-white/10 hover:border-[#3B3C89]/50 hover:bg-[#3B3C89]/5"
                    }`}
                >
                  {ind.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Large Equipment Cutout with Platform */}
        <div className="lg:col-span-8 relative h-[400px] lg:h-[550px] flex items-end justify-center">

          {/* Yellow Platform (Oval) */}
          <div
            className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[60%] md:w-[70%] h-[60px] md:h-[100px] bg-[#3B3C89] rounded-[100%] z-0"
          ></div>

          {/* Machine Cutout Image */}
          <div className="relative w-full h-full flex items-end justify-center z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src={activeIndustry.image}
                  alt={activeIndustry.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}
