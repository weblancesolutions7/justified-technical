"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Calendar,
  Clock,
  Headphones,
  Mail,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Users,
  Zap,
  X,
} from "lucide-react";
import companyData from "@/content/company.json";
import { servicesList } from "@/content/services";
import { HeroEyebrowLabel, HeroOutlineButton, PageHero } from "@/components/PageHero";
import { StatsBar } from "@/components/StatsBar";
import { siteContainerClass } from "@/lib/layout";
import { ACCENT, NAVY } from "@/lib/theme";
import { type } from "@/lib/typography";

const services = servicesList;

const whyChoose = [
  { title: "Reliable Equipment", desc: "Well-maintained and high-performance equipment.", icon: <ShieldCheck size={34} strokeWidth={1.5} /> },
  { title: "On-Time Delivery", desc: "Fast and flexible delivery across the UAE.", icon: <Clock size={34} strokeWidth={1.5} /> },
  { title: "24/7 Support", desc: "Round-the-clock support whenever you need us.", icon: <Headphones size={34} strokeWidth={1.5} /> },
  { title: "Quality Assured", desc: "Committed to safety, quality and industry standards.", icon: <Award size={34} strokeWidth={1.5} /> },
  { title: "UAE Wide Service", desc: "Serving all Emirates with quick response and coverage.", icon: <MapPin size={34} strokeWidth={1.5} /> },
  { title: "Experienced Team", desc: "Skilled professionals with deep industry expertise.", icon: <Users size={34} strokeWidth={1.5} /> },
];

const stats = [
  { value: String(companyData.established), label: "Established", icon: <Calendar className="text-white" /> },
  { value: "1250+", label: "kVA Capacity", icon: <Zap className="text-white" /> },
  { value: "24/7", label: "Support Available", icon: <Headphones className="text-white" /> },
  { value: "100%", label: "Quality Commitment", icon: <ShieldCheck className="text-white" /> },
];

const serviceDetails: Record<string, {
  title: string;
  description: string;
  details: { label: string; value: string }[];
}> = {
  generators: {
    title: "Soundproof & Heavy-Duty Generators",
    description: "Premium temporary and prime electricity generators engineered to support heavy cyclic facility loads, large-scale events, industrial plants, and noise-sensitive environments.",
    details: [
      { label: "Technical Specification Profile", value: "Our comprehensive rental fleet delivers a highly versatile, single-unit power range spanning from 5 kVA up to 1,500 kVA, with multi-megawatt scaling capabilities." },
      { label: "Available Engineering Builds", value: "Features open-skid layout designs for indoor mechanical plant installations alongside weather-sealed, fully sound-attenuated acoustic canopies optimized for public commercial venues." },
      { label: "Mobility & Field Utility", value: "Equipped with heavy-duty trolley or trailer wheel mounts for fast field repositioning, dual-frequency switchable systems (50 Hz / 60 Hz), and integrated copper grounding rod kits." }
    ]
  },
  compressors: {
    title: "Industrial Air Compressors",
    description: "Heavy-duty variable pressure compression systems engineered to deliver reliable, non-stop air flow for construction tools, industrial manufacturing plants, civil blasting projects, structural sandblasting, and specialized hydrocarbon exploration environments.",
    details: [
      { label: "Technical Specification Profile", value: "This specialized fleet operates across a broad, targeted capacity envelope from 150 CFM up to 950 CFM configurations." },
      { label: "Safety Compliance Standard", value: "Units are available in standard robust field configurations as well as fully certified Zone II explosion-proof builds for hazardous oilfields." },
      { label: "Standard Fleet Inclusions", value: "Every asset comes complete with commercial-grade high-pressure delivery hoses, safety whip checks, and industrial quick-connect fittings." }
    ]
  },
  lights: {
    title: "Mobile Tower Lights",
    description: "High-intensity lighting arrays engineered to provide powerful site illumination for infrastructure developments, evening exhibitions, remote industrial zones, and night operations.",
    details: [
      { label: "Power Supply Options", value: "Available in efficient clean-diesel engine models or eco-friendly, zero-emission solar-powered setups." },
      { label: "Safety Compliance Standard", value: "Built in standard commercial variations as well as spark-arrested, certified explosion-proof units for sensitive refinery and oilfield applications." }
    ]
  },
  welding: {
    title: "Industrial Welding Machines",
    description: "Rugged, heavy-duty welding systems built to provide stable current outputs for demanding structural modification, pipeline construction, and shipyard fabrication tasks.",
    details: [
      { label: "Technical Specification Profile", value: "Features fully adjustable current output capacities ranging from 400A to 600A models." },
      { label: "Standard Fleet Inclusions", value: "Package includes extra-long flexible welding cables, industrial ground clamps, and multi-step remote operation controllers." }
    ]
  },
  loadbank: {
    title: "Load Banks & Commissioning",
    description: "Specialized diagnostic, verification testing, and calibration equipment designed for generator performance validation, regular building safety maintenance, strict site compliance, and factory commissioning audits.",
    details: [
      { label: "Technical Specification Profile", value: "The testing fleet features isolated 500 kW testing modules alongside high-capacity 1,000 kW diagnostic load step arrays." },
      { label: "Control Infrastructure", value: "Managed via advanced wired or digital remote control boxes for high-precision load step adjustment." }
    ]
  },
  ats: {
    title: "Automatic Transfer Switches (ATS)",
    description: "Monitors utility inputs to deliver fully automated, sub-second power source switching between primary lines and backup generators when an outage occurs to protect sensitive hardware.",
    details: [
      { label: "Technical Capacity Range", value: "Stocked across a comprehensive range from 100A up to 1,600A main breaker capacities." }
    ]
  },
  distribution: {
    title: "Distribution Boards & Changeover Switchboards",
    description: "Heavy mechanical safety disconnect blocks and motorized transfer switches that allow site engineers to smoothly alter power pathways or swap grid lines between separate energy inputs safely.",
    details: [
      { label: "Technical Capacity Range", value: "Engineered heavily across standard ratings from 100A up to 1,600A capacities." },
      { label: "Weatherproof Distribution Boards", value: "Premium weatherproof electrical enclosures configured with a variety of universal multi-pin industrial socket layouts built to strict BS and IEC compliance standards, protected by independent safety trip switches." }
    ]
  },
  "sync-panels": {
    title: "Intelligent Synchronizing Panels",
    description: "Parallels multiple separate diesel generators together to enable automated parallel load sharing, balanced fuel consumption, and scalable multi-megawatt mini-utility grids.",
    details: [
      { label: "Technical Capacity Range", value: "Available as standalone external link panels or integrated digital engine-control modules." }
    ]
  },
  tanks: {
    title: "Fuel Storage Solutions",
    description: "High-capacity auxiliary fuel storage assets designed to extend generator running hours, optimize long-term continuous runs, and streamline field refueling schedules.",
    details: [
      { label: "Volumetric Fleet Range", value: "Available in storage volumes starting from 50 Imperial Gallons up to massive 4,000 Imperial Gallons storage steps." },
      { label: "Environmental Protection Build", value: "Built using standard single-wall steel utility tanks or high-security, dual-containment double-bunded systems to completely isolate fluid leaks and safeguard site terrain." }
    ]
  },
  cables: {
    title: "Insulated Power Cables & Line Management",
    description: "Heavy-duty, commercial-grade, high-insulation copper wiring tailored precisely to transmit high currents safely over extensive operating footprints without voltage drops.",
    details: [
      { label: "Technical Gauge Range", value: "Stocked heavily from 16 mm² single-core lines up to 240 mm² thick flexible multi-core configurations." },
      { label: "Mass Volume Readiness", value: "Maintained in massive warehouse volumes ready for rapid deployment, supporting continuous project run lines up to 5,000 meters in length." }
    ]
  }
};

export default function EquipmentServicesPage() {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  useEffect(() => {
    if (activeServiceId) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.documentElement.classList.add("lenis-stopped");
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.documentElement.classList.remove("lenis-stopped");
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.documentElement.classList.remove("lenis-stopped");
    };
  }, [activeServiceId]);
  return (
    <div className="bg-white text-[#374151] min-h-screen font-sans overflow-x-hidden">
      <PageHero
        imageSrc="/images/Services.png"
        imageAlt="Generator with UAE skyline"
        eyebrow={
          <div className="flex items-center gap-3.5 mb-4 justify-center lg:justify-start">
            <span className="type-eyebrow text-base sm:text-lg md:text-xl font-black tracking-[0.25em] text-white lg:text-inherit">
              OUR SERVICES
            </span>
            <span className="w-12 h-[4px] shrink-0" style={{ backgroundColor: ACCENT }} />
          </div>
        }
        title={
          <h1 className="text-2xl sm:text-3xl md:text-[2.4rem] font-extrabold uppercase tracking-tight leading-tight text-white lg:text-inherit">
            Complete Solutions Under <span style={{ color: ACCENT }}>One Roof</span>
          </h1>
        }
        description="From power generation to distribution and support, we provide reliable equipment and expert services to keep your projects running smoothly."
        actions={
          <HeroOutlineButton href="#services-grid">
            Explore All Services <ArrowRight size={14} />
          </HeroOutlineButton>
        }
      />

      {/* Services grid */}
      <section id="services-grid" className="py-14 md:py-16 bg-white">
        <div className={siteContainerClass}>
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
            <div className="flex items-center justify-center gap-4 mb-3.5">
              <span className="h-[2px] w-12 bg-[#d1d5db]" />
              <span className="type-eyebrow text-sm sm:text-[0.95rem] md:text-base font-extrabold tracking-[0.22em]" style={{ color: ACCENT }}>
                WHAT WE OFFER
              </span>
              <span className="h-[2px] w-12 bg-[#d1d5db]" />
            </div>
            <h2 className={`${type.sectionTitle} mb-4`} style={{ color: NAVY }}>
              OUR SERVICES
            </h2>
            <p className={`${type.body} text-[#6b7280]`}>
              We offer a wide range of high performance equipment and technical solutions tailored to meet the needs of various industries and projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
            {services.map((srv) => (
              <article
                key={srv.id}
                id={srv.id}
                className="bg-white border border-[#e8ecf1] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col text-left group"
              >
                <div className="relative px-3 pt-3">
                  <div className="relative aspect-[1.45] w-full rounded-lg overflow-hidden bg-[#f4f5f7]">
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div
                    className="absolute left-7 bottom-0 w-10 h-10 rounded-full text-white flex items-center justify-center border-[3px] border-white shadow-md -mb-5 z-10"
                    style={{ backgroundColor: NAVY }}
                  >
                    {srv.icon}
                  </div>
                </div>

                <div className="px-5 pt-8 pb-6 flex flex-col flex-1">
                  <h3 className="type-card-title text-base sm:text-[1.05rem] md:text-lg font-extrabold uppercase tracking-wide leading-tight mb-1" style={{ color: NAVY }}>
                    {srv.title}
                  </h3>
                  {srv.subtitle ? (
                    <span className="type-micro text-xs sm:text-sm font-bold uppercase tracking-wider mb-2.5 block" style={{ color: ACCENT }}>
                      {srv.subtitle}
                    </span>
                  ) : (
                    <span className="block h-5 mb-2.5" aria-hidden />
                  )}
                  <p className={`${type.body} text-[#6b7280] mb-4 flex-1`}>{srv.desc}</p>
                  {serviceDetails[srv.id] ? (
                    <button
                      onClick={() => setActiveServiceId(srv.id)}
                      className="inline-flex items-center gap-1 text-xs sm:text-sm font-extrabold underline underline-offset-2 w-fit cursor-pointer text-left"
                      style={{ color: ACCENT }}
                    >
                      Learn More <ArrowRight size={12} />
                    </button>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-12 md:py-14" style={{ backgroundColor: "#eef2f7" }}>
        <div className={siteContainerClass}>
          <h3 className="text-center type-section-title tracking-[0.22em] mb-10 md:mb-12" style={{ color: NAVY }}>
            WHY CHOOSE US?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
            {whyChoose.map((item, idx) => (
              <div
                key={item.title}
                className={`flex flex-col items-center text-center px-2 ${idx < whyChoose.length - 1 ? "lg:border-r lg:border-[#d8dee8]" : ""
                  }`}
              >
                <div className="mb-4" style={{ color: ACCENT }}>
                  {item.icon}
                </div>
                <h4 className="type-card-title text-xs sm:text-sm md:text-base font-extrabold mb-2" style={{ color: NAVY }}>
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#5a6474] font-medium leading-relaxed max-w-[170px] mx-auto mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative overflow-hidden" style={{ backgroundColor: NAVY }}>
        <div className="absolute right-0 top-0 bottom-0 w-[40%] hidden lg:block opacity-[0.12]">
          <Image
            src="/images/equipment/Generators.jpg.jpeg"
            alt=""
            fill
            sizes="40vw"
            className="object-cover object-center grayscale"
            aria-hidden
          />
        </div>

        <div className={`${siteContainerClass} relative z-10`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 md:py-12 items-center">
            <div className="lg:col-span-5 text-white text-left">
              <p className={`${type.eyebrow} mb-1`} style={{ color: ACCENT }}>
                NEED A POWER SOLUTION?
              </p>
              <h3 className={`${type.panelTitle} text-white mb-4`}>
                WE&apos;RE HERE TO HELP!
              </h3>
              <p className={`${type.body} text-white/80 max-w-sm`}>
                Get in touch with our team for the right equipment and expert support for your project.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-6 text-white">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center shrink-0">
                  <PhoneCall size={18} strokeWidth={1.5} />
                </div>
                <div className="text-left">
                  <span className={`${type.contactLabel} text-white/60 block`}>{companyData.contact.telLabel}</span>
                  <a
                    href={`tel:${companyData.contact.tel.replace(/[-+\s]/g, "")}`}
                    className={`${type.contactValue} text-white hover:text-white/80 transition-colors`}
                  >
                    {companyData.contact.tel}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center shrink-0">
                  <Mail size={18} strokeWidth={1.5} />
                </div>
                <div className="text-left">
                  <span className={`${type.contactLabel} text-white/60 block`}>Email Us</span>
                  <a
                    href={`mailto:${companyData.contact.email}`}
                    className="font-bold text-sm md:text-base hover:text-white/80 transition-colors break-all"
                  >
                    {companyData.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 flex flex-col items-center lg:items-end text-center lg:text-right">
              <Link
                href="/contact"
                className={`inline-flex items-center justify-center gap-2 text-white ${type.btn} px-8 py-4 rounded-lg w-full sm:w-auto transition-opacity hover:opacity-90 shadow-lg`}
                style={{ backgroundColor: ACCENT }}
              >
                Get a Quote Now <ArrowRight size={16} />
              </Link>
              <p className={`text-white/60 ${type.caption} mt-3 uppercase tracking-wide`}>Quick response within 2 hours.</p>
            </div>
          </div>

          {/* Stats row */}
          <div className="border-t border-white/15 py-8 md:py-9">
            <StatsBar stats={stats} />
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      <AnimatePresence>
        {activeServiceId && serviceDetails[activeServiceId] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveServiceId(null)}
              className="absolute inset-0 bg-black/65 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[85vh]"
            >
              {/* Header block with close button */}
              <div className="px-6 py-5 border-b border-[#e8ecf1] flex justify-between items-center bg-[#f8f9fb]">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full text-white flex items-center justify-center shrink-0 shadow-sm"
                    style={{ backgroundColor: NAVY }}
                  >
                    {services.find((s) => s.id === activeServiceId)?.icon}
                  </div>
                  <span className="type-eyebrow text-xs font-bold text-[#6b7280]">
                    SERVICE PROFILE
                  </span>
                </div>
                <button
                  onClick={() => setActiveServiceId(null)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[#9ca3af] hover:text-[#374151] hover:bg-[#e2e8f0] transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Scrollable details area */}
              <div 
                className="px-6 py-6 overflow-y-auto space-y-6 text-left"
                data-lenis-prevent
              >
                {/* Main section title */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold mb-3" style={{ color: NAVY }}>
                    {serviceDetails[activeServiceId].title}
                  </h3>
                  <p className="text-base text-[#4a5568] leading-relaxed">
                    {serviceDetails[activeServiceId].description}
                  </p>
                </div>

                {/* Grid details list */}
                <div className="space-y-4 pt-2">
                  {serviceDetails[activeServiceId].details.map((detail, index) => (
                    <div
                      key={index}
                      className="p-4 bg-[#f4f5f7] border border-[#e8ecf1] rounded-xl"
                    >
                      <h4 className="type-card-title text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-1.5" style={{ color: ACCENT }}>
                        {detail.label}
                      </h4>
                      <p className="text-sm sm:text-base text-[#4a5568] leading-relaxed font-normal">
                        {detail.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer action button */}
              <div className="px-6 py-4 border-t border-[#e8ecf1] flex justify-end bg-[#f8f9fb]">
                <button
                  onClick={() => setActiveServiceId(null)}
                  className="bg-[#001C55] hover:bg-[#002570] text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
                >
                  Close Profile
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
