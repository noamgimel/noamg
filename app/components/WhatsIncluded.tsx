"use client";

import { motion } from "framer-motion";
import InlineCTA from "./InlineCTA";

const categories = [
  {
    title: "אסטרטגיה ותוכן",
    desc: "מה אומרים, למי, ובאיזה סדר",
    items: [
      "אפיון מלא של קהל היעד",
      "אפיון מסרים — מה הגולש צריך להבין ב-5 שניות הראשונות",
      "ניסוח קופי ואינפוגרפיקה",
    ],
  },
  {
    title: "עיצוב ובנייה",
    desc: "אתר שמרגיש בדיוק כמוך",
    items: [
      "עיצוב מותאם אישית — לא תבנית, לא 'וריאציה' של עיצוב קיים",
      "רספונסיביות מלאה — מובייל, טאבלט, דסקטופ, כל גודל מסך",
      "מהירות טעינה שלא תאט את הגולש",
      "הדרכה אישית לשימוש באתר",
    ],
  },
  {
    title: "הקמת אתר בראש שקט",
    desc: "נוכחות שעובדת מהיום הראשון",
    items: [
      "התראה מיידית כאשר ליד חדש נקלט",
      "SEO בסיסי לאתר",
      "הנגשת אתר — מונגש לפי החוק",
      "חיבורים קטנים שחוסכים התעסקות — מיילים, מדידה, או כלים רלוונטיים לעסק",
    ],
  },
  {
    title: "מעטפת עסקית מלאה",
    desc: "כי הפרויקט לא נגמר בהשקה",
    items: [
      "3 סבבי תיקון לפי בקשה",
      "הקמת אינטגרציות ואוטומציות המותאמות לצרכי העסק שלכם",
      "זמינות גם לאחר סיום הפרויקט (כן, גם אחרי שנה)",
    ],
  },
];

function GiftIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
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

export default function WhatsIncluded() {
  return (
    <section id="whats-included" className="relative py-20 sm:py-24 md:py-28 lg:py-36 mesh-dark text-cream overflow-hidden">
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
              אתר מלא,
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
              מחיר סגור, חבילה מלאה, ללא תוספות מפתיעות. הנה מה שאתם הולכים לקבל.
            </motion.p>

            {/* Bonus highlight — LeadSync */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 relative overflow-hidden rounded-3xl max-w-md border border-accent/40 bg-gradient-to-br from-accent/10 via-accent/4 to-transparent shadow-[0_0_40px_rgba(201,169,97,0.10)] hover:shadow-[0_0_55px_rgba(201,169,97,0.17)] transition-shadow duration-500 p-6"
            >
              {/* Leading gold bar */}
              <span aria-hidden="true" className="absolute inset-y-0 right-0 w-1 rounded-r-3xl bg-gradient-to-b from-accent/90 via-accent/55 to-accent/10" />
              {/* Subtle background orb */}
              <div aria-hidden="true" className="absolute -top-10 -left-10 w-36 h-36 rounded-full bg-accent/10 blur-2xl pointer-events-none" />

              {/* "Free" badge */}
              <span className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 rounded-full bg-accent/15 border border-accent/25 text-accent text-xs font-bold tracking-wide">
                <GiftIcon className="w-3.5 h-3.5" />
                כלול בחינם בכל חבילה
              </span>

              <div className="flex items-center gap-3 mb-2">
                <div className="grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-accent/70 text-brand-900 shrink-0 shadow-lg shadow-accent/25 shine">
                  <GiftIcon className="w-5 h-5" />
                </div>
                <div className="font-extrabold text-cream text-xl leading-tight">
                  שימוש חינמי ב-<span dir="ltr" className="tracking-wide">LeadSync</span>
                </div>
              </div>
              <p className="text-sm text-cream/70 leading-relaxed pr-1">
                הקמה ושימוש מלא במערכת ניהול הלידים — ללא תוספת עלות, לצמיתות.
              </p>
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
