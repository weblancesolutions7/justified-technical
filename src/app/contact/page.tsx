"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Wrench,
  Sliders,
  ShieldCheck,
  User,
  ChevronDown,
  FileText,
  ArrowRight
} from "lucide-react";
import companyData from "@/content/company.json";

const LinkedInIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-white">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

function ContactContent() {
  const searchParams = useSearchParams();
  const kvaParam = searchParams.get("kva");
  const sectorParam = searchParams.get("sector");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    details: "",
    kva: "",
    sector: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfigSummary, setShowConfigSummary] = useState(false);

  // Sync parameters from URL load estimator
  useEffect(() => {
    if (kvaParam || sectorParam) {
      setShowConfigSummary(true);
      setFormData(prev => ({
        ...prev,
        service: "generator-rental",
        kva: kvaParam || "",
        sector: sectorParam || "",
        details: `Configured via Load Estimator:\n- Requested Capacity: ${kvaParam || "Not Specified"} kVA\n- Industry Sector: ${sectorParam || "Not Specified"}\n\nPlease provide detailed pricing and timeline.`
      }));
    }
  }, [kvaParam, sectorParam]);

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
      service: "",
      details: "",
      kva: "",
      sector: ""
    });
    setIsSubmitted(false);
    setShowConfigSummary(false);
  };

  return (
    <div className="bg-[#05060A] text-white min-h-screen font-sans antialiased overflow-x-hidden selection:bg-[#3B3C89] selection:text-white">
      
      {/* ═══════════════════════════════════════════════════════
          1. REDESIGNED HERO SECTION (MATCHING SCREENSHOT)
      ═══════════════════════════════════════════════════════ */}
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
            src="/images/contact_hero_generator.png"
            alt="TFS Soundproof Generator and Dubai Skyline"
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
                CONTACT US
              </span>
              <div className="h-[2px] w-8 bg-[#005FF7]" />
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-[52px] lg:text-[58px] font-sans font-black uppercase tracking-tight leading-[1.05] text-white mb-6">
              WE'RE HERE<br />
              <span className="text-[#005FF7]">TO HELP YOU</span>
            </h1>

            {/* Description */}
            <p className="text-white/80 text-xs md:text-sm font-semibold leading-relaxed max-w-md">
              Have a question or need a quote?<br />
              Our team is ready to assist you.
            </p>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. CONTACT DETAILS & MESSAGE FORM (SIDE-BY-SIDE LIGHT LAYOUT)
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-[#FAF9F6] py-24 text-slate-800 relative">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Column: Contact Details (45%) */}
            <div className="lg:col-span-5 text-left flex flex-col justify-between lg:pr-8">
              <div>
                <span className="text-[#0046C7] font-black tracking-widest text-xs uppercase block mb-2">
                  GET IN TOUCH
                </span>
                <h2 className="text-3xl md:text-4xl font-sans font-black text-[#0B1E43] uppercase tracking-tight leading-tight mb-8">
                  Let's Power Your Success
                </h2>
              </div>
              
              <div className="flex-1 flex flex-col justify-between space-y-6 lg:space-y-0">
                {/* Item 1: Customer Service */}
                <div className="flex items-center gap-5 pb-6 border-b border-slate-200/80">
                  <div className="w-12 h-12 rounded-full bg-[#0B1E43] flex items-center justify-center text-white shadow-md shrink-0">
                    <Phone size={20} className="fill-white text-white" />
                  </div>
                  <div>
                    <span className="text-[#0B1E43]/65 text-xs font-bold uppercase tracking-wider block mb-1">Customer Service / Office</span>
                    <a href={`tel:${companyData.contact.tel.replace(/\s+/g, "")}`} className="text-[#0B1E43] font-sans font-black text-base md:text-lg hover:text-[#0046C7] transition-colors leading-tight">
                      {companyData.contact.tel}
                    </a>
                  </div>
                </div>

                {/* Item 2: Sales Department */}
                <div className="flex items-center gap-5 pb-6 border-b border-slate-200/80">
                  <div className="w-12 h-12 rounded-full bg-[#0B1E43] flex items-center justify-center text-white shadow-md shrink-0">
                    <Phone size={20} className="fill-white text-white" />
                  </div>
                  <div>
                    <span className="text-[#0B1E43]/65 text-xs font-bold uppercase tracking-wider block mb-1">Sales Department</span>
                    <div className="flex flex-col gap-1">
                      {companyData.contact.sales.split(", ").map((num, i) => (
                        <a key={i} href={`tel:${num.replace(/\s+/g, "")}`} className="text-[#0B1E43] font-sans font-black text-base md:text-lg hover:text-[#0046C7] transition-colors leading-tight">
                          {num}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Item 3: Email Us */}
                <div className="flex items-center gap-5 pb-6 border-b border-slate-200/80">
                  <div className="w-12 h-12 rounded-full bg-[#0B1E43] flex items-center justify-center text-white shadow-md shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <span className="text-[#0B1E43]/65 text-xs font-bold uppercase tracking-wider block mb-1">Email Us</span>
                    <a href={`mailto:${companyData.contact.email}`} className="text-[#0B1E43] font-sans font-black text-base md:text-lg hover:text-[#0046C7] transition-colors leading-tight break-all">
                      {companyData.contact.email}
                    </a>
                  </div>
                </div>

                {/* Item 4: Head Office Address */}
                <div className="flex items-center gap-5 pb-6 border-b border-slate-200/80">
                  <div className="w-12 h-12 rounded-full bg-[#0B1E43] flex items-center justify-center text-white shadow-md shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <span className="text-[#0B1E43]/65 text-xs font-bold uppercase tracking-wider block mb-1">Head Office Address</span>
                    <div className="text-[#0B1E43] font-sans font-black text-sm md:text-base leading-relaxed">
                      PO BOX: {companyData.contact.address.poBox} <br />
                      {companyData.contact.address.city}
                    </div>
                  </div>
                </div>

                {/* Item 5: Connect With Us */}
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#0B1E43] flex items-center justify-center text-white shadow-md shrink-0">
                    <LinkedInIcon size={20} />
                  </div>
                  <div>
                    <span className="text-[#0B1E43]/65 text-xs font-bold uppercase tracking-wider block mb-1">Connect With Us</span>
                    <a 
                      href={companyData.contact.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#0B1E43] font-sans font-black text-base md:text-lg hover:text-[#0046C7] transition-colors leading-tight"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Send Us A Message Card */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="bg-white border border-slate-100/80 rounded-3xl p-6 md:p-10 shadow-xl shadow-slate-200/40 text-left flex-1 flex flex-col">
                
                {/* Form Header */}
                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-sans font-black text-[#0B1E43] uppercase tracking-tight block">
                    SEND US A MESSAGE
                  </h3>
                  <div className="w-12 h-[3px] bg-[#0046C7] mt-3" />
                  <p className="text-slate-500 text-xs md:text-sm font-semibold mt-4">
                    Fill out the form below and our team will get back to you within 2 hours.
                  </p>
                </div>

                {/* Smart Alert Badge if URL parameter detected */}
                {showConfigSummary && (formData.kva || formData.sector) && (
                  <div className="bg-blue-50 border border-blue-200/80 rounded-2xl p-4 mb-6 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center text-[#0046C7] shrink-0 mt-0.5">
                      <Sliders size={14} />
                    </div>
                    <div>
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#0046C7] block">
                        ESTIMATOR CONFIGURATION DETECTED
                      </span>
                      <span className="text-[#0B1E43] font-black text-xs uppercase tracking-wide mt-1 block">
                        Capacity: {formData.kva ? `${formData.kva} kVA` : "Not Specified"} • Sector: {formData.sector}
                      </span>
                    </div>
                  </div>
                )}

                {isSubmitted ? (
                  <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-8 text-center flex flex-col items-center gap-6 my-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mx-auto">
                      <ShieldCheck size={32} />
                    </div>
                    <div className="text-center">
                      <h3 className="text-[#0B1E43] font-black text-lg uppercase tracking-wider font-sans">
                        Request Received Successfully
                      </h3>
                      <p className="text-slate-500 text-xs font-semibold mt-2 max-w-md mx-auto leading-relaxed">
                        Thank you, <span className="text-[#0B1E43] font-bold">{formData.name}</span>. Your inquiry payload has been received and routed directly to our Dubai Operations Command. We will contact you shortly.
                      </p>
                    </div>
                    <button
                      onClick={resetForm}
                      className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-800 font-black uppercase tracking-widest text-[9px] py-3.5 px-8 rounded-xl transition-all mx-auto cursor-pointer"
                    >
                      Submit Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      
                      {/* Name field */}
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                          <User size={18} />
                        </div>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Your Name *"
                          className="w-full bg-slate-50 border border-slate-200/80 focus:border-[#0046C7] rounded-xl pl-12 pr-5 py-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0046C7] transition-all text-xs font-semibold"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>

                      {/* Email field */}
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                          <Mail size={18} />
                        </div>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="Email Address *"
                          className="w-full bg-slate-50 border border-slate-200/80 focus:border-[#0046C7] rounded-xl pl-12 pr-5 py-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0046C7] transition-all text-xs font-semibold"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      
                      {/* Phone field */}
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                          <Phone size={18} />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="Phone Number *"
                          className="w-full bg-slate-50 border border-slate-200/80 focus:border-[#0046C7] rounded-xl pl-12 pr-5 py-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0046C7] transition-all text-xs font-semibold"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>

                      {/* Service selector */}
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 z-10">
                          <Wrench size={18} />
                        </div>
                        <select
                          name="service"
                          required
                          className="w-full bg-slate-50 border border-slate-200/80 focus:border-[#0046C7] rounded-xl pl-12 pr-10 py-4 text-slate-500 focus:text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0046C7] transition-all text-xs font-semibold appearance-none cursor-pointer"
                          value={formData.service}
                          onChange={handleInputChange}
                        >
                          <option value="" disabled hidden>Select Service *</option>
                          <option value="generator-rental">Generator Rental</option>
                          <option value="load-bank-testing">Load Bank Testing</option>
                          <option value="technical-maintenance">Technical Maintenance</option>
                          <option value="machinery-diagnostics">Machinery Diagnostics</option>
                          <option value="fuel-management">Fuel Management</option>
                          <option value="custom-engineering">Custom Engineering Solution</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
                          <ChevronDown size={18} />
                        </div>
                      </div>

                    </div>

                    {/* Details field */}
                    <div className="relative">
                      <div className="absolute top-4 left-0 pl-4 pointer-events-none text-slate-400">
                        <FileText size={18} />
                      </div>
                      <textarea
                        name="details"
                        required
                        rows={5}
                        placeholder="Project Details *"
                        className="w-full bg-slate-50 border border-slate-200/80 focus:border-[#0046C7] rounded-xl pl-12 pr-5 py-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0046C7] transition-all resize-none text-xs font-semibold"
                        value={formData.details}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#0B1E43] hover:bg-[#0046C7] text-white py-4.5 rounded-xl font-black text-[11px] transition-all hover:scale-[1.01] active:scale-95 uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-[#0B1E43]/10 cursor-pointer"
                    >
                      <span>Send Message</span>
                      <ArrowRight size={14} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════
              2.5. OUR LOCATION (MAP & REGIONAL FOCUS)
          ═══════════════════════════════════════════════════════ */}
          <div className="mt-20 bg-white border border-slate-100/80 rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/30 grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Map Area */}
            <div className="lg:col-span-6 min-h-[350px] lg:min-h-[420px] relative w-full overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115403.49129532551!2d55.4347596!3d25.325725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f403dfbf8c1%3A0x64319a9f242096e5!2sSharjah%20University%20City!5e0!3m2!1sen!2sae!4v1716388000000!5m2!1sen!2sae" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Details Area */}
            <div className="lg:col-span-6 p-8 md:p-12 flex flex-col justify-between bg-white text-left">
              
              {/* Header block */}
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100/50 flex items-center justify-center text-[#0046C7] shrink-0 shadow-sm">
                    <MapPin size={24} className="text-[#0046C7]" />
                  </div>
                  <div>
                    <span className="text-[#0046C7] font-black tracking-widest text-[10px] md:text-xs uppercase block mb-1">
                      OUR LOCATION
                    </span>
                    <h3 className="text-xl md:text-2xl font-sans font-black text-[#0B1E43] uppercase tracking-tight">
                      {companyData.contact.address.city}
                    </h3>
                  </div>
                </div>

                <div className="text-slate-600 font-semibold text-xs md:text-sm leading-relaxed space-y-1 mb-8 pl-16">
                  <p className="text-[#0B1E43] font-black">PO BOX: {companyData.contact.address.poBox}</p>
                  <p className="text-[#0B1E43]/70">{companyData.contact.address.city}</p>
                </div>
              </div>

              {/* Separator line */}
              <div className="border-t border-slate-100 my-6" />

              {/* Lower 3-column features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                
                {/* Feature 1: Strategic Location */}
                <div className="flex flex-col gap-2.5">
                  <div className="text-[#0B1E43] w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0B1E43]">
                      <path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z" />
                      <path d="M9 3v15M15 6v15" />
                    </svg>
                  </div>
                  <h4 className="text-[#0B1E43] font-sans font-black text-xs uppercase tracking-tight">
                    Strategic Location
                  </h4>
                  <p className="text-slate-500 font-semibold text-[10px] md:text-[11px] leading-relaxed">
                    Conveniently located to serve all Emirates with fast response.
                  </p>
                </div>

                {/* Feature 2: Easy Access */}
                <div className="flex flex-col gap-2.5">
                  <div className="text-[#0B1E43] w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0B1E43]">
                      <path d="M6 22L10 2" />
                      <path d="M18 22L14 2" />
                      <path d="M12 22V2" strokeDasharray="3 3" />
                    </svg>
                  </div>
                  <h4 className="text-[#0B1E43] font-sans font-black text-xs uppercase tracking-tight">
                    Easy Access
                  </h4>
                  <p className="text-slate-500 font-semibold text-[10px] md:text-[11px] leading-relaxed">
                    Easy access to major highways and industrial areas.
                  </p>
                </div>

                {/* Feature 3: On-Time Delivery */}
                <div className="flex flex-col gap-2.5">
                  <div className="text-[#0B1E43] w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0B1E43]">
                      <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                      <circle cx="5.5" cy="18.5" r="2.5" />
                      <circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>
                  </div>
                  <h4 className="text-[#0B1E43] font-sans font-black text-xs uppercase tracking-tight">
                    On-Time Delivery
                  </h4>
                  <p className="text-slate-500 font-semibold text-[10px] md:text-[11px] leading-relaxed">
                    Ensuring quick delivery and support wherever you need us.
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
