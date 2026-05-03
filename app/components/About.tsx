"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24 md:py-28 lg:py-36 mesh-cream-warm overflow-hidden">
      {/* Decorative orbs */}
      <div className="orb orb-accent w-[28rem] h-[28rem] -top-40 -left-40 opacity-50 drift-slow" />
      <div className="orb orb-brand w-96 h-96 -bottom-32 -right-32 opacity-40 drift" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Image / portrait column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Portrait — uses /public/noam.jpg */}
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden glow-brand bg-gradient-to-br from-brand-700 to-brand-900">
                <img
                  src="/noam.jpg"
                  alt="נועם גמליאל"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Subtle gradient overlay for legibility of badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/30 via-transparent to-transparent pointer-events-none" />
                {/* Decorative orbs INSIDE the photo frame */}
                <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-accent/30 blur-2xl float-y pointer-events-none" />
              </div>

              {/* Wix Studio Certified badge — uses /public/wix-certified.png */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.3 }}
                whileHover={{ rotate: 0, scale: 1.06 }}
                className="absolute -bottom-6 sm:-bottom-8 -right-2 sm:-right-4 lg:-right-10 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
              >
                <div className="relative w-full h-full rounded-full glass-light p-2 shadow-xl shadow-brand-900/15">
                  <img
                    src="/wix-certified.png"
                    alt="Wix Studio Certified Web Designer"
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            </div>

            {/* Note for user during dev — remove after files are saved */}
            <p className="mt-12 text-xs text-brand-900/40 italic lg:hidden">
              {/* טיפ: שמור את התמונה האישית ב-public/noam.jpg ואת התעודה ב-public/wix-certified.png */}
            </p>
          </motion.div>

          {/* Text column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-brand-700/8 border border-brand-700/15 text-xs font-semibold text-brand-700 tracking-wide"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              קצת עליי
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="h-section text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-900"
            >
              נעים מאוד,
              <br />
              <span className="gradient-text-emerald">אני נועם גמליאל.</span>
            </motion.h2>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-8 pr-6 border-r-2 border-accent text-xl md:text-2xl text-brand-900/85 font-medium leading-snug"
            >
              "אתר אינטרנט טוב לא נמדד רק בעיצוב שלו —{" "}
              <span className="text-brand-700">
                אלא בחוויית הגולש שהוא יוצר."
              </span>
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-8 space-y-5 text-lg text-brand-900/75 leading-relaxed"
            >
              <p>
                בשנים האחרונות ליוויתי עשרות עסקים וחברות בהגשמת החזון הדיגיטלי
                שלהם. עצמאיים, עסקים קטנים, חברות בינוניות — כל אחד עם סיפור
                אחר, כל אחד עם אתר אחר.
              </p>
              <p>
                המומחיות שלי היא להבין את העסק שלך{" "}
                <strong className="text-brand-900">לעומק</strong> — מה מייחד
                אותו, מה מבדל אותו, ואיך הוא נתפס בעיני הלקוחות שלך. מתוך זה
                אני יוצר סיפור ויזואלי שמתחיל בדף הבית, וממשיך בכל פיקסל באתר.
              </p>
              <p>
                עבורי, הצלחה היא לא אתר שאני גאה בו.{" "}
                <strong className="text-brand-700">
                  הצלחה היא אתר שאתה גאה בו
                </strong>{" "}
                — כזה שמשלב בין זהות המותג, מטרות העסק, וחוויית המשתמש בצורה
                שמרגישה אמיתית.
              </p>
            </motion.div>

            {/* Quick stats — glass cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 grid grid-cols-3 gap-3 max-w-md"
            >
              {[
                { num: "+15", label: "אתרים שהושקו" },
                { num: "100%", label: "ליווי אישי" },
                { num: "30", label: "ימי ליווי" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-4 rounded-2xl glass-light card-glow"
                >
                  <div className="text-2xl md:text-3xl font-extrabold tabular-num gradient-text-emerald">
                    {s.num}
                  </div>
                  <div className="mt-1 text-xs text-brand-900/60">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
