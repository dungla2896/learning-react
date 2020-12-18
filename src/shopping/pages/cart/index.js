import React from 'react';
import LayoutComponent from '../../components/layout';
import ListItemsCart from './components/list-cart';

const AppCart = () => {
  return (
    <>
      <LayoutComponent>
        <ListItemsCart />
      </LayoutComponent>
    </>
  )
}
export default React.memo(AppCart);