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

const menuItems = [
  { label: "Home", href: "/" },
  {
    label: "III Al-Khwarizmi IMIO",
    submenu: [
      { label: "Organizing Committee", href: "/organization" },
      { label: "Scientific Committee", href: "/organization" },
      { label: "Program", href: "/programme" },
      { label: "Regulation", href: "/regulations" },
    ],
  },
  { label: "Partnership", href: "/partnership" },
  { label: "Uzbekistan", href: "/uzbekistan" },
  {
    label: "About/History Al-Khwarizmi IMIO",
    submenu: [
      { label: "I- Al-Khwarizmi IMIO 2023", href: "/history/2023" },
      { label: "II- Al-Khwarizmi IMIO 2024", href: "/history/2024" },
    ],
  },
  {
    label: "Results/Problems",
    submenu: [
      { label: "I- Al-Khwarizmi IMIO 2023", href: "/problems" },
      { label: "II- Al-Khwarizmi IMIO 2024", href: "/results" },
    ],
  },
  { label: "News/Media", href: "/results" },
];

const Header: React.FC = () => {
  const currentRoute = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="bg-gray-800 p-6">
      <nav>
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              className="rounded"
              alt="Alxorazmiy logo"
              src="/logo/logowhite.png"
              width={180}
              height={180}
              priority
            />
          </Link>
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-6 text-[18px] text-white">
            {menuItems.map((item, index) =>
              item.submenu ? (
                <NavigationMenu key={index}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-gray-800 text-white px-4 text-1xl py-2 rounded-lg hover:bg-gray-700 transition-colors">
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="w-64">
                        {item.submenu.map((sub, subIndex) => (
                          <NavigationMenuLink
                            asChild
                            key={subIndex}
                            className="w-full"
                          >
                            <Link
                              href={sub.href}
                              className="block px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer w-full whitespace-nowrap"
                            >
                              {sub.label}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              ) : (
                <li
                  key={index}
                  className={`${
                    currentRoute === item.href
                      ? "text-yellow-500"
                      : "hover:text-gray-400"
                  }`}
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              )
            )}
          </ul>
          <ContactModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
          {/* Mobile Menu Button */}
          <button
            className="text-white lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="flex flex-col items-center space-y-4 mt-4 lg:hidden text-white">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.submenu ? (
                  <details className="text-center">
                    <summary className="cursor-pointer py-2">
                      {item.label}
                    </summary>
                    <ul className="flex flex-col space-y-2">
                      {item.submenu.map((sub, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={sub.href}
                            className="block px-4 py-2 hover:bg-gray-700 rounded-md"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-4 py-2 ${
                      currentRoute === item.href
                        ? "text-yellow-500"
                        : "hover:text-gray-400"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
