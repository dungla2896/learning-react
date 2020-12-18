import React from 'react';
import LayoutComponent from '../components/layout';

const UpcomingComponent = () => {
  return (
    <LayoutComponent>
      <h1>This is upcoming page</h1>
    </LayoutComponent>
  )
}

export default React.memo(UpcomingComponent);