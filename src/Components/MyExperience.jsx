import React from 'react';
import { workdata } from '../assets/data.js';
import { RiArrowRightDoubleLine } from 'react-icons/ri';
import { motion } from "framer-motion";


function MyExperience() {
  return (
    <div className='bg-black py-8 mt-5'>
      <h1 className='text-white text-4xl font-light text-center mb-8'>My <span className='font-bold text-orange-500'>Experience</span></h1>

      <div className='grid gap-8 md:px-16 px-5'>
        {workdata.map((item) => (
          <div key={item.id} className='p-6 border border-gray-700 rounded-xl text-white bg-gray-900 hover:bg-gray-800 transition'>
            <div className='md:flex md:justify-between md:items-center mb-4'>
              <h2 className='text-2xl font-bold'>{item.company_name}</h2>
              <p className='text-sm text-gray-400'>{item.duration}</p>
            </div>
            <h3 className='text-lg font-medium mb-3'>{item.position}</h3>
            <ul className='space-y-2'>
              {item.points && item.points.map((point, index) => (
                <li key={index} className='flex items-start'>
                    <motion.div
                      className="mt-1"
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    >
                      <RiArrowRightDoubleLine className="w-5 h-5 text-zinc-600" />
                    </motion.div>
                  <p className='ml-2 text-gray-300'>{point}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyExperience;
