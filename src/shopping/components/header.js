import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as reselect from '../pages/cart/reselect/cart-reselect';
import { getUsername }  from '../services/login_service';
import { logoutRequest } from '../pages/login/actions/index';

const { Header } = Layout;

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const { totalItems } = useSelector(createStructuredSelector({
    totalItems: reselect.getCountItems
  }));
  const token = useSelector(state => state.auth.token);
  const user = getUsername(token)
  const { pathname } = useLocation();
  const logoutUser = () => {
    dispatch(logoutRequest());
  }
  return (
    <>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathname}>
          <Menu.Item key="/home">
            <NavLink to="/home">Home</NavLink>
          </Menu.Item>
          <Menu.Item key="/cart">
            <NavLink to="/cart">Cart ({totalItems})</NavLink>
          </Menu.Item>
          <Menu.Item>
            Hi: { user }
          </Menu.Item>
          <Menu.Item key="/login">
            <NavLink to="/login">Login</NavLink>
          </Menu.Item>
          <Menu.Item>
            <Button onClick={() => logoutUser()}>Logout</Button>
          </Menu.Item>
        </Menu>
      </Header>
    </>
  )
}
export default React.memo(HeaderComponent);