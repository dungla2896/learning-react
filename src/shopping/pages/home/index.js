import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FeaturedProducts from './components/featured';
import LatestProducts from './components/latest';
import TopSellingProducts from './components/top-selling';
import LayoutComponent from '../../components/layout';
//import * as reselect from './reselect/product-reselect';
import * as actions from './actions/index';

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getData());
  },[dispatch]);

  return (
    <>
      <LayoutComponent>
        <FeaturedProducts/>
        <LatestProducts/>
        <TopSellingProducts/>
      </LayoutComponent>
    </>
  )
}
export default React.memo(HomePage);