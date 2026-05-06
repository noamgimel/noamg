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
  "אסטרטגיית מכירה — להבין את הקהל שלך, להחליט מה חשוב לומר ראשון, ומה מיותר",
  "טעם — לדעת מתי משהו 'נראה בסדר' אבל לא מספיק טוב כדי שמישהו יבחר בך",
  "אחריות — מי יחזור בעוד שלושה חודשים כשמשהו ישתבש או כשתרצה שינוי",
  "ניסיון — מאות אתרים שנפלו על אותן טעויות, ויודעים מה כן ולא עובד בפועל",
  "ליווי אישי — לקרוא את ההיסוס שלך בשיחה ולבנות סביבך, לא סביב פרומפט",
];

export default function AIObjection() {
  return (
    <section
      id="ai"
      className="relative py-20 sm:py-24 md:py-28 lg:py-36 mesh-deep text-cream overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-0 grain pointer-events-none opacity-50" />

      {/* Floating decorative orbs */}
      <div aria-hidden="true" className="orb orb-accent w-96 h-96 -top-32 right-[10%] opacity-50 drift" />
      <div aria-hidden="true" className="orb orb-brand w-[28rem] h-[28rem] -bottom-40 -left-32 opacity-40 drift-slow" />

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
          "אני יכול לבנות אתר לבד עם AI —
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
          אפשר לבנות אתר עם AI. בדיוק כמו שאפשר לצלם לבד, לעצב לבד ולכתוב לבד.
          <br />
          השאלה היא לא <em>אם</em> יהיה לך אתר — אלא אם הוא{" "}
          <span className="text-accent font-bold">יגרום ללקוח הנכון</span>{" "}
          לעצור, להבין, לסמוך עליך, ולהשאיר פרטים.
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
              AI יכול לבנות עמוד.
              <br />
              <span className="text-accent">הוא לא יודע לבנות עבורך אסטרטגיית מכירה.</span>
            </p>
            <p className="mt-4 text-cream/75 text-lg leading-relaxed">
              הבעיה היא לא הכלי — אלא מי מכוון אותו. אני{" "}
              <span className="text-accent font-semibold">משתמש</span>{" "}
              ב-AI כדי לעבוד מהר יותר, אבל מוסיף עליו את מה שאף כלי לא נותן:
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
                <span className="grid place-items-center w-6 h-6 rounded-full bg-accent/15 border border-accent/40 text-accent text-xs shrink-0 mt-0.5 font-bold">+</span>
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
          תשקיע 20 שעות לבד —{" "}
          <span className="gradient-text">
            ובסוף יהיה לך אתר שנראה כמו של כל מתחרה אחר.
          </span>
          <br />
          <span className="text-cream/60 font-medium">
            עסק בולט לא נבנה מכלי. הוא נבנה מהחלטות.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
