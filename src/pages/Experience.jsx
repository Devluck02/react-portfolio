import React from 'react'

const Experience = () => {
  const ExperienceData = [
    {
      id: 1,
      companyName: "Z1 TECH",
      role: "Front End Developer",
      duration: "1.6 Years",
    },
    {
      id: 2,
      companyName: "FreeKaaMaal.com",
      role: "Front End Developer",
      duration: "3.2 Years",
    },
    {
      id: 3,
      companyName: "Xavient Digital",
      role: "Intern",
      duration: "6 Month",
    },
  ];
  return (
    <div className="container py-3">
       <h2 className="mb-4">My Experience</h2>
       <div className="d-md-flex align-items-start flex-wrap justify-content-between">
       {ExperienceData.map(({ id, companyName, role, duration}) => (
          <div className="card experience mb-3" key={id}>
             <h2>{companyName}</h2>
             <p>{role}</p>
             <p>{duration}</p>
          </div>
        ))}
       </div>
    </div>
  )
}

export default Experience