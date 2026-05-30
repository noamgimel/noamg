"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SitesShowcase from "./SitesShowcase";
import SectionSparks from "./SectionSparks";

const fadeUp = {
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

/* ── Main Hero component ─────────────────────────────────── */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yShape1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yShape2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden mesh-emerald text-cream min-h-[100svh] flex flex-col pt-20 sm:pt-22"
    >
      {/* Grain overlay */}
      <div aria-hidden="true" className="absolute inset-0 grain pointer-events-none" />

      {/* Ambient sparks across the whole section */}
      <SectionSparks count={38} />

      {/* Floating orbs */}
      <motion.div
        aria-hidden="true"
        style={{ y: yShape1, opacity: opacityFade }}
        className="orb orb-accent w-72 h-72 top-[10%] right-[8%]"
      />
      <motion.div
        aria-hidden="true"
        style={{ y: yShape2, opacity: opacityFade }}
        className="orb orb-brand w-80 h-80 bottom-[15%] left-[4%]"
      />

      {/* Subtle dot grid */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hero-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>

      {/* ── Content ──────────────────────────────────────────── */}
      <div className="container-x relative z-10 flex-1 min-w-0 w-full flex flex-col justify-start pt-8 sm:pt-10 pb-[96px] lg:grid lg:grid-cols-[3fr_2fr] lg:gap-10 xl:gap-8 lg:items-center lg:pt-0 lg:justify-center">

        {/* Text block — centered on mobile/tablet, right-aligned beside the
            carousel on desktop (first DOM column → right side in RTL) */}
        <div className="text-center lg:text-right mx-auto lg:mx-0 max-w-3xl lg:max-w-none">
          <motion.h1
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="h-display text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem] lg:text-[2.6rem] xl:text-[3.2rem] mx-auto"
          >
            בונים אתר שלא
            <br className="lg:hidden" />
            {" "}רק נראה טוב-
            <br />
            <span className="gradient-text">אלא גורם ללקוחות לבחור בך.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 md:mt-6 text-sm md:text-base lg:text-lg text-cream/80 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            אני בונה לעסקים אתרים מקצועיים, חדים ומדויקים שמציגים את הערך שלהם בצורה ברורה, יוצרים אמון מהרגע הראשון —{" "}
            <span className="text-accent font-semibold">והופכים מבקרים באתר לפניות אמיתיות.</span>
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 md:mt-8 flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start gap-3"
          >
            <a
              href="#contact"
              className="btn-primary shine text-base sm:!px-8 sm:!py-3.5 justify-center"
            >
              <span>קבע שיחת ייעוץ ללא עלות</span>
              <span aria-hidden>←</span>
            </a>
            <a href="#testimonials" className="btn-ghost-light justify-center">
              ראה דוגמאות לאתרים שבניתי
            </a>
          </motion.div>
        </div>

        {/* Visual — auto-scrolling carousel of site screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 md:mt-12 lg:mt-0 w-full min-w-0 max-w-full overflow-hidden"
        >
          <SitesShowcase />
        </motion.div>
      </div>

      {/* ── Social proof trust bar ────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.9 }}
        className="absolute bottom-0 inset-x-0 border-t border-white/[0.12] z-10 bg-brand-900/20"
      >
        <div className="container-x py-3.5 sm:py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
            {/* Scarcity */}
            <div className="flex items-center gap-2 text-[0.78rem] sm:text-sm text-cream/80 leading-snug">
              <span className="relative flex h-2.5 w-2.5 shrink-0 mt-0.5" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span>
                <span className="font-bold text-cream">מקבל 4 לקוחות חדשים בחודש בלבד</span>
                {" "}— כדי לשמור על איכות, זמינות וליווי אישי.
              </span>
            </div>

            {/* Credential */}
            <div className="flex items-center gap-2 text-[0.7rem] text-cream/50 shrink-0">
              <span className="leading-tight whitespace-nowrap">Wix Studio Certified Designer</span>
              <div className="flex gap-0.5" aria-label="דירוג 4 כוכבים">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="w-3.5 h-3.5" aria-hidden="true">
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      fill="#C9A961"
                    />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
