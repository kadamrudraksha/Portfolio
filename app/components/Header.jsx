"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Import icons for the menu

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled ? "bg-white/10 shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-indigo-400 hover:text-indigo-500 transition-colors">
          RK
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {["Education", "Experience", "Projects", "Skills", "Contact", "Feedback"].map((item) => (
            <li key={item}>
              <Link
                href={item === "Feedback" ? "/feedback" : `#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-indigo-400 transition-colors font-medium"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-indigo-400 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md absolute top-full left-0 w-full py-4">
          <ul className="flex flex-col space-y-4 text-center">
            {["Education", "Experience", "Projects", "Skills", "Contact", "Feedback"].map((item) => (
              <li key={item}>
                <Link
                  href={item === "Feedback" ? "/feedback" : `#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-indigo-400 transition-colors font-medium text-lg"
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
