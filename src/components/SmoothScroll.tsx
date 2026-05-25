"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Check if we are in the browser
    if (typeof window === "undefined") return;

    // Force initial scroll state to top immediately on reload
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Reset Lenis scroll tracker state on mount
    lenis.scrollTo(0, { immediate: true });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (anchor) {
        const href = anchor.getAttribute("href");
        
        // Handle # (scroll to top) or #id (scroll to element)
        if (href && href.startsWith("#")) {
          e.preventDefault();
          
          if (href === "#") {
            lenis.scrollTo(0);
          } else {
            const targetElement = document.querySelector(href);
            if (targetElement) {
              lenis.scrollTo(targetElement as HTMLElement);
            }
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Add lenis class to html for CSS targeting
    document.documentElement.classList.add("lenis");

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      document.removeEventListener("click", handleAnchorClick);
      document.documentElement.classList.remove("lenis");
    };
  }, []);

  // Force scroll reset on route redirection / navigation
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Reset standard window scroll position
    window.scrollTo(0, 0);
    
    // Reset Lenis active scroll instance
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return <>{children}</>;
}
