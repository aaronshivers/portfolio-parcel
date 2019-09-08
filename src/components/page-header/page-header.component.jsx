import React from 'react'
import Video from '../video/video.component'
import PageHeaderTextContainer from '../page-header-text/page-header-text.component'
import { PageHeaderContainer } from './page-header.style'

const PageHeader = () => (
  <PageHeaderContainer>
    <Video />
    <PageHeaderTextContainer />
  </PageHeaderContainer>
)

export default PageHeader
