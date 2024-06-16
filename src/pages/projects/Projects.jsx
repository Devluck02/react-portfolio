import React from 'react'
import { motion } from 'framer-motion'
import { useState,useEffect } from 'react'
import projectData from "../../data/projectdata.json"
import "./project.css"
import Title from '../../components/title/Title'
const Projects = () => {
  const [projectdata, setProjectData] = useState([]);
  useEffect(() => {
    setProjectData(projectData);
  }, []);
  return (
    <motion.div
     initial={{opacity: 0}}
     animate={{opacity: 1}} 
     exit={{opacity: 1}}
     transition={{duration: 0.3}}
     className='project-box'
    >
    <Title title="My Projects" subtitle="Projects that Define My Expertise." />
    <div className='flex-wrap flex flex-x-between flex-y-baseline'>
    {projectdata.map(item => (
        <div className='project-card' key={item.id}>
          <div className='pro-thumb'>
             <img src={item.projectImg} alt="icon" />
          </div>
          <div className='pro-content'>
             <h1>{item.projectName}</h1>
             <p>{item.proDescription}</p>
             <span>{item.techStack}</span>
             <a className='btn' href={item.projectLink} target='_blank'>Visit Link</a>
          </div>
        </div>
      ))}
    </div>
    </motion.div>
  )
}

export default Projects