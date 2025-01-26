import React from 'react'
import header_image from '../assets/header_image.png'

function Header() {
    return (
        <>
            <div className='  '>
                <div className=' lg:grid md:justify-center md:text-center   lg:justify-start lg:items-start grid items-center justify-center    '>
                    <div className=' lg:flex lg:right-9 lg:absolute ml-[-2.25rem] mt-[1.5rem] lg:w-[889px] lg:h-[500px]    md:grid md:justify-center md:items-center     '>
                        <img className='w-full h-full ' src={header_image} alt="" />
                    </div>
                    <div className=' mt-3  text-3xl grid justify-center items-center lg:text-6xl lg:mt-[4rem] 2xl:px-16 lg:ml-5 lg:leading-[4.5rem]  md:text-5xl        '>
                        <p className=' font-light '> Hello I'am  <span className='font-black'>Navaj Bloch.</span></p>
                         
                        <p className=''><span className='font-black'> Software</span > <span className='special-font'> Developer</span> </p>  
                        <p className=''>
                            Based In <span className='font-black '>India.</span>
                        </p>
                    </div>
                </div>
                <div className="sm:text-wrap lg:mt-[2rem] lg:ml-2.5 pl-2 pr-2 lg:text-balance md:text-balance lg:m-auto lg:text-sm md:mt-[1rem] md:grid md:justify-center md:text-center lg:text-start lg:justify-start lg:items-start  lg:w-1/2 md:w-3/4">
  I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
</div>


                <div className='flex gap-5 md:mt-6 lg:ml-6 text-4xl md:flex md:justify-center md:items-center lg:justify-start lg:items-start justify-center items-center mt-4' > 
                    <a href="#" className='border p-3 border-black hover:bg-black hover:text-white '>
                        <i   class="fa-brands fa-facebook  "></i>
                    </a>

                    <a  href="https://www.linkedin.com/in/bloch-navaj" target='_blank'  className='border p-3 border-black hover:bg-black hover:text-white '>
                        <i class="fa-brands fa-linkedin"></i>
                    </a>

                    <a href="https://github.com/Blochnavaj" target='_blank'  className='border p-3 border-black hover:bg-black hover:text-white '>
                        <i class="fa-brands fa-github"></i>

                    </a>

                    <a href="#"  className='border p-3 border-black hover:bg-black hover:text-white '>
                        <i class="fa-brands fa-square-x-twitter"></i>
                    </a>


                </div>

            </div>
        </>
    )
}

export default Header