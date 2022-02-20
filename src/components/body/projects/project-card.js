import React from 'react'
import './project-card.css';
import ReactTooltip from 'react-tooltip'
function ProjectCard({project}) {
  return <div className='project-card'>
      <div className='project-info'>
          <label className='project-title'>{project.title}</label>
          <div className='project-links'>
              {project.demo&& (
              <a className='project-link' href={project.demo} target="_blank" data-tip="username-admin@gmail.com password-admin123">
                  <div className='link-button'>
                  <i class="fi fi-rr-globe"></i>Demo
                  <ReactTooltip effect="solid" backgroundColor='orange' textColor='black'/>
                  </div>
                  </a>
                )}
                {project.frontend&& (
                   <a className='project-link' href={project.frontend} target="_blank">
                   <div className='link-button'>
                   <i class="devicon-react-original"></i>Frontend
                   </div>
                   </a> 
                )}
                {project.backend&&(
                   <a className='project-link' href={project.backend} target="_blank">
                   <div className='link-button'>
                   <i class="devicon-nodejs-plain"></i>Backend
                   </div>
                   </a>  
                )}
          </div>
          <p>{project.about} </p>
          <p className='project-title'>{project.stack}</p>
          <div className='project-tags'>
              {project.tags.map((tag)=>{
                  return(
                      <label className='tag'>{tag} </label>
                  )
              })}
          </div>
      </div>
      <img src={project.image} className='project-photo'alt=""/>
  </div>
}

export default ProjectCard;