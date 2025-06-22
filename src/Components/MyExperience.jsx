 // MyExperience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { RiArrowRightDoubleLine } from 'react-icons/ri';

const workdata = [

   {
    id: 1,
    company_name: "EVU.ai",
    position: "Software Engineer Intern",
    duration: "May 2025 - Present ",
    points: [
      "Integrated AI models into internal platforms using FastAPI and PostgreSQL.",
      "Enhanced search accuracy by 60% via RAG pipeline and ElasticSearch.",
      "Wrote clean, reusable code and collaborated on backend pipelines."
    ]
  },
  {
    id: 2,
    company_name: "Pari Technologies Pvt Ltd",
    position: "Full Stack Developer (React/Node.js)",
    duration: "Feb 2025 - April 2025",
    points: [
      "Built full-stack solutions using MERN stack for scalable business applications.",
      "Led UI/UX improvements and deployed REST APIs across core services.",
      "Boosted frontend performance by 40% through modular architecture."
    ]
  }
 
 
];

const MyExperience = () => {
  return (
    <section className="bg-gradient-to-r from-orange-50 to-white py-20 px-5 md:px-20">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          My <span className="text-orange-500">Experience</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          A quick walkthrough of my journey, roles, and key responsibilities in software development.
        </p>
      </div>

      <div className="relative flex flex-col gap-12 border-l-4 border-orange-500 pl-6">
        {workdata.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-orange-400 pl-6 pr-4 py-6"
          >
            <div className="absolute -left-5 top-6 w-4 h-4 bg-orange-500 rounded-full shadow-md"></div>
            <div className="flex justify-between items-center flex-wrap mb-3">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                {item.company_name}
              </h3>
              <span className="text-sm text-gray-500 italic">{item.duration}</span>
            </div>
            <h4 className="text-md md:text-lg font-semibold text-orange-500 mb-4">
              {item.position}
            </h4>
            <ul className="list-none space-y-3">
              {item.points.map((point, i) => (
                <li key={i} className="flex items-start text-gray-700">
                  <RiArrowRightDoubleLine className="text-orange-500 mt-1 mr-2" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MyExperience;