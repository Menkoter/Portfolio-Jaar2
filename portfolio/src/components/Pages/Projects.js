import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of Project 1",
      image: "project1.jpg",
    },
    {
      title: "Project 2",
      description: "Description of Project 2",
      image: "project2.jpg",
    },
  ];

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
