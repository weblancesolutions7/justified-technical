"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck, Clock, Headset, Award, Calendar, Zap,
  MapPin, PhoneCall, Mail, ArrowRight, CheckCircle2,
  Settings, UserCheck, CheckSquare, Sparkles, Network,
  Smartphone
} from "lucide-react";
import companyData from "@/content/company.json";

export default function Home() {
  // Callback Form State
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formService, setFormService] = useState("");
  const [formDetails, setFormDetails] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormName("");
    setFormEmail("");
    setFormPhone("");
    setFormService("");
    setFormDetails("");
    setIsSubmitted(false);
  };

  // Trust Badges Data
  const trustBadges = [
    {
      title: "High Quality Equipment",
      desc: "You Can Trust",
      icon: <ShieldCheck className="text-[#3B3C89] w-6 h-6 md:w-7 md:h-7" />
    },
    {
      title: "UAE Wide Coverage",
      desc: "Fast & Reliable Service",
      icon: <Clock className="text-[#3B3C89] w-6 h-6 md:w-7 md:h-7" />
    },
    {
      title: "24/7 Support",
      desc: "Always Here For You",
      icon: <Headset className="text-[#3B3C89] w-6 h-6 md:w-7 md:h-7" />
    },
    {
      title: "Safe & Compliant",
      desc: "Built To Highest Standards",
      icon: <Award className="text-[#3B3C89] w-6 h-6 md:w-7 md:h-7" />
    }
  ];

  // 8 Services Data
  const services = [
    {
      title: "Generators",
      subtitle: "(5 KVA - 1500 KVA)",
      image: "/images/new-equipment/soundproof generator.png"
    },
    {
      title: "Air Compressors",
      subtitle: "(150 CFM - 950 CFM)",
      image: "/images/new-equipment/Air compressor (services).png"
    },
    {
      title: "Cables",
      subtitle: "Up to 5000 Meter",
      image: "/images/new-equipment/cables.png"
    },
    {
      title: "Distribution Boards",
      subtitle: "& Change Over Switch Board",
      image: "/images/new-equipment/Distribution boards and change over switch board.png"
    },
    {
      title: "Tower Lights",
      subtitle: "",
      image: "/images/new-equipment/Tower light night.png"
    },
    {
      title: "Diesel Tanks",
      subtitle: "",
      image: "/images/new-equipment/diesel tank.png"
    },
    {
      title: "Load Bank",
      subtitle: "",
      image: "/images/new-equipment/load bank (services).png"
    },
    {
      title: "Maintenance & Support",
      subtitle: "",
      image: "/images/new-equipment/Maintenance and support (2).png"
    }
  ];

  // Why Choose Us Data
  const strengths = [
    { title: "Experienced Professionals", desc: "A skilled team with industry expertise", icon: <UserCheck size={22} /> },
    { title: "Reliable Support", desc: "Responsive service, 24/7", icon: <ShieldCheck size={22} /> },
    { title: "Complete Solutions", desc: "End-to-end solutions under one roof", icon: <CheckSquare size={22} /> },
    { title: "UAE-Wide Coverage", desc: "Serving all Emirates with fast response", icon: <MapPin size={22} /> },
    { title: "Expert Advice", desc: "Right equipment for your project", icon: <Network size={22} /> },
    { title: "Flexible Service", desc: "Customized solutions for every need", icon: <Clock size={22} /> }
  ];

  // Statistics Data
  const stats = [
    { label: "Established", value: "2018", icon: <Calendar className="w-9 h-9 md:w-10 md:h-10 text-white" /> },
    { label: "kVA Capacity", value: "1250+", icon: <Zap className="w-9 h-9 md:w-10 md:h-10 text-white" /> },
    { label: "Support Available", value: "24/7", icon: <Headset className="w-9 h-9 md:w-10 md:h-10 text-white" /> },
    { label: "Quality Commitment", value: "100%", icon: <ShieldCheck className="w-9 h-9 md:w-10 md:h-10 text-white" /> }
  ];

  // Industries Data
  const industries = [
    {
      name: "Construction",
      svg: (
        <svg className="w-full h-full text-current" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Ground line */}
          <path d="M6 54h52" />
          {/* Tower crane */}
          <path d="M14 54V18" />
          <path d="M8 18h36" />
          <path d="M14 26h4" />
          <path d="M14 36h4" />
          <path d="M14 46h4" />
          <path d="M8 18l6-10 6 10" />
          {/* Hook cable and box load */}
          <path d="M34 18v14" />
          <rect x="29" y="32" width="10" height="10" rx="1.5" />
          {/* Diagonal truss details on load / box */}
          <path d="M29 32l10 10" />
          {/* House structure under construction */}
          <path d="M38 54V42h18v12" />
          <path d="M38 42l9-8 9 8" />
          {/* Diagonal braces or scaffolding */}
          <path d="M47 34v20" />
          <path d="M38 48h18" />
        </svg>
      )
    },
    {
      name: "Industrial Operations",
      svg: (
        <svg className="w-full h-full text-current" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Ground line */}
          <path d="M6 54h52" />
          {/* Left cooling tower with curved sides */}
          <path d="M12 54c3-10 3-20 5-28h12c2 8 2 18 5 28" />
          {/* Right cooling tower with curved sides */}
          <path d="M32 54c3-10 3-20 5-28h12c2 8 2 18 5 28" />
          {/* Diagonal grid markings on cooling towers */}
          <path d="M15 38h13" />
          <path d="M13 46h17" />
          <path d="M35 38h13" />
          <path d="M33 46h17" />
          {/* Venting steam curls */}
          <path d="M19 21c-1-5 2-8 3-11c2 3 1 7 0 11" />
          <path d="M39 21c-1-5 2-8 3-11c2 3 1 7 0 11" />
          {/* Small factory baseline details */}
          <path d="M20 54v-4h6v4" />
          <path d="M40 54v-4h6v4" />
        </svg>
      )
    },
    {
      name: "Oil & Gas",
      svg: (
        <svg className="w-full h-full text-current" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Ground line */}
          <path d="M6 54h52" />
          {/* A-frame derrick tower */}
          <path d="M24 54L30 16h4l6 38" />
          {/* Derrick structural cross bars */}
          <path d="M25 45h14" />
          <path d="M27 34h10" />
          <path d="M29 23h6" />
          {/* X braces */}
          <path d="M25 45l12-11" />
          <path d="M37 45L27 34" />
          <path d="M27 34l8-11" />
          <path d="M35 34L29 23" />
          {/* Pumpjack on the left */}
          <path d="M14 54V38" />
          <path d="M8 32l12 10" />
          <path d="M8 32C7 35 9 38 10 40" />
          <path d="M7 36v18" />
          <path d="M18 42v12" />
          {/* Flame pipe on the right */}
          <path d="M48 54V30" />
          {/* Realistic burner gas flare */}
          <path d="M48 30c-2-4 0-8 3-11c3 3 2 7 0 11z" fill="currentColor" />
        </svg>
      )
    },
    {
      name: "Events & Exhibitions",
      svg: (
        <svg className="w-full h-full text-current" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Ground line */}
          <path d="M6 54h52" />
          {/* Symmetrical canopy / chandelier structure */}
          <path d="M32 54V22" />
          {/* Upper dome branch */}
          <path d="M32 22c-10-5-18 3-18 12h36c0-9-8-17-18-12z" />
          {/* Elegant branching arms extending outwards */}
          <path d="M32 26c-6-4-12-2-16 6" />
          <path d="M32 26c6-4 12-2 16 6" />
          <path d="M32 30c-4-3-8-1-10 5" />
          <path d="M32 30c4-3 8-1 10 5" />
          {/* Decorative ornaments / lights */}
          <circle cx="14" cy="38" r="2.5" />
          <circle cx="50" cy="38" r="2.5" />
          <circle cx="22" cy="35" r="2" />
          <circle cx="42" cy="35" r="2" />
          <circle cx="32" cy="16" r="3" />
        </svg>
      )
    },
    {
      name: "Manufacturing & Logistics",
      svg: (
        <svg className="w-full h-full text-current" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Ground line */}
          <path d="M6 54h52" />
          {/* Factory gables facade */}
          <path d="M8 54V34l8-8l8 8" />
          <path d="M24 54V24l8-8l8 8" />
          <path d="M40 54V34l8-8l8 8v20" />
          {/* Left factory smokestack with puff */}
          <path d="M12 28V16h4v12" />
          <path d="M14 11c0-2 2-3 2-5" />
          {/* Gear inside middle bay */}
          <circle cx="32" cy="35" r="6" />
          <path d="M32 26v3" />
          <path d="M32 41v3" />
          <path d="M23 35h3" />
          <path d="M38 35h3" />
          <path d="M26 29l2 2" />
          <path d="M36 39l2 2" />
          <path d="M26 41l2-2" />
          <path d="M36 29l2-2" />
          {/* Warehouse entrance on the right bay */}
          <path d="M44 54V42h8v12" />
          <path d="M44 48h8" />
        </svg>
      )
    },
    {
      name: "Hotels & Venues",
      svg: (
        <svg className="w-full h-full text-current" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Ground line */}
          <path d="M6 54h52" />
          {/* Main symmetrical hotel facade */}
          <path d="M14 54V14h36v40" />
          {/* Pediment roof top */}
          <path d="M12 14l20-8l20 8" />
          {/* Spire or Flag at the top */}
          <path d="M32 6V1" />
          <path d="M32 1l5 2.5l-5 2.5" />
          {/* Classical archway columns entryway */}
          <path d="M22 54V41c0-4 4-8 10-8s10 4 10 8v13" />
          <path d="M26 54V44c0-2 2-4 6-4s6 2 6 4v10" />
          {/* Left/Right window arrays */}
          <rect x="20" y="20" width="6" height="7" rx="1" />
          <rect x="38" y="20" width="6" height="7" rx="1" />
          <rect x="20" y="30" width="6" height="7" rx="1" />
          <rect x="38" y="30" width="6" height="7" rx="1" />
        </svg>
      )
    },
    {
      name: "Critical Infrastructure",
      svg: (
        <svg className="w-full h-full text-current" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Ground line */}
          <path d="M6 54h52" />
          {/* Central main control/security building */}
          <path d="M18 54V28c0-5 5-9 14-9s14 4 14 9v26" />
          {/* Symmetrical wings */}
          <path d="M8 54V36h10" />
          <path d="M46 36h10v18" />
          {/* High-security surveillance dome or utility cap */}
          <path d="M25 21c0-5 3-8 7-8s7 3 7 8" />
          {/* Electricity flash symbol inside the central tower */}
          <path d="M34 29l-5 10h6l-3 9" />
          {/* Antenna / transmission poles */}
          <path d="M13 36V26" />
          <path d="M51 36V26" />
          <circle cx="13" cy="24" r="1.5" fill="currentColor" />
          <circle cx="51" cy="24" r="1.5" fill="currentColor" />
        </svg>
      )
    },
    {
      name: "All Industries",
      svg: (
        <svg className="w-full h-full text-current" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* 3x3 rounded category grid */}
          <rect x="8" y="8" width="12" height="12" rx="3.5" />
          <rect x="26" y="8" width="12" height="12" rx="3.5" />
          <rect x="44" y="8" width="12" height="12" rx="3.5" />
          <rect x="8" y="26" width="12" height="12" rx="3.5" />
          <rect x="26" y="26" width="12" height="12" rx="3.5" />
          <rect x="44" y="26" width="12" height="12" rx="3.5" />
          <rect x="8" y="44" width="12" height="12" rx="3.5" />
          <rect x="26" y="44" width="12" height="12" rx="3.5" />
          <rect x="44" y="44" width="12" height="12" rx="3.5" />
          {/* Dots inside */}
          <circle cx="14" cy="14" r="1.5" fill="currentColor" />
          <circle cx="32" cy="14" r="1.5" fill="currentColor" />
          <circle cx="50" cy="14" r="1.5" fill="currentColor" />
          <circle cx="14" cy="32" r="1.5" fill="currentColor" />
          <circle cx="32" cy="32" r="1.5" fill="currentColor" />
          <circle cx="50" cy="32" r="1.5" fill="currentColor" />
          <circle cx="14" cy="50" r="1.5" fill="currentColor" />
          <circle cx="32" cy="50" r="1.5" fill="currentColor" />
          <circle cx="50" cy="50" r="1.5" fill="currentColor" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-[#FAF9F6] text-slate-800 min-h-screen relative font-sans overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════
          1. HERO SECTION (White Modern Split with UAE Skyline Backdrop)
      ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-10 lg:pb-16 bg-white overflow-hidden border-b border-slate-100">

        {/* Subtle geometric lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none z-0" />

        {/* Diagonal Masked Image for Desktop */}
        <div
          className="absolute right-0 top-0 bottom-0 w-[58%] xl:w-[55%] hidden lg:block z-10"
          style={{ clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0% 100%)" }}
        >
          <Image
            src="/images/Right side home page.png"
            alt="UAE Skyline and Soundproof Generator"
            fill
            sizes="(min-width: 768px) 55vw"
            className="object-cover object-[22%_center]"
            priority
          />
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-8xl relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <span className="text-[#0046C7] font-sans font-black text-xs md:text-sm tracking-[0.25em] uppercase mb-4">
                Powering Today.
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-[50px] xl:text-6xl font-sans font-black leading-[1.08] tracking-tight uppercase mb-6 text-[#0B1E43] text-left">
                Reliable Solutions.<br />
                <span className="text-[#0046C7]">Stronger Future.</span>
              </h1>

              <p className="text-slate-500 text-sm md:text-base font-semibold leading-relaxed max-w-xl mb-9">
                We provide high-performance equipment and technical solutions that power industries and drive progress across the UAE and beyond.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  href="#complete-solutions"
                  className="bg-[#0B1E43] hover:bg-[#0046C7] text-white px-8 py-4 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 flex items-center gap-2"
                >
                  Explore Services <ArrowRight size={14} />
                </Link>
                <Link
                  href="/contact"
                  className="bg-white border-2 border-[#0B1E43] hover:bg-[#0B1E43]/5 text-[#0B1E43] px-8 py-4 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2 hover:scale-[1.02] active:scale-95"
                >
                  Contact Us
                  <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </Link>
              </div>
            </div>

            {/* Right column: mobile image + desktop spacer */}
            <div className="lg:col-span-6 relative w-full flex items-center justify-center">
              {/* Mobile Image (hidden on desktop) */}
              <div className="w-full lg:hidden relative h-[320px] rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50">
                <Image
                  src="/images/Right side home page.png"
                  alt="UAE Skyline and Soundproof Generator"
                  fill
                  sizes="100vw"
                  className="object-cover object-[20%_center]"
                  priority
                />
              </div>
              {/* Desktop Spacer */}
              <div className="hidden lg:block w-full h-[500px]" />
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. TRUST BADGES ROW (Horizontal Bar)
      ═══════════════════════════════════════════════════════ */}
      <section className="relative z-20 -mt-14 lg:-mt-20 px-6 md:px-12 max-w-8xl mx-auto">
        <div className="bg-white border border-slate-100 rounded-[2rem] py-6 px-6 md:px-10 shadow-xl shadow-slate-100/50">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-8">
            {trustBadges.map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 text-left border-slate-100 last:border-0 lg:border-r lg:pr-6 pr-2"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 shadow-inner">
                  {badge.icon}
                </div>
                <div>
                  <h4 className="text-[#0B1E43] font-sans font-bold text-xs md:text-sm leading-tight">
                    {badge.title}
                  </h4>
                  <span className="text-slate-400 font-bold text-[9px] md:text-[10px] tracking-wide block mt-0.5 uppercase">
                    {badge.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3. COMPLETE SOLUTIONS GRID & WHY CHOOSE US
      ═══════════════════════════════════════════════════════ */}
      <section id="complete-solutions" className="pt-4 md:pt-6 pb-12 max-w-8xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* Left Column (8 Services Grid) */}
          <div className="lg:col-span-8 bg-white border border-slate-100 rounded-3xl p-6 lg:p-8 shadow-xl shadow-slate-100/50 flex flex-col justify-between text-left">
            <div>
              <span className="text-[#0046C7] font-sans font-black text-xs tracking-[0.25em] uppercase block mb-3">
                OUR SERVICES
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-[34px] font-sans font-black text-[#0B1E43] leading-none uppercase tracking-tight mb-6">
                COMPLETE SOLUTIONS UNDER ONE ROOF
              </h2>

              {/* 4x2 Grid of service cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-6">
                {services.map((srv, idx) => (
                  <Link
                    href="/equipment-services"
                    key={idx}
                    className="group bg-white border border-slate-200/80 rounded-2xl p-2 pb-3 transition-all duration-300 flex flex-col justify-between hover:shadow-md hover:scale-[1.02] active:scale-95"
                  >
                    {/* Image Area (Nested image container with rounded corners and border) */}
                    <div className="relative aspect-[1.7] w-full rounded-xl overflow-hidden bg-slate-50 mb-2 border border-slate-100">
                      <Image
                        src={srv.image}
                        alt={srv.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 20vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Text Title Badge */}
                    <div className="text-center flex flex-col justify-center items-center">
                      <h4 className="text-[#0B1E43] font-sans font-extrabold text-[10px] md:text-xs uppercase tracking-wider leading-tight">
                        {srv.title}
                      </h4>
                      {srv.subtitle ? (
                        <span className="text-slate-400 font-bold text-[8px] md:text-[9px] tracking-wide block mt-0.5 uppercase leading-none">
                          {srv.subtitle}
                        </span>
                      ) : (
                        <span className="text-transparent font-bold text-[8px] md:text-[9px] tracking-wide block mt-0.5 uppercase leading-none">
                          &nbsp;
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <Link
                href="/equipment-services"
                className="bg-white border-2 border-[#0B1E43] hover:bg-[#0B1E43] hover:text-white text-[#0B1E43] px-8 py-3 rounded-md font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2 hover:shadow-md hover:scale-[1.02] active:scale-95"
              >
                View All Services <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right Column (Why Choose Us panel) */}
          <div className="lg:col-span-4 bg-[#0B1E43] rounded-3xl p-6 lg:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-center text-left">
            <div>
              <span className="text-white font-sans font-black text-lg lg:text-xl tracking-wider uppercase mb-6 lg:mb-8 block">
                WHY CHOOSE US?
              </span>

              {/* Bullet list of strengths */}
              <div className="space-y-5 lg:space-y-7">
                {strengths.map((str, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-11 h-11 rounded-full border border-white/35 bg-white/5 flex items-center justify-center flex-shrink-0 text-white shadow-md">
                      {str.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-sans font-bold text-sm md:text-base leading-tight">
                        {str.title}
                      </h4>
                      <p className="text-slate-300 font-medium text-xs md:text-sm leading-normal mt-1">
                        {str.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          4. DYNAMIC STATISTICS BAR
      ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-r from-[#0B1E43] via-[#0E2E72] to-[#0B1E43] py-8 md:py-10 text-white shadow-xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,255,255,0.03),transparent_100%)] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 max-w-8xl relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 lg:gap-x-8">
            {stats.map((st, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 lg:gap-5 justify-center lg:justify-start lg:border-r border-white/10 last:border-0 px-4 lg:px-8"
              >
                <div className="flex-shrink-0 text-white">
                  {st.icon}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-2xl lg:text-[28px] font-sans font-black text-white leading-none tracking-tight">
                    {st.value}
                  </span>
                  <span className="text-slate-300 font-sans font-semibold text-[10px] md:text-xs tracking-wide mt-1 block">
                    {st.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          5. POWERING EVERY INDUSTRY (Cinematic Fade Backdrop)
      ═══════════════════════════════════════════════════════ */}
      <section id="industries" className="relative py-16 md:py-20 overflow-hidden bg-white text-[#0B1E43] text-left">
        {/* Background construction sunset image on the right half */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[48%] z-0">
          <Image
            src="/images/Powering every industry.png"
            alt="Powering Every Industry"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
            priority
          />
          {/* Subtle overlay for mobile */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent lg:hidden" />
        </div>

        {/* Gradient Overlay from Solid White/Light-Blue to Transparent (Left to Right) */}
        <div className="absolute inset-y-0 left-0 right-0 bg-gradient-to-r from-white via-white via-[48%] lg:via-[55%] to-transparent z-10 pointer-events-none hidden lg:block" />

        <div className="container mx-auto px-6 md:px-12 max-w-8xl relative z-20">
          <div className="w-full lg:max-w-[62%] xl:max-w-[58%] text-left">
            <span className="text-[#0046C7] font-sans font-black text-[10px] md:text-xs tracking-[0.25em] uppercase block mb-3">
              INDUSTRIES WE SERVE
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-[34px] font-sans font-black text-[#0B1E43] uppercase tracking-tight mb-12 leading-none">
              POWERING EVERY INDUSTRY
            </h2>

            {/* Single horizontal line of all 8 industries with tight gap spacing, placed purely on the left */}
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-y-4 gap-x-1.5 sm:gap-x-3 lg:gap-x-4">
              {industries.map((ind, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center group cursor-pointer text-[#0B1E43] hover:text-[#0046C7] transition-all duration-300"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 mb-2.5 transition-all duration-300 group-hover:scale-110 text-current flex items-center justify-center">
                    {ind.svg}
                  </div>
                  <h4 className="font-sans font-bold text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] leading-tight text-center tracking-wide transition-colors text-current max-w-[70px] sm:max-w-[85px] md:max-w-[100px]">
                    {ind.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          6. DIRECT CONTACT DIRECTORY & GET A CALL BACK
      ═══════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-[#0B1E43] relative overflow-hidden text-white">
        {/* Subtle Dotted World Map Graphic */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.06] hidden lg:block">
          <svg className="w-full h-full object-cover" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotPattern" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#ffffff" />
              </pattern>
            </defs>
            {/* Greenland */}
            <path d="M 280,60 C 310,50 330,60 340,80 C 320,100 300,110 280,90 C 260,70 270,65 280,60 Z" fill="url(#dotPattern)" />
            {/* North America */}
            <path d="M 80,120 C 120,100 160,90 220,100 C 260,110 280,130 290,160 C 260,180 240,190 220,210 C 210,225 180,240 160,260 C 150,270 140,290 120,290 C 110,290 105,270 100,250 C 95,230 75,210 70,180 C 65,150 70,130 80,120 Z" fill="url(#dotPattern)" />
            {/* South America */}
            <path d="M 220,280 C 240,280 260,300 270,320 C 280,350 250,420 220,460 C 200,480 180,490 170,480 C 160,470 165,440 170,410 C 175,380 180,340 190,320 C 200,300 210,280 220,280 Z" fill="url(#dotPattern)" />
            {/* Eurasia */}
            <path d="M 380,110 C 430,90 510,80 590,90 C 670,100 750,90 830,120 C 880,140 910,170 900,210 C 880,250 850,280 830,310 C 790,350 730,370 680,350 C 650,340 620,320 590,320 C 560,320 530,340 500,350 C 450,370 410,340 400,300 C 390,260 400,200 380,170 C 370,150 360,130 380,110 Z" fill="url(#dotPattern)" />
            {/* Africa */}
            <path d="M 420,220 C 460,200 500,210 530,230 C 560,250 570,280 550,320 C 530,350 520,380 500,420 C 480,450 460,460 450,450 C 440,440 445,410 440,380 C 435,350 420,330 410,300 C 400,270 405,240 420,220 Z" fill="url(#dotPattern)" />
            {/* Australia */}
            <path d="M 780,360 C 810,350 840,360 860,380 C 870,400 860,430 840,440 C 810,450 780,430 770,410 C 760,390 765,370 780,360 Z" fill="url(#dotPattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-8xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Part: Direct Corporate Contacts */}
            <div className="lg:col-span-5 flex flex-col justify-between text-left">
              <div>
                <h3 className="text-2xl md:text-[30px] lg:text-[34px] font-sans font-black text-white uppercase tracking-tight leading-[1.1] mb-2 font-display">
                  NEED POWER. NEED SOLUTIONS.
                </h3>
                <h3 className="text-2xl md:text-[30px] lg:text-[34px] font-sans font-black text-white uppercase tracking-tight leading-[1.1] mb-8 md:mb-10 font-display">
                  WE'RE HERE TO HELP.
                </h3>

                {/* Directory Contact items - 2x2 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 md:gap-y-8 gap-x-8">
                  {/* Customer Service */}
                  <div className="flex gap-4 items-start z-10 relative">
                    <div className="text-white mt-1.5 flex-shrink-0">
                      <PhoneCall size={26} strokeWidth={1.5} className="text-white" />
                    </div>
                    <div>
                      <a href={`tel:${companyData.contact.tel.replace(/[-+\s]/g, '')}`} className="text-white hover:text-[#9FA0CD] font-sans font-black text-base md:text-[17px] tracking-wide block leading-tight transition-colors">
                        {companyData.contact.tel}
                      </a>
                      <span className="text-[#9FA0CD] font-sans font-bold text-[10px] md:text-xs tracking-wider uppercase mt-1 block">
                        Customer Service
                      </span>
                    </div>
                  </div>

                  {/* Sales Department */}
                  <div className="flex gap-4 items-start z-10 relative">
                    <div className="text-white mt-1.5 flex-shrink-0">
                      <Smartphone size={26} strokeWidth={1.5} className="text-white" />
                    </div>
                    <div>
                      <div className="flex flex-col gap-1">
                        {companyData.contact.sales.split(", ").map((num, i) => (
                          <a
                            key={i}
                            href={`tel:${num.replace(/\s+/g, "")}`}
                            className="text-white hover:text-[#9FA0CD] font-sans font-black text-base md:text-[17px] tracking-wide block leading-tight transition-colors"
                          >
                            {num}
                          </a>
                        ))}
                      </div>
                      <span className="text-[#9FA0CD] font-sans font-bold text-[10px] md:text-xs tracking-wider uppercase mt-1 block">
                        Sales Department
                      </span>
                    </div>
                  </div>

                  {/* Email Us */}
                  <div className="flex gap-4 items-start z-10 relative">
                    <div className="text-white mt-1.5 flex-shrink-0">
                      <Mail size={26} strokeWidth={1.5} className="text-white" />
                    </div>
                    <div>
                      <a href={`mailto:${companyData.contact.email}`} className="text-white hover:text-[#9FA0CD] font-sans font-black text-base md:text-[17px] tracking-wide block leading-tight transition-colors break-all">
                        {companyData.contact.email}
                      </a>
                      <span className="text-[#9FA0CD] font-sans font-bold text-[10px] md:text-xs tracking-wider uppercase mt-1 block">
                        Send Us An E-mail
                      </span>
                    </div>
                  </div>

                  {/* Office Address */}
                  <div className="flex gap-4 items-start z-10 relative">
                    <div className="text-white mt-1.5 flex-shrink-0">
                      <MapPin size={26} strokeWidth={1.5} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-sans font-black text-base md:text-[17px] tracking-wide block leading-tight">
                        PO BOX: {companyData.contact.address.poBox}
                      </p>
                      <p className="text-white font-sans font-black text-base md:text-[17px] tracking-wide block leading-tight mt-0.5">
                        {companyData.contact.address.city}
                      </p>
                      <span className="text-[#9FA0CD] font-sans font-bold text-[10px] md:text-xs tracking-wider uppercase mt-1.5 block">
                        Head Office Address
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Part: Get A Call Back form (White Card) */}
            <div className="lg:col-span-7 bg-white rounded-[2rem] p-5 sm:p-8 md:p-10 shadow-2xl relative flex flex-col justify-between text-left text-slate-800 z-10">
              <div>
                <h3 className="text-xl md:text-[24px] font-sans font-black text-[#0B1E43] uppercase tracking-tight mb-1.5">
                  GET A CALL BACK
                </h3>
                <p className="text-slate-500 text-xs md:text-sm font-semibold leading-relaxed mb-6">
                  Fill out the form below and our team will call you back within 2 hours.
                </p>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="callback-success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 md:p-8 text-center flex flex-col items-center gap-4 my-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-inner">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h4 className="text-[#0B1E43] font-sans font-black text-lg uppercase tracking-wider">
                        Request Received
                      </h4>
                      <p className="text-slate-500 text-xs font-semibold max-w-sm leading-relaxed">
                        Thank you, <span className="text-[#0B1E43] font-bold">{formName}</span>. Your inquiry for <span className="text-[#0B1E43] font-bold">{formService || "our services"}</span> is authenticated. A logistics coordinator will contact you at <span className="text-[#0B1E43] font-bold">{formPhone}</span> shortly.
                      </p>
                      <button
                        onClick={resetForm}
                        type="button"
                        className="mt-4 border border-slate-200 hover:bg-slate-50 text-slate-600 px-6 py-2.5 rounded-full font-bold text-[10px] tracking-widest uppercase transition-all duration-300"
                      >
                        Submit Another Request
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="callback-form"
                      onSubmit={handleFormSubmit}
                      className="space-y-4"
                    >
                      {/* Name & Email Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                          <input
                            type="text"
                            required
                            value={formName}
                            onChange={(e) => setFormName(e.target.value)}
                            placeholder="Your Name"
                            className="bg-white border border-slate-200 focus:border-[#0B1E43] rounded-xl px-4 py-3.5 text-slate-800 text-sm font-semibold placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0B1E43] transition-all"
                          />
                        </div>
                        <div className="flex flex-col">
                          <input
                            type="email"
                            required
                            value={formEmail}
                            onChange={(e) => setFormEmail(e.target.value)}
                            placeholder="Email Address"
                            className="bg-white border border-slate-200 focus:border-[#0B1E43] rounded-xl px-4 py-3.5 text-slate-800 text-sm font-semibold placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0B1E43] transition-all"
                          />
                        </div>
                      </div>

                      {/* Phone & Service Selector Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                          <input
                            type="tel"
                            required
                            value={formPhone}
                            onChange={(e) => setFormPhone(e.target.value)}
                            placeholder="Phone Number"
                            className="bg-white border border-slate-200 focus:border-[#0B1E43] rounded-xl px-4 py-3.5 text-slate-800 text-sm font-semibold placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0B1E43] transition-all"
                          />
                        </div>
                        <div className="flex flex-col relative">
                          <select
                            required
                            value={formService}
                            onChange={(e) => setFormService(e.target.value)}
                            className="w-full bg-white border border-slate-200 focus:border-[#0B1E43] rounded-xl px-4 py-3.5 text-slate-800 text-sm font-semibold focus:outline-none focus:ring-1 focus:ring-[#0B1E43] appearance-none cursor-pointer placeholder-slate-400"
                          >
                            <option value="" disabled>Select Service</option>
                            <option value="Generators">Silent Generators</option>
                            <option value="Air Compressors">Air Compressors</option>
                            <option value="Cables">Cables Up to 5000 Meter</option>
                            <option value="Distribution Boards">Distribution Boards</option>
                            <option value="Tower Lights">Tower Lights</option>
                            <option value="Diesel Tanks">Diesel Tanks</option>
                            <option value="Load Bank">Load Bank</option>
                            <option value="Maintenance Support">Maintenance & Support</option>
                          </select>
                          <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-slate-400">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Project Details textarea */}
                      <div className="flex flex-col">
                        <textarea
                          required
                          value={formDetails}
                          onChange={(e) => setFormDetails(e.target.value)}
                          rows={3}
                          placeholder="Project Details"
                          className="bg-white border border-slate-200 focus:border-[#0B1E43] rounded-xl px-4 py-3.5 text-slate-800 text-sm font-semibold placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0B1E43] transition-all resize-none"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#0B1E43] hover:bg-[#152e5d] text-white font-sans font-extrabold py-3.5 rounded-xl hover:scale-[1.01] active:scale-95 transition-all duration-300 mt-2 text-sm md:text-base flex items-center justify-center gap-2 shadow-lg shadow-[#0B1E43]/15"
                      >
                        Request a Call Back <ArrowRight size={16} className="ml-1" />
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>



    </div>
  );
}
