 import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import MySkills from './Components/MySkills'
import MyExperience from './Components/MyExperience'
import AboutMe from './Components/AboutMe'

 
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
      </>
   )
 }
 
 export default App