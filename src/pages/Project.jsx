import React from "react";
import { Link } from "react-router-dom";
import ProjectData from "./ProjectData";
const Project = () => {
  return (
    <div className="container py-4">
      <h2 className="mb-4">My Projects</h2>
      <div className="d-md-flex align-items-start flex-wrap justify-content-between">
        {ProjectData.map(({ id, projectName, projectLogo }) => (
          <div className="card procard mb-3" key={id}>
            <img src={projectLogo} alt={projectName} />
            <Link to={`/project/project-details/${id}`}>
              <h2>{projectName}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
