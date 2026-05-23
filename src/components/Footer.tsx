import Link from "next/link";
import Image from "next/image";
import { Globe, MapPin, Phone, Smartphone } from "lucide-react";
import companyData from "@/content/company.json";
import { type } from "@/lib/typography";

const NAVY = "#001030";
const NAVY_BORDER = "rgba(255,255,255,0.12)";

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M23.498 6.163c-.272-.98-1.04-1.748-2.02-2.02C19.716 3.645 12 3.645 12 3.645s-7.716 0-9.478.498c-.98.272-1.748 1.04-2.02 2.02C0 7.925 0 11.666 0 11.666s0 3.742.498 5.503c.272.98 1.04 1.748 2.02 2.02 1.762.498 9.478.498 9.478.498s7.716 0 9.478-.498c.98-.272 1.748-1.04 2.02-2.02.498-1.761.498-5.503.498-5.503s0-3.741-.498-5.503zM9.545 15.568V7.763l6.818 3.903-6.818 3.902z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.733-1.458L0 24zm6.704-4.248c1.601.95 3.115 1.485 4.908 1.487 5.379 0 9.751-4.373 9.754-9.759.001-2.61-1.011-5.064-2.848-6.903C16.68 2.73 14.216 1.719 11.611 1.719 6.236 1.719 1.861 6.091 1.858 11.48c-.001 1.859.489 3.411 1.464 5.01l-.995 3.636 3.73-.974z" />
  </svg>
);

const salesPrimary = companyData.contact.sales.split(", ")[0];

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/equipment-services" },
    { name: "Contact", href: "/contact" },
  ];

  const servicesLinks = [
    "Sound Proof Generators (5 KVA - 1500 KVA)",
    "Cables Up to 5000 Meter",
    "Distribution Board & Change Over Switch Board",
    "Air Compressors (150 CFM - 950 CFM)",
    "Tower Lights",
    "Diesel Tanks",
    "Load Bank",
    "Maintenance & Support",
  ];

  return (
    <footer className="relative text-white overflow-hidden" style={{ backgroundColor: NAVY }}>
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
        aria-hidden
      />

      <div className="container mx-auto px-6 md:px-10 lg:px-12 max-w-[1400px] relative z-10 pt-12 md:pt-14 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[minmax(260px,1.2fr)_max-content_minmax(0,1.15fr)_minmax(0,1fr)] gap-10 lg:gap-0">
          {/* Column 1 — Brand */}
          <div
            className="lg:pr-8 lg:border-r flex flex-col"
            style={{ borderColor: NAVY_BORDER }}
          >
            <div className="flex items-start gap-3.5 mb-5">
              <div className="relative h-14 w-14 rounded-full overflow-hidden shrink-0 border-2 border-white/30 bg-white">
                <Image
                  src="/images/justified-logo.jpeg"
                  alt={`${companyData.legalName.full} logo`}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col leading-[1.2] pt-0.5">
                {companyData.legalName.lines.map((line) => (
                  <span key={line} className={`${type.navBrand} text-white`}>
                    {line}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xs">
              {companyData.tagline}
            </p>

            <div className="flex gap-3 items-center mt-auto">
              <a
                href={companyData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0077B5] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href={companyData.contact.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
              <a
                href={`https://wa.me/${salesPrimary.replace(/[-+\s]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links (narrow) */}
          <div
            className="lg:px-6 lg:border-r flex flex-col w-full lg:w-auto lg:min-w-[7.5rem] lg:max-w-[9.5rem]"
            style={{ borderColor: NAVY_BORDER }}
          >
            <h4 className={`text-white ${type.cardTitle} mb-5`}>QUICK LINKS</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white text-sm hover:text-white/80 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div
            className="lg:px-8 lg:border-r flex flex-col"
            style={{ borderColor: NAVY_BORDER }}
          >
            <h4 className={`text-white ${type.cardTitle} mb-5`}>OUR SERVICES</h4>
            <ul className="space-y-2.5">
              {servicesLinks.map((name) => (
                <li key={name}>
                  <Link
                    href="/equipment-services"
                    className="text-white text-sm leading-snug hover:text-white/80 transition-colors block"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div className="lg:pl-8 flex flex-col">
            <h4 className={`text-white ${type.cardTitle} mb-5`}>CONTACT US</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex gap-3 items-start">
                <Phone size={20} strokeWidth={1.5} className="shrink-0 mt-0.5 text-white" />
                <div>
                  <a
                    href={`tel:${companyData.contact.tel.replace(/[-+\s]/g, "")}`}
                    className={`text-white ${type.contactValue} block hover:text-white/80`}
                  >
                    {companyData.contact.tel}
                  </a>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <Globe size={20} strokeWidth={1.5} className="shrink-0 mt-0.5 text-white" />
                <div>
                  <a
                    href={`mailto:${companyData.contact.email}`}
                    className={`text-white ${type.contactValue} block hover:text-white/80 break-all`}
                  >
                    {companyData.contact.email}
                  </a>
                  <span className={`text-white/60 ${type.caption} mt-1 block`}>Sales Department</span>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <Smartphone size={20} strokeWidth={1.5} className="shrink-0 mt-0.5 text-white" />
                <div>
                  <a
                    href={`tel:${salesPrimary.replace(/\s+/g, "")}`}
                    className={`text-white ${type.contactValue} block hover:text-white/80`}
                  >
                    {salesPrimary}
                  </a>
                  <span className={`text-white/60 ${type.caption} mt-1 block`}>Sales Department</span>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <MapPin size={20} strokeWidth={1.5} className="shrink-0 mt-0.5 text-white" />
                <div>
                  <p className={`text-white ${type.contactValue}`}>
                    PO BOX: {companyData.contact.address.poBox} {companyData.contact.address.city}
                  </p>
                  <span className={`text-white/60 ${type.caption} mt-1 block`}>Head Office Address</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 py-5 text-center" style={{ borderColor: NAVY_BORDER }}>
          <p className={`text-white/80 ${type.caption}`}>
            &copy; {new Date().getFullYear()} {companyData.legalName.full}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
