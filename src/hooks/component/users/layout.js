import React from 'react';
import PropTypes from 'prop-types';
import HeaderComponent from './header';
import FooterComponent from './footer';
import { Layout, Row, Col } from 'antd';

const { Content } = Layout;
const LayoutComponent = (props) => {
  return(
    <>
      <Layout>
        <HeaderComponent/>
        <Content>
          <Row>
            <Col span={12} offset={6}>{props.children}</Col>
          </Row>
        </Content>
        <FooterComponent/>
      </Layout>
    </>
  )
}
LayoutComponent.propTypes = {
  children: PropTypes.node
}
export default React.memo(LayoutComponent);