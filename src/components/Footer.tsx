import Link from "next/link";
import Image from "next/image";
import companyData from "@/content/company.json";

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.163c-.272-.98-1.04-1.748-2.02-2.02C19.716 3.645 12 3.645 12 3.645s-7.716 0-9.478.498c-.98.272-1.748 1.04-2.02 2.02C0 7.925 0 11.666 0 11.666s0 3.742.498 5.503c.272.98 1.04 1.748 2.02 2.02 1.762.498 9.478.498 9.478.498s7.716 0 9.478-.498c.98-.272 1.748-1.04 2.02-2.02.498-1.761.498-5.503.498-5.503s0-3.741-.498-5.503zM9.545 15.568V7.763l6.818 3.903-6.818 3.902z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.733-1.458L0 24zm6.704-4.248c1.601.95 3.115 1.485 4.908 1.487 5.379 0 9.751-4.373 9.754-9.759.001-2.61-1.011-5.064-2.848-6.903C16.68 2.73 14.216 1.719 11.611 1.719 6.236 1.719 1.861 6.091 1.858 11.48c-.001 1.859.489 3.411 1.464 5.01l-.995 3.636 3.73-.974z" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/equipment-services" },
    { name: "Contact", href: "/contact" }
  ];

  const servicesLinks = [
    { name: "Sound Proof Generators (5 KVA - 1500 KVA)", href: "/equipment-services" },
    { name: "Cables Up to 5000 Meter", href: "/equipment-services" },
    { name: "Distribution Board & Change Over Switch Board", href: "/equipment-services" },
    { name: "Air Compressors (150 CFM - 950 CFM)", href: "/equipment-services" },
    { name: "Tower Lights", href: "/equipment-services" },
    { name: "Diesel Tanks", href: "/equipment-services" },
    { name: "Load Bank", href: "/equipment-services" },
    { name: "Maintenance & Support", href: "/equipment-services" }
  ];

  return (
    <footer className="bg-[#081329] border-t border-slate-800 text-white z-25 relative pt-16 pb-6">
      <div className="container mx-auto px-6 md:px-12 max-w-8xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12 mb-12">
          
          {/* Column 1: Company Logo, Text & Socials dynamically bound to companyData */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <div className="flex items-center gap-3.5 mb-6 group">
              <div className="relative h-14 w-14 rounded-full overflow-hidden flex-shrink-0 bg-white border border-slate-800 shadow-inner">
                <Image
                  src="/images/justified-logo.jpeg"
                  alt={`${companyData.name} Logo`}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col text-left leading-none font-sans select-none">
                <span className="text-white font-black text-[15px] md:text-[17px] tracking-wide leading-tight uppercase font-sans">
                  {companyData.name}
                </span>
                <span className="text-[#9FA0CD] font-black text-[9px] tracking-[0.25em] uppercase mt-1 opacity-80">
                  Power & Solutions
                </span>
              </div>
            </div>
            
            <p className="text-slate-400 text-sm font-semibold leading-relaxed mb-6 max-w-sm">
              Power and performance you can rely on... anytime, anywhere.
            </p>
            
            {/* Social icons list in styled circles using dynamic links */}
            <div className="flex gap-4 items-center">
              <a 
                href={companyData.contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-[#0077B5] hover:bg-[#0077B5]/85 text-white flex items-center justify-center hover:scale-110 transition-all shadow-md"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a 
                href={companyData.contact.youtube} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-[#FF0000] hover:bg-[#FF0000]/85 text-white flex items-center justify-center hover:scale-110 transition-all shadow-md"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
              <a 
                href={`https://wa.me/${companyData.contact.sales.replace(/[-+\s]/g, '').split(',')[0]}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#25D366]/85 text-white flex items-center justify-center hover:scale-110 transition-all shadow-md"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="text-[#9FA0CD] font-bold text-[12px] uppercase tracking-[0.25em] mb-6 font-sans">
              QUICK LINKS
            </h4>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white font-semibold text-sm transition-colors block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-[#9FA0CD] font-bold text-[12px] uppercase tracking-[0.25em] mb-6 font-sans">
              OUR SERVICES
            </h4>
            <ul className="space-y-3.5">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white font-semibold text-sm transition-colors block leading-snug"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us dynamically bound to previous data */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-[#9FA0CD] font-bold text-[12px] uppercase tracking-[0.25em] mb-6 font-sans">
              CONTACT US
            </h4>
            <div className="space-y-5 w-full">
              {/* Contact Item 1: Telephone */}
              <div className="flex gap-3.5 items-start">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-[#9FA0CD]">
                  <PhoneIcon />
                </div>
                <div>
                  <a href={`tel:${companyData.contact.tel.replace(/[-+\s]/g, '')}`} className="text-white hover:text-[#9FA0CD] font-bold text-sm transition-colors block leading-tight">
                    {companyData.contact.tel}
                  </a>
                  <span className="text-slate-500 font-bold text-[10px] tracking-wider uppercase block mt-0.5">
                    Telephone
                  </span>
                </div>
              </div>

              {/* Contact Item 2: Email Us */}
              <div className="flex gap-3.5 items-start">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-[#9FA0CD]">
                  <MailIcon />
                </div>
                <div>
                  <a href={`mailto:${companyData.contact.email}`} className="text-white hover:text-[#9FA0CD] font-bold text-sm transition-colors block leading-tight break-all">
                    {companyData.contact.email}
                  </a>
                  <span className="text-slate-500 font-bold text-[10px] tracking-wider uppercase block mt-0.5">
                    Email Us
                  </span>
                </div>
              </div>

              {/* Contact Item 3: Sales Department */}
              <div className="flex gap-3.5 items-start">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-[#9FA0CD]">
                  <PhoneIcon />
                </div>
                <div>
                  <div className="flex flex-col gap-1">
                    {companyData.contact.sales.split(", ").map((num, i) => (
                      <a
                        key={i}
                        href={`tel:${num.replace(/\s+/g, "")}`}
                        className="text-white hover:text-[#9FA0CD] font-bold text-sm transition-colors block leading-tight"
                      >
                        {num}
                      </a>
                    ))}
                  </div>
                  <span className="text-slate-500 font-bold text-[10px] tracking-wider uppercase block mt-0.5">
                    Sales Department
                  </span>
                </div>
              </div>

              {/* Contact Item 4: Address */}
              <div className="flex gap-3.5 items-start">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-[#9FA0CD]">
                  <MapPinIcon />
                </div>
                <div>
                  <p className="text-white font-bold text-sm leading-tight">
                    {companyData.contact.address.office}
                  </p>
                  <p className="text-slate-300 font-bold text-xs leading-tight mt-1">
                    PO BOX: {companyData.contact.address.poBox} {companyData.contact.address.city}
                  </p>
                  <span className="text-slate-500 font-bold text-[10px] tracking-wider uppercase block mt-0.5">
                    Head Office Address
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line dynamic */}
        <div className="border-t border-slate-800/80 pt-6 mt-10 flex flex-col items-center justify-center gap-4">
          <p className="text-slate-500 font-semibold text-xs tracking-wider text-center">
            &copy; {new Date().getFullYear()} {companyData.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
