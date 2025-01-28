import React from 'react';
import about_me from '../assets/about_me.svg';

function AboutMe() {
    return (
        <div id="about" className="container mx-auto px-4 py-8"  >
            <div className="lg:flex md:grid ">
                <img
                    className="md:w-[500px] md:h-[500px] md:pr-8 md:mt-6 w-[343px] h-[343px]  flex justify-center items-center m-auto"
                    src={about_me}
                    alt="About Me Illustration"
                />

                <div className="grid justify-center items-center gap-10 m-auto  text-wrap md:text-wrap">

                    <div className=''>
                        <h2 className="text-5xl font-light text-center md:text-left md:mb-4 md:pl-6 md:pr-6 mt-5  ">
                            About <span className="text-black font-bold ">Me</span>
                        </h2>
                    </div>
                    <p className="text-gray-700 text-justify  md:pl-6 md:pr-6">
                        I'm a passionate web developer with a strong focus on full-stack development (React.js & Node.js). I love combining the technical and creative aspects of digital products to craft seamless, user-centric experiences. Writing clean, efficient code while ensuring pixel-perfect design and top-notch user experience is my primary goal.

                    </p>
                    <p className="text-gray-700 text-justify md:pl-6 md:pr-6  ">
                        My journey in Software Engineer started in 2022, where I began experimenting with basic web technologies. Over time, I honed my skills in React, Node.js, and other modern technologies. Today, I am actively building innovative web applications using tools like Next.js, TypeScript, Tailwind CSS, and Supabase, with a focus on creating both visually appealing and technically robust products.

                    </p>
                    <p className="text-gray-700 text-justify md:pl-6 md:pr-6 ">
                        Every day, I work on coding and developing web applications that not only solve real-world problems but also provide seamless, user-friendly experiences. I thrive on combining my technical expertise with creativity, ensuring that my projects are both visually appealing and highly functional. You
                        can follow me on Twitter, where I share tech-related bites and build in public, or you
                        can check out my work on GitHub.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
