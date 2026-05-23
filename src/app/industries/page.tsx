"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  Headphones,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";
import { IndustryIcon } from "@/components/IndustryIcon";
import { industriesList } from "@/content/industries";
import companyData from "@/content/company.json";
import { HeroEyebrowLabel, HeroOutlineButton, PageHero } from "@/components/PageHero";
import { siteContainerClass } from "@/lib/layout";
import { ACCENT, NAVY } from "@/lib/theme";
import { type } from "@/lib/typography";
const PANEL = "#eef2f7";

const salesPrimary = companyData.contact.sales.split(", ")[0];

const capabilities = [
  "Silent generators from 5 kVA to 1500 kVA",
  "Cables, distribution boards & change-over panels",
  "Air compressors, tower lights & diesel tanks",
  "Load bank testing & 24/7 maintenance support",
];

export default function IndustriesPage() {
  return (
    <div className="bg-white text-[#374151] min-h-screen font-sans overflow-x-hidden">
      <PageHero
        imageSrc="/images/Powering every industry.png"
        imageAlt="Construction skyline at dusk"
        eyebrow={<HeroEyebrowLabel>INDUSTRIES WE SERVE</HeroEyebrowLabel>}
        title={
          <h1 className={type.hero}>
            Powering Every
            <br />
            <span style={{ color: ACCENT }}>Industry</span>
          </h1>
        }
        description="From construction sites to critical infrastructure, we deliver dependable power and equipment solutions tailored to your sector."
        actions={
          <HeroOutlineButton href="#industries-list">
            Explore Industries <ArrowRight size={14} />
          </HeroOutlineButton>
        }
      />

      {/* Intro */}
      <section className="py-12 md:py-14 bg-white">
        <div className={`${siteContainerClass} text-center`}>
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="h-px w-12 bg-[#d1d5db]" />
            <span className={type.eyebrow} style={{ color: ACCENT }}>
              SECTORS WE SUPPORT
            </span>
            <span className="h-px w-12 bg-[#d1d5db]" />
          </div>
          <h2 className={`${type.sectionTitle} mb-4`} style={{ color: NAVY }}>
            POWERING EVERY INDUSTRY
          </h2>
          <p className={`${type.body} text-[#6b7280] max-w-2xl mx-auto`}>
            We partner with leading organizations across the UAE — providing generators, machinery, and technical support wherever reliable power is essential.
          </p>
        </div>
      </section>

      {/* Industry cards — 4×2 grid */}
      <section id="industries-list" className="py-10 md:py-14" style={{ backgroundColor: PANEL }}>
        <div className={siteContainerClass}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {industriesList.map((ind) => (
              <article
                key={ind.id}
                id={ind.id}
                className="bg-white border border-[#e2e8f0] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col text-center group"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e8ecf1]">
                  <Image
                    src={ind.image}
                    alt={ind.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="relative px-4 pt-9 pb-6 flex flex-col flex-1 items-center">
                  <div
                    className="absolute left-1/2 -translate-x-1/2 -top-6 w-12 h-12 rounded-full bg-white border-2 flex items-center justify-center shadow-sm p-2.5"
                    style={{ borderColor: NAVY, color: NAVY }}
                  >
                    <IndustryIcon id={ind.id} />
                  </div>

                  <h3
                    className={`${type.micro} mb-2.5 mt-1`}
                    style={{ color: NAVY }}
                  >
                    {ind.name}
                  </h3>
                  <p className={`${type.body} text-[#4a5568] px-1`}>
                    {ind.cardDescription}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-12 md:py-14 bg-white">
        <div className={siteContainerClass}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className={`${type.eyebrow} block mb-2`} style={{ color: ACCENT }}>
                WHAT WE DELIVER
              </span>
              <h2 className={`${type.sectionTitle} mb-4`} style={{ color: NAVY }}>
                Complete Solutions For Every Sector
              </h2>
              <span className="block w-12 h-[3px] mb-6" style={{ backgroundColor: ACCENT }} />
              <p className={`${type.body} text-[#6b7280] mb-6`}>
                No matter your industry, our team brings the right equipment, rapid deployment, and round-the-clock support to keep your operations running.
              </p>
              <Link
                href="/equipment-services"
                className={`inline-flex items-center gap-2 text-white ${type.btn} px-7 py-3.5 rounded-md transition-opacity hover:opacity-90`}
                style={{ backgroundColor: NAVY }}
              >
                View Our Services <ArrowRight size={14} />
              </Link>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 p-4 rounded-lg border border-[#e8ecf1] bg-[#f8f9fb]"
                >
                  <CheckCircle2 size={18} className="shrink-0 mt-0.5" style={{ color: ACCENT }} />
                  <span className={`${type.body} text-[#4a5568]`}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-12 md:py-14" style={{ backgroundColor: PANEL }}>
        <div className={siteContainerClass}>
          <h3 className={`text-center ${type.cardTitle} tracking-[0.2em] mb-10`} style={{ color: NAVY }}>
            WHY PARTNER WITH US?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { title: "Reliable Equipment", desc: "Well-maintained fleet.", icon: <ShieldCheck size={28} strokeWidth={1.5} /> },
              { title: "On-Time Delivery", desc: "Fast UAE-wide dispatch.", icon: <Clock size={28} strokeWidth={1.5} /> },
              { title: "24/7 Support", desc: "Always here for you.", icon: <Headphones size={28} strokeWidth={1.5} /> },
              { title: "Quality Assured", desc: "Safety & compliance.", icon: <Award size={28} strokeWidth={1.5} /> },
              { title: "UAE Wide Service", desc: "All Emirates covered.", icon: <MapPin size={28} strokeWidth={1.5} /> },
              { title: "Expert Team", desc: "Industry specialists.", icon: <Users size={28} strokeWidth={1.5} /> },
            ].map((item, idx, arr) => (
              <div
                key={item.title}
                className={`flex flex-col items-center text-center px-2 ${
                  idx < arr.length - 1 ? "lg:border-r lg:border-[#d8dee8]" : ""
                }`}
              >
                <div className="mb-3" style={{ color: ACCENT }}>
                  {item.icon}
                </div>
                <h4 className={`${type.micro} mb-1.5`} style={{ color: NAVY }}>
                  {item.title}
                </h4>
                <p className={`${type.caption} text-[#6b7280]`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-9 md:py-10 text-white" style={{ backgroundColor: NAVY }}>
        <div className={siteContainerClass}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4">
            {[
              { value: String(companyData.established), label: "Established", icon: <Calendar className="w-7 h-7" /> },
              { value: "1250+", label: "kVA Capacity", icon: <Zap className="w-7 h-7" /> },
              { value: "24/7", label: "Support Available", icon: <Headphones className="w-7 h-7" /> },
              { value: "100%", label: "Quality Commitment", icon: <ShieldCheck className="w-7 h-7" /> },
            ].map((item, idx, arr) => (
              <div
                key={item.label}
                className={`flex items-center gap-3 justify-center lg:justify-start ${
                  idx < arr.length - 1 ? "lg:border-r lg:border-white/15 lg:pr-8" : ""
                }`}
              >
                <div className="shrink-0 opacity-95">{item.icon}</div>
                <div>
                  <p className={`${type.stat} text-white`}>{item.value}</p>
                  <p className={`text-white/70 ${type.caption} mt-1`}>{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA card */}
      <section className="bg-white py-10 md:py-14">
        <div className={siteContainerClass}>
          <div className="flex flex-col lg:flex-row rounded-2xl border border-[#e2e8f0] overflow-hidden shadow-[0_4px_24px_rgba(0,28,85,0.06)]">
            <div
              className="lg:w-[33%] p-8 md:p-10 text-white flex flex-col justify-center"
              style={{ backgroundColor: NAVY }}
            >
              <h3 className={`${type.panelTitle} text-white mb-3`}>
                Let&apos;s Power Your Success
              </h3>
              <p className={`${type.body} text-white/90 mb-8 max-w-xs`}>
                Tell us about your industry and project — we&apos;ll recommend the right equipment and support.
              </p>
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 bg-white ${type.btn} px-6 py-3 rounded-lg w-fit hover:opacity-90 transition-opacity`}
                style={{ color: NAVY }}
              >
                Get a Quote <ArrowRight size={15} />
              </Link>
            </div>
            <div className="flex-1 bg-white grid grid-cols-2 divide-x divide-y divide-[#e8ecf1] lg:flex lg:flex-row lg:divide-y-0">
              {[
                {
                  icon: <Phone size={22} strokeWidth={1.5} />,
                  label: companyData.contact.telLabel,
                  content: (
                    <a href={`tel:${companyData.contact.tel.replace(/[-+\s]/g, "")}`} className={type.contactValue} style={{ color: NAVY }}>
                      {companyData.contact.tel}
                    </a>
                  ),
                },
                {
                  icon: <Smartphone size={22} strokeWidth={1.5} />,
                  label: "Sales Department",
                  content: (
                    <a href={`tel:${salesPrimary.replace(/\s+/g, "")}`} className={type.contactValue} style={{ color: NAVY }}>
                      {salesPrimary}
                    </a>
                  ),
                },
                {
                  icon: <Mail size={22} strokeWidth={1.5} />,
                  label: "Email Us",
                  content: (
                    <a href={`mailto:${companyData.contact.email}`} className={`${type.contactValue} break-all`} style={{ color: NAVY }}>
                      {companyData.contact.email}
                    </a>
                  ),
                },
                {
                  icon: <MapPin size={22} strokeWidth={1.5} />,
                  label: "Abu Dhabi Branch",
                  content: (
                    <a
                      href={companyData.contact.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${type.contactValue} hover:opacity-80 transition-opacity`}
                      style={{ color: NAVY }}
                    >
                      {companyData.contact.address.city}
                    </a>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-center text-center px-3 py-8 sm:px-5 md:py-10 min-w-0 lg:flex-1"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "#e8f1fa", color: NAVY }}>
                    {item.icon}
                  </div>
                  <span className={`${type.contactLabel} mb-1.5`} style={{ color: NAVY }}>
                    {item.label}
                  </span>
                  {item.content}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
