import React, {useState} from 'react';
import ProjectMenu from './ProjectMenu';
import ProjectViewport from './ProjectViewport';
import projectsData from '../data/projects';


const ProjectContainer = props => {
  const [projects, setProjects] = useState(projectsData);
  const [currentView, setCurrentView] = useState(projects)

  const techSkills = projects.reduce((result, project) => {
      project.tech.forEach(skill => {
        result[skill] = result[skill] ? result[skill] + 1 : 1;
      })
      return result
    }, {})
  
  const filterProjects = (skill) => {
    let filtered = projects.filter(project => project.tech.includes(skill))
    setProjects(filtered)
    setCurrentView(filtered)
  }
  
  return (
    <div id="ProjectContainer">
      <ProjectMenu projects={projects} 
                   techSkills={techSkills}
                   selectProject={setCurrentView}
                   setProjects={setProjects} 
                   filterProjects={filterProjects}
                   />
      <ProjectViewport currentView={currentView} />
    </div>
  )
}

export default ProjectContainer;