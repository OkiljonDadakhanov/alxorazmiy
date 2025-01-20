import { Circle, Square, Triangle } from "lucide-react";
// import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative min-h-[400px] w-full bg-[#0a192f] overflow-hidden">
      {/* Geometric Background Shapes */}
      <div className="absolute inset-0 opacity-20">
        {/* Circles */}
        <Circle className="absolute text-teal-500/20 h-20 w-20 top-1/4 left-1/4" />
        <Circle className="absolute text-teal-500/20 h-16 w-16 top-3/4 right-1/3" />
        <Circle className="absolute text-teal-500/20 h-24 w-24 bottom-1/4 left-2/3" />

        {/* Squares */}
        <Square className="absolute text-teal-500/20 h-16 w-16 top-1/3 right-1/4 rotate-12" />
        <Square className="absolute text-teal-500/20 h-20 w-20 bottom-1/3 left-1/3 -rotate-12" />

        {/* Triangles */}
        <Triangle className="absolute text-teal-500/20 h-20 w-20 top-1/2 right-1/2 rotate-45" />
        <Triangle className="absolute text-teal-500/20 h-16 w-16 bottom-1/4 right-1/4 -rotate-12" />
      </div>

      {/* Content Container */}
      <div className="relative flex flex-col items-center justify-center py-16 px-4 text-center">
        {/* Logo */}

        {/* Welcome Text */}
        <div className="space-y-4 max-w-3xl mx-auto text-gray-300">
          <p className="text-lg sm:text-xl">
            It is our great pleasure to welcome you to the{" "}
            <span className="font-semibold">
              Alxorazmiy Mathematical Olympiad
            </span>
          </p>
          <p className="text-lg sm:text-xl">
            We hope that you will find your stay enjoyable and exciting.
          </p>
        </div>

        {/* Copyright */}
        <div className="absolute bottom-8 text-gray-400 text-sm">
          <p>
            Copyright © {new Date().getFullYear()}{" "}
            <span className="font-medium">
              Alxorazmiy Mathematical Olympiad
            </span>{" "}
            - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
