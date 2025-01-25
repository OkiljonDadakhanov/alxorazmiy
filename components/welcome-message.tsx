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
      className="flex flex-col items-center justify-center min-h-screen bg-blue-50 text-gray-800 font-sans px-4"
      data-aos="fade-up"
    >
      {/* Logo */}
      <Image
        src="/logo/logoblue.png"
        alt="Alxorazmiy logo"
        width={300}
        height={300}
        className="w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 object-contain"
      />

      {/* Heading */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mt-4 md:mt-6 lg:mt-8 px-4">
        Welcome to
        <br />
        Al-Khwarazmi International Mathematical and Informatical Olympiad.
      </h1>

      {/* Paragraph */}
      <p className="text-sm md:text-base lg:text-lg text-center text-gray-500 mt-4 px-4 leading-relaxed max-w-3xl">
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
