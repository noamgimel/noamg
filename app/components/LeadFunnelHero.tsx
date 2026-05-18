"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

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

/* Form icon for "website form" chip */
function FormIcon({ className = "w-5 h-5" }: { className?: string }) {
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
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </svg>
  );
}

/* Source chip — small pill with icon + label, used in the visual */
type SourceChipProps = {
  icon: React.ReactNode;
  label: string;
  delay?: number;
};
function SourceChip({ icon, label, delay = 0 }: SourceChipProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center gap-2.5 rounded-xl border border-cream/15 bg-brand-900/45 backdrop-blur-md px-3 py-2 shadow-lg shadow-brand-900/30"
    >
      <span className="grid place-items-center w-7 h-7 rounded-lg bg-cream/95 text-brand-900 overflow-hidden">
        {icon}
      </span>
      <span className="text-[0.78rem] sm:text-[0.82rem] font-semibold text-cream tracking-tight">
        {label}
      </span>
    </motion.div>
  );
}

/* Lead status card — used in the bottom row of the visual */
type LeadCardProps = {
  source: string;
  status: string;
  tone: "new" | "warm" | "followup";
  delay?: number;
};
function LeadCard({ source, status, tone, delay = 0 }: LeadCardProps) {
  const dot =
    tone === "new"
      ? "bg-accent shadow-[0_0_10px_rgba(201,169,97,0.7)]"
      : tone === "warm"
      ? "bg-brand-300 shadow-[0_0_10px_rgba(115,185,141,0.6)]"
      : "bg-cream/60";

  const label =
    tone === "new" ? "ליד חדש" : tone === "warm" ? "ליד חם" : "במעקב";

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-xl border border-cream/12 bg-brand-900/55 backdrop-blur-md px-3 py-2.5 shadow-lg shadow-brand-900/30"
    >
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <span className="text-[0.7rem] font-bold text-cream tracking-tight">
          {label}
        </span>
        <span className={`w-2 h-2 rounded-full ${dot}`} aria-hidden="true" />
      </div>
      <div className="text-[0.68rem] text-cream/65 leading-snug">
        מקור: <span className="text-cream/90 font-semibold">{source}</span>
      </div>
      <div className="text-[0.68rem] text-cream/65 leading-snug">
        סטטוס: <span className="text-cream/90 font-semibold">{status}</span>
      </div>
    </motion.div>
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
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
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
              <span className="relative inline-block">
                <span className="gradient-text">מי מטפל בהם כמו שצריך.</span>
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
          <LeadFunnelVisual />
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

/* =========================================================================
   VISUAL — sources flowing into Lidup, with sample lead cards below
   ========================================================================= */

function LeadFunnelVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[28rem] mx-auto lg:max-w-none"
      aria-hidden="true"
    >
      {/* Soft glow behind the whole visual */}
      <div
        className="absolute inset-0 -m-8 rounded-[2rem] bg-accent/8 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative">
        {/* Sources row */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-5">
          <SourceChip
            delay={0.55}
            label="WhatsApp"
            icon={
              <Image
                src="/icons/whatsapp.svg"
                alt=""
                width={20}
                height={20}
                className="w-5 h-5"
              />
            }
          />
          <SourceChip
            delay={0.65}
            label="Instagram"
            icon={
              <Image
                src="/icons/instagram.svg"
                alt=""
                width={20}
                height={20}
                className="w-5 h-5"
              />
            }
          />
          <SourceChip
            delay={0.75}
            label="Facebook"
            icon={
              <Image
                src="/icons/facebook.svg"
                alt=""
                width={20}
                height={20}
                className="w-5 h-5"
              />
            }
          />
          <SourceChip
            delay={0.85}
            label="טופס מהאתר"
            icon={<FormIcon className="w-5 h-5 text-brand-700" />}
          />
        </div>

        {/* Connector lines into Lidup */}
        <div className="relative h-8 sm:h-10 mb-1">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 200 40"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="lf-line" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C9A961" stopOpacity="0" />
                <stop offset="100%" stopColor="#C9A961" stopOpacity="0.55" />
              </linearGradient>
            </defs>
            <path
              d="M 30 0 Q 30 25 100 38"
              stroke="url(#lf-line)"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="3 4"
            />
            <path
              d="M 80 0 Q 80 25 100 38"
              stroke="url(#lf-line)"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="3 4"
            />
            <path
              d="M 120 0 Q 120 25 100 38"
              stroke="url(#lf-line)"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="3 4"
            />
            <path
              d="M 170 0 Q 170 25 100 38"
              stroke="url(#lf-line)"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="3 4"
            />
          </svg>
        </div>

        {/* Central Lidup card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl border border-accent/30 bg-gradient-to-br from-brand-700/85 to-brand-900/90 backdrop-blur-md p-4 sm:p-5 shadow-2xl shadow-brand-900/40 glow-accent"
        >
          <div className="flex items-center gap-3">
            {/* Logo glyph */}
            <div className="grid place-items-center w-11 h-11 rounded-xl bg-accent/15 border border-accent/30 text-accent shrink-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="3" />
                <circle cx="12" cy="12" r="8" strokeDasharray="3 3" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-[0.7rem] font-semibold tracking-widest text-accent uppercase">
                Lidup
              </div>
              <div className="text-base sm:text-[1.05rem] font-extrabold text-cream tracking-tight leading-snug">
                כל הלידים במקום אחד
              </div>
              <div className="text-[0.72rem] text-cream/65 mt-0.5">
                ניהול, מעקב, סטטוסים ותזכורות
              </div>
            </div>
          </div>

          {/* Mini stats row inside the card */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="rounded-lg bg-cream/5 border border-cream/10 px-2 py-1.5 text-center">
              <div className="text-[0.95rem] font-extrabold text-cream tabular-num leading-none">12</div>
              <div className="text-[0.6rem] text-cream/60 mt-1 leading-tight">חדשים השבוע</div>
            </div>
            <div className="rounded-lg bg-cream/5 border border-cream/10 px-2 py-1.5 text-center">
              <div className="text-[0.95rem] font-extrabold text-cream tabular-num leading-none">4</div>
              <div className="text-[0.6rem] text-cream/60 mt-1 leading-tight">ממתינים</div>
            </div>
            <div className="rounded-lg bg-cream/5 border border-cream/10 px-2 py-1.5 text-center">
              <div className="text-[0.95rem] font-extrabold text-cream tabular-num leading-none">3</div>
              <div className="text-[0.6rem] text-cream/60 mt-1 leading-tight">לחזור היום</div>
            </div>
          </div>
        </motion.div>

        {/* Connector lines out to lead cards */}
        <div className="relative h-6 sm:h-8 mt-1">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 200 32"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="lf-line-out" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C9A961" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#C9A961" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 100 0 Q 100 16 35 30"
              stroke="url(#lf-line-out)"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="3 4"
            />
            <path
              d="M 100 0 Q 100 16 100 30"
              stroke="url(#lf-line-out)"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="3 4"
            />
            <path
              d="M 100 0 Q 100 16 165 30"
              stroke="url(#lf-line-out)"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="3 4"
            />
          </svg>
        </div>

        {/* Lead cards row */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-2">
          <LeadCard
            tone="new"
            source="וואטסאפ"
            status="צריך לחזור"
            delay={1.25}
          />
          <LeadCard
            tone="warm"
            source="טופס אתר"
            status="נקבעה שיחה"
            delay={1.35}
          />
          <LeadCard
            tone="followup"
            source="Google"
            status="פולואפ אוטומטי"
            delay={1.45}
          />
        </div>
      </div>
    </motion.div>
  );
}
