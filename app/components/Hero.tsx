"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Lighter parallax — fewer transforms = smoother
  const yShape1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yShape2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden mesh-emerald text-cream pt-24 sm:pt-28 md:pt-32"
    >
      {/* Grain overlay */}
      <div className="absolute inset-0 grain pointer-events-none" />

      {/* Floating orbs (only 2 now, with smaller blur for performance) */}
      <motion.div
        style={{ y: yShape1, opacity: opacityFade }}
        className="orb orb-accent w-80 h-80 top-[12%] left-[6%]"
      />
      <motion.div
        style={{ y: yShape2, opacity: opacityFade }}
        className="orb orb-brand w-[24rem] h-[24rem] bottom-[8%] right-[4%]"
      />

      {/* Subtle dot grid */}
      <svg
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

      <div className="container-x relative z-10 flex flex-col justify-center min-h-[100svh] py-16 sm:py-20 md:py-28">
        {/* Eyebrow badge */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 self-start mb-7 px-3.5 py-1.5 rounded-full glass-dark text-xs font-medium tracking-wide"
        >
          <span className="relative grid place-items-center w-1.5 h-1.5 rounded-full bg-accent">
            <span className="absolute inset-0 rounded-full bg-accent animate-ping" />
          </span>
          <span>פרויקטים חדשים מתקבלים — זמינות מוגבלת</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="h-display text-[2rem] sm:text-[2.75rem] md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5rem] max-w-5xl"
        >
          בית דיגיטלי לעסק שלך —
          <br />
          <span className="gradient-text">שלא רק נראה מדהים,</span>
          <br />
          אלא עובד בשבילך{" "}
          <span className="relative inline-block">
            24/7
            <svg
              viewBox="0 0 100 12"
              className="absolute -bottom-2 right-0 left-0 w-full h-3 text-accent/60"
              preserveAspectRatio="none"
            >
              <path
                d="M2 6 Q 25 0 50 6 T 98 6"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
          .
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 md:mt-9 text-base md:text-lg lg:text-xl text-cream/80 max-w-2xl leading-relaxed"
        >
          אתר תדמית מקצועי הוא לא כרטיס ביקור — הוא הכלי שהופך גולשים סקרנים
          ללקוחות משלמים. ליווי אישי, עיצוב ייחודי, ואוטומציות שעובדות בשבילך
          גם בלילה.{" "}
          <span className="text-accent font-semibold">
            מהיר ממה שאתה רגיל. אישי יותר ממה שציפית.
          </span>
        </motion.p>

        {/* CTAs — full width on mobile, inline on tablet+ */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 md:mt-11 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3"
        >
          <a href="#contact" className="btn-primary shine text-base sm:!px-9 sm:!py-4 justify-center">
            <span>קבע שיחת ייעוץ ללא עלות</span>
            <span aria-hidden>←</span>
          </a>
          <a href="#testimonials" className="btn-ghost-light justify-center">
            ראה דוגמאות עבודה
          </a>
        </motion.div>

        {/* Trust bar */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-10 sm:mt-14 flex flex-wrap gap-x-5 sm:gap-x-7 gap-y-2.5 sm:gap-y-3 text-xs sm:text-sm text-cream/65"
        >
          {[
            "ליווי אישי לכל אורך הדרך",
            "עיצוב מותאם — לא תבנית",
            "30 יום ליווי כלולים",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" className="text-accent shrink-0" fill="none">
                <circle cx="8" cy="8" r="7.5" stroke="currentColor" />
                <path d="M5 8.5l2 2 4-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </li>
          ))}
        </motion.ul>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream/45 text-xs tracking-widest uppercase"
      >
        <span>גלול</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-8 bg-cream/40"
        />
      </motion.div>
    </section>
  );
}
