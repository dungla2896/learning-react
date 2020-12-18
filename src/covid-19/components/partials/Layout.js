import React from 'react';
import { Layout, Row, Col } from 'antd';
import HeaderComponent from './Header';
import FooterComponent from './Footer';

const { Content } = Layout;
const LayoutComponent = (props) => {
  return(
    <Layout>
      <HeaderComponent/>
      <Content>
        <Row>
          <Col span={20} offset={2}>
            {props.children}
          </Col>
        </Row>
      </Content>
      <FooterComponent/>
    </Layout>
  );
}
export default LayoutComponent;