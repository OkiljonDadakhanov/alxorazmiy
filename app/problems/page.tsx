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
        <div className="mx-auto mt-6 sm:mt-8 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
          {/* Problem Rows */}
          <div className="grid grid-cols-[1fr_auto] items-center gap-4 p-4 bg-gray-100 rounded-lg">
            <h1 className="text-lg sm:text-xl">
              The collection of problems from the Al-Khwarizmi 2024 Olympiad
            </h1>

            <Link href="/problems/2024.pdf">
              <Button
                variant="secondary"
                className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300"
              >
                Download <FaDownload className="ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-[1fr_auto] items-center gap-4 p-4 mt-4 bg-gray-100 rounded-lg">
            <h1 className="text-lg sm:text-xl">
              The collection of problems from the Al-Khwarizmi 2023 Olympiad
            </h1>
            <Link href="/problems/2023.pdf">
              <Button
                variant="secondary"
                className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300"
              >
                Download <FaDownload className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* More Problem Rows */}
        <div className="mx-auto mt-6 sm:mt-8 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
          <div className="grid grid-cols-[1fr_auto] items-center gap-4 p-4 bg-gray-100 rounded-lg">
            <h1 className="text-lg sm:text-xl">Problems (Official)</h1>
            <Button
              variant="secondary"
              className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300"
            >
              Download <FaDownload className="ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-[1fr_auto] items-center gap-4 p-4 mt-4 bg-gray-100 rounded-lg">
            <h1 className="text-lg sm:text-xl">Solutions</h1>
            <Button
              variant="secondary"
              className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300"
            >
              Download <FaDownload className="ml-2" />
            </Button>
          </div>
        </div>

        {/* Country Rows */}
        <div className="mx-auto mt-6 sm:mt-8 p-4 bg-gray-100 rounded-lg max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mb-6">
          {["Ukraine", "Uzbekistan", "Russia", "Germany"].map((country) => (
            <div
              key={country}
              className="grid grid-cols-[1fr_auto] items-center gap-4 p-4 mt-4 first:mt-0"
            >
              <h1 className="text-lg sm:text-xl">{country}</h1>
              <Button
                variant="secondary"
                className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300"
              >
                Download <FaDownload className="ml-2" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
