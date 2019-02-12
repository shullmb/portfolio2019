import React from 'react';
import {BadgeButton} from './BadgeButton';

const ProjectMenu = ({projects, selectProject, filterProjects, resetFilter, techUsed}) => {

  return (
    <div id="ProjectMenu">
      <p>
        <BadgeButton value="Reset" onClick={resetFilter} /> 
        {Object.keys(techUsed).map( tech => (
            <BadgeButton value={tech}
                         num={techUsed[tech]}
                         key={tech} 
                         onClick={() => filterProjects(tech)}
                         />
          ))}
      </p>
      <ul>
        {projects.map( project => (
            <li key={project.title} onClick={ () => selectProject(project)}>
              {project.title}
            </li>
          ))}
      </ul>
    </div>

  )

}

export default ProjectMenu;