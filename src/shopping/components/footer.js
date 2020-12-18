import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;
const FooterComponent = () => {
  return (
    <>
      <Footer style={{ textAlign: 'center' }}>Shopping cart ©2020 Created by T3H-ReactJS</Footer>
    </>
  )
}
export default React.memo(FooterComponent);