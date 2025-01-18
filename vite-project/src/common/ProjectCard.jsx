import React from 'react';
import './ProjectCard.css';
import { useTheme } from './ThemeContext';
const ProjectCard = ({ project }) => {
  const { title, skills, imageUrl, projectUrl, githubUrl } = project;
  const { theme } = useTheme();
  console.log(theme);
  const buttonClass = theme === 'dark' ? 'light-btn' : 'dark-btn';
  const btnText = theme === 'dark' ? "light-text" : "dark-text";

  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
        <h3 className="heading">{title}</h3>
      <div className="project-skills">
        {skills.map((skill, index) => (
          <span className="skill-item" key={index}>
            {skill}
          </span>
        ))}
      </div>
      <div className="projects-links-container">
        <button className={`project-btn ${buttonClass}`}>
          <a href={projectUrl} target="_blank" rel="noreferrer">
            View Project
          </a>
        </button>
        <button className={`project-btn ${buttonClass}`}>
          <a   href={githubUrl} target="_blank" rel="noreferrer">
            View Code
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
