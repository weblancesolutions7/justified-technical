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
  PhoneCall,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import { StatsBar } from "@/components/StatsBar";
import { IndustryIcon } from "@/components/IndustryIcon";
import { industriesList } from "@/content/industries";
import companyData from "@/content/company.json";
import { HeroOutlineButton, PageHero } from "@/components/PageHero";
import { siteContainerClass } from "@/lib/layout";
import { ACCENT, NAVY } from "@/lib/theme";
import { type } from "@/lib/typography";

const PANEL = "#eef2f7";

const capabilities = [
  "Silent generators from 5 kVA to 1500 kVA",
  "Cables, distribution boards & change-over panels",
  "Automatic transfer switches (ATS) & synchronizing panels",
  "Industrial field welding machines",
  "Air compressors, tower lights & diesel tanks",
  "Load bank testing & 24/7 maintenance support",
];

const whyChoose = [
  { title: "Reliable Equipment", desc: "Well-maintained and high-performance equipment.", icon: <ShieldCheck size={34} strokeWidth={1.5} /> },
  { title: "On-Time Delivery", desc: "Fast and flexible delivery across the UAE.", icon: <Clock size={34} strokeWidth={1.5} /> },
  { title: "24/7 Support", desc: "Round-the-clock support whenever you need us.", icon: <Headphones size={34} strokeWidth={1.5} /> },
  { title: "Quality Assured", desc: "Committed to safety, quality and industry standards.", icon: <Award size={34} strokeWidth={1.5} /> },
  { title: "UAE Wide Service", desc: "Serving all Emirates with quick response and coverage.", icon: <MapPin size={34} strokeWidth={1.5} /> },
  { title: "Expert Team", desc: "Skilled professionals with deep industry expertise.", icon: <Users size={34} strokeWidth={1.5} /> },
];

const stats = [
  { value: String(companyData.established), label: "Established", icon: <Calendar className="text-white" /> },
  { value: "500+", label: "Units of equipment ", icon: <Zap className="text-white" /> },
  { value: "24/7", label: "Support Available", icon: <Headphones className="text-white" /> },
  { value: "100%", label: "Quality Commitment", icon: <ShieldCheck className="text-white" /> },
];

export default function IndustriesPage() {
  return (
    <div className="bg-white text-[#374151] min-h-screen font-sans overflow-x-hidden">
      <PageHero
        imageSrc="/images/Industries We Serve.png"
        imageAlt="Industries we serve across the UAE"
        eyebrow={
          <div className="flex items-center gap-3.5 mb-4 justify-center lg:justify-start">
            <span className="type-eyebrow text-base sm:text-lg md:text-xl font-black tracking-[0.25em] text-white lg:text-inherit">
              INDUSTRIES WE SERVE
            </span>
            <span className="w-12 h-[4px] shrink-0" style={{ backgroundColor: ACCENT }} />
          </div>
        }
        title={
          <h1 className="text-2xl sm:text-3xl md:text-[2.4rem] font-extrabold uppercase tracking-tight leading-tight text-white lg:text-inherit">
            Powering Every <span style={{ color: ACCENT }}>Industry</span>
          </h1>
        }
        description="From construction sites to critical infrastructure, we deliver dependable power and equipment solutions tailored to your sector."
        actions={
          <HeroOutlineButton href="#industries-list">
            Explore Industries <ArrowRight size={14} />
          </HeroOutlineButton>
        }
      />

      {/* Industries grid */}
      <section id="industries-list" className="py-14 md:py-16 bg-white">
        <div className={siteContainerClass}>
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
            <div className="flex items-center justify-center gap-4 mb-3.5">
              <span className="h-[2px] w-12 bg-[#d1d5db]" />
              <span
                className="type-eyebrow text-sm sm:text-[0.95rem] md:text-base font-extrabold tracking-[0.22em]"
                style={{ color: ACCENT }}
              >
                SECTORS WE SUPPORT
              </span>
              <span className="h-[2px] w-12 bg-[#d1d5db]" />
            </div>
            <h2 className={`${type.sectionTitle} mb-4`} style={{ color: NAVY }}>
              POWERING EVERY INDUSTRY
            </h2>
            <p className={`${type.body} text-[#6b7280]`}>
              We partner with leading organizations across the UAE — providing generators, machinery, and technical support wherever reliable power is essential.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
            {industriesList.map((ind) => (
              <article
                key={ind.id}
                id={ind.id}
                className="bg-white border border-[#e8ecf1] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col text-left group"
              >
                <div className="relative px-3 pt-3">
                  <div className="relative aspect-[1.45] w-full rounded-lg overflow-hidden bg-[#f4f5f7]">
                    <Image
                      src={ind.image}
                      alt={ind.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div
                    className="absolute left-7 bottom-0 w-10 h-10 rounded-full text-white flex items-center justify-center border-[3px] border-white shadow-md -mb-5 z-10 p-2"
                    style={{ backgroundColor: NAVY }}
                  >
                    <IndustryIcon id={ind.id} />
                  </div>
                </div>

                <div className="px-5 pt-8 pb-6 flex flex-col flex-1">
                  <h3
                    className="type-card-title text-base sm:text-[1.05rem] md:text-lg font-extrabold uppercase tracking-wide leading-tight mb-1"
                    style={{ color: NAVY }}
                  >
                    {ind.name}
                  </h3>
                  <span
                    className="type-micro text-xs sm:text-sm font-bold uppercase tracking-wider mb-2.5 block"
                    style={{ color: ACCENT }}
                  >
                    {ind.subtitle}
                  </span>
                  <p className={`${type.body} text-[#6b7280] mb-4 flex-1`}>{ind.cardDescription}</p>
                  <Link
                    href={`/contact?sector=${encodeURIComponent(ind.name)}`}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-extrabold underline underline-offset-2 w-fit"
                    style={{ color: ACCENT }}
                  >
                    Get a Quote <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-14 md:py-16 bg-white border-t border-[#e8ecf1]">
        <div className={siteContainerClass}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <span className={`${type.eyebrow} block mb-2`} style={{ color: ACCENT }}>
                WHAT WE DELIVER
              </span>
              <h2 className={`${type.sectionTitle} mb-4`} style={{ color: NAVY }}>
                Complete Solutions For Every Sector
              </h2>
              <span className="block w-12 h-[3px] mb-6" style={{ backgroundColor: ACCENT }} />
              <p className={`${type.body} text-[#6b7280] mb-8 max-w-xl`}>
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
                  className="flex items-start gap-3 p-4 rounded-xl border border-[#e8ecf1] bg-[#f8f9fb]"
                >
                  <CheckCircle2 size={17} className="shrink-0 mt-0.5" style={{ color: ACCENT }} />
                  <p className="text-sm text-[#6b7280] leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-12 md:py-14" style={{ backgroundColor: PANEL }}>
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
                <p className="text-xs sm:text-sm text-[#5a6474] font-medium leading-relaxed max-w-[170px] mx-auto mt-0.5">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + stats — matches equipment-services */}
      <section className="relative overflow-hidden" style={{ backgroundColor: NAVY }}>
        <div className="absolute right-0 top-0 bottom-0 w-[40%] hidden lg:block opacity-[0.12]">
          <Image
            src="/images/Industries We Serve.png"
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
                Tell us about your industry and project — we&apos;ll recommend the right equipment and support.
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
              <p className={`text-white/60 ${type.caption} mt-3 uppercase tracking-wide`}>
                Quick response within 2 hours.
              </p>
            </div>
          </div>

          <div className="border-t border-white/15 py-8 md:py-9">
            <StatsBar stats={stats} />
          </div>
        </div>
      </section>
    </div>
  );
}
