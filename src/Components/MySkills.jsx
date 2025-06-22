 // MySkills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs, DiMongodb, DiPostgresql } from "react-icons/di";
import { SiExpress, SiTypescript, SiPostman } from "react-icons/si";
import { FaJava, FaGit, FaFigma, FaDocker, FaJenkins, FaBootstrap, FaNpm } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoLogoVercel, IoLogoFirebase } from "react-icons/io5";
import { GrGraphQl } from "react-icons/gr";

const skillsData = [
  { category: "Frontend", skills: [
      { name: "HTML", icon: <i className="fa-brands fa-html5 text-4xl text-orange-600" /> },
      { name: "CSS", icon: <i className="fa-brands fa-css3 text-4xl text-blue-600" /> },
      { name: "JavaScript", icon: <i className="fa-brands fa-js text-4xl text-yellow-500" /> },
      { name: "Typescript", icon: <SiTypescript className="text-4xl text-blue-500" /> },
      { name: "ReactJs", icon: <i className="fa-brands fa-react text-4xl text-cyan-500" /> },
      { name: "NextJs", icon: <RiNextjsFill className="text-4xl text-black" /> },
      { name: "Tailwind", icon: <RiTailwindCssFill className="text-4xl text-sky-400" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-4xl text-indigo-600" /> },
    ]},
  { category: "Backend", skills: [
      { name: "NodeJs", icon: <DiNodejs className="text-4xl text-green-600" /> },
      { name: "ExpressJs", icon: <SiExpress className="text-4xl text-gray-800" /> },
      { name: "MongoDB", icon: <DiMongodb className="text-4xl text-green-700" /> },
      { name: "Postgresql", icon: <DiPostgresql className="text-4xl text-blue-800" /> },
      { name: "Firebase", icon: <IoLogoFirebase className="text-4xl text-yellow-400" /> },
      { name: "GraphQl", icon: <GrGraphQl className="text-4xl text-pink-500" /> },
    ]},
  { category: "Other Tools", skills: [
      { name: "Git/GitHub", icon: <FaGit className="text-4xl text-orange-600" /> },
      { name: "VsCode", icon: <VscVscode className="text-4xl text-blue-500" /> },
      { name: "Figma", icon: <FaFigma className="text-4xl text-pink-600" /> },
      { name: "Vercel", icon: <IoLogoVercel className="text-4xl text-black" /> },
      { name: "Docker", icon: <FaDocker className="text-4xl text-blue-400" /> },
      { name: "Jenkins", icon: <FaJenkins className="text-4xl text-red-600" /> },
      { name: "Postman", icon: <SiPostman className="text-4xl text-orange-500" /> },
      { name: "Npm", icon: <FaNpm className="text-4xl text-red-600" /> },
    ]},
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

function MySkills() {
  return (
    <section id='skills' className='mt-20 px-5 md:px-20 bg-gradient-to-br from-white to-orange-50 py-16'>
      <h2 className='text-center text-5xl font-extrabold mb-12 text-gray-800'>My Skills</h2>
      <motion.div
        className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillsData.map((category) => (
          <motion.div
            key={category.category}
            variants={itemVariants}
            className='rounded-xl p-6 bg-white shadow-lg hover:shadow-xl transition-transform duration-300 border-t-4 border-orange-500'
          >
            <h3 className='text-2xl font-bold text-center mb-6 text-orange-500'>{category.category}</h3>
            <div className='grid grid-cols-3 gap-6'>
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className='flex flex-col items-center text-center hover:scale-110 transition-transform duration-200'
                  variants={itemVariants}
                >
                  {skill.icon}
                  <p className='mt-2 text-sm font-medium text-gray-700'>{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default MySkills;
