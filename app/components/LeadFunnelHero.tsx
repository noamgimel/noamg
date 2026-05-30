"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import LidupHero from "./LidupHero";

const fadeUp = {
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

/* Gift icon — marks the "included free" benefit */
function GiftIcon({ className = "w-4 h-4" }: { className?: string }) {
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
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M12 8S11 3 8 3a2.5 2.5 0 0 0 0 5h4zM12 8s1-5 4-5a2.5 2.5 0 0 1 0 5h-4z" />
    </svg>
  );
}

/* Spark / AI icon — marks the automation & AI benefit and the divider */
function SparkIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2l1.7 6.6L20 10.5l-6.3 1.9L12 19l-1.7-6.6L4 10.5l6.3-1.9L12 2z" />
      <path d="M19 3l.7 2.6L22 6.3l-2.3.7L19 9.5l-.7-2.5L16 6.3l2.3-.7L19 3z" opacity="0.7" />
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
            {/* Headline */}
            <motion.h2
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="h-display text-[1.9rem] sm:text-[2.4rem] md:text-[2.8rem] lg:text-[2.9rem] xl:text-[3.4rem] leading-[1.12]"
            >
              זה לא רק הקמת אתר
              <br />
              אלא משפך דיגיטלי
              <br />
              <span className="gradient-text">שעובד בשבילכם 24/7</span>
            </motion.h2>

            {/* Benefit 1 — LeadSync (included free) */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 md:mt-8 relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-5 sm:p-6 max-w-2xl"
            >
              <span
                aria-hidden="true"
                className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-accent/80 via-accent/50 to-accent/10"
              />
              <div className="flex items-center gap-2 mb-3 text-accent">
                <GiftIcon className="w-[18px] h-[18px]" />
                <span className="text-[0.7rem] sm:text-xs font-bold tracking-[0.12em] uppercase">
                  כלול ללא עלות
                </span>
              </div>
              <p className="text-base md:text-[1.05rem] text-cream/85 leading-relaxed">
                בסיום התהליך{" "}
                <span className="font-semibold text-accent">תקבלו גישה חינמית ל־</span>
                <span
                  dir="ltr"
                  className="rounded-md border border-accent/35 bg-accent/15 px-1.5 py-0.5 font-bold text-accent whitespace-nowrap"
                >
                  LeadSync
                </span>{" "}
                — מערכת ניהול לידים חכמה שמתחברת ישירות לאתר, מרכזת את כל הפניות
                במקום אחד, מתריעה בזמן אמת על לידים חדשים, מתאמת עבורכם פגישות ביומן
                ועוזרת לכם לעקוב אחרי כל פנייה מהרגע שהיא נכנסת ועד שהיא נסגרת.
              </p>
            </motion.div>

            {/* Divider — "but that's not all" */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="my-5 md:my-6 flex items-center gap-3 max-w-2xl"
            >
              <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-l from-transparent to-accent/45" />
              <span className="flex items-center gap-1.5 text-accent font-bold text-sm sm:text-base whitespace-nowrap">
                <SparkIcon className="w-4 h-4" />
                אבל זה לא הכל
              </span>
              <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-transparent to-accent/45" />
            </motion.div>

            {/* Benefit 2 — AI automations */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, delay: 0.54, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-5 sm:p-6 max-w-2xl"
            >
              <span
                aria-hidden="true"
                className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-accent/80 via-accent/50 to-accent/10"
              />
              <div className="flex items-center gap-2 mb-3 text-accent">
                <SparkIcon className="w-[18px] h-[18px]" />
                <span className="text-[0.7rem] sm:text-xs font-bold tracking-[0.12em] uppercase">
                  אוטומציה ו־AI מותאם אישית
                </span>
              </div>
              <p className="text-base md:text-[1.05rem] text-cream/85 leading-relaxed">
                ניתן לבנות עבורכם{" "}
                <span className="font-semibold text-accent">אוטומציות וסוכני AI</span>{" "}
                מותאמים אישית לעסק שלכם — כאלה שעונים לפניות, מסננים לקוחות לא
                רלוונטיים, שולחים הודעות וחוסכים לכם שעות של עבודה ידנית בכל חודש.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
    </section>
  );
}

