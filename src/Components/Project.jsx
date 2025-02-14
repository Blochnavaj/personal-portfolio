import React from 'react';
import { projectDetails } from '../assets/data';
import { RxExternalLink } from "react-icons/rx";
import { motion } from 'framer-motion';

function Project() {
  return (
    <div className='bg-black py-10' id='projects'>
      <div className='flex justify-center items-center mb-10'>
        <h1 className='text-white font-light text-5xl md:text-6xl'>My <span className='font-bold '>Projects</span></h1>
      </div>

      <div className='grid gap-10 md:gap-16 px-4 md:px-10'>
        {projectDetails.map((project, index) => (
          <motion.div 
            key={project.id}
            className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center bg-zinc-800 rounded-2xl shadow-xl overflow-hidden`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              className='w-full md:w-1/2 h-[250px] md:h-[350px] object-cover' 
              src={project.image} 
              alt={project.name} 
            />

            <div className='p-6 md:p-10 text-white flex flex-col justify-between'>
              <div className='space-y-4'>
                <h2 className='text-xl md:text-2xl font-semibold'>{project.number}</h2>
                <h3 className='text-2xl md:text-3xl font-bold'>{project.name}</h3>
                <p className='text-gray-400 text-justify'>{project.description}</p>
              </div>

              <a className='mt-6 text-white flex items-center hover:text-gray-300 transition' target='_blank' href={project.link} rel="noopener noreferrer">
                <RxExternalLink className='mr-2 w-6 h-6' /> View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Project;
