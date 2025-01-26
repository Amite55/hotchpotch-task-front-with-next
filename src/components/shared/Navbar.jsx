"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import icon from '../../../acetes/logo.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className="bg-black text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Image src={icon} width={100} height={100} alt="hotchpotch icon" />
  
          {/* Menu for larger screens */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-400">
              Demos
            </a>
            <a href="#" className="hover:text-gray-400">
              About
            </a>
            <a href="#" className="hover:text-gray-400">
              Blog
            </a>
            <a href="#" className="hover:text-gray-400">
              Pages
            </a>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </div>
  
          {/* Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-2 border rounded-md hover:bg-gray-800">
              Sign in
            </button>
            <button className="px-4 py-2 rounded-md bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] hover:from-[#5C7FFF] hover:to-[#CB5CFF] duration-300">
              Get Started Free
            </button>
          </div>
  
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              id="menu-toggle"
              className="focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
  
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden px-4 py-4 bg-gray-900 space-y-2"
          >
            <a href="#" className="block py-2 hover:text-gray-400">
              Demos
            </a>
            <a href="#" className="block py-2 hover:text-gray-400">
              About
            </a>
            <a href="#" className="block py-2 hover:text-gray-400">
              Blog
            </a>
            <a href="#" className="block py-2 hover:text-gray-400">
              Pages
            </a>
            <a href="#" className="block py-2 hover:text-gray-400">
              Contact
            </a>
          </div>
        )}
      </nav>
    );
};

export default Navbar;