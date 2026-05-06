/**
 * Skip-to-content link.
 * Hidden visually until it receives keyboard focus.
 * Required by WCAG 2.4.1 Bypass Blocks (Level A).
 */
export default function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-[100] focus:px-5 focus:py-3 focus:rounded-full focus:bg-brand-900 focus:text-cream focus:font-bold focus:text-sm focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-cream"
    >
      דלג לתוכן המרכזי
    </a>
  );
}
