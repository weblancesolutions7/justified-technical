"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  ArrowRight,
  MapPin,
  Wind,
  Database,
  Wrench,
  Clock,
  ShieldCheck,
  Cpu,
  Sliders,
  Cable,
  Lightbulb,
  Headset,
  Award,
  Users,
  PhoneCall,
  Mail
} from "lucide-react";
import companyData from "@/content/company.json";

export default function EquipmentServicesPage() {
  return (
    <div className="bg-[#05060A] text-white min-h-screen font-sans antialiased overflow-x-hidden selection:bg-[#3B3C89] selection:text-white">

      <section className="relative h-[380px] md:h-[460px] lg:h-[500px] w-full bg-[#03153D] overflow-hidden flex items-center pt-20 md:pt-24 border-b border-white/[0.04]">
        <style>{`
          @media (max-width: 767px) {
            .responsive-hero-accent {
              display: none;
            }
            .responsive-hero-bg {
              clip-path: none !important;
            }
          }
          @media (min-width: 768px) {
            .responsive-hero-accent {
              clip-path: polygon(0 0, 52% 0, 36% 100%, 0 100%);
            }
            .responsive-hero-bg {
              clip-path: polygon(0 0, 49% 0, 33% 100%, 0 100%);
            }
          }
        `}</style>

        {/* Background image container shifted to right and narrowed to prevent extreme zoom */}
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-[65%] lg:w-[60%] z-0">
          <Image
            src="/images/service-hero.png"
            alt="Services Hero - Complete Solutions"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 60vw"
            className="object-cover object-top"
          />
        </div>

        {/* Lighter blue accent slant shape */}
        <div className="absolute inset-y-0 left-0 z-10 w-full bg-[#005FF7]/35 responsive-hero-accent" />

        {/* Main navy blue overlay */}
        <div className="absolute inset-y-0 left-0 z-10 w-full bg-gradient-to-r from-[#03153D] via-[#03153D]/95 to-transparent md:bg-[#03153D] responsive-hero-bg" />

        {/* Content */}
        <div className="container mx-auto px-6 md:px-12 max-w-8xl relative z-20 w-full">
          <div className="max-w-md md:max-w-lg lg:max-w-xl text-left">

            {/* Label row */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-white font-sans font-black text-xs md:text-sm tracking-[0.25em] uppercase">
                OUR SERVICES
              </span>
              <div className="h-[2px] w-8 bg-[#005FF7]" />
            </div>

            {/* Main headline */}
            <h1 className="text-3xl md:text-[42px] lg:text-[48px] font-sans font-black uppercase tracking-tight leading-[1.1] text-white mb-6">
              Complete Solutions<br />
              Under <span className="text-[#005FF7]">One Roof</span>
            </h1>

            {/* Sub-description */}
            <p className="text-white/80 text-xs md:text-sm font-semibold leading-relaxed max-w-md">
              From power generation to distribution and support, we provide reliable equipment and expert services to keep your projects running smoothly.
            </p>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          1.5 OUR SERVICES SECTION (GRID LIFTED FROM SCREENSHOT)
      ═══════════════════════════════════════════════════════ */}
      <section id="services-grid" className="py-24 bg-[#FAF9F6] text-slate-800 border-b border-slate-100 relative">
        {/* Subtle background lines for premium texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35 pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 max-w-8xl relative z-10 text-center">
          {/* Section Header */}
          <div className="max-w-2xl mx-auto mb-16">
            <span className="text-[#0046C7] font-sans font-black text-xs md:text-sm tracking-[0.25em] uppercase block mb-3">
              —— WHAT WE OFFER ——
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-sans font-black text-[#0B1E43] leading-tight uppercase tracking-tight mb-4">
              OUR SERVICES
            </h2>
            <p className="text-slate-500 text-xs md:text-sm font-semibold leading-relaxed">
              We offer a wide range of high-performance equipment and technical solutions tailored to meet the needs of various industries and projects.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: "SOUND PROOF GENERATORS",
                subtitle: "(5 KVA - 1500 KVA)",
                desc: "Wide range of soundproof generators from 5 KVA to 1500 KVA to ensure uninterrupted power for any project.",
                image: "/images/new-equipment/soundproof generator.png",
                icon: <Zap size={20} className="text-white" />,
                link: "/equipment-services#generators"
              },
              {
                title: "CABLES",
                subtitle: "UP TO 5000 METER",
                desc: "High quality cables for power distribution and connections available up to 5000 meter.",
                image: "/images/new-equipment/cables.png",
                icon: <Cable size={20} className="text-white" />,
                link: "/equipment-services#loadbanks"
              },
              {
                title: "DISTRIBUTION BOARD &",
                subtitle: "CHANGE OVER SWITCH BOARD",
                desc: "Reliable distribution boards and change over switch boards for safe and efficient power management.",
                image: "/images/new-equipment/Distribution boards and change over switch board.png",
                icon: <Sliders size={20} className="text-white" />,
                link: "/equipment-services#loadbanks"
              },
              {
                title: "AIR COMPRESSORS",
                subtitle: "(150 CFM - 950 CFM)",
                desc: "High performance air compressors ranging from 150 CFM to 950 CFM for industrial applications.",
                image: "/images/new-equipment/Air compressor (services).png",
                icon: <Wind size={20} className="text-white" />,
                link: "/equipment-services#compressors"
              },
              {
                title: "TOWER LIGHTS",
                subtitle: "",
                desc: "High illumination tower lights for enhanced visibility and safety at project sites.",
                image: "/images/new-equipment/Tower light night.png",
                icon: <Lightbulb size={20} className="text-white" />,
                link: "/equipment-services#lights"
              },
              {
                title: "DIESEL TANKS",
                subtitle: "",
                desc: "Durable and compliant diesel tanks for safe fuel storage and supply.",
                image: "/images/new-equipment/diesel tank.png",
                icon: <Database size={20} className="text-white" />,
                link: "/equipment-services#loadbanks"
              },
              {
                title: "LOAD BANK",
                subtitle: "",
                desc: "Advanced load bank solutions for testing and maintaining generator performance.",
                image: "/images/new-equipment/load bank (services).png",
                icon: <Cpu size={20} className="text-white" />,
                link: "/equipment-services#loadbanks"
              },
              {
                title: "MAINTENANCE & SUPPORT",
                subtitle: "",
                desc: "Expert maintenance and 24/7 support to ensure maximum uptime and reliable operation.",
                image: "/images/new-equipment/Maintenance and support (2).png",
                icon: <Wrench size={20} className="text-white" />,
                link: "/contact"
              }
            ].map((srv, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 rounded-3xl p-4 shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between relative text-left group"
              >
                {/* Image + Overlapping Icon */}
                <div className="relative mb-6">
                  <div className="relative aspect-[1.5] w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Floating blue circular icon */}
                  <div className="absolute left-6 -bottom-5 w-11 h-11 rounded-full bg-[#0B1E43] border-4 border-white flex items-center justify-center text-white shadow-md z-10">
                    {srv.icon}
                  </div>
                </div>

                {/* Card Body */}
                <div className="pt-2 px-2 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-[#0B1E43] font-sans font-black text-sm uppercase tracking-wider leading-tight mb-1">
                      {srv.title}
                    </h3>
                    {srv.subtitle ? (
                      <span className="text-[#0046C7] font-sans font-bold text-xs uppercase tracking-wide block mb-3 leading-none">
                        {srv.subtitle}
                      </span>
                    ) : (
                      <span className="text-transparent font-sans font-bold text-xs uppercase tracking-wide block mb-3 leading-none select-none">
                        &nbsp;
                      </span>
                    )}
                    <p className="text-slate-500 text-xs font-semibold leading-relaxed mb-2">
                      {srv.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ═══════════════════════════════════════════════════════
              1.6 WHY CHOOSE US ROW (MATCHING SCREENSHOT)
          ═══════════════════════════════════════════════════════ */}
          <div className="mt-20 bg-[#F4F6FC]/60 border border-slate-200/80 rounded-[2rem] py-10 px-6 md:px-8 shadow-sm">
            {/* Title */}
            <div className="flex flex-col items-center mb-10">
              <h3 className="text-[#0B1E43] font-sans font-black text-sm uppercase tracking-[0.25em]">
                WHY CHOOSE US?
              </h3>
              <div className="h-[2px] w-8 bg-[#0046C7] mt-3" />
            </div>

            {/* 6-Column Responsive Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-4 text-center items-start">
              {[
                {
                  title: "Reliable Equipment",
                  desc: "Well-maintained and high-performance equipment.",
                  icon: <ShieldCheck size={26} className="text-[#0B1E43]" />
                },
                {
                  title: "On-Time Delivery",
                  desc: "Fast and flexible delivery across the UAE.",
                  icon: <Clock size={26} className="text-[#0B1E43]" />
                },
                {
                  title: "24/7 Support",
                  desc: "Round-the-clock support whenever you need us.",
                  icon: <Headset size={26} className="text-[#0B1E43]" />
                },
                {
                  title: "Quality Assured",
                  desc: "Committed to safety, quality and industry standards.",
                  icon: <Award size={26} className="text-[#0B1E43]" />
                },
                {
                  title: "UAE Wide Service",
                  desc: "Serving all Emirates with quick response and coverage.",
                  icon: <MapPin size={26} className="text-[#0B1E43]" />
                },
                {
                  title: "Experienced Team",
                  desc: "Skilled professionals with deep industry expertise.",
                  icon: <Users size={26} className="text-[#0B1E43]" />
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center px-3 relative group lg:border-r lg:border-slate-200/60 lg:last:border-r-0 lg:last:pr-0 lg:first:pl-0"
                >
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-sm mb-4.5 transition-transform duration-300 group-hover:scale-105">
                    {item.icon}
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-[#0B1E43] font-sans font-extrabold text-xs uppercase tracking-wider mb-2 leading-tight">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-slate-400 font-semibold text-[10px] md:text-[11px] leading-relaxed max-w-[150px] mx-auto">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════
              1.7 NEED A POWER SOLUTION CTA BANNER (LIFTED FROM SCREENSHOT)
          ═══════════════════════════════════════════════════════ */}
          <div className="mt-12 relative overflow-hidden bg-[#0A1D40] rounded-[2rem] border border-white/10 text-white shadow-2xl">
            {/* Symmetrical split: Left/Middle Content, Right Image Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch relative">
              {/* Desktop Slanted Background Image (lg and up) */}
              <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[45%] z-0 overflow-hidden">
                {/* Glowing slant border line */}
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-[#005FF7] to-transparent z-10 pointer-events-none opacity-40"
                  style={{ 
                    clipPath: "polygon(20% 0, 20.25% 0, 0.25% 100%, 0 100%)" 
                  }}
                />
                
                {/* Inner slant border line (subtle white reflection) */}
                <div 
                  className="absolute inset-0 bg-white/20 z-10 pointer-events-none"
                  style={{ 
                    clipPath: "polygon(20.25% 0, 20.5% 0, 0.5% 100%, 0.25% 100%)" 
                  }}
                />

                {/* Main Image Container with Clip Path */}
                <div 
                  className="absolute inset-0 bg-[#071329]"
                  style={{ clipPath: "polygon(20.5% 0, 100% 0, 100% 100%, 0.5% 100%)" }}
                >
                  <Image
                    src="/images/equipment/Generators.jpg.jpeg"
                    alt="High capacity generator backup"
                    fill
                    sizes="45vw"
                    className="object-cover object-center filter grayscale brightness-50 opacity-45"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A1D40]/30 to-[#071329]/80" />
                </div>
              </div>
              
              {/* Left Column: Heading, Subtext, Call & Email */}
              <div className="lg:col-span-8 p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                {/* Heading Block */}
                <div className="max-w-md text-left">
                  <span className="text-[#005FF7] font-sans font-black text-xs tracking-wider uppercase block mb-1">
                    NEED A POWER SOLUTION?
                  </span>
                  <h3 className="text-2xl md:text-3xl font-sans font-black text-white uppercase tracking-tight mb-4">
                    WE'RE HERE TO HELP!
                  </h3>
                  <p className="text-white/60 text-xs md:text-sm font-semibold leading-relaxed">
                    Get in touch with our team for the right equipment and expert support for your project.
                  </p>
                </div>

                {/* Vertical Separator for Desktop */}
                <div className="hidden md:block w-px h-20 bg-white/10 self-center" />

                {/* Contact Columns (Call & Email) */}
                <div className="flex flex-col gap-6 text-left justify-center lg:pr-28">
                  {/* Call Us */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white">
                      <PhoneCall size={18} />
                    </div>
                    <div>
                      <span className="text-white/40 text-[9px] font-black uppercase tracking-wider block">Call Us</span>
                      <a href={`tel:${companyData.contact.tel.replace(/[-+\s]/g, '')}`} className="text-white font-sans font-extrabold text-sm md:text-base hover:text-[#005FF7] transition-colors leading-tight">
                        {companyData.contact.tel}
                      </a>
                    </div>
                  </div>

                  {/* Email Us */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="text-white/40 text-[9px] font-black uppercase tracking-wider block">Email Us</span>
                      <a href={`mailto:${companyData.contact.email}`} className="text-white font-sans font-extrabold text-sm md:text-base hover:text-[#005FF7] transition-colors leading-tight break-all">
                        {companyData.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Quote Button overlapping Generator Background */}
              <div className="lg:col-span-4 relative min-h-[220px] lg:min-h-full overflow-hidden lg:overflow-visible flex flex-col justify-center items-center p-8 text-center bg-[#071329] lg:bg-transparent border-t lg:border-t-0 border-white/10 z-10">
                {/* Background image inside right half (Mobile-only, no slant) */}
                <div className="absolute inset-0 z-0 opacity-45 lg:hidden">
                  <Image
                    src="/images/equipment/Generators.jpg.jpeg"
                    alt="High capacity generator backup"
                    fill
                    sizes="(max-width: 1024px) 100vw"
                    className="object-cover object-center filter grayscale brightness-50"
                  />
                  <div className="absolute inset-0 bg-[#071329]/65" />
                </div>

                <div className="relative z-10 flex flex-col items-center gap-4 w-full">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 bg-[#0046C7] hover:bg-[#0039A6] text-white font-sans font-black uppercase tracking-wider text-xs md:text-sm py-4 px-8 rounded-2xl transition-all hover:scale-[1.03] active:scale-95 shadow-xl shadow-[#0046C7]/30 w-full group"
                  >
                    Get a Quote Now
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-white/50 text-[10px] md:text-xs font-semibold uppercase tracking-wider">
                    Quick response within 2 hours.
                  </span>
                </div>
              </div>

            </div>

            {/* Bottom Row: 4 Statistics Grid */}
            <div className="bg-[#050E20] border-t border-white/10 px-6 py-6 md:py-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 max-w-7xl mx-auto">
                {[
                  {
                    value: "2018",
                    label: "Established",
                    icon: <Clock size={20} className="text-[#005FF7]" />
                  },
                  {
                    value: "1250+",
                    label: "kVA Capacity",
                    icon: <Zap size={20} className="text-[#005FF7]" />
                  },
                  {
                    value: "24/7",
                    label: "Support Available",
                    icon: <Headset size={20} className="text-[#005FF7]" />
                  },
                  {
                    value: "100%",
                    label: "Quality Commitment",
                    icon: <ShieldCheck size={20} className="text-[#005FF7]" />
                  }
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 justify-center lg:justify-start lg:border-r border-white/10 last:border-0 lg:px-8"
                  >
                    <div className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-white flex-shrink-0">
                      {stat.icon}
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-lg md:text-xl font-sans font-black text-white leading-none tracking-tight">
                        {stat.value}
                      </span>
                      <span className="text-white/40 font-sans font-semibold text-[10px] md:text-xs tracking-wide mt-1 block">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
