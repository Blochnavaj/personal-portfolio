 import React from 'react';

function Header() {
  return (
    <section className="mt-24 text-center py-10 px-4">
      <p className="text-lg md:text-xl font-semibold text-gray-600">I am</p>
      <h1 className="text-4xl md:text-5xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
        Navaj Bloch
      </h1>
      <h2 className="text-3xl md:text-5xl font-extrabold mt-3 text-gray-900">Software Developer</h2>

      <div className="flex justify-center gap-6 mt-6 text-3xl text-gray-700">
        <a href="#" className="hover:text-orange-500 transition"><i className="fa-brands fa-facebook"></i></a>
        <a href="https://www.linkedin.com/in/bloch-navaj" target='_blank' rel="noopener noreferrer" className="hover:text-orange-500 transition"><i className="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/Blochnavaj" target='_blank' rel="noopener noreferrer" className="hover:text-orange-500 transition"><i className="fa-brands fa-github"></i></a>
      </div>
    </section>
  );
}

export default Header;
