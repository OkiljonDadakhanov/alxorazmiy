import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link href="/">
            <p className="text-2xl font-bold">Alxorazmiy</p>
          </Link>
        </div>
        <nav className="mb-4 md:mb-0">
          <ul className="flex space-x-4">
            <li>
              <Link href="/about">
                <p className="hover:underline">About Us</p>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <p className="hover:underline">Services</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p className="hover:underline">Contact</p>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <Link href="https://facebook.com" target="_blank">
            <p rel="noopener noreferrer" className="hover:underline">
              Facebook
            </p>
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <p rel="noopener noreferrer" className="hover:underline">
              Twitter
            </p>
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <p rel="noopener noreferrer" className="hover:underline">
              Instagram
            </p>
          </Link>
        </div>
      </div>
      <div className="text-center mt-4">
        &copy; {new Date().getFullYear()} MyCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
