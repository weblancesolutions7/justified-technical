"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import companyData from "@/content/company.json";

const NAVY = "#001C55";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/equipment-services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }
    const handleScrollReset = () => {
      if (window.scrollY < 100) setActiveSection("home");
    };
    window.addEventListener("scroll", handleScrollReset);
    return () => window.removeEventListener("scroll", handleScrollReset);
  }, [pathname]);

  const getIsActive = (link: NavLink) => {
    if (link.href === "/") {
      return pathname === "/" && activeSection === "home";
    }
    return pathname === link.href || pathname.startsWith(`${link.href}/`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="container mx-auto px-6 md:px-10 lg:px-12 max-w-[1400px]">
        <div className="flex items-center justify-between gap-4 py-3.5 md:py-4">
          <Link href="/" className="flex items-center gap-3 shrink-0 z-50">
            <div className="relative h-12 w-12 sm:h-[52px] sm:w-[52px] rounded-full overflow-hidden shrink-0 border border-[#e8eaed] bg-white">
              <Image
                src="/images/justified-logo.jpeg"
                alt={`${companyData.legalName.full} logo`}
                fill
                sizes="52px"
                className="object-cover"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col leading-[1.15] text-left">
              {companyData.legalName.lines.map((line) => (
                <span
                  key={line}
                  className="font-bold text-[10px] md:text-[11px] lg:text-xs tracking-wide uppercase"
                  style={{ color: NAVY }}
                >
                  {line}
                </span>
              ))}
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-10 xl:gap-14">
            <nav className="flex items-center gap-7 xl:gap-9">
              {navLinks.map((link) => {
                const isActive = getIsActive(link);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative py-1 text-[15px] font-semibold transition-colors"
                    style={{ color: isActive ? NAVY : NAVY }}
                  >
                    {link.name}
                    {isActive && (
                      <span
                        className="absolute -bottom-1 left-0 right-0 h-[2px]"
                        style={{ backgroundColor: NAVY }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors hover:opacity-90"
              style={{ backgroundColor: NAVY }}
            >
              Get a Quote
              <span className="text-base leading-none font-light" aria-hidden>
                →
              </span>
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden z-50 p-1"
            style={{ color: NAVY }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <div className="h-[3px] w-full" style={{ backgroundColor: NAVY }} aria-hidden />

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-[#e8eaed] shadow-lg z-40 py-6 px-6"
          >
            <nav className="flex flex-col items-center gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold"
                  style={{ color: getIsActive(link) ? NAVY : "#374151" }}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 inline-flex items-center gap-2 text-white text-sm font-semibold px-6 py-2.5 rounded-full"
                style={{ backgroundColor: NAVY }}
              >
                Get a Quote →
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
