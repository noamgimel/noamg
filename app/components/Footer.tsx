"use client";

import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-brand-950 to-black text-cream/70 py-14 border-t border-cream/5 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 grain pointer-events-none opacity-30" />
      <div aria-hidden="true" className="orb orb-brand w-72 h-72 -top-32 left-1/4 opacity-30" />

      <div className="container-x relative">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <a href="/" aria-label="עמוד הבית" className="flex items-center gap-3">
            <span className="grid place-items-center w-10 h-10 text-accent">
              <Logo className="w-9 h-9" />
            </span>
            <span>
              <span className="block font-extrabold text-cream tracking-tight text-base">
                נועם גמליאל
              </span>
              <span className="block text-xs text-cream/65 mt-0.5">
                אתרי תדמית שמייצרים פניות
              </span>
            </span>
          </a>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="ניווט תחתון">
            <a href="/#about" className="hover:text-cream transition-colors">
              עליי
            </a>
            <a href="/#process" className="hover:text-cream transition-colors">
              תהליך
            </a>
            <a href="/#testimonials" className="hover:text-cream transition-colors">
              לקוחות
            </a>
            <a href="/#faq" className="hover:text-cream transition-colors">
              שאלות
            </a>
            <a
              href="/#contact"
              className="text-accent hover:text-accent-bright transition-colors font-semibold"
            >
              צור קשר{" "}
              <span aria-hidden="true">←</span>
            </a>
          </nav>
        </div>

        {/* Legal links — separate row for clarity */}
        <div className="mt-10 pt-6 border-t border-cream/10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-cream/70" aria-label="קישורים משפטיים">
            <a
              href="/accessibility"
              className="hover:text-cream transition-colors underline-offset-4 hover:underline"
            >
              הצהרת נגישות
            </a>
            <span aria-hidden="true" className="text-cream/30">·</span>
            <a
              href="/terms"
              className="hover:text-cream transition-colors underline-offset-4 hover:underline"
            >
              תנאי שימוש
            </a>
          </nav>

          <div className="flex flex-col gap-1 text-xs text-cream/65 md:items-end">
            <div>© {new Date().getFullYear()} נועם גמליאל. כל הזכויות שמורות.</div>
            <div>
              עוצב ונבנה{" "}
              <span className="text-cream/65">בליווי אישי מקצה לקצה.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
