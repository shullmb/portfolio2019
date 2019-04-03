import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ProjectView = ({project}) => {
  return (
    <div>
      <img src={require(`../img/${project.img}`)} alt="" />
      <h3>{project.title}</h3>
      <h4>{project.summary}</h4>
      <p>
        {
          project.tech.map( tech => <small className='tech' key={tech}> {tech} </small>)
        }
      </p>
      <p><a rel="noreferrer noopener" target="_blank" href={project.gh}> Source <FontAwesomeIcon icon={['fas','external-link-alt']}  color={'#222'} /> </a></p>
      <p><a rel="noreferrer noopener" target="_blank" href={project.live}>Live <FontAwesomeIcon icon={['fas', 'external-link-alt']}  color={'#222'} /> </a></p>
    </div>
  )
}

export default ProjectView;