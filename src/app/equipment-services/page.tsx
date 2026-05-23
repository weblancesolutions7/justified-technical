"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Calendar,
  Cable,
  Clock,
  Cpu,
  Database,
  Headphones,
  Lightbulb,
  Mail,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Sliders,
  Users,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";
import companyData from "@/content/company.json";
import { HeroEyebrowLabel, HeroOutlineButton, PageHero } from "@/components/PageHero";
import { ACCENT, NAVY } from "@/lib/theme";
import { type } from "@/lib/typography";

const services = [
  {
    id: "generators",
    title: "SOUND PROOF GENERATORS",
    subtitle: "(5 KVA - 1500 KVA)",
    desc: "Wide range of soundproof generators from 5 KVA to 1500 KVA to ensure uninterrupted power for any project.",
    image: "/images/new-equipment/soundproof generator.png",
    icon: <Zap size={18} strokeWidth={2} />,
  },
  {
    id: "cables",
    title: "CABLES",
    subtitle: "UP TO 5000 METER",
    desc: "High quality cables for power distribution and connections available up to 5000 meter.",
    image: "/images/new-equipment/cables.png",
    icon: <Cable size={18} strokeWidth={2} />,
  },
  {
    id: "distribution",
    title: "DISTRIBUTION BOARD &",
    subtitle: "CHANGE OVER SWITCH BOARD",
    desc: "Reliable distribution boards and change over switch boards for safe and efficient power management.",
    image: "/images/new-equipment/Distribution boards and change over switch board.png",
    icon: <Sliders size={18} strokeWidth={2} />,
  },
  {
    id: "compressors",
    title: "AIR COMPRESSORS",
    subtitle: "(150 CFM - 950 CFM)",
    desc: "High performance air compressors ranging from 150 CFM to 950 CFM for industrial applications.",
    image: "/images/new-equipment/Air compressor (services).png",
    icon: <Wind size={18} strokeWidth={2} />,
  },
  {
    id: "lights",
    title: "TOWER LIGHTS",
    subtitle: "",
    desc: "High illumination tower lights for enhanced visibility and safety at project sites.",
    image: "/images/new-equipment/Tower light night.png",
    icon: <Lightbulb size={18} strokeWidth={2} />,
  },
  {
    id: "tanks",
    title: "DIESEL TANKS",
    subtitle: "",
    desc: "Durable and compliant diesel tanks for safe fuel storage and supply.",
    image: "/images/new-equipment/diesel tank.png",
    icon: <Database size={18} strokeWidth={2} />,
  },
  {
    id: "loadbank",
    title: "LOAD BANK",
    subtitle: "",
    desc: "Advanced load bank solutions for testing and maintaining generator performance.",
    image: "/images/new-equipment/load bank (services).png",
    icon: <Cpu size={18} strokeWidth={2} />,
  },
  {
    id: "support",
    title: "MAINTENANCE & SUPPORT",
    subtitle: "",
    desc: "Expert maintenance and 24/7 support to ensure maximum uptime and reliable operation.",
    image: "/images/new-equipment/Maintenance and support (2).png",
    icon: <Wrench size={18} strokeWidth={2} />,
  },
];

const whyChoose = [
  { title: "Reliable Equipment", desc: "Well-maintained and high-performance equipment.", icon: <ShieldCheck size={28} strokeWidth={1.5} /> },
  { title: "On-Time Delivery", desc: "Fast and flexible delivery across the UAE.", icon: <Clock size={28} strokeWidth={1.5} /> },
  { title: "24/7 Support", desc: "Round-the-clock support whenever you need us.", icon: <Headphones size={28} strokeWidth={1.5} /> },
  { title: "Quality Assured", desc: "Committed to safety, quality and industry standards.", icon: <Award size={28} strokeWidth={1.5} /> },
  { title: "UAE Wide Service", desc: "Serving all Emirates with quick response and coverage.", icon: <MapPin size={28} strokeWidth={1.5} /> },
  { title: "Experienced Team", desc: "Skilled professionals with deep industry expertise.", icon: <Users size={28} strokeWidth={1.5} /> },
];

const stats = [
  { value: "2018", label: "Established", icon: <Calendar className="w-7 h-7" /> },
  { value: "1250+", label: "kVA Capacity", icon: <Zap className="w-7 h-7" /> },
  { value: "24/7", label: "Support Available", icon: <Headphones className="w-7 h-7" /> },
  { value: "100%", label: "Quality Commitment", icon: <ShieldCheck className="w-7 h-7" /> },
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
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
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
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
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

        <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
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
                  <span className={`${type.contactLabel} text-white/60 block`}>Call Us</span>
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
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4">
              {stats.map((item, idx) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-3 justify-center lg:justify-start text-white ${
                    idx < stats.length - 1 ? "lg:border-r lg:border-white/15 lg:pr-8" : ""
                  }`}
                >
                  <div className="opacity-90 shrink-0">{item.icon}</div>
                  <div>
                    <p className={type.stat}>{item.value}</p>
                    <p className={`text-white/65 ${type.caption} mt-1`}>{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
