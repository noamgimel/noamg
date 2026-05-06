"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "האם אוכל לעדכן את האתר בעצמי אחרי שהעבודה תסתיים?",
    a: "חד משמעית כן. המטרה שלי היא לתת לך כלי עבודה — לא 'להחזיק אותך כבן ערובה'. בסיום התהליך תקבל הדרכה קצרה וממוקדת, שתאפשר לך לשנות טקסטים, להחליף תמונות ולנהל את התוכן באתר בקלות ובביטחון מלא.",
  },
  {
    q: "כמה זמן לוקח תהליך הבנייה?",
    a: "מהר ממה שאתה רגיל אליו. התהליך כולל אפיון מסרים, עיצוב מותאם, ופיתוח מאפס — אבל הוא עבר אופטימיזציה כך שכל יום מנוצל. אני לא רץ על חשבון איכות; אני פשוט יודע מתי כל החלטה צריכה להיסגר ומה לא דורש דיון נוסף.",
  },
  {
    q: "האם האתר יופיע בתוצאות החיפוש של גוגל (SEO)?",
    a: "בהחלט. כל אתר שאני בונה כולל הגדרות SEO בסיסיות (אופטימיזציית מהירות, כותרות מטא, תיאורים, התאמה לנייד, מבנה נכון). אלו היסודות הקריטיים שיעזרו לגוגל לסרוק את האתר שלך ולהציג אותו בצורה הטובה ביותר.",
  },
  {
    q: "האם אני צריך לספק את התמונות והטקסטים בעצמי?",
    a: "כבעל העסק, הידע נמצא אצלך — אבל אני כאן כדי לעזור. בתחילת התהליך אני אכוון אותך בדיוק איזה חומרים דרושים. אם תרצה, אוכל להמליץ לך על אנשי מקצוע משלימים (כמו צלמים) כדי שהתוצאה הסופית תהיה ברמה הגבוהה ביותר.",
  },
  {
    q: "מה אם אני לא יודע מה אני רוצה?",
    a: "זה דווקא לטובה. רוב הלקוחות שלי לא יודעים בהתחלה. בשביל זה השיחה הראשונה — אני שואל, אתה עונה, ויחד אנחנו מגלים מה האתר שלך באמת צריך להיות.",
  },
  {
    q: "איך זה שונה מבנייה עם AI לבד?",
    a: "כלי בונה לך אתר. אני בונה לך אסטרטגיה. ובכלל — אני משתמש ב-AI כחלק מהתהליך שלי. ההבדל הוא איך מפעילים אותו, ומה אתה עושה עם התוצאה.",
  },
  {
    q: "מה כלול בליווי 30 יום?",
    a: "כל שינוי שתבקש: תיקוני טקסט, החלפת תמונות, הוספת סקציות קטנות, התאמות עיצוביות. בלי לספור זמן, בלי 'זה לא בחבילה'.",
  },
  {
    q: "יש לך פורטפוליו?",
    a: "כן — תראה את הסקציה 'לקוחות מספרים' למעלה. אבל הדוגמה שאתה הכי תרצה לראות היא לא שלי — היא של מישהו בתחום שלך. בשיחה הראשונה אני מראה לך בדיוק את זה.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-24 md:py-28 lg:py-36 mesh-cream overflow-hidden">
      <div aria-hidden="true" className="orb orb-brand w-96 h-96 -top-32 -right-32 opacity-40 drift-slow" />
      <div aria-hidden="true" className="orb orb-accent w-72 h-72 bottom-20 -left-20 opacity-50 drift" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-brand-700/8 border border-brand-700/15 text-xs font-semibold text-brand-700 tracking-wide"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              שאלות נפוצות
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="h-section text-3xl sm:text-4xl md:text-5xl text-brand-900 lg:sticky lg:top-28"
            >
              דברים שאנשים
              <br />
              <span className="gradient-text-emerald">שואלים אותי.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-8">
            <div className="rounded-3xl glass-light card-glow overflow-hidden">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                const buttonId = `faq-button-${i}`;
                const panelId = `faq-panel-${i}`;
                return (
                  <motion.div
                    key={f.q}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.04 }}
                    className="border-b border-brand-700/8 last:border-b-0"
                  >
                    <h3 className="m-0">
                      <button
                        type="button"
                        id={buttonId}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="w-full text-right py-5 px-6 md:px-8 flex items-start justify-between gap-6 group hover:bg-brand-700/[0.03] transition-colors"
                      >
                        <span
                          className={`text-base md:text-lg font-bold transition-colors ${
                            isOpen ? "text-brand-700" : "text-brand-900 group-hover:text-brand-700"
                          }`}
                        >
                          {f.q}
                        </span>
                        <span
                          aria-hidden="true"
                          className={`shrink-0 grid place-items-center w-9 h-9 rounded-full transition-all duration-300 ${
                            isOpen
                              ? "bg-gradient-to-br from-accent to-accent-bright text-brand-900 rotate-45"
                              : "bg-brand-700/8 text-brand-700 group-hover:bg-brand-700/15"
                          }`}
                        >
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                          </svg>
                        </span>
                      </button>
                    </h3>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 md:px-8 pb-6 text-base text-brand-900/75 leading-relaxed max-w-2xl">
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
