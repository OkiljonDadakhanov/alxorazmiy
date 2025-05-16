"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ANIMATION_CONFIG = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

const EVENT_DETAILS = {
  title: "Al-Khwarizmi",
  subtitle: "International Mathematics and Informatics Olympiad",
  location: "Tashkent, Uzbekistan",
  bgPattern:
    'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
};

const BackgroundPattern = memo(() => (
  <div className="absolute inset-0 opacity-5 pointer-events-none z-[-1]">
    <div
      className="absolute inset-0 bg-repeat bg-center"
      style={{ backgroundImage: EVENT_DETAILS.bgPattern }}
      aria-hidden="true"
    />
  </div>
));
BackgroundPattern.displayName = "BackgroundPattern";

const AnimatedText = memo(
  ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
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

const EventHighlights = memo(() => {
  return (
    <div className="w-full max-w-screen-2xl mt-12">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <div className="bg-[#112240] p-6 rounded-lg shadow-lg">
          <div className="text-[#64ffda] text-4xl mb-4">120+</div>
          <h3 className="text-white text-xl font-bold mb-2">Participants</h3>
          <p className="text-gray-300">
            Talented students from over 25 countries competed in this year's olympiad
          </p>
        </div>

        <div className="bg-[#112240] p-6 rounded-lg shadow-lg">
          <div className="text-[#64ffda] text-4xl mb-4">48</div>
          <h3 className="text-white text-xl font-bold mb-2">Medals Awarded</h3>
          <p className="text-gray-300">
            Gold, silver, and bronze medals awarded to top performers in both mathematics and informatics
          </p>
        </div>

        <div className="bg-[#112240] p-6 rounded-lg shadow-lg">
          <div className="text-[#64ffda] text-4xl mb-4">7</div>
          <h3 className="text-white text-xl font-bold mb-2">Unforgettable Days</h3>
          <p className="text-gray-300">
            Of competition, cultural exchange, and building international friendships
          </p>
        </div>
      </motion.div>
    </div>
  );
});
EventHighlights.displayName = "EventHighlights";

const EventCompletedInfo = memo(() => {
  return (
    <div className="text-left w-full lg:w-3/5 pr-0 lg:pr-8">
      <AnimatedText className="text-5xl sm:text-7xl font-extrabold text-[#64ffda] mb-8">
        {EVENT_DETAILS.title}
      </AnimatedText>
      <AnimatedText className="text-2xl sm:text-3xl text-white mb-10" delay={0.2}>
        {EVENT_DETAILS.subtitle}
      </AnimatedText>
      <AnimatedText className="text-xl sm:text-2xl text-white mb-6" delay={0.4}>
        <p>{EVENT_DETAILS.location}</p>
      </AnimatedText>
      <AnimatedText className="text-lg text-gray-300 mb-8" delay={0.5}>
        <p>
          The Al-Khwarizmi International Mathematics and Informatics Olympiad 2025 has
          successfully concluded. We extend our heartfelt gratitude to all participants,
          volunteers, and organizers who made this event a tremendous success.
        </p>
      </AnimatedText>
      <motion.div
        className="flex flex-wrap gap-4 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <Link
          href="/results"
          className="bg-[#64ffda] text-[#0a192f] px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all"
        >
          View Results
        </Link>
        <Link
          href="/media"
          className="border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded-md font-medium hover:bg-[#64ffda] hover:bg-opacity-10 transition-all"
        >
          Event Gallery
        </Link>
      </motion.div>
    </div>
  );
});
EventCompletedInfo.displayName = "EventCompletedInfo";

const KhimioInfoPage = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a192f] px-4 sm:px-6 lg:px-12 py-16"
      aria-label="KHIMIO Information Page"
    >
      <BackgroundPattern />
      <div className="w-full max-w-screen-2xl flex flex-col lg:flex-row items-center justify-between gap-16 mb-16">
        <EventCompletedInfo />
        <div className="relative w-full lg:w-2/5 aspect-video rounded-lg overflow-hidden shadow-2xl">
          <video
            src="https://alxorazmiy.nyc3.cdn.digitaloceanspaces.com/0504%20(1)(2).mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            controls
          />
        </div>
      </div>

      <EventHighlights />
    </section>
  );
};

export default memo(KhimioInfoPage);
