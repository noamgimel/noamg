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
  const yShape1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yShape2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden mesh-emerald text-cream flex flex-col justify-center pt-24 sm:pt-28 md:pt-28 pb-24 md:pb-28"
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
        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="h-display text-[2rem] sm:text-[2.75rem] md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5rem] max-w-5xl"
        >
          אתרים שמייצרים{" "}
          <span className="gradient-text whitespace-nowrap">אמון, פניות ולקוחות</span>
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

      </div>

      {/* Social proof trust bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.9 }}
        className="absolute bottom-0 inset-x-0 border-t border-white/[0.12] z-10"
      >
        <div className="container-x py-3.5 sm:py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
            {/* Scarcity — right side in RTL */}
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

            {/* Credential — left side in RTL */}
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
