 import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaCloudDownloadAlt, FaBars, FaTimes } from "react-icons/fa";
import Resume from "../assets/Resume.pdf";

const navLinks = [
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

function Navbar() {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl md:text-4xl font-bold tracking-wider">
          <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-2 py-1 rounded-md">N</span>avaj
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <Link
              key={link.id}
              to={link.id}
              smooth
              duration={600}
              onClick={closeNav}
              className="text-gray-800 font-medium hover:text-orange-500 cursor-pointer transition duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Resume Button */}
        <div className="hidden md:flex">
          <a
            href={Resume}
            download
            className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-600 transition"
          >
            Resume <FaCloudDownloadAlt />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer text-gray-800" onClick={toggleNav}>
          {nav ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <div className="md:hidden fixed inset-0 bg-white flex flex-col items-center justify-center gap-6 z-40">
          {navLinks.map(link => (
            <Link
              key={link.id}
              to={link.id}
              smooth
              duration={600}
              onClick={closeNav}
              className="text-xl font-semibold text-gray-700 hover:text-orange-500"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={Resume}
            download
            className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition"
          >
            Resume <FaCloudDownloadAlt />
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
