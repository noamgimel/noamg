"use client";

import { motion } from "framer-motion";
import InlineCTA from "./InlineCTA";

const guarantees = [
  {
    headline: "אחרי השיחה הראשונה אתה לא בטוח?",
    body: "אין עלות. אנחנו נפרדים כידידים, ואני אפילו אשלח לך 2-3 המלצות אחרות שיכולות להתאים לך יותר.",
  },
  {
    headline: "ראית את העיצוב ולא מתחבר?",
    body: "אנחנו עושים סבב שינויים נוסף. אם גם זה לא עובד — אתה משלם רק על השלב שעשינו, ועוצרים.",
  },
  {
    headline: "עברו 30 יום, יש משהו ששוכח?",
    body: "תכתוב לי. אני עונה. גם אם זה אחרי שנה.",
  },
];

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path d="M12 2L4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6l-8-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function RiskReversal() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-36 mesh-cream overflow-hidden">
      <div aria-hidden="true" className="orb orb-brand w-[28rem] h-[28rem] -top-40 -right-40 opacity-40 drift-slow" />
      <div aria-hidden="true" className="orb orb-accent w-72 h-72 bottom-20 -left-20 opacity-50 drift" />

      <div className="container-x relative">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-brand-700/8 border border-brand-700/15 text-xs font-semibold text-brand-700 tracking-wide"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            הסרת סיכונים
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="h-section text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-900"
          >
            אני לוקח את הסיכון.
            <br />
            <span className="gradient-text-emerald">אתה לוקח את התוצאה.</span>
          </motion.h2>
        </div>

        {/* Cards: icon at TOP — no absolute positioning, no overlap */}
        <div className="mt-16 grid md:grid-cols-3 gap-5 lg:gap-6">
          {guarantees.map((g, i) => (
            <motion.div
              key={g.headline}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="group relative p-7 md:p-8 rounded-3xl glass-light card-glow card-glow-hover transition-all duration-500 overflow-hidden"
            >
              {/* Glow blob on hover */}
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Icon at top — block element, won't overlap text */}
              <div className="relative grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-accent-bright text-brand-900 mb-5 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-accent/30">
                <ShieldIcon />
              </div>

              <h3 className="relative text-lg md:text-xl font-extrabold text-brand-900 mb-3 leading-snug">
                {g.headline}
              </h3>
              <p className="relative text-brand-900/70 leading-relaxed">{g.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mt-16 max-w-3xl text-xl md:text-2xl font-bold text-brand-900 leading-snug pr-6 border-r-2 border-accent"
        >
          הסיכון של אתר רע גדול בהרבה מהסיכון של לקיחת מקצוען.{" "}
          <span className="text-brand-700/80 font-medium">
            והמקצוען הזה לוקח על עצמו את הסיכון בשבילך.
          </span>
        </motion.p>

        <InlineCTA text="אפשר להתחיל בשיחה בלי התחייבות" />
      </div>
    </section>
  );
}
