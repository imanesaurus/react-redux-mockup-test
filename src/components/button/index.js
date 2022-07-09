import React from 'react'
import { ButtonMain } from './button.styles'

const Button = ({ title, onClick, style, ...props }) => {
  return (
    <ButtonMain onClick={onClick} style={style} {...props}>
        {title}
    </ButtonMain>
  )
}

export default Button