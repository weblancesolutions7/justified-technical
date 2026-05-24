"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck, Clock, Headset, Award, Calendar, Zap,
  MapPin, PhoneCall, Mail, ArrowRight,   CheckCircle2,
  UserCheck, CheckSquare, Network,
  Smartphone
} from "lucide-react";
import companyData from "@/content/company.json";
import { PageHero } from "@/components/PageHero";
import { IndustryIcon } from "@/components/IndustryIcon";
import { StatsBar } from "@/components/StatsBar";
import { type } from "@/lib/typography";

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

  const navy = "#001C55";
  const iconClass = "w-7 h-7 shrink-0 stroke-[1.5]";
  const formInputClass =
    "w-full bg-white border border-[#d1d5db] rounded-md px-4 py-3 text-[#374151] text-sm placeholder-[#9ca3af] focus:outline-none focus:border-[#001C55] focus:ring-1 focus:ring-[#001C55] transition-colors";

  // Trust Badges Data
  const trustBadges = [
    {
      title: "High Quality Equipment",
      desc: "You Can Trust",
      icon: <ShieldCheck className={iconClass} style={{ color: navy }} />
    },
    {
      title: "UAE Wide Coverage",
      desc: "Fast & Reliable Service",
      icon: <Clock className={iconClass} style={{ color: navy }} />
    },
    {
      title: "24/7 Support",
      desc: "Always Here For You",
      icon: <Headset className={iconClass} style={{ color: navy }} />
    },
    {
      title: "Safe & Compliant",
      desc: "Built To Highest Standards",
      icon: <Award className={iconClass} style={{ color: navy }} />
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
      title: "Automatic Transfer Switches",
      subtitle: "(ATS)",
      image: "/images/new-equipment/Distribution boards and change over switch board.png"
    },
    {
      title: "Synchronizing Panels",
      subtitle: "",
      image: "/images/Smart & Efficient Operations.jpg.jpeg"
    },
    {
      title: "Welding Machines",
      subtitle: "",
      image: "/images/equipment/Welding Machines.jpg.jpeg"
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
    { label: "Established", value: String(companyData.established), icon: <Calendar className="text-white" /> },
    { label: "kVA Capacity", value: "1250+", icon: <Zap className="text-white" /> },
    { label: "Support Available", value: "24/7", icon: <Headset className="text-white" /> },
    { label: "Quality Commitment", value: "100%", icon: <ShieldCheck className="text-white" /> }
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
      name: "Data Centers",
      svg: <IndustryIcon id="data-centers" />
    },
    {
      name: "Film Productions",
      svg: <IndustryIcon id="film-productions" />
    },
    {
      name: "Marines & Ports",
      svg: <IndustryIcon id="marine-ports" />
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
    <div className="bg-white text-[#4a5568] min-h-screen relative font-sans overflow-x-hidden">

      <PageHero
        desktopVariant="white"
        imageSrc="/images/Right side home page.png"
        imageAlt="UAE Skyline and Soundproof Generator"
        imageObjectPosition="18% center"
        eyebrow={
          <span className={`${type.eyebrow} text-inherit`}>
            Powering Today.
          </span>
        }
        title={
          <h1 className={`${type.hero} break-words`}>
            Reliable Solutions. Stronger Future.
          </h1>
        }
        description="We provide high-performance equipment and technical solutions that power industries and drive progress across the UAE and beyond."
        actions={
          <>
            <Link
              href="#complete-solutions"
              className={`bg-[#001C55] hover:bg-[#002d7a] text-white px-7 py-3.5 rounded-md ${type.btn} transition-colors duration-200 flex items-center gap-2`}
            >
              Explore Services <ArrowRight size={14} />
            </Link>
            <Link
              href="/contact"
              className={`bg-white border-2 border-[#001C55] text-[#001C55] hover:bg-[#f4f5f7] max-lg:bg-white/15 max-lg:border-white max-lg:text-white max-lg:hover:bg-white/25 max-lg:shadow-[0_2px_8px_rgba(0,0,0,0.4)] px-7 py-3.5 rounded-md ${type.btn} transition-colors duration-200 flex items-center gap-2`}
            >
              Contact Us
              <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            </Link>
          </>
        }
      />

      {/* ═══════════════════════════════════════════════════════
          2. TRUST BAR — flat row under hero
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-white border-y border-[#e8eaed]">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px] py-7 md:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {trustBadges.map((badge, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-4 text-left ${
                  idx < trustBadges.length - 1 ? "lg:border-r lg:border-[#e8eaed] lg:pr-8" : ""
                }`}
              >
                {badge.icon}
                <div>
                  <h4 className={type.cardTitle} style={{ color: navy }}>
                    {badge.title}
                  </h4>
                  <span className={`text-[#6b7280] ${type.caption} block mt-0.5`}>
                    {badge.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3. SERVICES + WHY CHOOSE US (gray section, 8/4 split)
      ═══════════════════════════════════════════════════════ */}
      <section id="complete-solutions" className="bg-[#f4f5f7] py-10 md:py-14">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

            {/* Left — services grid */}
            <div className="lg:col-span-8 flex flex-col text-left">
              <span className={`${type.eyebrow} block mb-2`} style={{ color: navy }}>
                OUR SERVICES
              </span>
              <h2 className={`${type.sectionTitle} mb-7`} style={{ color: navy }}>
                COMPLETE SOLUTIONS UNDER ONE ROOF
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
                {services.map((srv, idx) => (
                  <Link
                    href="/equipment-services"
                    key={idx}
                    className="group bg-white border border-[#e2e5ea] rounded-sm overflow-hidden transition-shadow duration-200 hover:shadow-md"
                  >
                    <div className="relative aspect-[1.65] w-full bg-[#f8f9fb] border-b border-[#e8eaed]">
                      <Image
                        src={srv.image}
                        alt={srv.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 18vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="px-2 py-3 text-center">
                      <h4 className={type.micro} style={{ color: navy }}>
                        {srv.title}
                      </h4>
                      {srv.subtitle ? (
                        <span className={`text-[#6b7280] ${type.caption} block mt-1`}>
                          {srv.subtitle}
                        </span>
                      ) : null}
                    </div>
                  </Link>
                ))}
              </div>

              <div className="flex justify-center">
                <Link
                  href="/equipment-services"
                  className={`bg-white border-2 border-[#001C55] text-[#001C55] hover:bg-[#001C55] hover:text-white px-8 py-3 rounded-md ${type.btn} transition-colors duration-200 flex items-center gap-2`}
                >
                  View All Services <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right — why choose us */}
            <div
              className="lg:col-span-4 rounded-xl p-6 lg:p-8 flex flex-col justify-center text-left"
              style={{ backgroundColor: navy }}
            >
              <h3 className={`text-white ${type.panelTitle} mb-6 lg:mb-8`}>
                WHY CHOOSE US?
              </h3>

              <div className="space-y-5 lg:space-y-6">
                {strengths.map((str, idx) => (
                  <div key={idx} className="flex gap-3.5 items-start">
                    <div className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center shrink-0 text-white">
                      {str.icon}
                    </div>
                    <div>
                      <h4 className={`text-white ${type.cardTitle}`}>
                        {str.title}
                      </h4>
                      <p className={`text-white/75 ${type.caption} mt-1`}>
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
          4. STATS BAR — solid navy
      ═══════════════════════════════════════════════════════ */}
      <section className="py-9 md:py-11 text-white" style={{ backgroundColor: navy }}>
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <StatsBar stats={stats.map((st) => ({ value: st.value, label: st.label, icon: st.icon }))} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          5. INDUSTRIES WE SERVE
      ═══════════════════════════════════════════════════════ */}
      <section id="industries" className="relative py-14 md:py-20 overflow-hidden bg-white text-[#001C55]">
        <div className="absolute inset-y-0 right-0 w-full md:w-[52%] lg:w-[50%] z-0">
          <Image
            src="/images/Powering every industry.png"
            alt="Construction skyline at dusk"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white from-35% via-white/90 via-55% to-transparent md:hidden" />
        </div>

        <div
          className="absolute inset-y-0 left-0 right-0 z-[1] pointer-events-none hidden md:block"
          style={{
            background:
              "linear-gradient(to right, #ffffff 0%, #ffffff 42%, rgba(255,255,255,0.92) 52%, rgba(255,255,255,0.55) 62%, transparent 78%)",
          }}
        />

        <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
          <div className="w-full md:max-w-[68%] lg:max-w-[62%]">
            <span className={`text-[#1a56db] ${type.eyebrow} block mb-2`}>
              INDUSTRIES WE SERVE
            </span>
            <h2 className={`${type.sectionTitle} text-[#001C55] mb-10 md:mb-12`}>
              POWERING EVERY INDUSTRY
            </h2>

            <div className="grid grid-cols-4 md:flex md:flex-wrap md:justify-between gap-y-6 gap-x-2 md:gap-x-3 lg:gap-x-4">
              {industries.map((ind, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-[#001C55] md:flex-1 md:min-w-0 md:max-w-[120px]"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 mb-2.5 flex items-center justify-center">
                    {ind.svg}
                  </div>
                  <h4 className={`${type.micro} text-center text-[#001C55]`}>
                    {ind.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          6. CONTACT + GET A CALL BACK
      ═══════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-[#001C55] relative overflow-hidden text-white">
        <div className="absolute inset-y-0 left-0 w-[55%] z-0 pointer-events-none select-none opacity-[0.09] hidden lg:block">
          <svg className="h-full w-full" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="homeDotPattern" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#ffffff" />
              </pattern>
            </defs>
            <path d="M 280,60 C 310,50 330,60 340,80 C 320,100 300,110 280,90 C 260,70 270,65 280,60 Z" fill="url(#homeDotPattern)" />
            <path d="M 80,120 C 120,100 160,90 220,100 C 260,110 280,130 290,160 C 260,180 240,190 220,210 C 210,225 180,240 160,260 C 150,270 140,290 120,290 C 110,290 105,270 100,250 C 95,230 75,210 70,180 C 65,150 70,130 80,120 Z" fill="url(#homeDotPattern)" />
            <path d="M 220,280 C 240,280 260,300 270,320 C 280,350 250,420 220,460 C 200,480 180,490 170,480 C 160,470 165,440 170,410 C 175,380 180,340 190,320 C 200,300 210,280 220,280 Z" fill="url(#homeDotPattern)" />
            <path d="M 380,110 C 430,90 510,80 590,90 C 670,100 750,90 830,120 C 880,140 910,170 900,210 C 880,250 850,280 830,310 C 790,350 730,370 680,350 C 650,340 620,320 590,320 C 560,320 530,340 500,350 C 450,370 410,340 400,300 C 390,260 400,200 380,170 C 370,150 360,130 380,110 Z" fill="url(#homeDotPattern)" />
            <path d="M 420,220 C 460,200 500,210 530,230 C 560,250 570,280 550,320 C 530,350 520,380 500,420 C 480,450 460,460 450,450 C 440,440 445,410 440,380 C 435,350 420,330 410,300 C 400,270 405,240 420,220 Z" fill="url(#homeDotPattern)" />
            <path d="M 780,360 C 810,350 840,360 860,380 C 870,400 860,430 840,440 C 810,450 780,430 770,410 C 760,390 765,370 780,360 Z" fill="url(#homeDotPattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

            <div className="lg:col-span-5 flex flex-col justify-center text-left">
              <h2 className={`${type.sectionTitle} text-white mb-8 md:mb-10`}>
                NEED POWER. NEED SOLUTIONS.
                <br />
                WE&apos;RE HERE TO HELP.
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-7">
                <div className="flex gap-3.5 items-start">
                  <PhoneCall size={24} strokeWidth={1.5} className="shrink-0 mt-0.5" />
                  <div>
                    <a
                      href={`tel:${companyData.contact.tel.replace(/[-+\s]/g, "")}`}
                      className={`text-white hover:text-white/80 ${type.contactValue} block transition-colors`}
                    >
                      {companyData.contact.tel}
                    </a>
                    <span className={`text-white/65 ${type.contactLabel} mt-1 block`}>
                      {companyData.contact.telLabel}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <Smartphone size={24} strokeWidth={1.5} className="shrink-0 mt-0.5" />
                  <div>
                    <div className="flex flex-col gap-0.5">
                      {companyData.contact.sales.split(", ").map((num, i) => (
                        <a
                          key={i}
                          href={`tel:${num.replace(/\s+/g, "")}`}
                          className={`text-white hover:text-white/80 ${type.contactValue} block transition-colors`}
                        >
                          {num}
                        </a>
                      ))}
                    </div>
                    <span className={`text-white/65 ${type.contactLabel} mt-1 block`}>
                      Sales Department
                    </span>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <Mail size={24} strokeWidth={1.5} className="shrink-0 mt-0.5" />
                  <div>
                    <a
                      href={`mailto:${companyData.contact.email}`}
                      className={`text-white hover:text-white/80 ${type.contactValue} block transition-colors break-all`}
                    >
                      {companyData.contact.email}
                    </a>
                    <span className={`text-white/65 ${type.contactLabel} mt-1 block`}>
                      Send Us An E-mail
                    </span>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <Smartphone size={24} strokeWidth={1.5} className="shrink-0 mt-0.5" />
                  <div>
                    <a
                      href={`tel:${companyData.contact.accounts.replace(/\s+/g, "")}`}
                      className={`text-white hover:text-white/80 ${type.contactValue} block transition-colors`}
                    >
                      {companyData.contact.accounts}
                    </a>
                    <span className={`text-white/65 ${type.contactLabel} mt-1 block`}>
                      Accounts Department
                    </span>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start sm:col-span-2">
                  <MapPin size={24} strokeWidth={1.5} className="shrink-0 mt-0.5" />
                  <div>
                    <a
                      href={companyData.contact.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-white hover:text-white/80 ${type.contactValue} block transition-colors`}
                    >
                      {companyData.contact.address.city}
                    </a>
                    <span className={`text-white/65 ${type.contactLabel} mt-1 block`}>
                      Abu Dhabi — View on map
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 md:p-9 text-[#4a5568] shadow-lg">
              <h3 className={`${type.panelTitle} text-[#001C55] mb-1`}>
                GET A CALL BACK
              </h3>
              <p className={`text-[#6b7280] ${type.body} mb-6`}>
                Fill out the form below and our team will call you back within 2 hours.
              </p>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="callback-success"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="bg-[#f4f5f7] border border-[#e2e5ea] rounded-lg p-6 md:p-8 text-center flex flex-col items-center gap-4"
                  >
                    <div className="w-11 h-11 rounded-full bg-[#001C55]/10 flex items-center justify-center text-[#001C55]">
                      <CheckCircle2 size={22} />
                    </div>
                    <h4 className={`text-[#001C55] ${type.cardTitle}`}>
                      Request Received
                    </h4>
                    <p className={`text-[#6b7280] ${type.body} max-w-sm`}>
                      Thank you, <span className="text-[#001C55] font-bold">{formName}</span>. We&apos;ll call you at{" "}
                      <span className="text-[#001C55] font-bold">{formPhone}</span> about{" "}
                      <span className="text-[#001C55] font-bold">{formService || "your inquiry"}</span> shortly.
                    </p>
                    <button
                      onClick={resetForm}
                      type="button"
                      className={`mt-2 border border-[#e2e5ea] hover:bg-[#f4f5f7] text-[#4a5568] px-6 py-2.5 rounded-md ${type.btn} transition-colors`}
                    >
                      Submit Another Request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="callback-form"
                    onSubmit={handleFormSubmit}
                    className="space-y-3.5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="Your Name"
                        className={formInputClass}
                      />
                      <input
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="Email Address"
                        className={formInputClass}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <input
                        type="tel"
                        required
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        placeholder="Phone Number"
                        className={formInputClass}
                      />
                      <div className="relative">
                        <select
                          required
                          value={formService}
                          onChange={(e) => setFormService(e.target.value)}
                          className={`${formInputClass} appearance-none cursor-pointer pr-10`}
                        >
                          <option value="" disabled>
                            Select Service
                          </option>
                          <option value="Generators">Silent Generators</option>
                          <option value="Air Compressors">Air Compressors</option>
                          <option value="Cables">Cables Up to 5000 Meter</option>
                          <option value="Distribution Boards">Distribution Boards</option>
                          <option value="Tower Lights">Tower Lights</option>
                          <option value="Diesel Tanks">Diesel Tanks</option>
                          <option value="Load Bank">Load Bank</option>
                          <option value="Maintenance Support">Maintenance & Support</option>
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#9ca3af]">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden>
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <textarea
                      required
                      value={formDetails}
                      onChange={(e) => setFormDetails(e.target.value)}
                      rows={4}
                      placeholder="Project Details"
                      className={`${formInputClass} resize-none`}
                    />

                    <button
                      type="submit"
                      className={`w-full bg-[#001C55] hover:bg-[#002d7a] text-white py-3.5 rounded-md ${type.btn} flex items-center justify-center gap-2 transition-colors mt-1`}
                    >
                      Request a Call Back <ArrowRight size={16} />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>



    </div>
  );
}
