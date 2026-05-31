/**
 * Shared primary-navigation links — used by BOTH the Header and the Footer
 * so the two menus never drift apart. Hrefs are pure hashes; consumers
 * resolve them against the current page (Header) or prefix "/" (Footer).
 */
export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "המלצות", href: "#testimonials" },
  { label: "עליי", href: "#about" },
  { label: "מה כלול", href: "#whats-included" },
  { label: "תהליך העבודה", href: "#process" },
  { label: "שאלות נפוצות", href: "#faq" },
];
