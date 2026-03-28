"use client";

import { memo, useState, useCallback } from "react";
import { menuItems } from "@/constants/menu-items";
import Logo from "../components/ui/header-logo";
import MobileMenuButton from "../components/ui/mobile-menu-btn";
import DesktopMenuItem from "./desktop-menu";
import MobileMenuItem from "./mobile-menu";
import ContactModal from "./contact-modal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className="sticky top-0 z-[9999] bg-white/85 backdrop-blur-md border-b border-slate-200/70 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2.5">
          <Logo />

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-1 text-[15px] font-medium text-slate-800">
            {menuItems.map((item, index) => (
              <DesktopMenuItem key={index} item={item} />
            ))}
          </ul>

          <ContactModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />

          <MobileMenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="mt-2 flex flex-col items-center space-y-3 rounded-2xl bg-white/95 py-4 lg:hidden text-slate-800 border border-slate-200 shadow-lg">
            {menuItems.map((item, index) => (
              <li key={index}>
                <MobileMenuItem item={item} />
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default memo(Header);
