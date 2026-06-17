"use client";

import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "./navLinks";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [mobileOpen, setMobileOpen] = useState(false);
  // `scrolled` drives the frosted-glass bar. Non-home pages have no dark hero,
  // so the bar is shown from the start there.
  const [scrolled, setScrolled] = useState(!isHome);

  // Scroll progress bar
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  // Single clean threshold — the glass bar fades in once past 24px (CSS opacity
  // transition handles the smoothness), instead of a continuous spring that
  // feels like the header "opening up" as you scroll.
  useMotionValueEvent(scrollY, "change", (v) => {
    if (!isHome) return; // already pinned to scrolled on inner pages
    setScrolled(v > 24);
  });

  // The bar is visible when the page is scrolled OR the mobile menu is open.
  const barActive = scrolled || mobileOpen;

  // Close mobile menu on Escape
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  /** Resolve a nav href against the current page.
   *  - Pure hashes (`#foo`) stay as `#foo` on home and become `/#foo` elsewhere.
   *  - Absolute paths and external hrefs are returned unchanged.
   */
  const resolveHref = (href: string) => {
    if (href.startsWith("#")) return isHome ? href : `/${href}`;
    return href;
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />

      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-[padding] duration-300 ease-out ${
          barActive ? "py-2.5" : "py-4"
        }`}
      >
        {/* Frosted dark-glass bar — fades in on scroll via opacity (smooth & cheap).
            Stays on-brand (emerald) instead of switching to a white background. */}
        <div
          aria-hidden="true"
          style={{ opacity: barActive ? 1 : 0 }}
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 ease-out
                     bg-brand-900/70 backdrop-blur-xl border-b border-accent/15
                     shadow-[0_10px_40px_-16px_rgba(11,46,36,0.7)]"
        >
          {/* faint top sheen + gold hairline for depth */}
          <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-cream/15 to-transparent" />
        </div>

        {/* Soft scrim at the very top over the hero — keeps light text legible
            before the glass bar kicks in, without any visible "panel". */}
        <div
          aria-hidden="true"
          style={{ opacity: barActive ? 0 : 1 }}
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 ease-out
                     bg-gradient-to-b from-brand-900/40 to-transparent"
        />

        <div className="relative container-x flex items-center justify-between h-12 md:h-14">
          {/* Logo + nav grouped together — first in DOM = right side in RTL */}
          <div className="flex items-center gap-6 lg:gap-9">
            {/* Logo + mobile burger */}
            <div className="flex items-center gap-1.5">
              <a href="/" aria-label="NoamG — עמוד הבית" className="flex items-center group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo/noamg-wordmark-white.png"
                  alt="NoamG"
                  width={802}
                  height={283}
                  className="h-9 md:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </a>

              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden grid place-items-center w-11 h-11 rounded-full bg-cream/10 hover:bg-cream/20 transition-colors duration-300"
                aria-label={mobileOpen ? "סגור תפריט ניווט" : "פתח תפריט ניווט"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
              >
                <span className="w-5 flex flex-col gap-1.5" aria-hidden="true">
                  <span className={`block h-0.5 rounded-full bg-cream transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                  <span className={`block h-0.5 rounded-full bg-cream transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                  <span className={`block h-0.5 rounded-full bg-cream transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </span>
              </button>
            </div>

            {/* Desktop nav — right beside the logo. Light chrome throughout. */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7" aria-label="ניווט ראשי">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={resolveHref(link.href)}
                  className="relative text-[0.95rem] xl:text-base font-medium whitespace-nowrap text-cream/80 hover:text-cream transition-colors duration-300 group"
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1.5 right-0 w-0 h-0.5 rounded-full bg-gradient-to-l from-accent to-accent/40 transition-all duration-300 group-hover:w-full"
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* CTA — last in DOM = left side in RTL. Shown on every breakpoint
              (compact on mobile, fuller on desktop). */}
          <a
            href={resolveHref("#contact")}
            className="btn-primary whitespace-nowrap !py-2 !px-4 lg:!py-2.5 lg:!px-5 text-sm"
          >
            <span>קבע שיחה</span>
            <span aria-hidden>←</span>
          </a>
        </div>

        {/* Mobile menu — dark glass, on-brand (no white panel) */}
        <motion.div
          id="mobile-nav"
          initial={false}
          animate={{ height: mobileOpen ? "auto" : 0, opacity: mobileOpen ? 1 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden={!mobileOpen}
          className="relative lg:hidden overflow-hidden"
        >
          <nav className="container-x pt-4 pb-7 flex flex-col gap-2" aria-label="ניווט ראשי במובייל">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={resolveHref(link.href)}
                onClick={() => setMobileOpen(false)}
                tabIndex={mobileOpen ? 0 : -1}
                className="text-base font-medium text-cream/85 hover:text-cream hover:bg-cream/5 rounded-xl px-3 py-2.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </motion.div>
      </motion.header>
    </>
  );
}
