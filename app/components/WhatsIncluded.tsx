"use client";

import { motion } from "framer-motion";

const features = [
  "עיצוב מותאם אישית — לא תבנית, לא 'וריאציה' של עיצוב קיים",
  "אסטרטגיית תוכן וניסוח — אני כותב את הטקסטים יחד איתך",
  "רספונסיביות מלאה — מובייל, טאבלט, דסקטופ, כל גודל מסך",
  "מהירות טעינה מקצועית",
  "SEO בסיסי — כותרות, מטא, מבנה נכון לגוגל",
  "טפסי יצירת קשר עם הגעה ישירות למייל / וואטסאפ",
  "אינטגרציה ל-Google Analytics + Meta Pixel",
  "אוטומציות בסיסיות שחוסכות לך זמן",
  "דומיין + אחסון לשנה ראשונה",
  "הדרכה אישית של 30 דקות איך לעדכן בעצמך",
];

export default function WhatsIncluded() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-36 mesh-dark text-cream overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none opacity-50" />

      {/* Floating orbs */}
      <div className="orb orb-accent w-96 h-96 -top-40 -left-32 opacity-50 drift-slow" />
      <div className="orb orb-brand w-[28rem] h-[28rem] -bottom-40 -right-40 opacity-50 drift" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-xs font-semibold text-accent tracking-wide"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              מה כלול
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="h-section text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              אתר תדמית מלא.
              <br />
              <span className="gradient-text">בלי כוכביות.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-6 text-lg text-cream/75 leading-relaxed max-w-md"
            >
              מחיר סגור, חבילה מלאה, ללא תוספות מפתיעות. הנה בדיוק מה שאתה
              מקבל בכל פרויקט.
            </motion.p>

            {/* Bonus highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 p-6 rounded-3xl glass-dark max-w-md group hover:bg-accent/8 transition-colors duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent-bright text-brand-900 font-extrabold shrink-0 text-base shine">
                  +30
                </div>
                <div>
                  <div className="font-extrabold text-cream text-lg">
                    יום ליווי מלא, ללא תוספת
                  </div>
                  <p className="mt-1 text-sm text-cream/70">
                    כל בקשת שינוי, ללא ספירת זמן, ללא 'זה לא בחבילה'.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Features grid */}
          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-3">
              {features.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  whileHover={{ y: -3 }}
                  className="flex items-start gap-3 p-4 rounded-2xl glass-dark hover:bg-cream/[0.06] transition-all duration-300 group"
                >
                  <span className="grid place-items-center w-7 h-7 rounded-full bg-accent/15 text-accent shrink-0 mt-0.5 group-hover:bg-accent group-hover:text-brand-900 transition-colors duration-300">
                    <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6.5l2 2 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-cream/85 leading-relaxed group-hover:text-cream transition-colors text-sm md:text-base">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
