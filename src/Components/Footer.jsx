import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer 
      className="bg-black text-white py-6 text-center flex flex-col items-center justify-center gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl font-semibold">Bloch Navaj</h2>
      <div className="flex gap-6">
        <a href="https://www.linkedin.com/in/bloch-navaj" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-all duration-300">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/Blochnavaj" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-all duration-300">
          <FaGithub size={24} />
        </a>
        <a href="mailto:navaj.bloch22@gmail.com" className="hover:text-gray-400 transition-all duration-300">
          <FaEnvelope size={24} />
        </a>
      </div>
      <p className="text-sm text-gray-400 mt-2">&copy; 2025 Bloch Navaj. All Rights Reserved.</p>
    </motion.footer>
  );
}

export default Footer;
