import React from 'react';
import projectsData from '../data/projects';


const ProjectMenu = ({projects, setProjects, selectProject, filterProjects, techSkills}) => {

  return (
    <div id="ProjectMenu">
      <p>
        <button onClick = {() => {
            setProjects(projectsData)
            selectProject(projectsData)
          }
        }> 
          Reset
        </button>
        {
          Object.keys(techSkills).map( skill => (
            <button key={skill}
              onClick = { () => {
                filterProjects(skill)
              }}> 
              {skill} 
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