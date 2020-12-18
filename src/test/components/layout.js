import React from 'react';
import PropTypes from 'prop-types';
import HeaderComponent from './header';
import FooterComponent from './footer';
import { Layout } from 'antd';
import './layout.css';

const {  Content } = Layout;

const LayoutComponent = (props) => {

  return (
    <Layout>
      <HeaderComponent/>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          {props.children}
        </div>
      </Content>
      <FooterComponent/>
    </Layout>
  )
}
LayoutComponent.propTypes = {
  children: PropTypes.node
}

export default React.memo(LayoutComponent);