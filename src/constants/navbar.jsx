import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/flowBestie.png';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 bg-opacity-80 w-full px-6 py-4 fixed top-0 left-0 z-10 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={logoImage} alt="Your Logo" className="h-16 w-auto transition-transform duration-300 transform hover:scale-110" />
          </Link>
        </div>

        {/* Centered Links */}
        <div className="flex-grow flex justify-center">
          <div className="flex space-x-8">
            <Link to="/period-calculator" className="text-white font-semibold text-lg hover:text-pink-300 transition duration-300">
              Period Calculator
            </Link>
            <Link to="/period-resources" className="text-white font-semibold text-lg hover:text-pink-300 transition duration-300">
              Resources
            </Link>
            <Link to="/about" className="text-white font-semibold text-lg hover:text-pink-300 transition duration-300">
              About Us
            </Link>
          </div>
        </div>

        {/* Right-aligned Links */}
        <div className="flex-shrink-0 flex space-x-6">
          <Link to="/sign-in" className="text-white font-semibold text-lg hover:text-pink-300 transition duration-300">
            Sign In
          </Link>
          <Link to="/sign-up" className="text-white font-semibold text-lg hover:text-pink-300 transition duration-300">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
