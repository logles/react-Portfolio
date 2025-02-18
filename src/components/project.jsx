import React from "react";

function Project({ title, description, link, linkTwo, image }) {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
      </div>
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-button"
        >
          Git Code
        </a>
        <a
          href={linkTwo}
          target="_blank"
          rel="noopener noreferrer"
          className="project-buttonTwo"
        >
          Deployment →
        </a>
      </div>
    </div>
  );
}

export default Project;
