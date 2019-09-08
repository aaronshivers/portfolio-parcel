import styled from 'styled-components'
import Image from '../../assets/bg.webp'

export const PageHeaderContainer = styled.header`
  background-image: radial-gradient(black, transparent),
    url(${Image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  height: 100vh;
  overflow: hidden;
`
