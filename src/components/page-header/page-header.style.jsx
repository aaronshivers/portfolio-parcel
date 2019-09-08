import styled from 'styled-components'
import Image from '../../assets/bg.webp'

export const PageHeaderContainer = styled.header`
  background-image: radial-gradient(rgba(0, 0, 0, 0.6), transparent),
    url(${Image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  height: 100vh;
  overflow: hidden;
`
