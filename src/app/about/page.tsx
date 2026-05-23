"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  Eye,
  Globe,
  Handshake,
  HardHat,
  Headphones,
  HeartHandshake,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Settings,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  UserRound,
  Zap,
} from "lucide-react";
import companyData from "@/content/company.json";
import { HeroEyebrowLabel, HeroOutlineButton, PageHero } from "@/components/PageHero";
import { siteContainerClass } from "@/lib/layout";
import { ACCENT, NAVY } from "@/lib/theme";
import { type } from "@/lib/typography";
const PANEL = "#eef2f7";

const salesPrimary = companyData.contact.sales.split(", ")[0];

export default function About() {
  const timeline = [
    {
      title: `Founded in ${companyData.established}`,
      desc: "We began in Abu Dhabi with a clear purpose — to provide dependable equipment rental and repair services.",
      icon: <Calendar size={16} strokeWidth={2} />,
    },
    {
      title: "Built on Reliability",
      desc: "Through continuous investment and expertise, we have expanded our fleet and capabilities to meet complex project requirements.",
      icon: <Settings size={16} strokeWidth={2} />,
    },
    {
      title: "Growing Together",
      desc: "We have grown to deliver high-capacity generators exceeding 1,250 kVA and a wide range of machinery to support industries across the UAE.",
      icon: <UserRound size={16} strokeWidth={2} />,
    },
    {
      title: "Our Commitment",
      desc: "We remain focused on innovation, safety, and operational excellence — driving the success of our clients and supporting the UAE's growth.",
      icon: <ShieldCheck size={16} strokeWidth={2} />,
    },
  ];

  const coreValuesRow1 = [
    { title: "Client Commitment", desc: "We prioritize our clients by delivering solutions that meet their exact needs.", icon: <HeartHandshake size={26} strokeWidth={1.5} /> },
    { title: "Reliability", desc: "We ensure consistent performance and dependable service on every project.", icon: <ShieldCheck size={26} strokeWidth={1.5} /> },
    { title: "Safety First", desc: "We follow strict safety practices to protect people, equipment & sites.", icon: <HardHat size={26} strokeWidth={1.5} /> },
    { title: "Integrity", desc: "We operate with transparency, honesty, and professionalism.", icon: <Handshake size={26} strokeWidth={1.5} /> },
  ];

  const coreValuesRow2 = [
    { title: "Continuous Improvement", desc: "We constantly upgrade our equipment and processes to deliver better results.", icon: <TrendingUp size={26} strokeWidth={1.5} /> },
    { title: "Teamwork", desc: "We collaborate effectively to achieve the best outcomes for our clients.", icon: <UserRound size={26} strokeWidth={1.5} /> },
    { title: "Responsible Growth", desc: "We aim to grow sustainably while supporting development in the UAE.", icon: <Leaf size={26} strokeWidth={1.5} /> },
  ];

  const standards = [
    "Focus on quality service and reliable equipment",
    "Ensuring a safe and healthy work environment",
    "Strict adherence to safety practices on every site",
    "Responsible and environmentally conscious operations.",
  ];

  const stats = [
    { value: String(companyData.established), label: "Established", icon: <Calendar className="w-8 h-8" /> },
    { value: "1250+", label: "kVA Capacity", icon: <Zap className="w-8 h-8" /> },
    { value: "24/7", label: "Support Available", icon: <Headphones className="w-8 h-8" /> },
    { value: "UAE Wide", label: "Coverage", icon: <Globe className="w-8 h-8" /> },
    { value: "100%", label: "Quality Commitment", icon: <ShieldCheck className="w-8 h-8" /> },
  ];

  return (
    <div className="bg-white text-[#374151] min-h-screen font-sans overflow-x-hidden">
      <PageHero
        imageSrc="/images/About us hero.png"
        imageAlt="Generator with UAE skyline"
        eyebrow={<HeroEyebrowLabel>ABOUT US</HeroEyebrowLabel>}
        title={
          <h1 className={type.hero}>
            POWER YOU CAN
            <br />
            <span style={{ color: ACCENT }}>RELY ON</span>
          </h1>
        }
        description={
          <>
            Power you can rely on.
            <br />
            People you can trust.
          </>
        }
        actions={
          <HeroOutlineButton href="#about-intro">
            Learn More <ArrowRight size={14} />
          </HeroOutlineButton>
        }
      />

      {/* ── Intro + Our Story ── */}
      <section id="about-intro" className="py-14 md:py-16 bg-white">
        <div className={siteContainerClass}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <span className={`${type.eyebrow} block mb-2`} style={{ color: ACCENT }}>
                ABOUT JUSTIFIED TECHNICAL SOLUTIONS
              </span>
              <h2 className={`${type.sectionTitle} mb-4`} style={{ color: NAVY }}>
                Power &amp; Performance You Can Rely On.
              </h2>
              <span className="block w-12 h-[3px] mb-6" style={{ backgroundColor: ACCENT }} />

              <div className={`space-y-5 ${type.body} text-[#4a5568] mb-8 max-w-xl`}>
                <p>
                  {companyData.legalName.full} has served the UAE since {companyData.established} from our base in {companyData.headquarters}.
                </p>
                <p>
                  We specialize in {companyData.servicesSummary.toLowerCase()}, delivering dependable machinery and power solutions tailored to demanding project needs.
                </p>
                <p>
                  Our Abu Dhabi branch combines a workshop and office to support construction, industrial, and event projects across the Emirates with reliability, efficiency, and excellence.
                </p>
              </div>

              <Link
                href="/equipment-services"
                className={`inline-flex items-center gap-2 text-white ${type.btn} px-7 py-3.5 rounded-md transition-colors hover:opacity-90`}
                style={{ backgroundColor: NAVY }}
              >
                Our Services <ArrowRight size={14} />
              </Link>
            </div>

            <div className="rounded-xl p-7 md:p-9" style={{ backgroundColor: PANEL }}>
              <h3 className={`${type.panelTitle} mb-2`} style={{ color: NAVY }}>
                OUR STORY
              </h3>
              <span className="block w-10 h-[3px] mb-7" style={{ backgroundColor: ACCENT }} />

              <div className="relative pl-1">
                <div className="absolute left-[17px] top-2 bottom-2 w-[2px]" style={{ backgroundColor: ACCENT }} />
                <ul className="space-y-7">
                  {timeline.map((item) => (
                    <li key={item.title} className="relative pl-12">
                      <div
                        className="absolute left-0 top-0 w-[34px] h-[34px] rounded-full text-white flex items-center justify-center border-2 border-white shadow-sm"
                        style={{ backgroundColor: NAVY }}
                      >
                        {item.icon}
                      </div>
                      <h4 className={`${type.cardTitle} mb-1`} style={{ color: NAVY }}>
                        {item.title}
                      </h4>
                      <p className={`${type.body} text-[#6b7280]`}>{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision / Values / Standards ── */}
      <section className="py-12 md:py-14" style={{ backgroundColor: PANEL }}>
        <div className={siteContainerClass}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-3 bg-white rounded-xl border border-[#e2e8f0] p-6 md:p-7">
              <h3 className={`flex items-center gap-2 ${type.cardTitle} mb-6`} style={{ color: NAVY }}>
                <Eye size={18} style={{ color: ACCENT }} />
                VISION
              </h3>
              <div className="space-y-5 text-left">
                <div>
                  <h4 className={`${type.cardTitle} mb-2`} style={{ color: NAVY }}>
                    Short-Term Vision
                  </h4>
                  <p className={`${type.body} text-[#6b7280]`}>
                    To expand our equipment fleet with advanced and efficient machinery while maintaining high service standards and fast response across the UAE.
                  </p>
                </div>
                <span className="block w-8 h-[2px]" style={{ backgroundColor: ACCENT }} />
                <div>
                  <h4 className={`${type.cardTitle} mb-2`} style={{ color: NAVY }}>
                    Long-Term Vision
                  </h4>
                  <p className={`${type.body} text-[#6b7280]`}>
                    To grow across the GCC and become a recognized leader in construction equipment rental and machinery services, known for reliability and innovation.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white rounded-xl border border-[#e2e8f0] p-6 md:p-8">
              <h3 className={`text-center ${type.cardTitle} mb-8`} style={{ color: NAVY }}>
                OUR CORE VALUES
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-6 border-b border-[#e8ecf1]">
                {coreValuesRow1.map((val) => (
                  <div key={val.title} className="text-center px-1">
                    <div className="flex justify-center mb-3" style={{ color: NAVY }}>
                      {val.icon}
                    </div>
                    <h4 className={`${type.micro} mb-1.5`} style={{ color: NAVY }}>
                      {val.title}
                    </h4>
                    <p className={`${type.caption} text-[#6b7280]`}>{val.desc}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                {coreValuesRow2.map((val) => (
                  <div key={val.title} className="text-center px-1">
                    <div className="flex justify-center mb-3" style={{ color: NAVY }}>
                      {val.icon}
                    </div>
                    <h4 className={`${type.micro} mb-1.5`} style={{ color: NAVY }}>
                      {val.title}
                    </h4>
                    <p className={`${type.caption} text-[#6b7280]`}>{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 bg-white rounded-xl border border-[#e2e8f0] p-6 md:p-7">
              <h3 className={`flex items-center gap-2 ${type.cardTitle} mb-6`} style={{ color: NAVY }}>
                <Award size={18} style={{ color: ACCENT }} />
                STANDARDS THAT DEFINE US
              </h3>
              <ul className="space-y-4">
                {standards.map((item) => (
                  <li key={item} className="flex gap-2.5 items-start">
                    <CheckCircle2 size={17} className="shrink-0 mt-0.5" style={{ color: ACCENT }} />
                    <p className={`${type.body} text-[#6b7280]`}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="py-9 md:py-10 text-white" style={{ backgroundColor: NAVY }}>
        <div className={siteContainerClass}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-4">
            {stats.map((item, idx) => (
              <div
                key={item.label}
                className={`flex items-center gap-3 justify-center lg:justify-start ${
                  idx < stats.length - 1 ? "lg:border-r lg:border-white/15 lg:pr-6" : ""
                }`}
              >
                <div className="opacity-95 shrink-0">{item.icon}</div>
                <div>
                  <p className={`${type.stat} text-white`}>{item.value}</p>
                  <p className={`text-white/70 ${type.caption} mt-1`}>{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA + Contact card ── */}
      <section className="bg-white py-10 md:py-14">
        <div className={siteContainerClass}>
          <div className="flex flex-col lg:flex-row rounded-2xl border border-[#e2e8f0] overflow-hidden shadow-[0_4px_24px_rgba(0,28,85,0.06)]">
            <div
              className="lg:w-[33%] xl:w-[32%] p-8 md:p-10 lg:p-11 text-white flex flex-col justify-center text-left"
              style={{ backgroundColor: NAVY }}
            >
              <h3 className={`${type.panelTitle} text-white mb-3`}>
                Let&apos;s Power Your Success
              </h3>
              <p className={`${type.body} text-white/90 mb-8 max-w-xs`}>
                Partner with us for reliable equipment, expert support, and complete peace of mind.
              </p>
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 bg-white ${type.btn} px-6 py-3 rounded-lg w-fit transition-opacity hover:opacity-90`}
                style={{ color: NAVY }}
              >
                Get a Quote <ArrowRight size={15} strokeWidth={2.5} />
              </Link>
            </div>

            <div className="flex-1 bg-white grid grid-cols-2 divide-x divide-y divide-[#e8ecf1] lg:flex lg:flex-row lg:divide-y-0">
              {[
                {
                  icon: <Phone size={22} strokeWidth={1.5} />,
                  label: companyData.contact.telLabel,
                  content: (
                    <a
                      href={`tel:${companyData.contact.tel.replace(/[-+\s]/g, "")}`}
                      className={`${type.contactValue} hover:opacity-80 transition-opacity`}
                      style={{ color: NAVY }}
                    >
                      {companyData.contact.tel}
                    </a>
                  ),
                },
                {
                  icon: <Smartphone size={22} strokeWidth={1.5} />,
                  label: "Sales Department",
                  content: (
                    <a
                      href={`tel:${salesPrimary.replace(/\s+/g, "")}`}
                      className={`${type.contactValue} hover:opacity-80 transition-opacity`}
                      style={{ color: NAVY }}
                    >
                      {salesPrimary}
                    </a>
                  ),
                },
                {
                  icon: <Mail size={22} strokeWidth={1.5} />,
                  label: "Email Us",
                  content: (
                    <a
                      href={`mailto:${companyData.contact.email}`}
                      className={`${type.contactValue} hover:opacity-80 transition-opacity break-all`}
                      style={{ color: NAVY }}
                    >
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
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: "#e8f1fa", color: NAVY }}
                  >
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
