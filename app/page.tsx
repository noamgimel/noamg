import LeadFunnelHero from "./components/LeadFunnelHero";
import FinalCTA from "./components/FinalCTA";

/**
 * Home — new positioning around the lead funnel + Lidup.
 *
 * Phase 1 (current): Hero only, with FinalCTA at the bottom so the primary CTA
 * has somewhere to land. The rest of the new sections (how-it-works, lead-check,
 * proof, Lidup explainer, FAQ, etc.) will be added in subsequent phases.
 *
 * The original website-building landing content has moved to `/websites`.
 */
export default function Home() {
  return (
    <>
      <LeadFunnelHero />
      <FinalCTA />
    </>
  );
}
