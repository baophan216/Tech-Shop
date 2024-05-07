import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperTypeProduct } from './style'

const HomePage = () => {
  const arr=['Điện Thoại', 'Máy tính', 'Desktop']
  return (
    <div style={{padding: '0 120px'}}>
      <WrapperTypeProduct>
      {arr.map((item, index) => {
        return <TypeProduct key={item} name={item}/>
      })}
      </WrapperTypeProduct>
      HomePage
    </div>
  )
}

export default HomePage
