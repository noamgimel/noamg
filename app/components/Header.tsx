"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const navLinks = [
  { label: "עליי", hash: "#about" },
  { label: "תהליך", hash: "#process" },
  { label: "לקוחות", hash: "#testimonials" },
  { label: "שאלות", hash: "#faq" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [mobileOpen, setMobileOpen] = useState(false);
  const [lightChrome, setLightChrome] = useState(!isHome);

  // Scroll progress bar
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Spring-smoothed scroll position → silky interpolation
  const smoothY = useSpring(scrollY, { stiffness: 130, damping: 28, restDelta: 0.5 });

  // Normalized 0→1 progress over the first 90px of scroll
  const rawProgress = useTransform(smoothY, [0, 90], [0, 1], { clamp: true });
  // Non-home pages always look "scrolled"
  const progress = useTransform(rawProgress, (v) => (!isHome ? 1 : v));

  // Two background layers that cross-fade instead of swapping gradients (which CSS can't tween)
  const darkBgOpacity = useTransform(progress, [0, 1], [1, 0]);
  const lightBgOpacity = useTransform(progress, [0, 1], [0, 0.88]);
  const borderOpacity = useTransform(progress, [0, 1], [0, 0.08]);
  const shadowOpacity = useTransform(progress, [0, 1], [0, 1]);
  const paddingY = useTransform(progress, [0, 1], [14, 10]);

  // Keep a boolean for text-color classes (threshold at 50% of scroll)
  useEffect(() => {
    if (!isHome) return;
    return progress.on("change", (v) => setLightChrome(v > 0.45));
  }, [progress, isHome]);

  // Close mobile menu on Escape
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const homeHash = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />

      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ paddingTop: paddingY, paddingBottom: paddingY }}
        className="fixed top-0 inset-x-0 z-50"
      >
        {/* Dark hero gradient layer — fades out on scroll */}
        <motion.div
          aria-hidden="true"
          style={{ opacity: darkBgOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-brand-900/35 via-brand-900/10 to-transparent backdrop-blur-md pointer-events-none"
        />

        {/* Light cream layer — fades in on scroll */}
        <motion.div
          aria-hidden="true"
          style={{ opacity: lightBgOpacity }}
          className="absolute inset-0 bg-cream backdrop-blur-xl pointer-events-none"
        />

        {/* Border — fades in on scroll */}
        <motion.div
          aria-hidden="true"
          style={{ opacity: borderOpacity }}
          className="absolute inset-x-0 bottom-0 h-px bg-brand-700 pointer-events-none"
        />

        {/* Shadow — fades in on scroll */}
        <motion.div
          aria-hidden="true"
          style={{ opacity: shadowOpacity }}
          className="absolute inset-0 shadow-[0_4px_30px_-12px_rgba(15,61,46,0.15)] pointer-events-none"
        />

        <div className="relative container-x flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <a href="/" aria-label="עמוד הבית" className="flex items-center gap-2.5 group">
            <span
              className={`grid place-items-center w-10 h-10 transition-colors duration-500 ${
                lightChrome ? "text-brand-700" : "text-accent"
              }`}
            >
              <Logo className="w-9 h-9" />
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="ניווט ראשי">
            {navLinks.map((link) => (
              <a
                key={link.hash}
                href={homeHash(link.hash)}
                className={`relative text-sm font-medium transition-colors duration-500 group ${
                  lightChrome
                    ? "text-brand-900/80 hover:text-brand-700"
                    : "text-cream hover:text-cream"
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-1.5 right-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                    lightChrome ? "bg-brand-700" : "bg-accent"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href={homeHash("#contact")}
            className="hidden md:inline-flex btn-primary !py-2.5 !px-5 text-sm"
          >
            <span>קבע שיחה</span>
            <span aria-hidden>←</span>
          </a>

          {/* Mobile burger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden grid place-items-center w-11 h-11 rounded-full transition-colors duration-500 ${
              lightChrome ? "bg-brand-700/8 hover:bg-brand-700/15" : "bg-cream/10 hover:bg-cream/20"
            }`}
            aria-label={mobileOpen ? "סגור תפריט ניווט" : "פתח תפריט ניווט"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <span className="w-5 flex flex-col gap-1.5" aria-hidden="true">
              <span
                className={`block h-0.5 transition-all duration-300 ${
                  lightChrome ? "bg-brand-900" : "bg-cream"
                } ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 transition-all duration-300 ${
                  lightChrome ? "bg-brand-900" : "bg-cream"
                } ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 transition-all duration-300 ${
                  lightChrome ? "bg-brand-900" : "bg-cream"
                } ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </span>
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          id="mobile-nav"
          initial={false}
          animate={{ height: mobileOpen ? "auto" : 0, opacity: mobileOpen ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          aria-hidden={!mobileOpen}
          className="relative md:hidden overflow-hidden bg-cream/95 backdrop-blur-xl border-b border-brand-700/10"
        >
          <nav className="container-x py-6 flex flex-col gap-5" aria-label="ניווט ראשי במובייל">
            {navLinks.map((link) => (
              <a
                key={link.hash}
                href={homeHash(link.hash)}
                onClick={() => setMobileOpen(false)}
                tabIndex={mobileOpen ? 0 : -1}
                className="text-base font-medium text-brand-900/80 hover:text-brand-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={homeHash("#contact")}
              onClick={() => setMobileOpen(false)}
              tabIndex={mobileOpen ? 0 : -1}
              className="btn-primary justify-center"
            >
              <span>קבע שיחה</span>
              <span aria-hidden="true">←</span>
            </a>
          </nav>
        </motion.div>
      </motion.header>
    </>
  );
}
