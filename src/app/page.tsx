"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Zap, Settings, ArrowRight, PhoneCall, Mail, MapPin, Link as LinkIcon, ChevronLeft, ChevronRight } from "lucide-react";
import companyData from "@/content/company.json";
import { industriesData } from "@/content/industries";
import EquipmentShowcase from "@/components/EquipmentShowcase";

export default function Home() {
  const [isPaused, setIsPaused] = useState(false);
  const equipmentScrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll equipment
  useEffect(() => {
    if (isPaused) return;
    const container = equipmentScrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      const isEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth - 10;
      if (isEnd) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const cardWidth = container.clientWidth * (window.innerWidth < 768 ? 0.85 : window.innerWidth < 1024 ? 0.45 : 0.3);
        const scrollAmount = cardWidth + 32;
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollEquipment = (direction: "left" | "right") => {
    const container = equipmentScrollRef.current;
    if (!container) return;
    const cardWidth = container.clientWidth * (window.innerWidth < 768 ? 0.85 : window.innerWidth < 1024 ? 0.45 : 0.3);
    const scrollAmount = cardWidth + 32;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };




  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[130vh] lg:min-h-[160vh] flex flex-col pt-32 pb-12 overflow-hidden bg-[#1e293b]">
        {/* Background Image: Single long height image of JCB under clouds */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Home Page.jpg.jpeg"
            alt="Home Page Background"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          {/* Dark Overlay for better contrast */}
          <div className="absolute inset-0 bg-[#0a1128]/60" />
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10 flex flex-col h-full min-h-[90vh]">
          {/* Main Headline - Centered at the top */}
          <div className="text-center w-full mt-24 md:mt-32">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl lg:text-7xl font-sans font-black text-white leading-[1.2] tracking-tighter pb-2 mb-2"
            >
              Empowering the UAE with
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-8xl font-sans font-black leading-[1.2] tracking-tighter pb-6"
              style={{
                background: "linear-gradient(to bottom, #ffffff 30%, #a1a1aa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              High-Performance Power and Machinery
            </motion.h1>
          </div>

          {/* Middle/Bottom Elements - Positioned to the sides */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-12 mt-24 md:mt-32 pb-20">
            {/* Left Stat */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-start"
            >
              <h2 className="text-7xl md:text-8xl font-black text-[#3B3C89] leading-none mb-1">2018</h2>
              <p className="text-white font-bold text-sm md:text-base uppercase tracking-widest opacity-90">Established in</p>
            </motion.div>

            {/* Right Action */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-right max-w-md flex flex-col items-end"
            >
              <p className="text-white text-sm md:text-base leading-relaxed mb-8 font-bold max-w-[420px] drop-shadow-md text-balance">
                From 1250kVA+ power systems to heavy-duty industrial equipment, we provide the reliable, large-scale machinery and distribution solutions that drive the UAE’s most ambitious construction and infrastructure projects.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#3B3C89] text-white px-10 py-3 rounded-lg font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-xl"
              >
                Get a Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>



      {/* About Us Section */}
      <section className="py-24 bg-[#111111]">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-16">

            {/* Left Content */}
            <div className="flex-1 w-full">
              <motion.h4
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[#3B3C89] font-bold uppercase tracking-widest text-sm mb-4"
              >
                Leading Provider of Construction Equipment Rental & Servicing in UAE
              </motion.h4>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl lg:text-6xl font-sans font-black text-white mb-8 leading-[1.1] tracking-tight"
              >
                Power and performance you can rely on… anytime, anywhere.
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/70 mb-12 leading-relaxed text-base md:text-lg max-w-2xl space-y-6 text-left"
              >
                <p>Founded in 2018, Qualified Machinery Services LLC was established to provide dependable construction equipment and power solutions to the rapidly growing UAE market. What began as a focused operation has evolved into a trusted leader, delivering high-performance equipment and services tailored to the most demanding project needs.</p>
                <p>From the outset, we committed ourselves to reliability, quality, and responsive service. By continuously investing in our fleet, we have expanded our capabilities to include high-capacity generators exceeding 1250kVA+, alongside a diverse range of heavy machinery, cooling systems, and complete power distribution solutions.</p>
                <p>Recognizing the evolving demands of the industry, we have broadened our expertise to include equipment rental, maintenance, and comprehensive project support. Our approach combines technical excellence with modern equipment to ensure consistent performance for construction, industrial operations, and large-scale events across Dubai, Abu Dhabi, and the wider UAE.</p>
                <p>As we look to the future, we remain dedicated to innovation and operational excellence, serving as a proud partner in the UAE’s ongoing infrastructure and development goals.</p>
              </motion.div>

              <div className="space-y-10">
                {/* Feature 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-8"
                >
                  <div className="text-[#3B3C89] shrink-0">
                    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 20h20" /><path d="m15 11-4 4-2-2" /><path d="M12 4v4" /><path d="m18 10-3-3" /><path d="m6 10 3-3" />
                      <path d="M9 16v4" /><path d="M15 16v4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[#3B3C89] font-bold text-xl md:text-2xl mb-1">Client Commitment</h3>
                    <p className="text-white text-base md:text-lg opacity-80">We prioritize our clients by delivering solutions that meet their exact needs.</p>
                  </div>
                </motion.div>

                {/* Feature 2 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-8"
                >
                  <div className="text-[#3B3C89] shrink-0">
                    <Settings size={56} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-[#3B3C89] font-bold text-xl md:text-2xl mb-1">Reliability</h3>
                    <p className="text-white text-base md:text-lg opacity-80">We ensure consistent performance and dependable service on every project.</p>
                  </div>
                </motion.div>

                {/* Feature 3 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-8"
                >
                  <div className="text-[#3B3C89] shrink-0">
                    <div className="w-14 h-14 border-2 border-current rounded-full flex items-center justify-center">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 18V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12" />
                        <path d="M2 14h20" /><path d="M6 14v4" /><path d="M18 14v4" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[#3B3C89] font-bold text-xl md:text-2xl mb-1">Continuous Improvement</h3>
                    <p className="text-white text-base md:text-lg opacity-80">We constantly upgrade our equipment and processes to deliver better results.</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Image with Unique Shape */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex-1 w-full relative h-[600px] lg:h-[750px] lg:sticky lg:top-32"
            >
              <div
                className="absolute inset-0 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                style={{
                  clipPath: "polygon(0 0, 82% 0, 100% 18%, 100% 100%, 0 100%)",
                  borderRadius: "3rem"
                }}
              >
                <Image
                  src="/images/12.jpg.jpeg"
                  alt="Heavy excavator equipment"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={100}
                  className="object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Ongoing Project & Vision Section */}
      <section className="bg-[#111111]">
        {/* Bottom: Core Values Grid */}
        <div className="py-24">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[#3B3C89] text-xl md:text-2xl font-sans font-black mb-6 uppercase tracking-widest">Our Vision</h3>
                <p className="text-white/90 leading-relaxed text-sm md:text-base font-medium">
                  To become the premier leader in machinery and power solutions across the GCC, driving industry innovation while providing an expanded fleet of advanced, high-efficiency equipment that powers the region’s most ambitious projects.
                </p>
              </motion.div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-[#3B3C89] text-xl md:text-2xl font-sans font-black mb-6 uppercase tracking-widest">Our Values</h3>
                <p className="text-white/90 leading-relaxed text-sm md:text-base font-medium">
                  We are committed to unwavering reliability and excellence, ensuring fast response times and elite service standards that our partners across the UAE can depend on for every industrial, construction, and event need.
                </p>
              </motion.div>

              {/* Motto */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-[#3B3C89] text-xl md:text-2xl font-sans font-black mb-6 uppercase tracking-widest">Standards That Define Us</h3>
                <p className="text-white/90 leading-relaxed text-sm md:text-base font-medium">
                  We prioritize quality service and equipment reliability while maintaining a safe, healthy work environment. Every site operates under strict safety adherence and a commitment to environmentally responsible operations.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* Dynamic Equipment Range Section */}
      <section className="py-24 bg-[#111111] border-t border-white/5">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <motion.h4
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[#3B3C89] font-bold uppercase tracking-widest text-sm mb-4"
              >
                OUR EQUIPMENT FLEET
              </motion.h4>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl lg:text-6xl font-sans font-black text-white mb-6 tracking-tight uppercase"
              >
                Heavy-Duty Range & <br className="hidden md:block" /><span className="text-[#3B3C89]">Power Solutions</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/50 text-sm md:text-base leading-relaxed font-medium"
              >
                Explore our modern fleet of meticulously maintained generators, air compressors, and site distribution systems engineered to power any UAE site.
              </motion.p>
            </div>
            <div className="flex gap-4 items-center self-start lg:self-end">
              <button
                onClick={() => scrollEquipment("left")}
                className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-[#3B3C89] hover:text-white hover:border-transparent transition-all active:scale-95 shadow-lg"
                aria-label="Scroll Left"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => scrollEquipment("right")}
                className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-[#3B3C89] hover:text-white hover:border-transparent transition-all active:scale-95 shadow-lg"
                aria-label="Scroll Right"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div
            ref={equipmentScrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex overflow-x-auto gap-8 pb-4 px-6 md:px-8 -mx-6 md:-mx-8 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {[
              {
                title: "Generators",
                range: "20–1250 kVA",
                desc: "High-performance rental generators for prime and standby applications. Fuel-efficient and sound-attenuated.",
                image: "/images/equipment/Generators.jpg.jpeg",
                specs: ["Soundproof Enclosures", "Synchronization Ready", "External Fuel Tank Links"]
              },
              {
                title: "Air Compressors",
                range: "150–1200 CFM",
                desc: "Industrial-grade diesel compressors for construction and oil field operations across the Emirates.",
                image: "/images/equipment/Air Compressor.jpg.jpeg",
                specs: ["High-Pressure Outputs", "Portable Units", "Environmental Safety Compliance"]
              },
              {
                title: "Tower Lights",
                range: "Diesel & Solar",
                desc: "Advanced mobile lighting systems designed for 24/7 construction sites and remote industrial yards.",
                image: "/images/equipment/Tower Lights.jpg.jpeg",
                specs: ["LED Efficiency", "Silent Operation", "Fast Deployment"]
              },
              {
                title: "Welding Machines",
                range: "400A – 600A",
                desc: "Heavy-duty diesel-driven welding generators for structural steel and fabrication projects.",
                image: "/images/equipment/Welding Machines.jpg.jpeg",
                specs: ["Multi-Process Capability", "Auxiliary Power", "Rough-Terrain Mobility"]
              },
              {
                title: "Load Banks & Panels",
                range: "Testing & Distribution",
                desc: "Complete power testing systems, ATS panels, and distribution boards for seamless site integration.",
                image: "/images/equipment/6.jpg.jpeg",
                specs: ["Resistive/Reactive Banks", "Automatic Transfer Switches", "Armored Power Cables"]
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col bg-white/5 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-[#3B3C89]/20 transition-all duration-500 backdrop-blur-sm shadow-xl flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] snap-start"
              >
                {/* Image Section */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 30vw"
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                  {/* Floating Range Chip */}
                  <span className="absolute bottom-4 left-6 bg-[#3B3C89] text-white px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider">
                    {item.range}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-white text-2xl font-black mb-3 uppercase tracking-tighter">{item.title}</h3>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6 text-left flex-grow font-medium">
                    {item.desc}
                  </p>

                  {/* Specs Bullets */}
                  <ul className="space-y-3 mb-8 border-t border-white/5 pt-6">
                    {item.specs.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-3 text-white/70 font-bold uppercase tracking-widest text-[9px]">
                        <div className="w-1.5 h-1.5 bg-[#3B3C89] rounded-full" />
                        {spec}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Request */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-white group-hover:text-[#3B3C89] font-black uppercase tracking-widest text-[10px] transition-colors mt-auto"
                  >
                    Request Technical Specs <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform text-[#3B3C89]" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Dynamic Equipment Showcase Section */}
      <section className="py-24 bg-[#161616] border-t border-white/5">
        <div className="container mx-auto px-6 md:px-8">
          <EquipmentShowcase industries={industriesData} />
          <div className="mt-12 text-center">
            <Link
              href="/equipment-services"
              className="inline-flex items-center gap-2 text-[#3B3C89] font-black uppercase tracking-widest text-xs hover:underline"
            >
              View All Equipment & Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>



      {/* Why Choose Us - Dark Section */}
      <section className="pt-24 pb-0 bg-[#111111] relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h4
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#3B3C89] font-bold uppercase tracking-widest text-sm mb-4"
            >
              WHY CHOOSE US
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6 tracking-tight uppercase"
            >
              Why Choose <br className="hidden md:block" /><span className="text-[#3B3C89]">Qualified Machinery Services LLC</span>
            </motion.h2>
          </div>

          <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 pb-16 lg:pb-24">

            {/* Center Worker Image (Brought to Front, aligned to exactly bottom 0) */}
            <div className="hidden md:flex w-full lg:w-[500px] justify-center relative h-[500px] lg:h-[750px] z-30 lg:absolute lg:left-1/2 lg:-translate-x-1/2 bottom-0 pointer-events-none">
              <Image
                src="/images/13.jpg.png"
                alt="Construction Worker"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                unoptimized
                className="object-contain object-bottom scale-[1.5] lg:scale-[1.65] origin-bottom"
                priority
              />
            </div>

            {/* Left Cards */}
            <div className="flex flex-col gap-5 lg:gap-6 w-full lg:w-[42%] z-20">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#1e1e1e] p-6 md:p-8 lg:pr-12 rounded-[2rem] shadow-2xl lg:-translate-x-2"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">Experienced Professionals</h3>
                <p className="text-[#9FA0CD] font-medium leading-relaxed text-sm md:text-base">
                  A skilled team with strong industry knowledge and hands-on expertise
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#3B3C89] p-6 md:p-8 lg:pr-12 rounded-[2rem] shadow-2xl lg:translate-x-4"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">Reliable Support</h3>
                <p className="text-white/80 font-medium leading-relaxed text-sm md:text-base">
                  Responsive service to keep your operations running without delays
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#1e1e1e] p-6 md:p-8 lg:pr-12 rounded-[2rem] shadow-2xl lg:-translate-x-2"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">Complete Solutions</h3>
                <p className="text-[#9FA0CD] font-medium leading-relaxed text-sm md:text-base">
                  End-to-end equipment rental and servicing under one roof
                </p>
              </motion.div>
            </div>

            {/* Right Cards */}
            <div className="flex flex-col gap-5 lg:gap-6 w-full lg:w-[42%] z-20 text-left lg:text-right mt-6 lg:mt-0">
              {/* Card 4 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#1e1e1e] p-6 md:p-8 lg:pl-12 rounded-[2rem] shadow-2xl lg:translate-x-2"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">UAE-Wide Coverage</h3>
                <p className="text-[#9FA0CD] font-medium leading-relaxed text-sm md:text-base">
                  Serving Dubai, Abu Dhabi, and all Emirates with fast response
                </p>
              </motion.div>

              {/* Card 5 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#3B3C89] p-6 md:p-8 lg:pl-12 rounded-[2rem] shadow-2xl lg:-translate-x-4"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">Expert Advice</h3>
                <p className="text-white/80 font-medium leading-relaxed text-sm md:text-base">
                  Guidance in selecting the right equipment for your project needs
                </p>
              </motion.div>

              {/* Card 6 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#1e1e1e] p-6 md:p-8 lg:pl-12 rounded-[2rem] shadow-2xl lg:translate-x-2"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">Flexible Service</h3>
                <p className="text-[#9FA0CD] font-medium leading-relaxed text-sm md:text-base">
                  Customized solutions with competitive pricing and client-focused approach
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section - High Impact Yellow */}
      <section className="py-24 bg-[#3B3C89] relative z-20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: "Established", value: "2018" },
              { label: "kVA Capacity", value: "1250+" },
              { label: "Support Available", value: "24/7" },
              { label: "Client Satisfaction", value: "100%" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-2"
              >
                <span className="text-5xl md:text-7xl font-sans font-black text-white tracking-tighter">{stat.value}</span>
                <span className="text-white/70 font-bold uppercase tracking-widest text-xs md:text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Contact Section - Get in Touch */}
      <section className="py-24 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact us background.jpg.jpeg"
            alt="Contact Background"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Large Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none overflow-hidden whitespace-nowrap z-0">
          <span className="text-[15rem] md:text-[25rem] font-sans font-black text-white/[0.03] uppercase tracking-tighter leading-none block">
            {companyData.shortName} COMPANY
          </span>
        </div>

        <div className="container mx-auto px-6 md:px-8 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 md:p-16 lg:p-20 overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left Side: Contact Info */}
              <div className="flex flex-col gap-8">
                <div>
                  <span className="text-[#3B3C89] font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block">CONTACT</span>
                  <h2 className="text-3xl md:text-5xl font-sans font-black text-white tracking-tighter mb-4 uppercase leading-none">{companyData.name}</h2>
                  <p className="text-white/60 text-base md:text-lg font-bold uppercase tracking-widest">
                    SHARJAH, UAE
                  </p>
                </div>

                <div className="flex flex-col gap-8 mt-4">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-[#3B3C89]/10 flex items-center justify-center text-[#3B3C89] group-hover:bg-[#3B3C89] group-hover:text-white transition-all flex-shrink-0">
                      <PhoneCall size={28} />
                    </div>
                    <div>
                      <h4 className="text-white font-black uppercase tracking-widest text-[10px] md:text-xs mb-1 opacity-60">Sales Department</h4>
                      <p className="text-white font-black text-base md:text-lg">{companyData.contact.sales}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-[#3B3C89]/10 flex items-center justify-center text-[#3B3C89] group-hover:bg-[#3B3C89] group-hover:text-white transition-all flex-shrink-0">
                      <PhoneCall size={28} />
                    </div>
                    <div>
                      <h4 className="text-white font-black uppercase tracking-widest text-[10px] md:text-xs mb-1 opacity-60">Accounts Department</h4>
                      <p className="text-white font-black text-base md:text-lg">{companyData.contact.accounts}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-[#3B3C89]/10 flex items-center justify-center text-[#3B3C89] group-hover:bg-[#3B3C89] group-hover:text-white transition-all flex-shrink-0">
                      <PhoneCall size={28} />
                    </div>
                    <div>
                      <h4 className="text-white font-black uppercase tracking-widest text-[10px] md:text-xs mb-1 opacity-60">Telephone </h4>
                      <p className="text-white font-black text-base md:text-lg">{companyData.contact.tel}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-[#3B3C89]/10 flex items-center justify-center text-[#3B3C89] group-hover:bg-[#3B3C89] group-hover:text-white transition-all flex-shrink-0">
                      <Mail size={28} />
                    </div>
                    <div>
                      <h4 className="text-white font-black uppercase tracking-widest text-[10px] md:text-xs mb-1 opacity-60">Send Us An E-mail</h4>
                      <p className="text-white font-black text-base md:text-lg">
                        <a href={`mailto:${companyData.contact.email}`} className="text-white hover:text-[#9FA0CD] transition-colors">{companyData.contact.email}</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-[#3B3C89]/10 flex items-center justify-center text-[#3B3C89] group-hover:bg-[#3B3C89] group-hover:text-white transition-all flex-shrink-0">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h4 className="text-white font-black uppercase tracking-widest text-[10px] md:text-xs mb-1 opacity-60">Head-Office Addresses</h4>
                      <p className="text-white font-black text-base md:text-lg">PO BOX:5475<br />AJMAN/SHARJAH, UAE</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-[#3B3C89]/10 flex items-center justify-center text-[#3B3C89] group-hover:bg-[#3B3C89] group-hover:text-white transition-all flex-shrink-0">
                      <LinkIcon size={28} />
                    </div>
                    <div>
                      <h4 className="text-white font-black uppercase tracking-widest text-[10px] md:text-xs mb-1 opacity-60">Connect With Us</h4>
                      <p className="text-white font-black text-base md:text-lg hover:text-[#9FA0CD] cursor-pointer transition-colors">LinkedIn</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Contact Form */}
              <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/5 backdrop-blur-sm self-start">
                <div className="mb-10">
                  <h3 className="text-3xl font-black text-white mb-3 tracking-tighter uppercase">Get a Call Back</h3>
                  <p className="text-white/60 text-sm font-medium leading-relaxed">Fill out the form below and our team will call you back within 2 hours.</p>
                </div>
                <form className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-white font-black uppercase tracking-widest text-xs ml-4 opacity-50">Name *</label>
                    <input
                      type="text"
                      className="bg-transparent border border-[#3B3C89]/30 rounded-2xl p-5 text-white focus:outline-none focus:border-[#3B3C89] transition-all font-bold placeholder:text-white/20"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-white font-black uppercase tracking-widest text-xs ml-4 opacity-50">Email Address *</label>
                    <input
                      type="email"
                      className="bg-transparent border border-[#3B3C89]/30 rounded-2xl p-5 text-white focus:outline-none focus:border-[#3B3C89] transition-all font-bold placeholder:text-white/20"
                      placeholder="Your Email Address"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-white font-black uppercase tracking-widest text-xs ml-4 opacity-50">Phone Number *</label>
                    <input
                      type="tel"
                      className="bg-transparent border border-[#3B3C89]/30 rounded-2xl p-5 text-white focus:outline-none focus:border-[#3B3C89] transition-all font-bold placeholder:text-white/20"
                      placeholder="Your Phone Number"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-white font-black uppercase tracking-widest text-xs ml-4 opacity-50">Project Details *</label>
                    <textarea
                      rows={4}
                      className="bg-transparent border border-[#3B3C89]/30 rounded-2xl p-5 text-white focus:outline-none focus:border-[#3B3C89] transition-all font-bold placeholder:text-white/20 resize-none"
                      placeholder="Tell us about your project requirements..."
                      required
                    ></textarea>
                  </div>
                  <button className="bg-[#3B3C89] hover:bg-[#5455B3] text-white font-black uppercase tracking-widest py-6 rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-[#3B3C89]/20 mt-4 text-sm">
                    Submit Request
                  </button>
                </form>
              </div>

            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
