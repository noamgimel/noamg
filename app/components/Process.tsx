"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "שיחת היכרות — 45 דקות",
    body: "אני מתקשר אליך. בלי טפסים, בלי שאלון מוקדם, בלי 'תכין חומרים'. אני שואל שאלות, אתה מדבר על העסק. בסוף השיחה אתה יודע בדיוק מה הולך להיות לך, מתי, ובכמה.",
    badge: "₪0 · ללא התחייבות",
  },
  {
    num: "02",
    title: "אסטרטגיה ועיצוב",
    body: "אני בונה את הסיפור של האתר ואת העיצוב המדויק. שולח לך בקובץ אחד. אתה מאשר, מעיר, מבקש שינויים — עד שזה בדיוק מה שאתה רוצה.",
    badge: "סבבי שינויים",
  },
  {
    num: "03",
    title: "בנייה והשקה",
    body: "אתר חי, מהיר, רספונסיבי לכל מסך, מאובטח, עם SEO בסיסי, עם טפסים שעובדים, עם אוטומציות שעובדות בשבילך גם בלילה.",
    badge: "תהליך מתוקתק",
  },
  {
    num: "04",
    title: "חודש ליווי — בלי שעון",
    body: "30 יום של 'תקן לי את זה', 'תוסיף את זה', 'תזיז את זה לכאן'. בלי לספור זמן. בלי 'זה לא בחבילה'.",
    badge: "כלול במחיר",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-20 sm:py-24 md:py-28 lg:py-36 mesh-cream overflow-hidden"
    >
      <div className="orb orb-brand w-96 h-96 -top-32 -right-32 opacity-40" />
      <div className="orb orb-accent w-72 h-72 bottom-20 -left-20 opacity-50" />

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-brand-700/8 border border-brand-700/15 text-xs font-semibold text-brand-700 tracking-wide"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          איך זה עובד
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="h-section text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-900 max-w-4xl"
        >
          מהשיחה הראשונה ועד אתר חי.
          <br />
          <span className="gradient-text-emerald">תהליך מתוקתק, ללא בזבוז זמן.</span>
        </motion.h2>

        {/* Steps — motion wrapper handles transform; inner card handles glass (static) */}
        <div className="mt-20 space-y-6 md:space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Inner card: backdrop-filter and shadow stay on a static element. */}
              <div className="group relative grid md:grid-cols-[6rem_1fr] gap-6 md:gap-10 items-start p-6 md:p-8 rounded-3xl glass-light card-glow card-glow-hover transition-shadow duration-500">
                {/* Step number */}
                <div className="relative">
                  <div className="grid place-items-center w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 text-cream text-2xl font-black tabular-num transition-transform duration-500 group-hover:scale-105">
                    {step.num}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-2xl md:text-[1.65rem] font-extrabold text-brand-900">
                      {step.title}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/15 text-brand-900 text-xs font-bold border border-accent/30">
                      {step.badge}
                    </span>
                  </div>
                  <p className="text-base md:text-lg text-brand-900/70 leading-relaxed max-w-2xl">
                    {step.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Speed punchline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mt-20 max-w-3xl pr-6 border-r-2 border-accent"
        >
          <p className="text-2xl md:text-3xl font-bold text-brand-900 leading-snug">
            בזמן שהמתחרים עוד עובדים על האפיון —{" "}
            <span className="gradient-text-emerald">
              האתר שלך כבר באוויר ומכניס לידים.
            </span>
          </p>
          <p className="mt-3 text-brand-900/60">
            השאלה היא לא איך אני מהיר. היא למה האחרים איטיים.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
