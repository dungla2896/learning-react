import React from 'react';
import { Layout, Menu } from 'antd';
import {
  NavLink,
  useLocation
} from "react-router-dom";
const { Header } = Layout;

const HeaderComponent = () => {
  let location = useLocation();
  let pathName = location.pathname;

  return(
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathName}>
        <Menu.Item key="/home">
          <NavLink to="/home">Home</NavLink>
        </Menu.Item>
        <Menu.Item key="/up-coming">
          <NavLink to="/up-coming">Upcoming</NavLink>
        </Menu.Item>
      </Menu>
    </Header>
  )
}

export default React.memo(HeaderComponent);