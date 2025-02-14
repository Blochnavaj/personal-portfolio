import React from 'react';
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs, DiMongodb, DiPostgresql } from "react-icons/di";
import { SiExpress, SiTypescript, SiPostman } from "react-icons/si";
import { FaJava, FaGit, FaFigma, FaDocker, FaJenkins, FaBootstrap, FaNpm } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoLogoVercel, IoLogoFirebase } from "react-icons/io5";
import { GrGraphQl } from "react-icons/gr";

const skillsData = [
  { category: "Frontend", skills: [
      { name: "HTML", icon: <i className="fa-brands fa-html5 text-4xl" /> },
      { name: "CSS", icon: <i className="fa-brands fa-css3 text-4xl" /> },
      { name: "JavaScript", icon: <i className="fa-brands fa-js text-4xl" /> },
      { name: "Typescript", icon: <SiTypescript className="text-4xl" /> },
      { name: "ReactJs", icon: <i className="fa-brands fa-react text-4xl" /> },
      { name: "NextJs", icon: <RiNextjsFill className="text-4xl" /> },
      { name: "Tailwind", icon: <RiTailwindCssFill className="text-4xl" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-4xl" /> },
    ]},
  { category: "Backend", skills: [
      { name: "NodeJs", icon: <DiNodejs className="text-4xl" /> },
      { name: "ExpressJs", icon: <SiExpress className="text-4xl" /> },
      { name: "MongoDB", icon: <DiMongodb className="text-4xl" /> },
      { name: "Postgresql", icon: <DiPostgresql className="text-4xl" /> },
      { name: "Firebase", icon: <IoLogoFirebase className="text-4xl" /> },
      { name: "GraphQl", icon: <GrGraphQl className="text-4xl" /> },
    ]},
  { category: "Other Tools", skills: [
      { name: "Git/GitHub", icon: <FaGit className="text-4xl" /> },
      { name: "VsCode", icon: <VscVscode className="text-4xl" /> },
      { name: "Figma", icon: <FaFigma className="text-4xl" /> },
      { name: "Vercel", icon: <IoLogoVercel className="text-4xl" /> },
      { name: "Docker", icon: <FaDocker className="text-4xl" /> },
      { name: "Jenkins", icon: <FaJenkins className="text-4xl" /> },
      { name: "Postman", icon: <SiPostman className="text-4xl" /> },
      { name: "Npm", icon: <FaNpm className="text-4xl" /> },
    ]},
];

function MySkills() {
  return (
    <div id='skills' className='mt-10 px-5 md:px-20'>
      <h2 className='text-center text-4xl font-bold mb-10 text-gray-800'>My Skills</h2>
      <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {skillsData.map((category) => (
          <div key={category.category} className='border rounded-xl p-5 bg-white shadow-md hover:shadow-xl transition'>
            <h3 className='text-2xl font-semibold text-center mb-5'>{category.category}</h3>
            <div className='grid grid-cols-3 gap-6'>
              {category.skills.map((skill) => (
                <div key={skill.name} className='flex flex-col items-center text-center'>
                  {skill.icon}
                  <p className='mt-2 text-sm font-medium'>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MySkills;
