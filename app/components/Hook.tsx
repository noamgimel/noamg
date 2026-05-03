"use client";

import { motion } from "framer-motion";

export default function Hook() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-36 mesh-cream overflow-hidden">
      {/* Decorative orbs */}
      <div className="orb orb-accent w-72 h-72 -top-20 -right-20 opacity-50" />
      <div className="orb orb-brand w-96 h-96 -bottom-32 -left-20 opacity-40" />

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-brand-700/8 border border-brand-700/15 text-xs font-semibold text-brand-700 tracking-wide"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          למה אתר רגיל לא מספיק
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-section text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-900 max-w-4xl"
        >
          יש <span className="gradient-text-emerald">שני סוגי</span> אתרים בעולם.
        </motion.h2>

        <div className="mt-16 grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl">
          {/* Type 1 — exists */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative p-8 md:p-10 rounded-3xl glass-light card-glow card-glow-hover transition-all duration-500"
          >
            <div className="text-7xl font-black text-brand-900/8 mb-4 leading-none tabular-num">01</div>
            <h3 className="text-2xl font-extrabold text-brand-900 mb-4">
              אתרים ש"קיימים"
            </h3>
            <p className="text-brand-900/70 leading-relaxed">
              כתובת באינטרנט. דף 'אודות', דף 'שירותים', טלפון בתחתית. הלקוחות
              נוחתים, מסתכלים שלוש שניות, וממשיכים הלאה.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-brand-900/40">
              <span className="w-8 h-px bg-brand-900/20" />
              <span>סבבה. לא יותר.</span>
            </div>
          </motion.div>

          {/* Type 2 — works */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative p-8 md:p-10 rounded-3xl mesh-dark text-cream overflow-hidden glow-brand"
          >
            <div className="absolute inset-0 grain pointer-events-none" />
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-accent/15 blur-3xl float-y" />
            <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-brand-500/20 blur-3xl" />

            <div className="relative">
              <div className="text-7xl font-black text-accent/30 mb-4 leading-none tabular-num">02</div>
              <h3 className="text-2xl font-extrabold mb-4">
                אתרים ש<span className="text-accent">עובדים</span>
              </h3>
              <p className="text-cream/85 leading-relaxed">
                שמספרים סיפור. שגורמים למישהו זר להגיד "זה הבן אדם שאני רוצה".
                שממירים גולש למתעניין, מתעניין ללקוח, ולקוח לממליץ.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm text-accent">
                <span className="w-8 h-px bg-accent" />
                <span>זה מה שאני עושה.</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-2xl md:text-3xl font-bold text-brand-900 max-w-3xl leading-snug"
        >
          ההבדל הוא לא העיצוב.{" "}
          <span className="text-brand-700/55">
            זה האסטרטגיה שמאחורי כל פיקסל.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
