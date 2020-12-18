import React from 'react';
import SearchMovie from '../components/search';
import ResultMovie from '../components/result';
import PaginationPage from '../components/pagination';

const AppMovie = () => {
  return (
    <>
      <SearchMovie/>
      <ResultMovie/>
      <PaginationPage />
    </>
  )
}
export default React.memo(AppMovie);