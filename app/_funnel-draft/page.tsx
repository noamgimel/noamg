/**
 * DRAFT — עמוד הבית החדש של משפך הלידים (Phase 1).
 *
 * תיקייה זו מתחילה ב-`_` ולכן Next.js App Router לא יוצר ממנה route.
 * הדף ישוחזר כ-app/page.tsx כשהמשפך יהיה מוכן לגמרי (Phase 2+).
 *
 * לשחזור: העתק את התוכן ל-app/page.tsx וגרור את /websites חזרה ל-redirect.
 */

import LeadFunnelHero from "../components/LeadFunnelHero";
import FinalCTA from "../components/FinalCTA";

export default function FunnelDraftPage() {
  return (
    <>
      <LeadFunnelHero />
      <FinalCTA />
    </>
  );
}
