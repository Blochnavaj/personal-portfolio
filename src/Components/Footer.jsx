 import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      className="bg-gradient-to-t from-black to-zinc-900 text-white py-10 px-6 text-center flex flex-col items-center gap-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl md:text-3xl font-bold tracking-wide">Bloch Navaj</h2>

      <p className="text-gray-400 max-w-xl text-sm md:text-base">
        Full Stack Developer — crafting powerful and elegant digital experiences. Let’s connect!
      </p>

      <div className="flex gap-6 mt-2">
        <a
          href="https://www.linkedin.com/in/bloch-navaj"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-orange-500 transition duration-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/Blochnavaj"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-orange-500 transition duration-300"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="mailto:navaj.bloch22@gmail.com"
          className="text-gray-300 hover:text-orange-500 transition duration-300"
        >
          <FaEnvelope size={24} />
        </a>
      </div>

      <hr className="w-1/2 border-gray-600 mt-4" />

      <p className="text-sm text-gray-500 mt-4">
        &copy; {new Date().getFullYear()} Bloch Navaj. All rights reserved.
      </p>
    </motion.footer>
  );
}

export default Footer;
