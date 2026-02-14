"use client";

import { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const EVENT_DETAILS = {
  title: "Al-Khwarizmi",
  subtitle: "International Mathematics & Informatics Olympiad",
  edition: "4th KHIMIO",
  dates: "25-31 May 2026",
  location: "Tashkent, Uzbekistan",
};

const COUNTDOWN_TARGET = new Date("2026-05-25T00:00:00").getTime();

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, COUNTDOWN_TARGET - now);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return timeLeft;
}

const FloatingShape = memo(
  ({ className, delay, duration }: { className: string; delay: number; duration: number }) => (
    <motion.div
      className={`absolute rounded-full opacity-10 ${className}`}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
);
FloatingShape.displayName = "FloatingShape";

const CountdownBox = memo(({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-2">
      <span className="text-2xl sm:text-3xl font-bold text-white">
        {String(value).padStart(2, "0")}
      </span>
    </div>
    <span className="text-xs sm:text-sm text-gray-300 uppercase tracking-wider">{label}</span>
  </div>
));
CountdownBox.displayName = "CountdownBox";

const KhimioInfoPage = () => {
  const countdown = useCountdown();

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="KHIMIO Hero Section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/media/group.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f]/95 via-[#0a192f]/85 to-[#112240]/90" />
      </div>

      {/* Floating decorative shapes */}
      <FloatingShape className="w-72 h-72 bg-[#64ffda] -top-20 -right-20 blur-3xl" delay={0} duration={8} />
      <FloatingShape className="w-96 h-96 bg-blue-500 -bottom-32 -left-32 blur-3xl" delay={2} duration={10} />
      <FloatingShape className="w-48 h-48 bg-purple-500 top-1/3 right-1/4 blur-2xl" delay={4} duration={7} />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Edition badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#64ffda]/10 border border-[#64ffda]/30 rounded-full px-5 py-2 mb-8"
            >
              <span className="w-2 h-2 bg-[#64ffda] rounded-full animate-pulse" />
              <span className="text-[#64ffda] font-medium text-sm tracking-wide">
                {EVENT_DETAILS.edition} — Registration Open
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-4"
            >
              {EVENT_DETAILS.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 max-w-xl mx-auto lg:mx-0"
            >
              {EVENT_DETAILS.subtitle}
            </motion.p>

            {/* Date & Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 text-gray-400"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#64ffda]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-white font-medium">{EVENT_DETAILS.dates}</span>
              </div>
              <span className="hidden sm:inline text-gray-600">|</span>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#64ffda]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white font-medium">{EVENT_DETAILS.location}</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-400 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Registration for the 4th Al-Khwarizmi International Mathematics and
              Informatics Olympiad is now officially open! We invite the world&#39;s
              brightest young minds to compete for global recognition. Secure your
              spot today.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Link
                href="https://khimio-registration.vercel.app/"
                target="_blank"
                className="group relative bg-[#64ffda] text-[#0a192f] px-8 py-4 rounded-lg font-bold text-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-[#64ffda]/25"
              >
                <span className="relative z-10">Register Now</span>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors" />
              </Link>
              <Link
                href="/about"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/5 transition-all backdrop-blur-sm"
              >
                Learn More
              </Link>
            </motion.div>
          </div>

          {/* Right: Logo + Countdown */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col items-center gap-10"
          >
            {/* Logo with glow */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#64ffda]/20 rounded-full blur-3xl scale-150" />
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-6">
                <Image
                  src="/logo/logowhite.png"
                  alt="Al-Khwarizmi KHIMIO Logo"
                  width={200}
                  height={200}
                  className="w-40 h-40 sm:w-48 sm:h-48 object-contain"
                  priority
                />
              </div>
            </div>

            {/* Countdown */}
            <div className="text-center">
              <p className="text-gray-400 text-sm uppercase tracking-widest mb-4">
                Event starts in
              </p>
              <div className="flex gap-3 sm:gap-4">
                <CountdownBox value={countdown.days} label="Days" />
                <CountdownBox value={countdown.hours} label="Hours" />
                <CountdownBox value={countdown.minutes} label="Min" />
                <CountdownBox value={countdown.seconds} label="Sec" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(KhimioInfoPage);
