"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/* =========================================================
   Brand icons (crisp, integer-pixel paths)
   ========================================================= */
const FormIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <path fill="#3B82F6" d="M12 6h17.2L38 14.8V40a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
    <path fill="#1D4ED8" d="M29.2 6v6.8a2 2 0 0 0 2 2H38L29.2 6z" />
    <rect x="15" y="20" width="18" height="2.4" rx="1.2" fill="#fff" />
    <rect x="15" y="26" width="13" height="2.4" rx="1.2" fill="#fff" opacity="0.85" />
    <rect x="15" y="32" width="16" height="2.4" rx="1.2" fill="#fff" opacity="0.85" />
    <circle cx="31" cy="35.5" r="3.5" fill="#22C55E" />
    <path
      d="M29.4 35.7l1.3 1.3 2.4-2.7"
      stroke="#fff"
      strokeWidth="1.4"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="40" height="40" rx="11" fill="#1877F2" />
    <path
      fill="#fff"
      d="M28 24.5h-3.7V40h-5.2V24.5h-2.6v-4.6h2.6v-2.7c0-3.5 1.7-5.5 5.8-5.5h3.4v4.6h-2.1c-1.4 0-1.5.5-1.5 1.5l-.01 2.1H28.5L28 24.5z"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="ig-grad" cx="28%" cy="105%" r="135%">
        <stop offset="0" stopColor="#F7C863" />
        <stop offset="0.22" stopColor="#F47A30" />
        <stop offset="0.46" stopColor="#E0276A" />
        <stop offset="0.72" stopColor="#A52FB4" />
        <stop offset="1" stopColor="#4D5DD0" />
      </radialGradient>
    </defs>
    <rect x="4" y="4" width="40" height="40" rx="11" fill="url(#ig-grad)" />
    <rect x="11.5" y="11.5" width="25" height="25" rx="7" fill="none" stroke="#fff" strokeWidth="2.6" />
    <circle cx="24" cy="24" r="6.2" fill="none" stroke="#fff" strokeWidth="2.6" />
    <circle cx="32" cy="16" r="1.9" fill="#fff" />
  </svg>
);

const WhatsappIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="20" fill="#25D366" />
    <path
      fill="#fff"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 12.4c-6.4 0-11.6 5.2-11.6 11.6 0 2.05.54 4.05 1.55 5.8L12 36l6.45-1.85c1.7.93 3.62 1.42 5.55 1.42h.01c6.4 0 11.6-5.2 11.6-11.6S30.4 12.4 24 12.4zm0 21.2c-1.72 0-3.4-.46-4.87-1.34l-.35-.2-3.62.95.97-3.53-.23-.36a9.6 9.6 0 1 1 8.1 4.48zm5.3-7.2c-.29-.14-1.71-.84-1.98-.94-.27-.1-.46-.14-.65.14-.2.28-.74.94-.91 1.13-.17.2-.34.22-.62.07-.29-.14-1.22-.45-2.33-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.44.13-.58.13-.13.29-.34.43-.51.14-.17.19-.29.29-.49.1-.2.05-.37-.02-.51-.07-.14-.65-1.56-.89-2.14-.23-.56-.47-.48-.65-.49-.17-.01-.36-.01-.55-.01-.2 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.43s1.05 2.83 1.19 3.02c.14.2 2.04 3.12 4.95 4.37.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.2-.55-.34z"
    />
  </svg>
);

const SourceMini = ({ kind }: { kind: string }) => {
  if (kind === "form")
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#3B82F6" d="M6 3h8.5L19 7.5V20a1.5 1.5 0 0 1-1.5 1.5h-11.5A1.5 1.5 0 0 1 4.5 20V4.5A1.5 1.5 0 0 1 6 3z" />
        <path fill="#1D4ED8" d="M14.5 3v3.5A1 1 0 0 0 15.5 7.5H19L14.5 3z" />
        <rect x="7" y="11" width="9" height="1.3" rx="0.65" fill="#fff" />
        <rect x="7" y="14" width="7" height="1.3" rx="0.65" fill="#fff" />
      </svg>
    );
  if (kind === "facebook")
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect width="24" height="24" rx="6" fill="#1877F2" />
        <path d="M14 12h2l.4-3H14V7.5c0-.9.3-1.5 1.5-1.5H17V3.5c-.3 0-1.4-.1-2.5-.1-2.6 0-4 1.4-4 4V9H8v3h2.5v8H14v-8z" fill="#fff" />
      </svg>
    );
  if (kind === "instagram")
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <defs>
          <linearGradient id="mig" x1="0" x2="1" y1="1" y2="0">
            <stop offset="0" stopColor="#F7C863" />
            <stop offset=".5" stopColor="#D92E7F" />
            <stop offset="1" stopColor="#9B36B7" />
          </linearGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill="url(#mig)" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="#fff" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="#fff" />
      </svg>
    );
  if (kind === "whatsapp")
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="#25D366" />
        <path
          fill="#fff"
          d="M8.5 15.4c1.1 1.8 2.9 2.8 4.9 2.8.8 0 1.5-.1 2.1-.4l2.4.7-.7-2.3c.4-.7.5-1.5.5-2.3 0-2.9-2.3-5.2-5.2-5.2s-5.2 2.3-5.2 5.2c0 .6.1 1.2.3 1.7l-.8 2.4 2.4-.7c-.3-.6-.6-1.2-.7-1.9z"
        />
      </svg>
    );
  return null;
};

type Channel = {
  id: string;
  label: string;
  Icon: () => JSX.Element;
  ring: string;
};

const CHANNELS: Channel[] = [
  { id: "form", label: "טפסים מהאתר", Icon: FormIcon, ring: "#60a5fa" },
  { id: "facebook", label: "Facebook", Icon: FacebookIcon, ring: "#60a5fa" },
  { id: "instagram", label: "Instagram", Icon: InstagramIcon, ring: "#f472b6" },
  { id: "whatsapp", label: "WhatsApp", Icon: WhatsappIcon, ring: "#34d399" },
];

/* =========================================================
   Pipes — SVG paths from each channel down to the core card,
   and from the core down to the lead cards.
   ========================================================= */
function PipesSVG({ reduced }: { reduced: boolean }) {
  // viewBox 1000 x 1000 stretches to fill hero.
  const channelXs = [190, 397, 604, 811];
  const startY = 170;
  const coreTop = { x: 500, y: 263 };

  const paths = channelXs.map((x) => {
    const dx = (coreTop.x - x) * 0.55;
    const c1x = x;
    const c1y = startY + 60;
    const c2x = x + dx;
    const c2y = coreTop.y - 40;
    return `M ${x} ${startY} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${coreTop.x} ${coreTop.y}`;
  });

  return (
    <svg className="pipes" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <radialGradient id="trav-grad">
          <stop offset="0%" stopColor="var(--lh-primary-glow)" />
          <stop offset="100%" stopColor="var(--lh-primary-glow)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {paths.map((d, i) => (
        <path
          key={`in-${i}`}
          d={d}
          className="pipe-path"
          style={{ animationDuration: `${1.5 + i * 0.2}s` }}
        />
      ))}

      {!reduced &&
        paths.map((d, i) => {
          const dur = 2.8 + i * 0.4;
          return (
            <g key={`trav-${i}`}>
              <circle r="9" fill="url(#trav-grad)" opacity="0.7">
                <animateMotion dur={`${dur}s`} repeatCount="indefinite" path={d} rotate="auto" begin={`${i * 0.6}s`} />
              </circle>
              <circle r="3" className="traveler">
                <animateMotion dur={`${dur}s`} repeatCount="indefinite" path={d} rotate="auto" begin={`${i * 0.6}s`} />
              </circle>
              <circle r="2" fill="var(--lh-primary-bright)" opacity="0.55">
                <animateMotion dur={`${dur}s`} repeatCount="indefinite" path={d} rotate="auto" begin={`${i * 0.6 + dur * 0.35}s`} />
              </circle>
            </g>
          );
        })}
    </svg>
  );
}

/* =========================================================
   Background sparks (ambient floating glints) — client-only to
   avoid SSR/CSR hydration mismatch from Math.random().
   ========================================================= */
function Sparks({ count }: { count: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const sparks = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        bottom: -10 - Math.random() * 30,
        dur: 7 + Math.random() * 10,
        delay: -Math.random() * 10,
        size: 1 + Math.random() * 2.5,
        op: 0.4 + Math.random() * 0.5,
      })),
    [count]
  );

  if (!mounted) return null;

  return (
    <div className="sparks" aria-hidden="true">
      {sparks.map((s, i) => (
        <span
          key={i}
          className="spark"
          style={{
            left: `${s.left}%`,
            bottom: `${s.bottom}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDuration: `${s.dur}s`,
            animationDelay: `${s.delay}s`,
            opacity: s.op,
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   Stat tile — number bumps when value changes
   ========================================================= */
type StatProps = {
  value: number;
  labelStrong: string;
  labelRest?: string;
  trend: string;
  fill: number;
  variant?: "urgent" | "active" | "success";
  live?: boolean;
};
function Stat({ value, labelStrong, labelRest, trend, fill, variant, live }: StatProps) {
  const [bump, setBump] = useState(false);
  const prev = useRef(value);
  useEffect(() => {
    if (prev.current !== value) {
      setBump(true);
      const id = setTimeout(() => setBump(false), 500);
      prev.current = value;
      return () => clearTimeout(id);
    }
  }, [value]);
  return (
    <div className={`stat ${variant || ""}`}>
      <div className="stat-head">
        <span className={`stat-num ${bump ? "bump" : ""}`}>{value}</span>
        <span className="stat-trend">
          {live && <span className="live-dot" />}
          {trend}
        </span>
      </div>
      <div className="stat-label">
        <span className="strong">{labelStrong}</span>
        {labelRest ? ` ${labelRest}` : ""}
      </div>
      <div className="stat-bar">
        <span style={{ ["--w" as string]: `${fill}%` }} />
      </div>
    </div>
  );
}

/* =========================================================
   Lead card
   ========================================================= */
type LeadCardProps = {
  initials: string;
  name: string;
  time: string;
  source: string;
  sourceLabel: string;
  status: string;
  statusColor: string;
  urgent?: boolean;
  avatarColor: string;
};
function LeadCard({
  initials,
  name,
  time,
  source,
  sourceLabel,
  status,
  statusColor,
  urgent,
  avatarColor,
}: LeadCardProps) {
  return (
    <div
      className={`lead ${urgent ? "urgent" : ""}`}
      style={{
        ["--avatar" as string]: avatarColor,
        ["--status" as string]: statusColor,
      }}
    >
      <div className="lead-top">
        <div className="lead-avatar">
          {initials}
          <span className="lead-avatar-channel">
            <SourceMini kind={source} />
          </span>
        </div>
        <div className="lead-info">
          <div className="lead-name">{name}</div>
          <div className="lead-source">
            <span>{sourceLabel}</span>
          </div>
        </div>
        <div className="lead-time">{time}</div>
      </div>
      <div className="lead-divider" />
      <div className="lead-bottom">
        <div className="lead-status">
          <span className={`pip ${urgent ? "pulse" : ""}`} />
          <span>{status}</span>
        </div>
        <div className="chev" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   Hook: respects prefers-reduced-motion
   ========================================================= */
function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(m.matches);
    const h = (e: MediaQueryListEvent) => setReduced(e.matches);
    m.addEventListener("change", h);
    return () => m.removeEventListener("change", h);
  }, []);
  return reduced;
}

/* =========================================================
   The Lidup Hero Visual
   ========================================================= */
const TOASTS = [
  { name: "רונית מזרחי", src: "Instagram" },
  { name: "אבי כהן", src: "WhatsApp" },
  { name: "שירה אזולאי", src: "Gmail" },
  { name: "תומר בן דוד", src: "Facebook" },
  { name: "נועה לוי", src: "WhatsApp" },
];

export default function LidupHero() {
  const reduced = useReducedMotion();
  const [stats, setStats] = useState({ today: 3, waiting: 4, week: 12 });
  const [toast, setToast] = useState<{ name: string; src: string; key: number } | null>(null);
  const toastIdx = useRef(0);

  useEffect(() => {
    if (reduced) return;
    const tick = setInterval(() => {
      setStats((s) => {
        const r = Math.random();
        if (r < 0.45) return { ...s, waiting: s.waiting + 1 };
        if (r < 0.75) return { ...s, week: s.week + 1 };
        return { ...s, today: s.today + (Math.random() < 0.5 ? 1 : 0) };
      });
    }, 5500);
    return () => clearInterval(tick);
  }, [reduced]);

  useEffect(() => {
    if (reduced) return;
    const fire = () => {
      const item = TOASTS[toastIdx.current % TOASTS.length];
      toastIdx.current++;
      setToast({ ...item, key: Date.now() });
      setTimeout(() => setToast(null), 4200);
    };
    const first = setTimeout(fire, 2400);
    const id = setInterval(fire, 7500);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, [reduced]);

  const channelCounts = [2, 3, 1, 5];

  return (
    <div className="lidup-hero" aria-hidden="true">
      {!reduced && <Sparks count={22} />}
      <PipesSVG reduced={reduced} />

      <div className="stage">
        {/* Channels row */}
        <div className="channels">
          {CHANNELS.map((ch, i) => (
            <div className="channel" key={ch.id}>
              <div className="channel-node">
                <span
                  className="channel-pulse"
                  style={{
                    ["--ring" as string]: ch.ring,
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
                <ch.Icon />
                <span className="channel-count">{channelCounts[i]}</span>
              </div>
              <div className="channel-label">{ch.label}</div>
            </div>
          ))}
        </div>

        {/* Core card */}
        <div className="core-wrap">
          {toast && (
            <div className="new-toast show" key={toast.key}>
              <span className="pip" />
              <span>
                ליד חדש מ־{toast.src} — {toast.name}
              </span>
            </div>
          )}
          <div className="core">
            <div className="core-header">
              <div className="core-radar" aria-hidden="true">
                <span className="sweep" />
                <span className="dot" />
              </div>
              <div className="core-text">
                <div className="core-brand">LeadSync</div>
                <h3 className="core-title">משפך לידים אוטומטי שעובד בשבילך</h3>
                <p className="core-sub">סינון, קליטה, מענה מיידי, מעקב ותזכורות</p>
              </div>
            </div>

            <div className="stats">
              <Stat
                value={stats.today}
                variant="urgent"
                labelStrong="לידים"
                labelRest="לחזרה היום"
                trend="דחוף"
                fill={Math.min(100, stats.today * 18)}
                live
              />
              <Stat
                value={stats.waiting}
                variant="active"
                labelStrong="לידים"
                labelRest="פעילים"
                trend="↑ פעיל"
                fill={Math.min(100, stats.waiting * 14)}
                live
              />
              <Stat
                value={stats.week}
                variant="success"
                labelStrong="לידים"
                labelRest="חדשים השבוע"
                trend="↑ 24%"
                fill={Math.min(100, stats.week * 6)}
              />
            </div>
          </div>
        </div>

        {/* Lead cards row */}
        <div className="leads">
          <LeadCard
            initials='מ"ל'
            name="מיכל לוי"
            time="לפני 18 דק׳"
            source="facebook"
            sourceLabel="טופס אתר"
            status="נקבעה שיחה"
            statusColor="var(--lh-good)"
            avatarColor="var(--lh-primary)"
          />
          <LeadCard
            initials='ד"כ'
            name="דניאל כהן"
            time="לפני 2 דק׳"
            source="whatsapp"
            sourceLabel="WhatsApp"
            status="צריך לחזור עכשיו"
            statusColor="var(--lh-urgent)"
            urgent
            avatarColor="var(--lh-accent)"
          />
        </div>
      </div>
    </div>
  );
}
