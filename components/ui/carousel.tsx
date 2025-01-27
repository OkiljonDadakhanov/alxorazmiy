"use client";

import type React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  CalculatorIcon as MathOperations,
  Binary,
  Database,
} from "lucide-react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[...Array(100)].map((_, i) => (
            <span
              key={i}
              className="absolute text-white text-opacity-20 select-none"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 20 + 10}px`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              {Math.random() > 0.5 ? "01" : "∑∫∂"}
            </span>
          ))}
        </div>
      </div>
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen text-white text-center">
        <Image
          src="/logo/logowhite.PNG"
          alt="Al-Khwarazmi"
          width={150}
          height={150}
          className="rounded-lg mb-8 p-4 border-4 border-white shadow-lg"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Al-Khwarazmi International
          <br />
          Mathematical and Informatical Olympiad
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-3xl">
          Challenging young minds in mathematics and informatics on a global
          stage
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center bg-blue-500 bg-opacity-20 rounded-lg p-3">
            <MathOperations className="w-6 h-6 mr-2" />
            <span>Advanced Mathematics</span>
          </div>
          <div className="flex items-center bg-blue-500 bg-opacity-20 rounded-lg p-3">
            <Binary className="w-6 h-6 mr-2" />
            <span>Computer Science</span>
          </div>
          <div className="flex items-center bg-blue-500 bg-opacity-20 rounded-lg p-3">
            <Database className="w-6 h-6 mr-2" />
            <span>Algorithms</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/register">
            <Button
              size="lg"
              className="bg-blue-500 text-white hover:bg-blue-600 p-6"
            >
              Apply Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
