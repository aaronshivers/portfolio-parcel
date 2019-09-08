import React from 'react'
import { VideoContainer } from './video.style'
import { Hero } from '../../assets/hero.m4v'

const Video = () => (
  <VideoContainer
    loop
    muted
    autoPlay
    src={'../../assets/hero.m4v'}
    type="video/mp4"
  >
  </VideoContainer>
)

export default Video
