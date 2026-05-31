"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import LidupHero from "./LidupHero";
import SectionSparks from "./SectionSparks";

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

/* Check icon — marks each LeadSync capability */
function CheckIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" className={className} aria-hidden="true">
      <path d="M2.5 6.5l2 2 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Eyebrow badge — highlights a message's headline label in its own pill */
function MessageBadge({
  label,
  icon,
}: {
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent shadow-sm shadow-accent/5">
      <span className="text-xs sm:text-sm font-bold tracking-[0.1em] uppercase">
        {label}
      </span>
      {icon}
    </span>
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
      id="funnel"
      className="relative overflow-hidden mesh-emerald text-cream pt-28 sm:pt-32 pb-20 md:pb-28"
    >
      {/* Grain overlay */}
      <div aria-hidden="true" className="absolute inset-0 grain pointer-events-none" />

      {/* Ambient sparks across the whole section */}
      <SectionSparks count={38} />

      {/* Floating orbs */}
      <motion.div
        aria-hidden="true"
        style={{ y: yShape1, opacity: opacityFade }}
        className="orb orb-accent w-80 h-80 top-[10%] left-[4%]"
      />
      <motion.div
        aria-hidden="true"
        style={{ y: yShape2, opacity: opacityFade }}
        className="orb orb-brand w-[24rem] h-[24rem] bottom-[6%] right-[3%]"
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

      <div className="container-x relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* === HEADLINE === */}
          <motion.h2
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="h-display text-[2.1rem] sm:text-[2.8rem] md:text-[3.3rem] lg:text-[3.8rem] leading-[1.1]"
          >
            זה לא רק הקמת אתר
            <br />
            אלא משפך דיגיטלי
            <br />
            <span className="gradient-text">שעובד בשבילכם 24/7</span>
          </motion.h2>

          {/* === MESSAGE 1 — LeadSync (included free) === */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 md:mt-12 max-w-2xl"
          >
            <MessageBadge label="כלול ללא עלות" icon={<GiftIcon className="w-[18px] h-[18px]" />} />
            <p className="mt-5 text-lg sm:text-xl md:text-[1.35rem] leading-relaxed text-cream/90">
              בסיום התהליך תקבלו{" "}
              <span className="font-semibold text-accent">גישה חינמית</span>{" "}
              למערכת ניהול הלידים החכמה{" "}
              <span dir="ltr" className="relative inline-block font-extrabold tracking-wide text-cream">
                LeadSync
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-l from-accent/30 via-accent to-accent/30"
                />
              </span>{" "}
              — שמתחבר ישירות לאתר ומרכזת את כל הפניות במקום אחד.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-right">
              {[
                "מתריעה בזמן אמת על לידים חדשים",
                "מתאמת עבורכם פגישות ביומן",
                "מעקב צמוד אחר כל פנייה",
                "אוטומציות שמעלות את אחוזי הסגירה",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-cream/[0.04] border border-cream/10 px-4 py-3 text-sm sm:text-[0.95rem] text-cream/90 leading-snug"
                >
                  <span
                    aria-hidden="true"
                    className="grid place-items-center w-5 h-5 rounded-full bg-accent/15 text-accent shrink-0"
                  >
                    <CheckIcon className="w-3 h-3" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* === DIVIDER — "but that's not all" === */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="my-10 md:my-12 flex items-center gap-4 w-full max-w-lg"
          >
            <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-l from-transparent to-accent/50" />
            <span className="flex items-center gap-2 text-accent font-bold text-base sm:text-lg md:text-xl whitespace-nowrap">
              אבל זה לא הכל
              <SparkIcon className="w-5 h-5" />
            </span>
            <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-transparent to-accent/50" />
          </motion.div>

          {/* === MESSAGE 2 — AI automations === */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.54, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <MessageBadge
              label="אוטומציה וסוכני AI מותאמים אישית"
              icon={<SparkIcon className="w-[18px] h-[18px]" />}
            />
            <p className="mt-5 text-lg sm:text-xl md:text-[1.35rem] leading-relaxed text-cream/90">
              ניתן לבנות עבורכם{" "}
              <span className="font-semibold text-accent">אוטומציות וסוכני AI</span>{" "}
              מותאמים אישית לעסק שלכם — כאלה שעונים לפניות, מסננים לקוחות לא
              רלוונטיים, שולחים הודעות וחוסכים לכם שעות של עבודה ידנית בכל חודש.
            </p>
          </motion.div>

          {/* === VISUAL === */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.66, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 md:mt-16 w-full max-w-3xl mx-auto"
          >
            <LidupHero />
          </motion.div>

          {/* === CTAs === */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 md:mt-12 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-3"
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

          {/* Tagline below CTAs */}
          <motion.p
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-2xl text-lg sm:text-xl md:text-2xl font-bold text-cream/85 leading-snug"
          >
            אתר טוב לא מסתיים בהשארת הפרטים של הליד — הוא מתחיל משם.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
