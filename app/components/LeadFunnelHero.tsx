"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import LidupHero from "./LidupHero";

const fadeUp = {
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

/* Lock icon — reused from previous Hero for the trust line */
function LockIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

/* Arrow indicator for CTA */
function ArrowLeft({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

/* Funnel / sparkles icon for eyebrow */
function FunnelIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
    </svg>
  );
}


export default function LeadFunnelHero() {
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
      className="relative min-h-[100svh] overflow-hidden mesh-emerald text-cream flex flex-col justify-center pt-24 sm:pt-28 md:pt-28 pb-16 md:pb-20"
    >
      {/* Grain overlay */}
      <div aria-hidden="true" className="absolute inset-0 grain pointer-events-none" />

      {/* Floating orbs */}
      <motion.div
        aria-hidden="true"
        style={{ y: yShape1, opacity: opacityFade }}
        className="orb orb-accent w-80 h-80 top-[12%] left-[6%]"
      />
      <motion.div
        aria-hidden="true"
        style={{ y: yShape2, opacity: opacityFade }}
        className="orb orb-brand w-[24rem] h-[24rem] bottom-[8%] right-[4%]"
      />

      {/* Subtle dot grid */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hero-dots-new" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots-new)" />
      </svg>

      <div className="container-x relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-10 items-center">
          {/* === COPY SIDE === */}
          <div>
            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2.5 mb-6 sm:mb-7 px-4 py-2 rounded-full border border-accent/40 bg-brand-900/50 backdrop-blur-md text-sm font-semibold tracking-wide text-cream shadow-lg shadow-brand-900/30"
            >
              <span className="text-accent">
                <FunnelIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </span>
              <span>משפך לידים לעסקים · אתר + Lidup</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="h-display text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.25rem] xl:text-[3.75rem]"
            >
              הלידים כבר נכנסים.
              <br />
              השאלה היא{" "}
              <span className="gradient-text">מי מטפל בהם כמו שצריך.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 md:mt-8 text-base md:text-lg text-cream/80 max-w-2xl leading-relaxed"
            >
              אני בונה לעסקים{" "}
              <span className="text-accent font-semibold">משפך דיגיטלי</span>{" "}
              שמסנן פניות לא רלוונטיות, מחמם לידים שבאמת מעוניינים, ומרכז את כולם במקום אחד מסודר —
              כדי שאף ליד רציני לא יפול בין הכיסאות.
            </motion.p>

            {/* Supporting text */}
            <motion.p
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 md:mt-5 text-sm md:text-[0.95rem] text-cream/65 max-w-2xl leading-relaxed"
            >
              המשפך כולל אתר מקצועי לעסק, טופס חכם שמחובר ישירות למערכת{" "}
              <span className="text-cream/90 font-semibold">Lidup</span>,
              ותהליך מעקב שמאפשר לדעת מי פנה, מאיפה הוא הגיע, מה הסטטוס שלו ומה צריך לעשות איתו עכשיו.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3"
            >
              {/* Primary CTA scrolls to the contact form. The dedicated
                  #lead-check section will be added in a later phase. */}
              <a
                href="#contact"
                className="btn-primary shine text-base sm:!px-9 sm:!py-4 justify-center"
              >
                <span>בדוק אם העסק שלך מפספס לידים</span>
                <ArrowLeft className="w-4 h-4" />
              </a>
              <a href="#how-it-works" className="btn-ghost-light justify-center">
                איך זה עובד?
              </a>
            </motion.div>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="mt-7 sm:mt-8 flex items-start gap-2 text-xs sm:text-sm text-cream/75 leading-relaxed max-w-2xl"
            >
              <LockIcon className="w-4 h-4 sm:w-[17px] sm:h-[17px] mt-0.5 text-cream/70 shrink-0" />
              <span>
                <span className="font-bold text-cream">הקמה אישית לעסק</span>
                {" "}— בלי תבניות גנריות, בלי SaaS קר, סנכרון מלא לתהליך שלך.
              </span>
            </motion.p>
          </div>

          {/* === VISUAL SIDE === */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[36rem] mx-auto lg:max-w-none"
          >
            <LidupHero />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-cream/55 text-[0.65rem] tracking-widest uppercase pointer-events-none"
      >
        <span>גלול</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-7 bg-cream/40"
        />
      </motion.div>
    </section>
  );
}

