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
    <header className="bg-[#0a1e3f] p-6 relative z-[9999]">
      <nav>
        <div className="flex justify-between items-center">
          <Logo />

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-6 text-[18px] text-white">
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
          <ul className="flex flex-col items-center space-y-4 mt-4 lg:hidden text-white">
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
