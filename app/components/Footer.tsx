"use client";

import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-brand-950 to-black text-cream/70 py-14 border-t border-cream/5 overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none opacity-30" />
      <div className="orb orb-brand w-72 h-72 -top-32 left-1/4 opacity-30" />

      <div className="container-x relative">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center w-10 h-10 text-accent">
              <Logo className="w-9 h-9" />
            </span>
            <div>
              <div className="font-extrabold text-cream tracking-tight text-base">
                נועם גמליאל
              </div>
              <div className="text-xs text-cream/45 mt-0.5">
                בית דיגיטלי שעובד בשבילך
              </div>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="#about" className="hover:text-cream transition-colors">
              עליי
            </a>
            <a href="#process" className="hover:text-cream transition-colors">
              תהליך
            </a>
            <a href="#testimonials" className="hover:text-cream transition-colors">
              לקוחות
            </a>
            <a href="#faq" className="hover:text-cream transition-colors">
              שאלות
            </a>
            <a
              href="#contact"
              className="text-accent hover:text-accent-bright transition-colors font-semibold"
            >
              צור קשר ←
            </a>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-cream/10 flex flex-col md:flex-row gap-3 items-start md:items-center justify-between text-xs text-cream/45">
          <div>
            © {new Date().getFullYear()} נועם גמליאל. כל הזכויות שמורות.
          </div>
          <div>
            עוצב ונבנה{" "}
            <span className="text-cream/65">בליווי אישי מקצה לקצה.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
