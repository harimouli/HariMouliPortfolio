
import styles from './ProjectsStyles.module.css';

import nxtwatchyoutube from '../../assets/nxtwatchyoutube.jpg';




import ProjectCard from '../../common/ProjectCard';

const myProjects = [ 
    {
        title: "NxtWatch",
    
        imageUrl: nxtwatchyoutube,
        projectUrl: " https://moulinxtwatch8.ccbp.tech",
        githubUrl: "https://github.com/harimouli/nxtwatch-reactjs.git"
    },
    {
        title: "NxtTrendz",
        imageUrl: "https://res.cloudinary.com/dekrcobk2/image/upload/v1739857584/nxttrendfinal.png",
        projectUrl: "https://moulinxttrendz8.ccbp.tech",
        githubUrl: "https://github.com/harimouli/nxttrendz_cart_features.git"
    },
    {
        title: "Todo App",
        imageUrl: "https://res.cloudinary.com/dekrcobk2/image/upload/v1739858092/todo.jpg",
        projectUrl: "https://moulitodosapp1.ccbp.tech/",
        githubUrl: "https://moulitodosapp1.ccbp.tech/"
    },
    {
        title: "Jobby",
        imageUrl: "https://res.cloudinary.com/dekrcobk2/image/upload/v1739857941/jobbyfinal.png",
        projectUrl: "https://moulijobbyapp1.ccbp.tech/",
        githubUrl: "https://github.com/harimouli/jobby-app-reactjs.git"
    }

]
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">My Projects</h1>
      <div className={styles.projectsContainer}>
        {myProjects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;