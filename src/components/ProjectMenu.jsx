import React from 'react';
import {BadgeButton} from './BadgeButton';

const ProjectMenu = ({projects, selectProject, filterProjects, resetFilter, techUsed}) => {
  const sortedTech = Object.keys(techUsed).sort((a, b) => techUsed[b] - techUsed[a])

  return (
    <div id="ProjectMenu">
      <p>
        <BadgeButton value="Reset" onClick={resetFilter} /> 
        { sortedTech.map( tech => (
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