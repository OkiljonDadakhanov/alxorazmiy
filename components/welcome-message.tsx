"use client";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

import Image from "next/image";
const WelcomeMessage: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-blue-50 text-gray-800 font-sans"
      data-aos="fade-up"
    >
      <Image
        src="/logo/logoblue.png"
        alt="Alxorazmiy logo"
        width={400}
        height={400}
      />

      <h1 className="text-4xl font-semibold text-center mb-6 mt-4 px-4 mt-5">
        Welcome to
        <br />
        Al-Khwarazmi International Mathematical and Informatical Olympiad.
      </h1>

      <p className="text-lg text-center text-gray-500 mb-4 px-4 leading-relaxed max-w-3xl mx-auto">
        It is our great pleasure to welcome you to the 28th Junior Balkan
        Mathematical Olympiad in Antalya. We are very happy to host young
        mathematics talents from different countries, as well as distinguished
        audience of academic leaders. In this olympiad, young gifted
        mathematicians will test their ingenuity in friendly competition with
        each other. We are sure that this competition will serve to advance
        friendship and collaboration between young gifted mathematicians from
        different parts of the world. We hope that you will find your stay
        pleasurable and exciting.
      </p>
    </div>
  );
};

export default WelcomeMessage;
