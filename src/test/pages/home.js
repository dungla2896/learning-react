import React from 'react';
import LayoutComponent from '../components/layout';

const HomeComponent = () => {
  return (
    <LayoutComponent>
      <h1>This is home page</h1>
    </LayoutComponent>
  )
}

export default React.memo(HomeComponent);