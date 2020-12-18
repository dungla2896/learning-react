import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;
const HeaderComponent = () => {
  return (
    <Header>
      <div className="my-header">
        <h1 style={{color: 'white', textAlign:'center'}}>Thong tin dich benh covid 19</h1>
      </div>
    </Header>
  )
}
export default HeaderComponent;