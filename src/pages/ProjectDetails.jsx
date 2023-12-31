import React from "react";
import { useParams } from "react-router-dom";
import ProjectData from "./ProjectData";
const ProjectDetails = () => {
  const { id } = useParams();
  const project = ProjectData.find((ele) => ele.id == id);
  return (
    
    <div className="container py-4">
      <h2 className="mb-4">Project Details</h2>
      <div className="d-md-flex justify-content-center align-items-start gap-3" key={id}>
        <div className="img-card w-25">
          <img src={project.projectLogo} alt={project.projectName} />
        </div>
        <div className="project-desc">
           <h2>Project Name - {project.projectName}</h2>
           <p><b>Description - </b>{project.projectDesc}</p>
           <p>Tech stack - {project.techstack}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
