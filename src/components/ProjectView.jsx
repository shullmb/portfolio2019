import React from 'react';

const ProjectView = ({project}) => {
  return (
    <div>
      <img src={require(`../img/${project.img}`)} alt="" srcset=""/>
      <h3>{project.title}</h3>
      <h4>{project.summary}</h4>
      <p><a href={project.gh}> Source</a></p>
      <p><a href={project.live}>Live</a></p>
    </div>
  )
}

export default ProjectView;