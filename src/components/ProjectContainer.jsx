import React, {useState} from 'react';
import ProjectMenu from './ProjectMenu';
import ProjectViewport from './ProjectViewport';
import projectsData from '../data/projects';


const ProjectContainer = props => {
  const [projects, setProjects] = useState(projectsData);
  const [currentView, setCurrentView] = useState(projects)
  
  return (
    <div id="ProjectContainer">
      <ProjectMenu projects={projects} handleClick={setCurrentView} />
      <ProjectViewport currentView={currentView} />
    </div>
  )
}

export default ProjectContainer;