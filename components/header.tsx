"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ContactModal from "./contact-modal";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header: React.FC = () => {
  const currentRoute = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
                src={"/logo/logowhite.png"}
                width={150}
                height={150}
                priority
              />
            </Link>
            {/* Navigation Links (for large screens) */}
            <ul className="hidden lg:flex items-center space-x-9 text-[20px]">
              <li
                className={`${
                  currentRoute == "/" ? "text-yellow-500" : "text-white"
                } hover:text-gray-400`}
              >
                <Link href="/">Home</Link>
              </li>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-gray-800 text-white px-4 text-1xl py-2 rounded-lg hover:bg-gray-700 transition-colors">
                      III Al-Khwarizmi IMIO
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="w-64">
                      <ul className="shadow-md rounded-lg p-2 space-y-2 w-full">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/organization"
                              className="block px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer w-full whitespace-nowrap"
                            >
                              Organizing Committee
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/organization"
                              className="block px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer w-full whitespace-nowrap"
                            >
                              Scientific Committee
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/programme"
                              className="block px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer w-full whitespace-nowrap"
                            >
                              Program
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <li
                className={`${
                  currentRoute == "/participants"
                    ? "text-yellow-500"
                    : "text-white"
                } hover:text-gray-400`}
              >
                <Link href="/partnership">Partnership</Link>
              </li>
              <li
                className={`${
                  currentRoute == "/programme"
                    ? "text-yellow-500"
                    : "text-white"
                } hover:text-gray-400`}
              >
                <Link href="/programme">Uzbekistan</Link>
              </li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-gray-800 text-white px-4 text-1xl py-2 rounded-lg hover:bg-gray-700 transition-colors">
                      About/history Al-Khwarizmi IMIO
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="w-72">
                      <ul className="shadow-md rounded-lg p-2 space-y-2 w-full">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/history/2023"
                              className="block px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer w-full whitespace-nowrap"
                            >
                              I- Al-Khwarizmi IMIO 2023
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/history/2024"
                              className="block px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer w-full whitespace-nowrap"
                            >
                              II- Al-Khwarizmi IMIO 2024
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-gray-800 text-white px-4 text-1xl py-2 rounded-lg hover:bg-gray-700 transition-colors">
                      Results/Problems
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="w-64">
                      <ul className="shadow-md rounded-lg p-2 space-y-2 w-full">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/results/2023"
                              className="block px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer w-full whitespace-nowrap"
                            >
                              I- Al-Khwarizmi IMIO 2023
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/results/2024"
                              className="block px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer w-full whitespace-nowrap"
                            >
                              II- Al-Khwarizmi IMIO 2024
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <li
                className={`${
                  currentRoute == "/results" ? "text-yellow-500" : "text-white"
                } hover:text-gray-400`}
              >
                <Link href="/results">News/Media</Link>
              </li>

              <li onClick={openModal}>
                <ContactModal isOpen={isModalOpen} onClose={closeModal} />
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
            {/* Mobile menu items remain the same */}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
