/**
 * /websites — עמוד "בניית אתרים" הועבר לדף הבית (/).
 * Redirect קבוע (308) כדי לשמור על SEO וקישורים ישנים.
 */
import { redirect } from "next/navigation";

export default function WebsitesPage() {
  redirect("/");
}
