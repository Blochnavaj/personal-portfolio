import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="flex md:justify-between items-center mt-4 m-3 xl:justify-between ">
        <div className="ml-6">
          <h1 className="text-3xl font-bold text-black hover:text-blue-500 cursor-pointer">
            NAVAJ
          </h1>
        </div>

        <div className="hidden md:flex">
          <ul className="flex gap-5 list-none">
            <li className='cursor-pointer'>
              <Link
                to="about"
                smooth={true}
                duration={600}
                className="text-black font-semibold hover:text-blue-500"
              >
                About Me
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="text-black font-semibold hover:text-blue-500"
              >
                Skills
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="text-black font-semibold hover:text-blue-500"
              >
                Projects
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-black font-semibold hover:text-blue-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="hidden md:flex group">
            <button className="bg-black text-white px-4 py-2 cursor-pointer rounded-md font-semibold w-full transition duration-300 ease-in-out active:scale-105 shadow-md hover:shadow-zinc-700 hover:shadow-2xl">
              Resume
            </button>
          </div>

          <div onClick={toggleNav} className="right-8 top-6 absolute md:hidden">
            {nav ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
          </div>
        </div>

        {/* Mobile Menu */}
        {nav && (
          <div className="md:hidden bg-black mt-[4rem] w-2/3 m-auto absolute top-0 left-0 py-6 px-4 right-0 flex justify-center items-center">
            <ul className="flex flex-col gap-3 list-none  ">

              <li className='cursor-pointer border border-gray-400 p-2  w-[13.25rem] flex justify-center items-center'>
                <Link
                  to="about"
                  smooth={true}
                  duration={600}
                  className="text-white font-semibold hover:text-blue-500"
                >
                  About Me
                </Link>
              </li>
              <li className='cursor-pointer border border-gray-400 p-2  w-[13.25rem] flex justify-center items-center'>
                <Link
                  to="skills"
                  smooth={true}
                  duration={500}
                  className="text-white font-semibold hover:text-blue-500"
                >
                  Skills
                </Link>
              </li>
              <li className='cursor-pointer border border-gray-400 p-2  w-[13.25rem] flex justify-center items-center'>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="text-white font-semibold hover:text-blue-500"
                >
                  Projects
                </Link>
              </li>
              <li className='cursor-pointer border border-gray-400 p-2  w-[13.25rem] flex justify-center items-center'>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-white font-semibold hover:text-blue-500"
                >
                  Contact
                </Link>
              </li>


              <a href="#"   >
              <button className="bg-zinc-700 text-white px-4 py-2 cursor-pointer rounded-md font-semibold w-full transition duration-300 ease-in-out active:scale-105 shadow-md hover:shadow-zinc-700 hover:shadow-2xl">
              Resume
            </button>
              </a>
            </ul>
          </div>
        )}


      </div>
    </>
  );
}

export default Navbar;
