import React from 'react'
import Title from '../../components/title/Title'
import { motion } from 'framer-motion'
import "./about.css"
const About = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}} 
    exit={{opacity: 1}}
    transition={{duration: 0.3}} className='about-me'>
       <Title title="About me" subtitle="Hello! I'm Lucky Singh, a passionate Frontend Developer with 5 years of experience in development , design and Optimizations of the web applications and I am dedicated to delivering exceptional results that exceed expectations." />
       <div className='personal-info flex flex-x-between'>
          <div className='infobox'><span>Name</span> Lucky Singh</div>
          <div className='infobox'><span>Profile</span> Front end Developer</div>
          <div className='infobox'><span>Experience</span> 5 Years</div>
          <div className='infobox'><span>Email</span> Ls170693@gmail.com</div>
          <div className='infobox'><span>nationality</span> Indian </div>
          <div className='infobox'><span>Company</span> Looking for new opportunity</div>
          <div className='infobox'><span>phone</span> +91 7976645391</div>
          <div className='infobox'><span>Languages</span> English , Hindi </div>
          <div className='infobox'><span>Education</span> MCA , BCA </div>
       </div>
    </motion.div>
  )
}

export default About