"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function FinalCTA() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const update = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((s) => ({ ...s, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: typeof errors = {};
    if (!form.name.trim()) next.name = "שכחת לכתוב שם";
    if (!form.email.trim()) next.email = "אימייל הוא חובה";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "כתובת אימייל לא תקינה";
    if (!form.phone.trim()) next.phone = "טלפון יעזור לי לחזור אליך מהר";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");

    try {
      // ⚠️ TODO: חבר ל-API / Formspree / Netlify Forms / endpoint משלך.
      // כרגע — דמה של שליחה כדי לראות את החוויה.
      await new Promise((resolve) => setTimeout(resolve, 1400));
      setStatus("success");
      setForm(emptyForm);
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-24 md:py-28 lg:py-36 mesh-deep text-cream overflow-hidden"
    >
      <div className="absolute inset-0 grain pointer-events-none opacity-50" />

      {/* Floating orbs */}
      <div className="orb orb-accent w-[28rem] h-[28rem] -top-40 -left-32 opacity-50 drift-slow" />
      <div className="orb orb-brand w-96 h-96 -bottom-40 -right-32 opacity-60 drift" />

      {/* Animated rings — hidden on small screens for performance */}
      <div className="hidden md:grid absolute inset-0 place-items-center pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.04, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-[44rem] h-[44rem] rounded-full border border-accent/30"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[64rem] h-[64rem] rounded-full border border-accent/20"
        />
      </div>

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — pitch */}
          <div className="lg:col-span-5 text-center lg:text-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-xs font-semibold text-accent tracking-wide"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              בוא נדבר
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="h-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              רוצה לבדוק אם{" "}
              <span className="gradient-text">אתר כזה מתאים</span> לעסק שלך?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-7 text-base md:text-lg text-cream/80 leading-relaxed"
            >
              השאר פרטים ואחזור אליך לשיחת ייעוץ קצרה. נבין{" "}
              <span className="text-accent font-bold">
                מה חסר באתר הנוכחי שלך
              </span>
              , מה נכון לבנות, והאם בכלל יש התאמה לעבודה יחד.
            </motion.p>

            {/* Trust signals */}
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 space-y-3 text-sm text-cream/75 hidden lg:block"
            >
              {[
                "מחיר ותהליך ברורים מראש",
                "ליווי אישי — ישירות מול נועם",
                "30 יום ליווי אחרי העלייה לאוויר",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="grid place-items-center w-6 h-6 rounded-full bg-accent/15 text-accent">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6.5l2 2 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {t}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="relative">
              {/* Glow behind form */}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-accent/10 blur-2xl opacity-50 pointer-events-none" />

              <div className="relative glass-dark rounded-[2rem] p-6 md:p-8 lg:p-10">
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="text-center py-12"
                    >
                      <div className="grid place-items-center w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent-bright mx-auto mb-6 glow-accent">
                        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-brand-900">
                          <path
                            d="M5 12l5 5 9-11"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-extrabold mb-3">
                        קיבלתי. נדבר בקרוב.
                      </h3>
                      <p className="text-cream/75 max-w-md mx-auto">
                        בינתיים — אם תרצה לראות אתרים שבניתי, אתה מוזמן לרדת
                        לסקציית "לקוחות מספרים" ולבדוק אותם בעצמך.
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="mt-8 text-sm text-accent hover:text-accent-bright transition-colors"
                      >
                        ← לשליחה חוזרת
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={onSubmit}
                      noValidate
                      className="space-y-5"
                    >
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Field
                          id="name"
                          label="שם מלא"
                          placeholder="ישראל ישראלי"
                          value={form.name}
                          onChange={update("name")}
                          error={errors.name}
                          required
                        />
                        <Field
                          id="phone"
                          label="טלפון"
                          type="tel"
                          placeholder="050-0000000"
                          value={form.phone}
                          onChange={update("phone")}
                          error={errors.phone}
                          required
                          dir="ltr"
                        />
                      </div>

                      <Field
                        id="email"
                        label="אימייל"
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={update("email")}
                        error={errors.email}
                        required
                        dir="ltr"
                      />

                      {/* Message textarea */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-cream/85 mb-2">
                          ספר לי קצת על העסק <span className="text-cream/50 font-normal">(אופציונלי)</span>
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          placeholder="מה אתה עושה? למי? מה אתה רוצה שהאתר יעשה בשבילך?"
                          value={form.message}
                          onChange={update("message")}
                          className="input-base resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={status === "loading"}
                          className="btn-primary shine w-full sm:w-auto !px-9 !py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {status === "loading" ? (
                            <>
                              <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
                                <path
                                  d="M22 12a10 10 0 0 1-10 10"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                />
                              </svg>
                              <span>שולח...</span>
                            </>
                          ) : (
                            <>
                              <span>שלח פרטים — נדבר בקרוב</span>
                              <span aria-hidden>←</span>
                            </>
                          )}
                        </button>

                        <p className="mt-4 text-xs text-cream/55 leading-relaxed">
                          בלי ספאם. בלי רשימות תפוצה.{" "}
                          <span className="text-cream/75">
                            רק שיחה אחת כדי להבין אם יש כאן התאמה.
                          </span>
                        </p>

                        {status === "error" && (
                          <p className="mt-3 text-sm text-red-300">
                            משהו השתבש בשליחה. נסה שוב או שלח אימייל ישירות.
                          </p>
                        )}
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ===== Field component ===== */
type FieldProps = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  dir?: "ltr" | "rtl";
};

function Field({ id, label, type = "text", placeholder, value, onChange, error, required, dir }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-cream/85 mb-2">
        {label}
        {required && <span className="text-accent mr-1">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        dir={dir}
        className={`input-base ${error ? "!border-red-400/60 !bg-red-400/5 focus:!shadow-[0_0_0_4px_rgba(248,113,113,0.15)]" : ""}`}
      />
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-xs text-red-300 flex items-center gap-1.5"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
            <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M6 3.5v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="6" cy="8.5" r="0.5" fill="currentColor" />
          </svg>
          {error}
        </motion.p>
      )}
    </div>
  );
}
