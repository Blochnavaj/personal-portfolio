import React from 'react'

function Header() {
    return (
        <div className='md:mt-11 flex flex-col justify-center items-center text-center py-2'>
            <p className='text-lg md:text-xl font-semibold'>I am</p>
            <h1 className='text-3xl md:text-5xl font-bold mt-2 text-orange-500'>Navaj Bloch</h1>
            <h2 className='text-4xl md:text-6xl font-extrabold mt-3'>Software Developer</h2>

            <div className='flex gap-5 mt-6 text-2xl md:text-4xl'>
                <a href="#" className='  hover:text-gray-400 transition-all duration-300 '>
                    <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/in/bloch-navaj" target='_blank' className='  hover:text-gray-400 transition-all duration-300        '>
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/Blochnavaj" target='_blank' className='hover:text-gray-400 transition-all duration-300'>
                    <i className="fa-brands fa-github"></i>
                </a>
               
            </div>
        </div>
    )
}

export default Header
