 import React from 'react';
import about_me from '../assets/about_me.svg';
import { motion } from 'framer-motion';

function AboutMe() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-orange-50 to-white py-20 px-6 md:px-20"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center gap-14">
        {/* Text Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1 mb-3 bg-orange-100 text-orange-500 font-semibold rounded-full text-sm">
            Who am I?
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            About <span className="text-orange-500">Me</span>
          </h2>

          <p className="text-lg text-gray-700 mb-5 leading-relaxed">
            I'm a passionate <span className="font-semibold text-orange-600">Full-Stack Developer</span> specializing in React.js, Node.js,
            and modern web technologies. I focus on creating clean, intuitive,
            and scalable digital experiences that users love.
          </p>

          <p className="text-lg text-gray-700 mb-5 leading-relaxed">
            Since <strong>2022</strong>, I've been mastering tools like Next.js, TypeScript, Tailwind CSS, and Supabase,
            building visually appealing, high-performance applications that solve real-world problems.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            I enjoy solving complex problems through seamless web apps. Follow
            me on <span className="text-blue-500 font-semibold">Twitter</span> or explore my work on{' '}
            <span className="text-purple-600 font-semibold">GitHub</span> to learn more.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            className="w-72 h-72 md:w-96 md:h-96 object-contain rounded-lg drop-shadow-xl"
            src={about_me}
            alt="About Me Illustration"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMe;
