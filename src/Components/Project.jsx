import React from 'react'
import { projectDetails } from '../assets/data'
import { RxExternalLink } from "react-icons/rx";


function Project() {
  return (
    <div className='bg-black' id='projects'>
      <div className='flex justify-center items-center mt-3  '>
        <h1 className='text-white font-light lg:mt-9 text-6xl mt-6'>My  <span className='text-white font-bold'>Projects</span></h1>
      </div>

      <div>
        {
          projectDetails.map((project, index) => (
            <div key={project.id} className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center my-6`}>

              <img className={`w-[250x] h-[350px] md:w-auto p-4 mx-auto  ${index % 2 === 0 ? "md:p-6" : ""
                }`} src={project.image} alt="" />
              <div className='space-y-6 md:p-4 pl-4'>
                <p className='text-white  font-bold text-3xl '>{project.number}</p>
                <p className='text-white font-bold text-3xl  '>{project.name}</p>
                <p className='text-zinc-500'>{project.description}</p>
                <a className='text-white  hover:text-gray-600' target='_blank' href={project.link}>
                  <RxExternalLink className='mt-5  w-12 h-12 ' />
                </a>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Project