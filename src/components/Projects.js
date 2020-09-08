import React from "react";
import "./styles/Projects.css";
import Project from "./Project";
import projects from "./ProjectList";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__head">
        <h3>Project I have Done</h3>
      </div>
      <div className="projects__container">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
