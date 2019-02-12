import React from 'react';
import ProjectViewSummary from './ProjectViewSummary';
import ProjectView from './ProjectView';


const ProjectViewport = ({ currentView, setCurrentView}) => {
 
    return (
      <div id="ProjectViewport">
        {
          currentView.length ? <ProjectViewSummary projects={currentView} setCurrentView={setCurrentView}  /> 
                              : <ProjectView project={currentView} />
        }
      </div>
  )
}

export default ProjectViewport;