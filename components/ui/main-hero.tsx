"use client";

import type React from "react";
import { memo, useState, useEffect } from "react";
import { motion } from "framer-motion";

const ANIMATION_CONFIG = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
} as const;

const EVENT_DETAILS = {
  title: "Al-Khwarizmi",
  subtitle: "International Mathematics and Informatics Olympiad",
  date: "Compete with the best minds from around the world – May 7-13, 2025.",
  location: "Tashkent, Uzbekistan",
  bgPattern:
    'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
} as const;

const BackgroundPattern = memo(() => (
  <div className="absolute inset-0 opacity-5">
    <div
      className="absolute inset-0 bg-repeat bg-center"
      style={{ backgroundImage: EVENT_DETAILS.bgPattern }}
      aria-hidden="true"
    />
  </div>
));
BackgroundPattern.displayName = "BackgroundPattern";

interface AnimatedTextProps {
  children: React.ReactNode;
  className: string;
  delay?: number;
}

const AnimatedText = memo(
  ({ children, className, delay = 0 }: AnimatedTextProps) => (
    <motion.div
      className={className}
      initial={ANIMATION_CONFIG.initial}
      animate={ANIMATION_CONFIG.animate}
      transition={{ ...ANIMATION_CONFIG.transition, delay }}
    >
      {children}
    </motion.div>
  )
);
AnimatedText.displayName = "AnimatedText";

const CountdownTimer = memo(() => {
  const targetDate = new Date("2025-05-07T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = targetDate - new Date().getTime();
    const timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center space-x-6 text-white">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <motion.div
            className="text-5xl sm:text-6xl font-bold"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 0.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 0.5,
            }}
          >
            {value}
          </motion.div>
          <div className="text-base sm:text-lg uppercase mt-2">{unit}</div>
        </div>
      ))}
    </div>
  );
});
CountdownTimer.displayName = "CountdownTimer";

const EventDetails = memo(() => (
  <div className="text-left w-full lg:w-3/5 pr-0 lg:pr-8">
    <AnimatedText className="text-5xl sm:text-7xl font-extrabold text-[#64ffda] mb-8">
      {EVENT_DETAILS.title}
    </AnimatedText>
    <AnimatedText className="text-2xl sm:text-3xl text-white mb-10" delay={0.2}>
      {EVENT_DETAILS.subtitle}
    </AnimatedText>
    <AnimatedText className="text-xl sm:text-2xl text-white mb-12" delay={0.4}>
      <p className="mb-2">{EVENT_DETAILS.date}</p>
      <p>{EVENT_DETAILS.location}</p>
    </AnimatedText>
  </div>
));
EventDetails.displayName = "EventDetails";

const HeroPage = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a192f] px-4 sm:px-6 lg:px-12"
      aria-label="Hero section"
    >
      <BackgroundPattern />
      <div className="w-full max-w-screen-2xl flex flex-col lg:flex-row items-center justify-between gap-16 mb-16">
        <EventDetails />
        <div className="relative w-full lg:w-2/5 aspect-video rounded-lg overflow-hidden shadow-2xl">
          <video 
            src="https://alxorazmiy.nyc3.cdn.digitaloceanspaces.com/al-khwarazmi.mp4" 
            className="w-full h-full object-cover" 
            autoPlay 
            muted
            loop 
            controls
          />
        </div>
      </div>
      <AnimatedText className="w-full max-w-screen-2xl mt-8" delay={0.6}>
        <CountdownTimer />
      </AnimatedText>
    </section>
  );
};

export default memo(HeroPage);