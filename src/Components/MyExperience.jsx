import React from 'react'
import { workdata } from '../assets/data.js'
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { motion } from "framer-motion";



function MyExperience() {
  return (
    <>

      <div className='bg-black mt-6'>
        {/* Tittle section  */}
        <div className='grid justify-center items-center md:mt-4 pt-6 '>
          <h1 className='text-white text-4xl font-light'>My <span className='font-bold'>Experience</span></h1>
        </div>


        {/* Work Experience Section */}
        <div className="mt-6 grid gap-6 md:p-14 p-5">
          {workdata.map((item) => (
            <div key={item.id} className="p-4 border rounded-lg shadow-md text-white">
              <div className="md:flex md:justify-between md:items-center grid gap-3">
                <h2 className="text-3xl font-bold md:ml-2">{item.company_name}</h2>
                <p className="text-sm text-zinc-300 md:ml-2">{item.duration}</p>
              </div>
              <h3 className="text-lg font-semibold mt-2 md:ml-2">{item.position}</h3>

              {/* Display points line by line */}
              <ul className="mt-3 space-y-2">
                {item.points && item.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    {/* Framer Motion for the animated arrow */}
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
                    <p className="ml-2 text-zinc-300">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MyExperience