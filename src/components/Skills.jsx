import React from "react";
import SkillsData from "./SkillsData";
const Skills = () => {
  return (
    <div className="container skills-wrapper pt-md-4 pb-5">
      <div className="d-md-flex align-items-start">
        <h2 className="skill-title w-25 pb-3"><span>Tech</span><br/>Stack</h2>
        <div className="d-flex align-items-start flex-wrap justify-content-end skill-card-box gap-4 w-75">
          {SkillsData.map(({id,skill,image}) => (
            <div className="card" key={id}>
              <img src={image} alt={skill} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
