"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, MotionValue } from "framer-motion";
import {
  FaMedal,
  FaLandmark,
  FaMapMarkedAlt,
  FaStore,
  FaTree,
  FaMosque,
  FaTimes,
} from "react-icons/fa";
import { clsx } from "clsx";
import { useScroll, useTransform } from "framer-motion";
import { ElementType } from "react";

// Interfaces
interface CountryResult {
  country: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
}

interface ExcursionHighlight {
  icon: ElementType;
  text: string;
}

interface Image {
  src: string;
  alt: string;
  caption: string;
}

interface MedalDistributionProps {
  goldCount: number;
  silverCount: number;
  bronzeCount: number;
}

interface CountryResultsProps {
  results: CountryResult[];
}

interface CulturalExcursionProps {
  highlights: ExcursionHighlight[];
  y: MotionValue<string>;
}

interface MedalCounterProps {
  icon: ElementType;
  count: number;
  color: string;
  label: string;
}

interface ModalImageProps {
  selectedImage: Image | null;
  setSelectedImage: (image: Image | null) => void;
}

export default function AlKhwarizmiOlympiad() {
  const [goldCount, setGoldCount] = useState<number>(0);
  const [silverCount, setSilverCount] = useState<number>(0);
  const [bronzeCount, setBronzeCount] = useState<number>(0);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (goldCount < 10) setGoldCount((prev) => prev + 1);
      if (silverCount < 19) setSilverCount((prev) => prev + 1);
      if (bronzeCount < 26) setBronzeCount((prev) => prev + 1);
    }, 100);

    return () => clearInterval(interval);
  }, [goldCount, silverCount, bronzeCount]);

  const countryResults: CountryResult[] = [
    { country: "Uzbekistan", gold: 5, silver: 15, bronze: 13, total: 33 },
    { country: "Kazakhstan", gold: 2, silver: 1, bronze: 2, total: 5 },
    { country: "Kyrgyzstan", gold: 2, silver: 1, bronze: 5, total: 8 },
    { country: "Tajikistan", gold: 1, silver: 2, bronze: 1, total: 4 },
    { country: "Turkey", gold: 0, silver: 0, bronze: 5, total: 5 },
    { country: "Azerbaijan", gold: 0, silver: 0, bronze: 0, total: 0 },
  ];

  const excursionHighlights: ExcursionHighlight[] = [
    { icon: FaLandmark, text: "Historical and Cultural Sites" },
    { icon: FaMapMarkedAlt, text: "Museums and Educational Centers " },
    { icon: FaStore, text: "The Chorsu Bazaar" },
    { icon: FaTree, text: "National Parks and Green Spaces" },
    { icon: FaMosque, text: "Minor Mosque" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <HeroSection />

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <CompetitionHighlights />
          <OlympiadGallery />
          <MedalDistribution
            goldCount={goldCount}
            silverCount={silverCount}
            bronzeCount={bronzeCount}
          />
          <CountryResults results={countryResults} />
          <CulturalExcursion highlights={excursionHighlights} y={y} />
          <Conclusion />
        </motion.div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="relative h-screen flex items-center justify-center relative z-0">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-center text-white">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Al-Khwarazmi Olympiad 2024
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Celebrating Young Mathematical Minds
        </motion.p>
      </div>
    </div>
  );
}

function CompetitionHighlights() {
  return (
    <motion.section
      className="bg-white rounded-lg shadow-lg p-8 mb-12 transform hover:scale-105 transition duration-300"
      whileHover={{ boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
    >
      <h2 className="text-3xl font-semibold mb-4 text-indigo-700">
        Competition Overview & Highlights
      </h2>
      <p className="text-gray-700 leading-relaxed mb-3">
        The 2nd International Al-Khwarazmi Young Mathematicians Olympiad
        successfully took place from May 26 to May 31, 2024, bringing together
        over 120 talented participants from different countries. Dedicated to
        the field of mathematics, this prestigious competition provided a
        platform for young minds to showcase their problem-solving skills,
        collaborate with like-minded peers, and celebrate their passion for
        mathematics.
      </p>
      <p className="text-gray-700 leading-relaxed">
        This year’s Olympiad saw a significant increase in participation, with
        students demonstrating exceptional problem-solving skills and
        mathematical abilities. The competition maintained its high standards,
        challenging contestants with complex mathematical problems requiring
        deep analytical and logical reasoning.
      </p>
    </motion.section>
  );
}

function MedalDistribution({
  goldCount,
  silverCount,
  bronzeCount,
}: MedalDistributionProps) {
  return (
    <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-indigo-700 text-center">
        Medal Distribution
      </h2>
      <div className="flex justify-around">
        <MedalCounter
          icon={FaMedal}
          count={goldCount}
          color="text-yellow-500"
          label="Gold"
        />
        <MedalCounter
          icon={FaMedal}
          count={silverCount}
          color="text-gray-400"
          label="Silver"
        />
        <MedalCounter
          icon={FaMedal}
          count={bronzeCount}
          color="text-yellow-700"
          label="Bronze"
        />
      </div>
    </section>
  );
}

function MedalCounter({ icon: Icon, count, color, label }: MedalCounterProps) {
  return (
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Icon className={clsx("text-5xl mb-2", color)} />
      <span className="text-4xl font-bold">{count}</span>
      <span className="text-gray-600 text-lg">{label}</span>
    </motion.div>
  );
}

function CountryResults({ results }: CountryResultsProps) {
  return (
    <section className="bg-white rounded-lg shadow-lg p-8 mb-12 overflow-hidden">
      <h2 className="text-3xl font-semibold mb-6 text-indigo-700">
        Country-wise Results
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-indigo-50">
            <tr>
              {["Country", "Gold", "Silver", "Bronze", "Total"].map(
                (header) => (
                  <th
                    key={header}
                    className="px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {results.map((result, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="hover:bg-indigo-50 transition-colors duration-150"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {result.country}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {result.gold}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {result.silver}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {result.bronze}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {result.total}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function CulturalExcursion({ highlights, y }: CulturalExcursionProps) {
  return (
    <motion.section
      style={{ y }}
      className="bg-white rounded-lg shadow-lg p-8 mb-12 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1672353928061-0a740ff0b763?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      />
      <div className="relative z-10">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-700">
          Cultural and Historical Excursion in Tashkent
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          The 2nd International Al-Khwarazmi Young Mathematicians Olympiad was
          not only about competition but also about cultural exchange and
          exploration. Participants had the opportunity to go on an excursion
          around Tashkent, the capital of Uzbekistan. This excursion allowed
          them to experience the rich history, culture, and modern advancements
          of the city. Some of the highlights included:
        </p>
        <h3 className="text-xl font-semibold mb-4 text-indigo-600">
          Key highlights of the excursion:
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {highlights.map((highlight, index) => (
            <motion.li
              key={index}
              className="flex items-center space-x-3 bg-indigo-50 p-3 rounded-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
            >
              <highlight.icon className="text-indigo-500 text-2xl flex-shrink-0" />
              <span className="text-gray-700">{highlight.text}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}

function Conclusion() {
  return (
    <motion.section
      className="bg-indigo-700 text-white rounded-lg shadow-lg p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold mb-4">
        A Celebration of Mathematics and Culture
      </h2>
      <p className="mb-4 leading-relaxed">
        The 2nd Al-Khwarazmi Olympiad successfully upheld its mission of
        promoting mathematics and international cooperation. The growing
        interest and increased participation highlight the importance of such
        competitions in shaping the next generation of mathematicians.
      </p>
      <p className="font-semibold text-lg">
        We look forward to an even bigger and better 3rd International
        Al-Khwarazmi Olympiad, where more young talents will have the
        opportunity to compete and excel in mathematics!
      </p>
    </motion.section>
  );
}

function OlympiadGallery() {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const images = [
    {
      src: "/media/opening.jpg",
      alt: "Opening Ceremony",
      caption: "Grand Opening Ceremony",
    },
    {
      src: "/media/winners.jpg",
      alt: "Problem Solving",
      caption: "Participants Tackling Challenging Problems",
    },
    {
      src: "/media/group.jpg",
      alt: "Group Discussion",
      caption: "Collaborative Problem Solving Session",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Award Ceremony",
      caption: "Medal Award Ceremony",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Cultural Performance",
      caption: "Traditional Uzbek Dance Performance",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Excursion",
      caption: "Visit to Amir Timur Square",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-indigo-700 text-center">
        2024 Olympiad Highlights
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
              <p className="text-sm">{image.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                className="w-full rounded-lg"
              />
              <p className="text-white text-center mt-4 text-lg">
                {selectedImage.caption}
              </p>
              <button
                className="absolute top-2 right-2 text-white hover:text-gray-300"
                onClick={() => setSelectedImage(null)}
              >
                <FaTimes size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
