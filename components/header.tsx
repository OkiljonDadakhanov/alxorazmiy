"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const currentRoute = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 p-4">
      <nav>
        {/* Logo and Navigation Container */}
        <div className="flex justify-around items-center">
          {/* Logo */}
          <div className="flex items-center space-x-6">
            <Link href="/">
              <Image
                className="rounded"
                alt="Alxorazmiy logo"
                src={"/logo/logo.png"}
                width={120}
                height={120}
              />
            </Link>
            {/* Navigation Links (for large screens) */}
            <ul className="hidden lg:flex items-center space-x-9">
              <li
                className={`${
                  currentRoute == "/" ? "text-yellow-500" : "text-white"
                } hover:text-gray-400`}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className={`${
                  currentRoute == "/regulations"
                    ? "text-yellow-500"
                    : "text-white"
                } hover:text-gray-400`}
              >
                <Link href="/regulations">Regulations</Link>
              </li>
              <li
                className={`${
                  currentRoute == "/participants"
                    ? "text-yellow-500"
                    : "text-white"
                } hover:text-gray-400`}
              >
                <Link href="/participants">Participants</Link>
              </li>
              <li
                className={`${
                  currentRoute == "/programme"
                    ? "text-yellow-500"
                    : "text-white"
                } hover:text-gray-400`}
              >
                <Link href="/programme">Programme</Link>
              </li>
              <li
                className={`${
                  currentRoute == "/organization"
                    ? "text-yellow-500"
                    : "text-white"
                } hover:text-gray-400`}
              >
                <Link href="/organization">Organization</Link>
              </li>
              <li
                className={`${
                  currentRoute == "/problems" ? "text-yellow-500" : "text-white"
                } hover:text-gray-400`}
              >
                <Link href="/problems">Problems</Link>
              </li>
              <li
                className={`${
                  currentRoute == "/results" ? "text-yellow-500" : "text-white"
                } hover:text-gray-400`}
              >
                <Link href="/results">Results</Link>
              </li>
              <li
                className={`${
                  currentRoute == "/gallery" ? "text-yellow-500" : "text-white"
                } hover:text-gray-400`}
              >
                <Link href="/gallery">Gallery</Link>
              </li>
              <li className="text-white hover:text-gray-400 hover:bg-yellow-500 transition duration-300 ease-in-out bg-yellow-300 px-4 py-2 rounded-[3px]">
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="text-white lg:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Links */}
        {isMenuOpen && (
          <ul className="flex flex-col items-center space-y-4 mt-4 lg:hidden">
            <li
              className={`${
                currentRoute == "/" ? "text-yellow-500" : "text-white"
              } hover:text-gray-400`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`${
                currentRoute == "/regulations"
                  ? "text-yellow-500"
                  : "text-white"
              } hover:text-gray-400`}
            >
              <Link href="/regulations">Regulations</Link>
            </li>
            <li
              className={`${
                currentRoute == "/participants"
                  ? "text-yellow-500"
                  : "text-white"
              } hover:text-gray-400`}
            >
              <Link href="/participants">Participants</Link>
            </li>
            <li
              className={`${
                currentRoute == "/programme" ? "text-yellow-500" : "text-white"
              } hover:text-gray-400`}
            >
              <Link href="/programme">Programme</Link>
            </li>
            <li
              className={`${
                currentRoute == "/organization"
                  ? "text-yellow-500"
                  : "text-white"
              } hover:text-gray-400`}
            >
              <Link href="/organization">Organization</Link>
            </li>
            <li
              className={`${
                currentRoute == "/problems" ? "text-yellow-500" : "text-white"
              } hover:text-gray-400`}
            >
              <Link href="/problems">Problems</Link>
            </li>
            <li
              className={`${
                currentRoute == "/results" ? "text-yellow-500" : "text-white"
              } hover:text-gray-400`}
            >
              <Link href="/results">Results</Link>
            </li>
            <li
              className={`${
                currentRoute == "/gallery" ? "text-yellow-500" : "text-white"
              } hover:text-gray-400`}
            >
              <Link href="/gallery">Gallery</Link>
            </li>
            <li className="text-white hover:text-gray-400 hover:bg-yellow-500 transition duration-300 ease-in-out bg-yellow-300 px-4 py-2 rounded-[3px]">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
