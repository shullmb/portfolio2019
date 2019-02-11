import React from 'react';
import projectsData from '../data/projects';


const ProjectMenu = ({projects, setProjects, selectProject}) => {
  const techSkills = projects.reduce((result, project) => {
    project.tech.forEach( skill => {
      result[skill] = result[skill] ? result[skill] + 1 : 1;
    })
    return result
  }, {})


  return (
    <div id="ProjectMenu">
      <p>
        <span onClick = {() => setProjects(projectsData)}> reset Filter </span>
        {Object.keys(techSkills).map( skill => (
          <span key={skill}
            onClick = { () => setProjects( projects.filter( project => project.tech.includes(skill)))}
          > {skill} {techSkills[skill]} </span>
        ))}
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