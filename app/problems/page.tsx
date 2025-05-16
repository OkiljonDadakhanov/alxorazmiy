"use client";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa6";
import Link from "next/link";

export default function Problems() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
      <div className="bg-[#0a192f] text-white p-6 sm:p-9 mb-6 sm:mb-8">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold">
          Problems
        </h1>
      </div>

      <div data-aos="fade-up">
        <div className="mx-auto mt-6 sm:mt-8 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg space-y-4">
          {/* Previous years */}
          <DownloadRow
            title="The collection of problems from the Al-Khwarizmi 2024 Olympiad"
            link="/problems/2024.pdf"
          />
          <DownloadRow
            title="The collection of problems from the Al-Khwarizmi 2023 Olympiad"
            link="/problems/2023.pdf"
          />

          {/* New 2025 problem sets */}
          <DownloadRow
            title="The collection of problems from the Al-Khwarizmi 2025 Olympiad informatics problems in English"
            link="/problems/2025-informatics-en.pdf"
          />
          <DownloadRow
            title="The collection of problems from the Al-Khwarizmi 2025 Olympiad informatics problems in Uzbek"
            link="/problems/2025-informatics-uz.pdf"
          />
          <DownloadRow
            title="The collection of problems from the Al-Khwarizmi 2025 Olympiad mathematics problems in English"
            link="/problems/2025-math-en.pdf"
          />
          <DownloadRow
            title="The collection of problems from the Al-Khwarizmi 2025 Olympiad mathematics problems in Russian"
            link="/problems/2025-math-ru.pdf"
          />
          <DownloadRow
            title="The collection of problems from the Al-Khwarizmi 2025 Olympiad mathematics problems in Uzbek"
            link="/problems/2025-math-uz.pdf"
          />
        </div>
      </div>
    </section>
  );
}

// Reusable component
function DownloadRow({ title, link }: { title: string; link: string }) {
  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-4 p-4 bg-gray-100 rounded-lg">
      <h1 className="text-lg sm:text-xl">{title}</h1>
      <Link href={link}>
        <Button
          variant="secondary"
          className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300"
        >
          Download <FaDownload className="ml-2" />
        </Button>
      </Link>
    </div>
  );
}
