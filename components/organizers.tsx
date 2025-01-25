"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Organizers() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
      <div className="bg-[#0a192f] text-white p-6 md:p-9 mb-6 md:mb-8">
        <h1 className="text-center text-3xl md:text-5xl font-semibold">
          Organizers
        </h1>
      </div>
      <div
        className="flex flex-wrap justify-center items-center gap-6 py-6 md:gap-8 md:py-8"
        data-aos="fade-right"
      >
        {/* Card 1 */}
        <div className="card bg-white rounded-lg shadow-lg w-56 h-72 md:w-64 md:h-80 flex flex-col items-center p-4 md:p-6 transform transition-transform hover:scale-105 hover:bg-gray-100 cursor-pointer">
          <div className="flex flex-grow justify-center items-center">
            <Image
              alt="logo"
              src="/logo/maktabgacha.png"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-white rounded-lg shadow-lg w-56 h-72 md:w-64 md:h-80 flex flex-col items-center p-4 md:p-6 transform transition-transform hover:scale-105 hover:bg-gray-100 cursor-pointer">
          <div className="flex flex-grow justify-center items-center">
            <Image
              alt="logo"
              src="/logo/agentlik.png"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-white rounded-lg shadow-lg w-56 h-72 md:w-64 md:h-80 flex flex-col items-center p-4 md:p-6 transform transition-transform hover:scale-105 hover:bg-gray-100 cursor-pointer">
          <div className="flex flex-grow justify-center items-center">
            <Image
              alt="logo"
              src="/logo/olympic.png"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
