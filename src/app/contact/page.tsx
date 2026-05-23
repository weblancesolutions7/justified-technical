"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  ArrowRight,
  ChevronDown,
  FileText,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sliders,
  Truck,
  User,
  Wrench,
} from "lucide-react";
import companyData from "@/content/company.json";
import { HeroEyebrowLabel, PageHero } from "@/components/PageHero";
import { siteContainerClass } from "@/lib/layout";
import { ACCENT, NAVY } from "@/lib/theme";
import { type } from "@/lib/typography";

const inputClass =
  "w-full bg-white border border-[#d1d5db] rounded-lg pl-11 pr-4 py-3.5 text-[#374151] text-sm placeholder-[#9ca3af] focus:outline-none focus:border-[#001C55] focus:ring-1 focus:ring-[#001C55] transition-colors";

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.733-1.458L0 24zm6.704-4.248c1.601.95 3.115 1.485 4.908 1.487 5.379 0 9.751-4.373 9.754-9.759.001-2.61-1.011-5.064-2.848-6.903C16.68 2.73 14.216 1.719 11.611 1.719 6.236 1.719 1.861 6.091 1.858 11.48c-.001 1.859.489 3.411 1.464 5.01l-.995 3.636 3.73-.974z" />
    </svg>
  );
}

const salesWhatsApp = companyData.contact.sales.split(", ")[0].replace(/[-+\s]/g, "");

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 py-5 border-b border-[#e8ecf1] last:border-b-0 sm:border-0 sm:py-4 lg:border-b lg:py-5 lg:last:border-b-0">
      <div
        className="w-11 h-11 rounded-full text-white flex items-center justify-center shrink-0"
        style={{ backgroundColor: NAVY }}
      >
        {icon}
      </div>
      <div className="min-w-0 pt-0.5">
        <span className={`${type.contactLabel} text-[#6b7280] block mb-1`}>
          {label}
        </span>
        {children}
      </div>
    </div>
  );
}

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
    sector: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfigSummary, setShowConfigSummary] = useState(false);

  useEffect(() => {
    if (kvaParam || sectorParam) {
      setShowConfigSummary(true);
      setFormData((prev) => ({
        ...prev,
        service: "generators",
        kva: kvaParam || "",
        sector: sectorParam || "",
        details: `Configured via Load Estimator:\n- Requested Capacity: ${kvaParam || "Not Specified"} kVA\n- Industry Sector: ${sectorParam || "Not Specified"}\n\nPlease provide detailed pricing and timeline.`,
      }));
    }
  }, [kvaParam, sectorParam]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", service: "", details: "", kva: "", sector: "" });
    setIsSubmitted(false);
    setShowConfigSummary(false);
  };

  return (
    <div className="bg-white text-[#374151] min-h-screen font-sans overflow-x-hidden">
      <PageHero
        imageSrc="/images/contact_hero_generator.png"
        imageAlt="Generator with UAE skyline"
        eyebrow={<HeroEyebrowLabel>CONTACT US</HeroEyebrowLabel>}
        title={
          <h1 className={type.hero}>
            WE&apos;RE HERE
            <br />
            <span style={{ color: ACCENT }}>TO HELP YOU</span>
          </h1>
        }
        description={
          <>
            Have a question or need a quote?
            <br />
            Our team is ready to assist you.
          </>
        }
      />

      {/* Contact info + form */}
      <section className="py-12 md:py-16 bg-white">
        <div className={siteContainerClass}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <span className={`${type.eyebrow} block mb-2`} style={{ color: ACCENT }}>
                GET IN TOUCH
              </span>
              <h2 className={`${type.sectionTitle} mb-6 sm:mb-8`} style={{ color: NAVY }}>
                Let&apos;s Power Your Success
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-6 sm:gap-x-8">
              <ContactRow icon={<Phone size={18} strokeWidth={2} />} label={companyData.contact.telLabel}>
                <a
                  href={`tel:${companyData.contact.tel.replace(/[-+\s]/g, "")}`}
                  className={`${type.contactValue} hover:opacity-80 transition-opacity`}
                  style={{ color: NAVY }}
                >
                  {companyData.contact.tel}
                </a>
              </ContactRow>

              <ContactRow icon={<Phone size={18} strokeWidth={2} />} label="Sales Department">
                <div className="flex flex-col gap-0.5">
                  {companyData.contact.sales.split(", ").map((num, i) => (
                    <a
                      key={i}
                      href={`tel:${num.replace(/\s+/g, "")}`}
                      className={`${type.contactValue} hover:opacity-80 transition-opacity`}
                      style={{ color: NAVY }}
                    >
                      {num}
                    </a>
                  ))}
                </div>
              </ContactRow>

              <ContactRow icon={<Phone size={18} strokeWidth={2} />} label="Accounts Department">
                <a
                  href={`tel:${companyData.contact.accounts.replace(/\s+/g, "")}`}
                  className={`${type.contactValue} hover:opacity-80 transition-opacity`}
                  style={{ color: NAVY }}
                >
                  {companyData.contact.accounts}
                </a>
              </ContactRow>

              <ContactRow icon={<Mail size={18} strokeWidth={2} />} label="Email Us">
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="font-bold text-base md:text-lg hover:opacity-80 transition-opacity break-all"
                  style={{ color: NAVY }}
                >
                  {companyData.contact.email}
                </a>
              </ContactRow>

              <ContactRow icon={<MapPin size={18} strokeWidth={2} />} label="Abu Dhabi Branch">
                <a
                  href={companyData.contact.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${type.contactValue} leading-relaxed hover:opacity-80 transition-opacity`}
                  style={{ color: NAVY }}
                >
                  {companyData.contact.address.city}
                </a>
              </ContactRow>

              <ContactRow icon={<LinkedInIcon />} label="Connect With Us">
                <div className="flex gap-3 items-center">
                  <a
                    href={companyData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#0077B5] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href={`https://wa.me/${salesWhatsApp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon />
                  </a>
                </div>
              </ContactRow>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white border border-[#e2e8f0] rounded-xl p-6 md:p-9 shadow-[0_4px_24px_rgba(0,28,85,0.06)]">
                <h3 className={type.panelTitle} style={{ color: NAVY }}>
                  SEND US A MESSAGE
                </h3>
                <span className="block w-12 h-[3px] mt-3 mb-3" style={{ backgroundColor: NAVY }} />
                <p className={`${type.body} text-[#6b7280] mb-6`}>
                  Fill out the form below and our team will get back to you within 2 hours.
                </p>

                {showConfigSummary && (formData.kva || formData.sector) && (
                  <div className="bg-[#eef2f7] border border-[#d8dee8] rounded-lg p-4 mb-6 flex items-start gap-3">
                    <Sliders size={16} style={{ color: ACCENT }} className="shrink-0 mt-0.5" />
                    <div>
                      <span className={`${type.micro} block`} style={{ color: ACCENT }}>
                        Estimator configuration detected
                      </span>
                      <span className={`${type.caption} font-bold mt-1 block`} style={{ color: NAVY }}>
                        Capacity: {formData.kva ? `${formData.kva} kVA` : "Not specified"} · Sector: {formData.sector || "—"}
                      </span>
                    </div>
                  </div>
                )}

                {isSubmitted ? (
                  <div className="bg-[#f4f5f7] border border-[#e2e5ea] rounded-lg p-8 text-center flex flex-col items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${NAVY}15`, color: NAVY }}
                    >
                      <ShieldCheck size={28} />
                    </div>
                    <h4 className={type.cardTitle} style={{ color: NAVY }}>
                      Request Received Successfully
                    </h4>
                    <p className={`${type.body} text-[#6b7280] max-w-md`}>
                      Thank you, <span className="font-bold" style={{ color: NAVY }}>{formData.name}</span>. Our team will contact you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={resetForm}
                      className={`mt-2 border border-[#d1d5db] text-[#4a5568] px-6 py-2.5 rounded-md ${type.btn} hover:bg-[#f4f5f7] transition-colors`}
                    >
                      Submit Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <User size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Your Name *"
                          className={inputClass}
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="relative">
                        <Mail size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="Email Address *"
                          className={inputClass}
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <Phone size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="Phone Number *"
                          className={inputClass}
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="relative">
                        <Wrench size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9ca3af] z-10" />
                        <select
                          name="service"
                          required
                          className={`${inputClass} appearance-none cursor-pointer pr-10`}
                          value={formData.service}
                          onChange={handleInputChange}
                        >
                          <option value="" disabled>
                            Select Service *
                          </option>
                          <option value="generators">Silent Generators</option>
                          <option value="cables">Cables</option>
                          <option value="distribution">Distribution Boards</option>
                          <option value="compressors">Air Compressors</option>
                          <option value="lights">Tower Lights</option>
                          <option value="tanks">Diesel Tanks</option>
                          <option value="loadbank">Load Bank</option>
                          <option value="maintenance">Maintenance & Support</option>
                        </select>
                        <ChevronDown size={17} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9ca3af] pointer-events-none" />
                      </div>
                    </div>

                    <div className="relative">
                      <FileText size={17} className="absolute left-3.5 top-4 text-[#9ca3af]" />
                      <textarea
                        name="details"
                        required
                        rows={5}
                        placeholder="Project Details *"
                        className={`${inputClass} resize-none pt-3.5`}
                        value={formData.details}
                        onChange={handleInputChange}
                      />
                    </div>

                    <button
                      type="submit"
                      className={`w-full text-white ${type.btn} py-3.5 rounded-lg flex items-center justify-center gap-2 transition-opacity hover:opacity-90`}
                      style={{ backgroundColor: NAVY }}
                    >
                      Send Message <ArrowRight size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Map + location */}
          <div className="mt-12 md:mt-14 border border-[#e2e8f0] rounded-xl overflow-hidden bg-white shadow-[0_4px_24px_rgba(0,28,85,0.05)] grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-[300px] lg:min-h-[380px]">
              <iframe
                src={companyData.contact.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title="Justified Technical — Abu Dhabi location"
              />
            </div>

            <div className="p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin size={22} style={{ color: NAVY }} className="shrink-0 mt-0.5" />
                  <div>
                    <span className={`${type.eyebrow} block mb-1`} style={{ color: ACCENT }}>
                      OUR LOCATION
                    </span>
                    <h3 className={type.panelTitle} style={{ color: NAVY }}>
                      {companyData.contact.address.city}
                    </h3>
                  </div>
                </div>
                <a
                  href={companyData.contact.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${type.contactValue} pl-9 hover:opacity-80 transition-opacity`}
                  style={{ color: NAVY }}
                >
                  View on Google Maps
                </a>
              </div>

              <div className="border-t border-[#e8ecf1] my-8" />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <MapPin size={22} className="mb-3" style={{ color: NAVY }} />
                  <h4 className={`${type.cardTitle} mb-2`} style={{ color: NAVY }}>
                    Strategic Location
                  </h4>
                  <p className={`${type.body} text-[#6b7280]`}>
                    Our Abu Dhabi workshop and office support projects across the UAE.
                  </p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={NAVY}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mb-3"
                    aria-hidden
                  >
                    <path d="M2 20h20" />
                    <path d="M5 20V10l7-6 7 6v10" />
                    <path d="M9 20v-6h6v6" />
                  </svg>
                  <h4 className={`${type.cardTitle} mb-2`} style={{ color: NAVY }}>
                    Easy Access
                  </h4>
                  <p className={`${type.body} text-[#6b7280]`}>
                    Easy access to major highways and industrial areas.
                  </p>
                </div>
                <div>
                  <Truck size={22} className="mb-3" style={{ color: NAVY }} />
                  <h4 className={`${type.cardTitle} mb-2`} style={{ color: NAVY }}>
                    On-Time Delivery
                  </h4>
                  <p className={`${type.body} text-[#6b7280]`}>
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
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="w-10 h-10 rounded-full border-2 border-t-transparent animate-spin" style={{ borderColor: NAVY, borderTopColor: "transparent" }} />
        </div>
      }
    >
      <ContactContent />
    </Suspense>
  );
}
