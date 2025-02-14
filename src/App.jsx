import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import MySkills from './Components/MySkills'
import MyExperience from './Components/MyExperience'
import AboutMe from './Components/AboutMe'
import Project from './Components/Project'
import ContactMe from './Components/ContactMe'
import Footer from './Components/Footer'


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <MySkills />
      <MyExperience />
      <AboutMe />
      <Project />
      <ContactMe />
      <Footer/>
    </>
  )
}

export default App