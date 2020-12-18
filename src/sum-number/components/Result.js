import React from 'react';
import PropTypes from 'prop-types';

const Result = (props) => {
  return(
    <>
      <h1>{props.total}</h1>
    </>
  );
}
Result.propTypes = {
  total: PropTypes.number
}
export default Result;