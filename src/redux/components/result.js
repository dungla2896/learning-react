import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ResultComponent = (props) => {
  return (
    <h1>{props.count}</h1>
  )
}
const mapStateToProps = (state) => ({
  count: state.counter.count
});

ResultComponent.propTypes = {
  count: PropTypes.number.isRequired
}
export default connect(mapStateToProps, null)(React.memo(ResultComponent));