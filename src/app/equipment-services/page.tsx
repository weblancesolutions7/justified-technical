"use client";

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
  { title: "Reliable Equipment", desc: "Well-maintained and high-performance equipment.", icon: <ShieldCheck size={28} strokeWidth={1.5} /> },
  { title: "On-Time Delivery", desc: "Fast and flexible delivery across the UAE.", icon: <Clock size={28} strokeWidth={1.5} /> },
  { title: "24/7 Support", desc: "Round-the-clock support whenever you need us.", icon: <Headphones size={28} strokeWidth={1.5} /> },
  { title: "Quality Assured", desc: "Committed to safety, quality and industry standards.", icon: <Award size={28} strokeWidth={1.5} /> },
  { title: "UAE Wide Service", desc: "Serving all Emirates with quick response and coverage.", icon: <MapPin size={28} strokeWidth={1.5} /> },
  { title: "Experienced Team", desc: "Skilled professionals with deep industry expertise.", icon: <Users size={28} strokeWidth={1.5} /> },
];

const stats = [
  { value: String(companyData.established), label: "Established", icon: <Calendar className="text-white" /> },
  { value: "1250+", label: "kVA Capacity", icon: <Zap className="text-white" /> },
  { value: "24/7", label: "Support Available", icon: <Headphones className="text-white" /> },
  { value: "100%", label: "Quality Commitment", icon: <ShieldCheck className="text-white" /> },
];

export default function EquipmentServicesPage() {
  return (
    <div className="bg-white text-[#374151] min-h-screen font-sans overflow-x-hidden">
      <PageHero
        imageSrc="/images/service-hero.png"
        imageAlt="Generator with UAE skyline"
        eyebrow={<HeroEyebrowLabel>OUR SERVICES</HeroEyebrowLabel>}
        title={
          <h1 className={type.hero}>
            Complete Solutions
            <br />
            Under <span style={{ color: ACCENT }}>One Roof</span>
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
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="h-px w-12 bg-[#d1d5db]" />
              <span className={type.eyebrow} style={{ color: ACCENT }}>
                WHAT WE OFFER
              </span>
              <span className="h-px w-12 bg-[#d1d5db]" />
            </div>
            <h2 className={`${type.sectionTitle} mb-4`} style={{ color: NAVY }}>
              OUR SERVICES
            </h2>
            <p className={`${type.body} text-[#6b7280]`}>
              We offer a wide range of high-performance equipment and technical solutions tailored to meet the needs of various industries and projects.
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

                <div className="px-4 pt-8 pb-5 flex flex-col flex-1">
                  <h3 className={`${type.cardTitle} mb-0.5`} style={{ color: NAVY }}>
                    {srv.title}
                  </h3>
                  {srv.subtitle ? (
                    <span className={`${type.micro} mb-2 block`} style={{ color: ACCENT }}>
                      {srv.subtitle}
                    </span>
                  ) : (
                    <span className="block h-4 mb-2" aria-hidden />
                  )}
                  <p className={`${type.body} text-[#6b7280] mb-4 flex-1`}>{srv.desc}</p>
                  <Link
                    href={`#${srv.id}`}
                    className={`inline-flex items-center gap-1 ${type.caption} font-bold underline underline-offset-2 w-fit`}
                    style={{ color: ACCENT }}
                  >
                    Learn More <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-12 md:py-14" style={{ backgroundColor: "#eef2f7" }}>
        <div className={siteContainerClass}>
          <h3 className={`text-center ${type.cardTitle} tracking-[0.2em] mb-10`} style={{ color: NAVY }}>
            WHY CHOOSE US?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
            {whyChoose.map((item, idx) => (
              <div
                key={item.title}
                className={`flex flex-col items-center text-center px-2 ${
                  idx < whyChoose.length - 1 ? "lg:border-r lg:border-[#d8dee8]" : ""
                }`}
              >
                <div className="mb-4" style={{ color: ACCENT }}>
                  {item.icon}
                </div>
                <h4 className={`${type.micro} mb-2`} style={{ color: NAVY }}>
                  {item.title}
                </h4>
                <p className={`${type.caption} text-[#6b7280] max-w-[140px]`}>{item.desc}</p>
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
    </div>
  );
}
