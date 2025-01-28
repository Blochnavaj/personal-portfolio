import React from 'react'
import { workdata } from '../assets/data.js'

function MyExperience() {
   return (
    <>
    
      <div className='bg-black mt-6'>
        {/* Tittle section  */}
        <div className='grid justify-center items-center md:mt-4 pt-6 '>
          <h1 className='text-white text-4xl font-light'>My <span className='font-bold'>Experience</span></h1>
        </div>


        {/* Work Experience Section */}
        <div className="mt-6 grid gap-6 md:p-14 p-5 ">
          {workdata.map((item) => (
            <div key={item.id} className="p-4 border rounded-lg shadow-md text-white">
             <div className='md:flex md:justify-between  md:items-center grid gap-3'>
             <h2 className="text-3xl  font-bold md:ml-2  ">{item.company_name}</h2>
             <p className="text-sm text-zinc-300 md:ml-2  ">{item.duration}</p>
             </div>
              <h3 className="text-lg font-semibold mt-2 md:ml-2">{item.position}</h3>
              <p className="text-zinc-300 mt-2 md:ml-2">{item.description}</p>
              <p className='text-zinc-300 text-md mt-2 md:ml-2'><span className='font-semibold text-lg md:text-2xl'>Tech Use :</span> {item.Tech_Use}</p>
            </div>
          ))}
        </div>


      </div>
    </>
  )
}

export default MyExperience