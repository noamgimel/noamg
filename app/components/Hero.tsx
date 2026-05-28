"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

/* ── Browser mockup card ──────────────────────────────────── */
function LockIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 17a2 2 0 100-4 2 2 0 000 4zm6-7h-1V7a5 5 0 10-10 0v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2zM9 7a3 3 0 016 0v3H9V7z" />
    </svg>
  );
}

function BrowserCard({ id, url }: { id: string; url: string }) {
  return (
    <div
      className="w-full rounded-xl overflow-hidden bg-white border border-white/10"
      style={{
        boxShadow:
          "0 2px 4px rgba(15,61,46,0.08), 0 24px 56px -14px rgba(15,61,46,0.40), 0 48px 96px -32px rgba(15,61,46,0.22)",
      }}
    >
      {/* macOS title bar — forced LTR so dots stay on the left */}
      <div
        dir="ltr"
        className="flex items-center gap-2 px-3 border-b border-black/[0.06]"
        style={{ height: 28, background: "#F5F2EB" }}
      >
        <div className="flex gap-[5px] shrink-0">
          <span className="block w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="block w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="block w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div
          className="flex-1 max-w-[180px] mx-auto bg-white border border-black/[0.07] rounded flex items-center justify-center gap-1 font-medium"
          style={{ height: 18, fontSize: 9, color: "#2A3E36" }}
        >
          <LockIcon />
          {url}
        </div>
        <div className="w-9 shrink-0" />
      </div>
      {/* Screenshot */}
      <div className="overflow-hidden" style={{ aspectRatio: "16/10", background: "#f3f0e8" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/showcase/site-${id}.png`}
          alt=""
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
}

/* ── Stacked card deck visual ────────────────────────────── */
const DECK = [
  // back card — visible as a shadow behind
  {
    id: "timely",
    url: "timely.co.il",
    initial:  { opacity: 0, y: 20, rotate: -6, x: -18, scale: 0.93 },
    animate:  { opacity: 0.52, y: 0, rotate: -6, x: -18, scale: 0.93 },
    delay: 0.55,
  },
  // middle card
  {
    id: "saason",
    url: "saason.co.il",
    initial:  { opacity: 0, y: 20, rotate: 4, x: 12, scale: 0.96 },
    animate:  { opacity: 0.78, y: 0, rotate: 4, x: 12, scale: 0.96 },
    delay: 0.45,
  },
  // front card — straight, full opacity
  {
    id: "benpaz",
    url: "benpazshop.com",
    initial:  { opacity: 0, y: 24, rotate: -1, x: 0, scale: 1 },
    animate:  { opacity: 1, y: 0, rotate: -1, x: 0, scale: 1 },
    delay: 0.65,
  },
];

function HeroVisual() {
  return (
    /* Outer div provides the aspect-ratio bounding box.
       padding-bottom % trick ensures the absolute-positioned
       cards always match the container's proportions. */
    <div aria-hidden="true" className="relative w-full" style={{ paddingBottom: "68%" }}>
      {DECK.map((card, i) => (
        <motion.div
          key={card.id}
          className="absolute inset-0"
          style={{ zIndex: i + 1 }}
          initial={card.initial}
          animate={card.animate}
          transition={{ delay: card.delay, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <BrowserCard id={card.id} url={card.url} />
        </motion.div>
      ))}
    </div>
  );
}

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
      className="relative overflow-hidden mesh-emerald text-cream pt-20 sm:pt-22"
    >
      {/* Grain overlay */}
      <div aria-hidden="true" className="absolute inset-0 grain pointer-events-none" />

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

      {/* ── Content grid ─────────────────────────────────────── */}
      {/*
        RTL grid: first column → right side (text), second column → left side (visual).
        On mobile/tablet: stacks vertically (text first, visual below).
      */}
      <div className="container-x relative z-10 grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center py-10 sm:py-14 md:py-16 pb-[88px]">

        {/* Text — right column in RTL */}
        <div>
          <motion.h1
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="h-display text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem] lg:text-[3rem] xl:text-[3.4rem] max-w-2xl"
          >
            אתרים שמייצרים{" "}
            <span className="gradient-text whitespace-nowrap">אמון, פניות ולקוחות</span>
            <br />
            — לא רק נוכחות באינטרנט.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 md:mt-6 text-sm md:text-base lg:text-lg text-cream/80 max-w-lg leading-relaxed"
          >
            אני בונה לעסקים אתרים מעוצבים, מהירים ומדויקים שמסבירים{" "}
            <span className="text-accent font-semibold">למה לבחור דווקא בהם</span>
            {" "}— ומחוברים לטפסים, וואטסאפ ואוטומציות כדי שאף ליד לא ילך לאיבוד.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 md:mt-8 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3"
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

        {/* Visual — left column in RTL */}
        {/* max-w caps the card on tablet (single-col), removed on desktop (2-col) */}
        <div className="max-w-[440px] mx-auto w-full lg:max-w-none px-4 sm:px-6 lg:px-4 lg:py-4">
          <HeroVisual />
        </div>
      </div>

      {/* ── Social proof trust bar ────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.9 }}
        className="absolute bottom-0 inset-x-0 border-t border-white/[0.12] z-10"
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
