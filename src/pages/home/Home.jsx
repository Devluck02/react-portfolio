import React from 'react'
import Intro from '../../components/intro/Intro'
import { motion } from 'framer-motion'
const Home = () => {
  return (
    <motion.div
     initial={{opacity: 0}}
     animate={{opacity: 1}} 
     exit={{opacity: 1}}
     transition={{duration: 0.3}}
    >
        <Intro />
        
    </motion.div>
  )
}

export default Home