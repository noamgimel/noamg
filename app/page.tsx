import type { Metadata } from "next";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import LeadFunnelHero from "./components/LeadFunnelHero";
import Hook from "./components/Hook";
import WhatsIncluded from "./components/WhatsIncluded";
// import Differentiators from "./components/Differentiators"; // "למה איתי" מוסתר זמנית (2026-05)
import Process from "./components/Process";
// import RiskReversal from "./components/RiskReversal"; // "ביטול סיכון" מוסתר זמנית (2026-05)
// import AIObjection from "./components/AIObjection"; // "שאלה הוגנת" מוסתר זמנית (2026-05)
import About from "./components/About";
import WhoFor from "./components/WhoFor";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";

export const metadata: Metadata = {
  title: "נועם גמליאל — בניית אתרים לעסקים",
  description:
    "אתר תדמית מקצועי שמייצר אמון ופניות — מחובר לטפסים, וואטסאפ ומערכת ניהול לידים, עם ליווי אישי מקצה לקצה.",
  alternates: { canonical: "/" },
};

/**
 * דף הבית (Phase 2 / 2026-05):
 *
 * תוכן "בניית אתרים" חזר לכאן כדף הראשי.
 * סדר פתיחה: Hero → LeadFunnelHero (משפך + LeadSync) → Testimonials → About.
 * LeadFunnelHero מוצג מיד אחרי ה-Hero כדי להבליט את הערך המוסף מעבר לאתר עצמו.
 *
 * הדף הקודם (LeadFunnelHero + FinalCTA בלבד) נשמר ב-app/_funnel-draft/page.tsx
 * ויחזור כעמוד הבית כשהמשפך יהיה מוכן לגמרי.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <LeadFunnelHero />
      <Testimonials />
      <About />
      <Hook />
      <WhatsIncluded />
      {/* <Differentiators /> — "למה איתי" מוסתר זמנית (2026-05) */}
      <Process />
      {/* <RiskReversal /> — "ביטול סיכון" מוסתר זמנית (2026-05) */}
      {/* <AIObjection /> — "שאלה הוגנת" מוסתר זמנית (2026-05) */}
      <WhoFor />
      <FAQ />
      <FinalCTA />
    </>
  );
}
