import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import styles from '../styles/Projects.module.css'
import ProjectCard from '../components/projectCard'
import projects from '../projects'

export default function Projects() {
  const projectsJSX = projects
    .map(project => {
      return (
        <ProjectCard
          name={project.name}
          description={project.description}
          technologies={project.technologies}
          imgUrl={project.imgUrl}
          link={project.link}
          githubUrl={project.githubUrl}
          mediumUrl={project.mediumUrl}
        />
      )
    })
    .reduce((results, jsx) => {
      return [...results, jsx]
    }, [])

  return (
    <>
      <div className={styles['projects-container']}>
        {projectsJSX}
      </div>
    </>
  )
}