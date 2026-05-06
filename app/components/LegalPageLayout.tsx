import { ReactNode } from "react";

type Props = {
  title: string;
  intro?: string;
  lastUpdated: string;
  children: ReactNode;
};

/**
 * Shared layout for legal pages (Terms of Service, Accessibility Statement).
 * Provides consistent typography, spacing, and structure for long-form text.
 */
export default function LegalPageLayout({ title, intro, lastUpdated, children }: Props) {
  return (
    <article className="relative pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-24 md:pb-28 mesh-cream-warm overflow-hidden">
      {/* Subtle decorative orbs */}
      <div aria-hidden="true" className="orb orb-accent w-[28rem] h-[28rem] -top-40 -left-32 opacity-30" />
      <div aria-hidden="true" className="orb orb-brand w-96 h-96 -bottom-40 -right-32 opacity-25" />

      <div className="container-x relative max-w-3xl mx-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-brand-700/8 border border-brand-700/15 text-xs font-semibold text-brand-700 tracking-wide">
          <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-accent" />
          מסמך משפטי
        </div>

        {/* Title */}
        <h1 className="h-display text-4xl sm:text-5xl md:text-6xl text-brand-900 leading-tight">
          {title}
        </h1>

        {/* Last updated */}
        <p className="mt-4 text-sm text-brand-900/60">
          עודכן לאחרונה: <time dateTime="2026-05-06">{lastUpdated}</time>
        </p>

        {/* Optional intro paragraph */}
        {intro && (
          <p className="mt-8 text-lg text-brand-900/80 leading-relaxed border-r-2 border-accent pr-5">
            {intro}
          </p>
        )}

        {/* Body content */}
        <div className="legal-prose mt-10 text-base md:text-lg text-brand-900/85 leading-[1.85] space-y-6">
          {children}
        </div>

        {/* Back home */}
        <div className="mt-14 pt-8 border-t border-brand-700/15">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900 transition-colors"
          >
            <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" aria-hidden="true">
              <path
                d="M10 4l-4 4 4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>חזרה לעמוד הבית</span>
          </a>
        </div>
      </div>
    </article>
  );
}
