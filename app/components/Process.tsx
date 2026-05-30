"use client";

import { motion } from "framer-motion";
import InlineCTA from "./InlineCTA";

const steps = [
  {
    num: "01",
    title: "שיחת התאמה ואפיון",
    subtitle: "מבינים מה האתר צריך למכור ומי קהל היעד",
    body: "שיחה קצרה. בלי טפסים, בלי שאלון, בלי 'תכין חומרים'. אני שואל, אתה מספר על העסק — ויחד אנחנו מבררים מה האתר צריך לעשות בפועל ואם יש לנו התאמה לעבודה יחד.",
    outcome: "כיוון ברור — מה האתר אמור להשיג, ואם בכלל נכון להמשיך יחד.",
    badge: "₪0 · ללא התחייבות",
  },
  {
    num: "02",
    title: "אסטרטגיה ותוכן",
    subtitle: "חידוד מסרים לפני העיצוב",
    body: "לפני שאני בכלל מתחיל את ההקמה והעיצוב בפועל, אנחנו נסגרים על המסרים, היררכיה ותוכן. מי הקהל, מה הוא צריך להרגיש, ואיזה עמודים אנחנו רוצים שיופיעו באתר.",
    outcome: "מסרים מנוסחים, סדר עדיפויות ברור, ותוכן מוכן לעיצוב.",
    badge: "ת'כלס",
  },
  {
    num: "03",
    title: "עיצוב ובנייה",
    subtitle: "שלב הקמת ועיצוב האתר בפועל",
    body: "פה הקסם מתחיל. אחרי שהבנתי בדיוק את החזון שלך אני מתחיל בהקמת האתר בפועל, אתה מאשר כל שלב — ורואה את הקצב מתקדם.",
    outcome: "אתר ראשוני באוויר.",
    badge: "שקוף לך",
  },
  {
    num: "04",
    title: "השקת האתר",
    subtitle: "מוודאים שלא שכחנו כלום",
    body: "סבבי תיקונים, חיבור האתר לאחסון ודומיין לבחירתכם, ואינטגרציה מלאה למערכת LeadSync.",
    outcome: "אתר חי באוויר, מחובר לכל ערוצי הפנייה ולמערכת ניהול הלידים.",
    badge: "סגירת פינות",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-20 sm:py-24 md:py-28 lg:py-36 mesh-cream overflow-hidden"
    >
      <div aria-hidden="true" className="orb orb-brand w-96 h-96 -top-32 -right-32 opacity-40" />
      <div aria-hidden="true" className="orb orb-accent w-72 h-72 bottom-20 -left-20 opacity-50" />

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
          מהשיחה הראשונה ועד אתר בלייב.
          <br />
          <span className="gradient-text-emerald">תהליך מתוקתק אבל יסודי.</span>
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
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl md:text-[1.65rem] font-extrabold text-brand-900">
                      {step.title}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/15 text-brand-900 text-xs font-bold border border-accent/30">
                      {step.badge}
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-brand-700 font-semibold mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-base md:text-lg text-brand-900/70 leading-relaxed max-w-2xl">
                    {step.body}
                  </p>
                  <div className="mt-4 inline-flex items-start gap-2 text-sm text-brand-900/80 font-medium">
                    <svg viewBox="0 0 16 16" className="w-4 h-4 mt-0.5 text-accent shrink-0" fill="none">
                      <path
                        d="M3 8l4 4 6-8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>
                      <span className="text-brand-900/70">בסוף השלב יהיה לך: </span>
                      {step.outcome}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <InlineCTA text="יאללה, נבדוק התאמה" />
      </div>
    </section>
  );
}
