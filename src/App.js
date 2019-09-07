import React from 'react'
import ProjectsSection from './components/projects-section/projects-section.component'
import CertificationSection from './components/certifications-section/certifications-section.component'
import Button from './components/button/button.component'

const App = () => (
  <>
    <Button title='LinkedIn' link='#' />
    <ProjectsSection />
    <CertificationSection />
  </>
)

export default App
