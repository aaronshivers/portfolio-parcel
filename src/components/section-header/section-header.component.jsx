import React from 'react'
// import './section-header.style.css'

const SectionHeader = ({title, subtitle}) => (    
  <header>
    <h2>{title}</h2>
    <span>{subtitle}</span>
  </header>
)

export default SectionHeader
