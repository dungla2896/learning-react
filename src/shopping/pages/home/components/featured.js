import React from 'react';
import { Row, Col, Button } from 'antd';
import ListItems from './list-items';
import * as reselect from '../reselect/product-reselect';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

const FeaturedProducts = () => {
  const dispatch = useDispatch();
  const { loading, featured } = useSelector(createStructuredSelector({
    loading: reselect.loadingSelector,
    featured: reselect.getFeaturedSelector
  }));
  //console.log(localStorage);
  return (
    <>
      <Row style={{margin: '12px 0px'}}>
        <Col span={24}>
          <h2 style={{textAlign: 'center', margin: '8px 0px'}}>Featured Products</h2>
          <Button type="primary" style={{textAlign: 'center'}} onClick={() => dispatch(push('/cart'))}>Go to cart</Button>
        </Col>
      </Row>
      <ListItems
        loading={loading}
        data={featured}
      />
    </>
  )
}
export default React.memo(FeaturedProducts);