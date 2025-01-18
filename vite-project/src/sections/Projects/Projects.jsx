
import styles from './ProjectsStyles.module.css';

import nxtwatchyoutube from '../../assets/nxtwatchyoutube.jpg';

import nxttrendz from '../../assets/nxttrendz.png';

import todo from '../../assets/todo.png';

import jobby from '../../assets/jobby.png';

import ProjectCard from '../../common/ProjectCard';

const myProjects = [ 
    {
        title: "NxtWatch",
        skills: ["React Js", "Javascript", "Rest API", "CSS", "HTML"],
        imageUrl: nxtwatchyoutube,
        projectUrl: "https://mouli1nxtwatch.ccbp.tech/",
        githubUrl: "https://github.com/harimouli/nxtwatch-reactjs.git"
    },
    {
        title: "NxtTrendz",
        skills: ["React Js", "Javascript", "", "Rest API", "Bootstrap"],
        imageUrl: nxttrendz,
        projectUrl: "https://nxttrendzmouli2.ccbp.tech/",
        githubUrl: "https://github.com/harimouli/nxttrendz_cart_features.git"
    },
    {
        title: "Todo App",
        skills: ["Javascript", "LocalStorage", "CSS", "HTML"],
        imageUrl: todo,
        projectUrl: "https://moulitodosapp1.ccbp.tech/",
        githubUrl: "https://moulitodosapp1.ccbp.tech/"
    },
    {
        title: "Jobby",
        skills: ["React", "Redux", "Firebase", "GitHub Jobs API"],
        imageUrl: jobby,
        projectUrl: "https://moulijobbyapp1.ccbp.tech/",
        githubUrl: "https://github.com/harimouli/jobby-app-reactjs.git"
    }

]
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
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