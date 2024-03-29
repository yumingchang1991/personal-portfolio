import Head from 'next/head'
import styles from '../styles/Projects.module.css'
import ProjectCard from '../components/projectCard'
import projects from '../projects'

export default function Projects() {
  const projectsJSX = projects
    .map(project => {
      return (
        <ProjectCard
          project = { project }
        />
      )
    })
    .reduce((results, jsx) => {
      return [...results, jsx]
    }, [])

  return (
    <>
      <Head>
        <title>Backend Developer Portfolio by Yu-Ming Chang</title>
      </Head>
      <div className={styles['projects-container']}>
        {projectsJSX}
      </div>
    </>
  )
}