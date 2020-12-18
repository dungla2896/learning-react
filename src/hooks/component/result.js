import React from 'react';
import PropTypes from 'prop-types';
const Result = (props) => {
  return(
    <>
      <h1>{props.result}</h1>
    </>
  );
}
Result.propTypes = {
  result: PropTypes.number
}
export default React.memo(Result);