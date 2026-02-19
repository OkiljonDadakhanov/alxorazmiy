"use client";

import { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const EVENT = {
  title: "Al-Khwarizmi",
  subtitle: "International Mathematics & Informatics Olympiad",
  edition: "4th KHIMIO",
  dates: "25–31 May 2026",
  location: "Tashkent, Uzbekistan",
};

const TARGET = new Date("2026-05-25T00:00:00").getTime();

function useCountdown() {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, TARGET - Date.now());
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return t;
}

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const CountdownUnit = memo(
  ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg border border-[#C9A84C]/15 bg-[#C9A84C]/[0.03] backdrop-blur-sm flex items-center justify-center transition-colors duration-300 hover:border-[#C9A84C]/30 hover:bg-[#C9A84C]/[0.06]">
        <span
          className="text-2xl sm:text-[28px] font-light tracking-tight text-[#F0EDE6]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="mt-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-[#5C6F88] font-medium">
        {label}
      </span>
    </div>
  )
);
CountdownUnit.displayName = "CountdownUnit";

const Colon = memo(() => (
  <div className="h-14 sm:h-16 flex items-center">
    <span className="text-[#C9A84C]/20 text-base font-light select-none">:</span>
  </div>
));
Colon.displayName = "Colon";

const KhimioHero = () => {
  const cd = useCountdown();

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden min-h-[calc(100vh-4.5rem)]"
      style={{
        background:
          "linear-gradient(170deg, #040C1B 0%, #081428 40%, #0A1832 70%, #050E20 100%)",
      }}
      aria-label="KHIMIO Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/media/group.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.05]"
          priority
        />
      </div>

      {/* Geometric pattern overlay */}
      <div className="absolute inset-[-120px] opacity-[0.035] pointer-events-none hero-geo-rotate">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="geoStar"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="20" y="20" width="40" height="40"
                fill="none" stroke="#C9A84C" strokeWidth="0.4"
              />
              <rect
                x="20" y="20" width="40" height="40"
                fill="none" stroke="#C9A84C" strokeWidth="0.4"
                transform="rotate(45 40 40)"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geoStar)" />
        </svg>
      </div>

      {/* Grain texture */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="heroNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#heroNoise)" />
      </svg>

      {/* Radial gold glow */}
      <div
        className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,168,76,0.05) 0%, transparent 60%)",
        }}
      />

      {/* Corner decorative borders */}
      <div className="hidden lg:block absolute top-6 left-6 w-16 h-16 border-l border-t border-[#C9A84C]/10" />
      <div className="hidden lg:block absolute top-6 right-6 w-16 h-16 border-r border-t border-[#C9A84C]/10" />
      <div className="hidden lg:block absolute bottom-6 left-6 w-16 h-16 border-l border-b border-[#C9A84C]/10" />
      <div className="hidden lg:block absolute bottom-6 right-6 w-16 h-16 border-r border-b border-[#C9A84C]/10" />

      {/* ====== CONTENT ====== */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-3xl mx-auto px-6 py-8 sm:py-10 flex flex-col items-center text-center"
      >
        {/* Logo */}
        <motion.div variants={fadeUp} className="mb-4">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#C9A84C]/[0.08] blur-2xl scale-[2]" />
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#C9A84C]/15 bg-white/[0.02] backdrop-blur-sm p-2">
              <Image
                src="/logo/logowhite.png"
                alt="KHIMIO Logo"
                fill
                className="object-contain p-1.5"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Edition badge */}
        <motion.div variants={fadeUp} className="mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9A84C]/20 bg-[#C9A84C]/[0.05] text-xs sm:text-sm font-medium tracking-[0.12em] uppercase text-[#C9A84C]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
            {EVENT.edition} — Registration Open
          </span>
        </motion.div>

        {/* Title with gold shimmer */}
        <motion.h1
          variants={fadeUp}
          className="hero-title-shimmer text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-[-0.01em]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
        >
          {EVENT.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="mt-2.5 text-sm sm:text-base md:text-lg text-[#8B9DB8] tracking-wide max-w-md"
        >
          {EVENT.subtitle}
        </motion.p>

        {/* Date & Location */}
        <motion.div
          variants={fadeUp}
          className="mt-4 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="flex items-center gap-1.5 text-sm font-medium text-[#D5CCBB]">
            <svg
              className="w-3.5 h-3.5 text-[#C9A84C]/70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
            {EVENT.dates}
          </span>
          <span className="w-1 h-1 rounded-full bg-[#C9A84C]/30" />
          <span className="flex items-center gap-1.5 text-sm font-medium text-[#D5CCBB]">
            <svg
              className="w-3.5 h-3.5 text-[#C9A84C]/70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            {EVENT.location}
          </span>
        </motion.div>

        {/* Thin separator */}
        <motion.div
          variants={fadeUp}
          className="w-12 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/25 to-transparent my-5"
        />

        {/* Countdown */}
        <motion.div variants={fadeUp} className="mb-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#5C6F88] font-medium mb-3">
            Event begins in
          </p>
          <div className="flex items-start gap-2 sm:gap-2.5">
            <CountdownUnit value={cd.d} label="Days" />
            <Colon />
            <CountdownUnit value={cd.h} label="Hours" />
            <Colon />
            <CountdownUnit value={cd.m} label="Min" />
            <Colon />
            <CountdownUnit value={cd.s} label="Sec" />
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap gap-3 justify-center"
        >
          <Link
            href="https://khimio-registration.vercel.app/"
            target="_blank"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-lg font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 bg-gradient-to-r from-[#B8952F] via-[#C9A84C] to-[#D4B85A] text-[#040C1B] hover:shadow-[0_0_32px_rgba(201,168,76,0.25)] active:scale-[0.98]"
          >
            Register Now
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-medium text-sm sm:text-base text-[#C9A84C] border border-[#C9A84C]/20 hover:border-[#C9A84C]/40 hover:bg-[#C9A84C]/[0.05] transition-all duration-300 tracking-wide active:scale-[0.98]"
          >
            Learn More
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default memo(KhimioHero);
