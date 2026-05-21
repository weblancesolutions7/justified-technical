import Link from "next/link";
import Image from "next/image";
import companyData from "@/content/company.json";
import themeData from "@/content/theme.json";

const LinkedIn = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const Youtube = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

export default function Footer() {
  const quickLinks = [
    { name: "HOME", href: "/" },
    { name: "EQUIPMENT & SERVICES", href: "/equipment-services" },
    { name: "ABOUT US", href: "/about" },
    { name: "CONTACT", href: "/contact" }
  ];

  return (
    <footer className="relative overflow-hidden flex flex-col bg-transparent -mt-12 md:-mt-20 z-20">
      {/* Main Rounded Container */}
      <div className="bg-[#3B3C89] rounded-t-[3rem] md:rounded-t-[5rem] pt-20 pb-8 md:pt-28 md:pb-10 px-6 relative z-10 w-full flex-grow">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12">

            {/* Column 1: Company & Address */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="relative h-12 w-12 bg-white rounded-lg p-1 shadow-md flex-shrink-0">
                  <Image
                    src="/images/justified-logo.jpeg"
                    alt={companyData.name}
                    fill
                    sizes="48px"
                    className="object-contain p-0.5"
                  />
                </div>
                <h4 className="text-[#FBFCFD] font-black font-sans text-sm md:text-base uppercase tracking-wider leading-tight">
                  {companyData.name}
                </h4>
              </div>
              <div className="space-y-6">
                <div>
                  <h5 className="text-[#FBFCFD] font-black font-sans text-[10px] md:text-xs mb-3 uppercase tracking-[0.2em] opacity-40">ADDRESS</h5>
                  <p className="text-[#FBFCFD]/80 text-sm md:text-base leading-relaxed font-medium">
                    {companyData.contact.address.office}<br />
                    PO BOX: {companyData.contact.address.poBox} {companyData.contact.address.city}
                  </p>
                </div>
                <div>
                  <h5 className="text-[#FBFCFD] font-black font-sans text-[10px] md:text-xs mb-3 uppercase tracking-[0.2em] opacity-40">OPENING TIME</h5>
                  <p className="text-[#FBFCFD]/80 text-sm md:text-base font-medium">
                    {companyData.contact.openingHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-1">
              <h4 className="text-[#FBFCFD] font-black font-sans text-base md:text-lg mb-8 uppercase tracking-widest">
                QUICK LINKS
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#FBFCFD]/70 hover:text-[#FBFCFD] font-bold transition-colors text-sm md:text-base uppercase tracking-wider"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 & 4: Contact & Socials (Spans 2 columns in large screens) */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">

              {/* Call Us Sub-column */}
              <div>
                <h4 className="text-[#FBFCFD] font-black font-sans text-base md:text-lg mb-6 uppercase tracking-widest">
                  CALL US
                </h4>
                <div className="space-y-4 text-sm md:text-base">
                  <div>
                    <p className="text-[#FBFCFD]/50 font-bold uppercase text-[10px] tracking-widest mb-1">Sales Department</p>
                    <p className="text-[#FBFCFD] font-black">{companyData.contact.sales}</p>
                  </div>
                  <div>
                    <p className="text-[#FBFCFD]/50 font-bold uppercase text-[10px] tracking-widest mb-1">Accounts Department</p>
                    <p className="text-[#FBFCFD] font-black">{companyData.contact.accounts}</p>
                  </div>
                  <div>
                    <p className="text-[#FBFCFD]/50 font-bold uppercase text-[10px] tracking-widest mb-1">Telephone </p>
                    <p className="text-[#FBFCFD] font-black">{companyData.contact.tel}</p>
                  </div>
                </div>
              </div>

              {/* Email & Follow Sub-column */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-[#FBFCFD] font-black font-sans text-base md:text-lg mb-6 uppercase tracking-widest">
                    EMAIL US
                  </h4>
                  <div className="space-y-2 font-black text-sm md:text-base">
                    <p className="leading-none">
                      <a href={`mailto:${companyData.contact.email}`} className="text-[#FBFCFD] hover:text-[#9FA0CD] transition-colors">{companyData.contact.email}</a>
                    </p>
                    {companyData.contact.rentalEmail !== companyData.contact.email && (
                      <p className="leading-none">
                        <a href={`mailto:${companyData.contact.rentalEmail}`} className="text-[#FBFCFD] hover:text-[#9FA0CD] transition-colors">{companyData.contact.rentalEmail}</a>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="text-[#FBFCFD] font-black font-sans text-base md:text-lg mb-6 uppercase tracking-widest">
                    FOLLOW US
                  </h4>
                  <div className="flex gap-6 items-center">
                    <a href={companyData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#FBFCFD]/80 hover:text-[#FBFCFD] transition-colors text-sm font-bold uppercase">
                      <LinkedIn /> Linkedin
                    </a>
                    <a href={companyData.contact.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#FBFCFD]/80 hover:text-[#FBFCFD] transition-colors text-sm font-bold uppercase">
                      <Youtube /> YouTube
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="mt-8 pt-6 border-t border-[#FBFCFD]/10 flex justify-center items-center">
            <p className="text-[#FBFCFD]/40 text-xs font-medium uppercase tracking-widest text-center">
              © {new Date().getFullYear()} {companyData.name}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
