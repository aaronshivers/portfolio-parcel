import React from 'react'
import Button from '../button/button.component'
import { PageHeaderTextContainer } from '../page-header-text/page-header-text.style'

const PageHeaderText = () => (
  <PageHeaderTextContainer>
    <h1>Aaron Shivers</h1>
    <div>
      <p>Web Developer</p>
    </div>
    <div>
      <Button title='LinkedIn' link='https://www.linkedin.com/in/aaron-shivers/' />
      <Button title='GitHub' link='https://github.com/aaronshivers' />
    </div>
  </PageHeaderTextContainer>
)

export default PageHeaderText
