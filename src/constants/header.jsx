import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaGoogle, FaPinterestP } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      {/* Top bar */}
      <div className="bg-gray-900 text-white flex justify-between items-center py-2 px-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <FaPhoneAlt />
            <span>(012) - 3456789</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaMapMarkerAlt />
            <span>1234 Cafficic, California</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaClock />
            <span>08 AM - 10 PM</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <FaFacebookF />
          <FaTwitter />
          <FaGoogle />
          <FaPinterestP />
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <div className="flex items-center space-x-2">
            <img src="path/to/logo.png" alt="Logo" className="h-10" />
            <h1 className="text-2xl font-bold text-yellow-600">WEBUILDER</h1>
          </div>
          <nav className="flex space-x-8">
            <a href="#home" className="text-yellow-600 font-semibold">HOME</a>
            <a href="#projects">PROJECTS</a>
            <a href="#services">SERVICES</a>
            <a href="#about">ABOUT US</a>
            <a href="#blog">BLOG</a>
            <a href="#contact">CONTACT</a>
          </nav>
          <div className="relative">
            <button className="text-yellow-600 relative">
              <span className="material-icons">shopping_cart</span>
              <span className="absolute top-0 right-0 bg-yellow-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">02</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
