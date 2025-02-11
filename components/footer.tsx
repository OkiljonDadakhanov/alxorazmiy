import {
  Circle,
  Square,
  Triangle,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { FaTelegram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      className="relative min-h-[400px] w-full bg-[#0a192f] overflow-hidden"
      id="contact"
    >
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
      <div className="relative flex flex-col justify-center items-center min-h-full py-16 px-4 text-center">
        {/* Welcome Text */}
        <div className="space-y-4 max-w-3xl mx-auto text-gray-300">
          <p className="text-lg sm:text-xl">
            It is our great pleasure to welcome you to the{" "}
            <span className="font-semibold">
              Al-Khwarizmi International Mathematics and Informatics Olympiad
            </span>
          </p>
          <p className="text-lg sm:text-xl">
            We hope that you will find your stay enjoyable and exciting.
          </p>
        </div>

        {/* Contact & Social Media Links */}
        <div className="mt-8 text-gray-300 space-y-4">
          <div className="flex space-x-8 justify-center">
            {/* Social Media Icons */}
            <Link
              href="https://www.instagram.com/fan_olimpiadalari_markazi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
            >
              <Instagram className="h-6 w-6 text-teal-500 hover:text-teal-400" />
            </Link>
            <Link href="http://bit.ly/olimpdep" target="_blank">
              <Youtube className="h-6 w-6 text-teal-500 hover:text-teal-400" />
            </Link>
            <Link href="https://t.me/Fan_olimpiadalari_M" target="_blank">
              <FaTelegram className="h-6 w-6 text-teal-500 hover:text-teal-400" />
            </Link>
            <Link
              href="https://www.facebook.com/share/14NAmhu2D5/?mibextid=wwXIfr"
              target="_blank"
            >
              <Facebook className="h-6 w-6 text-teal-500 hover:text-teal-400" />
            </Link>
          </div>

          {/* Contact Information */}
          <div className="mt-6">
            <p className="text-sm">
              <span className="font-semibold">Contact Us: </span>
              <Link
                href="mailto:khwarizmi@olympcenter.uz"
                className="text-teal-500 hover:text-teal-400"
              >
                khimio@olympcenter.uz
              </Link>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="absolute bottom-8 text-gray-400 text-sm w-full text-center">
          <p className="">
            <span className="font-medium">
              Al-Khwarizmi International Mathematics and Informatics Olympiad.
              ©Copyright 2023
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
