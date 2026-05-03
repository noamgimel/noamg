"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "Ben Paz Shop",
    category: "חנות אונליין",
    desc: "חנות מקוונת מותאמת אישית עם חווית קנייה מהירה, עיצוב נקי ומיתוג חזק שמלווה את הגולש מהדף הראשי ועד לסיום הרכישה.",
    href: "https://www.benpazshop.com/",
    accent: "from-brand-600 via-brand-800 to-brand-900",
  },
  {
    name: "Noam Gamliel — Studio",
    category: "אתר תדמית",
    desc: "אתר התדמית האישי שלי — חלון הראווה למה שאני יודע לעשות. מבוסס על אותם עקרונות שאני מביא לכל לקוח: סיפור, אסטרטגיה, ועיצוב שמדבר.",
    href: "https://noamgamliel.wixstudio.com/site",
    accent: "from-emerald-700 via-brand-700 to-brand-950",
  },
  {
    name: "פרויקט הבא",
    category: "בקרוב",
    desc: "מקום לעבודה הבאה שלך. בוא נבנה משהו שתרצה להראות.",
    href: "#contact",
    placeholder: true,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 sm:py-24 md:py-28 lg:py-36 mesh-cream-warm overflow-hidden">
      <div className="orb orb-accent w-[28rem] h-[28rem] -top-40 -left-40 opacity-50 drift" />
      <div className="orb orb-brand w-96 h-96 bottom-20 -right-20 opacity-40 drift-slow" />

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-brand-700/8 border border-brand-700/15 text-xs font-semibold text-brand-700 tracking-wide"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          עבודות נבחרות
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="h-section text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-900 max-w-4xl"
        >
          מהחזון של הלקוחות —
          <br />
          <span className="gradient-text-emerald">אל המציאות הדיגיטלית.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 text-lg text-brand-900/70 max-w-2xl"
        >
          כל פרויקט הוא סיפור אחר. הנה כמה מהאחרונים — בשיחה הראשונה אני מראה לך
          דוגמה מהתחום שלך.
        </motion.p>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {projects.map((p, i) => {
            const isExternal = p.href.startsWith("http");
            return (
              <motion.a
                key={p.name}
                href={p.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group relative block aspect-[4/5] rounded-[2rem] overflow-hidden transition-shadow duration-500 ${
                  p.placeholder
                    ? "glass-light border-2 border-dashed border-brand-700/20"
                    : `bg-gradient-to-br ${p.accent} glow-brand hover:shadow-[0_30px_60px_-12px_rgba(15,61,46,0.5)]`
                }`}
              >
                {!p.placeholder && (
                  <>
                    <div className="absolute inset-0 grain pointer-events-none opacity-50" />
                    <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-accent/15 blur-3xl group-hover:scale-125 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/30 to-transparent opacity-90" />

                    {/* Subtle decorative pattern */}
                    <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none">
                      <defs>
                        <pattern id={`pf-grid-${i}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                          <circle cx="1" cy="1" r="1" fill="white" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#pf-grid-${i})`} />
                    </svg>
                  </>
                )}

                <div className="relative h-full flex flex-col justify-end p-7 md:p-8">
                  <div
                    className={`text-xs font-bold uppercase tracking-widest mb-2 ${
                      p.placeholder ? "text-brand-700/60" : "text-accent"
                    }`}
                  >
                    {p.category}
                  </div>
                  <h3
                    className={`text-2xl md:text-3xl font-extrabold mb-3 leading-tight ${
                      p.placeholder ? "text-brand-900" : "text-cream"
                    }`}
                  >
                    {p.name}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      p.placeholder ? "text-brand-900/60" : "text-cream/75"
                    }`}
                  >
                    {p.desc}
                  </p>

                  <div
                    className={`mt-6 inline-flex items-center gap-2 text-sm font-bold transition-transform duration-300 group-hover:-translate-x-1 ${
                      p.placeholder ? "text-brand-700" : "text-accent"
                    }`}
                  >
                    {p.placeholder ? "בוא נדבר" : "צפה באתר"}
                    <span aria-hidden>←</span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
