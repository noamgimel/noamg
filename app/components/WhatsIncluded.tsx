"use client";

import { motion } from "framer-motion";
import InlineCTA from "./InlineCTA";

const categories = [
  {
    title: "אסטרטגיה ותוכן",
    desc: "מה אומרים, למי, ובאיזה סדר",
    items: [
      "אפיון מסרים — מה הגולש צריך להבין ב-5 שניות הראשונות",
      "ניסוח טקסטים יחד איתך, בעברית של בני אדם",
      "סדר עדיפויות ברור — מה ראשון, מה שני, ומה לא נכנס בכלל",
    ],
  },
  {
    title: "עיצוב ובנייה",
    desc: "אתר שמרגיש בדיוק כמוך",
    items: [
      "עיצוב מותאם אישית — לא תבנית, לא 'וריאציה' של עיצוב קיים",
      "רספונסיביות מלאה — מובייל, טאבלט, דסקטופ, כל גודל מסך",
      "מהירות טעינה שלא תאט את הגולש",
      "הדרכה אישית כדי שתוכל לעדכן בעצמך",
    ],
  },
  {
    title: "חיבור לפניות ולמדידה",
    desc: "אף ליד לא נעלם",
    items: [
      "טפסים שמגיעים אליך ישירות — כדי שלא תפספס פנייה",
      "כפתור וואטסאפ פעיל בכל הדפים",
      "בסיס נכון לגוגל — כותרות, תיאורים ומבנה שמאפשר להיסרק כמו שצריך",
      "חיבורים קטנים שחוסכים התעסקות — מיילים, מדידה, או כלים רלוונטיים לעסק",
      "דומיין + אחסון לשנה הראשונה",
    ],
  },
  {
    title: "ליווי אחרי השקה",
    desc: "אתה לא נשאר לבד",
    items: [
      "30 יום ליווי מלא — כל בקשת שינוי, ללא ספירת זמן",
      "אחראי זמין שאפשר לחזור אליו, גם אחרי שנה",
    ],
  },
];

export default function WhatsIncluded() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-36 mesh-dark text-cream overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 grain pointer-events-none opacity-50" />

      {/* Floating orbs */}
      <div aria-hidden="true" className="orb orb-accent w-96 h-96 -top-40 -left-32 opacity-50 drift-slow" />
      <div aria-hidden="true" className="orb orb-brand w-[28rem] h-[28rem] -bottom-40 -right-40 opacity-50 drift" />

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

          {/* Categories grid — 1 col on mobile, 2 cols on tablet+ */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                >
                  <div className="h-full p-5 md:p-6 rounded-2xl glass-dark">
                    <div className="mb-4 pb-4 border-b border-cream/10">
                      <div className="text-base md:text-lg font-extrabold text-cream">
                        {cat.title}
                      </div>
                      <div className="mt-0.5 text-xs text-accent/85 font-semibold">
                        {cat.desc}
                      </div>
                    </div>
                    <ul className="space-y-2.5">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-cream/80 leading-relaxed">
                          <span className="grid place-items-center w-5 h-5 rounded-full bg-accent/15 text-accent shrink-0 mt-0.5">
                            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                              <path d="M2.5 6.5l2 2 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <InlineCTA text="רוצה להבין מה נכון לאתר שלך?" />
      </div>
    </section>
  );
}
