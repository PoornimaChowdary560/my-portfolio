// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-gray-400 py-8 "
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Poornima Maddipati. All rights reserved.
        </p>

        <div className="flex space-x-6">
          <a
            href="https://github.com/PoornimaChowdary560"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/poornima-maddipati-869236293"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="mailto:poornimamaddipati25@gmail.com"
            aria-label="Email"
            className="text-gray-400 hover:text-red-500 transition-colors duration-300 transform hover:scale-110"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
