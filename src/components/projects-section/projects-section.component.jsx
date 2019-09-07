import React from 'react'
import SectionHeader from '../section-header/section-header.component'
import Project from '../project/project.component'

const projects = [
  {
    title: 'Project',
    subtitle: 'this is a project',
    image: 'https://via.placeholder.com/280x200'
  }, {
    title: 'Project',
    subtitle: 'this is a project',
    image: 'https://via.placeholder.com/280x200'
  }, {
    title: 'Project',
    subtitle: 'this is a project',
    image: 'https://via.placeholder.com/280x200'
  }, {
    title: 'Project',
    subtitle: 'this is a project',
    image: 'https://via.placeholder.com/280x200'
  }, {
    title: 'Project',
    subtitle: 'this is a project',
    image: 'https://via.placeholder.com/280x200'
  }
]

const ProjectsSection = () => (
  <section className="projects__section">
    <SectionHeader title='Projects' subtitle='these are my projects' />
    {
      projects.map((project, i) => (
        <Project key={i} {...project} />
      ))
    }
  </section>
)

export default ProjectsSection