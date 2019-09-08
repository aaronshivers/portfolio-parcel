import React from 'react'
import SectionHeader from '../section-header/section-header.component'
import Project from '../project/project.component'
import { ProjectsSectionOuterContainer, ProjectsSectionInnerContainer } from './projects-section.style'

const projects = [
  {
    title: 'Project',
    subtitle: 'this is a project',
    image: 'https://via.placeholder.com/280x200',
    alt: 'project'
  }, {
    title: 'Project',
    subtitle: 'this is a project',
    image: 'https://via.placeholder.com/280x200',
    alt: 'project'
  }, {
    title: 'Project',
    subtitle: 'this is a project',
    image: 'https://via.placeholder.com/280x200',
    alt: 'project'
  }, {
    title: 'Project',
    subtitle: 'this is a project',
    image: 'https://via.placeholder.com/280x200',
    alt: 'project'
  }, {
    title: 'Project',
    subtitle: 'this is a project',
    image: 'https://via.placeholder.com/280x200',
    alt: 'project'
  }
]

const ProjectsSection = () => (
  <ProjectsSectionOuterContainer>
    <SectionHeader title='Projects' subtitle='these are my projects' />
    <ProjectsSectionInnerContainer>
      {
        projects.map((project, i) => (
          <Project key={i} {...project} />
        ))
      }
    </ProjectsSectionInnerContainer>
  </ProjectsSectionOuterContainer>
)

export default ProjectsSection