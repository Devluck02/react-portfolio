import React from 'react'
import { motion } from 'framer-motion'
import Title from '../../components/title/Title'
import skillsdata from "../../data/skillsdata.json"
import { useState,useEffect } from 'react'
import "./skills.css"
const Skills = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(skillsdata);
  }, []);
  return (
    <motion.div
    className='skills-wrapper'
    initial={{opacity: 0}}
    animate={{opacity: 1}} 
    exit={{opacity: 1}}
    transition={{duration: 0.3}}>
    
    <Title title="My Skills" subtitle="Technologies and tools that I use to create such awesome websites."/>
    <h4 className='dev-title'>🚀 Front End Development</h4>
    <div className='flex-wrap flex flex-x-between flex-y-baseline'>
    {data.map(item => (
        <div className='skill-card' key={item.id}>
          <img src={item.imgUrl} alt="icon" />
          <h1>{item.skill}</h1>
        </div>
      ))}
    </div>
    </motion.div>
  )
}

export default Skills;