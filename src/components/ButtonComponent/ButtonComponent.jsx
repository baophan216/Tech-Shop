import { Button } from 'antd'
import React from 'react'

const ButtonComponent = ({size,styleButton,styleTexBtn,textBtn, ...rests}) => {
  return (
    <div>
      <Button 
        size={size} 
        {...rests}
        style={styleButton}>
        <span style={styleTexBtn} >{textBtn}</span>
      </Button>
    </div>
  )
}

export default ButtonComponent
