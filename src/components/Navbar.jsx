"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white w-full h-20 flex items-center justify-between px-4 md:px-8 sticky top-0 z-50 shadow-lg">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-bold">Eventopia</h1>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-primary-900 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-12 h-full items-center justify-between">
            <li>
              <a href="/" className="hover:text-primary-900">
                Home
              </a>
            </li>
            <li>
              <a href="/myevents" className="hover:text-primary-900">
                My Events
              </a>
            </li>
            <li>
              <a href="/profile" className="hover:text-primary-900">
                Profile
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-primary-900">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg">
          <nav>
            <ul className="flex flex-col items-center space-y-4 py-6">
              <li>
                <a
                  href="/"
                  className="hover:text-primary-900"
                  onClick={toggleMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/myevents"
                  className="hover:text-primary-900"
                  onClick={toggleMenu}
                >
                  My Events
                </a>
              </li>
              <li>
                <a
                  href="/profile"
                  className="hover:text-primary-900"
                  onClick={toggleMenu}
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-primary-900"
                  onClick={toggleMenu}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <button
                  className="bg-primary-200 w-32 text-primary-900 px-4 py-2 rounded-md"
                  onClick={toggleMenu}
                >
                  Login
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
