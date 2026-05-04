"use client";

import { motion } from "framer-motion";

const fits = [
  "יש לך עסק טוב, אבל האתר לא משקף את הרמה שלך.",
  "אתה מקבל פניות מפה לאוזן ורוצה להפוך את זה למערכת מסודרת.",
  "אתה רוצה אתר שנראה מקצועי — אבל גם יודע להוביל לפעולה.",
  "אין לך זמן לנהל פרויקט אתר אינסופי עם עשרה ספקים.",
];

const notFits = [
  "אתה מחפש את האתר הכי זול שאפשר.",
  "אתה רוצה רק עמוד יפה — בלי לחשוב על מסר, בידול או פניות.",
];

export default function WhoFor() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-36 mesh-cream-warm overflow-hidden">
      <div className="orb orb-accent w-96 h-96 -top-32 -left-32 opacity-40" />
      <div className="orb orb-brand w-[28rem] h-[28rem] -bottom-40 -right-32 opacity-40" />

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-brand-700/8 border border-brand-700/15 text-xs font-semibold text-brand-700 tracking-wide"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          התאמה
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="h-section text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-900 max-w-4xl"
        >
          לפני שמתקדמים —{" "}
          <span className="gradient-text-emerald">בוא נוודא שיש התאמה.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 text-base md:text-lg text-brand-900/70 max-w-2xl leading-relaxed"
        >
          לא לכל עסק אני מתאים, ולא לכל עסק אתר כזה הוא הצעד הנכון עכשיו. הנה
          איך תדע אם זה בשבילך.
        </motion.p>

        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-5 lg:gap-6">
          {/* FITS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="h-full p-7 md:p-8 rounded-3xl glass-light card-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="grid place-items-center w-10 h-10 rounded-2xl bg-gradient-to-br from-accent to-accent-bright text-brand-900">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <path
                      d="M5 12l5 5 9-11"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-brand-900">
                  זה מתאים לך אם:
                </h3>
              </div>
              <ul className="space-y-3.5">
                {fits.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-brand-900/80 leading-relaxed"
                  >
                    <span className="grid place-items-center w-5 h-5 rounded-full bg-accent/20 text-accent shrink-0 mt-1">
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2.5 6.5l2 2 5-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* DOESN'T FIT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="h-full p-7 md:p-8 rounded-3xl bg-brand-900/[0.025] border border-brand-900/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="grid place-items-center w-10 h-10 rounded-2xl bg-brand-900/8 text-brand-900/50">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-brand-900/70">
                  זה פחות מתאים אם:
                </h3>
              </div>
              <ul className="space-y-3.5">
                {notFits.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-brand-900/65 leading-relaxed"
                  >
                    <span className="grid place-items-center w-5 h-5 rounded-full bg-brand-900/8 text-brand-900/45 shrink-0 mt-1 text-xs">
                      ✕
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 pt-6 border-t border-brand-900/10 text-sm text-brand-900/55 italic leading-relaxed">
                במקרים האלה אני אעדיף לכוון אותך לפתרון אחר שעשוי להתאים יותר.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
