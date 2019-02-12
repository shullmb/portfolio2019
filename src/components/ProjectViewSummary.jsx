import React from 'react';

const ProjectViewSummary = ({projects, setCurrentView}) => {
  const summary = projects.map((project,i) => {
    return (
      <div key={"project" + i} onClick={ () => setCurrentView(project)}>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
      </div>
    )
  })

  return (
    <div>
      {summary}
    </div>
  )
}

export default ProjectViewSummary;