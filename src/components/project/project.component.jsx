import React from 'react'

const Project = ({title, subtitle, image}) => (
  <div className="project">
    
    <header className="project__header">
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </header>

    <div className="project__body">
      <img className="project__image" src={image} />
    </div>

  </div>
)

export default Project
