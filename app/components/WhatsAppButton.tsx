"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PHONE = "972545363118"; // 054-536-3118 in international format
const PREFILL_MESSAGE = "היי נועם, ראיתי את האתר שלך ואשמח לשמוע פרטים על בניית אתר תדמית.";
const WA_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(PREFILL_MESSAGE)}`;

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  // Show after a slight scroll (avoid being intrusive on hero load)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="שלח הודעה בוואטסאפ"
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.8,
        y: visible ? 0 : 40,
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-40 group flex items-center gap-3 ${
        visible ? "" : "pointer-events-none"
      }`}
    >
      {/* Tooltip — slides in on hover (desktop only) */}
      <span
        className="hidden md:inline-flex items-center px-4 py-2.5 rounded-full bg-brand-900 text-cream text-sm font-bold whitespace-nowrap shadow-xl shadow-brand-900/40 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
        aria-hidden
      >
        דברו איתי בוואטסאפ
        <svg
          viewBox="0 0 8 12"
          className="w-2 h-3 mr-2 -ml-1 text-brand-900"
          fill="currentColor"
          aria-hidden
        >
          <path d="M0 6L8 0v12L0 6z" />
        </svg>
      </span>

      {/* The button */}
      <span className="relative grid place-items-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 group-hover:scale-110 transition-transform duration-300">
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
        <span className="absolute inset-0 rounded-full bg-[#25D366]" />

        {/* Icon */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="relative w-7 h-7 sm:w-8 sm:h-8"
          aria-hidden
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.030-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </span>
    </motion.a>
  );
}
