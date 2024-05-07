import React from 'react'
import HeaderComponents from '../HeaderCompents/HeaderComponents'


const DefaultComponets = ({children}) => {
  return (
    <div>
       <HeaderComponents />
       {children}
    </div>
  )
}

export default DefaultComponets
