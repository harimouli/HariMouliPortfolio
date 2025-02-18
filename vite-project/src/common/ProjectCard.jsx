
import './ProjectCard.css';
import { useTheme } from './ThemeContext';
import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => {
  const { title, imageUrl, projectUrl, githubUrl } = project;
  const { theme } = useTheme();
  console.log(theme); 
  const buttonClass = theme === 'dark' ? 'light-btn' : 'dark-btn';
  const btnText1 = theme === "dark" ? "light-text" : "dark-text"

  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
        <h3 className="heading">{title}</h3>
      <div className="projects-links-container">
        <button className={`${buttonClass} ${btnText1}`}>
          <a href={projectUrl} target="_blank" rel="noreferrer">
            View Project
          </a>
        </button>
        <button className={`${buttonClass}  ${btnText1}`} >
          <a   href={githubUrl} target="_blank" rel="noreferrer">
            View Code
          </a>
        </button>
      </div>
    </div>
  );
};
ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    projectUrl: PropTypes.string.isRequired,
    githubUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
