# CLAUDE.md — Tavniot Website

אתר תדמית אישי של **נועם גמליאל** — מעצב ובונה אתרים.  
מטרת האתר: יצירת אמון, הנעה לפניות, והמרת מבקרים ללידים.

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
  page.tsx                # דף הבית — מחבר את כל ה-sections לפי סדר
  globals.css             # כל הסגנונות הגלובליים, utility classes, design tokens
  icon.svg                # Favicon
  accessibility/page.tsx  # דף הצהרת נגישות
  terms/page.tsx          # דף תנאי שימוש
  components/
    Header.tsx            # Header עם scroll-aware transitions (framer-motion)
    Footer.tsx
    Hero.tsx              # Section ראשון — קריאה לפעולה ראשית
    Hook.tsx              # Section hooks / why you need this
    Testimonials.tsx      # עדויות לקוחות (כוללות וידאו)
    AIObjection.tsx       # התמודדות עם ההתנגדות "למה לא AI?"
    About.tsx             # סקשן אודות נועם
    Process.tsx           # תהליך העבודה
    Differentiators.tsx   # מה מייחד
    WhatsIncluded.tsx     # מה כלול בשירות
    RiskReversal.tsx      # ביטול סיכון / ערבות
    FAQ.tsx               # שאלות נפוצות
    WhoFor.tsx            # למי מתאים
    FinalCTA.tsx          # טופס יצירת קשר (השאר פרטים)
    Logo.tsx              # SVG לוגו
    LegalPageLayout.tsx   # Layout לדפי terms/accessibility
    SkipLink.tsx          # Skip to content לנגישות
    WhatsAppButton.tsx    # כפתור WhatsApp צף
public/
  og-image.png            # Open Graph image
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
| `/` | דף הבית — כל ה-landing page sections |
| `/terms` | תנאי שימוש |
| `/accessibility` | הצהרת נגישות |

---

## metadata

- `SITE_URL`: `https://noamgamliel.com` (עדכן בלayout.tsx כשהדומיין קיים)
- שפה: `he` (עברית), locale: `he_IL`
- Open Graph image: `/public/og-image.png`
- theme-color: `#0F3D2E`
