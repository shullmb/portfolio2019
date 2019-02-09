import React from 'react';

const ProjectMenu = ({projects, handleClick}) => {
  return (
    <div id="ProjectMenu">
      <ul>
        {
          projects.map( project => (
            <li key={project.title} onClick={ () => handleClick(project)}>
              {project.title}
            </li>
          ))
        }
      </ul>
    </div>

  )

}

export default ProjectMenu;