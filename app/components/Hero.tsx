"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

/* Handshake icon (Lucide-style) */
function HandshakeIcon({ className = "w-4 h-4" }: { className?: string }) {
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
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
      <path d="M3 4h8" />
    </svg>
  );
}

/* Lock icon */
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
      className="relative min-h-[100svh] overflow-hidden mesh-emerald text-cream flex flex-col justify-center pt-24 sm:pt-28 md:pt-28 pb-20 md:pb-24"
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
          <pattern id="hero-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>

      <div className="container-x relative z-10 w-full">
        {/* Eyebrow badge — handshake + new text, gold-tinted */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2.5 self-start mb-6 sm:mb-7 px-4 py-2 rounded-full border border-accent/40 bg-brand-900/50 backdrop-blur-md text-sm font-semibold tracking-wide text-cream shadow-lg shadow-brand-900/30"
        >
          <span className="text-accent">
            <HandshakeIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
          </span>
          <span>אתר מקצועי · בליווי אישי</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="h-display text-[2rem] sm:text-[2.75rem] md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5rem] max-w-5xl"
        >
          אתרים שמייצרים{" "}
          <span className="relative inline-block">
            <span className="gradient-text">אמון, פניות ולקוחות</span>
            <svg
              viewBox="0 0 100 12"
              className="absolute -bottom-2 right-0 left-0 w-full h-3 text-accent/60"
              preserveAspectRatio="none"
              aria-hidden="true"
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
          <br />
          — לא רק נוכחות באינטרנט.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 md:mt-8 text-base md:text-lg lg:text-xl text-cream/80 max-w-2xl leading-relaxed"
        >
          אני בונה לעסקים אתרים מעוצבים, מהירים ומדויקים שמסבירים{" "}
          <span className="text-accent font-semibold">
            למה לבחור דווקא בהם
          </span>
          {" "}— ומחוברים לטפסים, וואטסאפ ואוטומציות כדי שאף ליד לא ילך לאיבוד.
        </motion.p>

        {/* CTAs — full width on mobile, inline on tablet+ */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3"
        >
          <a href="#contact" className="btn-primary shine text-base sm:!px-9 sm:!py-4 justify-center">
            <span>קבע שיחת ייעוץ ללא עלות</span>
            <span aria-hidden>←</span>
          </a>
          <a href="#testimonials" className="btn-ghost-light justify-center">
            ראה דוגמאות לאתרים שבניתי
          </a>
        </motion.div>

        {/* Scarcity line — inline, no container */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-8 sm:mt-10 flex items-start gap-2 text-xs sm:text-sm text-cream/80 leading-relaxed max-w-2xl"
        >
          <LockIcon className="w-4 h-4 sm:w-[17px] sm:h-[17px] mt-0.5 text-cream/75 shrink-0" />
          <span>
            <span className="font-bold text-cream">מקבל 4 לקוחות חדשים בחודש בלבד</span>
            {" "}— כדי לשמור על איכות, זמינות וליווי אישי.
          </span>
        </motion.p>
      </div>

      {/* Scroll cue — decorative */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
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
