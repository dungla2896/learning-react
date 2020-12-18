import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Card, Skeleton } from 'antd';
import { createStructuredSelector } from 'reselect';
import * as reselect from '../reselect/movie-reselect';

const { Meta } = Card;

const ResultMovies = () => {
  //const loading = useSelector(state => state.searchMovie.loading);
  // tham trong useSelector : selector - la 1 ham lay state dc tra ra tu reducer trong store
  //const movies = useSelector(state => state.searchMovie.dataMovies);
  const { loading, movies, totalItems } = useSelector(createStructuredSelector({
    loading: reselect.loadingReselect,
    movies: reselect.resultMovieReselect,
    totalItems: reselect.totalResults
  })); 

  if(loading){
    return (
      <Row style={{ padding: '10px'}}>
        <Col span={24}>
          <Skeleton active />
        </Col>
      </Row>
    )
  }

  return (
    <>
      <Row style={{ padding: '10px'}}>
        { movies ? movies.map((item, index) => (
          <Col span={4} key={index}>
            <Card
              style={{width: '200', marginRight: '8px', marginBottom: '8px'}}
              hoverable
              cover={<img alt={item.title} src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} />}
            >
              <Meta title={item.title} />
            </Card>
          </Col>
        )) : null}
      </Row>
    </>
  )
}
export default React.memo(ResultMovies);