"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Wrench,
  Globe,
  Clock,
  Users,
  TrendingUp,
  Calendar,
  Eye,
  Headphones,
  Phone,
  Smartphone,
  Mail,
  MapPin,
  HeartHandshake,
  HardHat,
  Handshake,
  Leaf,
  Award,
  CheckCircle2
} from "lucide-react";
import companyData from "@/content/company.json";

export default function About() {

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
            src="/images/About us hero.png"
            alt="About Us Hero Background"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 60vw"
            className="object-cover object-center"
          />
        </div>

        {/* Lighter blue accent slant shape */}
        <div className="absolute inset-y-0 left-0 z-10 w-full bg-[#005FF7]/35 responsive-hero-accent" />

        {/* Main navy blue overlay */}
        <div className="absolute inset-y-0 left-0 z-10 w-full bg-gradient-to-r from-[#03153D] via-[#03153D]/95 to-transparent md:bg-[#03153D] responsive-hero-bg" />

        {/* Content */}
        <div className="container mx-auto px-6 md:px-12 max-w-8xl relative z-20 w-full">
          <div className="max-w-md md:max-w-lg lg:max-w-xl text-left">

            {/* Label and horizontal line */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-white font-sans font-black text-xs md:text-sm tracking-[0.25em] uppercase">
                ABOUT US
              </span>
              <div className="h-[2px] w-8 bg-[#005FF7]" />
            </div>

            {/* Main Title */}
            <h1 className="text-3xl md:text-[42px] lg:text-[46px] font-sans font-black uppercase tracking-tight leading-[1.05] text-white mb-6">
              POWER YOU CAN<br />
              <span className="text-[#005FF7]">RELY ON</span>
            </h1>

            {/* Description */}
            <div className="flex flex-col gap-2 text-white/80 text-xs md:text-sm font-semibold leading-relaxed max-w-md">
              <p>People you can trust.</p>
              <p>A leading provider of machinery and power solutions in the UAE.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. CORPORATE SUMMARY & OUR STORY TIMELINE
      ═══════════════════════════════════════════════════════ */}
      <section className="pt-20 md:pt-24 pb-10 md:pb-12 bg-white text-slate-800 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-8xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Column: Corporate Summary */}
            <div className="lg:col-span-6 text-left flex flex-col justify-start">
              <span className="text-[#0046C7] font-black uppercase tracking-[0.2em] text-[11px] md:text-xs block mb-3">
                ABOUT JUSTIFIED TECHNICAL SOLUTIONS
              </span>
              <h2 className="text-3xl md:text-[42px] font-sans font-black text-[#0B1E43] uppercase tracking-tight leading-[1.15] mb-6">
                Power & Performance You<br className="hidden md:inline" /> Can Rely On.
              </h2>

              <div className="bg-[#0046C7] w-12 h-1 mb-8" />

              <div className="flex flex-col gap-6 text-slate-600 font-semibold text-sm md:text-base leading-relaxed mb-10 max-w-xl">
                <p>
                  As a leading provider of machinery and power solutions in the UAE, we deliver high-performance equipment and services tailored to meet demanding project needs.
                </p>
                <p>
                  With capabilities exceeding 1250kVA+, we are backed by a strong reputation for reliability, efficiency, and excellence.
                </p>
                <p>
                  We supply premium generators, heavy machinery, cooling systems, and complete power distribution solutions for construction projects, industrial operations, and large-scale events across Dubai, Abu Dhabi, and across the UAE.
                </p>
              </div>

              <div>
                <Link
                  href="/equipment-services"
                  className="inline-flex items-center gap-3 bg-[#0B1E43] hover:bg-[#0046C7] text-white font-black uppercase tracking-widest text-[10px] py-4 px-10 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 group"
                >
                  Our Services <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Timeline Card */}
            <div className="lg:col-span-6 w-full">
              <div className="bg-[#F8FAFC] border border-slate-100 rounded-3xl p-8 md:p-10 shadow-lg relative text-left">

                <h3 className="text-[#0B1E43] font-sans font-black text-lg md:text-xl uppercase tracking-wider mb-3">
                  OUR STORY
                </h3>

                <div className="bg-[#0046C7] w-10 h-0.5 mb-8" />

                {/* Timeline Container */}
                <div className="relative">

                  {/* Vertical Line */}
                  <div className="absolute left-[16px] top-2 bottom-2 w-[2px] bg-slate-200" />

                  {/* Timeline Items */}
                  <div className="flex flex-col gap-8">
                    {[
                      {
                        title: "Founded in 2018",
                        desc: "We began our journey with a clear purpose - to provide dependable construction equipment and power solutions.",
                        icon: <Calendar size={18} strokeWidth={2} />
                      },
                      {
                        title: "Built on Reliability",
                        desc: "Through continuous investment and expertise, we have expanded our fleet and capabilities to meet complex project requirements.",
                        icon: <Wrench size={18} strokeWidth={2} />
                      },
                      {
                        title: "Growing Together",
                        desc: "We have grown to deliver high-capacity generators exceeding 1,250 kVA and a wide range of machinery to support industries across the UAE.",
                        icon: <TrendingUp size={18} strokeWidth={2} />
                      },
                      {
                        title: "Our Commitment",
                        desc: "We remain focused on innovation, safety, and operational excellence - driving the success of our clients and supporting the UAE's growth.",
                        icon: <ShieldCheck size={18} strokeWidth={2} />
                      }
                    ].map((item, idx) => (
                      <div key={idx} className="relative pl-12 group">

                        {/* Timeline dot circle indicator */}
                        <div className="absolute left-0 top-0 w-[34px] h-[34px] rounded-full bg-[#0B1E43] text-white border-2 border-white flex items-center justify-center shadow-md group-hover:bg-[#0046C7] transition-colors duration-300">
                          {item.icon}
                        </div>

                        <div className="flex flex-col gap-1.5 text-left">
                          <h4 className="text-[#0B1E43] font-sans font-black text-sm md:text-base uppercase tracking-tight">
                            {item.title}
                          </h4>
                          <p className="text-slate-500 font-semibold text-xs md:text-sm leading-relaxed max-w-lg">
                            {item.desc}
                          </p>
                        </div>

                      </div>
                    ))}
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3. VISION, CORE VALUES & STANDARDS
      ═══════════════════════════════════════════════════════ */}
      <section className="pt-10 md:pt-12 pb-10 md:pb-12 text-slate-800 relative overflow-hidden border-t border-slate-100">

        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none bg-cover bg-center" style={{ backgroundImage: "url('/images/18.jpg.jpeg')" }} />
        {/* White overlay for readability */}
        <div className="absolute inset-0 z-0 bg-white/80 pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 max-w-8xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Left Card: Vision */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm lg:col-span-3 flex flex-col justify-start">

              <h3 className="text-[#0B1E43] font-sans font-black text-sm md:text-base uppercase tracking-wider mb-8 flex items-center gap-2">
                <Eye size={20} className="text-[#0046C7]" />
                VISION
              </h3>

              <div className="flex flex-col gap-6 text-left">

                <div>
                  <h4 className="text-[#0B1E43] font-sans font-black text-sm md:text-base uppercase tracking-tight mb-2">
                    Short-Term Vision
                  </h4>
                  <p className="text-slate-500 font-semibold text-xs md:text-sm leading-relaxed">
                    To expand our equipment fleet with advanced and efficient machinery while maintaining high service standards and fast response across the UAE.
                  </p>
                </div>

                <div className="bg-[#0046C7] w-8 h-[2px] my-2" />

                <div>
                  <h4 className="text-[#0B1E43] font-sans font-black text-sm md:text-base uppercase tracking-tight mb-2">
                    Long-Term Vision
                  </h4>
                  <p className="text-slate-500 font-semibold text-xs md:text-sm leading-relaxed">
                    To grow across the GCC and become a recognized leader in construction equipment rental and machinery services, known for reliability and innovation.
                  </p>
                </div>

              </div>

            </div>

            {/* Middle Card: Core Values */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm lg:col-span-6 flex flex-col justify-start">

              <h3 className="text-[#0B1E43] font-sans font-black text-sm md:text-base uppercase tracking-wider text-center mb-8 flex items-center justify-center gap-2">
                OUR CORE VALUES
              </h3>

              {/* Grid Container */}
              <div className="flex flex-col divide-y divide-slate-100 w-full h-full">

                {/* Row 1: 4 Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-6 items-stretch divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                  {[
                    {
                      title: "Client Commitment",
                      desc: "We prioritize our clients by delivering solutions that meet their exact needs.",
                      icon: <HeartHandshake size={28} className="text-[#0B1E43]" />
                    },
                    {
                      title: "Reliability",
                      desc: "We ensure consistent performance and dependable service on every project.",
                      icon: <ShieldCheck size={28} className="text-[#0B1E43]" />
                    },
                    {
                      title: "Safety First",
                      desc: "We follow strict safety practices to protect people, equipment & sites.",
                      icon: <HardHat size={28} className="text-[#0B1E43]" />
                    },
                    {
                      title: "Integrity",
                      desc: "We operate with transparency, honesty, and professionalism.",
                      icon: <Handshake size={28} className="text-[#0B1E43]" />
                    }
                  ].map((val, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center px-3 py-4 sm:py-0">
                      <div className="mb-4 text-[#0B1E43] hover:scale-105 transition-transform duration-300">
                        {val.icon}
                      </div>
                      <h4 className="text-[#0B1E43] font-sans font-black text-xs md:text-sm uppercase tracking-tight mb-2">
                        {val.title}
                      </h4>
                      <p className="text-slate-500 font-semibold text-[11px] md:text-xs leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Row 2: 3 Items */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 items-stretch divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                  {[
                    {
                      title: "Continuous Improvement",
                      desc: "We constantly upgrade our equipment and processes to deliver better results.",
                      icon: <TrendingUp size={28} className="text-[#0B1E43]" />
                    },
                    {
                      title: "Teamwork",
                      desc: "We collaborate effectively to achieve the best outcomes for our clients.",
                      icon: <Users size={28} className="text-[#0B1E43]" />
                    },
                    {
                      title: "Responsible Growth",
                      desc: "We aim to grow sustainably while supporting development in the UAE.",
                      icon: <Leaf size={28} className="text-[#0B1E43]" />
                    }
                  ].map((val, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center px-3 py-4 sm:py-0">
                      <div className="mb-4 text-[#0B1E43] hover:scale-105 transition-transform duration-300">
                        {val.icon}
                      </div>
                      <h4 className="text-[#0B1E43] font-sans font-black text-xs md:text-sm uppercase tracking-tight mb-2">
                        {val.title}
                      </h4>
                      <p className="text-slate-500 font-semibold text-[11px] md:text-xs leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  ))}
                </div>

              </div>

            </div>

            {/* Right Card: Standards */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm lg:col-span-3 flex flex-col justify-start">

              <h3 className="text-[#0B1E43] font-sans font-black text-sm md:text-base uppercase tracking-wider mb-8 flex items-center gap-2">
                <Award size={20} className="text-[#0046C7]" />
                STANDARDS THAT DEFINE US
              </h3>

              <div className="flex flex-col gap-6 text-left">
                {[
                  "Focus on quality service and reliable equipment",
                  "Ensuring a safe and healthy work environment",
                  "Strict adherence to safety practices on every site",
                  "Responsible and environmentally conscious operations."
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 size={18} className="text-[#0046C7] mt-0.5 flex-shrink-0" />
                    <p className="text-slate-500 font-semibold text-xs md:text-sm leading-snug">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3.5. DUAL-COMPONENT STATS RIBBON & CTA DIRECTORY CARD
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 pt-10 md:pt-12 pb-20 md:pb-24 px-6 md:px-12 max-w-8xl mx-auto">
        <div className="container mx-auto max-w-8xl">

          {/* Stats Ribbon Container */}
          <div className="bg-[#002366] text-white rounded-[2rem] p-6 lg:py-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4 shadow-lg mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,255,255,0.03),transparent_100%)] pointer-events-none" />

            <div className="w-full max-w-[240px] sm:max-w-[260px] lg:max-w-none mx-auto lg:mx-0 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 lg:gap-4">
              {[
                { label: "Established", value: "2018", icon: <Calendar className="w-8 h-8 text-white/95" /> },
                { label: "kVA Capacity", value: "1250+", icon: <Zap className="w-8 h-8 text-white/95" /> },
                { label: "Support Available", value: "24/7", icon: <Headphones className="w-8 h-8 text-white/95" /> },
                { label: "Coverage", value: "UAE Wide", icon: <Globe className="w-8 h-8 text-white/95" /> },
                { label: "Quality Commitment", value: "100%", icon: <ShieldCheck className="w-8 h-8 text-white/95" /> }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 flex-1 justify-start lg:justify-center w-full lg:border-r border-white/10 last:border-0 lg:px-4"
                >
                  <div className="flex-shrink-0 bg-white/5 w-12 h-12 rounded-xl flex items-center justify-center border border-white/10">
                    {item.icon}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xl md:text-2xl font-sans font-black text-white leading-none tracking-tight">
                      {item.value}
                    </span>
                    <span className="text-slate-300 font-sans font-bold text-[10px] md:text-xs tracking-wide mt-1 block uppercase">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Split CTA & Contact Card */}
          <div className="bg-white border border-slate-100 rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50 flex flex-col lg:flex-row items-stretch">

            {/* Left Navy CTA Block */}
            <div className="w-full lg:w-1/3 bg-[#002366] text-white p-8 md:p-12 flex flex-col justify-between text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_60%)] pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-sans font-black leading-tight uppercase mb-4 tracking-tight">
                  Let's Power Your Success
                </h3>
                <p className="text-white/80 text-xs md:text-sm font-semibold leading-relaxed mb-8">
                  Partner with us for reliable equipment, expert support, and complete peace of mind.
                </p>
              </div>
              <div className="relative z-10 mt-auto">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#002366] hover:bg-slate-100 px-6 py-3 rounded-xl font-bold text-xs tracking-wider uppercase shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-95 group"
                >
                  Get a Quote <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right White Contact Block */}
            <div className="w-full lg:w-2/3 p-8 md:p-12 bg-white flex flex-col justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">

                {/* Customer Service */}
                <div className="flex flex-col items-center sm:items-start">
                  <div className="w-12 h-12 rounded-full bg-[#002366]/5 flex items-center justify-center text-[#002366] mb-4 border border-[#002366]/10 shadow-inner">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-slate-400 font-sans font-bold text-[9px] md:text-[10px] tracking-wider uppercase mb-1">
                    Customer Service / Office
                  </span>
                  <a
                    href={`tel:${companyData.contact.tel.replace(/\s+/g, "")}`}
                    className="text-[#0B1E43] hover:text-[#0046C7] font-sans font-black text-xs md:text-sm tracking-wide block transition-colors"
                  >
                    {companyData.contact.tel}
                  </a>
                </div>

                {/* Sales Department */}
                <div className="flex flex-col items-center sm:items-start">
                  <div className="w-12 h-12 rounded-full bg-[#002366]/5 flex items-center justify-center text-[#002366] mb-4 border border-[#002366]/10 shadow-inner">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <span className="text-slate-400 font-sans font-bold text-[9px] md:text-[10px] tracking-wider uppercase mb-1">
                    Sales Department
                  </span>
                  <div className="flex flex-col gap-0.5 items-center sm:items-start">
                    {companyData.contact.sales.split(", ").map((num, i) => (
                      <a
                        key={i}
                        href={`tel:${num.replace(/\s+/g, "")}`}
                        className="text-[#0B1E43] hover:text-[#0046C7] font-sans font-black text-xs md:text-sm tracking-wide block transition-colors"
                      >
                        {num}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Email Us */}
                <div className="flex flex-col items-center sm:items-start">
                  <div className="w-12 h-12 rounded-full bg-[#002366]/5 flex items-center justify-center text-[#002366] mb-4 border border-[#002366]/10 shadow-inner">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-slate-400 font-sans font-bold text-[9px] md:text-[10px] tracking-wider uppercase mb-1">
                    Email Us
                  </span>
                  <a
                    href={`mailto:${companyData.contact.email}`}
                    className="text-[#0B1E43] hover:text-[#0046C7] font-sans font-black text-xs md:text-sm tracking-wide block transition-colors break-all"
                  >
                    {companyData.contact.email}
                  </a>
                </div>

                {/* Head Office */}
                <div className="flex flex-col items-center sm:items-start">
                  <div className="w-12 h-12 rounded-full bg-[#002366]/5 flex items-center justify-center text-[#002366] mb-4 border border-[#002366]/10 shadow-inner">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-slate-400 font-sans font-bold text-[9px] md:text-[10px] tracking-wider uppercase mb-1">
                    Head Office
                  </span>
                  <p className="text-[#0B1E43] font-sans font-black text-xs md:text-sm tracking-wide leading-snug">
                    PO BOX: {companyData.contact.address.poBox} <br />
                    {companyData.contact.address.city}
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
