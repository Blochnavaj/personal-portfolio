 import React from 'react';
import { projectDetails } from '../assets/data';
import { RxExternalLink } from "react-icons/rx";
import { motion } from 'framer-motion';

function Project() {
  return (
    <section id='projects' className='bg-white py-20 px-5 md:px-16'>
      <div className='text-center mb-14'>
        <h1 className='text-4xl md:text-5xl font-extrabold text-gray-800'>
          My <span className='text-orange-500'>Projects</span>
        </h1>
        <p className='text-gray-600 mt-2 text-lg max-w-2xl mx-auto'>
          Explore the real-world solutions I've built using modern tech like MERN, Next.js, and Tailwind.
        </p>
      </div>

      <div className='grid gap-20'>
        {projectDetails.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} items-center gap-8 lg:gap-14 bg-orange-50 border border-orange-200 rounded-xl shadow-md p-6 lg:p-10`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.name}
              className='w-full lg:w-1/2 h-64 lg:h-80 object-cover rounded-lg shadow-md'
            />

            {/* Project Content */}
            <div className='w-full lg:w-1/2'>
              <h2 className='text-sm uppercase tracking-widest text-orange-500 font-semibold mb-2'>{project.number}</h2>
              <h3 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4'>{project.name}</h3>
              <p className='text-gray-700 text-base leading-relaxed mb-6'>{project.description}</p>
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 text-white bg-orange-500 px-5 py-2.5 rounded-lg font-medium hover:bg-orange-600 transition'
              >
                <RxExternalLink className='w-5 h-5' /> View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Project;