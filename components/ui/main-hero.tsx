"use client";

import { memo } from "react";
import { motion } from "framer-motion";

// Constants
const ANIMATION_CONFIG = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
} as const;

const EVENT_DETAILS = {
  title: "Al-Khwarizmi",
  subtitle: "International Mathematics and Informatics Olympiad",
  date: "May 7 - 13, 2024",
  location: "Tashkent, Uzbekistan",
  bgPattern:
    'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
} as const;

// Background Pattern Component
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

// Animated Text Component
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

// Event Details Component
const EventDetails = memo(() => (
  <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
    <AnimatedText className="text-4xl sm:text-6xl font-extrabold text-[#64ffda] mb-6">
      {EVENT_DETAILS.title}
    </AnimatedText>
{/* text-[#8892b0] */}
    <AnimatedText
      className="text-xl sm:text-2xl text-white  mb-8"
      delay={0.2}
    >
      {EVENT_DETAILS.subtitle}
    </AnimatedText>

    <AnimatedText
      className="text-lg sm:text-xl text-white mb-12"
      delay={0.4}
    >
      <p>{EVENT_DETAILS.date}</p>
      <p>{EVENT_DETAILS.location}</p>
    </AnimatedText>
  </div>
));
EventDetails.displayName = "EventDetails";

// Main Hero Component
const HeroPage = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a192f]"
      aria-label="Hero section"
    >
      <BackgroundPattern />
      <EventDetails />
    </section>
  );
};

export default memo(HeroPage);
