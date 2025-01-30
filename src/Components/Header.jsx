import React from 'react'
import header_image from '../assets/header_image.png'
import { motion } from 'framer-motion'

function Header() {

 
    return (
        <>
            <div className='  '>
                <div className=' lg:grid md:justify-center md:text-center   lg:justify-start lg:items-start grid items-center justify-center    '>
                    <div className=' lg:flex lg:right-9 lg:absolute ml-[-2.25rem] mt-[1.5rem] lg:w-[889px] lg:h-[500px]    md:grid md:justify-center md:items-center     '>
                        <img className='w-full h-full ' src={header_image} alt="" />
                    </div>
                    <div className='mt-3 text-3xl grid justify-center items-center lg:text-6xl lg:mt-[4rem] 2xl:px-16 lg:ml-5 lg:leading-[4.5rem] md:text-5xl'>
                        <motion.p
                            className='font-light'
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, }}
                        >
                            Hello I'am <span className='font-black'>Navaj Bloch.</span>
                        </motion.p>

                        <motion.p
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            <span className='font-black'>Software</span> <span className='special-font'>Developer</span>
                        </motion.p>

                        <motion.p
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            Based In <span className='font-black'>India.</span>
                        </motion.p>
                    </div>

                </div>
                <div className="lg:max-w-[85ch]  sm:text-wrap lg:mt-[2rem] lg:ml-2.5 pl-2 pr-2 lg:m-auto lg:text-sm md:mt-[1rem] md:grid md:justify-center md:text-center lg:text-start lg:justify-start lg:items-start break-words">
  I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
</div>



                <div className='flex gap-5 md:mt-6 lg:ml-6 text-4xl md:flex md:justify-center md:items-center lg:justify-start lg:items-start justify-center items-center mt-4'>
                    <motion.a
                        href="#"
                        className='border p-3 border-black hover:bg-black hover:text-white'
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <i class="fa-brands fa-facebook"></i>
                    </motion.a>

                    <motion.a
                        href="https://www.linkedin.com/in/bloch-navaj"
                        target='_blank'
                        className='border p-3 border-black hover:bg-black hover:text-white'
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <i class="fa-brands fa-linkedin"></i>
                    </motion.a>

                    <motion.a
                        href="https://github.com/Blochnavaj"
                        target='_blank'
                        className='border p-3 border-black hover:bg-black hover:text-white'
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <i class="fa-brands fa-github"></i>
                    </motion.a>

                    <motion.a
                        href="#"
                        className='border p-3 border-black hover:bg-black hover:text-white'
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <i class="fa-brands fa-square-x-twitter"></i>
                    </motion.a>
                </div>

            </div>
        </>
    )
}

export default Header