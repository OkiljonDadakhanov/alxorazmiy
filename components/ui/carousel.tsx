"use client";
import { motion } from "framer-motion";

const HeroPage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a192f]">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-repeat bg-center"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
          }}
        ></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold text-[#64ffda] mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Al-Khwarizmi
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl text-[#8892b0] mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          International Mathematics and Informatics Olympiad
        </motion.p>
        <motion.div
          className="text-lg sm:text-xl text-[#a8b2d1] mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>May 7 - 13, 2024</p>
          <p>Tashkent, Uzbekistan</p>
        </motion.div>
      </div>

      {/* Decorative elements */}
    </div>
  );
};

export default HeroPage;
