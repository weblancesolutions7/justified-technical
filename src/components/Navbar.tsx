"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PhoneCall } from "lucide-react";
import Image from "next/image";
import companyData from "@/content/company.json";
import themeData from "@/content/theme.json";

interface NavLink {
  name: string;
  href: string;
  hasDropdown?: boolean;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Equipment & Services", href: "/equipment-services" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? "bg-[#111111]/70 backdrop-blur-xl border-white/5 py-3 shadow-lg" 
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto pl-3 pr-6 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 z-50">
          <div className="relative h-12 w-12 bg-white rounded-lg p-1 shadow-md flex-shrink-0">
            <Image
              src="/images/justified-logo.jpeg"
              alt={companyData.name}
              fill
              sizes="48px"
              className="object-contain p-0.5"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
               <Link
                key={link.name}
                href={link.href}
                className={`text-[15px] font-medium transition-all duration-300 relative py-2 flex items-center gap-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] ${
                  isActive ? "text-[#3B3C89]" : "text-white hover:text-[#3B3C89]"
                }`}
              >
                {link.name}
                {link.hasDropdown && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                )}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-white"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
 
        {/* Quote Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-[#3B3C89] text-white px-6 py-2.5 rounded-full font-black text-sm tracking-wide hover:brightness-110 transition-all duration-300 shadow-lg"
          >
            Get a Quote
          </Link>
        </div>
 
        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-white hover:text-[#3B3C89] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>
 
      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, y: 0, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, y: -20, backdropFilter: "blur(0px)" }}
            className="absolute top-0 left-0 w-full h-screen bg-[#111111]/95 flex flex-col items-center justify-center gap-8 z-40 border-t border-white/10"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xl font-sans font-black uppercase tracking-widest transition-colors ${
                  pathname === link.href ? "text-[#3B3C89]" : "text-white hover:text-[#3B3C89]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 flex items-center gap-2 border border-[#3B3C89] bg-[#3B3C89]/10 text-white px-8 py-3.5 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-[#3B3C89] transition-all duration-300"
            >
              Request a Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
