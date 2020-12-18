import React from 'react';
import MyProvider from './global/my-provider';
import UserProvider from './global/user-provider';
import HeaderComponent from './components/header';
import Content from './components/content';
import FooterComponent from './components/footer';

class ContextApi extends React.Component {
  render() {
    return(
      <UserProvider>
        <HeaderComponent/>
        <MyProvider>
          <Content/>
        </MyProvider>
        <FooterComponent/>
      </UserProvider>
    )
  }
}
export default ContextApi;