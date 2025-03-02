import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaCloudDownloadAlt } from "react-icons/fa";
import Resume from "../assets/Resume.pdf"

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
    <>
      <div className="flex md:justify-between items-center mt-4 m-3 xl:justify-between py-3 ">
         
          <h1 className="text-4xl text-bold ml-12 tracking-wider "> <span className='bg-orange-500 text-white px-0.5 py-0.5 rounded-md'>N</span>AVAJ</h1>
      

        <div className="hidden md:flex">
          <ul className="flex gap-5 list-none">
            {navLinks.map((link) => (
              <li key={link.id} className='cursor-pointer'>
                <Link to={link.id} smooth={true} duration={600} className="text-black font-semibold hover:text-amber-400" onClick={closeNav}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="hidden md:flex group">
            <a href={Resume} download="Resume.pdf" className="bg-orange-500 text-white px-4 py-2 cursor-pointer rounded-md font-semibold w-full transition duration-300 ease-in-out active:scale-105 shadow-md hover:shadow-amber-700 hover:shadow-2xl flex justify-center items-center gap-1.5">Resume <FaCloudDownloadAlt /></a>
          </div>

          <div onClick={toggleNav} className="right-8 top-6 absolute md:hidden">
            {nav ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
          </div>
        </div>

        {nav && (
          <div className="md:hidden bg-white fixed top-0 left-0 w-full h-full flex flex-col items-center z-50">
            <div className="absolute top-6 right-8 cursor-pointer text-black text-2xl" onClick={toggleNav}><i className="fa-solid fa-xmark"></i></div>
            <ul className="flex flex-col gap-6 mt-16 list-none">
              {navLinks.map((link) => (
                <li key={link.id} className='cursor-pointer border border-gray-400 px-3 py-3 w-[15rem] flex justify-center items-center'>
                  <Link to={link.id} smooth={true} duration={600} className="text-black font-semibold" onClick={closeNav}>{link.label}</Link>
                </li>
              ))}
              <button className="bg-orange-500 text-white px-6 py-3 cursor-pointer rounded-md font-semibold w-[15rem] transition duration-300 ease-in-out active:scale-105 shadow-md hover:shadow-zinc-700 hover:shadow-2xl">
                <a href={Resume} download="NavazBlochResume.pdf" className='flex justify-center items-center gap-2 hover:text-white'>Resume <FaCloudDownloadAlt /></a>
              </button>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
