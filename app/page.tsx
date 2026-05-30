import type { Metadata } from "next";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import LeadFunnelHero from "./components/LeadFunnelHero";
import Hook from "./components/Hook";
import WhatsIncluded from "./components/WhatsIncluded";
import Differentiators from "./components/Differentiators";
import Process from "./components/Process";
import RiskReversal from "./components/RiskReversal";
import AIObjection from "./components/AIObjection";
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
 * LeadFunnelHero (מיצוב משפך + Lidup) הוכנס אחרי Testimonials
 * כדי להציג את הערך המוסף מעבר לאתר עצמו.
 *
 * הדף הקודם (LeadFunnelHero + FinalCTA בלבד) נשמר ב-app/_funnel-draft/page.tsx
 * ויחזור כעמוד הבית כשהמשפך יהיה מוכן לגמרי.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <LeadFunnelHero />
      <Hook />
      <WhatsIncluded />
      <Differentiators />
      <Process />
      <RiskReversal />
      <AIObjection />
      <About />
      <WhoFor />
      <FAQ />
      <FinalCTA />
    </>
  );
}
