import React from 'react'
import { ProjectContainer } from './project.style'

const Project = ({title, subtitle, image, alt}) => (
  <ProjectContainer>
    
    <header className="project__header">
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </header>

    <div className="project__body">
      <img className="project__image" src={image} alt={alt} />
    </div>

  </ProjectContainer>
)

export default Project
