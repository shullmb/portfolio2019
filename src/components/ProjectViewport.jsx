import React from 'react';
import ProjectViewSummary from './ProjectViewSummary';
import ProjectView from './ProjectView';


const ProjectViewport = ({currentView}) => {
 
    return (
      <div id="ProjectViewport">
        {
          currentView.length ? <ProjectViewSummary projects={currentView} /> 
                              : <ProjectView project={currentView} />
        }
      </div>
  )
}

export default ProjectViewport;