"use client";

import { motion } from "framer-motion";

const comparison = [
  { ai: "תבנית שעובדת לכולם", me: "אסטרטגיה שעובדת לך" },
  { ai: "אתר שקיים", me: "אתר שמוכר" },
  { ai: "נראות 'סבבה'", me: "נראות שגורמת ללקוח לרצות אותך" },
  { ai: "8 שעות מהזמן שלך", me: "45 דקות מהזמן שלך" },
  { ai: "ניחוש איך לדבר ללקוח", me: "ידע מצטבר ממאות פרויקטים" },
  { ai: "מה שאתה חושב שעובד", me: "מה שבפועל ממיר" },
];

const aiCants = [
  "AI לא יודע איך הלקוחות שלך מקבלים החלטות",
  "AI לא ראה מאות אתרים נופלים על אותן טעויות",
  "AI לא יחזור בעוד שלושה חודשים לתקן בלי שתתחנן",
  "AI לא יקרא את ההיסוס שלך בשיחה ויבנה סביבך אסטרטגיה",
  "AI לא ייקח אחריות אם משהו לא עובד",
];

export default function AIObjection() {
  return (
    <section
      id="ai"
      className="relative py-20 sm:py-24 md:py-28 lg:py-36 mesh-deep text-cream overflow-hidden"
    >
      <div className="absolute inset-0 grain pointer-events-none opacity-50" />

      {/* Floating decorative orbs */}
      <div className="orb orb-accent w-96 h-96 -top-32 right-[10%] opacity-50 drift" />
      <div className="orb orb-brand w-[28rem] h-[28rem] -bottom-40 -left-32 opacity-40 drift-slow" />

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-xs font-semibold text-accent tracking-wide"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          שאלה הוגנת
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="h-section text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] max-w-4xl"
        >
          "רגע — אני יכול לבנות את זה לבד עם AI.
          <br />
          <span className="gradient-text">למה אני צריך אותך?"</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 text-lg text-cream/75 max-w-3xl leading-relaxed"
        >
          אתה צודק. אתה <span className="font-bold text-cream">יכול</span>. תפתח כלי AI מודרני,
          תכניס פרומפט, ובתוך שעתיים יהיה לך אתר. השאלה היא לא <em>אם</em> תצליח
          לבנות אתר. השאלה היא{" "}
          <span className="text-accent font-bold">איזה אתר</span> תבנה.
        </motion.p>

        {/* Comparison glass card */}
        <div className="mt-12 sm:mt-16 max-w-5xl">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 text-[0.65rem] sm:text-xs md:text-sm font-semibold text-cream/55 mb-3 px-4 sm:px-5 md:px-8">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-cream/30">×</span>
              <span>מה שתקבל מ-AI לבד</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-accent">
              <span>✓</span>
              <span>מה שתקבל איתי</span>
            </div>
          </div>

          <div className="rounded-2xl sm:rounded-3xl glass-dark overflow-hidden">
            {comparison.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 px-4 sm:px-5 md:px-8 py-4 sm:py-5 md:py-6 border-b border-cream/8 last:border-b-0 hover:bg-cream/[0.04] transition-colors"
              >
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-cream/30 mt-0.5 sm:mt-1 shrink-0 text-sm sm:text-base" aria-hidden>×</span>
                  <span className="text-cream/65 leading-relaxed text-sm sm:text-base">{row.ai}</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-accent mt-0.5 sm:mt-1 shrink-0 text-sm sm:text-base" aria-hidden>✓</span>
                  <span className="text-cream font-medium leading-relaxed text-sm sm:text-base">{row.me}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pull quote + AI can't list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mt-20 max-w-4xl"
        >
          <div className="relative pr-8 border-r-2 border-accent">
            <p className="text-2xl md:text-3xl font-bold leading-snug">
              AI הוא כלי מעולה — בידיים של מי שיודע מה לבקש ממנו.
            </p>
            <p className="mt-4 text-cream/75 text-lg leading-relaxed">
              אני לא נגד AI. אני <span className="text-accent font-semibold">משתמש</span>{" "}
              ב-AI — הוא אחד הכלים החדים ביותר שיש לי. ההבדל הוא שאני יודע מתי
              להשתמש בו, מתי לא, ומה הוא <strong>לא</strong> יכול לתת לך:
            </p>
          </div>

          <ul className="mt-10 grid md:grid-cols-2 gap-3">
            {aiCants.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex items-start gap-3 p-4 rounded-2xl glass-dark"
              >
                <span className="grid place-items-center w-6 h-6 rounded-full border border-accent/40 text-accent text-xs shrink-0 mt-0.5">×</span>
                <span className="text-cream/85 leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Closing punchline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-2xl md:text-3xl font-extrabold leading-snug max-w-3xl"
        >
          תשקיע 20 שעות —{" "}
          <span className="gradient-text">
            ובסוף תקבל אתר שנראה כמו של כל מתחרה אחר שלך.
          </span>
          <br />
          <span className="text-cream/60 font-medium">
            אתה לא 'כמו כל אחד אחר'. אז למה האתר שלך יהיה?
          </span>
        </motion.p>
      </div>
    </section>
  );
}
