import React from 'react'
import { Routes , Route , useLocation } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Projects from '../pages/projects/Projects'
import Experience from '../pages/experience/Experience'
import Contact from '../pages/contact/Contact'
import Skills from '../pages/skills/Skills'
import { AnimatePresence } from 'framer-motion'
const Routing = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    </AnimatePresence>
  )
}

export default Routing