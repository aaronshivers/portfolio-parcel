import React from 'react'
import styled from 'styled-components'
import { ButtonContainer } from './button.style'

const Button = ({title, link}) => (
  <ButtonContainer href={link}>{title}</ButtonContainer>
)

export default Button
