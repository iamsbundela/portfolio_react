import React from "react";
import "./styles/Project.css";

function Project({ project }) {
  return (
    <div className="project">
      <div className="project__info">
        <img src={project.image} alt="Project" className="project__img" />
        <h3 className="project__head">{project.title}</h3>
      </div>
      <div className="project__content">
        <p className="project__desc">{project.description}</p>
        <div className="project__links">
          <a href={project.github} className="github-link">
            Check Code
          </a>
          <a href={project.preview} className="live-link">
            Live Preview
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
