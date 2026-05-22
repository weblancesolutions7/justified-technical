"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import companyData from "@/content/company.json";

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

    // Set up intersection observer for homepage sections
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // triggers when section occupies the active viewport area
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "industries") {
            setActiveSection("industries");
          }
        } else {
          // If industries is no longer in view, and we scrolled back up, active is home
          if (entry.target.id === "industries" && window.scrollY < 300) {
            setActiveSection("home");
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const industriesEl = document.getElementById("industries");
    if (industriesEl) {
      observer.observe(industriesEl);
    }

    // Reset to home if we are near the top of the page
    const handleScrollReset = () => {
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };
    window.addEventListener("scroll", handleScrollReset);

    // Initial check based on current hash
    if (window.location.hash === "#industries") {
      setActiveSection("industries");
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollReset);
    };
  }, [pathname]);

  const getIsActive = (link: NavLink) => {
    return link.href === "/" 
      ? pathname === "/" && activeSection === "home"
      : link.href.startsWith("/#")
        ? pathname === "/" && activeSection === link.href.split("#")[1]
        : pathname.startsWith(link.href);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md border-slate-100 py-3 shadow-md" 
          : "bg-white border-slate-100 py-4 shadow-sm"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center max-w-8xl">
        {/* Logo and Brand Text dynamically bound to original companyData */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3.5 z-50 group">
          <div className="relative h-11 w-11 sm:h-14 sm:w-14 rounded-full overflow-hidden flex-shrink-0 shadow-sm border border-slate-100 bg-white">
            <Image
              src="/images/justified-logo.jpeg"
              alt={`${companyData.name} Logo`}
              fill
              sizes="(max-width: 640px) 44px, 56px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col text-left leading-none font-sans select-none">
            <span className="text-[#0B1E43] font-black text-[13px] sm:text-[15px] lg:text-[17px] tracking-wide uppercase font-sans">
              {companyData.name}
            </span>
            <span className="text-[#3B3C89] font-black text-[8px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.25em] uppercase font-sans mt-1 opacity-80">
              Power & Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive = getIsActive(link);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[15px] font-bold transition-all duration-300 relative py-2 flex items-center gap-1 ${
                  isActive ? "text-[#3B3C89]" : "text-slate-700 hover:text-[#3B3C89]"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1.5 left-[15%] right-[15%] h-[3px] bg-[#3B3C89] rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Quote Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="bg-[#0B1E43] hover:bg-[#3B3C89] text-white px-7 py-3 rounded-md font-bold text-sm tracking-wide transition-all duration-300 flex items-center gap-2 hover:shadow-md hover:scale-[1.02]"
          >
            Get a Quote <span className="text-base leading-none">→</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-50 text-[#0B1E43] hover:text-[#3B3C89] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, y: 0, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, y: -20, backdropFilter: "blur(0px)" }}
            className="absolute top-0 left-0 w-full h-screen bg-white/95 flex flex-col items-center justify-center gap-8 z-40 border-t border-slate-100"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xl font-bold uppercase tracking-widest transition-colors ${
                  getIsActive(link) ? "text-[#3B3C89]" : "text-slate-800 hover:text-[#3B3C89]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 flex items-center gap-2 bg-[#0B1E43] text-white px-8 py-3.5 rounded-md font-bold text-sm tracking-widest hover:bg-[#3B3C89] transition-all duration-300"
            >
              Get a Quote <span className="text-base leading-none">→</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
