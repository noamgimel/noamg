# Tavniot — אתר תדמית

אתר Next.js 14 (App Router) עם Tailwind CSS + Framer Motion. עברית, RTL, גופן Heebo, ופלטה של ירוק כהה.

## הרצה מקומית

```bash
npm install
npm run dev
```

האתר יעלה ב-`http://localhost:3000`.

## בנייה לפרודקשן

```bash
npm run build
npm start
```

## מבנה הפרויקט

```
.
├── app/
│   ├── layout.tsx           # RTL, גופנים, מטא
│   ├── page.tsx             # מרכיב את כל הסקציות
│   ├── globals.css          # Design tokens, utilities, scroll style
│   └── components/
│       ├── Header.tsx        # נאב + מנו מובייל + scroll-aware
│       ├── Hero.tsx          # מסך פתיחה עם פרלקסה
│       ├── Hook.tsx          # "שני סוגי אתרים בעולם"
│       ├── AIObjection.tsx   # ★ הסקציה המרכזית — להפלת ההתנגדות
│       ├── About.tsx         # קצת עליי + תעודה + סטטים
│       ├── Process.tsx       # 4 שלבי התהליך
│       ├── Differentiators.tsx # 3 בידולים
│       ├── WhatsIncluded.tsx # מה כלול
│       ├── RiskReversal.tsx  # הסרת סיכונים
│       ├── Portfolio.tsx     # עבודות נבחרות
│       ├── FAQ.tsx           # אקורדיון שאלות
│       ├── FinalCTA.tsx      # CTA סופי עם טבעות אנימטיביות
│       └── Footer.tsx
├── content-draft.md         # תוכן מלא של האתר (גיבוי)
├── tailwind.config.ts       # פלטה + אנימציות מותאמות
├── package.json
└── README.md
```

## איך מחליפים את הצבע הראשי (ירוק כהה)

הפלטה מוגדרת במקום אחד — `tailwind.config.ts`. שנה את `colors.brand`:

```ts
brand: {
  50: "#XXX",
  // ...
  700: "#0F3D2E", // ★ צבע ראשי — החלף לקוד הירוק שלך
  800: "#0A2A20",
  900: "#061811",
}
```

ב-`app/globals.css` יש גם CSS variables (במקרה הצורך):
```css
--brand-700: #0F3D2E;
--brand-800: #0A2A20;
--brand-900: #061811;
```

## איפה להחליף תוכן / נכסים

| מה | היכן |
|---|---|
| לוגו | `Header.tsx` (כרגע אות "ת" בעיגול) |
| תמונה אישית | `About.tsx` — מקום עם הטקסט "[תמונה אישית]" |
| תעודת מעצב | `About.tsx` — תעודה כרגע מעוצבת כ-badge טקסטואלי |
| פרויקטים | `Portfolio.tsx` — מערך `projects` בראש הקובץ |
| מספרי סטטים | `About.tsx` — מערך `stats` |
| מייל / טלפון | `FinalCTA.tsx` — `href="mailto:hello@tavniot.com"` |
| FAQ | `FAQ.tsx` — מערך `faqs` |

## דרישות מערכת

- Node.js 18.17+ (מומלץ 20+)
- npm או pnpm

## טכנולוגיות

- **Next.js 14** (App Router)
- **Tailwind CSS 3.4**
- **Framer Motion 11** (אנימציות, scroll-triggered)
- **TypeScript 5**
- **Heebo** (גופן עברי דרך next/font)

## מה הלאה

- [ ] להחליף את צבע המותג לירוק שלך
- [ ] להוסיף לוגו אמיתי
- [ ] להוסיף תמונה אישית + תעודה
- [ ] לעדכן פרטי קשר (מייל, טלפון, וואטסאפ)
- [ ] להוסיף לינקים אמיתיים לפרויקטים בפורטפוליו
- [ ] (אופציונלי) להוסיף Open Graph image בתיקיית `public`
- [ ] (אופציונלי) לחבר טופס יצירת קשר ל-Formspree / Netlify Forms / API משלך
