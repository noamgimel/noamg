import type { Metadata, Viewport } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import SkipLink from "./components/SkipLink";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-heebo",
  display: "swap",
});

const SITE_URL = "https://noamgamliel.com"; // ⚠️ עדכן לדומיין הסופי כשנקנה
const SITE_NAME = "נועם גמליאל · בניית אתרים לעסקים";
const TITLE = "נועם גמליאל — בניית אתרים לעסקים";
const DESCRIPTION =
  "אתר תדמית מקצועי שמייצר אמון ופניות — מחובר לטפסים, וואטסאפ ומערכת ניהול לידים Lidup, עם ליווי אישי מקצה לקצה.";

export const viewport: Viewport = {
  themeColor: "#0F3D2E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · " + SITE_NAME,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "נועם גמליאל" }],
  creator: "נועם גמליאל",
  publisher: SITE_NAME,
  keywords: [
    "משפך לידים",
    "ניהול לידים",
    "Lidup",
    "מערכת לידים",
    "אתרי תדמית",
    "בניית אתרים",
    "אתר לעסק",
    "טופס סינון לידים",
    "מעקב לידים",
    "נועם גמליאל",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className="font-sans antialiased bg-cream text-ink">
        <SkipLink />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
