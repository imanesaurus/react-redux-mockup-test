import React from 'react'
import { Input } from './input.styles'

const TextInput = ({ value, onChange, placeholder }) => {
  return (
    <Input value={value} onChange={onChange} placeholder={placeholder} />
  )
}

export default TextInput