import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Input } from 'antd';
import { searchMovie } from '../actions/index';
import { nameMovieReselect } from '../reselect/movie-reselect';
import { createStructuredSelector } from 'reselect';

const { Search } = Input;
const SearchMovies = () => {
  const dispatch = useDispatch();
  const { nameMovie } = useSelector(createStructuredSelector({
    nameMovie: nameMovieReselect
  }));
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    if(keyword === ''){
      setKeyword(nameMovie);
    }
  }, [])

  const changeInput = (event) => {
    const val = event.target.value;
    setKeyword(val);
  }

  const searchMovieByKeyword = (name) => {
    dispatch(searchMovie(name, page));
  }

  return(
    <>
      <Row style={{margin: '20px 0px',}}>
        <Col span={12} offset={6}>
          <Search
            placeholder="Enter movie ..."
            onSearch={val => searchMovieByKeyword(val)}
            enterButton
            onChange={changeInput}
            value={ keyword }
          />
        </Col>
      </Row>
    </>
  )
}
export default React.memo(SearchMovies);