import React from 'react'
import ProjectsSection from '../projects-section/projects-section.component'
import CertificationSection from '../certifications-section/certifications-section.component'
import Button from '../button/button.component'
import { MainContainer } from './main.style'


const Main = () => (
  <MainContainer>
    <Button title='LinkedIn' link='#' />
    <ProjectsSection />
    <CertificationSection />
  </MainContainer>
)

export default Main
