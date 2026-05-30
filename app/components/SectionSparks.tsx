"use client";

import { useEffect, useMemo, useState } from "react";

/* Section-wide ambient sparks — floating gold/green glints that drift
   upward across the whole section (same effect used behind the LeadSync
   visual). Client-only to avoid SSR/CSR hydration mismatch from Math.random(). */
export default function SectionSparks({ count = 34 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const sparks = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        dur: 7 + Math.random() * 10,
        delay: -Math.random() * 12,
        size: 1 + Math.random() * 2.4,
        op: 0.3 + Math.random() * 0.5,
      })),
    [count]
  );

  if (!mounted) return null;

  return (
    <div className="funnel-sparks" aria-hidden="true">
      {sparks.map((s, i) => (
        <span
          key={i}
          className="funnel-spark"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
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
