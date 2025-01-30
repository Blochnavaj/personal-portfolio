import React from 'react';
 

import {
  RiNextjsFill, RiTailwindCssFill
} from "react-icons/ri";
// import {
//   TbBrandThreejs
// } from "react-icons/tb";
import {
  DiNodejs, DiMongodb
} from "react-icons/di";
import {
  SiExpress
} from "react-icons/si";
import {
  FaJava, FaGit, FaFigma
} from "react-icons/fa";
import {
  VscVscode
} from "react-icons/vsc";
import {
  IoLogoVercel
} from "react-icons/io5";
import { FaDocker } from "react-icons/fa";
import { FaJenkins } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { GrGraphQl } from "react-icons/gr";
import { FaNpm } from "react-icons/fa";





 


// Skills data
const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: <i className="fa-brands fa-html5 text-4xl" /> },
      { name: "CSS", icon: <i className="fa-brands fa-css3 text-4xl" /> },
      { name: "JavaScript", icon: <i className="fa-brands fa-js text-4xl" /> },
      { name: "Typescript", icon: <SiTypescript  className="text-4xl" />  },
      { name: "ReactJs", icon: <i className="fa-brands fa-react text-4xl" /> },
      { name: "NextJs", icon: <RiNextjsFill className="text-4xl" /> },
      // { name: "ThreeJs", icon: <TbBrandThreejs className="text-4xl" /> },
      { name: "Tailwind", icon: <RiTailwindCssFill className="text-4xl" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-4xl" /> },
      { name: "jQuery", icon: <DiJqueryLogo className="text-4xl" /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "NodeJs", icon: <DiNodejs className="text-4xl" /> },
      { name: "ExpressJs", icon: <SiExpress className="text-4xl" /> },
      { name: "MongoDB", icon: <DiMongodb className="text-4xl" /> },
      { name: "Java", icon: <FaJava className="text-4xl" /> },
      { name: "Postgresql", icon: <DiPostgresql className="text-4xl" /> },
      { name: "Firebase", icon: <IoLogoFirebase className="text-4xl" /> },
      { name: "GraphQl", icon: <GrGraphQl className="text-4xl" /> },
     
    ],
  },
  {
    category: "Other Tools",
    skills: [
      { name: "Git/GitHub", icon: <FaGit className="text-4xl" /> },
      { name: "VsCode", icon: <VscVscode className="text-4xl" /> },
      { name: "Figma", icon: <FaFigma className="text-4xl" /> },
      { name: "Vercel", icon: <IoLogoVercel className="text-4xl" /> },
      { name: "Docker", icon: <FaDocker  className="text-4xl" /> },
      { name: "Jenkins", icon: <FaJenkins className="text-4xl" /> },
      { name: "Postman", icon: <SiPostman className="text-4xl" /> },
      { name: "Npm", icon: <FaNpm className="text-4xl" /> },
     
    ],
  },
];

function MySkills() {
 
  return (
    <>
     
        <div className='2xl:grid 2xl:justify-around lg:mt-14' id='skills' >
          <div className="mt-7 flex justify-center items-center md:mt-[6rem] ">
            <h1 className="text-4xl text-black font-light md:mt-7">
              My<span className="font-bold">Skills</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:flex md:justify-between md:items-center m-auto">
            {skillsData.map((category) => (
              <div key={category.category} className="md:w-[30rem] m-4">
                <div className="mt-3 border border-black p-3 h-[20rem]">
                  <h1 className="text-4xl font-black text-center">{category.category}</h1>
                  <div className="grid grid-cols-3 gap-4 mt-[2rem]">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="flex flex-col items-center">
                        {skill.icon}
                        <p className="text-sm font-semibold">{skill.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
 
    </>

  );
}

export default MySkills;
