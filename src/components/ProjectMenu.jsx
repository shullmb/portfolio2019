import React from 'react';
import projectsData from '../data/projects';


const ProjectMenu = ({projects, selectProject, filterProjects, resetFilter, techUsed}) => {

  return (
    <div id="ProjectMenu">
      <p>
        <button onClick = {resetFilter}> 
          Reset
        </button>
        {
          Object.keys(techUsed).map( tech => (
            <button key={tech}
              onClick = { () => {
                filterProjects(tech)
              }}> 
              {tech} 
            </button>
          ))
        }
      </p>
      <ul>
        {
          projects.map( project => (
            <li key={project.title} onClick={ () => selectProject(project)}>
              {project.title}
            </li>
          ))
        }

      </ul>
    </div>

  )

}

export default ProjectMenu;