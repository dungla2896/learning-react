import React from 'react';
import LayoutComponent from './component/users/layout';
import ContentUser from './component/users/content';

const ListUsers = () => {
  return (
    <LayoutComponent>
      <ContentUser/>
    </LayoutComponent>
  )
}
export default React.memo(ListUsers);