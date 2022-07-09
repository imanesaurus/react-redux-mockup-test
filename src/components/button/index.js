import React from 'react'
import { ButtonMain } from './button.styles'

const Button = ({ title, onClick, style }) => {
  return (
    <ButtonMain onClick={onClick} style={style}>
        {title}
    </ButtonMain>
  )
}

export default Button