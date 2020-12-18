import React from 'react';
import { Row, Col } from 'antd';
import ListItems from './list-items';
import * as reselect from '../reselect/product-reselect';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';

const TopSellingProducts = () => {
  const { loading, topSelling } = useSelector(createStructuredSelector({
    loading: reselect.loadingSelector,
    topSelling: reselect.getTopSellingSelector
  }));

  return (
    <>
      <Row style={{margin: '12px 0px'}}>
        <Col span={24}>
          <h2 style={{textAlign: 'center', margin: '8px 0px'}}>Top Selling Products</h2>
        </Col>
      </Row>
      <ListItems
        loading={loading}
        data={topSelling}
      />
    </>
  )
}
export default React.memo(TopSellingProducts);