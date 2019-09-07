import React from 'react'
import SectionHeader from '../section-header/section-header.component'
import Certification from '../certification/certification.component'

const certifications = [
  {
    title: 'Certification',
    link: 'https://via.placeholder.com/280x200'
  }, {
    title: 'Certification',
    link: 'https://via.placeholder.com/280x200'
  }, {
    title: 'Certification',
    link: 'https://via.placeholder.com/280x200'
  }, {
    title: 'Certification',
    link: 'https://via.placeholder.com/280x200'
  }, {
    title: 'Certification',
    link: 'https://via.placeholder.com/280x200'
  }
]

const CertificationsSection = () => (
  <section>
    <SectionHeader title='Certifications' subtitle='these are my certifications' />
    {
      certifications.map((certification, i) => (
        <Certification key={i} {...certification} />
      ))
    }
  </section>
)

export default CertificationsSection