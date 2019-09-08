import React from 'react'
import HeaderBackground from '../header-background/header-background.component'
import PageHeaderTextContainer from '../page-header-text/page-header-text.component'
import { PageHeaderContainer } from './page-header.style'

const PageHeader = () => (
  <PageHeaderContainer>
    <HeaderBackground />
    <PageHeaderTextContainer />
  </PageHeaderContainer>
)

export default PageHeader
