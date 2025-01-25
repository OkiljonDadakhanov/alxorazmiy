"use client";
import React from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export default function Organizers() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section>
      <div className="bg-[#0a192f] text-white p-9 mb-8">
        <h1 className="text-center text-5xl font-semibold">Organizers</h1>
      </div>
      <div
        className="flex justify-center items-center space-x-8 py-8"
        data-aos="fade-right"
      >
        <div className="card bg-white rounded-lg shadow-lg w-64 h-80 flex flex-col items-center p-6 transform transition-transform hover:scale-105 hover:bg-gray-100 cursor-pointer">
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

        <div className="card bg-white rounded-lg shadow-lg w-64 h-80 flex flex-col items-center p-6 transform transition-transform hover:scale-105 hover:bg-gray-100 cursor-pointer">
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

        <div className="card bg-white rounded-lg shadow-lg w-64 h-80 flex flex-col items-center p-6 transform transition-transform hover:scale-105 hover:bg-gray-100 cursor-pointer">
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
