"use client";

import { useEffect, useRef } from "react";

const SITES = [
  { id: "benpaz",    url: "benpazshop.com"     },
  { id: "saason",    url: "saason.co.il",       pos: "top right" },
  { id: "avital",    url: "avital-sahar.co.il"  },
  { id: "adar",      url: "adarmalka.co.il"     },
  { id: "onlystyle", url: "onlystyle.co.il"     },
  { id: "timely",    url: "timely.co.il"        },
];

function LockIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 17a2 2 0 100-4 2 2 0 000 4zm6-7h-1V7a5 5 0 10-10 0v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2zM9 7a3 3 0 016 0v3H9V7z" />
    </svg>
  );
}

function SiteCard({ id, url, pos }: { id: string; url: string; pos?: string }) {
  return (
    <div className="showcase-card">
      <div className="showcase-card__bar">
        <div className="showcase-card__dots">
          <span />
          <span />
          <span />
        </div>
        <div className="showcase-card__url">
          <LockIcon />
          {url}
        </div>
        <div className="showcase-card__bar-spacer" />
      </div>
      <div className="showcase-card__screen">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/showcase/site-${id}.png`}
          alt=""
          loading="eager"
          decoding="async"
          style={pos ? { objectPosition: pos } : undefined}
        />
      </div>
    </div>
  );
}

/**
 * Auto-scrolling marquee of site screenshots with a 3-D curved-ring tilt effect.
 * The viewport is aria-hidden — purely decorative.
 * Tilt is driven by rAF, paused automatically if prefers-reduced-motion is set.
 */
export default function SitesShowcase() {
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId: number;

    const tick = () => {
      const vr = viewport.getBoundingClientRect();
      if (vr.width === 0) {
        rafId = requestAnimationFrame(tick);
        return;
      }
      const center = (vr.left + vr.right) / 2;
      const half = vr.width / 2;
      viewport.querySelectorAll<HTMLElement>(".showcase-card").forEach((card) => {
        const cr = card.getBoundingClientRect();
        const cardCenter = (cr.left + cr.right) / 2;
        const raw = (cardCenter - center) / half;
        const off = Math.max(-1.5, Math.min(1.5, raw));
        const absOff = Math.abs(off);
        const rotY = off * -20;
        const tz = -absOff * 60;
        const scale = 1 - absOff * 0.03;
        card.style.transform = `translateZ(${tz}px) rotateY(${rotY}deg) scale(${scale})`;
      });
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Triple the list so the loop seam (−33.3333% travel) is always off-screen
  const loop = [...SITES, ...SITES, ...SITES];

  return (
    <div className="sites-marquee" aria-hidden="true">
      <div className="sites-marquee__viewport" ref={viewportRef}>
        <div className="sites-marquee__track">
          {loop.map((site, i) => (
            <SiteCard key={`${site.id}-${i}`} {...site} />
          ))}
        </div>
      </div>
    </div>
  );
}
