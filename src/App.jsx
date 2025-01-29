 import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import MySkills from './Components/MySkills'
import MyExperience from './Components/MyExperience'
import AboutMe from './Components/AboutMe'
import Project from './Components/Project'
import ContactMe from './Components/ContactMe'

 
 function App() {
   return (
      <>
       <Navbar/>
       <Header/>
       <div className='lg:mt-6 md:m-auto'>
      <MySkills/>
    </div>
    <MyExperience/>
    <AboutMe/>
    <Project/>
    <ContactMe/>
      </>
   )
 }
 
 export default App