import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;
const HeaderComponent = () => {
  return (
    <Header>
      <h1 style={{color: 'white', textAlign: 'center'}}>List users</h1>
    </Header>
  )
}
export default React.memo(HeaderComponent);