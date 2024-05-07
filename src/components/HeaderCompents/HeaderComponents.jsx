import { Col} from 'antd'
import React from 'react'
import { WrapperAccount, WrapperHeader, WrapperTextHeader } from './style'
import {UserOutlined, CaretDownOutlined, ShoppingOutlined} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonSearch/ButtonInputSearch';

const HeaderComponents = () => {
  return (
    <div>
     <WrapperHeader gutter= {16}>
      <Col span={6}>
        <WrapperTextHeader>TECHSHOP</WrapperTextHeader>
      </Col>
      <Col span={12}>
      <ButtonInputSearch
      placeholder="Sản Phẩm cần tìm"
      texBtn = "Tìm Kiếm"
      size="large"
      />
      </Col>
      <Col span={6} style={{display:'flex', gap:'20px', alignItems: 'center', justifyContent: 'space-between'}}>
        <WrapperAccount>
         <UserOutlined style={{fontSize: '30px'}}/>
          <div>
            <span style={{fontSize: '12px'}}>Đăng Nhập-Đăng Ký</span>
            <div>
             <span style={{fontSize: '12px'}}>Tài Khoản</span>
             <CaretDownOutlined />
            </div>
          </div>
        </WrapperAccount>
        <div style={{display: 'flex', alignItems: 'center'}}>
         <ShoppingOutlined style={{fontSize: '30px'}}/>
         <span style={{fontSize: '12px'}}>Giỏ Hàng</span>
        </div>
      </Col>
     </WrapperHeader>
    </div>
  )
}

export default HeaderComponents
