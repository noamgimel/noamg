"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const navLinks = [
  { label: "עליי", href: "#about" },
  { label: "תהליך", href: "#process" },
  { label: "לקוחות", href: "#testimonials" },
  { label: "שאלות", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX }}
      />

      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-2.5 backdrop-blur-xl bg-cream/80 border-b border-brand-700/8 shadow-[0_4px_30px_-12px_rgba(15,61,46,0.15)]"
            : "py-3.5 backdrop-blur-md bg-gradient-to-b from-brand-900/35 via-brand-900/10 to-transparent"
        }`}
      >
        <div className="container-x flex items-center justify-between h-14 md:h-16">
          {/* Logo — adapts to scroll state */}
          <a href="#" aria-label="לעמוד הבית" className="flex items-center gap-2.5 group">
            <span
              className={`grid place-items-center w-10 h-10 transition-colors duration-500 ${
                scrolled ? "text-brand-700" : "text-accent"
              }`}
            >
              <Logo className="w-9 h-9" />
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors group ${
                  scrolled
                    ? "text-brand-900/80 hover:text-brand-700"
                    : "text-cream/85 hover:text-cream"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 right-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                    scrolled ? "bg-brand-700" : "bg-accent"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* CTA — always visible with strong contrast */}
          <a
            href="#contact"
            className="hidden md:inline-flex btn-primary !py-2.5 !px-5 text-sm"
          >
            <span>קבע שיחה</span>
            <span aria-hidden>←</span>
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden grid place-items-center w-10 h-10 rounded-full transition-colors ${
              scrolled ? "bg-brand-700/8 hover:bg-brand-700/15" : "bg-cream/10 hover:bg-cream/20"
            }`}
            aria-label="Open menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 transition-all duration-300 ${
                  scrolled ? "bg-brand-900" : "bg-cream"
                } ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 transition-all duration-300 ${
                  scrolled ? "bg-brand-900" : "bg-cream"
                } ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 transition-all duration-300 ${
                  scrolled ? "bg-brand-900" : "bg-cream"
                } ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{ height: mobileOpen ? "auto" : 0, opacity: mobileOpen ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          className="md:hidden overflow-hidden bg-cream/95 backdrop-blur-xl border-b border-brand-700/10"
        >
          <nav className="container-x py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-brand-900/80 hover:text-brand-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary justify-center"
            >
              <span>קבע שיחה</span>
              <span aria-hidden>←</span>
            </a>
          </nav>
        </motion.div>
      </motion.header>
    </>
  );
}
