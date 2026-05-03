"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

type Testimonial = {
  name: string;
  role: string;
  videoSrc?: string;
  poster?: string;
  siteUrl?: string;
  siteLabel?: string;
  placeholder?: boolean;
};

const testimonials: Testimonial[] = [
  {
    name: "Ben Paz",
    role: "Ben Paz Shop · בעלים",
    videoSrc: "/videos/benpaz-review.mp4",
    poster: "/videos/benpaz-review-poster.jpg",
    siteUrl: "https://www.benpazshop.com/",
    siteLabel: "benpazshop.com",
  },
  {
    name: "אדר מלכה",
    role: "המלצת לקוח",
    videoSrc: "/videos/testimonial-2.mp4",
    poster: "/videos/testimonial-2-poster.jpg",
    siteUrl: "https://noamgamliel.wixstudio.com/site",
    siteLabel: "wixstudio.com/site",
  },
  {
    name: "המלצה שלישית",
    role: "בקרוב",
    placeholder: true,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-24 md:py-28 lg:py-36 mesh-emerald text-cream overflow-hidden"
    >
      <div className="absolute inset-0 grain pointer-events-none opacity-50" />

      {/* Floating orbs */}
      <div className="orb orb-accent w-96 h-96 -top-32 -right-20 opacity-40 drift-slow" />
      <div className="orb orb-brand w-[28rem] h-[28rem] -bottom-40 -left-40 opacity-50 drift" />

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-xs font-semibold text-accent tracking-wide"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          לקוחות + עבודות
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="h-section text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl"
        >
          לקוחות מספרים.
          <br />
          <span className="gradient-text">העבודות מדברות.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 text-lg text-cream/75 max-w-2xl"
        >
          לא הבטחות שיווק, לא טקסטים מצוחצחים. שמע ישירות מהלקוחות שעבדתי
          איתם — ואם תרצה, צא לאתרים שלהם וראה את התוצאה במו עיניך.
        </motion.p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
            >
              <TestimonialCard t={t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== Card ===== */
function TestimonialCard({ t }: { t: Testimonial }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  if (t.placeholder) {
    return (
      <div className="flex flex-col gap-4 h-full">
        <div className="aspect-[9/16] rounded-[1.75rem] glass-dark border-2 border-dashed border-cream/15 grid place-items-center text-center p-8 hover:border-accent/40 transition-colors">
          <div>
            <div className="text-cream/40 text-xs font-bold uppercase tracking-widest mb-3">
              {t.role}
            </div>
            <div className="text-2xl font-extrabold text-cream/65 mb-3">{t.name}</div>
            <p className="text-sm text-cream/50 leading-relaxed">
              הסרטון השלישי בדרך — בקרוב יופיע כאן.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 h-full group">
      {/* Video */}
      <div className="relative aspect-[9/16] rounded-[1.75rem] overflow-hidden bg-brand-900 glow-brand">
        <video
          ref={ref}
          src={t.videoSrc}
          poster={t.poster}
          playsInline
          controls={playing}
          preload="metadata"
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          className="absolute inset-0 w-full h-full object-cover bg-brand-900"
        />

        {/* Play overlay (hidden when playing) */}
        {!playing && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 grid place-items-center bg-gradient-to-t from-brand-900/80 via-brand-900/20 to-brand-900/40 hover:bg-brand-900/30 transition-colors duration-300"
            aria-label={`נגן את ההמלצה של ${t.name}`}
          >
            {/* Play button */}
            <span className="grid place-items-center w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent-bright text-brand-900 shadow-2xl shadow-accent/40 group-hover:scale-110 transition-transform duration-300 pulse-glow">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 mr-1" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>

      {/* Caption + site link below the video */}
      <div className="flex items-center justify-between gap-3 px-1">
        <div className="min-w-0">
          <div className="text-xl font-extrabold text-cream truncate">{t.name}</div>
          <div className="text-xs text-cream/55 truncate">{t.role}</div>
        </div>

        {t.siteUrl && (
          <a
            href={t.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-accent-bright transition-colors group/link"
            aria-label={`לאתר של ${t.name}`}
          >
            <span className="hidden md:inline">צפה באתר</span>
            <span className="md:hidden">אתר</span>
            <svg
              viewBox="0 0 16 16"
              className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-x-0.5"
              fill="none"
            >
              <path d="M10 3l-7 0M10 3v7M10 3L3 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        )}
      </div>

      {/* Domain — small visual on bottom */}
      {t.siteLabel && (
        <a
          href={t.siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          dir="ltr"
          className="text-[0.7rem] text-cream/40 hover:text-cream/70 transition-colors px-1 truncate font-mono tabular-num"
        >
          {t.siteLabel} ↗
        </a>
      )}
    </div>
  );
}
