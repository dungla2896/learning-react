import React from 'react';
//import { connect } from 'react-redux';
import { useSelector } from 'react-redux';


const ResultComponent = () => {
  const result = useSelector(state => state.counter.count);
  return (
    <h1>{result}</h1>
  )
}

// const mapStateToProps = (state) => ({
//   result: state.counter.count
// });

//export default connect(mapStateToProps, null)(React.memo(ResultComponent));
export default React.memo(ResultComponent);