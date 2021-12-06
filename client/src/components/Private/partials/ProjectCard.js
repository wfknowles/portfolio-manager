import React from 'react';
import { addClass, titleize } from '../../../utils/helpers';

function ProjectCard({project}) {

  const getKeys = (obj) => {
    return Object.keys(obj);
  }
  
  return (
    
    <div className="project-wrapper card-wrapper" key={project._id}>
      <div className={addClass('project card', project.status)} style={{background: `url(${project.imageUrl})` }}>
        <div className={addClass('status', project.status)} >
          <div className="row">
            <div className="col-sm-6">
              <h4>{project.title}</h4>
            </div>
            <div className="col-sm-6">
              <div></div>
            </div>
          </div>
        </div>
  
        <div>
          {project.description}
        </div>

        <div>
          {
            getKeys(project.tech).map((t) => (
                <div key={t}>
                    {titleize(t)}
                </div>
            ))
          }
        </div>
      </div>
    </div>

  )
}

export default ProjectCard;