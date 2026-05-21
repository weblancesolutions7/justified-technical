import Image from "next/image";
import { CheckCircle2, Zap, Settings, TrendingUp, ShieldCheck } from "lucide-react";
import companyData from "@/content/company.json";

export const metadata = {
  title: "About Us",
  description: "Since 2018 UAE’s Trusted Machinery & Power Solutions Partner",
};

export default function About() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about us.jpg.jpeg"
            alt="About Us Background"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          {/* Dynamic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#3B3C89] via-[#9FA0CD]/70 to-[#111111]/80 mix-blend-multiply opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10 h-full flex flex-col justify-end pb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 leading-none tracking-tighter uppercase drop-shadow-2xl">
            ABOUT US
          </h1>
        </div>
      </section>

      {/* 2. Intro Section - Unboxed & Immersive */}
      <section className="py-24 bg-[#111111] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#3B3C89]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            {/* Left Content */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[2px] w-12 bg-[#3B3C89]"></div>
                <h4 className="text-[#9FA0CD] font-bold text-xs md:text-sm uppercase tracking-widest">
                  ABOUT {companyData.name}
                </h4>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black text-white leading-[1.1] mb-8 tracking-tight">
                Leading Provider of Construction Equipment Rental & Servicing in UAE
              </h2>
              <p className="text-[#9FA0CD] font-medium text-xl md:text-2xl mb-8 font-heading italic">
                "Power and performance you can rely on… anytime, anywhere."
              </p>
              <div className="space-y-6 text-white/70 text-base md:text-lg leading-relaxed border-l-2 border-white/10 pl-6 text-left">
                <p>
                  As a leading provider of machinery and power solutions in the UAE, we deliver high-performance equipment and services tailored to meet demanding project needs. With capabilities exceeding 1250kVA+, we are backed by a strong reputation for reliability, efficiency, and excellence.
                </p>
                <p>
                  We supply premium generators, heavy machinery, cooling systems, and complete power distribution solutions for construction projects, industrial operations, and large-scale events across Dubai, Abu Dhabi, and across the UAE.
                </p>
              </div>

              {/* Seamless Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-white/5">
                <div>
                  <div className="text-[#9FA0CD] font-black text-4xl mb-2">2018</div>
                  <div className="text-white/50 text-[10px] font-bold uppercase tracking-widest">Established</div>
                </div>
                <div>
                  <div className="text-[#9FA0CD] font-black text-4xl mb-2">1250+</div>
                  <div className="text-white/50 text-[10px] font-bold uppercase tracking-widest">kVA Capacity</div>
                </div>
                <div>
                  <div className="text-[#9FA0CD] font-black text-4xl mb-2">24/7</div>
                  <div className="text-white/50 text-[10px] font-bold uppercase tracking-widest">Support Available</div>
                </div>
                <div>
                  <div className="text-[#9FA0CD] font-black text-4xl mb-2">100%</div>
                  <div className="text-white/50 text-[10px] font-bold uppercase tracking-widest leading-tight">Standards That<br />Define Us</div>
                </div>
              </div>
            </div>

            {/* Right Image - Asymmetrical Float */}
            <div className="flex-1 w-full relative lg:sticky lg:top-32">
              <div className="relative h-[700px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/12.jpg.jpeg"
                  alt="Heavy excavator equipment"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={100}
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80"></div>
              </div>
              {/* Floating accent image */}
              <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-xl overflow-hidden border-8 border-[#111111] shadow-2xl hidden md:block">
                <Image
                  src="/images/10.jpg.jpeg"
                  alt="Construction details"
                  fill
                  sizes="256px"
                  quality={100}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Story - Overlapping Composition */}
      <section className="py-24 bg-[#FBFCFD] relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row-reverse gap-20 items-start">

            {/* Story Text */}
            <div className="flex-1 relative z-10">
              <h4 className="text-[#3B3C89] font-bold text-xs md:text-sm uppercase tracking-widest mb-4">OUR STORY</h4>
              <h2 className="text-3xl md:text-5xl font-sans font-black text-[#3B3C89] mb-10 leading-tight">
                Since 2018 UAE’s Trusted Machinery & Power Solutions Partner
              </h2>

              <div className="space-y-8 text-[#3B3C89]/80 text-base md:text-lg leading-relaxed text-left">
                <p className="font-medium text-[#3B3C89] text-lg md:text-xl">
                  Founded in 2018, {companyData.name} was established with a clear purpose — to provide dependable construction equipment and power solutions to a rapidly growing UAE market.
                </p>
                <p>
                  What began as a focused operation has steadily evolved into a trusted name supporting a wide range of projects across the Emirates. From the outset, we committed ourselves to reliability, quality, and responsive service. With continuous investment in our fleet and capabilities, we have expanded to deliver high-capacity generators exceeding 1,250 kVA, alongside a diverse range of construction and industrial machinery suited for complex and large-scale operations.
                </p>
                <p>
                  Recognizing the changing demands of the industry, we have broadened our services to include equipment rental, maintenance, and complete project support solutions. Our approach combines technical expertise with efficient, modern equipment to ensure consistent performance on every job site.
                </p>
                <p>
                  As we continue to grow, we remain focused on innovation, operational excellence, and contributing to the UAE’s ongoing infrastructure and development goals.
                </p>
                <p className="pl-6 border-l-4 border-[#3B3C89] italic font-medium">
                  Today, {companyData.name} is proud to be a reliable partner for construction equipment rental, machinery servicing, and integrated power solutions across the UAE.
                </p>
              </div>
            </div>

            {/* Abstract Image Composition */}
            <div className="flex-1 w-full relative h-[600px] flex items-center justify-center lg:sticky lg:top-32">
              <div className="absolute w-[80%] h-[90%] left-0 top-0 rounded-3xl overflow-hidden shadow-xl">
                <Image src="/images/out-story-2.jpeg" alt="Engineering details" fill sizes="(max-width: 768px) 100vw, 600px" quality={100} className="object-cover" />
              </div>
              <div className="absolute w-[50%] h-[60%] right-0 bottom-0 rounded-2xl overflow-hidden shadow-2xl border-8 border-[#FBFCFD]">
                <Image src="/images/Oil & Gas.jpg.jpeg" alt="Oil & Gas Solutions" fill sizes="(max-width: 768px) 100vw, 400px" quality={100} className="object-cover" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Our Expertise - Zig Zag Flow without Boxes */}
      <section className="py-24 bg-[#9FA0CD] relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-20">
            <h4 className="text-[#3B3C89] font-bold text-xs md:text-sm uppercase tracking-widest mb-4">OUR EXPERTISE</h4>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black text-[#3B3C89] uppercase tracking-tight">Delivering Excellence</h2>
          </div>

          <div className="space-y-32">
            {/* Item 1 */}
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1 relative h-[400px] w-full rounded-2xl overflow-hidden group">
                <Image src="/images/Advanced Equipment & Power Solutions.jpg.jpeg" alt="Advanced Equipment" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex-1 relative">
                <span className="absolute -top-20 -left-10 text-[10rem] font-black text-[#9FA0CD]/15 select-none">01</span>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black text-[#3B3C89] mb-6 flex items-center gap-4">
                    <Zap className="text-[#3B3C89]" size={40} /> Advanced Equipment & Power Solutions
                  </h3>
                  <p className="text-[#3B3C89]/80 text-base md:text-lg mb-8 leading-relaxed">
                    From construction sites to industrial operations, we deliver dependable equipment and power solutions tailored to every project. Whether grid-powered or generator-based, we ensure smooth and efficient performance from start to finish.
                  </p>
                  <ul className="space-y-4">
                    {["Complete equipment and power solutions", "Reliable distribution and site connectivity", "Efficient setup and execution"].map((text, i) => (
                      <li key={i} className="flex items-center gap-4 text-[#3B3C89] font-bold text-base md:text-lg">
                        <span className="w-8 h-8 rounded-full bg-[#3B3C89]/15 flex items-center justify-center text-[#3B3C89]"><CheckCircle2 size={16} /></span>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
              <div className="flex-1 relative h-[400px] w-full rounded-2xl overflow-hidden group">
                <Image src="/images/Engineering & Technical Strength.jpg.jpeg" alt="Technical Strength" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex-1 relative">
                <span className="absolute -top-20 -left-10 text-[10rem] font-black text-[#9FA0CD]/15 select-none">02</span>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black text-[#3B3C89] mb-6 flex items-center gap-4">
                    <Settings className="text-[#3B3C89]" size={40} /> Engineering & Technical Strength
                  </h3>
                  <p className="text-[#3B3C89]/80 text-base md:text-lg mb-8 leading-relaxed">
                    Our team brings strong technical expertise and practical experience in handling machinery, installation, and operations across projects of all sizes.
                  </p>
                  <ul className="space-y-4">
                    {["Skilled engineers and operators", "Quick deployment and setup", "Ongoing technical support"].map((text, i) => (
                      <li key={i} className="flex items-center gap-4 text-[#3B3C89] font-bold text-base md:text-lg">
                        <span className="w-8 h-8 rounded-full bg-[#3B3C89]/15 flex items-center justify-center text-[#3B3C89]"><CheckCircle2 size={16} /></span>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1 relative h-[400px] w-full rounded-2xl overflow-hidden group">
                <Image src="/images/Smart & Efficient Operations.jpg.jpeg" alt="Smart Operations" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex-1 relative">
                <span className="absolute -top-20 -left-10 text-[10rem] font-black text-[#9FA0CD]/15 select-none">03</span>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black text-[#3B3C89] mb-6 flex items-center gap-4">
                    <TrendingUp className="text-[#3B3C89]" size={40} /> Smart & Efficient Operations
                  </h3>
                  <p className="text-[#3B3C89]/80 text-base md:text-lg mb-8 leading-relaxed">
                    We utilize modern approaches to improve performance, reduce downtime, and ensure operational efficiency across all services.
                  </p>
                  <ul className="space-y-4">
                    {["Equipment performance optimization", "Efficient energy and fuel usage", "Practical and innovative solutions"].map((text, i) => (
                      <li key={i} className="flex items-center gap-4 text-[#3B3C89] font-bold text-base md:text-lg">
                        <span className="w-8 h-8 rounded-full bg-[#3B3C89]/15 flex items-center justify-center text-[#3B3C89]"><CheckCircle2 size={16} /></span>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Vision & Values - Dark Fluid Typography Layout */}
      <section className="py-24 bg-[#161616] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#9FA0CD 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">

          <div className="mb-20">
            <h4 className="text-[#9FA0CD] font-bold text-xs md:text-sm uppercase tracking-widest mb-4">VISION & VALUES</h4>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black text-white uppercase tracking-tight">Our Future</h2>
          </div>

          {/* Vision Split */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-0 justify-between mb-32">
            <div className="flex-1 md:pr-16 md:border-r border-white/10">
              <h3 className="text-[#9FA0CD] font-black text-2xl md:text-3xl mb-6 uppercase tracking-tight">Short-Term Vision</h3>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed font-light">
                To expand our equipment fleet with advanced and efficient machinery while maintaining high service standards and fast response across the UAE.
              </p>
            </div>
            <div className="flex-1 md:pl-16">
              <h3 className="text-[#9FA0CD] font-black text-2xl md:text-3xl mb-6 uppercase tracking-tight">Long-Term Vision</h3>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed font-light">
                To grow across the GCC and become a recognized leader in construction equipment rental and machinery services, known for reliability and innovation.
              </p>
            </div>
          </div>

          {/* Core Values - Masonry/Flow Layout (No Boxes) */}
          <div>
            <h4 className="text-white/30 font-black text-4xl md:text-7xl mb-16 uppercase tracking-tighter">Core Values</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {[
                { title: "Client Commitment", desc: "We prioritize our clients by delivering solutions that meet their exact needs." },
                { title: "Reliability", desc: "We ensure consistent performance and dependable service on every project." },
                { title: "Continuous Improvement", desc: "We constantly upgrade our equipment and processes to deliver better results." },
                { title: "Safety First", desc: "We follow strict safety practices to protect people, equipment, and job sites." },
                { title: "Integrity", desc: "We operate with transparency, honesty, and professionalism." },
                { title: "Teamwork", desc: "We collaborate effectively to achieve the best outcomes for our clients." },
                { title: "Responsible Growth", desc: "We aim to grow sustainably while supporting ongoing development in the UAE." }
              ].map((val, idx) => (
                <div key={idx} className="relative pl-6">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#9FA0CD] to-transparent"></div>
                  <h4 className="text-white font-bold text-xl md:text-2xl mb-3">{val.title}</h4>
                  <p className="text-white/60 text-base md:text-lg leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Standards That Define Us - Immersive Parallax Style */}
      <section className="relative py-24 flex items-center bg-[#111111]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/our-standards.jpeg"
            alt="Standards background"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <h4 className="text-[#9FA0CD] font-bold text-xs md:text-sm uppercase tracking-widest mb-4">OUR STANDARDS</h4>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black text-white mb-10 leading-tight">Standards That Define Us</h2>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-16 font-light">
              At {companyData.name}, safety and responsibility are integral to our operations. We are committed to maintaining high standards across all projects.
            </p>

            <div className="space-y-8">
              {[
                "Focus on quality service and reliable equipment",
                "Ensuring a safe and healthy work environment",
                "Strict adherence to safety practices on every site",
                "Responsible and environmentally conscious operations"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-full border border-[#9FA0CD] flex items-center justify-center text-[#9FA0CD] group-hover:bg-[#9FA0CD] group-hover:text-white transition-colors duration-300">
                    <ShieldCheck size={28} />
                  </div>
                  <span className="text-white font-bold text-xl md:text-2xl group-hover:text-[#9FA0CD] transition-colors">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us - Typographic Grid without Borders */}
      <section className="py-24 bg-[#FBFCFD]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-[#3B3C89]/10 pb-12 gap-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black text-[#3B3C89] uppercase tracking-tight max-w-3xl leading-none">
              WHY CHOOSE {companyData.name}
            </h2>
            <p className="text-[#3B3C89] font-bold text-lg md:text-xl uppercase tracking-widest">The {companyData.shortName} Advantage</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
            {[
              { title: "Experienced Professionals", desc: "A skilled team with strong industry knowledge and hands-on expertise" },
              { title: "Reliable Support", desc: "Responsive service to keep your operations running without delays" },
              { title: "Complete Solutions", desc: "End-to-end equipment rental and servicing under one roof" },
              { title: "UAE-Wide Coverage", desc: "Serving Dubai, Abu Dhabi, and all Emirates with fast response" },
              { title: "Expert Advice", desc: "Guidance in selecting the right equipment for your project needs" },
              { title: "Flexible Service", desc: "Customized solutions with competitive pricing and client-focused approach" }
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <span className="absolute -top-10 -left-6 text-7xl font-black text-[#9FA0CD]/60 select-none transition-transform group-hover:-translate-y-2 duration-300">
                  0{idx + 1}
                </span>
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-black text-[#3B3C89] mb-4 group-hover:text-[#5455B3] transition-colors">{item.title}</h3>
                  <p className="text-[#3B3C89]/70 text-base md:text-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
