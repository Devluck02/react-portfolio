import React from 'react'
import { motion } from 'framer-motion'
import Title from '../../components/title/Title'
import "./experience.css"
const Experience = () => {
  return (
    <motion.div
     initial={{opacity: 0}}
     animate={{opacity: 1}} 
     exit={{opacity: 1}}
     transition={{duration: 0.3}}
     className='exp-box'
    >
     <Title title="Experience" subtitle="My Professional Journey." />
     <div className='exp-wrapper'>
         <div className='flex flex-x-between flex-y-baseline'>
          <div className='exp-card'>
              <h2>Company <span>Z1 TECH</span></h2>
              <h3>Position <span>Front End Developer</span></h3>
              <p>Duration <span>1 Year 6 Month</span></p>
          </div>
          <div></div>
         </div>
         <div className='flex flex-x-between flex-y-baseline'>
         <div></div>
         <div className='exp-card'>
            <h2>Company <span>Freekaamaal</span></h2>
            <h3>Position <span>Front End Developer</span></h3>
            <p>Duration <span>3 Year 2 Month</span></p>
         </div>
         
         </div>
         <div className='flex flex-x-between flex-y-baseline'>
          <div className='exp-card'>
              <h2>Company <span>Xavient Digital</span></h2>
              <h3>Position <span>Intern</span></h3>
              <p>Duration <span>6 Month</span></p>
          </div>
          <div></div>
         </div>
     </div>
    </motion.div>
  )
}

export default Experience