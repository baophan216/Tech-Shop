import { Input } from 'antd'
import React from 'react'

const InputComponent = ({size, placeholder, bordered,  style}) => {
  return (
    <Input
      size={size} 
      placeholder={placeholder} 
      bordered={bordered} 
      style={style}
    />
  )
}

export default InputComponent
