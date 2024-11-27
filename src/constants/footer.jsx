import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-center">
          <h2 className="text-2xl font-bold mb-4 text-pink-400">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition duration-300">
              <FaFacebook size={28} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition duration-300">
              <FaTwitter size={28} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition duration-300">
              <FaInstagram size={28} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition duration-300">
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center md:items-center">
          <h2 className="text-2xl font-bold mb-4 text-pink-400">Contact Us</h2>
          <p className="flex items-center justify-center space-x-3 mb-2">
            <FaEnvelope />
            <span className="text-lg">bettylizzie25@gmail.com <br/> saradarko22@gmail.com</span>
          </p>
          <p className="flex items-center justify-center space-x-3">
            <FaPhone />
            <span className="text-lg">+233-541425963 <br/> +233-552684435</span>
          </p>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center md:items-center">
          <h2 className="text-2xl font-bold mb-4 text-pink-400">Our Location</h2>
          <p className="flex items-center justify-center space-x-3">
            <FaMapMarkerAlt />
            <span className="text-lg">Aluguntugui St, East Legon, Ghana</span>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center border-t border-pink-300 pt-6 text-pink-400">
        <p>© 2024 flowBestie. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
