# CLAUDE.md — Tavniot Website

אתר תדמית אישי של **נועם גמליאל**.

**מיצוב (2026-05):** נועם בונה לעסקים **משפך דיגיטלי** —
אתר מקצועי, טופס סינון חכם וסנכרון למערכת ניהול לידים **LeadSync**, כך שאף ליד
רציני לא ייפול בין הכיסאות. השירות מיועד לעסקים שכבר מקבלים פניות ורוצים
לנהל אותן נכון יותר — לא לעסקים שרוצים שמישהו "ייצר להם לידים".

**אסור** לטעון שנועם מייצר לידים, לכתוב "נביא לך פניות", להציג את LeadSync
כ-SaaS קר/נפרד, או להפוך את האתר לדף מכירה של CRM בלבד.

> **שם המערכת:** השם המוצג ללקוח הוא **LeadSync** (2026-05, שונה מ-"Lidup").
> ⚠️ ה-**backend** עדיין רץ על `lidup.co.il` עם `LIDUP_SECRET_KEY`
> (ראה `app/api/contact/route.ts`) — אלו תשתית אמיתית ו**אין** לשנות אותם.
> גם שם הקומפוננטה `LidupHero` ו-class ה-CSS `.lidup-hero` נשארו כפנימיים בלבד.

---

## מצב נוכחי — Phase 2 (2026-05)

**החלטה:** עמוד "בניית אתרים" חזר להיות העמוד הראשי (`/`).
`LeadFunnelHero` מוצג מיד אחרי ה-`Hero` כדי להבליט את ערך המשפך והחיבור
ל-LeadSync בראש הדף — לא כדף עצמאי.

**סדר פתיחה:** `Hero` → `LeadFunnelHero` → `Testimonials` → `About` → שאר הסקשנים.

| עמוד | מה קרה |
|------|--------|
| `/` | **כעת:** Hero + **LeadFunnelHero** + Testimonials + About + שאר הסקשנים |
| `/websites` | redirect קבוע (308) ל-`/` |
| `app/_funnel-draft/` | **גיבוי** — הדף הישן (LeadFunnelHero + FinalCTA). תיקייה private ב-Next.js (קידומת `_`) → לא נגישה כ-route. ישוחזר כעמוד הבית כשהמשפך יהיה מוכן. |

### סקשנים מוסתרים זמנית (2026-05)

שלושה קומפוננטים קיימים בקוד אך **מוסתרים מ-`app/page.tsx`** (ה-`import` וה-render מסומנים כהערה).
הקבצים נשמרים כדי שאפשר יהיה להחזיר אותם בקלות — לבטל את ההערה ב-`page.tsx`.

| קומפוננטה | כותרת בסקשן | סטטוס |
|-----------|-------------|-------|
| `Differentiators.tsx` | "למה איתי" | מוסתר — לבטל הערה ב-`page.tsx` כדי להחזיר |
| `AIObjection.tsx` | "שאלה הוגנת" | מוסתר — לבטל הערה ב-`page.tsx` כדי להחזיר |
| `RiskReversal.tsx` | "ביטול סיכון / ערבות" | מוסתר — לבטל הערה ב-`page.tsx` כדי להחזיר |

---

## Stack

| שכבה | טכנולוגיה |
|------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion v11 |
| Font | Heebo (Google Fonts) — Hebrew + Latin |
| Runtime | Node.js / Vercel (מוצע) |

```bash
npm run dev      # פיתוח מקומי
npm run build    # בנייה לפרודקשן
npm run lint     # ESLint
```

---

## מבנה תיקיות

```
app/
  layout.tsx              # Root layout: Header, Footer, WhatsAppButton, SkipLink
  page.tsx                # דף הבית — Hero → LeadFunnelHero → Testimonials → About → …FinalCTA
  globals.css             # כל הסגנונות הגלובליים, utility classes, design tokens
  icon.svg                # Favicon
  _funnel-draft/
    page.tsx              # גיבוי: הדף הישן (LeadFunnelHero + FinalCTA) — לא נגיש כ-route
  accessibility/page.tsx  # דף הצהרת נגישות
  terms/page.tsx          # דף תנאי שימוש
  websites/page.tsx       # redirect ל-/ (308)
  components/
    Header.tsx            # Header — dark-hero רק ב-/ ; nav צמוד ללוגו (6 קישורים)
    Footer.tsx
    LeadFunnelHero.tsx    # משפך לידים → LeadSync → כרטיסי ליד (מוצג מיד אחרי ה-Hero)
    Hero.tsx              # Hero ראשי — כותרת + SitesShowcase marquee בתחתית
    SitesShowcase.tsx     # Marquee קרוסלה של screenshots עם אפקט 3D curved-ring
    Hook.tsx              # Section hooks / why you need this
    Testimonials.tsx      # עדויות לקוחות (כוללות וידאו)
    AIObjection.tsx       # "שאלה הוגנת" — התמודדות עם "למה לא AI?" ⚠️ מוסתר מ-page.tsx (2026-05)
    About.tsx             # סקשן אודות נועם
    Process.tsx           # תהליך העבודה  (id="process")
    Differentiators.tsx   # "למה איתי" — מה מייחד ⚠️ מוסתר מ-page.tsx (2026-05)
    WhatsIncluded.tsx     # מה כלול בשירות
    RiskReversal.tsx      # "ביטול סיכון / ערבות" ⚠️ מוסתר מ-page.tsx (2026-05)
    FAQ.tsx               # שאלות נפוצות  (id="faq")
    WhoFor.tsx            # למי מתאים
    FinalCTA.tsx          # טופס יצירת קשר (id="contact")
    Logo.tsx              # SVG לוגו
    LegalPageLayout.tsx   # Layout לדפי terms/accessibility
    SkipLink.tsx          # Skip to content לנגישות
    WhatsAppButton.tsx    # כפתור WhatsApp צף
public/
  og-image.png            # Open Graph image
  icons/                  # SVG icons למקורות הלידים ב-LeadFunnelHero
    whatsapp.svg facebook.svg instagram.svg gmail.svg google-calendar.svg
  showcase/               # Screenshots של אתרים לקרוסלה ב-Hero
    site-benpaz.png site-saason.png site-avital.png
    site-adar.png site-onlystyle.png site-timely.png
```

---

## Design System

### פלטת צבעים

```
brand-700: #0F3D2E  ← primary — ירוק כהה (הצבע הראשי)
brand-900: #061811  ← dark background
accent:    #C9A961  ← זהב מעומעם — CTAs, הדגשות
cream:     #FAFAF7  ← רקע בהיר ראשי
ink:       #0A0A0A  ← טקסט כהה
```

### Utility classes חשובות (ב-globals.css)

| Class | שימוש |
|-------|-------|
| `.container-x` | max-w-7xl עם padding responsive |
| `.btn-primary` | כפתור זהב עגול — CTA ראשי |
| `.btn-ghost-light` | כפתור שקוף על רקע כהה |
| `.btn-secondary` | כפתור outline ירוק |
| `.input-base` | סגנון input לטופס |
| `.mesh-cream / .mesh-dark / .mesh-emerald` | רקעי gradient מורכבים לסקשנים |
| `.glass-light / .glass-dark` | אפקט זכוכית (backdrop-blur) |
| `.orb / .orb-accent / .orb-brand` | כדורי blur דקורטיביים |
| `.gradient-text` | טקסט עם gradient זהב |
| `.glow-accent / .glow-brand` | box-shadow זוהר |
| `.drift / .drift-slow` | אנימציית ריחוף לOrbs |
| `.h-display / .h-section` | טיפוגרפיה — כותרות |
| `.shine` | אפקט shine sweep על hover |
| `.scroll-progress` | סרגל progress scroll בHeader |
| `.legal-prose` | טיפוגרפיה לדפי תוכן משפטי |

---

## Header — הגדרות חשובות

ה-Header ב-[`app/components/Header.tsx`](app/components/Header.tsx) עובד כך:

- **שתי שכבות רקע** שמתמזגות: gradient כהה (על Hero) ← cream (אחרי scroll)
- משתמש ב-`useScroll` + `useSpring` + `useTransform` של Framer Motion לאינטרפולציה חלקה
- `lightChrome` boolean (מסף 45%) שולט בצבעי טקסט ו-burger
- בדפים שאינם Home (`/terms`, `/accessibility`) — תמיד במצב "scrolled"
- כולל scroll progress bar בראש הדף
- `isOverDarkHero = isHome` (רק `/` — `/websites` הוא redirect ולא מרנדר)

---

## טופס יצירת קשר (FinalCTA)

ב-[`app/components/FinalCTA.tsx`](app/components/FinalCTA.tsx):

- שדות: שם, טלפון, מייל, הודעה (אופציונלי)
- שדות טלפון ומייל מקבלים `dir="ltr"` (כי הנתונים LTR)
- כדי ש-placeholder יישאר מיושר ימין: `placeholder:text-right` מוסף אוטומטית ל-inputs עם `dir="ltr"`
- ולידציה בצד לקוח לפני שליחה
- שליחה דרך API route (יש לוודא הגדרה)

---

## עקרונות ו-conventions

### RTL
- `<html dir="rtl">` — כל האתר RTL
- שדות שתוכנם LTR (טלפון, מייל, URL) מקבלים `dir="ltr"` על ה-input
- placeholder על שדות LTR חייב `placeholder:text-right` כדי לשמור על יישור ימין

### אנימציות
- כל האנימציות משתמשות רק ב-`transform` ו-`opacity` (GPU-only)
- `prefers-reduced-motion: reduce` — מכבה את כל האנימציות הדקורטיביות
- `orb` elements: `will-change: transform`, `contain: paint`

### נגישות
- Skip link ב-`SkipLink.tsx`
- כל הכפתורים כוללים `aria-label`
- Focus visible עם outline זהב (3px)
- `.input-base` עם `aria-invalid` ו-`aria-describedby` בשגיאות

### ביצועים
- `backdrop-filter` מוגבל ל-blur קטן (12px) בglass
- orbs משתמשים ב-`filter: blur(36px)` (הופחת מ-60px)
- touch devices: פחות blur, אנימציות איטיות יותר

---

## דפים

| נתיב | תיאור |
|------|-------|
| `/` | דף הבית — בניית אתרים. סדר: Hero → LeadFunnelHero → Testimonials → About → שאר. |
| `/websites` | redirect (308) ל-`/` — נשמר לתאימות אחורית וקישורים ישנים. |
| `/terms` | תנאי שימוש |
| `/accessibility` | הצהרת נגישות |

### Header / Footer navigation
- **מקור אמת יחיד:** `app/components/navLinks.ts` מייצא את מערך `navLinks`
  (`{ label, href }`). גם ה-`Header` וגם ה-`Footer` צורכים אותו כדי שהתפריטים
  לא יסטו זה מזה. **לעדכון קישורי תפריט — לערוך רק את `navLinks.ts`.**
- `Header.tsx` משתמש ב-`isOverDarkHero = isHome` (רק `/`). `resolveHref` ממיר
  hash ל-`/#hash` כשלא ב-`/`. ה-nav ממוקם צמוד ללוגו בצד ימין; מוצג מ-`lg` ומעלה
  (מתחת לכך — תפריט המבורגר).
- `Footer.tsx` מציג את אותם קישורים עם קידומת `/` (כדי שיעבדו גם מדפים משפטיים).
- **nav links נוכחיים** (לפי סדר הגלילה): "המלצות" → `#testimonials` ·
  "עליי" → `#about` · "מה כלול" → `#whats-included` · "תהליך העבודה" → `#process` ·
  "שאלות נפוצות" → `#faq`.
- CTA: "קבע שיחה" / "צור קשר" → `#contact`.

### לשחזור דף המשפך בעתיד
1. העתק `app/_funnel-draft/page.tsx` → `app/page.tsx`
2. שנה `app/websites/page.tsx` לתוכן websites (או השאר redirect)
3. עדכן Header nav לקישורי המשפך

---

## metadata

- `SITE_URL`: `https://noamgamliel.com` (עדכן בלayout.tsx כשהדומיין קיים)
- שפה: `he` (עברית), locale: `he_IL`
- Open Graph image: `/public/og-image.png`
- theme-color: `#0F3D2E`
