import React, { useState } from "react";
import { FaBars, FaTimes, FaUserCircle, FaDownload } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; // navbar height offset
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900 h-20 flex items-center px-6 z-50 shadow-md">
      {/* Left: Name + Profile Icon */}
      <div
  className="flex items-center cursor-pointer font-bold text-xl"
  onClick={() => handleLinkClick("hero")}
>
  <FaUserCircle className="text-3xl mr-2 text-white" />
  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
    Poornima Chowdary
  </span>
</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex ml-auto space-x-8 text-white font-medium items-center">
        <li className="cursor-pointer hover:text-blue-400" onClick={() => handleLinkClick("hero")}>
          Home
        </li>
        <li className="cursor-pointer hover:text-blue-400" onClick={() => handleLinkClick("about")}>
          About
        </li>
        <li className="cursor-pointer hover:text-blue-400" onClick={() => handleLinkClick("skills")}>
          Skills
        </li>
        <li className="cursor-pointer hover:text-blue-400" onClick={() => handleLinkClick("projects")}>
          Projects
        </li>
        <li className="cursor-pointer hover:text-blue-400" onClick={() => handleLinkClick("contact")}>
          Contact
        </li>
        <li>
          <a
            href="/resume.pdf"
            download
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            <FaDownload className="mr-2" />
             Resume
          </a>
        </li>
      </ul>

      {/* Mobile Toggle Button */}
      <div className="md:hidden ml-auto text-white text-2xl cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-20 left-0 w-full bg-gray-900 flex flex-col items-center space-y-6 py-6 md:hidden text-white font-medium">
          <li className="cursor-pointer hover:text-blue-400" onClick={() => handleLinkClick("hero")}>
            Home
          </li>
          <li className="cursor-pointer hover:text-blue-400" onClick={() => handleLinkClick("about")}>
            About
          </li>
          <li className="cursor-pointer hover:text-blue-400" onClick={() => handleLinkClick("skills")}>
            Skills
          </li>
          <li className="cursor-pointer hover:text-blue-400" onClick={() => handleLinkClick("projects")}>
            Projects
          </li>
          <li className="cursor-pointer hover:text-blue-400" onClick={() => handleLinkClick("contact")}>
            Contact
          </li>
          <li>
            <a
              href="/resume.pdf"
              download
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <FaDownload className="mr-2" />
               Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
