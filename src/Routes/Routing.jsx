import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Project from '../pages/Project';
import Experience from '../pages/Experience';
import Contact from "../pages/Contact"
import ProjectDetails from '../pages/ProjectDetails';
const Routing = () => {
  return (
    <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/" element={<Project />} />
          <Route path="/project/project-details/:id" element={<ProjectDetails />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  )
}

export default Routing