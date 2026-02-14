"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp, ExternalLink, Video } from "lucide-react";

/* ── Old 2025 programme data ── */
const oldProgramme = [
  {
    title: "Day 1 - Wednesday",
    date: "May 7, 2025",
    rows: [
      ["During the day", "School placement", "", "Hotel accommodation"],
      ["07:00-09:00", "Lunch (school)", "Breakfast (school)", "Breakfast (hotel)"],
      ["09:00-12:00", "", "", "Work on Olympiad tasks"],
      ["12:00-13:30", "Lunch (school)", "Lunch (school)", "Lunch (school)"],
      ["14:00-18:00", "", "", "Work on Olympiad tasks"],
      ["18:30-19:30", "Dinner (school)", "Dinner (school)", "Dinner (school)"],
      ["19:30-21:00", "Various interactive games", "", ""],
      ["20:00", "", "Return to the hotel", "Return to the hotel"],
    ],
  },
  {
    title: "Day 2 - Thursday",
    date: "May 8, 2025",
    rows: [
      ["07:00-09:00", "Breakfast (school)", "Breakfast (hotel)", "Breakfast (hotel)"],
      ["09:00-12:00", "Preparations for the opening ceremony", "Preparations for the opening ceremony", ""],
      ["12:00-13:00", "Opening ceremony (school)", "Opening ceremony (school)", "Opening ceremony (school)"],
      ["13:00-14:00", "Lunch (school)", "Lunch (school)", "Lunch (school)"],
      ["14:00-18:00", "Alley of Writers Tour", "Alley of Writers Tour", "Work on Olympiad tasks"],
      ["18:30-19:30", "Dinner (school)", "Dinner (school)", "Dinner (school)"],
      ["19:30-21:00", "Free time, preparation for the first round", "Translation of first round questions", "Translation of first round questions"],
    ],
  },
  {
    title: "Day 3 - Friday",
    date: "May 9, 2025",
    rows: [
      ["07:00-08:00", "Breakfast (school)", "Breakfast (hotel)", "Breakfast (hotel)"],
      ["08:00-09:00", "Preparing for the first round", "Translation process", "Working with assignments"],
      ["09:00-13:00", "The first round of the Olympiad", "Visit to the University of New Uzbekistan", "The first round of the Olympiad"],
      ["13:00-14:30", "Lunch (school)", "Lunch (school)", "Lunch (school)"],
      ["14:30-19:00", "A trip to the New Uzbekistan Park", "A trip to the New Uzbekistan Park", "Checking the Olympiad work"],
      ["19:00-20:30", "Dinner (school)", "Dinner (school)", "Dinner (school)"],
      ["20:30-21:30", "Free time, preparation for the second round", "Discussion, translation of second round questions", "Discussion, translation of second round questions"],
    ],
  },
  {
    title: "Day 4 - Saturday",
    date: "May 10, 2025",
    rows: [
      ["07:00-08:00", "Breakfast (school)", "Breakfast (hotel)", "Breakfast (hotel)"],
      ["08:00-09:00", "Preparation for the second round", "Translation process", "Working with assignments"],
      ["09:00-14:00", "The second round of the Olympiad", "Visit to the Tashkent Presidential School", "The second round of the Olympiad"],
      ["14:00-15:30", "Lunch (school)", "Lunch (school)", "Lunch (school)"],
      ["15:30-18:00", "Victory Park memorial complex", "Victory Park memorial complex", "Checking the second round"],
      ["18:30-19:30", "Dinner (school)", "Dinner (school)", "Dinner (school)"],
      ["19:30-21:00", "Various games", "Discussion on the second round", "Discussion on the second round"],
    ],
  },
  {
    title: "Day 5 - Sunday",
    date: "May 11, 2025",
    rows: [
      ["07:00-08:30", "Breakfast (school)", "Breakfast (hotel)", "Breakfast (hotel)"],
      ["09:00-13:00", "Moderation (Appeals)", "Moderation (Appeals)", "Moderation (Appeals)"],
      ["13:00-14:00", "Lunch (school)", "Lunch (school)", "Lunch (school)"],
      ["14:00-18:00", "Moderation (Appeals)", "Moderation (Appeals)", "Moderation (Appeals)"],
      ["18:30-19:30", "Dinner (school)", "Dinner (school)", "Dinner (school)"],
      ["20:00-22:00", "Preparation for the awarding ceremony", "Preparation for the awarding ceremony", "Final results"],
    ],
  },
  {
    title: "Day 6 - Monday",
    date: "May 12, 2025",
    rows: [
      ["07:00-09:00", "Breakfast (school)", "Breakfast (hotel)", "Breakfast (hotel)"],
      ["09:00-13:00", "Preparing for the awarding ceremony", "Preparing for the awarding ceremony", "Travel"],
      ["13:00-14:30", "Lunch (school)", "Lunch (school)", "Lunch (school)"],
      ["16:00-17:30", "Awarding & Closing Ceremony (School)", "Awarding & Closing Ceremony (School)", "Awarding & Closing Ceremony (School)"],
      ["18:00-21:00", "Banquet", "Banquet", "Banquet"],
      ["21:00", "Tracking departing participants", "Tracking departing participants", "Tracking departing participants"],
    ],
  },
  {
    title: "Day 7 - Tuesday",
    date: "May 13, 2025",
    rows: [
      ["07:00-09:00", "Breakfast (school)", "Breakfast (hotel)", "Breakfast (hotel)"],
      ["09:00-20:00", "Departure", "Departure", "Departure"],
    ],
  },
];

/* ── Old 2025 organizing committee ── */
const oldOrgCommittee = [
  { name: "To'raboy Shermatov", role: "Director of Science Olympiad Center and Chairman of the Organizing Committee", image: "/images/team/turaboy.jpg" },
  { name: "Sevara Shakirova", role: "Vice Director of the Agency of Specialized Educational Institutions", image: "/images/team/sevara.jpg" },
  { name: "Akromxo'ja Umarxodjayev", role: "Head of the event organization Department", image: "/images/team/akrom.jpg" },
  { name: "Jo'rabek Jangirov", role: "Head of the Web & Social Networks and Content Department", image: "/images/team/jurabek.jpg" },
  { name: "Xujamov Inom", role: "Head of IT and technical Department", image: "/images/team/inom.jpg" },
  { name: "Usmonov Oybek", role: "Head of the transport and logistics Department", image: "/images/team/oybek.jpg" },
  { name: "Davron Tuxtayev", role: "Exam preparation and supporting track", image: "/images/team/davron.jpg" },
  { name: "Murotjon Islamov", role: "Head of the Events and public relations track", image: "/images/murodbek.jpg" },
  { name: "Tamanno To'rayeva", role: "Media track", image: "/images/team/tamanno.jpg" },
  { name: "Otabek Karimov", role: "Technology and technical support track", image: "/images/team/otabek.jpg" },
  { name: "Dadaxanov Oqiljon", role: "Software engineer", image: "/images/team/akilhan.jpeg" },
  { name: "Ruxsora Toirova", role: "Lead Specialist", image: "/images/team/ruxsora.webp" },
];

/* ── Old 2025 gallery images ── */
const galleryImages = [
  "/2025/1.jpg", "/2025/3.jpg", "/2025/4.jpg", "/2025/5.jpg",
  "/2025/9.jpg", "/2025/10.jpg", "/2025/11.jpg", "/2025/12.jpg",
  "/2025/13.jpg", "/2025/14.jpg", "/2025/15.jpg", "/2025/16.jpg",
  "/2025/17.jpg", "/2025/18.jpg", "/2025/19.jpg", "/2025/20.jpg",
  "/2025/21.jpg", "/2025/22.jpg", "/2025/23.jpg", "/2025/30.jpg",
];

/* ── Old 2025 videos ── */
const videos = [
  { src: "https://alxorazmiy.nyc3.cdn.digitaloceanspaces.com/0504%20(1)(2).mp4", title: "Al-Khwarizmi International Olympiad 2025" },
  { src: "https://alxorazmiy.nyc3.cdn.digitaloceanspaces.com/malasia.mp4", title: "Malaysian Team Interview" },
  { src: "https://alxorazmiy.nyc3.cdn.digitaloceanspaces.com/0506(2).mp4", title: "Tajikistan and Kyrgyzstan Team Interview" },
  { src: "https://alxorazmiy.nyc3.cdn.digitaloceanspaces.com/07-05-25-eng.mp4", title: "Belarus and Turkiye Team Interview" },
  { src: "https://alxorazmiy.nyc3.cdn.digitaloceanspaces.com/0507%20(2)(1).mp4", title: "KHIMIO 2025: The Journey Begins!" },
  { src: "https://alxorazmiy.nyc3.cdn.digitaloceanspaces.com/0509(1).mp4", title: "KHIMIO 2025: First Round in Motion" },
];

/* ── Collapsible section component ── */
function Section({ title, defaultOpen = false, children }: { title: string; defaultOpen?: boolean; children: React.ReactNode }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-white rounded-xl shadow-lg mb-6 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        {open ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      {open && <div className="px-6 pb-6">{children}</div>}
    </div>
  );
}

export default function Khimio2025() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      {/* Hero */}
      <div className="relative h-[50vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
        <div className="relative z-20 text-center text-white">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            KHIMIO 2025
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            3rd Al-Khwarizmi International Mathematics and Informatics Olympiad
          </motion.p>
          <motion.p
            className="text-lg mt-2 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            May 7-13, 2025 | Tashkent, Uzbekistan
          </motion.p>
        </div>
      </div>

      {/* Stats */}
      <div className="py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">205</div>
            <p className="text-gray-600">Participants</p>
            <p className="text-sm text-gray-400">From 9 countries</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">110</div>
            <p className="text-gray-600">Medals Awarded</p>
            <p className="text-sm text-gray-400">Gold, Silver, and Bronze</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">7</div>
            <p className="text-gray-600">Unforgettable Days</p>
            <p className="text-sm text-gray-400">Of competition and cultural exchange</p>
          </div>
        </div>
      </div>

      {/* Content sections */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        {/* About */}
        <Section title="About KHIMIO 2025" defaultOpen>
          <p className="text-gray-600 leading-relaxed mb-4">
            The 3rd Al-Khwarizmi International Mathematics and Informatics Olympiad was
            successfully held from May 7 to 13, 2025, in Tashkent, Uzbekistan. This was
            the first edition to feature competition in two disciplines: Mathematics and
            Informatics.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            202 participants from teams representing Turkiye, Azerbaijan, Belarus,
            Malaysia, Kazakhstan, Kyrgyzstan, Tajikistan, and Turkmenistan competed
            in this prestigious event.
          </p>
          <div className="bg-blue-50 rounded-lg p-4 text-sm text-gray-700">
            <p><strong>Venue:</strong> Specialized School named after Muhammad Al-Khwarizmi (Tashkent, Mahtumkuli Street, 1A)</p>
            <p><strong>Participant Accommodation:</strong> School</p>
            <p><strong>Jury & Team Leader Accommodation:</strong> Rakat Komfort Hotel</p>
            <p><strong>Organizer:</strong> Science Olympiad Center</p>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link href="/results" className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition-colors">
              View Results
            </Link>
            <Link href="/problems" className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg text-sm hover:bg-indigo-50 transition-colors">
              View Problems
            </Link>
          </div>
        </Section>

        {/* Organizing Committee */}
        <Section title="Organizing Committee (2025)">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {oldOrgCommittee.map((member, i) => (
              <div key={i} className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-2 rounded-full overflow-hidden">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <p className="text-sm font-semibold text-gray-800">{member.name}</p>
                <p className="text-xs text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Programme */}
        <Section title="Programme (May 7-13, 2025)">
          <div className="space-y-6">
            {oldProgramme.map((day, i) => (
              <div key={i}>
                <h3 className="font-semibold text-gray-700 mb-2">{day.title} ({day.date})</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2 text-left">Time</th>
                        <th className="border p-2 text-left">Contestants</th>
                        <th className="border p-2 text-left">Leaders</th>
                        <th className="border p-2 text-left">Judges</th>
                      </tr>
                    </thead>
                    <tbody>
                      {day.rows.map((row, j) => (
                        <tr key={j} className="hover:bg-gray-50">
                          {row.map((cell, k) => (
                            <td key={k} className="border p-2 text-gray-600">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Regulations */}
        <Section title="Regulations (2025)">
          <div className="space-y-4 text-gray-600 text-sm">
            <div>
              <h4 className="font-semibold text-gray-800">Participants</h4>
              <p>The International Olympiad is held for students under the age of 15 (born on or after January 1, 2010) studying in general education schools.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Team Composition</h4>
              <p>Teams from foreign countries consist of 4 participants in Mathematics, 2 participants in Informatics, and 2 team leaders.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Mathematics Olympiad</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Two rounds of written exams</li>
                <li>4 tasks per round, each worth 7 points (total: 28 points per round)</li>
                <li>4 hours (240 minutes) per round</li>
                <li>Maximum total score: 56 points</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Informatics Olympiad</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Conducted over 2 days in an online system</li>
                <li>3 problems each day, worth 100 points each (total: 600 points)</li>
                <li>4 hours allotted each day</li>
                <li>Programs must be written in C++</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Medals and Awards</h4>
              <p>Gold, silver, and bronze medals awarded in a 1:2:3 ratio. Winners receive corresponding diplomas.</p>
            </div>
          </div>
        </Section>

        {/* Press Release */}
        <Section title="Press Release (2025)">
          <div className="text-gray-600 text-sm space-y-4">
            <p>
              The Al-Khwarizmi International Olympiad in Mathematics and Informatics took place
              in Tashkent, Uzbekistan, from May 7 to 13, 2025. This prestigious event gathered
              talented high school students from across the globe.
            </p>
            <p>
              More than ten countries, including Uzbekistan, Kazakhstan, Kyrgyzstan, Turkmenistan,
              Tajikistan, Azerbaijan, Belarus, Turkey, Italy, Malaysia, and South Korea participated.
            </p>
            <div className="bg-blue-50 rounded-lg p-4">
              <p><strong>Opening Ceremony:</strong> 8 May 2025, 10:00</p>
              <p><strong>Closing & Awards Ceremony:</strong> 12 May 2025, 16:00</p>
              <p><strong>Venue:</strong> Specialized School named after Muhammad Al-Khwarizmi (Tashkent, Mahtumkuli Street, 1A)</p>
            </div>
          </div>
        </Section>

        {/* Media Gallery */}
        <Section title="Media & Photos (2025)">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-700">Photo Gallery</h3>
              <a
                href="https://drive.google.com/drive/folders/1K64fxCgVyJrtYy0LLvn7n7DTMHi0CPmX?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
              >
                View All <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {galleryImages.map((src, i) => (
                <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                  <Image src={src} alt={`KHIMIO 2025 photo ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Video className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-gray-700">Videos</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {videos.map((video, i) => (
                <div key={i} className="rounded-lg overflow-hidden">
                  <video className="w-full aspect-video" controls>
                    <source src={video.src} type="video/mp4" />
                  </video>
                  <p className="text-sm font-medium text-gray-700 mt-1">{video.title}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
