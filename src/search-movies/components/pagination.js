import React from 'react';
import {Row, Col, Pagination } from 'antd';
import { searchMovie } from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as reselect from '../reselect/movie-reselect';

const PaginationPage = () => {
  const dispatch = useDispatch();
  const { nameMovie, totalItem, currentPage } = useSelector(createStructuredSelector({
    nameMovie: reselect.nameMovieReselect,
    totalItem: reselect.totalResults,
    currentPage: reselect.getCurrentPage
  }));
  const changePage = (key, page) => {
    dispatch(searchMovie(key, page));
  }

  return (
    <>
      <Row style={{marginTop: '20px', marginBottom: '20px', textAlign: 'center'}}>
        <Col span={24}>
          <Pagination
            current={currentPage}
            total={totalItem}
            pageSize={20}
            onChange={(pages) => changePage(nameMovie, pages)}
          />
        </Col>
      </Row>
    </>
  )
}
export default React.memo(PaginationPage);