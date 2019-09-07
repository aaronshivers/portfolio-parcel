import React from 'react'
import './button.style.scss'

const Button = ({title, link}) => (
  <a className='button' href={link}>{title}</a>
)

export default Button
