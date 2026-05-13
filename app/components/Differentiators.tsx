"use client";

import { motion } from "framer-motion";
import InlineCTA from "./InlineCTA";

const items = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path
          d="M12 12a4 4 0 100-8 4 4 0 000 8zM6 21a6 6 0 0112 0"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "שירות אישי — אני, אתה, האתר שלך",
    body: "מי שמדבר איתך בשיחה הראשונה — הוא זה שמעצב לך, בונה לך, ועונה לך גם בחודש השלישי אחרי ההשקה. אין 'צוות מאחורי הקלעים', אין 'מנהל לקוח' שמעביר הודעות. רק אני, אתה, והאתר שלך.",
    accent: "from-brand-600 to-brand-800",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
    title: "מהירות שתפתיע אותך",
    body: "תהליך שעבר אופטימיזציה במשך שנים. אתה לא מחכה — אתה כבר באוויר. אצלי אתר תדמית נבנה בזמן שאצל אחרים עוד מנסים לתאם פגישת אפיון.",
    accent: "from-accent to-accent-bright",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M3 7h18M3 12h18M3 17h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: "תוצאה, לא שעות",
    body: "מחיר סגור מראש. בלי תוספות באמצע. בלי 'בעצם זה לא היה כלול'. מה שראית בהצעה — זה מה שתשלם, וזה מה שתקבל.",
    accent: "from-brand-700 to-brand-900",
  },
];

export default function Differentiators() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-36 mesh-cream-warm overflow-hidden">
      <div aria-hidden="true" className="orb orb-accent w-96 h-96 top-20 -right-32 opacity-40" />
      <div aria-hidden="true" className="orb orb-brand w-[28rem] h-[28rem] -bottom-40 -left-40 opacity-50" />

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-brand-700/8 border border-brand-700/15 text-xs font-semibold text-brand-700 tracking-wide"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          למה איתי
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="h-section text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-900 max-w-4xl"
        >
          <span className="gradient-text-emerald">3 דברים</span> שאני עושה אחרת.
          <br />
          <span className="text-brand-700/60">וזה משנה הכל.</span>
        </motion.h2>

        <div className="mt-16 grid md:grid-cols-3 gap-5 lg:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Inner static card — backdrop-filter is applied here, NOT on the animated wrapper */}
              <div className="group relative p-8 md:p-10 rounded-3xl glass-light card-glow card-glow-hover overflow-hidden transition-shadow duration-500 hover:-translate-y-1.5 transition-transform">
                <div className={`grid place-items-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.accent} text-cream mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-brand-900/15`}>
                  {item.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-extrabold text-brand-900 mb-4 leading-tight">
                  {item.title}
                </h3>

                <p className="text-brand-900/70 leading-relaxed">{item.body}</p>

                <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span>הבדל #{i + 1}</span>
                  <span aria-hidden>←</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <InlineCTA text="קבע שיחת התאמה קצרה" />
      </div>
    </section>
  );
}
