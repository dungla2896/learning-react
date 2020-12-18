import React from 'react';
import {Layout} from 'antd';

const {Footer} = Layout;
const FooterComponent = () => {
  return (
    <>
      <Footer>
        <p style={{textAlign: 'center'}}>Copyright © 2020 - RJS2007B</p>
      </Footer>
    </>
  );
}
export default React.memo(FooterComponent);