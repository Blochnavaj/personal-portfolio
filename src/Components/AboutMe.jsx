import React from 'react';
import about_me from '../assets/about_me.svg';

function AboutMe() {
  return (
    <div id="about" className="container mx-auto px-4 py-12">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="text-center lg:text-left flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            About <span className="text-orange-500">Me</span>
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            I'm a passionate full-stack web developer specializing in React.js and Node.js. I enjoy building user-centric digital experiences with clean code and pixel-perfect design.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Since 2022, I've honed my skills in modern tools like Next.js, TypeScript, Tailwind CSS, and Supabase, crafting visually appealing and technically robust applications.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            I thrive on solving real-world problems through seamless web applications. Follow me on Twitter for tech bites or explore my work on GitHub.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            className="w-64 h-64 md:w-96 md:h-96 object-contain"
            src={about_me}
            alt="About Me Illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
