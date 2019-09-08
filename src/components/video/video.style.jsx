import styled from 'styled-components'

export const VideoContainer = styled.video`
  position: relative;
  min-width: 100%;
  min-height: 100vh;
  top: 50%;
  left: 50%;
  width: auto;
  height: auto;
  z-index: -100;
  transform: translateX(-50%) translateY(-50%);
`
