import { Button} from 'antd'
import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import InputComponent from '../InputComponent/InputComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ButtonInputSearch = (props) => {
  const { size, placeholder, texBtn, bordered, backgroundColor= 'white', backgroundcolorInput= 'black' ,colorButton= 'black'} = props
  return (
    <div style={{display: 'flex'}}>
      <InputComponent size={size} 
      placeholder={placeholder} 
      bordered={bordered} 
      style={{backgroundColor: backgroundColor}}/>
      <ButtonComponent 
             size={size} 
             icon={<SearchOutlined style={{color: 'black'}}/>} 
             textBtn={texBtn}
             style={{background: backgroundcolorInput}}
             styleTexBtn ={{color:colorButton}}
      />
    </div>
  )
}

export default ButtonInputSearch
