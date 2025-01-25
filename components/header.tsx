"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const currentRoute = usePathname();

  return (
    <header className="bg-gray-800 p-6">
      <nav>
        <ul className="flex justify-between items-center  min-h-[90px]">
          <Link href="/">
            <Image
              className="rounded"
              alt="Alxorazmiy logo"
              src={"/logo/logo.png"}
              width={120}
              height={120}
            />
          </Link>
          <li
            className={`${
              currentRoute == "/" ? "text-yellow-500" : "text-white"
            } hover:text-gray-400`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`${
              currentRoute == "/regulations" ? "text-yellow-500" : "text-white"
            } hover:text-gray-400`}
          >
            <Link href="/regulations">Regulations</Link>
          </li>
          <li
            className={`${
              currentRoute == "/participants" ? "text-yellow-500" : "text-white"
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
              currentRoute == "/organization" ? "text-yellow-500" : "text-white"
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

          <li className="text-white hover:text-gray-400 hover:bg-yellow-500 transition duration-800 ease-in-out bg-yellow-300 px-4 py-2 rounded-[3px]">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
