import React, {useState} from 'react';
import ProjectMenu from './ProjectMenu';
import ProjectViewport from './ProjectViewport';
import projectsData from '../data/projects';


const ProjectContainer = props => {
  const [projects, setProjects] = useState(projectsData);
  const [currentView, setCurrentView] = useState(projects)

  const techUsed = projects.reduce((used, project) => {
      project.tech.forEach(tech => {
        used[tech] = used[tech] ? used[tech] + 1 : 1;
      })
      return used
    }, {})
  
  const filterProjects = tech => {
    let filtered = projects.filter(project => project.tech.includes(tech))
    setProjects(filtered)
    setCurrentView(filtered)
  }

  const resetFilter = () => {
    setProjects(projectsData)
    setCurrentView(projectsData)
  }
  
  return (
    <div id="ProjectContainer">
      <ProjectMenu projects={projects} 
                   techUsed={techUsed}
                   selectProject={setCurrentView}
                   filterProjects={filterProjects}
                   resetFilter={resetFilter}
                   />
      <ProjectViewport currentView={currentView} />
    </div>
  )
}

export default ProjectContainer;