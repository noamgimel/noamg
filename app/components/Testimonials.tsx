"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import InlineCTA from "./InlineCTA";

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
      <div aria-hidden="true" className="absolute inset-0 grain pointer-events-none opacity-50" />

      {/* Floating orbs */}
      <div aria-hidden="true" className="orb orb-accent w-96 h-96 -top-32 -right-20 opacity-40 drift-slow" />
      <div aria-hidden="true" className="orb orb-brand w-[28rem] h-[28rem] -bottom-40 -left-40 opacity-50 drift" />

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

        {/* Mobile: carousel */}
        <MobileCarousel />

        {/* Desktop: 3-column grid with constrained card width */}
        <div className="hidden md:grid mt-16 grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto">
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

        <InlineCTA text="רוצה אתר שמרגיש ברמה הזאת? בוא נדבר" />
      </div>
    </section>
  );
}

/* ===== Mobile carousel ===== */
function MobileCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const goTo = (idx: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(testimonials.length - 1, idx));
    const card = el.children[clamped] as HTMLElement | undefined;
    if (card) {
      card.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      setActiveIdx(clamped);
    }
  };

  // Track active index by scroll position (RTL aware via Math.abs)
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const cardWidth = (el.children[0] as HTMLElement)?.offsetWidth || 280;
        const gap = 16;
        const stepped = Math.round(Math.abs(el.scrollLeft) / (cardWidth + gap));
        setActiveIdx(Math.max(0, Math.min(testimonials.length - 1, stepped)));
        raf = 0;
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="md:hidden mt-12">
      {/* Scroller */}
      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-5 px-5 pb-2"
        aria-label="קרוסלת המלצות"
      >
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="snap-center shrink-0 w-[80%] sm:w-[55%]"
          >
            <TestimonialCard t={t} />
          </div>
        ))}
      </div>

      {/* Controls: prev (right arrow) — dots — next (left arrow), in RTL */}
      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => goTo(activeIdx - 1)}
          disabled={activeIdx === 0}
          aria-label="המלצה קודמת"
          className="grid place-items-center w-11 h-11 rounded-full bg-cream/10 hover:bg-cream/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-cream"
        >
          <svg viewBox="0 0 16 16" fill="none" className="w-5 h-5" aria-hidden="true">
            <path
              d="M5 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="flex gap-2 mx-2" aria-hidden="true">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`עבור להמלצה ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIdx ? "w-6 bg-accent" : "w-2 bg-cream/30 hover:bg-cream/50"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(activeIdx + 1)}
          disabled={activeIdx === testimonials.length - 1}
          aria-label="המלצה הבאה"
          className="grid place-items-center w-11 h-11 rounded-full bg-cream/10 hover:bg-cream/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-cream"
        >
          <svg viewBox="0 0 16 16" fill="none" className="w-5 h-5" aria-hidden="true">
            <path
              d="M11 4l-4 4 4 4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

/* ===== Card ===== */
function TestimonialCard({ t }: { t: Testimonial }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  // Robust fullscreen fix: when video enters fullscreen, force object-fit:contain
  // (CSS pseudo-class isn't always honored consistently across browsers).
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const apply = () => {
      const isFs = !!(
        document.fullscreenElement === video ||
        (document as unknown as { webkitFullscreenElement?: Element })
          .webkitFullscreenElement === video
      );
      if (isFs) {
        video.style.objectFit = "contain";
        video.style.background = "#000";
      } else {
        video.style.objectFit = "";
        video.style.background = "";
      }
    };
    document.addEventListener("fullscreenchange", apply);
    document.addEventListener("webkitfullscreenchange", apply as EventListener);
    return () => {
      document.removeEventListener("fullscreenchange", apply);
      document.removeEventListener("webkitfullscreenchange", apply as EventListener);
    };
  }, []);

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
      <div className="flex flex-col gap-3 h-full max-w-[280px] mx-auto">
        <div className="aspect-[9/16] rounded-[1.5rem] glass-dark border-2 border-dashed border-cream/15 grid place-items-center text-center p-6 hover:border-accent/40 transition-colors">
          <div>
            <div className="text-cream/60 text-xs font-bold uppercase tracking-widest mb-2">
              {t.role}
            </div>
            <div className="text-xl font-extrabold text-cream/65 mb-2">{t.name}</div>
            <p className="text-sm text-cream/70 leading-relaxed">
              הסרטון השלישי בדרך — בקרוב יופיע כאן.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 h-full group max-w-[280px] mx-auto">
      {/* Video */}
      <div className="relative aspect-[9/16] rounded-[1.5rem] overflow-hidden bg-brand-900 glow-brand">
        <video
          ref={ref}
          src={t.videoSrc}
          poster={t.poster}
          playsInline
          controls={playing}
          preload="metadata"
          aria-label={`סרטון המלצה של ${t.name}`}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          className="absolute inset-0 w-full h-full object-cover bg-brand-900"
        />

        {/* Play overlay */}
        {!playing && (
          <button
            type="button"
            onClick={togglePlay}
            className="absolute inset-0 grid place-items-center bg-gradient-to-t from-brand-900/80 via-brand-900/20 to-brand-900/40 hover:bg-brand-900/30 transition-colors duration-300"
            aria-label={`נגן את ההמלצה של ${t.name}`}
          >
            <span
              aria-hidden="true"
              className="grid place-items-center w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-bright text-brand-900 shadow-2xl shadow-accent/40 group-hover:scale-110 transition-transform duration-300 pulse-glow"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 mr-1">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>

      {/* Caption + site link below the video */}
      <div className="flex items-center justify-between gap-3 px-1">
        <div className="min-w-0">
          <div className="text-base font-extrabold text-cream truncate">{t.name}</div>
          <div className="text-xs text-cream/70 truncate">{t.role}</div>
        </div>

        {t.siteUrl && (
          <a
            href={t.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-accent-bright transition-colors group/link"
            aria-label={`לאתר של ${t.name} (נפתח בחלון חדש)`}
          >
            <span>צפה באתר</span>
            <svg
              viewBox="0 0 16 16"
              className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-x-0.5"
              fill="none"
              aria-hidden="true"
            >
              <path d="M10 3l-7 0M10 3v7M10 3L3 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        )}
      </div>

      {/* Domain — display only */}
      {t.siteLabel && (
        <span
          dir="ltr"
          aria-hidden="true"
          className="text-[0.7rem] text-cream/65 px-1 truncate font-mono tabular-num"
        >
          {t.siteLabel} ↗
        </span>
      )}
    </div>
  );
}
